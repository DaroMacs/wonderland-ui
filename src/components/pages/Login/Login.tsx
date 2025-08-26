"use client";

import { Box } from "@mui/material";
import { LoginFooter, LoginForm, LoginHeader } from "./components";
import { loginContainerStyles, loginContentStyles } from "./styles";

const Login = () => (
  <Box sx={loginContainerStyles}>
    <Box sx={loginContentStyles}>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </Box>
  </Box>
);

export default Login;
