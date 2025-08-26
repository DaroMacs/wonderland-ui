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
import ErrorModal from "@/components/ui/ErrorModal";
import { useToken } from "@/context/token";

interface TransferProps {
  timeout?: number;
}

const Transfer = ({ timeout = 1500 }: TransferProps) => {
  const { transfer, isTransferPending, balance, parseAmount } = useToken();
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    message: "",
  });

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferTo || !transferAmount) return;

    // Validate balance
    const parsedAmount = parseAmount(transferAmount);
    if (parsedAmount > balance) {
      setErrorModal({
        open: true,
        title: "Insufficient Balance",
        message: `You don't have enough tokens to transfer ${transferAmount}. Your current balance is ${balance}.`,
      });
      // Clear the form
      setTransferTo("");
      setTransferAmount("");
      return;
    }

    transfer(transferTo as Address, transferAmount);
    setTransferTo("");
    setTransferAmount("");
  };

  const handleCloseErrorModal = () => {
    setErrorModal({ open: false, title: "", message: "" });
  };

  return (
    <>
      <Grow in timeout={timeout}>
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
              borderColor: alpha("#667eea", 0.3),
              boxShadow: `0 20px 40px ${alpha("#667eea", 0.1)}`,
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
            <Box display="flex" alignItems="center" mb={2}>
              <SendIcon sx={{ mr: 1, color: "#38b2ac", fontSize: "1rem" }} />
              <Typography
                variant="h6"
                fontWeight={400}
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
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
                placeholder="0"
                value={transferAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  // Only allow integers (no decimals)
                  if (value === "" || /^\d+$/.test(value)) {
                    setTransferAmount(value);
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

      <ErrorModal
        open={errorModal.open}
        onClose={handleCloseErrorModal}
        title={errorModal.title}
        message={errorModal.message}
      />
    </>
  );
};

export default Transfer;
