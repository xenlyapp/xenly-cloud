import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/navbar";
import ScrollReveal from "../components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xenly.cloud"),
  title: "Xenly Cloud | Nowoczesne strony internetowe dla lokalnych firm",
  description: "Xenly Cloud tworzy nowoczesne, indywidualne strony internetowe dla lokalnych firm.",
  applicationName: "Xenly Cloud",
  keywords: [
    "strony internetowe dla lokalnych firm",
    "projektowanie stron internetowych",
    "strona internetowa dla restauracji",
    "strona internetowa dla salonu",
    "strona firmowa",
    "landing page",
    "Xenly Cloud",
  ],
  authors: [{ name: "Xenly Cloud", url: "https://xenly.cloud" }],
  creator: "Xenly Cloud",
  publisher: "Xenly Cloud",
  category: "Projektowanie stron internetowych",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Xenly Cloud",
    title: "Xenly Cloud | Nowoczesne strony internetowe dla lokalnych firm",
    description: "Nowoczesne strony internetowe dla lokalnych firm.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Xenly Cloud — nowoczesne strony internetowe dla lokalnych firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xenly Cloud | Nowoczesne strony internetowe dla lokalnych firm",
    description: "Nowoczesne strony internetowe dla lokalnych firm.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  themeColor: "#070b14",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full bg-slate-950 font-sans text-white">
        <Navbar />
        <ScrollReveal />
        {children}
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-TXD9BGKX6L" />
      )}
    </html>
  );
}
