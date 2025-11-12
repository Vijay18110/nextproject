"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";
import { FiGitPullRequest } from "react-icons/fi";
import Image from "next/image";
import BannerPage from "../Shared/BannerPage/BannerPage";
import RequestForm from "../Componets/EnqueryForm";
import ImageZoomRight from "./ImageZoomInRight";
import MainPortal from "../Componets/MainPortal/MainPortal";
import Button from "../Shared/Button";
import useWindowWidth from "../Hooks/useWindow";


const productImages = [
    "/images/all/1.jpg",
    "/images/all/2.jpg",
    "/images/all/3.jpg",
    "/images/all/4.jpg",
    "/images/all/6.jpg",
];

const infoCards = [
    {
        id: 1,
        title: "Specifications",
        summary: "Technical details about this product.",
        details: [
            "Dimensions: 120cm x 40cm x 45cm",
            "Material: Premium Oak Wood & Metal",
            "Weight: 18kg",
            "Color: Walnut Brown",
        ],
    },
    {
        id: 2,
        title: "Features",
        summary: "What makes this product stand out.",
        details: [
            "Wireless charging port",
            "USB-C power support",
            "LED mood lighting",
            "Bluetooth connectivity",
        ],
    },
    {
        id: 3,
        title: "Warranty & Support",
        summary: "Our commitment to quality and customer care.",
        details: [
            "2-year limited warranty",
            "24/7 customer support",
            "Free replacement on manufacturing defects",
        ],
    },
];



const ProductDetails = ({ slug }) => {


    const [activeImg, setActiveImg] = useState(productImages[0]);
    const [activeTab, setActiveTab] = useState(infoCards[0].id);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    const activeData = infoCards.find((card) => card.id === activeTab);

    // 🔹 Auto-change images every 3 seconds (unless paused)
    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setActiveImg((prev) => {
                    const currentIndex = productImages.indexOf(prev);
                    const nextIndex =
                        (currentIndex + 1) % productImages.length;
                    return productImages[nextIndex];
                });
            }, 3000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPaused]);

    const [openForm, setOpenForm] = useState(false);
    const width = useWindowWidth()
    const handleFormSubmit = (data) => {
        console.log("Form submitted:", data);
        // 🔹 You can integrate your API call or toast here
    };


    return (
        <>

            <BannerPage banner={"/images/all/1.jpg"} text="Details" />

            <div className="container-fluid py-5">
                <div className="row align-items-start gy-4">
                    {/* 🔹 Thumbnails */}
                    <div className="col-md-2 d-flex flex-md-column gap-3 align-items-center">
                        {productImages.map((img) => (
                            <motion.div
                                key={img}
                                whileHover={{ scale: 1.05 }}
                                className={`border rounded-3 overflow-hidden cursor-pointer shadow-sm ${activeImg === img
                                    ? "border-primary border-3"
                                    : "border-light"
                                    }`}
                                onClick={() => setActiveImg(img)}
                                style={{ width: "70px", height: "70px" }}
                            >
                                <Image
                                    src={img}
                                    alt="Product Thumbnail"
                                    width={70}
                                    height={70}
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* 🔹 Main Image with hover pause */}
                    <div
                        className="col-md-5"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >{width > 768 ? (
                        <ImageZoomRight src={activeImg} zoomWidth={width > 1480 ? 600 : width > 1250 ? 500 : 400} zoomHeight={width > 1250 ? 500 : 400} />
                    ) : (
                        <Image
                            src={activeImg}
                            alt="Product"
                            width={500}
                            height={400}
                            className="rounded-3 img-fluid"
                        />
                    )}
                    </div>

                    {/* 🔹 Product Info */}
                    <div className="col-md-5">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="fw-bold mb-2">Smart Bench Pro</h2>
                            <div className="d-flex align-items-center mb-3">
                                {[...Array(4)].map((_, i) => (
                                    <FaStar key={i} className="text-warning me-1" />
                                ))}
                                <FaStar className="text-secondary" />
                                <span className="ms-2 text-muted">(134 Reviews)</span>
                            </div>

                            <h3 className="text-primary fw-bold mb-3">$599.00</h3>
                            <p className="text-muted mb-4">
                                Experience the future of smart furniture with the Smart Bench Pro —
                                built with durable materials, integrated charging ports, and a
                                modern design for both comfort and functionality.
                            </p>



                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h5 className="fw-semibold">Product Highlights</h5>
                                <ul className="list-styled text-muted mt-2 ">
                                    <li> Premium Wood & Metal Design</li>
                                    <li> Built-in Wireless Charger</li>
                                    <li> Waterproof Coating</li>
                                    <li> 2-Year Warranty</li>
                                </ul>
                            </motion.div>
                            <div className="d-flex gap-3 mb-4">
                                <Button handleNavigate={() => setOpenForm(true)} className="btn onHover btn-dark px-4 py-2 rounded-pill fw-semibold d-flex align-items-center gap-2">
                                    <FiGitPullRequest /> Request
                                </Button>
                                {openForm && <MainPortal handleCloseModal={() => setOpenForm(false)}  >
                                    <RequestForm
                                        onSubmit={handleFormSubmit}
                                        onClose={() => setOpenForm(false)}
                                    />
                                </MainPortal>}
                            </div>
                        </motion.div>
                    </div>
                </div >

                {/* 🔹 Tabs Section */}
                < div className="mt-5 pt-4 border-top container" >
                    <h4 className="fw-bold mb-4 text-center">More About This Product</h4>

                    <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center">
                        {infoCards.map((card) => (
                            <Button
                                key={card.id}
                                whileHover={{ scale: 1.05 }}
                                handleNavigate={() => setActiveTab(card.id)}
                                className={`btn onHover px-4 py-2 text-dark rounded-pill fw-semibold shadow-sm ${activeTab === card.id
                                    ? "btn-primary text-white"
                                    : "btn-outline-light border"
                                    }`}
                                text={card.title}
                            />
                        ))}
                    </div>

                    {/* 🔹 Active Tab Details Card */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="py-3 px-4 bg-white rounded-4 shadow-sm mx-auto"
                    >
                        <h5 className="fw-bold text-primary mb-3">{activeData.title}</h5>
                        <p className="text-muted">{activeData.summary}</p>
                        <ul className="list-unstyled text-muted mt-2">
                            {activeData.details.map((d, i) => (
                                <li key={i}>• {d}</li>
                            ))}
                        </ul>
                    </motion.div>
                </ div>
            </div >
        </>
    );
};

export default ProductDetails;
