"use client";

import { useState } from "react";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grow,
  Typography,
} from "@mui/material";
import {
  balanceCardStyles,
  balanceCardContentStyles,
  balanceTitleStyles,
  balanceAmountStyles,
  balanceSymbolStyles,
  refreshButtonStyles,
} from "./styles";
import { useToken } from "@/context/token";

const Balance = () => {
  const { tokenInfo, formattedBalance, refetchBalance } = useToken();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetchBalance();
    } catch (error) {
      console.error("Error refreshing balance:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <Grow in timeout={1200}>
      <Card sx={balanceCardStyles}>
        <CardContent sx={balanceCardContentStyles}>
          <Typography variant="h6" mb={1} sx={balanceTitleStyles}>
            Your Balance
          </Typography>
          <Typography variant="h3" sx={balanceAmountStyles}>
            {formattedBalance}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            mb={3}
            sx={balanceSymbolStyles}
          >
            {tokenInfo?.symbol}
          </Typography>
          <Button
            variant="outlined"
            startIcon={
              isRefreshing ? <CircularProgress size={16} /> : <RefreshIcon />
            }
            onClick={handleRefresh}
            disabled={isRefreshing}
            sx={refreshButtonStyles}
          >
            Refresh
          </Button>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default Balance;
