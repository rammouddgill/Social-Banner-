import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linkedin social banner maker",
  description:
    "Easily create your LinkedIn banner. Creating your LinkedIn banner is super easy with Linkedin social banner maker. Linkedin social banner maker is free to try.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          {/* Navbar inline - No import issues */}
          <nav style={{
            background: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderBottom: '1px solid #e5e7eb',
            padding: 0,
            margin: 0
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '60px',
              padding: '0 20px'
            }}>
              <a href="/" style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#0066cc',
                textDecoration: 'none'
              }}>
                LinkedIn Banner Maker
              </a>
              
              <ul style={{
                display: 'flex',
                gap: '30px',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}>
                <li>
                  <a href="/disclaimer" style={{
                    color: '#374151',
                    textDecoration: 'none',
                    fontWeight: '500',
                    padding: '8px 12px',
                    borderRadius: '6px'
                  }}>
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="/about-us" style={{
                    color: '#374151',
                    textDecoration: 'none',
                    fontWeight: '500',
                    padding: '8px 12px',
                    borderRadius: '6px'
                  }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" style={{
                    color: '#374151',
                    textDecoration: 'none',
                    fontWeight: '500',
                    padding: '8px 12px',
                    borderRadius: '6px'
                  }}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" style={{
                    color: '#374151',
                    textDecoration: 'none',
                    fontWeight: '500',
                    padding: '8px 12px',
                    borderRadius: '6px'
                  }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          
          {children}
        </body>
      </html>
    </>
  );
}
