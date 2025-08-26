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
  alpha,
  keyframes,
} from "@mui/material";
import useDAIToken from "@/hooks/useDAIToken";

// Keyframe animations
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

interface BalanceProps {
  timeout?: number;
}

const Balance = ({ timeout = 1200 }: BalanceProps) => {
  const { tokenInfo, formattedBalance, refetchBalance } = useDAIToken();
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
    <Grow in timeout={timeout}>
      <Card
        sx={{
          bgcolor: alpha("#ffffff", 0.02),
          backdropFilter: "blur(20px)",
          border: "1px solid",
          borderColor: alpha("#ffffff", 0.1),
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "100%",
          "&:hover": {
            borderColor: alpha("#667eea", 0.3),
            animation: `${glow} 2s infinite`,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #667eea, #764ba2, #667eea)",
            backgroundSize: "200% 100%",
            animation: `${shimmer} 3s infinite`,
          },
        }}
      >
        <CardContent sx={{ p: { xs: 1.5, md: 2 }, textAlign: "center" }}>
          <Typography
            variant="h6"
            mb={1}
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Your Balance
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
            }}
          >
            {formattedBalance}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            mb={3}
            sx={{ fontSize: { xs: "0.875rem", md: "1.25rem" } }}
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
            sx={{
              borderRadius: 25,
              px: 2,
              py: 1,
              fontSize: "0.8125rem",
              borderColor: alpha("#ffffff", 0.2),
              color: "text.secondary",
              "&:hover": {
                borderColor: "#667eea",
                color: "#667eea",
                bgcolor: alpha("#667eea", 0.04),
                transform: "translateY(-2px)",
              },
            }}
          >
            Refresh
          </Button>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default Balance;
