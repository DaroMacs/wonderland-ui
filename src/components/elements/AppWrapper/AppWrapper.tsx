import ThemeRegistry from "@/lib/mui/themeRegistry";
import { RainbowProvider } from "@/lib/walletConnection/providers";
import Starfield from "@/styles/Starfield/Starfield";
import { Box, Container } from "@mui/material";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Starfield
        speedFactor={0.03}
        backgroundColor="black"
        starColor={[255, 255, 255]}
        starCount={5000}
      />
      <RainbowProvider>
        <ThemeRegistry>
          <Box
            component="main"
            sx={{
              minHeight: "100vh",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                py: 4,
                px: { xs: 2, sm: 3, md: 4 },
              }}
            >
              {children}
            </Container>
          </Box>
        </ThemeRegistry>
      </RainbowProvider>
    </>
  );
};

export default AppWrapper;
