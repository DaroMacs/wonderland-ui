"use client";

import { LOGIN } from "@/constants/routes";
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
      </RainbowProvider>
    </>
  );
};

export default AppWrapper;
