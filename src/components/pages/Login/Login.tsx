"use client";

import { Box } from "@mui/material";
import { LoginFooter, LoginForm, LoginHeader } from "./components";

const Login = () => (
  <Box
    sx={{
      color: "text.primary",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 3,
    }}
  >
    <Box sx={{ width: "100%", maxWidth: 448 }}>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </Box>
  </Box>
);

export default Login;
