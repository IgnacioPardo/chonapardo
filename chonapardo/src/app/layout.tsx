import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const description = "Chona Pardo — projects, music & experiments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chonapardo.com"),
  title: "Chona Pardo",
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
    description,
    images: [{ url: "/thumbnail.jpg", width: 500, height: 501, alt: "Chona Pardo" }],
  },
  twitter: {
    card: "summary",
    title: "Chona Pardo",
    description,
    images: ["/thumbnail.jpg"],
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
