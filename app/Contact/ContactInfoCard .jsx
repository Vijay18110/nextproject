"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactInfoCard = ({ icon, title, text, gradient, link, iconBg = "#ffffffcc" }) => {
    const isLink = !!link;

    const content = (
        <motion.div
            className="p-4 h-100 rounded-4 shadow-sm contact-card"
            style={{
                background: gradient,
                border: "1px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(10px)",
                cursor: isLink ? "pointer" : "default",
                transition: "all 0.3s ease",
            }}
        >
            {/* ICON CONTAINER */}
            <div className="icon-wrapper mb-3 d-flex align-items-center justify-content-center shadow-sm mx-auto">
                <span className="text-primary fs-2">{icon}</span>
            </div>

            {/* TEXT SECTION */}
            <h5 className="fw-bold mt-2 text-center">{title}</h5>
            <p className="mb-0 small text-center">{text}</p>
        </motion.div>
    );

    return (
        <motion.div
            className="col-md-3 mb-4"
            transition={{ type: "spring", stiffness: 200 }}
        >
            {isLink ? (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                    {content}
                </a>
            ) : (
                content
            )}
        </motion.div>
    );
};

export default ContactInfoCard;
