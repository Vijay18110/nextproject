"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaRupeeSign,
    FaPhoneAlt,
    FaWhatsapp,
    FaIndustry,
    FaCubes,
    FaWeightHanging,
    FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

const ProductDetails = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Request Sent!");
    };
    const whatsappUrl = `https://wa.me/9628554907?text=${whatsappMessage}`;
    return (
        <section className="container-fluid py-5 bg-light">
            <div className="row g-4">
                {/* ---------- LEFT SECTION ---------- */}
                <div className="col-lg-8">
                    <motion.div
                        className="card border-0 shadow-lg rounded-4 p-4 bg-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="fw-bold text-uppercase text-primary mb-1">
                            Premium Smart LED TV 55" – 4K Ultra HD
                        </h4>
                        <p className="text-muted mb-3">Brand: Samsung | Model: QN55Q60D</p>

                        {/* Price Box */}
                        <div className="d-flex justify-content-between align-items-center bg-gradient bg-light p-3 rounded-3 mb-4">
                            <div>
                                <span className="fw-semibold text-secondary me-2">Price:</span>
                                <span className="fs-5 text-success fw-bold">
                                    <FaRupeeSign /> 62,999.00
                                </span>
                            </div>
                            <small className="text-muted">SKU: SAM-55Q60D</small>
                        </div>

                        {/* Product Image */}
                        <motion.div
                            className="text-center mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1587574293340-e0011c7d7e4b"
                                alt="Smart TV"
                                width={800}
                                height={450}
                                className="rounded-4 img-fluid shadow-sm"
                            />
                        </motion.div>

                        {/* Key Specs */}
                        <div className="row text-center border-top border-bottom py-3 mb-4">
                            {[
                                { icon: <FaIndustry />, title: "Brand", value: "Samsung" },
                                { icon: <FaCubes />, title: "Screen Size", value: "55 Inches" },
                                { icon: <FaWeightHanging />, title: "Resolution", value: "4K UHD" },
                                { icon: <FaCheckCircle />, title: "Warranty", value: "2 Years" },
                            ].map((item, index) => (
                                <div key={index} className="col-6 col-md-3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="text-primary fs-4 mb-1">{item.icon}</div>
                                        <p className="small text-muted mb-0">{item.title}</p>
                                        <p className="fw-semibold mb-0">{item.value}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        {/* Features Section */}
                        <ProductFeatures />
                    </motion.div>
                </div>

                {/* ---------- RIGHT SECTION (Contact Form) ---------- */}
                <div className="col-lg-4">
                    <motion.div
                        className="card border-0 shadow-lg rounded-4 p-4 bg-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h5 className="fw-bold mb-3 text-dark">Request Product Info</h5>

                        {/* Buttons */}
                        <div className="d-flex gap-2 mb-3">
                            <Link className="btn btn-primary flex-fill d-flex align-items-center justify-content-center gap-2 shadow-sm" href="tel:+919628554907">  <FaPhoneAlt />

                                Call

                            </Link>
                            <Link href={whatsappUrl} className="btn btn-outline-success flex-fill d-flex align-items-center justify-content-center gap-2">
                                <FaWhatsapp />WhatsApp
                            </Link>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control rounded-3"
                                    id="name"
                                    placeholder="Your Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-3"
                                    id="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control rounded-3"
                                    id="phone"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="phone">Phone</label>
                            </div>

                            <div className="form-floating mb-4">
                                <textarea
                                    className="form-control rounded-3"
                                    placeholder="Leave a message"
                                    id="message"
                                    style={{ height: "100px" }}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label htmlFor="message">Message</label>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="btn btn-primary w-100 py-2 fw-semibold shadow-sm"
                            >
                                Send Request
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div >
        </section >
    );
};

export default ProductDetails;

// ---------- FEATURES SECTION ----------
const features = [
    {
        title: "4K Ultra HD Display",
        desc: "Crisp and lifelike visuals with Quantum Dot technology for enhanced color contrast.",
    },
    {
        title: "Smart Connectivity",
        desc: "Built-in Wi-Fi, multiple HDMI ports, and voice assistant compatibility.",
    },
    {
        title: "Power Efficient",
        desc: "Energy-saving technology ensures longer lifespan with reduced consumption.",
    },
    {
        title: "Premium Audio",
        desc: "Dolby Digital+ speakers with deep bass and surround sound experience.",
    },
    {
        title: "Elegant Design",
        desc: "Slim bezel, lightweight frame, and wall-mount support for a modern setup.",
    },
];

const ProductFeatures = () => (
    <div className="mt-4">
        <h5 className="fw-bold mb-3 text-dark border-bottom pb-2">
            Product Highlights
        </h5>
        <div className="row g-3">
            {features.map((item, i) => (
                <motion.div
                    key={i}
                    className="col-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                    <div className="p-3 rounded-4 shadow-sm border bg-white hover-shadow-sm">
                        <h6 className="fw-semibold text-primary mb-1">{item.title}</h6>
                        <p className="text-secondary mb-0 small">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);
