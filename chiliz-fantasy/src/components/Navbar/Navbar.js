"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { getClientId } from "@/util/getContractAddress";

const Navbar = () => {
    const pathname = usePathname();

    // Map paths to page names
    const getPageName = () => {
      switch (pathname) {
        case '/contests':
          return 'Contests';
        case '/matches':
          return 'Matches';
        case '/teams':
          return 'Teams';
        default:
          return 'Players';
      }
    };

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // Create the Thirdweb client
    const client = createThirdwebClient({ 
      clientId: getClientId(),
    });
  
    return (
        <div className="navbar-body">
            {/* Left: Chilliz Logo */}
            <Link href="/">
                <div className="centered-content navbar-item">
                    <Image
                        src="/assets/images/ChillizFantasyLogo.png"
                        alt="Chilliz Logo"
                        width={48}
                        height={48}
                    />
                    <span className="text-gradient">
                        Chiliz Teamz
                    </span>
                </div>
            </Link>

            {/* Center: Searchbar */}
            <div className="searchbar navbar-item">
                <CiSearch size={36} />
                <input
                    type="text"
                    placeholder={`Search ${getPageName()}`}
                    className="searchbar-text"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = `Search ${getPageName()}`)}
                />
            </div>

            {/* Right: Connect Wallet Button (Thirdweb) */}
            <div className="navbar-item">
                <ConnectButton
                className="connect-button"
                    client={client}
                    appMetadata={{
                        name: "Chiliz Fanverse Market",
                        url: "https://chilizsportsmarket.com",
                    }}
                />
            </div>

            {/* Bottom: Gradient line */}
            <div className="gradient-line"></div>
        </div>
    );
};

export default Navbar;