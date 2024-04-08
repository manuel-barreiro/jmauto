import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zzautomotores.com.ar/"),
  title: "Z&Z Automotores",
  description: "Compramos tu auto en tiempo récord",
  themeColor: 'white',
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
    apple: '/apple-icon.png',
  },
  openGraph: {
    images: '/apple-icon.png',
    title: 'Z&Z Automotores',
    description: 'Compramos tu auto en tiempo récord',
    type: "website",
    url: "https://www.zzautomotores.com.ar/"
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
