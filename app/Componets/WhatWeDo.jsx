"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaBrush, FaCode, FaBullhorn } from "react-icons/fa";

const WhatWeDo = () => {
    const services = [
        {
            title: "Creative Design",
            icon: <FaBrush size={40} />,
            color: "primary",
            desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
            delay: 0.1,
        },
        {
            title: "Web Development",
            icon: <FaCode size={40} />,
            color: "success",
            desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
            delay: 0.2,
        },
        {
            title: "Digital Marketing",
            icon: <FaBullhorn size={40} />,
            color: "warning",
            desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
            delay: 0.3,
        },
         {
            title: "Creative Design",
            icon: <FaBrush size={40} />,
            color: "primary",
            desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
            delay: 0.1,
        },
        {
            title: "Web Development",
            icon: <FaCode size={40} />,
            color: "success",
            desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
            delay: 0.2,
        },
        {
            title: "Digital Marketing",
            icon: <FaBullhorn size={40} />,
            color: "warning",
            desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
            delay: 0.3,
        },
    ];

    return (
        <section className="py-5 bg-light position-relative  z-2" id="what-we-do">
            <div className="container text-center">
                <motion.h2
                    className="fw-bold display-6 mb-3 text-dark"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What We Do
                </motion.h2>

                <motion.p
                    className="text-muted mb-5 mx-auto"
                    style={{ maxWidth: "700px" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    We bring ideas to life through innovative design, cutting-edge
                    development, and impactful digital solutions.
                </motion.p>

                <div className="row g-4">
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            className={`col-md-4`} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                            viewport={{ once: true }}

                        >
                            <div
                                className={`card border-0 shadow-lg h-100 position-relative overflow-hidden rounded-4 bg-white transition-all border-end border-start border-3 border-${service.color}`}
                                style={{
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                }}
                            >
                                <div className="card-body py-5 px-4">
                                    <div
                                        className={`icon-box bg-${service.color}-subtle text-${service.color} mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle`}
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            boxShadow: `0 0 20px rgba(0,0,0,0.05)`,
                                        }}
                                    >
                                        {service.icon}
                                    </div>
                                    <h5 className="fw-bold mb-3">{service.title}</h5>
                                    <p className="text-muted">{service.desc}</p>
                                </div>

                                {/* 🔹 Hover Glow Effect */}
                                <div
                                    className={`position-absolute top-0 start-0 w-100 h-100 opacity-0 hover-opacity-100 rounded-4 bg-gradient bg-${service.color}`}
                                    style={{
                                        background: `linear-gradient(135deg, var(--bs-${service.color}), #6f42c1)`,
                                        transition: "opacity 0.4s ease",
                                        zIndex: -1,
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 🔹 Custom CSS */}

        </section>
    );
};

export default WhatWeDo;
