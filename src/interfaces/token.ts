import { Address } from "viem";

export interface ITokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: bigint;
}

export interface ITransferEvent {
  type: "Transfer";
  from: Address;
  to: Address;
  value: bigint;
  formattedValue: string;
  transactionHash: string;
  blockNumber: bigint;
}

export interface IApprovalEvent {
  type: "Approval";
  owner: Address;
  spender: Address;
  value: bigint;
  formattedValue: string;
  transactionHash: string;
  blockNumber: bigint;
}

export type TTokenEvent = ITransferEvent | IApprovalEvent;
