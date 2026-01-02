import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./Componets/header";
import Footer from "./Componets/Footer/footer";
import WhatsAppFloatingButton from "./Componets/WhatsAppFloatingButton/WhatsAppFloatingButton";
import BootstrapClient from "./BootstrapClient";

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
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Infiniox Private Limited",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
      >
        <BootstrapClient />
        <WhatsAppFloatingButton />
        <Header />
        <div className="bg-light">{children}</div>
        <Footer />
        <div id="modal"></div>
      </body>
    </html>
  );
}
