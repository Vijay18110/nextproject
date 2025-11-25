"use client";
import { motion } from "framer-motion";
import {
  FaCubes,
  FaFlask,
  FaBrush,
  FaFill,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";
import ProductCard from "../Shared/ProductCard/ProductCard";
import Slider from "../ExternalLib/Carousel/Carousel";
import BannerPage from '../Shared/BannerPage/BannerPage'
import useWindowWidth from '../Hooks/useWindow.js'
export default function EpoxyPage() {
  const width = useWindowWidth()
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1424 }, items: 4, slidesToSlide: 1, partialVisibilityGutter: width > 480 ? 70 : width > 402 ? 30 : 2 },
    laptop: { breakpoint: { max: 1424, min: 1024 }, items: 3, slidesToSlide: 1, partialVisibilityGutter: width > 480 ? 70 : width > 402 ? 30 : 2 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1, partialVisibilityGutter: width > 480 ? 70 : width > 402 ? 30 : 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1, slidesToSlide: 1, partialVisibilityGutter: width > 480 ? 70 : width > 402 ? 30 : 2 },
  };

  const products = [
    {
      id: 1,
      title: "Epoxy Resin Liquid",
      description: "High-quality clear epoxy resin for coating and casting projects.",
      image: "/images/epoxy1.jpg",
      icon: <FaFlask />,
    },
    {
      id: 2,
      title: "Epoxy Pigment Powder",
      description: "Vibrant powders to add color to epoxy for art and furniture.",
      image: "/images/epoxy2.jpg",
      icon: <FaPalette />,
    },
    {
      id: 3,
      title: "Epoxy Flooring Compound",
      description: "Durable epoxy mix designed for industrial and garage flooring.",
      image: "/images/epoxy3.jpg",
      icon: <FaLayerGroup />,
    },
    {
      id: 4,
      title: "UV-Resistant Epoxy",
      description: "Special epoxy resin that resists yellowing under sunlight exposure.",
      image: "/images/epoxy4.jfif",
      icon: <FaBrush />,
    },
    {
      id: 5,
      title: "Epoxy Adhesive",
      description: "Strong adhesive epoxy for bonding wood, metal, and plastics.",
      image: "/images/epoxy5.jpg",
      icon: <FaCubes />,
    },
    {
      id: 6,
      title: "Decorative Epoxy Fillers",
      description: "Add texture and patterns to epoxy surfaces for artistic finishes.",
      image: "/images/epoxy6.jfif",
      icon: <FaFill />,
    },
  ];

  const features = [
    {
      icon: <FaFlask size={30} className="text-primary" />,
      title: "High Quality",
      desc: "Premium-grade epoxy resin for durable and professional results.",
    },
    {
      icon: <FaPalette size={30} className="text-primary" />,
      title: "Color Variety",
      desc: "Wide range of pigments and powders for creative applications.",
    },
    {
      icon: <FaLayerGroup size={30} className="text-primary" />,
      title: "Multi-Purpose",
      desc: "Suitable for flooring, furniture, art, and industrial use.",
    },
    {
      icon: <FaBrush size={30} className="text-primary" />,
      title: "UV Resistant",
      desc: "Protects surfaces from yellowing and sun damage.",
    },
  ];

  return (
    <>
      <BannerPage text={"Epoxy Materials"} banner={"/images/bg/2.jpg"} ></BannerPage>
      <section className="container-fluid py-5">
        {/* 🔹 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <FaCubes size={60} className="text-primary mb-3" />
          <h1 className="fw-bold mb-3">Epoxy Materials</h1>
          <p className="text-muted lead mb-4">
            Explore our premium epoxy products — ideal for art, flooring, furniture, and industrial applications.
          </p>
          <motion.img
            src="/images/epoxy1.jpg"
            alt="Epoxy Materials"
            className="img-fluid rounded-4 shadow-sm"
          />
        </motion.div>

        {/* 🔹 Features Section */}
        <div className="text-center mb-5">
          <h2 className="fw-semibold mb-4">Why Choose Our Epoxy?</h2>
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
          <h2 className="fw-semibold">Our Epoxy Product Categories</h2>
          <p className="text-muted">
            Discover our wide range of epoxy materials designed for diverse applications.
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
