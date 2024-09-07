// /src/app/layout.js
import { Inter } from "next/font/google";
import './globals.css';
import Navbar from '../components/Navbar';
import Providers from '../components/Providers'; // Import the Providers component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiliz Marketplace",
  description: "Build collections of your favorite Fantoken NFTs of players",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app with Providers */}
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
