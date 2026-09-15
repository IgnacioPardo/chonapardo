import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SERP snippet (120–160 chars) and social-card blurb (80–125 chars).
const description =
  "Ignacio “Chona” Pardo’s portfolio: AI agents at Autonoma, football analytics with Player2Vec, a restored E36 with live OBD gauges, WebXR demos and music.";
const ogDescription =
  "Ignacio “Chona” Pardo — AI agents, football analytics, a restored E36 with live OBD gauges, WebXR demos, music & podcasts.";
const ogImage = { url: "/og.png", width: 1200, height: 630, alt: "Chona Pardo — projects, music & experiments" };

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chonapardo.com"),
  title: "Chona Pardo — AI, Machine Learning, Music & Experiments",
  description,
  applicationName: "Chona Pardo",
  manifest: "/manifest.json",
  itunes: { appId: "1533049098" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  appleWebApp: {
    capable: true,
    title: "Chona",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    url: "https://www.chonapardo.com/",
    siteName: "Chona Pardo",
    title: "Chona Pardo",
    description: ogDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chona Pardo",
    description: ogDescription,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FECA58" },
    { media: "(prefers-color-scheme: dark)", color: "#0C043F" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome 4.7 powers the footer social icons */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
