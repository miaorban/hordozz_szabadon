import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from '@/app/fonts';
import Head from "next/head";
import Navbar from '@/app/components/layout/navbar';
import Footer from "@/app/components/layout/footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Babahordozási tanácsadás Keszthelyi stúdiómban | Hordozó kölcsönzés",
  description: "Teljeskörű tanácsadás Neked, hogy babáddal együtt megélhesd a hordozás örömét. Bérelj hordozót vagy hordozós ruházatot.",
  openGraph: {
    type: "website",
    url: "https://hordozaskeszthely.hu",
    title: "Babahordozási tanácsadás",
    description: "Teljeskörű tanácsadás Neked, hogy babáddal együtt megélhesd a hordozás örömét. Bérelj hordozót vagy hordozós ruházatot.",
    siteName: "Hordozási tanácsadás Keszthely",
    images: [{
      url: "https://hordozaskeszthely.hu/mia.jpg",
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
        <title>Babahordozási tanácsadás | Keszthely és környéke  | Hordozó kölcsönzés</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <script
          async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
      </Head>
      <body
        className={`antialiased ${montserrat.className}`}
      >
       <Navbar/>
        <div className="mt-[-66px]">
          {children}
        </div>
        <div className="hidden sm:block">
          <Footer/>
        </div>
        <Analytics/>
      </body>
    </html>
  );
}
