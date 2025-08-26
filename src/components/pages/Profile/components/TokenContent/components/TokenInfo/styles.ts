import { SxProps, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export const tokenInfoCardStyles: SxProps<Theme> = {
  bgcolor: alpha("#ffffff", 0.02),
  backdropFilter: "blur(20px)",
  border: "1px solid",
  borderColor: alpha("#ffffff", 0.1),
  borderRadius: 3,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    borderColor: alpha("#667eea", 0.3),
    boxShadow: `0 20px 40px ${alpha("#667eea", 0.1)}`,
    transform: "translateY(-2px)",
  },
};

export const tokenInfoCardContentStyles: SxProps<Theme> = {
  p: { xs: 1.5, md: 2 },
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

export const tokenInfoHeaderStyles: SxProps<Theme> = {
  fontSize: { xs: "1rem", md: "1.25rem" },
};

export const tokenInfoIconStyles: SxProps<Theme> = {
  mr: 1,
  color: "#667eea",
  fontSize: "1rem",
};

export const tokenInfoGridStyles: SxProps<Theme> = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: 1,
  flex: 1,
  minHeight: 80,
};

export const tokenInfoPaperStyles: SxProps<Theme> = {
  p: 1.5,
  textAlign: "center",
  bgcolor: alpha("#ffffff", 0.02),
  border: "1px solid",
  borderColor: alpha("#ffffff", 0.05),
  borderRadius: 2,
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  minHeight: 40,
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-1px)",
    boxShadow: `0 8px 20px ${alpha("#000000", 0.15)}`,
  },
};

export const tokenInfoLabelStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "0.75rem",
  fontWeight: 500,
  mb: 0.5,
};

export const tokenInfoValueStyles: SxProps<Theme> = {
  wordBreak: "break-word",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "0.875rem",
};

export const tokenInfoValueFullWidthStyles: SxProps<Theme> = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100%",
  fontSize: "0.875rem",
};
