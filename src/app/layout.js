import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar"; // Ye line add karo

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
        <body>
          <Navbar /> {/* Ye line add karo */}
          {children}
        </body>
      </html>
    </>
  );
}
