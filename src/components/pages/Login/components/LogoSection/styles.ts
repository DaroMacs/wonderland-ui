import { SxProps, Theme } from "@mui/material/styles";

export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mb: 4,
  gap: 2,
};

export const logoImageStyles: SxProps<Theme> = {
  width: 80,
  height: 80,
  borderRadius: "16px",
  objectFit: "contain",
  border: "2px solid",
  borderColor: "primary.main",
  boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
};

export const logoNameStyles: SxProps<Theme> = {
  height: 20,
  objectFit: "contain",
  opacity: 0.9,
};
