"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import globalStyle from "@/styles/globalStyle";
import { Global } from "@emotion/react";
import RQProvider from "@/provider/RQProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RQProvider>
          <Global styles={globalStyle} />
          {children}
        </RQProvider>
      </body>
    </html>
  );
}
