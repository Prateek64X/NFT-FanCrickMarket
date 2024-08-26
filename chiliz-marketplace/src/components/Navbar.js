import { useRef } from "react";
import Image from "next/image";
import "../styles/components/navbar.css";
import { CiSearch } from "react-icons/ci";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

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

            {/* Right: Connect Wallet Button */}
            <button className="connect-button navbar-item">
                Connect Wallet
            </button>

            {/* Bottom: Gradient line */}
            <div className="gradient-line"></div>
        </div>
    );
}

export default Navbar;
