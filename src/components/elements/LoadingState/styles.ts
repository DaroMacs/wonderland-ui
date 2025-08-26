import { SxProps, Theme } from "@mui/material/styles";

export const loadingContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  gap: 2,
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
};

export const circularProgressStyles: SxProps<Theme> = {
  color: "#06b6d4",
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },
};

export const titleStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.8)",
  fontWeight: 500,
  textAlign: "center",
};

export const descriptionStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.6)",
  textAlign: "center",
  maxWidth: "300px",
};
