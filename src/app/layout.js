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
          <style>{`
            /* Mobile menu styles */
            .menu-toggle {
              display: none;
            }
            
            .hamburger {
              display: none;
              cursor: pointer;
              font-size: 24px;
              color: #374151;
            }
            
            .nav-links {
              display: flex;
              gap: 30px;
              list-style: none;
              margin: 0;
              padding: 0;
              transition: all 0.3s ease;
            }
            
            @media (max-width: 768px) {
              .hamburger {
                display: block;
              }
              
              .nav-links {
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                gap: 15px;
                z-index: 100;
                display: none;
              }
              
              .menu-toggle:checked ~ .nav-links {
                display: flex;
              }
              
              .nav-container {
                height: 60px;
              }
            }
          `}</style>
        </head>
        <body>
          <nav
            style={{
              background: "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              borderBottom: "1px solid #e5e7eb",
              padding: 0,
              margin: 0,
              position: "relative",
            }}
          >
            <div
              className="nav-container"
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "60px",
                padding: "0 20px",
                position: "relative",
              }}
            >
              <a
                href="/"
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#0066cc",
                  textDecoration: "none",
                }}
              >
                Social Banner Maker
              </a>

              {/* Mobile menu toggle */}
              <input type="checkbox" id="menu-toggle" className="menu-toggle" />
              <label htmlFor="menu-toggle" className="hamburger">☰</label>

              <ul className="nav-links">
                <li>
                  <a
                    href="/disclaimer"
                    style={{
                      color: "#374151",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      display: "block",
                    }}
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    style={{
                      color: "#374151",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      display: "block",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-and-conditions"
                    style={{
                      color: "#374151",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      display: "block",
                    }}
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    style={{
                      color: "#374151",
                      textDecoration: "none",
                      fontWeight: "500",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      display: "block",
                    }}
                  >
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
