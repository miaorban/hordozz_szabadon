import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from '@/app/fonts';
import Head from "next/head";
import Navbar from '@/app/components/layout/navbar';
import Footer from "@/app/components/layout/footer";
import CalendarFloatingIcon from "@/app/components/layout/CalendarFloatingIcon";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HotjarInit from "./hotjarInit";

export const metadata: Metadata = {
  title: "Babahordozási tanácsadás Keszthelyi stúdiómban | Hordozó kölcsönzés",
  description: "Teljeskörű tanácsadás Neked, hogy babáddal együtt megélhesd a hordozás örömét. Bérelj hordozót vagy hordozós ruházatot.",
  openGraph: {
    type: "website",
    url: "https://hordozzszabadon.hu",
    title: "Babahordozási tanácsadás",
    description: "Teljeskörű tanácsadás Neked, hogy babáddal együtt megélhesd a hordozás örömét. Bérelj hordozót vagy hordozós ruházatot.",
    siteName: "Hordozási tanácsadás",
    images: [{
      url: "https://hordozzszabadon.hu/intro_bg.png",
    }],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <Head>
        <title>Babahordozási tanácsadás | Hordozó kölcsönzés</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <body
        className={`antialiased ${montserrat.className}`}
      >
       <Navbar />
       <CalendarFloatingIcon />
        <div className="mt-[-10px] sm:mt-[-66px]">
          {children}
        </div>
        <div className="hidden sm:block">
          <Footer/>
        </div>
        <Analytics/>
        <SpeedInsights/>
        <HotjarInit/>
      </body>
    </html>
  );
}
