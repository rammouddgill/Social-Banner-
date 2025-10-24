import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
          content="ca-pub-1946451267772348"
        />
      </head>
      <body>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1946451267772348"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Ad Slot */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1946451267772348"
          data-ad-slot="2381114778"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        {/* Initialize AdSense */}
        <Script id="ads-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>

        {/* --- High CPC Article (Finance Niche) --- */}
        <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1 style={{ fontSize: "28px", marginBottom: "15px" }}>
            Best Investment Options in 2025 to Grow Your Money Fast
          </h1>
          <p>
            Choosing the right investment in 2025 can help you build long-term
            wealth and achieve financial freedom. Whether you’re a beginner or
            an experienced investor, here are the safest and most profitable
            options this year.
          </p>

          <h2>1. High-Yield Savings Accounts</h2>
          <ul>
            <li>✅ Average interest rate: 5.00% APY</li>
            <li>🏦 Best for: Short-term savings & emergency funds</li>
            <li>💡 Tip: Choose FDIC-insured banks only</li>
          </ul>

          <h2>2. Certificates of Deposit (CDs)</h2>
          <ul>
            <li>💰 Lock-in period: 6 months to 5 years</li>
            <li>📈 Average return: 4.8% APY</li>
            <li>💳 Ideal for: Risk-averse investors</li>
          </ul>

          <h2>3. Index Funds</h2>
          <ul>
            <li>📊 Tracks market indexes like S&P 500</li>
            <li>📉 Low fees and stable growth</li>
            <li>💸 Average annual return: 8–10%</li>
          </ul>

          <h2>4. Real Estate Investment Trusts (REITs)</h2>
          <ul>
            <li>🏠 Invest in real estate without buying property</li>
            <li>💵 Monthly or quarterly dividend payouts</li>
            <li>📈 Good for: Long-term income</li>
          </ul>

          <h2>5. Stock Market Investments</h2>
          <ul>
            <li>📈 Best for: Long-term wealth creation</li>
            <li>💰 Sectors to watch: AI, EVs, Green Energy</li>
            <li>⚠️ Higher risk, higher reward</li>
          </ul>

          <h2>Investment Comparison Table</h2>
          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "15px",
            }}
          >
            <thead>
              <tr style={{ background: "#f0f0f0" }}>
                <th>Investment Type</th>
                <th>Avg. Return</th>
                <th>Risk Level</th>
                <th>Liquidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High-Yield Savings</td>
                <td>5.0% APY</td>
                <td>Low</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Certificates of Deposit (CDs)</td>
                <td>4.8% APY</td>
                <td>Low</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Index Funds</td>
                <td>8–10% annually</td>
                <td>Moderate</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>REITs</td>
                <td>7–9% annually</td>
                <td>Moderate</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Stocks</td>
                <td>10–15% annually</td>
                <td>High</td>
                <td>High</td>
              </tr>
            </tbody>
          </table>

          <h2>Expert Tips to Maximize Returns</h2>
          <ul>
            <li>💡 Diversify across 3–4 asset types to reduce risk.</li>
            <li>📅 Invest consistently every month (SIP method).</li>
            <li>🚫 Avoid emotional decisions — focus on long-term growth.</li>
            <li>📈 Rebalance your portfolio every 6–12 months.</li>
          </ul>

          <h2>Frequently Asked Questions (FAQs)</h2>

          <h3>1. What is the safest investment in 2025?</h3>
          <p>
            High-yield savings accounts and CDs are the safest options since
            they are insured by FDIC up to $250,000.
          </p>

          <h3>2. What gives the highest return?</h3>
          <p>
            Stock market and REITs can offer the highest returns but come with
            higher risk.
          </p>

          <h3>3. Should I invest in gold or mutual funds?</h3>
          <p>
            Gold is a hedge against inflation, while mutual funds offer higher
            long-term growth. A mix of both is ideal.
          </p>

          <h3>4. Can I invest with low income?</h3>
          <p>
            Yes, you can start with as little as ₹500–₹1000 per month using SIPs
            or small-savings plans.
          </p>

          <p style={{ marginTop: "20px" }}>
            <strong>Disclaimer:</strong> This content is for informational
            purposes only. Always consult a licensed financial advisor before
            making investment decisions.
          </p>
        </main>
      </body>
    </html>
  );
}
