import { Box, Link, Typography } from "@mui/material";

const LoginFooter = () => {
  const handleSignupClick = () => {
    console.log("Signup clicked");
  };

  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography variant="body2" sx={{ color: "text.disabled" }}>
        Don&apos;t have an account?{" "}
        <Link href="#" onClick={handleSignupClick}>
          Sign up here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginFooter;
