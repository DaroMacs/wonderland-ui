"use client";

import { LOGIN } from "@/constants/routes";
import { Web3Provider } from "@/context/web3";
import ThemeRegistry from "@/lib/mui/themeRegistry";
import { RainbowProvider } from "@/lib/walletConnection/providers";
import Starfield from "@/styles/Starfield/Starfield";
import { Box, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import Globe from "../Globe";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLoginPage = pathname === LOGIN;

  return (
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

              {isLoginPage && <Globe />}
            </Box>
          </ThemeRegistry>
        </Web3Provider>
      </RainbowProvider>
    </>
  );
};

export default AppWrapper;
