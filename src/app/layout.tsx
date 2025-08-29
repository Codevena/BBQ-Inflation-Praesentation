import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inflation - Interaktive Präsentation",
  description: "Eine immersive Reise durch das Thema Inflation mit interaktiven Diagrammen und Animationen",
  keywords: "Inflation, Wirtschaft, Präsentation, Interaktiv, Deutschland",
  authors: [{ name: "Inflation Presentation" }],
  manifest: '/manifest.json',
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
