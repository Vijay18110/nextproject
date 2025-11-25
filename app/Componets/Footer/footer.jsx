
'use client'
import React from "react";
import styles from "./Footer.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from '../../Shared/Button'
import {
  FaApple,
  FaGooglePlay,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer} key={100}>
      <div className={styles.backToTop}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <FaArrowUp />
        </button>
      </div>

      <div className={styles.footerContent}>
        {/* GET OUR APPLICATION */}
        <div className={styles.footerCol}>
          <h3>GET OUR APPLICATION</h3>
          <div className={styles.divider}></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque
            ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>

        </div>

        {/* HELPFUL LINKS */}
        <div className={styles.footerCol}>
          <h3>HELPFUL LINKS</h3>
          <div className={styles.divider}></div>
          <ul>
            <li><Link href="/About">About Us</Link></li>
            <li><Link href="/Contact">Contacts</Link></li>
            <li><Link href="/privacyPolicy">Privacy Policy</Link></li>
            <li><Link href="/Epoxy">Epoxy</Link></li>
            <li><Link href="/Smart-Bench">Smart-Bench</Link></li>
            <li><Link href="/Toys">Toys</Link></li>

          </ul>
        </div>

        {/* OUR CONTACTS */}
        <div className={styles.footerCol}>
          <h3>OUR CONTACTS</h3>
          <div className={styles.divider}></div>
          <ul className={styles.contactList}>
            <li>
              <Link href="mailto:yourmail@domain.com" className={styles.contactItem}>
                <FaEnvelope /> yourmail@domain.com
              </Link>
            </li>
            <li>
              <FaMapMarkerAlt /> USA 27th Brooklyn NY
            </li>
            <li>
              <Link href="tel:+919628554907" className={styles.contactItem}>
                <FaPhone /> +91 9628554907
              </Link>
            </li>
          </ul>
          <Button className={styles.contactBtn} text="Get in Touch" />
        </div>

        {/* SUBSCRIBE */}

      </div>

      <div className={styles.bottomBar}>
        <p>©RentState 2024. All Rights Reserved.</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;



const SocialIcons = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaXTwitter />, link: "https://x.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTiktok />, link: "https://tiktok.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
  ];

  return (
    <div className={styles.socialIcons}>
      {socials.map((s, i) => (
        <a
          key={i}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
};

