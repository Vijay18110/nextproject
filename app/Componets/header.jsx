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
import StickyContactBar from "./StickyContactBar";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
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
    {name:"Home",link:"/"},
    {name:"Our Products",link:"/Products"},
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
          <li className={styles.mobileItem}>
            <Link onClick={() => setSidebarOpen(false)} className="text-dark" href="/">
              Home
            </Link>
          </li>
          <li className={styles.mobileItem} style={{position:'relative', paddingBottom: mobileProductsOpen ? 0 : undefined}}>
            <div
              style={{display:'flex', alignItems:'center', justifyContent:'space-between', cursor:'pointer'}}
              onClick={() => setMobileProductsOpen((v) => !v)}
            >
              <span>Our Products</span>
              <FaAngleUp size={16} style={{transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s'}} />
            </div>
            {mobileProductsOpen && (
              <ul className={styles.mobileSubMenu}>
                <li className={styles.mobileSubMenuItem} onClick={()=>{setSidebarOpen(false); handleNavigate("/Smart-Bench")}}>AI SMART BENCH</li>
                <li className={styles.mobileSubMenuItem} onClick={()=>{setSidebarOpen(false); handleNavigate("/Toys")}}>Wooden Toys</li>
                <li className={styles.mobileSubMenuItem} onClick={()=>{setSidebarOpen(false); handleNavigate("/Products?cat=furniture-epoxy")}}>FURNITURE & EPOXY FURNITURE</li>
                <li className={styles.mobileSubMenuItem} onClick={()=>{setSidebarOpen(false); handleNavigate("/Epoxy")}}>epoxy flooring</li>
              </ul>
            )}
          </li>
          <li className={styles.mobileItem}>
            <Link onClick={() => setSidebarOpen(false)} className="text-dark" href="/About">
              About Us
            </Link>
          </li>
          <li className={styles.mobileItem}>
            <Link onClick={() => setSidebarOpen(false)} className="text-dark" href="/Contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </aside>
      {/* HEADER */}
      <header className={styles.header}>
              <StickyContactBar />

        <nav className="   container-fluid">
          <div className=" d-flex align-items-center  ">
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
              <li onClick={()=>handleNavigate("/")} className={styles.navItem}>
                Home
              </li>
              <li
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu("products")}
                onMouseLeave={() => setActiveMenu(null)}
                style={{position:'relative'}}
              >
                Our Products
                <FaAngleUp size={16} className={styles.downIcon} style={{transform: activeMenu === "products" ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s'}} />
                {activeMenu === "products" && (
                  <div className={styles.megamnauCont} style={{position:'absolute', left:0, top:'100%', minWidth:220, zIndex:1000}}>
                    <div className={styles.megaMenu} style={{padding:'12px 36px', borderRadius:12, minWidth:220}}>
                      <div>
                        <div className={styles.col}>
                          <p onClick={()=>handleNavigate("/Smart-Bench")} style={{cursor:'pointer'}}>AI SMART BENCH</p>
                          <p onClick={()=>handleNavigate("/Toys")} style={{cursor:'pointer'}}>Wooden Toys</p>
                          <p onClick={()=>handleNavigate("/Products?cat=furniture-epoxy")} style={{cursor:'pointer'}}>FURNITURE & EPOXY FURNITURE</p>
                          <p onClick={()=>handleNavigate("/Epoxy")} style={{cursor:'pointer'}}>epoxy flooring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li onClick={()=>handleNavigate("/About")} className={styles.navItem}>
                About Us
              </li>
              <li onClick={()=>handleNavigate("/Contact")} className={styles.navItem}>
                Contact Us
              </li>
            </ul>

            {/* <div className={` ${(width == 992 || width < 992) ? 'col-8' : 'col-3'}`}> */}
              <ul className={styles.navMenuRight}>
                {/* <li className={styles.navItem1} onClick={() => setOpenForm(true)}> <FaRegUser className="mb-1" size={15} /> Login</li> */}
 

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
