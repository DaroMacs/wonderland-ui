"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingState = ({ tokenName }: { tokenName: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        gap: 2,
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <CircularProgress
        size={60}
        sx={{
          color: "#06b6d4",
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
          },
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        Loading {tokenName} contract...
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.6)",
          textAlign: "center",
          maxWidth: "300px",
        }}
      >
        Connecting to blockchain and fetching token data
      </Typography>
    </Box>
  );
};

export default LoadingState;
