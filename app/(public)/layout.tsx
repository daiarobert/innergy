
import "../globals.css";
import SessionProviderWrapper from "../providers/SessionProviderWrapper";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { Inter, Anton } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body className="font-inter flex flex-col min-h-screen scroll-smooth">
        <SessionProviderWrapper>
          <Navbar />
          <main>{children}</main>
          <Newsletter />
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
