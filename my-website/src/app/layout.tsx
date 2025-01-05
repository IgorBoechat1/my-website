// app/layout.tsx
'use client';

import React from "react";
import { Navbar } from "@/components/Navbar";
import Providers from "@/components/Providers";
import "./globals.css"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Igor Boechat</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <footer>

        </footer>
      </body>
    </html>
  );
}