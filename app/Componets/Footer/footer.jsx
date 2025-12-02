// import React from "react";
// import "./Footer.css";
// import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";


// export const footerData = {
//   about: [
//     "Why Us",
//     "Testimonials",
//     "Awards & Recognition",
//     "Measure Your Space",
//     "Care and Maintenance",
//     "Blog",
//     "Contact Us",
//   ],

//   services: [
//     "Partner Program",
//     "Design Projects",
//     "Collaborators",
//     "FAQ",
//   ],

//   shop: [
//     "Furniture",
//     "Collections",
//     "Accents",
//     "Art",
//   ],

//   terms: [
//     "Privacy Policy",
//     "Return Policy",
//     "Shipping Policy",
//     "Warranty Policy",
//   ],
// };

// const Footer = () => {
//   return (
//     <footer className="footer-section py-5">
//       <div className="container">

//         <div className="row mb-5">
//           {/* About */}
//           <div className="col-md-2 col-sm-6 mb-4">
//             <h6 className="footer-title">About Us</h6>
//             <ul className="footer-list">
//               {footerData.about.map((item, i) => (
//                 <li key={i}><a href="#">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="col-md-2 col-sm-6 mb-4">
//             <h6 className="footer-title">Services</h6>
//             <ul className="footer-list">
//               {footerData.services.map((item, i) => (
//                 <li key={i}><a href="#">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Shop */}
//           <div className="col-md-2 col-sm-6 mb-4">
//             <h6 className="footer-title">Shop</h6>
//             <ul className="footer-list">
//               {footerData.shop.map((item, i) => (
//                 <li key={i}><a href="#">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Terms */}
//           <div className="col-md-3 col-sm-6 mb-4">
//             <h6 className="footer-title">Terms and Conditions</h6>
//             <ul className="footer-list">
//               {footerData.terms.map((item, i) => (
//                 <li key={i}><a href="#">{item}</a></li>
//               ))}
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="col-md-3 col-sm-12">
//             <h6 className="footer-title">Sign up for emails packed with finds and inspiration</h6>

//             <div className="footer-newsletter">
//               <input 
//                 type="email" 
//                 placeholder="Enter Your Email Id" 
//                 className="form-control email-input"
//               />
//               <button className="btn subscribe-btn">Subscribe</button>
//             </div>

//             <div className="footer-social mt-4 d-flex gap-4">
//               <a href="#"><FaFacebookF /></a>
//               <a href="#"><FaYoutube /></a>
//               <a href="#"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Part */}
//         <div className="footer-bottom d-flex justify-content-between mt-4 pt-3">
//           <p className="m-0">© 2025 Dtale Modern</p>
//           <p className="m-0">Designed by: <a href="#">Webandcrafts</a></p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export const footerData = {
  about: [
    "Why Us",
    "Testimonials",
    "Awards & Recognition",
    "Measure Your Space",
    "Care and Maintenance",
    "Blog",
    "Contact Us",
  ],

  services: [
    "Partner Program",
    "Design Projects",
    "Collaborators",
    "FAQ",
  ],

  shop: [
    "Furniture",
    "Collections",
    "Accents",
    "Art",
  ],

  terms: [
    "Privacy Policy",
    "Return Policy",
    "Shipping Policy",
    "Warranty Policy",
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">

        <div className="row py-5">

          {/* About */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>About Us</h6>
            <ul className={styles.footerList}>
              {footerData.about.map((item, i) => (
                <li key={i}><Link href="#">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Services</h6>
            <ul className={styles.footerList}>
              {footerData.services.map((item, i) => (
                <li key={i}><Link href="#">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Shop</h6>
            <ul className={styles.footerList}>
              {footerData.shop.map((item, i) => (
                <li key={i}><Link href="#">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className={styles.footerTitle}>Terms & Conditions</h6>
            <ul className={styles.footerList}>
              {footerData.terms.map((item, i) => (
                <li key={i}><Link href="#">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
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
              <button className={`btn ${styles.subscribeBtn}`}>Subscribe</button>
            </div>

            <div className={`mt-4 d-flex gap-4 ${styles.footerSocial}`}>
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaYoutube /></Link>
              <Link href="#"><FaInstagram /></Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className={`d-flex justify-content-between ${styles.footerBottom}`}>
          <p className="m-0">© 2025 Dtale Modern</p>
          <p className="m-0">
            Designed by: <Link href="#"></Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

