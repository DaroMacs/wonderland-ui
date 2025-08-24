import { Box } from "@mui/material";
import Image from "next/image";

const Globe = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100vw",
      height: "255px",
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none",
      maskImage:
        "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 60%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 60%)",
    }}
  >
    <Image
      src="/globe.png"
      alt="Globe"
      width={1920}
      height={400}
      style={{
        position: "absolute",
        bottom: "-210px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "1440px",
        height: "auto",
        display: "block",
      }}
      priority
    />
  </Box>
);

export default Globe;
