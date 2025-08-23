import { Box, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Login = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h2" gutterBottom>
        Wallet Connection
      </Typography>
      <ConnectButton />

      <Typography gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Typography>
    </Box>
  );
};

export default Login;
