"use client";
import { useState, ReactNode } from "react";
import { TokenContext, TokenType } from "./TokenContext";
import useDAIToken from "@/hooks/useDAIToken";
import useUSDCToken from "@/hooks/useUSDCToken";

interface TokenProviderProps {
  children: ReactNode;
}

export function TokenProvider({ children }: TokenProviderProps) {
  const [activeToken, setActiveToken] = useState<TokenType>("dai");

  // Use the appropriate hook based on active token
  const daiToken = useDAIToken();
  const usdcToken = useUSDCToken();

  const tokenData = activeToken === "dai" ? daiToken : usdcToken;

  return (
    <TokenContext.Provider
      value={{
        activeToken,
        setActiveToken,
        ...tokenData,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}
