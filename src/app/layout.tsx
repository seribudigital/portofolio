import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeribuDigital | Transformasi Ide Menjadi Realitas Digital",
  description:
    "Kami menggabungkan desain web mutakhir dengan kekuatan AI untuk membangun pengalaman digital yang fungsional, estetik, dan berdampak bagi bisnis Anda.",
  keywords: [
    "seribudigital",
    "digital agency",
    "web development",
    "AI content",
    "business automation",
  ],
  authors: [{ name: "SeribuDigital" }],
  openGraph: {
    title: "SeribuDigital | Transformasi Ide Menjadi Realitas Digital",
    description:
      "Kami menggabungkan desain web mutakhir dengan kekuatan AI untuk membangun pengalaman digital yang fungsional, estetik, dan berdampak bagi bisnis Anda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
