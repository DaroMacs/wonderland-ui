import { CampaignOutlined as MegaphoneIcon } from "@mui/icons-material";
import { Box, Chip } from "@mui/material";
import {
  badgeContainerStyles,
  megaphoneIconStyles,
  chipStyles,
} from "./styles";

const AnnouncementBadge = () => (
  <Box sx={badgeContainerStyles}>
    <Chip
      icon={<MegaphoneIcon sx={megaphoneIconStyles} />}
      label="Welcome to Wonderland: Connect to continue"
      size="small"
      color="primary"
      variant="outlined"
      sx={chipStyles}
    />
  </Box>
);

export default AnnouncementBadge;
