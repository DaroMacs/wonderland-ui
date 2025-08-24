import { Box } from "@mui/material";

const LogoSection = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mb: 6,
      gap: 2,
    }}
  >
    <Box
      component="img"
      src="/logo.png"
      alt="Logo"
      sx={{
        width: 120,
        height: 120,
        borderRadius: "16px",
        objectFit: "contain",
        border: "2px solid",
        borderColor: "primary.main",
        boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
      }}
    />
    <Box
      component="img"
      src="/logo-name.png"
      alt="Logo Name"
      sx={{
        height: 20,
        objectFit: "contain",
        opacity: 0.9,
      }}
    />
  </Box>
);

export default LogoSection;
