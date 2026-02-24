import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "John Lake | CISO & AI Security Leader | Washington D.C.",
  description:
    "TS/SCI cleared Cybersecurity Leader specializing in Cloud Security (AWS/GCP), AI Security, and National Security. Former Mandiant & AWS Security Architect.",
  keywords:
    "CISO Washington DC, AI Security Engineer, Cloud Security Architect, TS/SCI Cyber, AWS Security Specialist, GCP Security Engineer, Mandiant Consultant, John Lake AI, Cybersecurity Manager",
  openGraph: {
    title: "John Lake | CISO & AI Security Leader",
    description: "Securing the Frontier: Cloud, AI, and National Security.",
    url: "https://johnlake.ai",
    siteName: "John Lake",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
