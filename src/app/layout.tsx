import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import NoiseCanvas from "@/components/NoiseCanvas/NoiseCanvas";
import {LinesCanvas} from "@/components/LinesCanvas/LinesCanvas";
import DecorativeLayout from "@/components/DecorativeLayout/DecorativeLayout";
import Providers from "@/Providers/Providers";
import NavbarMenuContainer from "@/components/Navbar/NavbarMenuContainer/NavbarMenuContainer";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vladyslav Lutchyn | Frontend engineer",
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
      <Providers>
          <>
              <Navbar />
              { children }
          </>

          <NavbarMenuContainer />
      </Providers>

      <div className="layout">
        <NoiseCanvas type="dark" />
        <LinesCanvas />
        <DecorativeLayout />
      </div>
      </body>
    </html>
  );
}
