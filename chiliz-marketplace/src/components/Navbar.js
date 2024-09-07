"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import "../styles/components/navbar.css";
import { CiSearch } from "react-icons/ci";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { getClientId } from "@/util/getContractAddress";

const Navbar = () => {
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
            <div className="centered-content navbar-item">
                <Image
                    src="/assets/images/ChillizCrickLogo.png"
                    alt="Chilliz Logo"
                    width={48}
                    height={48}
                />
                <span className="text-gradient">
                    Chiliz Marketplace
                </span>
            </div>

            {/* Center: Searchbar */}
            <div className="searchbar navbar-item">
                <CiSearch size={36} />
                <input
                    type="text"
                    placeholder="Search Fantokens"
                    className="searchbar-text"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "Search Fantokens")}
                />
            </div>

            {/* Right: Connect Wallet Button (Thirdweb) */}
            <div className="navbar-item">
                <ConnectButton
                className="connect-button"
                    client={client}
                    appMetadata={{
                        name: "Chiliz Sports Market",
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
