"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { FaRegEnvelope, FaRegHeart, FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleUp,  FaUserAstronaut } from "react-icons/fa6";
import MainPortal from "./MainPortal/MainPortal";
import RequestForm from "./EnqueryForm";
import Login from "./Login/Login";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    "New",
    "Collections",
    "Furniture",
    "Outdoor",
    "Decor",
    "Lightings",
    "Ready to Ship",
    "Shop By Style",
    "Stores",
  ];
const [openForm, setOpenForm] = useState(false);
  const handleFormSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Request Submitted Successfully ✅");
  };
  return (
    <>
      {/* DARK OVERLAY */}
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      {/* MOBILE SIDEBAR */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.showSidebar : ""}`}>
        <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>
          ✕
        </button>

        <ul className={styles.mobileList}>
          {menuItems.map((item) => (
            <li key={item} className={styles.mobileItem}>
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* HEADER */}
      <header className={styles.header}>
        <nav className=" container-xl  container-fluid-lg" >
                
                <div className="row">
                      <div className="col-3">
                          <Link href="/" className={styles.logo}>
                                DTALE<strong>MODERN</strong>
                          </Link>
                       </div>
                        <div className="col-6">
                        <ul className={styles.navMenu}>
            <li className={styles.navItem1}> Best Sellers</li>
            <li className={styles.navItem1}> Design Masters</li>
            <li className={styles.navItem1}> Free Design Services</li>
            <li className={styles.navItem1}>Partner Program</li>
            </ul>
                    <button
            className={styles.mobileMenuBtn}
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

                        </div>


                         <div className="col-3">
                        <ul className={styles.navMenu}>
            <li className={styles.navItem1} onClick={()=>setOpenForm(true)}> <FaRegUser className="mb-1" size={15}/> Login</li>
            <li  className={styles.navItem1}><CiSearch size={22}/></li>
            <li  className={styles.navItem1}><FaRegHeart size={20}/></li>
            <li  className={styles.navItem1}><FaRegEnvelope size={20}/></li>
           
            </ul>
              

                        </div>
                </div>
                
             
                
                
              
         {openForm && <MainPortal handleCloseModal={() => setOpenForm(false)}  >
                                    <Login
                                        onSubmit={handleFormSubmit}
                                        onClose={() => setOpenForm(false)}
                                    />
                                </MainPortal>}
     

          {/* DESKTOP MENU */}
        
             <ul className={styles.navMenu}>
            {menuItems.map((item) => (
              <li
                key={item}
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <small className={styles.menuWithIcon}>
                  {item}
                  {item==="Decor"&&<FaAngleUp size={16} className={styles.downIcon} />}
                </small>

                {/* DECOR MEGA MENU */}
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
          </ul>
     
     

      
        </nav>
      </header>
    </>
  );
}
