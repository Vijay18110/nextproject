"use client";
import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaChargingStation,
  FaWifi,
  FaLeaf,
  FaLightbulb,
} from "react-icons/fa";
import ProductCard from '../Shared/ProductCard/ProductCard'
import Slider from '../ExternalLib/Carousel/Carousel'
import BannerPage from '../Shared/BannerPage/BannerPage'
import useWindowWidth from '../Hooks/useWindow.js'

export default function SolarBenchPage() {
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
      title: "Solar Bench X1",
      description:
        "High-efficiency solar panel powers LED lighting and dual USB charging ports for sustainable public spaces.",
      image: "/images/solar-bench1.jpg",
      icon: <FaSolarPanel />,
    },
    {
      id: 2,
      title: "Eco Solar Bench Pro",
      description:
        "Advanced smart bench with IoT connectivity, wireless charging, and eco-friendly design using recycled materials.",
      image: "/images/solar-bench2.jpg",
      icon: <FaLeaf />,
    },
    {
      id: 3,
      title: "Solar Smart Hub",
      description:
        "Compact urban smart bench powered by solar panels, equipped with Wi-Fi hotspot and LED ambient lighting.",
      image: "/images/solar-bench3.jpg",
      icon: <FaWifi />,
    },
    {
      id: 5,
      title: "Eco Solar Bench Pro",
      description:
        "Advanced smart bench with IoT connectivity, wireless charging, and eco-friendly design using recycled materials.",
      image: "/images/solar-bench2.jpg",
      icon: <FaLeaf />,
    },
    {
      id: 4,
      title: "Solar Smart Hub",
      description:
        "Compact urban smart bench powered by solar panels, equipped with Wi-Fi hotspot and LED ambient lighting.",
      image: "/images/solar-bench3.jpg",
      icon: <FaWifi />,
    },
  ];

  const features = [
    {
      icon: <FaSolarPanel size={30} className="text-primary" />,
      title: "Solar Powered",
      desc: "Harness renewable energy for sustainable outdoor seating.",
    },
    {
      icon: <FaChargingStation size={30} className="text-primary" />,
      title: "Device Charging",
      desc: "Multiple USB and wireless charging options for visitors.",
    },
    {
      icon: <FaWifi size={30} className="text-primary" />,
      title: "IoT Connectivity",
      desc: "Smart sensors and Wi-Fi for smart city integration.",
    },
    {
      icon: <FaLightbulb size={30} className="text-primary" />,
      title: "LED Lighting",
      desc: "Eco-friendly lighting for night-time safety and ambiance.",
    },
  ];

  return (
    <>
      <BannerPage text={"Solar-Powered Smart Benches"} banner={"./images/solar-bench3.jpg"} ></BannerPage>
      <section className="container-fluid py-5">
        {/* 🔹 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <FaSolarPanel size={60} className="text-primary mb-3" />
          <h1 className="fw-bold mb-3">Solar-Powered Smart Benches</h1>
          <p className="text-muted lead mb-4">
            Sustainable, tech-enabled benches powered by solar energy — featuring
            charging ports, ambient LED lights, and IoT sensors for modern urban
            spaces.
          </p>
          <motion.img
            whileHover={{ scale: 1.03 }}
            src="/images/solar-bench-hero.webp"
            alt="Solar Smart Bench"
            className="img-fluid rounded-4 shadow-sm"
          />
        </motion.div>

        {/* 🔹 Features Section */}
        <div className="text-center mb-5">
          <h2 className="fw-semibold mb-4">Why Choose Our Solar Benches?</h2>
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
          <h2 className="fw-semibold">Our Solar Bench Models</h2>
          <p className="text-muted">
            Explore a range of solar-powered benches designed for parks, campuses,
            and smart city projects.
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
