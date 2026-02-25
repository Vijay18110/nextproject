 
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Slider from "../ExternalLib/Carousel/Carousel";

// export const sliderData = [
//   {
//     id: 1,
//     type: "video",
//     src: "/01-01-2026.mp4",
//     bgColor: "#F7F7F7",
//     titleWhite: "HELLO!",
//     titleMixed: "WE'RE ",
//     brandName: "INFINIOX",
//     subtitle: "Innovation in Sustainable Design",
//     desc: "Manufacturing excellence where sustainability meets smart technology and timeless craftsmanship",
//   },
//   {
//     id: 2,
//     type: "image",
//     src: "/images/picture1.jpg",
//     bgColor: "#000000",
//     titleWhite: "HELLO!",
//     titleMixed: "WE'RE ",
//     brandName: "INFINIOX",
//     subtitle: "Innovation in Sustainable Design",
//     desc: "Manufacturing excellence where sustainability meets smart technology and timeless craftsmanship",
//   },
// ];

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
//     <div
//       className="w-100 position-relative mb-3"
//       // style={{ height: "110vh", overflow: "hidden" }}
//     >
//       <Slider onSlideChange={handleSlideChange}>
//         {sliderData.map((slide, index) => (
//           <section
//             key={slide.id}
//             className="position-relative w-100 h-100"
//             style={{ backgroundColor: slide.bgColor }}
//           >
//             {/* Dark gradient for text legibility */}
//             <div
//               className="position-absolute w-100 h-100 z-1"
//               style={{
//                 background:
//                   "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
//               }}
//             />

//             {slide.type === "video" ? (
//               <video
//                 ref={(el) => (videoRefs.current[index] = el)}
//                 src={slide.src}
//                 muted
//                 autoPlay
//                 loop
//                 playsInline
//                 className="object-fit-cover w-100 h-100"
//               />
//             ) : (
//               <Image
//                 src={slide.src}
//                 alt="Banner"
//                 fill
//                 className="object-fit-cover"
//                 priority
//               />
//             )}

//             {/* --- THE TEXT OVERLAY --- */}
//             <div className="position-absolute start-0 top-50  p-5 text-white z-2 mb-4">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   {/* HELLO! WE'RE INFINIOX */}
//                   <div className="mb-2">
//                     <h1
//                       className="display-1 fw-bold mb-0 text-white"
//                       style={{ lineHeight: 0.9 }}
//                     >
//                       {slide.titleWhite}
//                     </h1>
//                     <h1 className="display-1 fw-bold mb-0">
//                       <strong className="text-white">{slide.titleMixed}</strong>
//                       <span style={{ color: "#82bc4f" }}>
//                         {slide.brandName}
//                       </span>
//                     </h1>
//                   </div>

//                   {/* Innovation in Sustainable Design (Yellow) */}
//                   <h2
//                     className="display-4 fw-normal mt-4"
//                     style={{ color: "#fffd01" }}
//                   >
//                     {slide.subtitle}
//                   </h2>

//                   {/* Small Italic Description */}
//                   <p
//                     className="fs-5 fw-light fst-italic mt-3"
//                     style={{
//                       maxWidth: "600px",
//                       color: "rgba(255,255,255,0.8)",
//                     }}
//                   >
//                     {slide.desc}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
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

export const sliderData = [
  {
    id: 1,
    type: "video",
    src: "/01-01-2026.mp4",
    title: "Future of Design",
    brandName: "INFINIOX",
    subtitle: "Sustainable Smart Technology",
    desc: "Excellence in manufacturing where technology meets craftsmanship.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/picture1.jpg",
    title: "Modern Living",
    brandName: "INFINIOX",
    subtitle: "Eco-Friendly Innovation",
    desc: "Redefining spaces with sustainable materials and smart design.",
  },
];

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
    <div className="w-100 position-relative overflow-hidden" 
         style={{ height: "65vh", minHeight: "450px", background: "#000" }}>
      
      <Slider onSlideChange={handleSlideChange}>
        {sliderData.map((slide, index) => (
          <section key={slide.id} className="position-relative w-100 h-100">
            
            {/* Background Media */}
            <div className="position-absolute w-100 h-100 top-0 start-0">
              {slide.type === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={slide.src}
                  muted autoPlay loop playsInline
                  className="w-100 h-100 object-fit-cover opacity-75"
                />
              ) : (
                <Image src={slide.src} alt="Banner" fill className="object-fit-cover opacity-75" priority />
              )}
              {/* Subtle Gradient Overlay */}
              <div className="position-absolute inset-0 w-100 h-100" 
                   style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)" }} />
            </div>

            {/* Floating Content */}
            <div className="container h-100 position-relative z-3">
              <div className="row h-100 align-items-center">
                <div className="col-lg-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                      {/* Accent Line + Tag */}
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div style={{ width: "40px", height: "1px", background: "#82bc4f" }}></div>
                        <span className="text-uppercase tracking-widest text-white-50 small" style={{ letterSpacing: '3px' }}>
                          {slide.title}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h1 className="text-white fw-light mb-0" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                        WE ARE <span className="fw-bold" style={{ color: "#82bc4f" }}>{slide.brandName}</span>
                      </h1>

                      {/* Subtitle with a slight glow */}
                      <h2 className="h5 fw-normal mb-4" style={{ color: "#fffd01", opacity: 0.9 }}>
                        {slide.subtitle}
                      </h2>

                      {/* Thin Description */}
                      <p className="text-white-50 mb-5 d-none d-md-block" 
                         style={{ maxWidth: "450px", fontSize: "0.95rem", lineHeight: "1.6", borderLeft: "2px solid rgba(130, 188, 79, 0.3)", paddingLeft: "15px" }}>
                        {slide.desc}
                      </p>

                      {/* Minimalist Button */}
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn rounded-0 text-white px-5 py-2"
                        style={{ border: "1px solid #82bc4f", background: "rgba(130, 188, 79, 0.1)", backdropFilter: "blur(5px)" }}
                      >
                        VIEW COLLECTIONS
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </section>
        ))}
      </Slider>

      {/* Slide Counter Indicator (Optional minimalist detail) */}
      <div className="position-absolute bottom-0 start-0 p-5 z-3 d-none d-lg-block">
        <span className="text-white fw-bold fs-4">0{activeIndex + 1}</span>
        <span className="text-white-50 mx-2">/</span>
        <span className="text-white-50">0{sliderData.length}</span>
      </div>
    </div>
  );
};

export default HeroSlider;