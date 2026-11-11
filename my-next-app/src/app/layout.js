import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next App",
  description: "Made with next js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // data-theme = "dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
