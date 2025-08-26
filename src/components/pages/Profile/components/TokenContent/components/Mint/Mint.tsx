"use client";

import { useState } from "react";
import { AddCircle as AddCircleIcon } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grow,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useToken } from "@/context/token";
import { useWeb3 } from "@/context/web3";

const Mint = () => {
  const { address } = useWeb3();
  const { mint, isMintPending } = useToken();
  const [mintAmount, setMintAmount] = useState("");

  const handleMint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !mintAmount) return;

    mint(address, mintAmount);
    setMintAmount("");
  };

  return (
    <Grow in timeout={1600}>
      <Card
        sx={{
          bgcolor: alpha("#ffffff", 0.02),
          backdropFilter: "blur(20px)",
          border: "1px solid",
          borderColor: alpha("#ffffff", 0.1),
          borderRadius: 3,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "100%",
          "&:hover": {
            borderColor: alpha("#11998e", 0.3),
            boxShadow: `0 20px 40px ${alpha("#11998e", 0.1)}`,
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
          <Box display="flex" alignItems="center" mb={2}>
            <AddCircleIcon sx={{ mr: 1, color: "#11998e", fontSize: "1rem" }} />
            <Typography
              variant="h6"
              fontWeight={400}
              sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
            >
              Mint Tokens
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleMint}>
            <TextField
              fullWidth
              label="Amount to Mint"
              type="number"
              placeholder="0"
              value={mintAmount}
              onChange={(e) => {
                const value = e.target.value;
                // Only allow integers (no decimals)
                if (value === "" || /^\d+$/.test(value)) {
                  setMintAmount(value);
                }
              }}
              inputProps={{
                step: 1,
                min: 0,
              }}
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 6,
                },
              }}
            />
            <AnimatedButton
              type="submit"
              fullWidth
              variant="outlined"
              iconComponent={
                isMintPending ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <AddCircleIcon />
                )
              }
              disabled={isMintPending}
            >
              {isMintPending ? "Processing..." : "Mint to My Wallet"}
            </AnimatedButton>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default Mint;
