import { SxProps, Theme } from "@mui/material/styles";

export const headerContainerStyles: SxProps<Theme> = {
  textAlign: "center",
  mb: 4,
  "& > *": { mb: 3 },
};

export const headerTextStyles: SxProps<Theme> = {
  color: "text.secondary",
  lineHeight: 1.6,
  px: 2,
  marginTop: "20px",
};
