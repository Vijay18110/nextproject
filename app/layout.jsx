'use client'
import {useEffect} from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./Componets/header";
import Footer from './Componets/Footer/footer'
import SocialMediaBar from "./Componets/SocialMediaBar/SocialMediaBar";
import { Poppins } from "next/font/google";
import WhatsAppFloatingButton from './Componets/WhatsAppFloatingButton/WhatsAppFloatingButton';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose what you need
});
 

export default function RootLayout({ children }) {
   useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
  <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} cz-shortcut-listen="true">
        {/* <SocialMediaBar /> */}
        <WhatsAppFloatingButton/>
        <Header />
        <div className="bg-light" style={{ marginTop: "75px" }}>
          {children}
        </div>
        <Footer />
        <div id="modal"></div>
      </body>
    </html>
  );
}
