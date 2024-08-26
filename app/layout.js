import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Envol Technology - Accueil",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header/>
        <div className="pt-[10rem] pb-[5rem]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
