// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar';
import Providers from '../components/Providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiliz Fantasy Game",
  description: "Create your ever dreamed sports team and win rewards.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
