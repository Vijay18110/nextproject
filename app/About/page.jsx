// // "use client";
// // import React from "react";
// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import { FaBullseye, FaEye, FaUsers, FaHandshake } from "react-icons/fa";
// // import Button from "../Shared/Button";
// // import { useRouter } from "next/navigation";
// // import IconContainer from "../Shared/IconContainer/IconContainer";
// // import BannerPage from '../Shared/BannerPage/BannerPage'
// // const AboutPage = ({ bg = "#f8f9fa" }) => {
// //     const router = useRouter();

// //     return (
// //         <section
// //             className="py-5 min-vh-100 position-relative overflow-hidden"
// //             style={{
// //                 background: `linear-gradient(135deg, ${bg} 0%, #ffffff 100%)`,
// //             }}
// //         >
// //         <BannerPage text={"About Us" } banner={"./images/bg/2.jpg" }/>

// //             {/* Decorative overlay */}

// //             <div
// //                 className="position-absolute top-0 start-0 w-100 h-100"
// //                 style={{
// //                     background: "radial-gradient(circle at top right, rgba(0, 123, 255, 0.1), transparent 60%)",
// //                     zIndex: 0,
// //                 }}
// //             ></div>

// //             {/* Header Section */}
// //             <motion.div
// //                 className="text-center mb-5 position-relative z-1"
// //                 initial={{ opacity: 0, y: -30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //                 viewport={{ once: true }}
// //             >
// //                 <h1 className="fw-bold display-5 mb-3 text-dark">
// //                     About <span className="text-gradient">Our Company</span>
// //                 </h1>
// //                 <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
// //                     We are passionate about building creative, innovative, and meaningful digital experiences.
// //                 </p>
// //             </motion.div>

// //             {/* Image + Text Section */}
// //             <div className="container-fluid position-relative z-1">
// //                 <div className="row align-items-center mb-5">
// //                     <motion.div
// //                         className="col-lg-6 mb-4 mb-lg-0"
// //                         initial={{ opacity: 0, x: -50 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.7 }}
// //                         viewport={{ once: true }}
// //                     >
// //                         <Image
// //                             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
// //                             alt="Team working together"
// //                             width={650}
// //                             height={450}
// //                             className="rounded-4 shadow-lg img-fluid object-fit-cover"
// //                         />
// //                     </motion.div>

// //                     <motion.div
// //                         className="col-lg-6"
// //                         initial={{ opacity: 0, x: 50 }}
// //                         whileInView={{ opacity: 1, x: 0 }}
// //                         transition={{ duration: 0.7, delay: 0.1 }}
// //                         viewport={{ once: true }}
// //                     >
// //                         <h3 className="fw-bold mb-3 text-dark">Who We Are</h3>
// //                         <p className="text-muted mb-4">
// //                             Founded with the belief that design and technology can create meaningful change,
// //                             our company brings together thinkers, designers, and developers to craft products
// //                             that make a lasting impact.
// //                         </p>
// //                         <p className="text-muted">
// //                             From startups to global enterprises, we partner with our clients to build
// //                             innovative solutions that are intuitive, impactful, and future-ready.
// //                         </p>
// //                     </motion.div>
// //                 </div>

// //                 {/* Mission, Vision, Values Section */}
// //                 <div className="row g-4 text-center">
// //                     {[
// //                         {
// //                             icon: <FaBullseye className="text-primary fs-1 mb-3" />,
// //                             title: "Our Mission",
// //                             text: "To deliver creative, scalable, and impactful digital solutions that empower businesses and inspire innovation.",
// //                             bg: "linear-gradient(135deg, #e3f2fd, #ffffff)",
// //                         },
// //                         {
// //                             icon: <FaEye className="text-success fs-1 mb-3" />,
// //                             title: "Our Vision",
// //                             text: "To be a global leader in creative technology, bridging the gap between people and innovation through human-centered design.",
// //                             bg: "linear-gradient(135deg, #e8f5e9, #ffffff)",
// //                         },
// //                         {
// //                             icon: <FaUsers className="text-warning fs-1 mb-3" />,
// //                             title: "Our Values",
// //                             text: "Integrity, collaboration, innovation, and commitment drive every project we undertake and every partnership we build.",
// //                             bg: "linear-gradient(135deg, #fff8e1, #ffffff)",
// //                         },
// //                     ].map((card, i) => (
// //                         <motion.div
// //                             key={i}
// //                             className="col-md-4"
// //                             initial={{ opacity: 0, y: 50 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             transition={{ duration: 0.6, delay: i * 0.1 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             <div
// //                                 className="card border-0 shadow-sm p-4 h-100 rounded-4 hover-card"
// //                                 style={{
// //                                     background: card.bg,
// //                                     transition: "all 0.4s ease",
// //                                 }}
// //                             >
// //                                 {card.icon}
// //                                 <h5 className="fw-bold mb-2">{card.title}</h5>
// //                                 <p className="text-muted">{card.text}</p>
// //                             </div>
// //                         </motion.div>
// //                     ))}
// //                 </div>

// //                 {/* CTA Section */}
// //                 <motion.div
// //                     className="text-center mt-5"
// //                     initial={{ opacity: 0 }}
// //                     whileInView={{ opacity: 1 }}
// //                     transition={{ duration: 0.8, delay: 0.3 }}
// //                     viewport={{ once: true }}
// //                 >
// //                     <div
// //                         className="p-5 rounded-4 text-white shadow-lg mx-auto"
// //                         style={{
// //                             background: "linear-gradient(90deg, #0072ff, #00c6ff)",

// //                         }}
// //                     >

// //                         <FaHandshake className="fs-1 mb-3" />

// //                         <h3 className="fw-bold mb-2">Let’s Build Something Great Together</h3>
// //                         <p className="mb-4">
// //                             Partner with us to create transformative digital experiences that
// //                             inspire and deliver results.
// //                         </p>
// //                         <Button
// //                             handleNavigate={() => router.push("/Contact")}
// //                             className="btn btn-light btn-lg rounded-pill shadow px-4 onHover fw-semibold"
// //                             text="Contact Us"
// //                         />
// //                     </div>
// //                 </motion.div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default AboutPage;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FaBullseye,
//   FaEye,
//   FaUsers,
//   FaHandshake,
//   FaRocket,
//   FaLightbulb,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import Button from "../Shared/Button";
// import BannerPage from "../Shared/BannerPage/BannerPage";

// // Data extracted for cleaner JSX
// const VALUES_DATA = [
//   {
//     icon: <FaBullseye className="text-primary fs-2 mb-3" />,
//     title: "Our Mission",
//     text: "To deliver creative, scalable, and impactful digital solutions that empower businesses and inspire innovation.",
//     color: "#0d6efd",
//   },
//   {
//     icon: <FaEye className="text-success fs-2 mb-3" />,
//     title: "Our Vision",
//     text: "To be a global leader in creative technology, bridging the gap between people and innovation through design.",
//     color: "#198754",
//   },
//   {
//     icon: <FaUsers className="text-warning fs-2 mb-3" />,
//     title: "Our Values",
//     text: "Integrity, collaboration, and commitment drive every project we undertake and every partnership we build.",
//     color: "#ffc107",
//   },
// ];

// const AboutPage = () => {
//   const router = useRouter();

//   return (
//     <section
//       className="min-vh-100 position-relative"
//       style={{ backgroundColor: "#ffffff" }}
//     >
//       <BannerPage text="About Us" banner="./images/bg/2.jpg" />

//       {/* Decorative Background Elements */}
//       <div
//         className="overflow-hidden position-absolute w-100 h-100 top-0 start-0"
//         style={{ pointerEvents: "none", zIndex: 0 }}
//       >
//         <div
//           className="position-absolute"
//           style={{
//             top: "10%",
//             right: "-5%",
//             width: "400px",
//             height: "400px",
//             background:
//               "radial-gradient(circle, rgba(13, 110, 253, 0.05) 0%, transparent 70%)",
//           }}
//         />
//       </div>

//       <div className="container-fluid py-5 position-relative z-1">
//         {/* Header Section */}
//         <div className="row justify-content-center text-center mb-5">
//           <motion.div
//             className="col-lg-8"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="badge rounded-pill bg-primary-soft text-primary px-3 py-2 mb-3">
//               SINCE 2024
//             </span>
//             <h1 className="fw-bold display-4 mb-4">
//               Redefining the{" "}
//               <span
//                 style={{
//                   color: "#0d6efd",
//                   background: "linear-gradient(to right, #0d6efd, #00c6ff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 Digital Landscape
//               </span>
//             </h1>
//             <p className="lead text-muted px-lg-5">
//               We are a team of visionary creators dedicated to transforming
//               complex challenges into elegant digital solutions.
//             </p>
//           </motion.div>
//         </div>

//         {/* Feature Section */}
//         <div className="row align-items-center mb-5 pb-5">
//           <motion.div
//             className="col-lg-6 mb-4 mb-lg-0"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="position-relative">
//               <Image
//                 src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//                 alt="Our Creative Team"
//                 width={600}
//                 height={500}
//                 className="rounded-5 shadow-2xl img-fluid"
//                 style={{ objectFit: "cover" }}
//               />
//               {/* Floating Stat Card */}
//               <div className="position-absolute bottom-0 start-0 mb-4 ms-n3 p-4 bg-white shadow rounded-4 d-none d-md-block">
//                 <div className="d-flex align-items-center gap-3">
//                   <div className="bg-primary text-white p-3 rounded-3">
//                     <FaRocket />
//                   </div>
//                   <div>
//                     <h5 className="mb-0 fw-bold">150+</h5>
//                     <small className="text-muted">Projects Delivered</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="col-lg-6 ps-lg-5"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="fw-bold mb-4">Who We Are</h2>
//             <p className="text-muted mb-4 fs-5">
//               Founded on the principles of{" "}
//               <strong>innovation and integrity</strong>, we bridge the gap
//               between human needs and technical possibilities.
//             </p>
//             <div className="d-flex gap-3 mb-3">
//               <FaLightbulb className="text-primary mt-1" />
//               <div>
//                 <h6 className="fw-bold">Innovation First</h6>
//                 <p className="small text-muted">
//                   We don't just follow trends; we set them through continuous
//                   R&D.
//                 </p>
//               </div>
//             </div>
//             <div className="d-flex gap-3">
//               <FaHandshake className="text-primary mt-1" />
//               <div>
//                 <h6 className="fw-bold">Client Partnership</h6>
//                 <p className="small text-muted">
//                   Your success is our metric. We act as an extension of your own
//                   team.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Vision Cards */}
//         <div className="row g-4 mb-5">
//           {VALUES_DATA.map((card, i) => (
//             <motion.div
//               key={i}
//               className="col-md-4"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div
//                 className="h-100 p-4 rounded-4 border-0 shadow-sm text-center card-hover-effect"
//                 style={{
//                   background: "rgba(255, 255, 255, 0.7)",
//                   backdropFilter: "blur(10px)",
//                   border: "1px solid rgba(0,0,0,0.05)",
//                   transition: "transform 0.3s ease",
//                 }}
//               >
//                 {card.icon}
//                 <h4 className="fw-bold mb-3">{card.title}</h4>
//                 <p className="text-muted mb-0">{card.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Modern Call to Action */}
//         <motion.div
//           className="rounded-5 overflow-hidden position-relative p-5 text-center text-white mt-5"
//           style={{
//             background: "linear-gradient(135deg, #001f3f 0%, #0072ff 100%)",
//           }}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <div className="position-relative z-1">
//             <h2 className="display-6 fw-bold mb-3">
//               Ready to start your next project?
//             </h2>
//             <p className="lead mb-4 opacity-75">
//               Let’s collaborate to build something that moves the needle.
//             </p>
//             <Button
//               handleNavigate={() => router.push("/Contact")}
//               className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg"
//               text="Work With Us"
//             />
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .card-hover-effect:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
//         }
//         .bg-primary-soft {
//           background-color: rgba(13, 110, 253, 0.1);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AboutPage;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Button from "../Shared/Button";
import BannerPage from "../Shared/BannerPage/BannerPage";

const VALUES_DATA = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    text: "To deliver creative, scalable, and impactful digital solutions that empower businesses and inspire innovation.",
    accent: "#0d6efd",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    text: "To be a global leader in creative technology, bridging the gap between people and innovation through design.",
    accent: "#198754",
  },
  {
    icon: <FaUsers />,
    title: "Our Values",
    text: "Integrity, collaboration, and commitment drive every project we undertake and every partnership we build.",
    accent: "#ffc107",
  },
];

const AboutPage = () => {
  const router = useRouter();

  return (
    <section className="min-vh-100 bg-white overflow-hidden">
      <BannerPage text="About Us" banner="./images/bg/2.jpg" />
      <div className="container py-5 mt-lg-5">
        {/* --- HERO TEXT SECTION --- */}
        <div className="row justify-content-center text-center mb-5">
          <motion.div
            className="col-lg-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary fw-bold text-uppercase tracking-widest small mb-2 d-block">
              Since 2025 • Excellence in Innovation
            </span>
            <h1 className="display-3 fw-bold mb-4 text-dark">
              We Craft{" "}
              <span className="text-primary">Digital Masterpieces</span>
            </h1>
            <p className="lead text-muted px-lg-5 mb-0">
              We are a collective of designers, engineers, and strategists
              dedicated to turning complex ideas into seamless user experiences.
            </p>
          </motion.div>
        </div>

        {/* --- IMAGE & CONTENT BLOCK --- */}
        <div className="row align-items-center py-5">
          <motion.div
            className="col-lg-6 position-relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image with decorative offset border */}
            <div className="position-relative">
              <div
                className="position-absolute translate-middle-x top-0 start-0 w-100 h-100   rounded-5 d-none d-lg-block"
                style={{ marginLeft: "-20px", marginTop: "20px", zIndex: 0 }}
              />
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Our Creative Team"
                width={600}
                height={500}
                className="rounded-5 shadow-2xl position-relative z-1 img-fluid grayscale-hover"
                style={{ objectFit: "cover", transition: "0.5s" }}
              />

              {/* Floating Glass Stat Card */}
              <motion.div
                className="position-absolute bottom-0 end-0 mb-4 me-lg-n4 p-4 rounded-4 shadow-lg z-2 d-none d-md-block"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-primary text-white p-3 rounded-circle">
                    <FaRocket size={24} />
                  </div>
                  <div>
                    <h4 className="mb-0 fw-bold">150+</h4>
                    <small className="text-muted text-uppercase fw-semibold">
                      Global Projects
                    </small>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 ps-lg-5 mt-5 mt-lg-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold  display-6 mb-4">
              The Human Side of <br />
              Technology
            </h2>
            <p className="text-muted mb-4 fs-5">
              We believe that great technology shouldn't feel like technology.
              It should feel like a natural extension of the user.
            </p>

            <ul className="list-unstyled mb-5">
              {[
                {
                  title: "Innovation First",
                  desc: "Setting trends rather than following them.",
                },
                {
                  title: "Client Centric",
                  desc: "Your goals are the heart of our strategy.",
                },
              ].map((item, idx) => (
                <li key={idx} className="d-flex gap-3 mb-4">
                  <FaCheckCircle
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="small text-muted mb-0">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              handleNavigate={() => router.push("/Contact")}
              className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold"
              text="Learn Our Process"
            />
          </motion.div>
        </div>

        {/* --- MISSION/VISION CARDS --- */}
        <div className="row g-4 mt-5">
          {VALUES_DATA.map((card, i) => (
            <motion.div
              key={i}
              className="col-md-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-100 p-5 rounded-4 border-0 shadow-sm transition-all hover-lift bg-light border-hover">
                <div
                  className="mb-4 d-inline-block p-3 rounded-4 bg-white shadow-sm"
                  style={{ color: card.accent }}
                >
                  {React.cloneElement(card.icon, { size: 30 })}
                </div>
                <h4 className="fw-bold mb-3">{card.title}</h4>
                <p className="text-muted mb-0 lh-lg">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PREMIUM CTA BLOCK --- */}
        <motion.div
          className="mt-5 p-5 rounded-5 text-center text-white position-relative overflow-hidden shadow-2xl"
          style={{ background: "#0a0a0a" }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative mesh background */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100 opacity-25"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 70%, #9333ea 0%, transparent 50%)",
            }}
          />

          <div className="position-relative z-1 py-4">
            <h2 className="display-5 text-white fw-bold mb-3">
              Let’s Forge the Future
            </h2>
            <p
              className="lead mb-5 opacity-75 mx-auto text-warning"
              style={{ maxWidth: "600px" }}
            >
              Partner with a team that values your vision as much as you do.
            </p>
            <Button
              handleNavigate={() => router.push("/Contact")}
              className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow"
              text="Start a Conversation"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hover-lift {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1) !important;
        }
        .border-hover:hover {
          border: 1px solid rgba(13, 110, 253, 0.2) !important;
        }
        .grayscale-hover:hover {
          filter: grayscale(0%);
        }
        .grayscale-hover {
          filter: grayscale(30%);
        }
        .tracking-widest {
          letter-spacing: 0.15em;
        }
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
};

export default AboutPage;
