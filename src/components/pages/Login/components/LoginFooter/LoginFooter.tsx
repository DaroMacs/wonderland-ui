import { Box, Link, Typography } from "@mui/material";
import { footerContainerStyles, footerTextStyles } from "./styles";

const LoginFooter = () => (
  <Box sx={footerContainerStyles}>
    <Typography variant="body2" sx={footerTextStyles}>
      Don&apos;t have an account?{" "}
      <Link href="https://metamask.io/" target="_blank">
        Sign up here
      </Link>
    </Typography>
  </Box>
);

export default LoginFooter;
