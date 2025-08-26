import { SxProps, Theme } from "@mui/material/styles";

export const iconContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  "& > *": {
    fontSize: "inherit !important",
  },
};

export const buttonStyles: SxProps<Theme> = {
  textTransform: "none",
  borderRadius: "20px",
  padding: "4px 16px",
  fontSize: "0.875rem",
  fontWeight: 300,
  letterSpacing: "0.02em",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  borderColor: "#a855f7",
  color: "#fff",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px #a855f740",
    borderColor: "#ff6b9d",
    backgroundColor: "#ff6b9d10",
  },
};

export const contentContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};
