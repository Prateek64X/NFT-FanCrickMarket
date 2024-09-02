// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'; // Adjust path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiliz Fantasy Game",
  description: "Create your ever dreamed sports team and win rewards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
