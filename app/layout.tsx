import "./globals.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import localFont from "@next/font/local";
import Navbar from "../components/Navbar";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["200", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font--poppins",
});

const xyber = localFont({
  src: [
    {
      path: "../public/fonts/xyber/XYBER - Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/xyber/XYBER - Regular.otf",
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
    <html lang="en" className={`${poppins.variable} ${xyber.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
