import type { Metadata } from "next";
import { Lato, Comfortaa } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Relax.ng - More time for you, less stress from life",
  description: "Relax.ng connects you to trusted lifestyle and home services — laundry, cleaning, essentials, and more. Convenient, reliable, and tailored for everyday living in Northern Nigeria.",
  keywords: "lifestyle services, Nigeria, laundry, cleaning, home services, Northern Nigeria",
  authors: [{ name: "Relax.ng" }],
  creator: "Relax.ng",
  publisher: "Relax.ng",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Relax.ng - More time for you, less stress from life",
    description: "Trusted lifestyle and home services for Northern Nigeria. Laundry, cleaning, essentials, and more.",
    url: "https://relax.ng",
    siteName: "Relax.ng",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relax.ng - More time for you, less stress from life",
    description: "Trusted lifestyle and home services for Northern Nigeria. Laundry, cleaning, essentials, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${comfortaa.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
