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
          content="ca-pub-5203051277905356"
        />
        {/* Load AdSense script properly */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5203051277905356"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Example Ad Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5203051277905356"
          data-ad-slot="8724091452"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        {/* Initialize AdSense */}
        <Script id="ads-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

    

        {/* ================================
            HIGH CPC ARTICLE (USA)
            ================================ */}
        <main style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "15px" }}>
            Best High-Interest Savings Accounts in the USA (2025)
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "28px" }}>
            Looking for the best high-interest savings account in the USA for 2025?
            You’re in the right place. Banks in the United States are offering some
            of the highest APYs ever—making it a great time to grow your money safely
            with FDIC protection.
          </p>

          <h2 style={{ marginTop: "30px" }}>🔥 Why High-Interest Savings Accounts Are Popular in 2025</h2>
          <ul style={{ lineHeight: "28px" }}>
            <li>Safe: FDIC insured up to $250,000</li>
            <li>High APY: Many banks offering 4.5% – 5.5% APY</li>
            <li>No risk like crypto or stock market</li>
            <li>Instant withdrawals anytime</li>
          </ul>

          {/* MID ARTICLE AD */}
          <div style={{ margin: "30px 0" }}>
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-2590992141479979"
              data-ad-slot="4241303380"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>

            <Script
              id="adsbygoogle-mid-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
              }}
            />
          </div>

          <h2>🏦 Best High-Interest Savings Accounts (USA 2025)</h2>

          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Bank</th>
                <th style={{ border: "1px solid #ccc", padding: "10px" }}>APY (2025)</th>
                <th style={{ border: "1px solid #ccc", padding: "10px" }}>Min. Deposit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>SoFi Bank</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>5.25% APY</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>$0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>Discover Bank</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>4.90% APY</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>$0</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>American Express Bank</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>4.75% APY</td>
                <td style={{ border: "1px solid #ccc", padding: "10px" }}>$0</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{ marginTop: "30px" }}>💡 How to Choose the Best Savings Account</h2>
          <ul style={{ lineHeight: "28px" }}>
            <li>Always compare APY</li>
            <li>Check if the bank charges withdrawal or maintenance fees</li>
            <li>Prefer accounts with $0 minimum deposit</li>
            <li>Ensure FDIC insurance</li>
          </ul>

          <h2 style={{ marginTop: "30px" }}>📝 Final Verdict</h2>
          <p style={{ fontSize: "18px", lineHeight: "28px" }}>
            In 2025, banks like SoFi, Discover, and American Express are offering extremely
            attractive APY rates. If you want a safe and profitable place to keep your money,
            a high-interest savings account is one of the smartest financial moves.
          </p>

          <h2 style={{ marginTop: "30px" }}>❓ FAQs</h2>
          <p><strong>1. Are high-yield savings accounts safe?</strong><br />Yes — they are FDIC insured.</p>

          <p><strong>2. Can I withdraw money anytime?</strong><br />Yes, most banks allow instant transfers.</p>

          <p><strong>3. Do I need a high balance?</strong><br />No, many banks offer $0 minimum deposit.</p>

          <p><strong>4. Is 5% APY guaranteed?</strong><br />No, banks can change APY anytime.</p>

          <p><strong>5. Which bank is best in 2025?</strong><br />SoFi offers the highest APY with no fees.</p>

        </main>
      </body>
    </html>
  );
}
