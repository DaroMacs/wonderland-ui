import { Box, Typography } from "@mui/material";
import AnnouncementBadge from "../AnnouncementBadge";

const LoginHeader = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 4, "& > *": { mb: 3 } }}>
      <AnnouncementBadge />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          "& .gradient-text": {
            background:
              "linear-gradient(to right, rgb(98, 92, 191), rgb(197, 95, 163), rgb(252, 204, 80))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
        }}
      >
        Connect to a<br />
        <span className="gradient-text">World of Wond3rs</span>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          lineHeight: 1.6,
          px: 2,
          marginTop: "20px",
        }}
      >
        Access your dashboard and verify on-chain data with ease. No complex
        setup required.
      </Typography>
    </Box>
  );
};

export default LoginHeader;
