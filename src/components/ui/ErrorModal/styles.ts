import { SxProps, Theme } from "@mui/material/styles";

export const dialogPaperStyles: SxProps<Theme> = {
  bgcolor: "rgba(0, 0, 0, 0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 3,
};

export const dialogTitleStyles: SxProps<Theme> = {
  pb: 1,
};

export const warningIconStyles: SxProps<Theme> = {
  mr: 1,
  color: "#f56565",
  fontSize: "1.5rem",
};

export const messageStyles: SxProps<Theme> = {
  mb: 2,
};

export const dialogActionsStyles: SxProps<Theme> = {
  p: 2,
  pt: 0,
};

export const okButtonStyles: SxProps<Theme> = {
  bgcolor: "#38b2ac",
  "&:hover": {
    bgcolor: "#319795",
  },
};
