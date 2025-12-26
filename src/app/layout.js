import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Create Professional LinkedIn Banners in Minutes",
  description:
    "Easily create your LinkedIn banner. Creating your LinkedIn banner is super easy with Linkedin social banner maker. Linkedin social banner maker is free to try.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        {/* ✅ Load AdSense Script */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4949037439173081"
          crossOrigin="anonymous"
        />

        {/* ✅ TOP AUTO RESPONSIVE AD */}
        <div style={{ width: "100%", marginBottom: "10px" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4949037439173081"
            data-ad-slot="1053339511"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          <Script id="adsense-push" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>

        {/* ✅ Page Content */}
        {children}
      </body>
    </html>
  );
}
