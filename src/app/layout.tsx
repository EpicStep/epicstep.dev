import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://epicstep.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stepan Rabotkin — Senior Software Engineer",
  description:
    "Senior Software Engineer at OZON. Building high-load backend infrastructure — page assembly engines, metrics pipelines processing 10M+ writes/sec, and open-source ClickHouse tooling.",
  keywords: [
    "Stepan Rabotkin",
    "Senior Software Engineer",
    "Go developer",
    "Golang",
    "ClickHouse",
    "OZON",
    "backend engineer",
    "high-load systems",
    "open source",
    "Kubernetes",
    "microservices",
  ],
  authors: [{ name: "Stepan Rabotkin", url: siteUrl }],
  creator: "Stepan Rabotkin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Stepan Rabotkin",
    title: "Stepan Rabotkin — Senior Software Engineer",
    description:
      "I build systems that handle millions of requests per second. Go, ClickHouse, high-load infrastructure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stepan Rabotkin — Senior Software Engineer",
    description:
      "I build systems that handle millions of requests per second. Go, ClickHouse, high-load infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
