import { Box, Typography } from "@mui/material";
import AnnouncementBadge from "../AnnouncementBadge";
import { headerContainerStyles, headerTextStyles } from "./styles";

const LoginHeader = () => (
  <Box sx={headerContainerStyles}>
    <AnnouncementBadge />

    <Typography variant="body1" sx={headerTextStyles}>
      Access your profile and verify on-chain data with ease. No complex setup
      required.
    </Typography>
  </Box>
);

export default LoginHeader;
