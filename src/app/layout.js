import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Share/Navbar";
import Footer from "@/components/Share/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const publicSanr = Public_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Collage Booking Platform",
  description: "This is a fully functional collage booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${publicSanr.className} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
