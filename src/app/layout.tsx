import "./globals.css";
import type { Metadata } from "next";

import { Poppins, Libre_Barcode_128_Text } from "next/font/google";
import localFont from "@next/font/local";
import Navbar from "@/components/Navbar";
import Providers from "@/lib/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font--poppins",
});
const barcode128 = Libre_Barcode_128_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font--barcode-128",
});
const xyber = localFont({
  src: [
    {
      path: "./fonts/xyber/XYBER - Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/xyber/XYBER - Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font--xyber",
});

export const metadata: Metadata = {
  title: "Fallen Future",
  description: "Card Game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${xyber.variable} ${barcode128.variable}`}
    >
      <body className="font-poppins">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
