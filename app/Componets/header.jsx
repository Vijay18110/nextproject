"use client";

import React, { useState } from "react";
import {
    FaHome,
    FaBoxOpen,
    FaInfoCircle,
    FaPhoneAlt,
    FaUserAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/", icon: <FaHome /> },
        { name: "Products", href: "/Products", icon: <FaBoxOpen /> },
        { name: "About", href: "/About", icon: <FaInfoCircle /> },
        { name: "Contact", href: "/Contact", icon: <FaPhoneAlt /> },
        { name: "Blog", href: "/Blog", icon: <FaUserAlt /> },
    ];

    return (
        <header className="position-fixed top-0 start-0 w-100 bg-white bg-opacity-90 backdrop-blur border-bottom shadow-sm z-3 ">
            <nav className="container d-flex justify-content-between align-items-center py-3 px-3">
                {/* 🔹 Logo */}
                <Link
                    href="/"
                    className="fw-bold fs-4 text-decoration-none text-gradient"
                >
                    MyNextApp
                </Link>

                {/* 🔹 Desktop Nav */}
                <ul className="d-none d-md-flex list-unstyled mb-0 gap-4 align-items-center">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`d-flex align-items-center gap-2 px-3 py-2 rounded-3 text-decoration-none fw-medium transition ${pathname === link.href
                                    ? "active-gradient  activeTextColor  "
                                    : "text-dark hover-bg"
                                    }`}
                            >
                                {/* {link.icon} */}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* 🔹 Mobile Toggle */}
                <button
                    className="btn border-0 d-md-none text-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </nav>

            {/* 🔹 Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="d-md-none position-fixed top-0 start-0 w-100 bg-white bg-opacity-95 border-top shadow-lg py-4 px-4 rounded-bottom"
                        style={{ marginTop: "60px" }}
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.href} whileTap={{ scale: 0.97 }}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-decoration-none fw-semibold mb-2 ${pathname === link.href
                                        ? "active-gradient activeTextColor"
                                        : "text-dark hover-bg"
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
