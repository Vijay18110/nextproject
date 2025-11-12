/* eslint-disable react/no-unknown-property */
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
  FaChevronDown,
  FaCogs,
  FaCube,
} from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);



  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <FaHome />,
    },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      href:"#",
      submenu: [
        { name: "Smart Bench", href: "/Smart-Bench", icon: <FaCogs /> },
        { name: "Epoxy", href: "/Epoxy", icon: <FaCube /> },
        { name: "Toys", href: "/Toys", icon: <FaPuzzlePiece /> },
      ],
    },
    {
      name: "About",
      href: "/About",
      icon: <FaInfoCircle />,
    },
    {
      name: "Contact",
      href: "/Contact",
      icon: <FaPhoneAlt />,
    },
  ];


  const toggleSubMenu = (name) => {
    setActiveSubMenu(activeSubMenu === name ? null : name);
  };
const router=useRouter()
  return (
    <header className="position-fixed top-0 start-0 w-100 bg-white bg-opacity-90 backdrop-blur border-bottom shadow-sm z-3">
      <nav className="container d-flex justify-content-between align-items-center py-3 px-3">
        {/* 🔹 Logo */}
        <Link href="/" className="fw-bold fs-4 text-decoration-none  text-gradient activeTextColor">
          Logo
        </Link>
        {/* 🔹 Desktop Nav */}
        <ul className="d-none d-md-flex list-unstyled mb-0 gap-1 align-items-center">
          {navLinks.map((link, idx) => (
            <li key={idx} className="position-relative">
              {/* If has submenu */}
              {link.submenu ? (
                <div className="d-flex align-items-center  cursor-pointer text-dark fw-medium" onMouseEnter={() =>
                  toggleSubMenu(link.name)}
                  onMouseLeave={() => toggleSubMenu(null)}
                >
                  <Link href={link?.submenu ? "#" : link.href} className={`px-1 py-2 rounded-3 text-decoration-none ${pathname === link.href ? "active-gradient activeTextColor" : "text-dark hover-bg"}`}>
                    {link.name}
                  </Link>
                  <FaChevronDown size={12} className="" />

                  {/* 🔹 Submenu for Desktop */}
                  <AnimatePresence>
                    {activeSubMenu === link.name && (
                      <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="position-absolute start-0 mt-2 list-unstyled shadow-lg rounded-3 bg-white py-2 w-48 border"
                        style={{ top: "100%", minWidth: "220px" }}>
                        {link.submenu.map((sub) => (
                          <motion.li key={sub.href} whileHover={{ scale: 1.03, x: 3 }} whileTap={{ scale: 0.97 }}>
                            <Link href={sub.href}
                              className="d-flex align-items-center gap-2 px-3 py-2 text-decoration-none text-dark fw-semibold rounded-2 submenu-hover">
                              {sub.icon && (
                                <span className="text-primary">{sub.icon}</span>
                              )}
                              {sub.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={link.href} className={`d-flex align-items-center gap-1 px-3 py-2 rounded-3 text-decoration-none fw-medium ${pathname === link.href ? "active-gradient activeTextColor" : "text-dark hover-bg"}`}>
                  {link.icon}
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Toggle */}
        <button className="btn border-0 d-md-none text-dark" onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <FaTimes size={22} /> :
            <FaBars size={22} />}
        </button>
      </nav>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="d-md-none position-fixed top-0 start-0 w-100 bg-white bg-opacity-95 border-top shadow-lg py-4 px-4 rounded-bottom"
            style={{ marginTop: "60px" }}>
            {navLinks.map((link, idx) => (
              <div key={idx}>
                <motion.div whileTap={{ scale: 0.97 }}>
                  <Link href={link.href} onClick={()=>{
                    if(link.href!="#"){
                      router.push(link.href)
                      setIsOpen(false)
                    }
                    else{
                      
                    toggleSubMenu(link.name);
                  
                    }
                  }}
                    className={`d-flex align-items-center justify-content-between px-3 py-2 rounded-3 text-decoration-none fw-semibold mb-2 ${pathname === link.href
                      ? "active-gradient activeTextColor"
                      : "text-dark hover-bg"
                      }`}
                  >
                    <span className="d-flex align-items-center gap-3">
                      {link.icon}
                      {link.name}
                    </span>
                    {link.submenu &&
                      <FaChevronDown size={12} />}
                  </Link>
                </motion.div>

                {/* 🔹 Mobile Submenu */}
                <AnimatePresence>
                  {activeSubMenu === link.name && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{
                      height: 0,
                      opacity: 0
                    }} transition={{ duration: 0.3 }} className="list-unstyled ms-4 mb-3">
                      {link?.submenu?.map((sub) => (
                        <motion.li key={sub.href} whileHover={{ x: 5 }}>
                          <Link href={sub.href} onClick={() => setIsOpen(false)}
                            className="d-flex align-items-center gap-2 px-2 py-2 text-decoration-none text-dark rounded-2 submenu-hover"
                          >
                            {sub.icon && (
                              <span className="text-primary">{sub.icon}</span>
                            )}
                            {sub.name}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;