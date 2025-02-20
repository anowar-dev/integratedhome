"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    // FaMobileAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaShopify,
} from "react-icons/fa";

// Define the header animation variant.
const headerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } },
};

const Header = () => {
    return (
        <motion.header
            className="fixed top-0 left-0 w-full z-20 bg-secondary bg-opacity-80"
            variants={headerVariant}
            initial="hidden"
            animate="visible"
        >
            {/* First row: Social Icons */}
            <div className="flex justify-center px-4 pt-4">
                <div className="flex space-x-4">
                    {/* <Link href="wwww.facebook.com" className="text-light hover:text-secondary transition">
                        <FaMobileAlt />
                    </Link> */}
                    <Link target="_blank" href="https://www.facebook.com" className="text-light hover:text-secondary transition">
                        <FaFacebookF />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com" className="text-light hover:text-secondary transition">
                        <FaInstagram />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com" className="text-light hover:text-secondary transition">
                        <FaLinkedinIn />
                    </Link>
                    <Link target="_blank" href="https://www.shopify.com" className="text-light hover:text-secondary transition">
                        <FaShopify />
                    </Link>
                </div>
            </div>

            {/* Second row: Topbar with Logo and Navigation */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 pb-4">
                {/* Left: Logo */}
                <Link href="/"><h1 className="text-3xl font-bold text-primary mb-4 cursor-pointer">integratedhome.</h1></Link>
                {/* Right: Navigation Links */}
                <nav className="flex space-x-8">
                    <Link href="/" className="text-light hover:text-primary transition">
                        Home
                    </Link>
                    <Link href="/#get-in-touch" className="text-light hover:text-primary transition">
                        Get In Touch!
                    </Link>
                    <Link href="/projects" className="text-light hover:text-primary transition">
                        Projects
                    </Link>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
