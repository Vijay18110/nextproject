// "use client";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Button from "./Shared/Button";
// import Slider from "./ExternalLib/Carousel/Carousel";
// import HeroSlider from "./Componets/HeroSection";
// import WhatWeDo from "./Componets/WhatWeDo";
// import Products from "./Componets/ProductSection/ProductSection";
// import { products } from "./StaticData/Products";
// import ProductCard from './Shared/ProductCard/ProductCard'
// import useWindowWidth from './Hooks/useWindow.js'
// import Link from "next/link";
// export default function HomePage() {
// const width=useWindowWidth()
// const { scrollY } = useScroll();
// const y = useTransform(scrollY, [0, 300], [0, 100]);
// const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.7]);
// const productData = [
//   {
//     id: 1,
//     title: "New Arrival",
//     subtitle: "New Arrivals",
//     btn: "Shop Now +",
//     image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
//     link: "/new-arrivals"
//   },
//   {
//     id: 2,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
//   {
//     id: 3,
//     title: "Trending Now",
//     subtitle: "Trending Now",
//     btn: "Shop Now +",
//     image: "/CHESS FIRE/rerere-1024x576.jpg",
//     link: "/trending-now"
//   }
// ];




// const productData3 = [
//   {
//     id: 1,
//     title: "New Arrival",
//     subtitle: "New Arrivals",
//     btn: "Shop Now +",
//     image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
//     link: "/new-arrivals"
//   },
//   {
//     id: 2,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
//   {
//     id: 3,
//     title: "Trending Now",
//     subtitle: "Trending Now",
//     btn: "Shop Now +",
//     image: "/CHESS FIRE/rerere-1024x576.jpg",
//     link: "/trending-now"
//   },
//     {
//     id: 1,
//     title: "New Arrival",
//     subtitle: "New Arrivals",
//     btn: "Shop Now +",
//     image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
//     link: "/new-arrivals"
//   },
//   {
//     id: 2,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
//   {
//     id: 3,
//     title: "Trending Now",
//     subtitle: "Trending Now",
//     btn: "Shop Now +",
//     image: "/CHESS FIRE/rerere-1024x576.jpg",
//     link: "/trending-now"
//   },
//     {
//     id: 1,
//     title: "New Arrival",
//     subtitle: "New Arrivals",
//     btn: "Shop Now +",
//     image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
//     link: "/new-arrivals"
//   },
//   {
//     id: 2,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
 
// ];


// const productData2 = [
//   {
//     id: 1,
//     title: "New Arrival",
//     subtitle: "New Arrivals",
//     btn: "Shop Now +",
//     image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
//     link: "/new-arrivals"
//   },
//   {
//     id: 2,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
//    {
//     id: 5,
//     title: "Ready to Ship",
//     subtitle: "Ready to Ship",
//     btn: "Shop Now +",
//     image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
//     link: "/ready-to-ship"
//   },
//   {
//     id: 3,
//     title: "Trending Now",
//     subtitle: "Trending Now",
//     btn: "Shop Now +",
//     image: "/CHESS FIRE/rerere-1024x576.jpg",
//     link: "/trending-now"
//   }
// ];


// const features = [
//   { icon: <ShieldIcon />, title: "10 Year Warranty" },
//   { icon: <FactoryIcon />, title: "Direct Selling : Factory To Customer" },
//   { icon: <ChecklistIcon />, title: "66 Quality Checks" },
//   { icon: <WoodLayersIcon />, title: "KD (Kiln Dried) and HT (Heat Treated)" },
//   { icon: <CubeIcon />, title: "Ergonomically Designed" },
//   { icon: <ChainIcon />, title: "Generations Long Durability" },
//   { icon: <BadgeIcon />, title: "All India Service Warranty" },
//   { icon: <SmileIcon />, title: "Free Of Child Labour" }
// ]

// const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1424 }, items: 4, slidesToSlide: 1 ,partialVisibilityGutter:width>480?70:width>402?30:2},
//     laptop: { breakpoint: { max: 1424, min: 1024 }, items:3 , slidesToSlide: 1 ,partialVisibilityGutter:width>480?70:width>402?30:2},
//     tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1,partialVisibilityGutter:width>480?70:width>402?30:2},
//     mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1,partialVisibilityGutter:width>480?70:width>402?30:2 },
//   };
//   return (
//     <main className=" bg-white text-dark" style={{ marginTop: "-75px" }}>
//       {/* 🌄 Fixed Parallax Section */}
//       <HeroSlider />
//      {/* <WhatWeDo />*/}
//      <section className="container py-5">
//       <div className="text-center mb-4">
//         <h5 className="fw-bold">New Arrivals, New Stories</h5>
//         <p className="text-muted">
//           Step into a world of crafted design, where every piece feels like a first.
//         </p>
//       </div>

//       <div className="row justify-content-center g-4">
//         {productData.map((item) => (
//           <div key={item.id} className="col-md-4 col-sm-6">
//             <div className="product-card shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
//               <div className="product-overlay">
//                 <h4 className="text-white fw-semibold">{item.title}</h4>
//               </div>
//             </div>
//             <div className="mt-2">
//               <h6 className="fw-semibold">{item.subtitle}</h6>
//               <Link href={item.link} className="small fw-bold text-dark">
//                 {item.btn}
//               </Link>
//             </div>

//           </div>
//         ))}
//       </div>
//     </section>

//       <section className="container py-5">
//       <div className=" justify-content-center g-4">
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190348.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>



//        <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190201.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>

    
//        <section className="container py-5">

//       <div className=" justify-content-center g-4">
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190711.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>
//           <section className="container py-5">
//       <div className=" mb-4">
//         <h2 className="fw-bold">Every Collection is a Chapter</h2>
//       </div>

//       <div className="row justify-content-center g-4">
//         {productData2.map((item) => (
//           <div key={item.id} className="col-md-3 col-sm-6">
//             <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={150}
//                 height={400}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
//               <div className="product-overlay1">
//                 <h4 className="text-white titleText fw-semibold">{item.title}</h4>
//               </div>
//             </div>
          

//           </div>
//         ))}
//       </div>
//     </section>




//      <section className="container py-5">

//       <div className=" justify-content-center g-4">
//               <Image
//                 src="/CHESS FIRE/fhfh-1024x576.jpg"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>




//      <section className="container py-5">

//       <div className=" justify-content-center g-4">
//               <Image
//                 src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194354.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>


//       <section className="container py-5">
//       <div className=" mb-4">
//         <h2 className="fw-bold">In the Spotlight</h2>
//       </div>

//       <div className="row justify-content-center g-4">
//         {productData3.map((item) => (
//           <div key={item.id} className="col-md-3 col-sm-6">
//             <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={150}
//                 height={300}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
          
          
//             </div>
          
//    <div className="mt-2">
//               <h6 className="fw-semibold">{item.subtitle}</h6>
           
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>

//        <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191344.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>

//            <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>

//        <section className="container py-5">
//       <div className=" mb-4">
//         <h2 className="fw-bold">More Waiting for You</h2>
//       </div>

//       <div className="row justify-content-center g-4">
//         {productData2.map((item) => (
//           <div key={item.id} className="col-md-3 col-sm-6">
//             <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={150}
//                 height={400}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
//               <div className="product-overlay1">
//                 <h4 className="text-white titleText fw-semibold">{item.title}</h4>
//               </div>
//             </div>
          

//           </div>
//         ))}
//       </div>
//     </section>


//       <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194610.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>

//            <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>


// <section className="container py-5">
//       <div className=" mb-4">
//         <h2 className="fw-bold">Meet our Design Masters</h2>
//       </div>

//       <div className="row justify-content-center g-4">
//         {productData2.map((item) => (
//           <div key={item.id} className="col-md-3 col-sm-6">
//             <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={150}
//                 height={400}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
//               <div className="product-overlay1">
//                 <h4 className="text-white titleText fw-semibold">{item.title}</h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>


//      <section className="container py-5">

//       <div className=" justify-content-center g-4">
    
//               <Image
//                 src="/CHESS FIRE/sdsds-1024x576.jpg"
//                 alt={"A Smart Table of Epoxy Resin ETHER"}
//                 width={500}
//                 height={500}
//                 className="w-100 product-img1"
//               />
//       </div>
//     </section>

// {      /* <section className=" position-relative bg-light py-3" >
//         <h2 className="text-center mb-5 fw-bold text-dark">Featured Products</h2>
//         <div className="">
//           {products.slice(0,3).map((item, idx) =>
//             <div class="col-4"><ProductCard key={item.id} item={item} /></div>
//             )}
//         </div>
//       </section> */}
//       {/* 🌀 Info Section */}
//        <section
//         className="position-relative  bg-white z-2  min-vh-100   ">
//         <div className="container">
//          <div class="text-center">
//            <h5 className="  mb-4 text-dark">
//             Curated Galleries
//           </h5>
//           <p className="lead text-secondary mb-4">
//            Our stores exude an aura that’s irresistible with great wood and fabric.
//             Catching your eyes and captivating your mind, 
//             our art stands at every nook and corner looking at you.
//              Visit and get consumed.
//           </p>
//          </div>
//         <div className="row justify-content-center g-4">
//         {productData.map((item) => (
//           <div key={item.id} className="col-md-4 col-sm-6">
//             <div className="product-card shadow-sm rounded overflow-hidden position-relative">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={550}
//                 height={600}
//                 className="w-100 product-img"
//               />
//               {/* Text Overlay */}
//               <div className="product-overlay">
//                 <h4 className="text-white fw-semibold">{item.title}</h4>
//               </div>
//             </div>
//             <div className="mt-4" >
//               <h6 className="fw-bold">{item.subtitle}</h6>
//               <Link href={item.link} className="small fw-semibold text-dark">
//                 {item.btn}
//               </Link>
//             </div>

//           </div>
//         ))}
//       </div>
//         </div>
//       </section> 
//  <div className="container py-5">
//       <div className="row g-4">
//         {features.map((item, index) => (
//           <div className="col-md-3 col-sm-6" key={index}>
//             <div className="feature-box p-4">
//               <div className="feature-icon">{item.icon}</div>
//               <p className="feature-title mb-0">{item.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>



//       {/* 🔍 Final Section */}
//       {/* <section
//         className="py-5 z-2  text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-white position-relative">
//         <div className="container">
//           <h2 className="display-5 fw-bold text-dark mb-4">Take a closer look.</h2>
//           <p className="lead text-secondary mb-4">
//             It’s not just AR — it’s a new way of computing. Whether you’re
//             watching a movie, collaborating with teammates, or reliving your
//             memories in 3D, Vision Pro adapts seamlessly to you.
//           </p>
//           <Button text="Learn More" className="btn btn-gradient btn-lg rounded-pill shadow px-4 onHover" />
//         </div>
//       </section> */}
//     </main>
//   );
// }







// export const ShieldIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
//     <path d="M9 12l2 2 4-4" />
//   </svg>
// );

// export const FactoryIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 21V9l5 3V9l5 3V9l8 4v8H3z" />
//     <path d="M14 3h4v4h-4z" />
//   </svg>
// );

// export const ChecklistIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="4" y="3" width="16" height="18" rx="2" />
//     <path d="M8 9h8M8 13h8M8 17h5" />
//     <path d="M9 4l1 1 2-2" />
//   </svg>
// );

// export const WoodLayersIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 7l9-4 9 4-9 4-9-4z" />
//     <path d="M3 12l9 4 9-4" />
//     <path d="M3 17l9 4 9-4" />
//   </svg>
// );

// export const CubeIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M12 2l9 5v10l-9 5-9-5V7z" />
//     <path d="M12 12l9-5M12 12v10M12 12l-9-5" />
//   </svg>
// );

// export const ChainIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M8 12a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" />
//     <path d="M16 12a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
//   </svg>
// );

// export const BadgeIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="7" />
//     <path d="M9 12l2 2 4-4" />
//   </svg>
// );

// export const SmileIcon = () => (
//   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="9" />
//     <path d="M8 10h.01M16 10h.01" />
//     <path d="M8 15c1.3 1 2.7 1.5 4 1.5s2.7-.5 4-1.5" />
//   </svg>
// );



"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Shared/Button";
import Slider from "./ExternalLib/Carousel/Carousel";
import HeroSlider from "./Componets/HeroSection";
import WhatWeDo from "./Componets/WhatWeDo";
import Products from "./Componets/ProductSection/ProductSection";
import { products } from "./StaticData/Products";
import ProductCard from './Shared/ProductCard/ProductCard'
import useWindowWidth from './Hooks/useWindow.js'
import Link from "next/link";

// === Animation variants (professional combined style) ===
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "circOut" } },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  const width = useWindowWidth();

  const productData = [
    {
      id: 1,
      title: "New Arrival",
      subtitle: "New Arrivals",
      btn: "Shop Now +",
      image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
      link: "/new-arrivals",
    },
    {
      id: 2,
      title: "Ready to Ship",
      subtitle: "Ready to Ship",
      btn: "Shop Now +",
      image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
      link: "/ready-to-ship",
    },
    {
      id: 3,
      title: "Trending Now",
      subtitle: "Trending Now",
      btn: "Shop Now +",
      image: "/CHESS FIRE/rerere-1024x576.jpg",
      link: "/trending-now",
    },
  ];

  const productData2 = [
    { id: 1, title: "New Arrival", subtitle: "New Arrivals", btn: "Shop Now +", image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg", link: "/new-arrivals" },
    { id: 2, title: "Ready to Ship", subtitle: "Ready to Ship", btn: "Shop Now +", image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png", link: "/ready-to-ship" },
    { id: 5, title: "Ready to Ship", subtitle: "Ready to Ship", btn: "Shop Now +", image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png", link: "/ready-to-ship" },
    { id: 3, title: "Trending Now", subtitle: "Trending Now", btn: "Shop Now +", image: "/CHESS FIRE/rerere-1024x576.jpg", link: "/trending-now" },
  ];

  const productData3 = [
    ...productData,
    ...productData,
  ];

  const features = [
    { icon: <ShieldIcon />, title: "10 Year Warranty" },
    { icon: <FactoryIcon />, title: "Direct Selling : Factory To Customer" },
    { icon: <ChecklistIcon />, title: "66 Quality Checks" },
    { icon: <WoodLayersIcon />, title: "KD (Kiln Dried) and HT (Heat Treated)" },
    { icon: <CubeIcon />, title: "Ergonomically Designed" },
    { icon: <ChainIcon />, title: "Generations Long Durability" },
    { icon: <BadgeIcon />, title: "All India Service Warranty" },
    { icon: <SmileIcon />, title: "Free Of Child Labour" },
  ];

  return (
    <main className="bg-white text-dark" style={{ marginTop: "-75px" }}>
      {/* Hero - keep existing hero but add a wrapper so it animates on load */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <HeroSlider />
      </motion.div>

      {/* New Arrivals Section */}
      <motion.section
        className="container py-5"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="text-center mb-4">
          <motion.h5 variants={listItem} className="fw-bold">
            New Arrivals, New Stories
          </motion.h5>
          <motion.p variants={listItem} className="text-muted">
            Step into a world of crafted design, where every piece feels like a first.
          </motion.p>
        </div>

        <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {productData.map((item) => (
            <motion.div key={item.id} className="col-md-4 col-sm-6" variants={listItem}>
              <div className="product-card shadow-sm rounded overflow-hidden position-relative">
                <motion.div variants={imageVariant} className="w-100" style={{ overflow: "hidden" }}>
                  <Image src={item.image} alt={item.title} width={500} height={500} className="w-100 product-img" />
                </motion.div>
                <div className="product-overlay">
                  <h4 className="text-white fw-semibold">{item.title}</h4>
                </div>
              </div>

              <div className="mt-2">
                <h6 className="fw-semibold">{item.subtitle}</h6>
                <Link href={item.link} className="small fw-bold text-dark">
                  {item.btn}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Full width images sections with subtle zoom */}
      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant} className="justify-content-center g-4">
          <Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190348.png" alt="A Smart Table of Epoxy Resin ETHER" width={500} height={500} className="w-100 product-img1" />
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant} className="justify-content-center g-4">
          <Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190201.png" alt="A Smart Table of Epoxy Resin ETHER" width={500} height={500} className="w-100 product-img1" />
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant} className="justify-content-center g-4">
          <Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190711.png" alt="A Smart Table of Epoxy Resin ETHER" width={500} height={500} className="w-100 product-img1" />
        </motion.div>
      </motion.section>

      {/* Every Collection is a Chapter - grid with stagger */}
      <motion.section className="container py-5" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <motion.div className="mb-4">
          <motion.h2 variants={listItem} className="fw-bold">Every Collection is a Chapter</motion.h2>
        </motion.div>

        <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {productData2.map((item) => (
            <motion.div key={item.id} className="col-md-3 col-sm-6" variants={listItem}>
              <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
                <motion.div variants={imageVariant} style={{ overflow: "hidden" }}>
                  <Image src={item.image} alt={item.title} width={150} height={400} className="w-100 product-img" />
                </motion.div>
                <div className="product-overlay1">
                  <h4 className="text-white titleText fw-semibold">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Repeating image blocks, spotlight, etc. - all animated similarly */}
      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant} className="justify-content-center g-4">
          <Image src="/CHESS FIRE/fhfh-1024x576.jpg" alt="CHESS FIRE" width={500} height={500} className="w-100 product-img1" />
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant} className="justify-content-center g-4">
          <Image src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194354.png" alt="Most Exclusive" width={500} height={500} className="w-100 product-img1" />
        </motion.div>
      </motion.section>

      {/* In the Spotlight grid */}
      <motion.section className="container py-5" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <motion.div className="mb-4">
          <motion.h2 variants={listItem} className="fw-bold">In the Spotlight</motion.h2>
        </motion.div>

        <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {productData3.map((item, idx) => (
            <motion.div key={`${item.id}-${idx}`} className="col-md-3 col-sm-6" variants={listItem}>
              <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
                <motion.div variants={imageVariant} style={{ overflow: "hidden" }}>
                  <Image src={item.image} alt={item.title} width={150} height={300} className="w-100 product-img" />
                </motion.div>
              </div>

              <div className="mt-2">
                <h6 className="fw-semibold">{item.subtitle}</h6>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* A few more animated image sections (kept DRY) */}
      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant}><Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191344.png" alt="Ether" width={500} height={500} className="w-100 product-img1" /></motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant}><Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png" alt="Ether" width={500} height={500} className="w-100 product-img1" /></motion.div>
      </motion.section>

      {/* More Waiting for You grid */}
      <motion.section className="container py-5" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <motion.div className="mb-4"><motion.h2 variants={listItem} className="fw-bold">More Waiting for You</motion.h2></motion.div>
        <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {productData2.map((item) => (
            <motion.div key={item.id} className="col-md-3 col-sm-6" variants={listItem}>
              <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
                <motion.div variants={imageVariant}><Image src={item.image} alt={item.title} width={150} height={400} className="w-100 product-img" /></motion.div>
                <div className="product-overlay1"><h4 className="text-white titleText fw-semibold">{item.title}</h4></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant}><Image src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194610.png" alt="Most Exclusive" width={500} height={500} className="w-100 product-img1" /></motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant}><Image src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png" alt="Ether" width={500} height={500} className="w-100 product-img1" /></motion.div>
      </motion.section>

      {/* Meet our Design Masters - features grid with stagger */}
      <motion.section className="container py-5" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <div className="mb-4"><motion.h2 variants={listItem} className="fw-bold">Meet our Design Masters</motion.h2></div>
        <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {productData2.map((item) => (
            <motion.div key={item.id} className="col-md-3 col-sm-6" variants={listItem}>
              <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
                <motion.div variants={imageVariant}><Image src={item.image} alt={item.title} width={150} height={400} className="w-100 product-img" /></motion.div>
                <div className="product-overlay1"><h4 className="text-white titleText fw-semibold">{item.title}</h4></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} className="container py-5">
        <motion.div variants={imageVariant}><Image src="/CHESS FIRE/sdsds-1024x576.jpg" alt="Chess" width={500} height={500} className="w-100 product-img1" /></motion.div>
      </motion.section>

      {/* Info Section */}
      <motion.section className="position-relative bg-white z-2 min-vh-100" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        <div className="container">
          <motion.div className="text-center">
            <motion.h5 variants={listItem} className="mb-4 text-dark">Curated Galleries</motion.h5>
            <motion.p variants={listItem} className="lead text-secondary mb-4">Our stores exude an aura that’s irresistible with great wood and fabric. Catching your eyes and captivating your mind, our art stands at every nook and corner looking at you. Visit and get consumed.</motion.p>
          </motion.div>

          <motion.div className="row justify-content-center g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
            {productData.map((item) => (
              <motion.div key={item.id} className="col-md-4 col-sm-6" variants={listItem}>
                <div className="product-card shadow-sm rounded overflow-hidden position-relative">
                  <motion.div variants={imageVariant}><Image src={item.image} alt={item.title} width={550} height={600} className="w-100 product-img" /></motion.div>
                  <div className="product-overlay"><h4 className="text-white fw-semibold">{item.title}</h4></div>
                </div>
                <div className="mt-4"><h6 className="fw-bold">{item.subtitle}</h6><Link href={item.link} className="small fw-semibold text-dark">{item.btn}</Link></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features grid (icons) */}
      <motion.div className="container py-5">
        <motion.div className="row g-4" variants={listContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          {features.map((item, index) => (
            <motion.div key={index} className="col-md-3 col-sm-6" variants={listItem}>
              <div className="feature-box p-4">
                <motion.div variants={imageVariant} className="feature-icon">{item.icon}</motion.div>
                <motion.p variants={listItem} className="feature-title mb-0">{item.title}</motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </main>
  );
}



export const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const FactoryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21V9l5 3V9l5 3V9l8 4v8H3z" />
    <path d="M14 3h4v4h-4z" />
  </svg>
);

export const ChecklistIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 9h8M8 13h8M8 17h5" />
    <path d="M9 4l1 1 2-2" />
  </svg>
);

export const WoodLayersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M3 12l9 4 9-4" />
    <path d="M3 17l9 4 9-4" />
  </svg>
);

export const CubeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l9 5v10l-9 5-9-5V7z" />
    <path d="M12 12l9-5M12 12v10M12 12l-9-5" />
  </svg>
);

export const ChainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" />
    <path d="M16 12a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
  </svg>
);

export const BadgeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="7" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const SmileIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 10h.01M16 10h.01" />
    <path d="M8 15c1.3 1 2.7 1.5 4 1.5s2.7-.5 4-1.5" />
  </svg>
);
