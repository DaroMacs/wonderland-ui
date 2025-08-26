"use client";
import { useContext } from "react";
import { TokenContext, ITokenContext } from "./TokenContext";

const useToken = (): ITokenContext => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};

export default useToken;
