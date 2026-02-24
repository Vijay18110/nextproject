// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Slider from "../ExternalLib/Carousel/Carousel";

// export const sliderData = [
//   {
//     id: 1,
//     type: "video",
//     src: "/01-01-2026.mp4",
//     bgColor: "#F7F7F7",
//   },

//   {
//     id: 2,
//     type: "image",
//     src: "/images/picture1.jpg",
//     bgColor: "#000000",
//     title: "HELLO! WE’RE INFINIOX",
//     subtitle: "Innovation in Sustainable Design",
//     desc: "Manufacturing excellence where sustainability meets smart technology and timeless craftsmanship.",
//   },
//   // {
//   //   id: 3,
//   //   type: "video",
//   //   src: "/video/The-touch-sensitive-river-table-offers-a-captivating-and-interactive-experience-for-users..mp4",
//   //   bgColor: "#EFEFEF",
//   // },
// ];

// const HeroSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const videoRefs = useRef([]);

//   // Update progress of active video
//   useEffect(() => {
//     const video = videoRefs.current[activeIndex];
//     if (!video) return;
//     const updateProgress = () => {
//       if (video.duration) {
//         setProgress((video.currentTime / video.duration) * 100);
//         setElapsedTime(Math.floor(video.currentTime));
//       }
//     };
//     video.addEventListener("timeupdate", updateProgress);
//     return () => video.removeEventListener("timeupdate", updateProgress);
//   }, [activeIndex]);

//   const handleSlideChange = (index) => {
//     setActiveIndex(index);
//     setProgress(0);
//     setElapsedTime(0);

//     videoRefs.current.forEach((vid, i) => {
//       if (!vid) return;
//       if (i === index) {
//         vid.currentTime = 0;
//         vid.play().catch(() => {});
//         setIsPlaying(true);
//       } else {
//         vid.pause();
//       }
//     });
//   };

//   const togglePlay = () => {
//     const video = videoRefs.current[activeIndex];
//     if (!video) return;

//     if (video.paused) {
//       video.play();
//       setIsPlaying(true);
//     } else {
//       video.pause();
//       setIsPlaying(false);
//     }
//   };
//   const radius = 22;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   return (
//     <div className="w-100 position-sticky top-0 ">
//       <Slider onSlideChange={handleSlideChange}>
//         {sliderData.map((slide, index) => (
//           <section
//             key={slide.id}
//             className="position-relative d-flex align-items-center justify-content-center"
//             style={{ backgroundColor: slide.bgColor, height: "100vh" }}
//           >
//             {slide.type === "video" ? (
//               <video
//                 src={slide.src}
//                 muted
//                 autoPlay={true} // autoplay only for active slide
//                 loop
//                 playsInline
//                 className="object-fit-cover w-100 h-100"
//               />
//             ) : (
//               <Image
//                 src={slide.src}
//                 alt={slide.title}
//                 fill
//                 className="object-fit-cover w-100 h-100"
//               />
//             )}

//             <div className="position-absolute bottom-0 start-0 p-5 text-white ">
//               <motion.h1
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="display-3 fw-bold text-white"
//               >
//                 {slide.title}
//               </motion.h1>
//               <motion.h5
//                 initial={{ opacity: 0, y: 0 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="fw-normal fs-3 text-warning"
//               >
//                 {slide.subtitle}
//               </motion.h5>
//             </div>
//           </section>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSlider;

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Slider from "../ExternalLib/Carousel/Carousel";

export const sliderData = [
  {
    id: 1,
    type: "video",
    src: "/01-01-2026.mp4",
    bgColor: "#F7F7F7",
    titleWhite: "HELLO!",
    titleMixed: "WE'RE ",
    brandName: "INFINIOX",
    subtitle: "Innovation in Sustainable Design",
    desc: "Manufacturing excellence where sustainability meets smart technology and timeless craftsmanship",
  },
  {
    id: 2,
    type: "image",
    src: "/images/picture1.jpg",
    bgColor: "#000000",
    titleWhite: "HELLO!",
    titleMixed: "WE'RE ",
    brandName: "INFINIOX",
    subtitle: "Innovation in Sustainable Design",
    desc: "Manufacturing excellence where sustainability meets smart technology and timeless craftsmanship",
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
    <div
      className="w-100 position-relative mb-3"
      // style={{ height: "110vh", overflow: "hidden" }}
    >
      <Slider onSlideChange={handleSlideChange}>
        {sliderData.map((slide, index) => (
          <section
            key={slide.id}
            className="position-relative w-100 h-100"
            style={{ backgroundColor: slide.bgColor }}
          >
            {/* Dark gradient for text legibility */}
            <div
              className="position-absolute w-100 h-100 z-1"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
              }}
            />

            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.src}
                muted
                autoPlay
                loop
                playsInline
                className="object-fit-cover w-100 h-100"
              />
            ) : (
              <Image
                src={slide.src}
                alt="Banner"
                fill
                className="object-fit-cover"
                priority
              />
            )}

            {/* --- THE TEXT OVERLAY --- */}
            <div className="position-absolute start-0 top-50  p-5 text-white z-2 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* HELLO! WE'RE INFINIOX */}
                  <div className="mb-2">
                    <h1
                      className="display-1 fw-bold mb-0 text-white"
                      style={{ lineHeight: 0.9 }}
                    >
                      {slide.titleWhite}
                    </h1>
                    <h1 className="display-1 fw-bold mb-0">
                      <strong className="text-white">{slide.titleMixed}</strong>
                      <span style={{ color: "#82bc4f" }}>
                        {slide.brandName}
                      </span>
                    </h1>
                  </div>

                  {/* Innovation in Sustainable Design (Yellow) */}
                  <h2
                    className="display-4 fw-normal mt-4"
                    style={{ color: "#fffd01" }}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Small Italic Description */}
                  <p
                    className="fs-5 fw-light fst-italic mt-3"
                    style={{
                      maxWidth: "600px",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {slide.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
