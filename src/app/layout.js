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
        <meta
          name="google-adsense-account"
          content="ca-pub-9830530451105892"
        />

        {/* ✅ AdSense Script */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9830530451105892"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {/* 🔝 TOP AD */}
        <div style={{ width: "100%", textAlign: "center", margin: "10px 0" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-9830530451105892"
            data-ad-slot="8360806287"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          <Script id="adsense-top-ad" strategy="afterInteractive">
            {`
              (adsbygoogle = window.adsbygoogle || []).push({});
            `}
          </Script>
        </div>

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
