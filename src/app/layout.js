import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Professional LinkedIn Banners in Minutes",
  description:
    "Easily create your LinkedIn banner. Creating your LinkedIn banner is super easy with Linkedin social banner maker. Linkedin social banner maker is free to try.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-adsense-account" content="ca-pub-5099693760269807"/>
         
       
        </head>
        <body>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5099693760269807"
     crossorigin="anonymous"></script>
<!-- 1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-5099693760269807"
     data-ad-slot="4832798545"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
  {children}</body>
      </html>
    </>
  );
}
