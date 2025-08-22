"use client";

import { Box, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Wallet Connection
      </Typography>

      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Typography>

      <ConnectButton />
    </Box>
  );
}
