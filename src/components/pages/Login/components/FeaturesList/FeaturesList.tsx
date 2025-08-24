import {
  Bolt as FastIcon,
  Security as SecureIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const FeaturesList = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
      mt: 3,
      opacity: 0.7,
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <SecureIcon sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.875rem" }}
      >
        Secure
      </Typography>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <FastIcon sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.875rem" }}
      >
        Fast
      </Typography>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <VerifiedIcon sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "0.875rem" }}
      >
        Verified
      </Typography>
    </Box>
  </Box>
);

export default FeaturesList;
