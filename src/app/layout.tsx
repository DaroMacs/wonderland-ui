import ThemeRegistry from "@/lib/mui/themeRegistry";
import { RainbowProvider } from "@/lib/walletConnection/providers";
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
      <body className={roboto.className}>
        <RainbowProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </RainbowProvider>
      </body>
    </html>
  );
}
