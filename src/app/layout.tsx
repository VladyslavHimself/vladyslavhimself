import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import NoiseCanvas from "@/components/NoiseCanvas/NoiseCanvas";
import {LinesCanvas} from "@/components/LinesCanvas/LinesCanvas";
import DecorativeLayout from "@/components/DecorativeLayout/DecorativeLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vladyslavhimself",
  description: "Frontend developer from United States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NoiseCanvas type="dark" />
        <LinesCanvas />
        <DecorativeLayout />
        {children}
      </body>
    </html>
  );
}
