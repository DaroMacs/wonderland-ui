"use client";
import { createContext } from "react";
import { type Address } from "viem";

export interface IWeb3Context {
  isConnected: boolean;
  address: Address | undefined;
  disconnect: () => void;
  openConnectModal: (() => void) | undefined;
}

export const Web3Context = createContext<IWeb3Context | undefined>(undefined);
