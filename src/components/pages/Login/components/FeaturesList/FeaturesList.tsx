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
      gap: { xs: 2, sm: 3, md: 4 },
      mt: { xs: 2, sm: 3 },
      opacity: 0.7,
      flexWrap: { xs: "wrap", sm: "nowrap" },
      px: { xs: 1, sm: 0 },
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.5, sm: 1 },
        minWidth: { xs: "auto", sm: "auto" },
        flex: { xs: "1 1 auto", sm: "0 0 auto" },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <SecureIcon
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          color: "text.secondary",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
          whiteSpace: "nowrap",
        }}
      >
        Secure
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.5, sm: 1 },
        minWidth: { xs: "auto", sm: "auto" },
        flex: { xs: "1 1 auto", sm: "0 0 auto" },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <FastIcon
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          color: "text.secondary",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
          whiteSpace: "nowrap",
        }}
      >
        Fast
      </Typography>
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.5, sm: 1 },
        minWidth: { xs: "auto", sm: "auto" },
        flex: { xs: "1 1 auto", sm: "0 0 auto" },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <VerifiedIcon
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          color: "text.secondary",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
          whiteSpace: "nowrap",
        }}
      >
        Verified
      </Typography>
    </Box>
  </Box>
);

export default FeaturesList;
