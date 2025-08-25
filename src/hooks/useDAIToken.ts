"use client";

import { useEffect, useState } from "react";
import { Address, formatUnits, parseUnits } from "viem";
import {
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { TOKEN_ABI, TOKEN_CONTRACT_ADDRESS } from "@/contracts/ADI/ADI";

export interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
}

const useDAIToken = () => {
  const { address } = useAccount();
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
  const [balance, setBalance] = useState<bigint>(0n);

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

  // Wait for transaction receipts
  const { isLoading: isTransferConfirming } = useWaitForTransactionReceipt({
    hash: transferHash,
  });

  const { isLoading: isMintConfirming } = useWaitForTransactionReceipt({
    hash: mintHash,
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
  const formatBalance = (amount: bigint): string => {
    if (!tokenInfo) return "0";

    // This contract has a bug: it returns raw values instead of scaled values
    // Normal ERC20: 100 tokens = 100000000000000000000 (100 + 18 zeros)
    // This contract: 100 tokens = 100 (wrong implementation)
    // So we format with 0 decimals instead of the reported 18
    return formatUnits(amount, 0);
  };

  const parseAmount = (amount: string): bigint => {
    if (!tokenInfo) return 0n;
    // Since this contract doesn't scale values properly,
    // we parse with 0 decimals instead of the reported 18
    return parseUnits(amount, 0);
  };

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

  return {
    // Token info
    tokenInfo,
    balance,
    formattedBalance: formatBalance(balance),

    // Contract interactions
    transfer,
    mint,

    // Transaction states
    isTransferPending: isTransferPending || isTransferConfirming,
    isMintPending: isMintPending || isMintConfirming,

    // Utility functions
    formatBalance,
    parseAmount,
    refetchBalance,
  };
};

export default useDAIToken;
