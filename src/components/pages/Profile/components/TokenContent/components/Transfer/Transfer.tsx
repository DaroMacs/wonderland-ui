"use client";

import { useState } from "react";
import { Send as SendIcon } from "@mui/icons-material";
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
import { Address } from "viem";
import AnimatedButton from "@/components/ui/AnimatedButton";
import useDAIToken from "@/hooks/useDAIToken";

interface TransferProps {
  timeout?: number;
}

const Transfer = ({ timeout = 1500 }: TransferProps) => {
  const { transfer, isTransferPending } = useDAIToken();
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferTo || !transferAmount) return;

    transfer(transferTo as Address, transferAmount);
    setTransferTo("");
    setTransferAmount("");
  };

  return (
    <Grow in timeout={timeout}>
      <Card
        sx={{
          bgcolor: alpha("#ffffff", 0.02),
          backdropFilter: "blur(20px)",
          border: "1px solid",
          borderColor: alpha("#ffffff", 0.1),
          borderRadius: 3,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "fit-content",
          "&:hover": {
            borderColor: alpha("#667eea", 0.3),
            boxShadow: `0 20px 40px ${alpha("#667eea", 0.1)}`,
            transform: "translateY(-2px)",
          },
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <SendIcon sx={{ mr: 1, color: "#667eea", fontSize: "1rem" }} />
            <Typography variant="h6" fontWeight={400}>
              Transfer Tokens
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleTransfer}>
            <TextField
              fullWidth
              label="To Address"
              placeholder="0x..."
              value={transferTo}
              onChange={(e) => setTransferTo(e.target.value)}
              required
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 6,
                },
              }}
            />
            <TextField
              fullWidth
              label="Amount"
              type="number"
              placeholder="0.0"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
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
                isTransferPending ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              disabled={isTransferPending}
            >
              {isTransferPending ? "Processing..." : "Transfer"}
            </AnimatedButton>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default Transfer;
