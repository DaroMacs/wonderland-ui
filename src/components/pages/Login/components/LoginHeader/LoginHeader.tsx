import { Box, Typography } from "@mui/material";
import AnnouncementBadge from "../AnnouncementBadge";

const LoginHeader = () => (
  <Box sx={{ textAlign: "center", mb: 4, "& > *": { mb: 3 } }}>
    <AnnouncementBadge />

    <Typography
      variant="body1"
      sx={{
        color: "text.secondary",
        lineHeight: 1.6,
        px: 2,
        marginTop: "20px",
      }}
    >
      Access your dashboard and verify on-chain data with ease. No complex setup
      required.
    </Typography>
  </Box>
);

export default LoginHeader;
