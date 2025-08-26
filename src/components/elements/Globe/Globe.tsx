import { Box } from "@mui/material";
import Image from "next/image";
import { globeContainerStyles } from "./styles";

const Globe = () => (
  <Box sx={globeContainerStyles}>
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
