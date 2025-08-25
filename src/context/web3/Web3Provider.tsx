"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useMemo, type ReactNode } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { Web3Context } from "./Web3Context";

const Web3Provider = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();

  const value = useMemo(
    () => ({
      isConnected,
      address,
      disconnect,
      openConnectModal,
    }),
    [isConnected, address, disconnect, openConnectModal],
  );

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3Provider;
