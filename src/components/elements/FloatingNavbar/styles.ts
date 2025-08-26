import { SxProps, Theme } from "@mui/material/styles";

export const navbarContainerStyles: SxProps<Theme> = {
  position: "fixed",
  top: "2rem",
  left: "1rem",
  right: "1rem",
  zIndex: 1000,
  maxWidth: "1200px",
  margin: "0 auto",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "30px",
  padding: "0 1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
};

export const logoContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const controlsContainerStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const contractLabelStyles: SxProps<Theme> = {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: "0.875rem",
  fontWeight: 500,
  display: { xs: "none", md: "block" },
};

export const formControlStyles: SxProps<Theme> = {
  minWidth: 120,
};

export const selectStyles: SxProps<Theme> = {
  color: "#06b6d4",
  fontSize: "0.875rem",
  fontWeight: 500,
  height: "32px",
  "& .MuiOutlinedInput-root": {
    height: "32px",
    borderRadius: "16px",
    background: "rgba(6, 182, 212, 0.1)",
    backdropFilter: "blur(10px)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(6, 182, 212, 0.6)",
    borderRadius: "16px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#06b6d4",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#06b6d4",
  },
  "& .MuiSelect-icon": {
    color: "#06b6d4",
  },
  "& .MuiSelect-select": {
    padding: "4px 12px",
    display: "flex",
    alignItems: "center",
    height: "24px",
  },
};

export const addressChipContainerStyles: SxProps<Theme> = {
  display: { xs: "none", md: "block" },
};
