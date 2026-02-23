"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const footerData = {
  Pages: [
    { name: "Home", link: "/" },
    { name: "About", link: "/About" },
    { name: "Products", link: "/Products" },
    { name: "Contact Us", link: "/Contact" },
  ],

  services: ["Partner Program", "Design Projects", "Collaborators", "FAQ"],

  shop: ["Furniture", "Collections", "Accents", "Art"],

  terms: [
    { name: "Privacy Policy", link: "/privacyPolicy" },
    { name: "Return Policy", link: "/return-policy" },
    { name: "Shipping Policy", link: "/shipping-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        {/* <div className="row py-5">
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Pages</h6>
            <ul className={styles.footerList}>
              {footerData.Pages.map((item, i) => (
                <li key={i}>
                  <Link href={item?.link}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Services</h6>
            <ul className={styles.footerList}>
              {footerData.services.map((item, i) => (
                <li key={i}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Terms & Conditions</h6>
            <ul className={styles.footerList}>
              {footerData.terms.map((item, i) => (
                <li key={i}>
                  <Link href={item?.link}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-sm-12 mb-4">
            <h6 className={styles.footerTitle}>
              Sign up for emails packed with finds and inspiration
            </h6>

            <div className={styles.footerNewsletter}>
              <input
                type="email"
                placeholder="Enter Your Email Id"
                className={`form-control ${styles.emailInput}`}
              />
              <button className={`btn ${styles.subscribeBtn}`}>
                Subscribe
              </button>
            </div>

            <div className={`mt-4 d-flex gap-4 ${styles.footerSocial}`}>
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaYoutube />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div> */}
          <div className=" d-flex justify-content-between align-items-center">
            <div className={` ${styles.footerBottom}`}>
          <p className="m-0  text-center">
            
           © {2025} Infiniox Private Limited. All rights reserved.
          </p>
        </div> 
    <div className={`d-flex justify-content-end pt-3
        ${styles.footerIcons}`}>
    <i className={styles.iconBox}>      <FaYoutube /></i>
    <i className={styles.iconBox}>  <FaFacebookF /></i>
    <i className={styles.iconBox}>    <FaInstagram /></i>
    </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
