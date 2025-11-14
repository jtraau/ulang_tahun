import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Happy birthday!!!",
  description: "Ulang tahun kamu yang ke-18",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${greatVibes.variable} select-none`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
