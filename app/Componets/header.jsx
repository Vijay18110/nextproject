"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          DTALE<strong>MODERN</strong>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          {[
            "New",
            "Collections",
            "Furniture",
            "Outdoor",
            "Decor",
            "Lightings",
            "Ready to Ship",
            "Shop By Style",
            "Stores",
            "Warehouse Sale",
          ].map((item) => (
            <li
              key={item}
              className={styles.navItem}
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span>{item}</span>

              {/* Mega Menu - only for Decor */}
              {activeMenu === item && item === "Decor" && (
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
                      <p>Lanterns & Candle Holders</p>
                      <p>Cushions & Runners</p>
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
                      <p>Decor</p>
                      <p>Wall Decor</p>
                    </div>

                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className={styles.mobileMenuBtn}>☰</div>
      </nav>
    </header>
  );
}
