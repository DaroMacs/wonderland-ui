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
} from "@mui/material";
import { Address } from "viem";
import {
  transferCardStyles,
  transferCardContentStyles,
  transferHeaderStyles,
  transferIconStyles,
  transferTextFieldStyles,
  transferAmountFieldStyles,
} from "./styles";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ErrorModal from "@/components/ui/ErrorModal";
import { useToken } from "@/context/token";

const Transfer = () => {
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
      <Grow in timeout={1500}>
        <Card sx={transferCardStyles}>
          <CardContent sx={transferCardContentStyles}>
            <Box display="flex" alignItems="center" mb={2}>
              <SendIcon sx={transferIconStyles} />
              <Typography
                variant="h6"
                fontWeight={400}
                sx={transferHeaderStyles}
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
                sx={transferTextFieldStyles}
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
                sx={transferAmountFieldStyles}
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
