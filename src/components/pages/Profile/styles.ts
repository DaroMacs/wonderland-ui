import { SxProps, Theme } from "@mui/material/styles";

export const profileContainerStyles: SxProps<Theme> = {
  marginTop: "80px",
};

export const mobileAddressChipContainerStyles: SxProps<Theme> = {
  display: { xs: "flex", md: "none" },
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
};
