"use client";
import { useMemo, type ReactNode } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";
import { Web3Context } from "./Web3Context";
import { LOGIN } from "@/constants/routes";

const Web3Provider = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();
  const router = useRouter();

  const value = useMemo(
    () => ({
      isConnected,
      address,
      disconnect,
      openConnectModal,
      handleLogout: () => {
        disconnect();
        router.push(LOGIN);
      },
    }),
    [isConnected, address, disconnect, openConnectModal, router],
  );

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3Provider;
