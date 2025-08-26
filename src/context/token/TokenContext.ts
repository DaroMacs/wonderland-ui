"use client";
import { createContext } from "react";
import { TokenInfo, TransferEvent, ApprovalEvent } from "@/hooks/useDAIToken";

export type TokenType = "dai" | "usdc";
export type TokenEvent = TransferEvent | ApprovalEvent;

export interface ITokenContext {
  // Token selection
  activeToken: TokenType;
  setActiveToken: (token: TokenType) => void;

  // Token data
  tokenInfo: TokenInfo | null;
  balance: bigint;
  formattedBalance: string;
  transfer: (to: `0x${string}`, amount: string) => void;
  mint: (to: `0x${string}`, amount: string) => void;
  approve: (to: `0x${string}`, amount: string) => void;
  isTransferPending: boolean;
  isMintPending: boolean;
  isApprovePending: boolean;
  events: TokenEvent[];
  isLoadingEvents: boolean;
  eventsError: string | null;
  refetchEvents: () => void;
  checkAllowance: (
    owner: `0x${string}`,
    spender: `0x${string}`,
  ) => Promise<bigint>;
  getAllowance: (owner: `0x${string}`, spender: `0x${string}`) => bigint;
  getFormattedAllowance: (
    owner: `0x${string}`,
    spender: `0x${string}`,
  ) => string;
  formatBalance: (amount: bigint) => string;
  parseAmount: (amount: string) => bigint;
  refetchBalance: () => void;
}

export const TokenContext = createContext<ITokenContext | undefined>(undefined);
