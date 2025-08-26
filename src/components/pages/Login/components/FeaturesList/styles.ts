import { SxProps, Theme } from "@mui/material/styles";

export const featuresContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: 2, sm: 3, md: 4 },
  mt: { xs: 2, sm: 3 },
  opacity: 0.7,
  flexWrap: { xs: "wrap", sm: "nowrap" },
  px: { xs: 1, sm: 0 },
};

export const featureItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 0.5, sm: 1 },
  minWidth: { xs: "auto", sm: "auto" },
  flex: { xs: "1 1 auto", sm: "0 0 auto" },
  justifyContent: { xs: "center", sm: "flex-start" },
};

export const featureIconStyles: SxProps<Theme> = {
  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
  color: "text.secondary",
};

export const featureTextStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.875rem" },
  whiteSpace: "nowrap",
};
