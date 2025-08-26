import { SxProps, Theme } from "@mui/material/styles";

export const formWrapperStyles: SxProps<Theme> = {
  background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  borderRadius: "20px",
  padding: "1px",
  boxShadow: "0 4px 12px rgba(6, 182, 212, 0.4)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(135deg, #0891b2, #2563eb)",
    boxShadow: "0 8px 25px rgba(6, 182, 212, 0.6)",
    transform: "translateY(-2px)",
  },
};

export const cardStyles: SxProps<Theme> = {
  borderRadius: "19px",
  backgroundColor: "#000000",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#0a0a0a",
  },
};

export const cardHeaderStyles: SxProps<Theme> = {
  borderBottom: "1px solid",
  borderBottomColor: "divider",
  px: 3,
  py: 1.5,
  transition: "border-color 0.3s ease-in-out",
  "&:hover": {
    borderBottomColor: "rgba(6, 182, 212, 0.3)",
  },
};

export const headerTextStyles: SxProps<Theme> = {
  color: "text.secondary",
  fontSize: "0.875rem",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "rgba(6, 182, 212, 0.8)",
  },
};

export const cardContentStyles: SxProps<Theme> = {
  p: 3,
};

export const formContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};
