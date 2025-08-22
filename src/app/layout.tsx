import ThemeRegistry from "@/lib/mui/themeRegistry";
import { RainbowProvider } from "@/lib/walletConnection/providers";
import Starfield from "@/styles/Starfield/Starfield";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wonderland",
  description: "Wonderland challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
        style={{
          background:
            "linear-gradient(180deg, #0f1123 0%, #1a1d3a 50%, #2d1b69 100%)",
          minHeight: "100vh",
        }}
      >
        <Starfield
          speedFactor={0.03}
          backgroundColor="black"
          starColor={[255, 255, 255]}
          starCount={5000}
        />
        <RainbowProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </RainbowProvider>
      </body>
    </html>
  );
}
