"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import globalStyle from "@/styles/globalStyle";
import { Global } from "@emotion/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Global styles={globalStyle} />
      <body>{children}</body>
    </html>
  );
}
