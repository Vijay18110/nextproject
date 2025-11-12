// // "use client"
// // import React from "react";
// // import { motion } from "framer-motion";
// // import { FaBrush, FaCode, FaBullhorn } from "react-icons/fa";

// // const WhatWeDo = () => {
// //     const services = [
// //         {
// //             title: "Creative Design",
// //             icon: <FaBrush size={40} />,
// //             color: "primary",
// //             desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
// //             delay: 0.1,
// //         },
// //         {
// //             title: "Web Development",
// //             icon: <FaCode size={40} />,
// //             color: "success",
// //             desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
// //             delay: 0.2,
// //         },
// //         {
// //             title: "Digital Marketing",
// //             icon: <FaBullhorn size={40} />,
// //             color: "warning",
// //             desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
// //             delay: 0.3,
// //         },
// //         {
// //             title: "Creative Design",
// //             icon: <FaBrush size={40} />,
// //             color: "primary",
// //             desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
// //             delay: 0.1,
// //         },
// //         {
// //             title: "Web Development",
// //             icon: <FaCode size={40} />,
// //             color: "success",
// //             desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
// //             delay: 0.2,
// //         },
// //         {
// //             title: "Digital Marketing",
// //             icon: <FaBullhorn size={40} />,
// //             color: "warning",
// //             desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
// //             delay: 0.3,
// //         },
// //     ];

// //     return (
// //         <section className="py-5 bg-light position-relative  z-2" id="what-we-do">
// //             <div className="container text-center">
// //                 <motion.h2
// //                     className="fw-bold display-6 mb-3 text-dark"
// //                     initial={{ opacity: 0, y: -20 }}
// //                     whileInView={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6 }}
// //                     viewport={{ once: true }}
// //                 >
// //                     What We Do
// //                 </motion.h2>

// //                 <motion.p
// //                     className="text-muted mb-5 mx-auto"
// //                     style={{ maxWidth: "700px" }}
// //                     initial={{ opacity: 0 }}
// //                     whileInView={{ opacity: 1 }}
// //                     transition={{ delay: 0.2, duration: 0.8 }}
// //                     viewport={{ once: true }}
// //                 >
// //                     We bring ideas to life through innovative design, cutting-edge
// //                     development, and impactful digital solutions.
// //                 </motion.p>

// //                 <div className="row g-4">
// //                     {services.map((service) => (
// //                         <motion.div
// //                             key={service.title}
// //                             className={`col-md-4`}
// //                             initial={{ opacity: 0, y: 50 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             transition={{ delay: service.delay, duration: 0.6 }}
// //                             viewport={{ once: true }}

// //                         >
// //                             <div
// //                                 className={`card border-0 shadow-lg h-100 position-relative overflow-hidden rounded-4 bg-white transition-all border-end border-start border-3 border-${service.color}`}
// //                                 style={{
// //                                     transition: "all 0.3s ease",
// //                                     boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
// //                                 }}
// //                             >
// //                                 <div className="card-body py-5 px-4">
// //                                     <div
// //                                         className={`icon-box bg-${service.color}-subtle text-${service.color} mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle`}
// //                                         style={{
// //                                             width: "80px",
// //                                             height: "80px",
// //                                             boxShadow: `0 0 20px rgba(0,0,0,0.05)`,
// //                                         }}
// //                                     >
// //                                         {service.icon}
// //                                     </div>
// //                                     <h5 className="fw-bold mb-3">{service.title}</h5>
// //                                     <p className="text-muted">{service.desc}</p>
// //                                 </div>

// //                                 {/* 🔹 Hover Glow Effect */}
// //                                 <div
// //                                     className={`position-absolute top-0 start-0 w-100 h-100 opacity-0 hover-opacity-100 rounded-4 bg-gradient bg-${service.color}`}
// //                                     style={{
// //                                         background: `linear-gradient(135deg, var(--bs-${service.color}), #6f42c1)`,
// //                                         transition: "opacity 0.4s ease",
// //                                         zIndex: -1,
// //                                     }}
// //                                 ></div>
// //                             </div>
// //                         </motion.div>
// //                     ))}
// //                 </div>
// //             </div>

// //             {/* 🔹 Custom CSS */}

// //         </section>
// //     );
// // };

// // export default WhatWeDo;

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaBrush, FaCode, FaBullhorn } from "react-icons/fa";

// const WhatWeDo = () => {
//     const services = [
//         {
//             title: "Creative Design",
//             icon: <FaBrush size={40} />,
//             color: "primary",
//             desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
//             delay: 0.1,
//         },
//         {
//             title: "Web Development",
//             icon: <FaCode size={40} />,
//             color: "success",
//             desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
//             delay: 0.2,
//         },
//         {
//             title: "Digital Marketing",
//             icon: <FaBullhorn size={40} />,
//             color: "warning",
//             desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
//             delay: 0.3,
//         },
//         {
//             title: "Creative Design",
//             icon: <FaBrush size={40} />,
//             color: "primary",
//             desc: "Our team crafts stunning visuals and brand identities that leave a lasting impression.",
//             delay: 0.4,
//         },
//         {
//             title: "Web Development",
//             icon: <FaCode size={40} />,
//             color: "success",
//             desc: "We build fast, responsive, and scalable websites tailored to your business needs.",
//             delay: 0.5,
//         },
//         {
//             title: "Digital Marketing",
//             icon: <FaBullhorn size={40} />,
//             color: "warning",
//             desc: "Boost your online presence with data-driven marketing strategies that deliver results.",
//             delay: 0.6,
//         },
//     ];

//     return (
//         <section className="py-5 bg-light position-relative z-2" id="what-we-do">
//             <div className="container text-center">
//                 <motion.h2
//                     className="fw-bold display-6 mb-3 text-dark"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                 >
//                     What We Do
//                 </motion.h2>

//                 <motion.p
//                     className="text-muted mb-5 mx-auto"
//                     style={{ maxWidth: "700px" }}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ delay: 0.2, duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     We bring ideas to life through innovative design, cutting-edge
//                     development, and impactful digital solutions.
//                 </motion.p>

//                 <div className="row g-4 justify-content-center">
//                     {services.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             className="col-md-4"
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: service.delay, duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <Card3D service={service} />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// // 🔹 Reusable 3D Tilt Card Component
// const Card3D = ({ service }) => {
//     const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

//     const handleMouseMove = (e) => {
//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const rotateX = ((y - centerY) / 25) * -1;
//         const rotateY = ((x - centerX) / 25);
//         setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
//     };

//     const handleMouseLeave = () => setTransform("rotateX(0deg) rotateY(0deg)");

//     return (
//         <div
//             className="position-relative"
//             style={{
//                 perspective: "1000px",
//             }}
//         >
//             <div
//                 className={`card border-0 h-100 rounded-4 bg-white shadow-lg`}
//                 style={{
//                     transform: transform,
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.2s ease, box-shadow 0.3s",
//                     boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
//                 }}
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//             >
//                 <div className="card-body py-5 px-4">
//                     <div
//                         className={`icon-box bg-${service.color}-subtle text-${service.color} mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle`}
//                         style={{
//                             width: "80px",
//                             height: "80px",
//                             boxShadow: "0 0 20px rgba(0,0,0,0.05)",
//                             transform: "translateZ(40px)",
//                         }}
//                     >
//                         {service.icon}
//                     </div>
//                     <h5
//                         className="fw-bold mb-3"
//                         style={{ transform: "translateZ(25px)" }}
//                     >
//                         {service.title}
//                     </h5>
//                     <p
//                         className="text-muted"
//                         style={{ transform: "translateZ(20px)" }}
//                     >
//                         {service.desc}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhatWeDo;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaPuzzlePiece, FaWater } from "react-icons/fa";

const WhatWeDo = () => {
    const services = [
        {
            title: "Smart Benches",
            icon: <FaCouch size={50} />,
            color: "primary",
            desc: "Our smart benches combine technology with comfort — featuring solar charging, Wi-Fi, and eco-friendly materials to enhance modern urban spaces.",
            delay: 0.1,
        },
        {
            title: "Wooden Toys",
            icon: <FaPuzzlePiece size={50} />,
            color: "success",
            desc: "Handcrafted with care, our wooden toys bring creativity and imagination to life. Safe, durable, and made from responsibly sourced wood.",
            delay: 0.2,
        },
        {
            title: "Epoxy Creations",
            icon: <FaWater size={50} />,
            color: "warning",
            desc: "From tables to art pieces, our epoxy products blend natural wood and resin artistry — turning ordinary furniture into extraordinary statements.",
            delay: 0.3,
        },
    ];

    return (
        <section className="py-5 bg-light position-relative z-2" id="what-we-do">
            <div className="container text-center">
                {/* Heading */}
                <motion.h2
                    className="fw-bold display-6 mb-3 text-dark"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What We Do
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className="text-muted mb-5 mx-auto"
                    style={{ maxWidth: "700px" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    We craft a blend of design, sustainability, and innovation. From smart city furniture to artistic epoxy creations, we bring modern craftsmanship to life.
                </motion.p>

                {/* Service Items */}
                <div className="row g-5 justify-content-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="col-md-4 col-sm-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center px-4 py-3">
                                <motion.div
                                    className={`text-${service.color} mb-4 d-inline-flex justify-content-center align-items-center`}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h5 className="fw-bold mb-3">{service.title}</h5>
                                <p className="text-muted">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >

                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDo;
