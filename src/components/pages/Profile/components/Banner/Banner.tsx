"use client";

import type React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  bannerContainerStyles,
  bannerContentStyles,
  bannerTextContainerStyles,
  bannerTitleStyles,
  bannerSubtitleStyles,
  bannerButtonStyles,
} from "./styles";

const BridgeBanner = () => (
  <Box sx={bannerContainerStyles}>
    <Box sx={bannerContentStyles}>
      <Box sx={bannerTextContainerStyles}>
        <Typography variant="h6" sx={bannerTitleStyles}>
          Interact with Wonderland smart contracts.
        </Typography>
        <Typography variant="body2" sx={bannerSubtitleStyles}>
          - fast and seamless -
        </Typography>
      </Box>

      <Button variant="outlined" size="small" sx={bannerButtonStyles}>
        Try it!
      </Button>
    </Box>
  </Box>
);

export default BridgeBanner;
