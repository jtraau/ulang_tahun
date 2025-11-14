import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";

import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Anna! 🎂",
  description: "Sebuah web kecil dari Amoo buat ulang tahun Annaa 💖",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Happy Birthday Anna! 🎂",
    description: "Web spesial ultah dari Amoo buat Annaa.",
    url: "https://hbdanna.vercel.app",
    siteName: "Happy Birthday Anna",
    images: [
      {
        url: "/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Anna's birthday",
      },
    ],
    type: "website",
  },
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
