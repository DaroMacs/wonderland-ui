"use client";

import { Box } from "@mui/material";
import {
  AllowanceChecker,
  Approve,
  Balance,
  EventsTable,
  Mint,
  TokenInfo,
  Transfer,
} from "./components";
import {
  tokenContentContainerStyles,
  eventsTableContainerStyles,
} from "./styles";
import LoadingState from "@/components/elements/LoadingState";
import { useToken } from "@/context/token";

const TokenContent = () => {
  const { activeToken, tokenInfo } = useToken();
  const tokenName = activeToken === "dai" ? "DAI" : "USDC";

  if (!tokenInfo) {
    return <LoadingState tokenName={tokenName} />;
  }

  return (
    <Box sx={tokenContentContainerStyles}>
      <Balance />
      <TokenInfo />
      <AllowanceChecker />
      <Approve />
      <Transfer />
      <Mint />
      <Box sx={eventsTableContainerStyles}>
        <EventsTable />
      </Box>
    </Box>
  );
};

export default TokenContent;
