"use client";

import { useState } from "react";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
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

const Approve = () => {
  const { approve, isApprovePending, balance, parseAmount } = useToken();
  const [spenderAddress, setSpenderAddress] = useState("");
  const [approveAmount, setApproveAmount] = useState("");
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    message: "",
  });

  const handleApprove = (e: React.FormEvent) => {
    e.preventDefault();
    if (!spenderAddress || !approveAmount) return;

    // Validate balance
    const parsedAmount = parseAmount(approveAmount);
    if (parsedAmount > balance) {
      setErrorModal({
        open: true,
        title: "Insufficient Balance",
        message: `You don't have enough tokens to approve ${approveAmount}. Your current balance is ${balance}.`,
      });
      // Clear the form
      setSpenderAddress("");
      setApproveAmount("");
      return;
    }

    approve(spenderAddress as Address, approveAmount);
    setSpenderAddress("");
    setApproveAmount("");
  };

  const handleCloseErrorModal = () => {
    setErrorModal({ open: false, title: "", message: "" });
  };

  return (
    <>
      <Grow in timeout={1700}>
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
              borderColor: alpha("#38b2ac", 0.3),
              boxShadow: `0 20px 40px ${alpha("#38b2ac", 0.1)}`,
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
            <Box display="flex" alignItems="center" mb={2}>
              <CheckCircleIcon
                sx={{ mr: 1, color: "#38b2ac", fontSize: "1rem" }}
              />
              <Typography
                variant="h6"
                fontWeight={400}
                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                Approve Tokens
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleApprove}>
              <TextField
                fullWidth
                label="Spender Address"
                placeholder="0x..."
                value={spenderAddress}
                onChange={(e) => setSpenderAddress(e.target.value)}
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
                value={approveAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  // Only allow integers (no decimals)
                  if (value === "" || /^\d+$/.test(value)) {
                    setApproveAmount(value);
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
                  isApprovePending ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <CheckCircleIcon />
                  )
                }
                disabled={isApprovePending}
              >
                {isApprovePending ? "Processing..." : "Approve"}
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

export default Approve;
