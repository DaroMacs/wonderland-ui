import { Box, Container } from "@mui/material";
import Globe from "../Globe";
import { Web3Provider } from "@/context/web3";
import ThemeRegistry from "@/lib/mui/themeRegistry";
import { RainbowProvider } from "@/lib/walletConnection/providers";
import Starfield from "@/styles/Starfield/Starfield";

const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Starfield
      speedFactor={0.03}
      backgroundColor="black"
      starColor={[255, 255, 255]}
      starCount={5000}
    />
    <RainbowProvider>
      <Web3Provider>
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
              }}
            >
              {children}
            </Container>

            <Globe />
          </Box>
        </ThemeRegistry>
      </Web3Provider>
    </RainbowProvider>
  </>
);

export default AppWrapper;
