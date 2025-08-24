"use client";

import { LOGIN } from "@/constants/routes";
import { Logout } from "@mui/icons-material";
import { Box, Button, Chip, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";

const Profile = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();

  const handleLogout = () => {
    disconnect();
    router.push(LOGIN);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom>
            Profile
          </Typography>
          {address && (
            <Chip
              label={`${address.slice(0, 6)}...${address.slice(-4)}`}
              variant="outlined"
              sx={{
                borderColor: "#06b6d4",
                color: "#06b6d4",
                fontSize: "0.875rem",
                "& .MuiChip-label": {
                  fontFamily: "monospace",
                },
              }}
            />
          )}
        </Box>
        <Button
          variant="outlined"
          color="error"
          startIcon={<Logout />}
          onClick={handleLogout}
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            borderColor: "#ef4444",
            color: "#ef4444",
            "&:hover": {
              borderColor: "#dc2626",
              backgroundColor: "#dc262610",
            },
          }}
        >
          Logout
        </Button>
      </Box>
      <Typography>
        Welcome to your profile! This is where you can manage your account and
        view your data.
      </Typography>
    </Box>
  );
};

export default Profile;
