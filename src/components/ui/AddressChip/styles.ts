import { SxProps, Theme } from "@mui/material/styles";

export const chipStyles: SxProps<Theme> = {
  borderColor: "rgba(6, 182, 212, 0.6)",
  color: "#06b6d4",
  fontSize: "0.875rem",
  background: "rgba(6, 182, 212, 0.1)",
  backdropFilter: "blur(10px)",
  cursor: "pointer",
  "& .MuiChip-label": {
    fontFamily: "monospace",
    fontWeight: 500,
  },
  "&:hover": {
    borderColor: "#06b6d4",
    background: "rgba(6, 182, 212, 0.2)",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
  },
  transition: "all 0.2s ease-in-out",
};
