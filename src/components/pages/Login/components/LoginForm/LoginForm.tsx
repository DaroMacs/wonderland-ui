import AnimatedButton from "@/ui/AnimatedButton";
import {
  AccountBalanceWallet,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FeaturesList from "../FeaturesList";
import LogoSection from "../LogoSection";

const LoginForm = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      borderRadius: "20px",
      padding: "1px",
      boxShadow: "0 4px 12px rgba(6, 182, 212, 0.4)",
    }}
  >
    <Card
      sx={{
        borderRadius: "19px",
        backgroundColor: "#000000",
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "divider",
          px: 3,
          py: 1.5,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: "0.875rem",
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

          <AnimatedButton iconComponent={<AccountBalanceWallet />}>
            Connect Wallet
          </AnimatedButton>

          <AnimatedButton iconComponent={<RocketLaunchOutlined />}>
            Get MetaMask
          </AnimatedButton>

          <FeaturesList />
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default LoginForm;
