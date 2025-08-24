"use client";

import { FloatingNavbar } from "@/components/elements/FloatingNavbar";
import { Box, Typography } from "@mui/material";

const Profile = () => (
  <Box>
    <FloatingNavbar />

    <Box
      sx={{
        marginTop: "100px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "white", fontWeight: 600 }}
      >
        Welcome to your profile!
      </Typography>
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "1.1rem",
          lineHeight: 1.6,
        }}
      >
        This is where you can manage your account and view your data. Your
        wallet information is displayed in the floating navbar above.
      </Typography>
    </Box>
  </Box>
);

export default Profile;
