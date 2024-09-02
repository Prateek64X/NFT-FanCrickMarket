// /src/app/layout.js
import { Inter } from "next/font/google";
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiliz Marketplace",
  description: "Build collections of your favorite Fantoken NFTs of players",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
