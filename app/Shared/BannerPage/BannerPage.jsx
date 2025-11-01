import React from "react";
import { motion } from "framer-motion";
import './banner.css'
const BannerPage = ({ banner, text, height = "400px" }) => {
    return (
        <section
            className="container-fluid banner-page position-relative d-flex align-items-center justify-content-center text-center"
            style={{
                backgroundImage: `url(${banner})`,
                height,
            }}
        >
            {/* Overlay */}
            <div className="banner-overlay"></div>

            {/* Title Animation */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="banner-content text-white position-relative"
            >
                <h1 className="banner-title display-5 fw-bold">{text}</h1>
                <div className="banner-divider mx-auto mt-3"></div>
            </motion.div>
        </section>
    );
};

export default BannerPage;
