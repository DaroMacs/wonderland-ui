"use client";

import {
  AccountBalanceWallet,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FeaturesList from "../FeaturesList";
import LogoSection from "../LogoSection";
import { useWeb3 } from "@/context/web3";
import AnimatedButton from "@/ui/AnimatedButton";

const LoginForm = () => {
  const { openConnectModal } = useWeb3();

  const handleConnectWallet = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        borderRadius: "20px",
        padding: "1px",
        boxShadow: "0 4px 12px rgba(6, 182, 212, 0.4)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "linear-gradient(135deg, #0891b2, #2563eb)",
          boxShadow: "0 8px 25px rgba(6, 182, 212, 0.6)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Card
        sx={{
          borderRadius: "19px",
          backgroundColor: "#000000",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "#0a0a0a",
          },
        }}
      >
        {/* Card Header */}
        <Box
          sx={{
            borderBottom: "1px solid",
            borderBottomColor: "divider",
            px: 3,
            py: 1.5,
            transition: "border-color 0.3s ease-in-out",
            "&:hover": {
              borderBottomColor: "rgba(6, 182, 212, 0.3)",
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: "0.875rem",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "rgba(6, 182, 212, 0.8)",
              },
            }}
          >
            Sign in to your account
          </Typography>
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LogoSection />

            <AnimatedButton
              iconComponent={<AccountBalanceWallet />}
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </AnimatedButton>

            <AnimatedButton
              onClick={() => {
                window.open("https://metamask.io/", "_blank");
              }}
              iconComponent={<RocketLaunchOutlined />}
            >
              Get MetaMask
            </AnimatedButton>

            <FeaturesList />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
