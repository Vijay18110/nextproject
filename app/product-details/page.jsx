"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactImageMagnify from "react-image-magnify";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import Image from "next/image";

// Sample images (replace with your own)
const productImages = [
    "/images/all/1.jpg",
    "/images/all/2.jpg",
    "/images/all/3.jpg",
    "/images/all/4.jpg",
    "/images/all/6.jpg",
];
const ProductDetails = () => {
    const [activeImg, setActiveImg] = useState(productImages[0]);
    return (
        <div className="container-fluid py-5">
            <div className="row align-items-start gy-4">
                {/* 🔹 Left: Vertical Thumbnails */}
                <div className="col-md-2 d-flex flex-md-column gap-3 align-items-center">
                    {productImages.map((img) => (
                        <motion.div
                            key={img}
                            whileHover={{ scale: 1.05 }}
                            className={`border rounded-3 overflow-hidden cursor-pointer shadow-sm ${activeImg === img ? "border-primary border-3" : "border-light"
                                }`}
                            onClick={() => setActiveImg(img)}
                            style={{ width: "70px", height: "70px" }}
                        >
                            <Image
                                src={img}
                                alt="Product Thumbnail"
                                width={70}
                                height={70}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* 🔹 Center: Main Image with Zoom */}
                <div className="col-md-5 text-center">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: "Main Product",
                                isFluidWidth: true,
                                src: activeImg,
                            },
                            largeImage: {
                                src: activeImg,
                                width: 1200,
                                height: 1200,
                            },
                            enlargedImageContainerStyle: { zIndex: 9 },
                            lensStyle: { backgroundColor: "rgba(0,0,0,.1)" },
                        }}
                    />
                </div>

                {/* 🔹 Right: Product Details */}
                <div className="col-md-5">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="fw-bold mb-2">Smart Bench Pro</h2>
                        <div className="d-flex align-items-center mb-3">
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-warning me-1" />
                            <FaStar className="text-secondary" />
                            <span className="ms-2 text-muted">(134 Reviews)</span>
                        </div>

                        <h3 className="text-primary fw-bold mb-3">$599.00</h3>
                        <p className="text-muted mb-4">
                            Experience the future of smart furniture with the Smart Bench Pro —
                            built with durable materials, integrated charging ports, and a
                            modern design for both comfort and functionality.
                        </p>

                        <div className="d-flex gap-3 mb-4">
                            <button className="btn btn-dark px-4 py-2 rounded-4 fw-semibold d-flex align-items-center gap-2">
                                <FaShoppingCart /> Add to Cart
                            </button>
                            <button className="btn btn-outline-secondary px-4 py-2 rounded-4 fw-semibold">
                                Buy Now
                            </button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h5 className="fw-semibold">Product Details</h5>
                            <ul className="list-unstyled text-muted mt-2">
                                <li>✅ Premium Wood & Metal Design</li>
                                <li>✅ Built-in Wireless Charger</li>
                                <li>✅ Waterproof Coating</li>
                                <li>✅ 2-Year Warranty</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
