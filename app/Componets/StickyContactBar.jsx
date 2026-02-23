'use client';

import { useState, useEffect } from 'react';
import styles from './StickyContactBar.module.css';

export default function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${styles.contactBar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className="col-lg-6 col-md-6 col-sm-12"
        style={{ fontSize: 10, textAlign: "right", marginTop: 2 }}>
        <span style={{ fontWeight: "bold" }}>For enquiry : &nbsp;</span>
        <i className="bi bi-envelope-open">
          &nbsp;Email Us on : info@infiniox.com
        </i>
        &nbsp; | &nbsp;
        <i className="bi bi-telephone">
          &nbsp;Call Us on :+91 – 7715857501 / 9324010854
        </i>
      </div>
    </div>
  );
}
