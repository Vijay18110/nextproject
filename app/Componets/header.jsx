"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { FaHome, FaPhone, FaProductHunt, FaRegEnvelope, FaRegHeart, FaRegUser } from "react-icons/fa";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import MainPortal from "./MainPortal/MainPortal";
import { FcViewDetails } from "react-icons/fc";
import Login from "./Login/Login";
import useWindowWidth from "../Hooks/useWindow";
import { BsTicketDetailedFill } from "react-icons/bs";
 import {motion} from 'framer-motion'
import { useRouter } from "next/navigation";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    {name:"Home",link:"/"},
    {name:"Product",link:"/Products"},
    {name:"About Us",link:"/About"},
    {name:"Contact Us",link:"/Contact"},
  ];
  const [openForm, setOpenForm] = useState(false);
  const handleFormSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Request Submitted Successfully ✅");
  };

  const width = useWindowWidth();
const router=useRouter();

  console.log(width)
  const handleNavigate=(link)=>{
    router.push(link);
  }
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
            <li key={item?.name} className={styles.mobileItem}>
              <Link onClick={() => setSidebarOpen(false)} className="text-dark" href={item?.link}>
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {/* HEADER */}
      <header className={styles.header}>
        <nav className="container-xl  container-fluid">
          <div className=" d-flex align-items-center  justify-content-between">
            <div className="">
              <Link href="/" className={styles.logo}>
                {/* DTALE<strong>MODERN</strong> 
                */}
                <img className="" style={{
                  width:"100px",
                  height:"46px"
                }} src="/logo2.png" alt="" />
              </Link>
            </div>
            {/* <div className="col-6" style={width < 992 ? { display: "none" } : { display: "block" }}>
              <ul className={styles.navMenu}>
                <li className={styles.navItem1}>Best Sellers</li>
                <li className={styles.navItem1}>Design Masters</li>
                <li className={styles.navItem1}>Free Design Services</li>
                <li className={styles.navItem1}>Partner Program</li>
              </ul>
            </div> */}
            <ul className={`${styles.navMenu} gap-4`}>
              <li  onClick={()=>handleNavigate("/")} className={styles.navItem}><FaHome className="" size={13}/> Home</li>
              <li onClick={()=>handleNavigate("/Products")} className={styles.navItem}> <FaProductHunt/>    Products</li>
              <li onClick={()=>handleNavigate("/About")} className={styles.navItem}><BsTicketDetailedFill  />    About Us</li>
              <li onClick={()=>handleNavigate("/Contact")} className={styles.navItem}><IoMdContact />    Contact Us</li>  
            </ul>

            {/* <div className={` ${(width == 992 || width < 992) ? 'col-8' : 'col-3'}`}> */}
              <ul className={styles.navMenuRight}>
                {/* <li className={styles.navItem1} onClick={() => setOpenForm(true)}> <FaRegUser className="mb-1" size={15} /> Login</li> */}
<motion.li 
    className={styles.navItem1} 
    whileHover={{ y: -2 }}
    onClick={() => setOpenForm(true)}
  >
    <a href="tel:+919628554907" className={styles.link}>
      <FaPhone className="me-2" size={12} />
      91+ 9628554907
    </a>
  </motion.li>

  {/* Email Link */}
  <motion.li 
    className={styles.navItem1}
    whileHover={{ y: -2 }}
  >
    <a href="mailto:info@infiniox.com" className={styles.link}>
      <FaRegEnvelope size={12} className="me-2" />
      info@infiniox.com
    </a>
  </motion.li>
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
