import {
  Bolt as FastIcon,
  Security as SecureIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import {
  featuresContainerStyles,
  featureItemStyles,
  featureIconStyles,
  featureTextStyles,
} from "./styles";

const FeaturesList = () => (
  <Box sx={featuresContainerStyles}>
    <Box sx={featureItemStyles}>
      <SecureIcon sx={featureIconStyles} />
      <Typography variant="body2" sx={featureTextStyles}>
        Secure
      </Typography>
    </Box>

    <Box sx={featureItemStyles}>
      <FastIcon sx={featureIconStyles} />
      <Typography variant="body2" sx={featureTextStyles}>
        Fast
      </Typography>
    </Box>

    <Box sx={featureItemStyles}>
      <VerifiedIcon sx={featureIconStyles} />
      <Typography variant="body2" sx={featureTextStyles}>
        Verified
      </Typography>
    </Box>
  </Box>
);

export default FeaturesList;
