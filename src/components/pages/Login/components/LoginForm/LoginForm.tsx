import AnimatedButton from "@/ui/AnimatedButton";
import { Box, Card, CardContent, Typography } from "@mui/material";
import LogoSection from "../LogoSection";

const LoginForm = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        borderRadius: "20px",
        padding: "1px",
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
          <Box component="form" sx={{ "& > *": { mb: 3 } }}>
            {/* Logo Section */}
            <LogoSection />

            {/* Connect Wallet Button */}
            <AnimatedButton>Connect Wallet</AnimatedButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
// This component renders the login form with a logo section and a connect wallet button.
