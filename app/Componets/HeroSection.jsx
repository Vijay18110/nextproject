// // "use client";
// // import { useRef, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";
// // import Slider from "../ExternalLib/Carousel/Carousel";
// // import styles from "./HeroSlider.module.css";

// // export const sliderData = [
// //   {
// //     id: 1,
// //     type: "video",
// //     src: "/01-01-2026.mp4",
// title: "Future of Design",
// brandName: "INFINIOX",
// subtitle: "Sustainable Smart Technology",
// desc: "Excellence in manufacturing where technology meets craftsmanship. We build for tomorrow.",
// //   },
// //   {
// //     id: 2,
// //     type: "image",
// //     src: "/images/picture1.jpg",
// //     title: "Modern Living",
// //     brandName: "INFINIOX",
// //     subtitle: "Eco-Friendly Innovation",
// //     desc: "Redefining spaces with sustainable materials and smart design for the modern era.",
// //   },
// // ];

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.15, delayChildren: 0.2 },
// //   },
// //   exit: { opacity: 0, transition: { duration: 0.3 } },
// // };

// // const textRevealVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
// //   },
// // };

// // const HeroSlider = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const videoRefs = useRef([]);

// //   const handleSlideChange = (index) => {
// //     setActiveIndex(index);
// //     videoRefs.current.forEach((vid, i) => {
// //       if (vid) i === index ? vid.play() : vid.pause();
// //     });
// //   };

// //   return (
// //     <div className={`position-relative w-100 ${styles.heroGlobalWrapper}`}>
// //       <Slider onSlideChange={handleSlideChange}>
// //         {sliderData.map((slide, index) => (
// //           /* Bulletproof slide wrapper */
// //           <section key={slide.id} className={styles.slideSection}>
// //             {/* --- Background Media --- */}
// //             <div className={styles.mediaContainer}>
// //               {slide.type === "video" ? (
// //                 <video
// //                   ref={(el) => (videoRefs.current[index] = el)}
// //                   src={slide.src}
// //                   muted
// //                   autoPlay
// //                   loop
// //                   playsInline
// //                   className={styles.mediaElement}
// //                 />
// //               ) : (
// //                 <Image
// //                   src={slide.src}
// //                   alt={slide.title}
// //                   fill
// //                   priority={index === 0}
// //                   className={styles.mediaElement}
// //                 />
// //               )}
// //               <div className={styles.vignetteOverlay} />
// //               <div className={styles.gradientOverlay} />
// //             </div>

// //             {/* --- Content Area --- */}
// //             <div className={`container ${styles.contentContainer}`}>
// //               <div className="row">
// //                 <div className="col-12 col-md-10 col-lg-8">
// //                   <AnimatePresence mode="wait">
// //                     {index === activeIndex && (
// //                       <motion.div
// //                         key={activeIndex}
// //                         variants={containerVariants}
// //                         initial="hidden"
// //                         animate="show"
// //                         exit="exit"
// //                         className={styles.textBlock}
// //                       >
// //                         {/* Tagline */}
// //                         <motion.div
// //                           variants={textRevealVariants}
// //                           className="d-flex align-items-center gap-3 mb-4"
// //                         >
// //                           <div className={styles.accentLine} />
// //                           <span className={styles.tagline}>{slide.title}</span>
// //                         </motion.div>

// //                         {/* Main Title */}
// //                         <motion.h1
// //                           variants={textRevealVariants}
// //                           className={styles.mainTitle}
// //                         >
// //                           WE ARE <br className="d-md-none" />
// //                           <span className={styles.highlight}>
// //                             {slide.brandName}
// //                           </span>
// //                         </motion.h1>

// //                         {/* Subtitle */}
// //                         <motion.h2
// //                           variants={textRevealVariants}
// //                           className={styles.subtitle}
// //                         >
// //                           {slide.subtitle}
// //                         </motion.h2>

// //                         {/* Description */}
// //                         <motion.p
// //                           variants={textRevealVariants}
// //                           className={styles.description}
// //                         >
// //                           {slide.desc}
// //                         </motion.p>

// //                         {/* Button */}
// //                         <motion.div
// //                           variants={textRevealVariants}
// //                           className="mt-5"
// //                         >
// //                           <button
// //                             className={`btn rounded-0 px-4 py-3 fw-bold d-inline-flex align-items-center gap-3 ${styles.premiumBtn}`}
// //                           >
// //                             DISCOVER MORE
// //                             <svg
// //                               width="18"
// //                               height="18"
// //                               viewBox="0 0 24 24"
// //                               fill="none"
// //                               stroke="currentColor"
// //                               strokeWidth="2"
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                             >
// //                               <line x1="5" y1="12" x2="19" y2="12"></line>
// //                               <polyline points="12 5 19 12 12 19"></polyline>
// //                             </svg>
// //                           </button>
// //                         </motion.div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Side Indicator */}
// //             <div
// //               className={`d-none d-lg-flex flex-column align-items-center justify-content-center gap-3 ${styles.desktopIndicator}`}
// //             >
// //               <span className={`fw-bold fs-5 ${styles.highlight}`}>
// //                 0{activeIndex + 1}
// //               </span>
// //               <div className={styles.indicatorLine} />
// //               <span className="text-white-50 fs-6">0{sliderData.length}</span>
// //             </div>
// //           </section>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default HeroSlider;
// "use client";
// import { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Slider from "../ExternalLib/Carousel/Carousel";
// import styles from "./HeroSlider.module.css";

// export const sliderData = [
//   {
//     id: 1,
//     type: "video",
//     src: "/01-01-2026.mp4",
//     title: "Future of Design",
//     brandName: "INFINIOX",
//     subtitle: "Sustainable Smart Technology",
//     desc: "Excellence in manufacturing where technology meets craftsmanship. We build for tomorrow.",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "/images/picture1.jpg",
//     title: "Modern Living",
//     brandName: "INFINIOX",
//     subtitle: "Eco-Friendly Innovation",
//     desc: "Redefining spaces with sustainable materials and smart design for the modern era.",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//   },
//   exit: { opacity: 0, transition: { duration: 0.3 } },
// };

// const textRevealVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
//   },
// };

// const HeroSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const videoRefs = useRef([]);

//   const handleSlideChange = (index) => {
//     setActiveIndex(index);
//     videoRefs.current.forEach((vid, i) => {
//       if (vid) i === index ? vid.play() : vid.pause();
//     });
//   };

//   return (
//     <div className={`position-relative w-100 ${styles.heroGlobalWrapper}`}>
//       <Slider onSlideChange={handleSlideChange}>
//         {sliderData.map((slide, index) => (
//           <section key={slide.id} className={styles.slideSection}>

//             {/* --- Background Media (Stays strictly at the back) --- */}
//             <div className={styles.mediaContainer}>
//               {slide.type === "video" ? (
//                 <video
//                   ref={(el) => (videoRefs.current[index] = el)}
//                   src={slide.src}
//                   muted
//                   autoPlay
//                   loop
//                   playsInline
//                   className={styles.mediaElement}
//                 />
//               ) : (
//                 <Image
//                   src={slide.src}
//                   alt={slide.title}
//                   fill
//                   priority={index === 0}
//                   className={styles.mediaElement}
//                 />
//               )}
//               <div className={styles.vignetteOverlay} />
//               <div className={styles.gradientOverlay} />
//             </div>

//             {/* --- Content Area (Forced to the front with z-index & h-100) --- */}
//             <div className={`container h-100 ${styles.contentContainer}`}>
//               {/* h-100 and align-items-center vertically centers the text over the image */}
//               <div className="row h-100 align-items-center">
//                 <div className="col-12 col-md-10 col-lg-8">
//                   <AnimatePresence mode="wait">
//                     {index === activeIndex && (
//                       <motion.div
//                         key={activeIndex}
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="show"
//                         exit="exit"
//                         className={styles.textBlock}
//                       >
//                         <motion.div variants={textRevealVariants} className="d-flex align-items-center gap-3 mb-4">
//                           <div className={styles.accentLine} />
//                           <span className={styles.tagline}>{slide.title}</span>
//                         </motion.div>

//                         <motion.h1 variants={textRevealVariants} className={styles.mainTitle}>
//                           WE ARE <br className="d-md-none" />
//                           <span className={styles.highlight}>
//                             {slide.brandName}
//                           </span>
//                         </motion.h1>

//                         <motion.h2 variants={textRevealVariants} className={styles.subtitle}>
//                           {slide.subtitle}
//                         </motion.h2>

//                         <motion.p variants={textRevealVariants} className={styles.description}>
//                           {slide.desc}
//                         </motion.p>

//                         <motion.div variants={textRevealVariants} className="mt-5">
//                           <button className={`btn rounded-0 px-4 py-3 fw-bold d-inline-flex align-items-center gap-3 ${styles.premiumBtn}`}>
//                             DISCOVER MORE
//                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                               <line x1="5" y1="12" x2="19" y2="12"></line>
//                               <polyline points="12 5 19 12 12 19"></polyline>
//                             </svg>
//                           </button>
//                         </motion.div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Indicator */}
//             <div className={`d-none d-lg-flex flex-column align-items-center justify-content-center gap-3 ${styles.desktopIndicator}`}>
//               <span className={`fw-bold fs-5 ${styles.highlight}`}>
//                 0{activeIndex + 1}
//               </span>
//               <div className={styles.indicatorLine} />
//               <span className="text-white-50 fs-6">0{sliderData.length}</span>
//             </div>
//           </section>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSlider;

"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Slider from "../ExternalLib/Carousel/Carousel";
import styles from "./HeroSlider.module.css";

export const sliderData = [
  {
    id: 1,
    type: "video",
    src: "/01-01-2026.mp4",
    title: "Future of Design",
    brandName: "INFINIOX",
    subtitle: "Sustainable Smart Technology",
    desc: "Excellence in manufacturing where technology meets craftsmanship. We build for tomorrow.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/picture1.jpg",
    title: "Modern Living",
    brandName: "INFINIOX",
    subtitle: "Eco-Friendly Innovation",
    desc: "Redefining spaces with sustainable materials and smart design for the modern era.",
    title: "Future of Design",
    brandName: "INFINIOX",
    subtitle: "Sustainable Smart Technology",
    desc: "Excellence in manufacturing where technology meets craftsmanship. We build for tomorrow.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    videoRefs.current.forEach((vid, i) => {
      if (vid) i === index ? vid.play() : vid.pause();
    });
  };

  return (
    <div className={`position-relative w-100 ${styles.heroGlobalWrapper}`}>
      <Slider onSlideChange={handleSlideChange}>
        {sliderData.map((slide, index) => (
          <section key={slide.id} className={styles.slideSection}>
            {/* --- Background Media --- */}
            <div className={styles.mediaContainer}>
              {slide.type === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.src}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className={styles.mediaElement}
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className={styles.mediaElement}
                />
              )}

              {/* Optional: You might want to hide these dark overlays on videos too 
                  if there is no text to read on them! */}
              {slide.type === "image" && (
                <>
                  <div className={styles.vignetteOverlay} />
                  <div className={styles.gradientOverlay} />
                </>
              )}
            </div>

            {/* --- Content Area --- */}
            <div className={`container h-100 ${styles.contentContainer}`}>
              <div className="row h-100 align-items-center">
                <div className="col-12 col-md-10 col-lg-8">
                  <AnimatePresence mode="wait">
                    {/* 👇 THIS IS THE KEY CHANGE 👇 */}
                    {slide.type === "image" && (
                      <motion.div
                        key={activeIndex}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={styles.textBlock}
                      >
                        <motion.div
                          variants={textRevealVariants}
                          className="d-flex align-items-center gap-3 mb-4"
                        >
                          <div className={styles.accentLine} />
                          <span className={styles.tagline}>{slide.title}</span>
                        </motion.div>

                        <motion.h1
                          variants={textRevealVariants}
                          className={styles.mainTitle}
                        >
                          WE ARE <br className="d-md-none" />
                          <span className={styles.highlight}>
                            {slide.brandName}
                          </span>
                        </motion.h1>

                        <motion.h2
                          variants={textRevealVariants}
                          className={styles.subtitle}
                        >
                          {slide.subtitle}
                        </motion.h2>

                        <motion.p
                          variants={textRevealVariants}
                          className={styles.description}
                        >
                          {slide.desc}
                        </motion.p>

                        {/* <motion.div
                          variants={textRevealVariants}
                          className="mt-5"
                        >
                          <button
                            className={`btn rounded-0 px-4 py-3 fw-bold d-inline-flex align-items-center gap-3 ${styles.premiumBtn}`}
                          >
                            DISCOVER MORE
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                        </motion.div> */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Side Indicator (Always visible) */}
            <div
              className={`d-none d-lg-flex flex-column align-items-center justify-content-center gap-3 ${styles.desktopIndicator}`}
            >
              <span className={`fw-bold fs-5 ${styles.highlight}`}>
                0{activeIndex + 1}
              </span>
              <div className={styles.indicatorLine} />
              <span className="text-white-50 fs-6">0{sliderData.length}</span>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
