"use client";

import {
  AccountBalanceWallet,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FeaturesList from "../FeaturesList";
import LogoSection from "../LogoSection";
import {
  formWrapperStyles,
  cardStyles,
  cardHeaderStyles,
  headerTextStyles,
  cardContentStyles,
  formContainerStyles,
} from "./styles";
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
    <Box sx={formWrapperStyles}>
      <Card sx={cardStyles}>
        {/* Card Header */}
        <Box sx={cardHeaderStyles}>
          <Typography variant="body2" sx={headerTextStyles}>
            Sign in to your account
          </Typography>
        </Box>

        <CardContent sx={cardContentStyles}>
          <Box component="form" sx={formContainerStyles}>
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
