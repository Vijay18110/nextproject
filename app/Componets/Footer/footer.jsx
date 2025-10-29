
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
          <div className={styles.appButtons}>
            <button className={styles.appBtn}>
              <FaApple /> On Apple Store
            </button>
            <button className={styles.appBtn}>
              <FaGooglePlay /> On Google Play
            </button>
          </div>
        </div>

        {/* HELPFUL LINKS */}
        <div className={styles.footerCol}>
          <h3>HELPFUL LINKS</h3>
          <div className={styles.divider}></div>
          <ul>
            <li>Our Last News</li>
            <li>Pricing Plans</li>
            <li>Contacts</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* OUR CONTACTS */}
        <div className={styles.footerCol}>
          <h3>OUR CONTACTS</h3>
          <div className={styles.divider}></div>
          <ul className={styles.contactList}>
            <li>
              <FaEnvelope /> yourmail@domain.com
            </li>
            <li>
              <FaMapMarkerAlt /> USA 27th Brooklyn NY
            </li>
            <li>
              <FaPhone /> +2(11)123456789
            </li>
          </ul>
          <Button className={styles.contactBtn} text="Get in Touch"/>
        </div>

        {/* SUBSCRIBE */}
        <div className={styles.footerCol}>
          <h3>SUBSCRIBE</h3>
          <div className={styles.divider}></div>
          <p>
            Want to be notified when we launch a new template or update? Just
            sign up and we’ll send you a notification by email.
          </p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Your Email" />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>©RentState 2024. All Rights Reserved.</p>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaTiktok />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
