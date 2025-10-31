"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPuzzlePiece,
  FaCogs,
  FaRobot,
  FaGamepad,
  FaCube,
  FaPaintBrush,
} from "react-icons/fa";
import ProductCard from "../Shared/ProductCard/ProductCard";
import Slider from "../ExternalLib/Carousel/Carousel";
import BannerPage from '../Shared/BannerPage/BannerPage'

export default function ToysPage() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1424 }, items: 4, slidesToSlide: 1 ,partialVisibilityGutter:70},
    laptop: { breakpoint: { max: 1424, min: 1024 }, items:3 , slidesToSlide: 1 ,partialVisibilityGutter:70},
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1,partialVisibilityGutter:70 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1,partialVisibilityGutter:70 },
  };

  const products = [
    {
      id: 1,
      name: "Educational Puzzle Set",
      description: "Enhances problem-solving and cognitive skills for kids.",
      image: "/images/toy1.avif",
      icon: <FaPuzzlePiece />,
    },
    {
      id: 2,
      name: "Robotic Kit",
      description: "Build and program robots to learn STEM skills in a fun way.",
      image: "/images/toy2.avif",
      icon: <FaRobot />,
    },
    {
      id: 3,
      name: "Classic Wooden Blocks",
      description: "Encourages creativity and motor skills through building.",
      image: "/images/toy3.avif",
      icon: <FaCube />,
    },
    {
      id: 4,
      name: "Interactive Game Set",
      description: "Fun and educational board games for family and friends.",
      image: "/images/toy4.avif",
      icon: <FaGamepad />,
    },
    {
      id: 5,
      name: "DIY Art & Craft Kit",
      description: "Encourages creativity with paints, brushes, and craft supplies.",
      image: "/images/toy5.avif",
      icon: <FaPaintBrush />,
    },
    {
      id: 6,
      name: "Mechanical Learning Kit",
      description: "Hands-on STEM kit teaching gears, pulleys, and mechanics.",
      image: "/images/toy6.avif",
      icon: <FaCogs />,
    },
  ];

  const features = [
    {
      icon: <FaPuzzlePiece size={30} className="text-primary" />,
      title: "Educational",
      desc: "Toys designed to improve learning and problem-solving skills.",
    },
    {
      icon: <FaRobot size={30} className="text-primary" />,
      title: "STEM Focused",
      desc: "Encourages science, technology, engineering, and math skills.",
    },
    {
      icon: <FaCube size={30} className="text-primary" />,
      title: "Creative Play",
      desc: "Boosts imagination and fine motor development.",
    },
    {
      icon: <FaPaintBrush size={30} className="text-primary" />,
      title: "Arts & Crafts",
      desc: "Fosters artistic expression through fun DIY kits.",
    },
  ];

  return (
    <>
        <BannerPage text={"Toys"} banner={"./images/toy4.avif"} ></BannerPage>
    <section className="container-fluid py-5">
      {/* 🔹 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <FaPuzzlePiece size={60} className="text-primary mb-3" />
        <h1 className="fw-bold mb-3">Creative & Educational Toys</h1>
        <p className="text-muted lead mb-4">
          Fun and educational toys designed to inspire creativity, learning, and STEM skills for children of all ages.
        </p>
        <motion.img
          whileHover={{ scale: 1.03 }}
          src="/images/toy-hero.jpg"
          alt="Toys Collection"
          className="img-fluid rounded-4 shadow-sm"
        />
      </motion.div>

      {/* 🔹 Features Section */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold mb-4">Why Our Toys Stand Out</h2>
        <div className="row g-4 justify-content-center">
          {features.map((f, idx) => (
            <div className="col-md-3 text-center" key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 border rounded-4 shadow-sm h-100"
              >
                <div className="mb-3">{f.icon}</div>
                <h5 className="fw-bold">{f.title}</h5>
                <p className="text-muted">{f.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Products Section */}
      <div className="text-center mb-4">
        <h2 className="fw-semibold">Our Toy Categories</h2>
        <p className="text-muted">
          Explore a variety of toys to enhance learning, creativity, and fun.
        </p>
      </div>

      <div className="row g-4">
        <Slider showDot={false} responsive={responsive} partialVisible={true} autoplay={true}>
          {products.map((product, idx) => (
            <ProductCard item={product} key={idx} />
          ))}
        </Slider>
      </div>
    </section>
    </>

  );
}
