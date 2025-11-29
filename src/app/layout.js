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

        {/* Google AdSense Script */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2590992141479979"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        {/* ------------ TOP AD ------------ */}
        <div style={{ marginBottom: "20px" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2590992141479979"
            data-ad-slot="4241303380"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          <Script
            id="adsbygoogle-top-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </div>

        {/* ------------ PAGE CONTENT ------------ */}
        {children}
      </body>
    </html>
  );
}
