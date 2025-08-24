import { Box, Link, Typography } from "@mui/material";

const LoginFooter = () => (
  <Box sx={{ textAlign: "center", mt: 2 }}>
    <Typography variant="body2" sx={{ color: "text.disabled" }}>
      Don&apos;t have an account? <Link href="#">Sign up here</Link>
    </Typography>
  </Box>
);

export default LoginFooter;
