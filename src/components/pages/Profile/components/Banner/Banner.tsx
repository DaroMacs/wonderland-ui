"use client";

import type React from "react";
import { Box, Typography, Button } from "@mui/material";

const BridgeBanner = () => (
  <Box
    sx={{
      background:
        "linear-gradient(135deg, rgba(153, 69, 255, 0.1) 0%, rgba(25, 251, 155, 0.1) 100%)",
      border: "1px solid rgba(153, 69, 255, 0.3)",
      borderRadius: 6,
      py: 0.5,
      px: 2,
      my: 2,
      position: "relative",
      overflow: "hidden",
      backdropFilter: "blur(10px)",
      display: "none",
      "@media (min-width: 768px)": {
        display: "block",
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(153, 69, 255, 0.05) 0%, rgba(25, 251, 155, 0.05) 100%)",
        zIndex: -1,
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(135deg, #9945FF 0%, #19FB9B 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1rem", sm: "1.1rem" },
            whiteSpace: "nowrap",
          }}
        >
          Interact with Wonderland smart contracts.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            display: { xs: "none", sm: "block" },
          }}
        >
          - fast and seamless -
        </Typography>
      </Box>

      <Button
        variant="outlined"
        size="small"
        sx={{
          borderRadius: 8,
        }}
      >
        Try it!
      </Button>
    </Box>
  </Box>
);

export default BridgeBanner;
