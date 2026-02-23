import { Geist, Geist_Mono, Poppins, Inter, Montserrat, Roboto, Lato, Ubuntu } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./Componets/header";
import Footer from "./Componets/Footer/footer";
import WhatsAppFloatingButton from "./Componets/WhatsAppFloatingButton/WhatsAppFloatingButton";
import StickyContactBar from "./Componets/StickyContactBar";
import BootstrapClient from "./BootstrapClient";
import 'font-awesome/css/font-awesome.min.css';
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

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
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
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.variable} ${montserrat.variable} ${roboto.variable} ${lato.variable} ${ubuntu.variable}`}
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
