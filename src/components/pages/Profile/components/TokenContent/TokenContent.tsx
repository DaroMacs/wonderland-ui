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

const TokenContent = () => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
      gridTemplateRows: {
        xs: "auto auto auto auto auto auto auto",
        md: "1fr 1fr auto",
      },
      gap: 3,
      maxWidth: 1400,
      mx: "auto",
      mb: 25,
      width: "100%",
    }}
  >
    <Balance />
    <TokenInfo />
    <AllowanceChecker />
    <Approve />
    <Transfer />
    <Mint />
    <Box sx={{ gridColumn: { xs: "1", md: "1 / -1" } }}>
      <EventsTable />
    </Box>
  </Box>
);

export default TokenContent;
