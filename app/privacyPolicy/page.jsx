"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock, FaGlobe, FaClock } from "react-icons/fa";

const PrivacyPolicy = () => {
    return (
        <section className="bg-light pb-5 pt-6   min-vh-100 ">
            <div className="container-fluid pt-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <FaShieldAlt size={50} className="text-primary mb-3" />
                    <h1 className="fw-bold display-5">Privacy Policy</h1>
                    <p className="text-muted">
                        Your privacy is our priority. Learn how we collect, use, and
                        safeguard your information.
                    </p>
                </motion.div>

                {/* Sections */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* 1️⃣ Data Collection */}
                        <motion.div
                            className="card border-0 shadow-sm mb-4 rounded-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body p-4">
                                <h4 className="fw-bold text-primary d-flex align-items-center gap-2">
                                    <FaUserLock /> Information We Collect
                                </h4>
                                <p className="text-muted mt-3">
                                    We collect personal information such as your name, email
                                    address, and phone number when you interact with our website.
                                    Additionally, we may collect non-personal data like browser
                                    type, IP address, and pages visited to improve user experience.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2️⃣ Usage of Data */}
                        <motion.div
                            className="card border-0 shadow-sm mb-4 rounded-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body p-4">
                                <h4 className="fw-bold text-success d-flex align-items-center gap-2">
                                    <FaGlobe /> How We Use Your Information
                                </h4>
                                <ul className="text-muted mt-3">
                                    <li>To provide, maintain, and improve our services.</li>
                                    <li>To send updates, newsletters, and promotional materials.</li>
                                    <li>To enhance user experience and personalization.</li>
                                    <li>To comply with legal obligations and resolve disputes.</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* 3️⃣ Data Protection */}
                        <motion.div
                            className="card border-0 shadow-sm mb-4 rounded-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body p-4">
                                <h4 className="fw-bold text-danger d-flex align-items-center gap-2">
                                    <FaShieldAlt /> How We Protect Your Data
                                </h4>
                                <p className="text-muted mt-3">
                                    We implement advanced security measures to protect your
                                    personal data from unauthorized access, alteration, or
                                    disclosure. Our website uses SSL encryption, secure servers,
                                    and restricted access to ensure your information remains safe.
                                </p>
                            </div>
                        </motion.div>

                        {/* 4️⃣ Policy Updates */}
                        <motion.div
                            className="card border-0 shadow-sm mb-4 rounded-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="card-body p-4">
                                <h4 className="fw-bold text-warning d-flex align-items-center gap-2">
                                    <FaClock /> Updates to This Policy
                                </h4>
                                <p className="text-muted mt-3">
                                    We may update this Privacy Policy periodically. Any changes
                                    will be reflected on this page with an updated revision date.
                                    Continued use of our services after updates constitutes your
                                    acceptance of the revised policy.
                                </p>
                            </div>
                        </motion.div>

                        {/* 5️⃣ Contact Info */}
                     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
