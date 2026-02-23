"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  FaHome,
  FaPhone,
  FaProductHunt,
  FaRegEnvelope,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { useMemo, useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import MainPortal from "./MainPortal/MainPortal";
import { FcViewDetails } from "react-icons/fc";
import Login from "./Login/Login";
import useWindowWidth from "../Hooks/useWindow";
import { BsTicketDetailedFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import StickyContactBar from "./StickyContactBar";
export default function Header() {
  const [signInShadow, setSignInShadow] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeTimeout = useRef(null);
  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
        closeTimeout.current = null;
      }
    };
  }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const menuItems = [
    // "New",
    // "Collections",
    // "Furniture",
    // "Outdoor",
    // "Decor",
    // "Lightings",
    // "Ready to Ship",
    // "Shop By Style",
    // "Stores",
    { name: "Home", link: "/" },
    { name: "Our Products", link: "/Products" },
    { name: "About Us", link: "/About" },
    { name: "Contact Us", link: "/Contact" },
  ];
  const [openForm, setOpenForm] = useState(false);
  const handleFormSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Request Submitted Successfully ✅");
  };

  const width = useWindowWidth();
  const router = useRouter();
  const pathname = usePathname();

  console.log(width);
  const handleNavigate = (link) => {
    router.push(link);
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("signInShadow");
      if (saved !== null) setSignInShadow(saved === "1");
    } catch (e) {}
  }, []);

  const toggleSignInShadow = () => {
    setSignInShadow((s) => {
      const next = !s;
      try {
        localStorage.setItem("signInShadow", next ? "1" : "0");
      } catch (e) {}
      return next;
    });
  };
  return (
    <>
      {/* DARK OVERLAY */}

      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`${styles.sidebar} ${sidebarOpen ? styles.showSidebar : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>

        <ul className={styles.mobileList}>
          <li className={styles.mobileItem}>
            <Link
              onClick={() => setSidebarOpen(false)}
              className="text-dark"
              href="/"
            >
              Home
            </Link>
          </li>
          <li
            className={styles.mobileItem}
            style={{
              position: "relative",
              paddingBottom: mobileProductsOpen ? 0 : undefined,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => setMobileProductsOpen((v) => !v)}
            >
              <span>Our Products</span>
              <FaAngleUp
                size={16}
                style={{
                  transform: mobileProductsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.25s",
                }}
              />
            </div>
            {mobileProductsOpen && (
              <ul className={styles.mobileSubMenu}>
                <li
                  className={styles.mobileSubMenuItem}
                  onClick={() => {
                    setSidebarOpen(false);
                    handleNavigate("/Smart-Bench");
                  }}
                >
                  AI SMART BENCH
                </li>
                <li
                  className={styles.mobileSubMenuItem}
                  onClick={() => {
                    setSidebarOpen(false);
                    handleNavigate("/Toys");
                  }}
                >
                  Wooden Toys
                </li>
                <li
                  className={styles.mobileSubMenuItem}
                  onClick={() => {
                    setSidebarOpen(false);
                    handleNavigate("/Products?cat=furniture-epoxy");
                  }}
                >
                  FURNITURE & EPOXY FURNITURE
                </li>
                <li
                  className={styles.mobileSubMenuItem}
                  onClick={() => {
                    setSidebarOpen(false);
                    handleNavigate("/Epoxy");
                  }}
                >
                  epoxy flooring
                </li>
              </ul>
            )}
          </li>
          <li className={styles.mobileItem}>
            <Link
              onClick={() => setSidebarOpen(false)}
              className="text-dark"
              href="/About"
            >
              About Us
            </Link>
          </li>
          <li className={styles.mobileItem}>
            <Link
              onClick={() => setSidebarOpen(false)}
              className="text-dark"
              href="/Contact"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </aside>
      {/* HEADER */}
      <header className={styles.header}>
        <StickyContactBar />

        <nav className="   container-fluid">
          <div className=" d-flex align-items-center justify-content-between">
            {/* <div className="col-6" style={width < 992 ? { display: "none" } : { display: "block" }}>
              <ul className={styles.navMenu}>
                <li className={styles.navItem1}>Best Sellers</li>
                <li className={styles.navItem1}>Design Masters</li>
                <li className={styles.navItem1}>Free Design Services</li>
                <li className={styles.navItem1}>Partner Program</li>
              </ul>
            </div> */}
            <div className="  d-flex align-items-center">
              <div className="">
                <Link href="/" className={styles.logo}>
                  {/* DTALE<strong>MODERN</strong>
                   */}
                  <img
                    className=""
                    style={{
                      width: "100px",
                      height: "80px",
                    }}
                    src="/WhatsApp Image 2026-02-22 at 5.10.09 PM.jpeg"
                    alt=""
                  />
                </Link>
              </div>

              <ul className={`${styles.navMenu} gap-4`}>
                <li
                  onClick={() => handleNavigate("/")}
                  className={`${styles.navItem} ${pathname === "/" ? styles.activeNav : ""}`}
                >
                  Home
                </li>
                <li
                  className={`${styles.navItem} ${
                    pathname.startsWith("/Products") ||
                    pathname === "/Smart-Bench" ||
                    pathname === "/Toys" ||
                    pathname === "/Epoxy"
                      ? styles.activeNav
                      : ""
                  }`}
                  onMouseEnter={() => {
                    if (closeTimeout.current) {
                      clearTimeout(closeTimeout.current);
                      closeTimeout.current = null;
                    }
                    setActiveMenu("products");
                  }}
                  onMouseLeave={() => {
                    closeTimeout.current = setTimeout(() => {
                      setActiveMenu(null);
                      closeTimeout.current = null;
                    }, 150);
                  }}
                  style={{ position: "relative" }}
                >
                  Our Products
                  <FaAngleUp
                    size={16}
                    className={styles.downIcon}
                    style={{
                      transform:
                        activeMenu === "products"
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      transition: "transform 0.25s",
                    }}
                  />
                  {activeMenu === "products" && (
                    <div
                      className={styles.megamnauCont}
                      onMouseEnter={() => {
                        if (closeTimeout.current) {
                          clearTimeout(closeTimeout.current);
                          closeTimeout.current = null;
                        }
                        setActiveMenu("products");
                      }}
                      onMouseLeave={() => {
                        closeTimeout.current = setTimeout(() => {
                          setActiveMenu(null);
                          closeTimeout.current = null;
                        }, 150);
                      }}
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "100%",
                        minWidth: 220,
                        zIndex: 1000,
                      }}
                    >
                      <div
                        className={styles.megaMenu}
                        style={{
                          padding: "12px 36px",
                          borderRadius: 12,
                          minWidth: 220,
                        }}
                      >
                        <div>
                          <div className={styles.col}>
                            <p
                              onClick={() => {
                                handleNavigate("/Smart-Bench");
                                setActiveMenu(null);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              AI SMART BENCH
                            </p>
                            <p
                              onClick={() => {
                                handleNavigate("/Toys");
                                setActiveMenu(null);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              WOODEN TOYS
                            </p>
                            <p
                              onClick={() => {
                                handleNavigate("/Products?cat=furniture-epoxy");
                                setActiveMenu(null);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              FURNITURE & EPOXY FURNITURE
                            </p>
                            <p
                              onClick={() => {
                                handleNavigate("/Epoxy");
                                setActiveMenu(null);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              EPOXY FLOORING
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  onClick={() => handleNavigate("/About")}
                  className={`${styles.navItem} ${pathname === "/About" ? styles.activeNav : ""}`}
                >
                  About Us
                </li>
                <li
                  onClick={() => handleNavigate("/Contact")}
                  className={`${styles.navItem} ${pathname === "/Contact" ? styles.activeNav : ""}`}
                >
                  Contact Us
                </li>
              </ul>
            </div>
            {/* <div className={` ${(width == 992 || width < 992) ? 'col-8' : 'col-3'}`}> */}
            <ul className={styles.navMenuRight}>
              {/* Sign In button (desktop) */}
              <li
                className={styles.navItem1}
                style={{
                  marginRight: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <button
                  className={`btn btn-primary rounded-pill px-4 py-2 ${signInShadow ? styles.signInBtnShadow : styles.signInBtnNoShadow}`}
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                    color: "white",
                  }}
                  onClick={() => router.push("/login")}
                >
                  Sign In
                </button>
              </li>

              {/* Email Link */}

              <li className={styles.navItem1}>
                <button
                  className={styles.mobileMenuBtn}
                  onClick={() => setSidebarOpen(true)}
                >
                  ☰
                </button>
              </li>
            </ul>
          </div>
          {/* </div> */}

          {/* {openForm && <MainPortal handleCloseModal={() => setOpenForm(false)}  >
            <Login
              onSubmit={handleFormSubmit}
              onClose={() => setOpenForm(false)}
            />
          </MainPortal>} */}
          {/* DESKTOP MENU */}

          {/* <ul className={styles.navMenu}>
            {menuItems.map((item) => (
              <li
                key={item}
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <small className={styles.menuWithIcon}>
                  {item}
                  {item === "Decor" && <FaAngleUp size={16} className={styles.downIcon} />}
                </small>

                {activeMenu === item && item === "Decor" && (
                  <div className={styles.megamnauCont}>
                    <div className={styles.megaMenu}>
                      <div className={styles.megaGrid}>
                        <div className={styles.col}>
                          <h4>Mirrors</h4>
                          <p>Wall Mirrors</p>
                          <p>Floor Mirrors</p>
                          <p>Decorative Mirrors</p>
                        </div>

                        <div className={styles.col}>
                          <h4>Decorative Objects</h4>
                          <p>Decor Pieces</p>
                          <p>Bookends</p>
                          <p>Lanterns</p>
                          <p>Candle Holders</p>
                          <p>Planters</p>
                        </div>

                        <div className={styles.col}>
                          <h4>Storages</h4>
                          <p>Fabric Racks</p>
                          <p>Bags & Baskets</p>
                          <p>Clock</p>
                        </div>

                        <div className={styles.col}>
                          <h4>Home Fragrance</h4>
                          <p>Pots</p>
                          <p>Candles</p>
                        </div>

                        <div className={styles.col}>
                          <h4>Art</h4>
                          <p>Paintings</p>
                          <p>Sculptures</p>
                          <p>Wall Decor</p>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul> */}
        </nav>
      </header>
    </>
  );
}
