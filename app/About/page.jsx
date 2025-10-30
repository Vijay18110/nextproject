"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBullseye, FaEye, FaUsers, FaHandshake } from "react-icons/fa";
import Button from "../Shared/Button";
import { useRouter } from "next/navigation";
import IconContainer from "../Shared/IconContainer/IconContainer";

const AboutPage = ({ bg = "#f8f9fa" }) => {
    const router = useRouter();

    return (
        <section
            className="py-5 min-vh-100 position-relative overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${bg} 0%, #ffffff 100%)`,
            }}
        >
            {/* Decorative overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: "radial-gradient(circle at top right, rgba(0, 123, 255, 0.1), transparent 60%)",
                    zIndex: 0,
                }}
            ></div>

            {/* Header Section */}
            <motion.div
                className="text-center mb-5 position-relative z-1"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h1 className="fw-bold display-5 mb-3 text-dark">
                    About <span className="text-gradient">Our Company</span>
                </h1>
                <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
                    We are passionate about building creative, innovative, and meaningful digital experiences.
                </p>
            </motion.div>

            {/* Image + Text Section */}
            <div className="container-fluid position-relative z-1">
                <div className="row align-items-center mb-5">
                    <motion.div
                        className="col-lg-6 mb-4 mb-lg-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="Team working together"
                            width={650}
                            height={450}
                            className="rounded-4 shadow-lg img-fluid object-fit-cover"
                        />
                    </motion.div>

                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="fw-bold mb-3 text-dark">Who We Are</h3>
                        <p className="text-muted mb-4">
                            Founded with the belief that design and technology can create meaningful change,
                            our company brings together thinkers, designers, and developers to craft products
                            that make a lasting impact.
                        </p>
                        <p className="text-muted">
                            From startups to global enterprises, we partner with our clients to build
                            innovative solutions that are intuitive, impactful, and future-ready.
                        </p>
                    </motion.div>
                </div>

                {/* Mission, Vision, Values Section */}
                <div className="row g-4 text-center">
                    {[
                        {
                            icon: <FaBullseye className="text-primary fs-1 mb-3" />,
                            title: "Our Mission",
                            text: "To deliver creative, scalable, and impactful digital solutions that empower businesses and inspire innovation.",
                            bg: "linear-gradient(135deg, #e3f2fd, #ffffff)",
                        },
                        {
                            icon: <FaEye className="text-success fs-1 mb-3" />,
                            title: "Our Vision",
                            text: "To be a global leader in creative technology, bridging the gap between people and innovation through human-centered design.",
                            bg: "linear-gradient(135deg, #e8f5e9, #ffffff)",
                        },
                        {
                            icon: <FaUsers className="text-warning fs-1 mb-3" />,
                            title: "Our Values",
                            text: "Integrity, collaboration, innovation, and commitment drive every project we undertake and every partnership we build.",
                            bg: "linear-gradient(135deg, #fff8e1, #ffffff)",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            className="col-md-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="card border-0 shadow-sm p-4 h-100 rounded-4 hover-card"
                                style={{
                                    background: card.bg,
                                    transition: "all 0.4s ease",
                                }}
                            >
                                {card.icon}
                                <h5 className="fw-bold mb-2">{card.title}</h5>
                                <p className="text-muted">{card.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="p-5 rounded-4 text-white shadow-lg mx-auto"
                        style={{
                            background: "linear-gradient(90deg, #0072ff, #00c6ff)",

                        }}
                    >

                        <FaHandshake className="fs-1 mb-3" />

                        <h3 className="fw-bold mb-2">Let’s Build Something Great Together</h3>
                        <p className="mb-4">
                            Partner with us to create transformative digital experiences that
                            inspire and deliver results.
                        </p>
                        <Button
                            handleNavigate={() => router.push("/Contact")}
                            className="btn btn-light btn-lg rounded-pill shadow px-4 onHover fw-semibold"
                            text="Contact Us"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPage;
