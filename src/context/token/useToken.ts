"use client";
import { useContext } from "react";
import { TokenContext, ITokenContext } from "./TokenContext";

export function useToken(): ITokenContext {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
}
