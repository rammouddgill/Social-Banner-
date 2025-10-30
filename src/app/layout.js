import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Create Professional LinkedIn Banners in Minutes",
  description:
    "Easily create your LinkedIn banner. Creating your LinkedIn banner is super easy with Linkedin social banner maker. Linkedin social banner maker is free to try.",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-adsense-account"
          content="ca-pub-5099693760269807"
        />
      </head>
      <body>
      
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5099693760269807"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Ad Slot */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", margin: "20px 0" }}
          data-ad-client="ca-pub-5099693760269807"
          data-ad-slot="4832798545"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <Script id="ads-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

        {children}
   
      </body>
    </html>
  );
}
