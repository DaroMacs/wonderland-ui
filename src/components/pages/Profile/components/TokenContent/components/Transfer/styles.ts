import { SxProps, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export const transferCardStyles: SxProps<Theme> = {
  bgcolor: alpha("#ffffff", 0.02),
  backdropFilter: "blur(20px)",
  border: "1px solid",
  borderColor: alpha("#ffffff", 0.1),
  borderRadius: 3,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  height: "100%",
  "&:hover": {
    borderColor: alpha("#667eea", 0.3),
    boxShadow: `0 20px 40px ${alpha("#667eea", 0.1)}`,
    transform: "translateY(-2px)",
  },
};

export const transferCardContentStyles: SxProps<Theme> = {
  p: { xs: 1.5, md: 2 },
};

export const transferHeaderStyles: SxProps<Theme> = {
  fontSize: { xs: "1rem", md: "1.25rem" },
};

export const transferIconStyles: SxProps<Theme> = {
  mr: 1,
  color: "#38b2ac",
  fontSize: "1rem",
};

export const transferTextFieldStyles: SxProps<Theme> = {
  mb: 2,
  "& .MuiOutlinedInput-root": {
    borderRadius: 6,
  },
};

export const transferAmountFieldStyles: SxProps<Theme> = {
  mb: 3,
  "& .MuiOutlinedInput-root": {
    borderRadius: 6,
  },
};
