import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const copperplate = localFont({
  src: "../font/copperplate/Copperplate.otf",
  variable: "--font-copperplate",
});

export const metadata: Metadata = {
  title: "La Última Estación",
  description: "Official website for La Última Estación / The Last Station",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${copperplate.variable} ${cinzel.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
