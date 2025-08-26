import { SxProps, Theme } from "@mui/material/styles";
import { keyframes, alpha } from "@mui/material/styles";

// Keyframe animations
export const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const balanceCardStyles: SxProps<Theme> = {
  bgcolor: alpha("#ffffff", 0.02),
  backdropFilter: "blur(20px)",
  border: "1px solid",
  borderColor: alpha("#ffffff", 0.1),
  borderRadius: 3,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "100%",
  "&:hover": {
    borderColor: alpha("#667eea", 0.3),
    animation: `${glow} 2s infinite`,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    background: "linear-gradient(90deg, #667eea, #764ba2, #667eea)",
    backgroundSize: "200% 100%",
    animation: `${shimmer} 3s infinite`,
  },
};

export const balanceCardContentStyles: SxProps<Theme> = {
  p: { xs: 1.5, md: 2 },
  textAlign: "center",
};

export const balanceTitleStyles: SxProps<Theme> = {
  fontSize: { xs: "1rem", md: "1.25rem" },
};

export const balanceAmountStyles: SxProps<Theme> = {
  fontWeight: 700,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  mb: 1,
  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
};

export const balanceSymbolStyles: SxProps<Theme> = {
  fontSize: { xs: "0.875rem", md: "1.25rem" },
};

export const refreshButtonStyles: SxProps<Theme> = {
  borderRadius: 25,
  px: 2,
  py: 1,
  fontSize: "0.8125rem",
  borderColor: alpha("#ffffff", 0.2),
  color: "text.secondary",
  "&:hover": {
    borderColor: "#667eea",
    color: "#667eea",
    bgcolor: alpha("#667eea", 0.04),
    transform: "translateY(-2px)",
  },
};
