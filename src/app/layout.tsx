import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kos-uni-salma.com"),
  title: "Kos Uni Salma | Kos AC & Kipas Angin Air Jamban, Mandau, Bengkalis, Riau",
  description:
    "Kos Uni Salma di Gg. Puyuh, Air Jamban, Kec. Mandau, Kab. Bengkalis, Riau 28784. Tersedia 2 tipe kamar: AC & Kipas Angin. Semua kamar memiliki kamar mandi dalam, tempat tidur, lemari, meja & kursi, dapur bersama, serta garasi dan parkiran luas.",
  keywords: [
    "Kos Uni Salma",
    "Kos Air Jamban",
    "Kos Mandau Bengkalis",
    "Kos Duri Riau",
    "Kos AC Mandau",
    "Kos Kipas Angin",
    "Kamar Mandi Dalam",
    "Kos Garasi Luas",
    "Kos Parkir Mobil Motor",
    "Dapur Bersama",
  ],
  authors: [{ name: "Kos Uni Salma Management" }],
  openGraph: {
    title: "Kos Uni Salma - Air Jamban, Mandau, Bengkalis, Riau",
    description:
      "Hunian kos nyaman & asri di Gg. Puyuh Air Jamban. Pilihan kamar AC & Kipas Angin, semua kamar mandi dalam, full perabot, dapur bersama, garasi dan parkiran luas.",
    url: "https://kos-uni-salma.com",
    siteName: "Kos Uni Salma",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Gedung Kos Uni Salma Air Jamban Mandau Bengkalis",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f7f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable} data-type="place" data-radius="sharp" data-buttons="solid" data-motion suppressHydrationWarning>
      <head>
        <meta name="page-type" content="place" />
        <meta name="site-kind" content="other" />
        <meta name="page-kind" content="place" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            const theme = localStorage.getItem('kos-uni-salma-theme');
            if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
          } catch {}
        `}</Script>
        <Script id="hero-entrance" strategy="beforeInteractive">{`document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)`}</Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
