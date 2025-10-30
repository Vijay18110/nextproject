"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Shared/Button";
import Slider from "./ExternalLib/Carousel/Carousel";
import HeroSlider from "./Componets/HeroSection";
import WhatWeDo from "./Componets/WhatWeDo";
import Products from "./Componets/ProductSection/ProductSection";
import { products } from "./StaticData/Products";

export default function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 150, 300], [1, 0.9, 0.7]);

  return (
    <main className=" bg-white text-dark" style={{ marginTop: "-75px" }}>
      {/* 🌄 Fixed Parallax Section */}
      <HeroSlider />
      <WhatWeDo />
      <Products products={products} title="Featured Products" />
      {/* 🌀 Info Section */}
      <section className="position-relative text-center bg-white z-2  min-vh-100 d-flex align-items-center justify-content-center">
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
          <Button
            text="  Learn More"
            className="btn btn-gradient btn-lg rounded-pill shadow px-4 onHover"
          />
        </div>
      </section>
      {/* 🔍 Final Section */}
      <section className="py-5 z-2  text-center min-vh-100 d-flex flex-column align-items-center justify-content-center bg-white position-relative">
        <div className="container">
          <h2 className="display-5 fw-bold text-dark mb-4">Take a closer look.</h2>
          <p className="lead text-secondary mb-4">
            It’s not just AR — it’s a new way of computing. Whether you’re
            watching a movie, collaborating with teammates, or reliving your
            memories in 3D, Vision Pro adapts seamlessly to you.
          </p>
          <Button
            text="Learn More"
            className="btn btn-gradient btn-lg rounded-pill shadow px-4 onHover"
          />
        </div>
      </section>
    </main >
  );
}
