import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB CLONE",
  description: "this is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers defaultTheme="system" attribute="class">
          <Header />
          <Navbar />
          <Searchbox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
