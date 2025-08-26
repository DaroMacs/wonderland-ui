"use client";

import { useCallback, useEffect, useState } from "react";
import { Address, formatUnits, parseUnits } from "viem";
import {
  useAccount,
  usePublicClient,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { TOKEN_ABI, TOKEN_CONTRACT_ADDRESS } from "@/contracts/ADI/ADI";
import {
  ITokenInfo,
  TTokenEvent,
  ITransferEvent,
  IApprovalEvent,
} from "@/interfaces/token";

const useDAIToken = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [tokenInfo, setTokenInfo] = useState<ITokenInfo | null>(null);
  const [balance, setBalance] = useState<bigint>(0n);
  const [events, setEvents] = useState<TTokenEvent[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const [eventsError, setEventsError] = useState<string | null>(null);
  const [allowanceQueries, setAllowanceQueries] = useState<Map<string, bigint>>(
    new Map(),
  );

  // Read contract functions
  const { data: name } = useReadContract({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "name",
  });

  const { data: symbol } = useReadContract({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "symbol",
  });

  const { data: decimals } = useReadContract({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "decimals",
  });

  const { data: totalSupply } = useReadContract({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "totalSupply",
  });

  const { data: userBalance, refetch: refetchBalance } = useReadContract({
    address: TOKEN_CONTRACT_ADDRESS,
    abi: TOKEN_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  // Write contract functions
  const {
    writeContract: writeTransfer,
    data: transferHash,
    isPending: isTransferPending,
  } = useWriteContract();

  const {
    writeContract: writeMint,
    data: mintHash,
    isPending: isMintPending,
  } = useWriteContract();

  const {
    writeContract: writeApprove,
    data: approveHash,
    isPending: isApprovePending,
  } = useWriteContract();

  // Wait for transaction receipts
  const { isLoading: isTransferConfirming } = useWaitForTransactionReceipt({
    hash: transferHash,
  });

  const { isLoading: isMintConfirming } = useWaitForTransactionReceipt({
    hash: mintHash,
  });

  const { isLoading: isApproveConfirming } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  // Update token info when data is available
  useEffect(() => {
    if (name && symbol && decimals !== undefined && totalSupply !== undefined) {
      setTokenInfo({
        name,
        symbol,
        decimals,
        totalSupply,
      });
    }
  }, [name, symbol, decimals, totalSupply]);

  // Update balance
  useEffect(() => {
    if (userBalance !== undefined) {
      setBalance(userBalance);
    }
  }, [userBalance]);

  // Helper functions
  const formatBalance = useCallback(
    (amount: bigint): string => {
      if (!tokenInfo) return "0";

      // This contract has a bug: it returns raw values instead of scaled values
      // Normal ERC20: 100 tokens = 100000000000000000000 (100 + 18 zeros)
      // This contract: 100 tokens = 100 (wrong implementation)
      // So we format with 0 decimals instead of the reported 18
      return formatUnits(amount, 0);
    },
    [tokenInfo],
  );

  const parseAmount = (amount: string): bigint => {
    if (!tokenInfo) return 0n;
    // Since this contract doesn't scale values properly,
    // we parse with 0 decimals instead of the reported 18
    return parseUnits(amount, 0);
  };

  // Fetch events function
  const fetchEvents = useCallback(async () => {
    if (!publicClient || !address) return;

    setIsLoadingEvents(true);
    setEventsError(null);

    try {
      const currentBlock = await publicClient.getBlockNumber();
      const fromBlock = currentBlock - 1000n;
      // Fetch Transfer events where user is sender
      const transferFromLogs = await publicClient.getLogs({
        address: TOKEN_CONTRACT_ADDRESS,
        event: {
          type: "event",
          name: "Transfer",
          inputs: [
            { name: "from", type: "address", indexed: true },
            { name: "to", type: "address", indexed: true },
            { name: "value", type: "uint256", indexed: false },
          ],
        },
        args: {
          from: address,
        },
        fromBlock,
        toBlock: currentBlock,
      });

      // Fetch Transfer events where user is receiver
      const transferToLogs = await publicClient.getLogs({
        address: TOKEN_CONTRACT_ADDRESS,
        event: {
          type: "event",
          name: "Transfer",
          inputs: [
            { name: "from", type: "address", indexed: true },
            { name: "to", type: "address", indexed: true },
            { name: "value", type: "uint256", indexed: false },
          ],
        },
        args: {
          to: address,
        },
        fromBlock,
        toBlock: currentBlock,
      });

      // Fetch Approval events where user is owner
      const approvalOwnerLogs = await publicClient.getLogs({
        address: TOKEN_CONTRACT_ADDRESS,
        event: {
          type: "event",
          name: "Approval",
          inputs: [
            { name: "owner", type: "address", indexed: true },
            { name: "spender", type: "address", indexed: true },
            { name: "value", type: "uint256", indexed: false },
          ],
        },
        args: {
          owner: address,
        },
        fromBlock,
        toBlock: currentBlock,
      });

      // Fetch Approval events where user is spender
      const approvalSpenderLogs = await publicClient.getLogs({
        address: TOKEN_CONTRACT_ADDRESS,
        event: {
          type: "event",
          name: "Approval",
          inputs: [
            { name: "owner", type: "address", indexed: true },
            { name: "spender", type: "address", indexed: true },
            { name: "value", type: "uint256", indexed: false },
          ],
        },
        args: {
          spender: address,
        },
        fromBlock,
        toBlock: currentBlock,
      });

      const allTransferLogs = [...transferFromLogs, ...transferToLogs];
      const allApprovalLogs = [...approvalOwnerLogs, ...approvalSpenderLogs];

      const transferEvents: ITransferEvent[] = allTransferLogs.map((log) => ({
        type: "Transfer",
        from: log.args.from!,
        to: log.args.to!,
        value: log.args.value!,
        formattedValue: formatBalance(log.args.value!),
        transactionHash: log.transactionHash,
        blockNumber: log.blockNumber!,
      }));

      const approvalEvents: IApprovalEvent[] = allApprovalLogs.map((log) => ({
        type: "Approval",
        owner: log.args.owner!,
        spender: log.args.spender!,
        value: log.args.value!,
        formattedValue: formatBalance(log.args.value!),
        transactionHash: log.transactionHash,
        blockNumber: log.blockNumber!,
      }));

      // Combine and deduplicate by transaction hash + type + block number
      const allEvents = [...transferEvents, ...approvalEvents];
      const uniqueEvents = allEvents.filter(
        (event, index, self) =>
          index ===
          self.findIndex(
            (e) =>
              e.transactionHash === event.transactionHash &&
              e.type === event.type &&
              e.blockNumber === event.blockNumber,
          ),
      );

      uniqueEvents.sort(
        (a, b) => Number(b.blockNumber) - Number(a.blockNumber),
      );

      setEvents(uniqueEvents);
    } catch (err) {
      console.error("Error fetching events:", err);
      setEventsError("Failed to fetch events");
    } finally {
      setIsLoadingEvents(false);
    }
  }, [publicClient, address, formatBalance]);

  useEffect(() => {
    if (address && publicClient) {
      fetchEvents();
    }
  }, [address, publicClient, fetchEvents]);

  // Contract interaction functions
  const transfer = (to: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);
    writeTransfer({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_ABI,
      functionName: "transfer",
      args: [to, parsedAmount],
    });
  };

  const mint = (to: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);
    writeMint({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_ABI,
      functionName: "mint",
      args: [to, parsedAmount],
    });
  };

  const approve = (to: Address, amount: string) => {
    const parsedAmount = parseAmount(amount);
    writeApprove({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_ABI,
      functionName: "approve",
      args: [to, parsedAmount],
    });
  };

  // Check allowance function
  const checkAllowance = useCallback(
    async (owner: Address, spender: Address): Promise<bigint> => {
      if (!publicClient) return 0n;

      const key = `${owner}-${spender}`;

      try {
        const allowanceResult = await publicClient.readContract({
          address: TOKEN_CONTRACT_ADDRESS,
          abi: TOKEN_ABI,
          functionName: "allowance",
          args: [owner, spender],
        });

        const allowanceValue = allowanceResult as bigint;

        // Cache the result
        setAllowanceQueries((prev) => new Map(prev.set(key, allowanceValue)));

        return allowanceValue;
      } catch (error) {
        console.error("Error checking allowance:", error);
        return 0n;
      }
    },
    [publicClient],
  );

  // Get cached allowance or return 0n
  const getAllowance = useCallback(
    (owner: Address, spender: Address): bigint => {
      const key = `${owner}-${spender}`;
      return allowanceQueries.get(key) || 0n;
    },
    [allowanceQueries],
  );

  // Format allowance using the same logic as balance
  const getFormattedAllowance = useCallback(
    (owner: Address, spender: Address): string => {
      const allowanceValue = getAllowance(owner, spender);
      return formatBalance(allowanceValue);
    },
    [getAllowance, formatBalance],
  );

  return {
    // Token info
    tokenInfo,
    balance,
    formattedBalance: formatBalance(balance),

    // Contract interactions
    transfer,
    mint,
    approve,

    // Transaction states
    isTransferPending: isTransferPending || isTransferConfirming,
    isMintPending: isMintPending || isMintConfirming,
    isApprovePending: isApprovePending || isApproveConfirming,

    // Events
    events,
    isLoadingEvents,
    eventsError,
    refetchEvents: fetchEvents,

    // Allowance functions
    checkAllowance,
    getAllowance,
    getFormattedAllowance,

    // Utility functions
    formatBalance,
    parseAmount,
    refetchBalance,
  };
};

export default useDAIToken;
