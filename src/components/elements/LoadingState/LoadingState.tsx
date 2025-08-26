"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import {
  loadingContainerStyles,
  circularProgressStyles,
  titleStyles,
  descriptionStyles,
} from "./styles";

const LoadingState = ({ tokenName }: { tokenName: string }) => {
  return (
    <Box sx={loadingContainerStyles}>
      <CircularProgress size={60} sx={circularProgressStyles} />
      <Typography variant="h6" sx={titleStyles}>
        Loading {tokenName} contract...
      </Typography>
      <Typography variant="body2" sx={descriptionStyles}>
        Connecting to blockchain and fetching token data
      </Typography>
    </Box>
  );
};

export default LoadingState;
