import { CampaignOutlined as MegaphoneIcon } from "@mui/icons-material";
import { Box, Chip } from "@mui/material";

const AnnouncementBadge = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <Chip
      icon={<MegaphoneIcon sx={{ fontSize: "12px !important" }} />}
      label="Welcome to Wonderland: Connect to continue"
      size="small"
      color="primary"
      variant="outlined"
      sx={{
        fontSize: "0.75rem",
        height: "auto",
        py: 0.5,
        px: 1.5,
      }}
    />
  </Box>
);

export default AnnouncementBadge;
