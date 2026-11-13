import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tahadigitallab | Frontend Developer & Performance Specialist",
  description: "Expert frontend development, bug fixing, speed optimization, and React services in Morocco. Helping businesses launch faster and fix what's broken.",
  keywords: ["Frontend Developer", "React Specialist", "Bug Fixing", "Website Speed Optimization", "Morocco", "tahadigitallab"],
  authors: [{ name: "Taha Soumbate" }],
  openGraph: {
    title: "tahadigitallab | Frontend Developer & Performance Specialist",
    description: "Expert frontend development, bug fixing, speed optimization, and React services.",
    url: "https://tahadigitallab.com",
    siteName: "tahadigitallab",
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
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
