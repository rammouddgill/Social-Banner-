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
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-adsense-account"
            content="ca-pub-5115629776202373"
          />
        </head>
        <body>
          {/* Google AdSense Script */}
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5115629776202373"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />

          {/* 1 */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5115629776202373"
            data-ad-slot="6618956267"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>

          {/* Initialize AdSense */}
          <Script id="ads-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>

          <main className="p-6 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold mb-4 text-center">
              Top High-Yield Investment Options for 2025
            </h1>
            <p className="text-lg mb-4 text-center">
              Looking to grow your wealth safely? Here are the best high-yield
              investment options in 2025 that offer strong returns, low risk,
              and steady growth potential.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              1. High-Yield Savings Accounts
            </h2>
            <p>
              A high-yield savings account is one of the safest ways to earn
              interest on your money. Many online banks now offer APYs above
              5.00% in 2025 — far better than traditional banks.
            </p>

            <table className="table-auto w-full border mt-4 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Bank Name</th>
                  <th className="p-2 border">APY (2025)</th>
                  <th className="p-2 border">Minimum Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Ally Bank</td>
                  <td className="p-2 border">5.10%</td>
                  <td className="p-2 border">$0</td>
                </tr>
                <tr>
                  <td className="p-2 border">Discover Bank</td>
                  <td className="p-2 border">5.05%</td>
                  <td className="p-2 border">$0</td>
                </tr>
                <tr>
                  <td className="p-2 border">Marcus by Goldman Sachs</td>
                  <td className="p-2 border">5.00%</td>
                  <td className="p-2 border">$0</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              2. Certificates of Deposit (CDs)
            </h2>
            <p>
              Certificates of Deposit (CDs) are fixed-term investments that
              offer guaranteed returns. In 2025, some banks are offering up to
              <strong> 5.25% APY</strong> for 1-year CDs. CDs are FDIC-insured,
              which means your investment is protected up to $250,000.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              3. Treasury Bonds and T-Bills
            </h2>
            <p>
              U.S. Treasury Bonds are a favorite for risk-free investors. They
              are backed by the U.S. government and pay regular interest.
              Currently, the 10-year Treasury yield sits around{" "}
              <strong>4.6% (October 2025)</strong>.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Risk Level: Very Low</li>
              <li>Return Potential: Moderate</li>
              <li>Best for: Conservative investors</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              4. Index Funds & ETFs
            </h2>
            <p>
              Index funds and ETFs (Exchange-Traded Funds) offer exposure to the
              entire market. They are great for long-term investors looking for
              7–10% annual returns. Some of the best-performing ETFs in 2025
              include:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Vanguard S&P 500 ETF (VOO)</li>
              <li>Schwab U.S. Dividend Equity ETF (SCHD)</li>
              <li>iShares Core U.S. Aggregate Bond ETF (AGG)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              5. Real Estate Investment Trusts (REITs)
            </h2>
            <p>
              REITs let you invest in real estate without owning property.
              Dividend yields from REITs can range between{" "}
              <strong>5% to 12%</strong> annually, making them an excellent
              passive income option.
            </p>

            <table className="table-auto w-full border mt-4 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">REIT Name</th>
                  <th className="p-2 border">Dividend Yield</th>
                  <th className="p-2 border">Sector</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Realty Income (O)</td>
                  <td className="p-2 border">5.2%</td>
                  <td className="p-2 border">Retail</td>
                </tr>
                <tr>
                  <td className="p-2 border">Public Storage (PSA)</td>
                  <td className="p-2 border">6.1%</td>
                  <td className="p-2 border">Storage</td>
                </tr>
                <tr>
                  <td className="p-2 border">Digital Realty Trust (DLR)</td>
                  <td className="p-2 border">4.9%</td>
                  <td className="p-2 border">Data Centers</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              6. Dividend Stocks
            </h2>
            <p>
              Dividend-paying stocks are a classic source of high passive
              income. Companies like Johnson & Johnson, Microsoft, and Apple
              continue to reward shareholders with rising dividends in 2025.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li>Average Dividend Yield: 3%–6%</li>
              <li>Risk Level: Moderate</li>
              <li>Best for: Long-term investors</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              7. Peer-to-Peer (P2P) Lending
            </h2>
            <p>
              P2P lending platforms like LendingClub and Prosper allow you to
              lend money directly to borrowers and earn interest rates between{" "}
              <strong>7% and 12%</strong>. While riskier, the returns are often
              much higher than bank deposits.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              8. Crypto Savings Accounts
            </h2>
            <p>
              Crypto-backed savings accounts offer another high-yield
              opportunity. Platforms like Nexo and Coinbase let users earn
              interest on stablecoins with yields up to <strong>8%</strong>.
              However, crypto volatility adds risk — always invest wisely.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              9. Municipal Bonds (Tax-Free Income)
            </h2>
            <p>
              Municipal bonds (Munis) are debt securities issued by U.S. states
              or cities. Their key advantage is <strong>tax-free interest</strong>,
              making them ideal for high-income investors in 2025.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">
              10. Money Market Funds
            </h2>
            <p>
              Money Market Funds provide short-term, low-risk returns — perfect
              for investors who want safety plus liquidity. In 2025, most top
              funds yield between 4.8% and 5.2%.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Conclusion</h2>
            <p>
              The best investment in 2025 depends on your goals, risk tolerance,
              and time horizon. If you want <strong>safe, stable growth</strong>,
              go with high-yield savings accounts or CDs. For{" "}
              <strong>long-term wealth</strong>, index funds, REITs, and dividend
              stocks are excellent options.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">FAQs</h2>
            <div className="space-y-4">
              <div>
                <strong>Q1: What is the safest investment in 2025?</strong>
                <p>
                  High-yield savings accounts and U.S. Treasury bonds are
                  considered the safest investments this year.
                </p>
              </div>
              <div>
                <strong>
                  Q2: Which investment gives the highest return?
                </strong>
                <p>
                  Crypto savings, REITs, and dividend stocks can provide the
                  highest returns — but they come with more risk.
                </p>
              </div>
              <div>
                <strong>Q3: How much should I invest monthly?</strong>
                <p>
                  Experts suggest investing at least 15%–20% of your monthly
                  income for long-term financial security.
                </p>
              </div>
              <div>
                <strong>Q4: Can I invest in U.S. funds from abroad?</strong>
                <p>
                  Yes. Many global investors can access U.S. ETFs and index funds
                  through international brokers.
                </p>
              </div>
              <div>
                <strong>Q5: What is a good portfolio mix in 2025?</strong>
                <p>
                  A balanced mix of 50% stocks, 30% bonds, and 20% high-yield
                  savings is ideal for most investors.
                </p>
              </div>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
