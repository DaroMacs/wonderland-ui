import { Box } from "@mui/material";
import { logoContainerStyles, logoImageStyles, logoNameStyles } from "./styles";

const LogoSection = () => (
  <Box sx={logoContainerStyles}>
    <Box component="img" src="/logo.png" alt="Logo" sx={logoImageStyles} />
    <Box
      component="img"
      src="/logo-name.png"
      alt="Logo Name"
      sx={logoNameStyles}
    />
  </Box>
);

export default LogoSection;
