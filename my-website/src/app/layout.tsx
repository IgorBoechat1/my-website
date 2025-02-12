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
        <link rel="icon" type="image/svg+xml" href="/favigor.svg" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Igor Boechat" />
        <meta name="description" content="Welcome to Boechat's portfolio. Explore my projects and portfolio." />
        <meta name="image" content="/thumbnail.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://igorboechat.com/" />
        <meta property="og:title" content="Igor Boechat" />
        <meta property="og:description" content="Welcome to Boechat's portfolio. Explore my projects and portfolio." />
        <meta property="og:image" content="https://igorboechat.com/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://igorboechat.com/" />
        <meta name="twitter:title" content="Igor Boechat" />
        <meta name="twitter:description" content="Welcome to Boechat's portfolio. Explore my projects and portfolio." />
        <meta name="twitter:image" content="https://igorboechat.com/thumbnail.png" />

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