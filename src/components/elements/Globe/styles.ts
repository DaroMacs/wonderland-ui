import { SxProps, Theme } from "@mui/material/styles";

export const globeContainerStyles: SxProps<Theme> = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100vw",
  height: "255px",
  overflow: "hidden",
  zIndex: 10,
  pointerEvents: "none",
  maskImage:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 60%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 60%)",
};
