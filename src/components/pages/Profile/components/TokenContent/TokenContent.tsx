import { Box } from "@mui/material";
import { Balance, Mint, TokenInfo, Transfer } from "./components";

const TokenContent = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 3,
      maxWidth: 1200,
      mx: "auto",
      width: "100%",
      alignItems: "start",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        height: "100%",
      }}
    >
      <Balance />
      <TokenInfo />
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        height: "100%",
      }}
    >
      <Transfer />
      <Mint />
    </Box>
  </Box>
);

export default TokenContent;
