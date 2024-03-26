import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Z&Z Automotores",
  description: "Compramos tu auto en tiempo récord",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/jmBlack.svg',
        href: '/jmBlack.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/jmWhite.svg',
        href: '/jmWhite.svg',
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' lang="es">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
