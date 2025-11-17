"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Shared/Button";
import Slider from "./ExternalLib/Carousel/Carousel";
import HeroSlider from "./Componets/HeroSection";
import WhatWeDo from "./Componets/WhatWeDo";
import Products from "./Componets/ProductSection/ProductSection";
import { products } from "./StaticData/Products";
import ProductCard from './Shared/ProductCard/ProductCard'
import useWindowWidth from './Hooks/useWindow.js'
import Link from "next/link";
export default function HomePage() {
const width=useWindowWidth()
const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 300], [0, 100]);
const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.7]);
const productData = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now"
  }
];




const productData3 = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now"
  },
    {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now"
  },
    {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
 
];


const productData2 = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals"
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
   {
    id: 5,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship"
  },
  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now"
  }
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1424 }, items: 4, slidesToSlide: 1 ,partialVisibilityGutter:width>480?70:width>402?30:2},
    laptop: { breakpoint: { max: 1424, min: 1024 }, items:3 , slidesToSlide: 1 ,partialVisibilityGutter:width>480?70:width>402?30:2},
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1,partialVisibilityGutter:width>480?70:width>402?30:2},
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1,partialVisibilityGutter:width>480?70:width>402?30:2 },
  };
  return (
    <main className=" bg-white text-dark" style={{ marginTop: "-75px" }}>
      {/* 🌄 Fixed Parallax Section */}
      <HeroSlider />
     {/* <WhatWeDo />*/}
     <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">New Arrivals, New Stories</h2>
        <p className="text-muted">
          Step into a world of crafted design, where every piece feels like a first.
        </p>
      </div>

      <div className="row justify-content-center g-4">
        {productData.map((item) => (
          <div key={item.id} className="col-md-4 col-sm-6">
            <div className="product-card shadow-sm rounded overflow-hidden position-relative">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-100 product-img"
              />
              {/* Text Overlay */}
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

          </div>
        ))}
      </div>
    </section>

         <section className="container py-5">

      <div className=" justify-content-center g-4">
    
              <Image
                src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190348.png"
                alt={"A Smart Table of Epoxy Resin ETHER"}
                width={500}
                height={500}
                className="w-100 product-img1"
              />
 
            
            

         
      
      </div>
    </section>



       <section className="container py-5">

      <div className=" justify-content-center g-4">
    
              <Image
                src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190201.png"
                alt={"A Smart Table of Epoxy Resin ETHER"}
                width={500}
                height={500}
                className="w-100 product-img1"
              />
      </div>
    </section>

    
       <section className="container py-5">

      <div className=" justify-content-center g-4">
              <Image
                src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190711.png"
                alt={"A Smart Table of Epoxy Resin ETHER"}
                width={500}
                height={500}
                className="w-100 product-img1"
              />
      </div>
    </section>
          <section className="container py-5">
      <div className=" mb-4">
        <h2 className="fw-bold">Every Collection is a Chapter</h2>
      </div>

      <div className="row justify-content-center g-4">
        {productData2.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={400}
                className="w-100 product-img"
              />
              {/* Text Overlay */}
              <div className="product-overlay1">
                <h4 className="text-white titleText fw-semibold">{item.title}</h4>
              </div>
            </div>
          

          </div>
        ))}
      </div>
    </section>




     <section className="container py-5">

      <div className=" justify-content-center g-4">
              <Image
                src="/CHESS FIRE/fhfh-1024x576.jpg"
                alt={"A Smart Table of Epoxy Resin ETHER"}
                width={500}
                height={500}
                className="w-100 product-img1"
              />
      </div>
    </section>




     <section className="container py-5">

      <div className=" justify-content-center g-4">
              <Image
                src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194354.png"
                alt={"A Smart Table of Epoxy Resin ETHER"}
                width={500}
                height={500}
                className="w-100 product-img1"
              />
      </div>
    </section>


      <section className="container py-5">
      <div className=" mb-4">
        <h2 className="fw-bold">In the Spotlight</h2>
      </div>

      <div className="row justify-content-center g-4">
        {productData3.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6">
            <div className="product-card1 shadow-sm rounded overflow-hidden position-relative">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={300}
                className="w-100 product-img"
              />
              {/* Text Overlay */}
          
          
            </div>
          
   <div className="mt-2">
              <h6 className="fw-semibold">{item.subtitle}</h6>
           
            </div>
          </div>
        ))}
      </div>
    </section>


      <section className=" position-relative bg-light py-3" >
        <h2 className="text-center mb-5 fw-bold text-dark">Featured Products</h2>
        <div className="">
          {products.slice(0,3).map((item, idx) =>
            <div class="col-4"><ProductCard key={item.id} item={item} /></div>
            )}
        </div>
      </section>
      {/* 🌀 Info Section */}
       <section
        className="position-relative text-center bg-white z-2  min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-dark">
            Immersive Experiences Like Never Before
          </h2>
          <p className="lead text-secondary mb-4">
            Vision Pro introduces a fully three-dimensional interface controlled by your eyes,
            hands, and voice — designed to make digital content feel truly present in your space.
          </p>
          <p className="lead text-secondary mb-5">
            It’s not just AR — it’s a new way of computing. Whether you’re watching a movie,
            collaborating with teammates, or reliving your memories in 3D, Vision Pro adapts seamlessly to you.
          </p>
          <Button text="  Learn More" className="btn btn-gradient btn-lg rounded-pill shadow px-4 onHover" />
        </div>
      </section> 
      {/* 🔍 Final Section */}
      {/* <section
        className="py-5 z-2  text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-white position-relative">
        <div className="container">
          <h2 className="display-5 fw-bold text-dark mb-4">Take a closer look.</h2>
          <p className="lead text-secondary mb-4">
            It’s not just AR — it’s a new way of computing. Whether you’re
            watching a movie, collaborating with teammates, or reliving your
            memories in 3D, Vision Pro adapts seamlessly to you.
          </p>
          <Button text="Learn More" className="btn btn-gradient btn-lg rounded-pill shadow px-4 onHover" />
        </div>
      </section> */}
    </main>
  );
}