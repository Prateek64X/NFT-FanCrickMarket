"use client";

import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="navbar-body">
            {/* Left: Chilliz Logo */}
            <Link href="/">
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
            </Link>

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

            {/* Right: Connect Wallet Button */}
            <button className="connect-button navbar-item">
                Connect Wallet
            </button>

            {/* Bottom: Gradient line */}
            <div className="gradient-line"></div>
        </div>
  );
};

export default Navbar;