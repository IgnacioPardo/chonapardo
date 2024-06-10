import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chona Pardo",
  description: "Chona Pardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://chonapardo.com/" />
        <meta property="og:title" content="Chona Pardo" />
        <meta property="og:description" content="Chona Pardo" />
        <meta property="og:image" content="thumbnail.jpg" />
        <meta name="Description" content="Chona Pardo"/>
        <meta name="theme-color" content="#0C043F" />
        <meta name="apple-itunes-app" content="app-id=1533049098"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover,  shrink-to-fit=no" />
        <meta name="HandheldFriendly" content="true"/>
        <link rel="manifest" href="manifest.json"/>
        <meta httpEquiv="Cache-control" content="no-cache"/>
        <meta httpEquiv="Expires" content="-1"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <link rel="apple-touch-icon" href="/icon-152.png"/>
        <link rel="shortcut icon" sizes="196x196" href="/icon-196.png"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="theme-color" content="#FECA58" />
        <meta name="HandheldFriendly" content="true"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Chona"/>
        <meta name="application-name" content="Chona Pardo"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
