// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Slider from "../ExternalLib/Carousel/Carousel";
// // sliderData.js
// export const sliderData = [
//     {
//         id: 1,
//         type: "image",
//         src: "https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_large.jpg",
//         title: "Vision Pro",
//         subtitle: "Blending digital content with your physical space.",
//         bgColor: "#F7F7F7",
//     },
//     {
//         id: 2,
//         type: "video",
//         src: "1.mp4",
//         title: "Immersive Experience",
//         subtitle: "A new dimension of computing.",
//         bgColor: "#000000",
//     },
//     {
//         id: 3,
//         type: "video",
//         src: "2.mp4",
//         title: "Spatial Computing",
//         subtitle: "Interact with apps in your space.",
//         bgColor: "#EFEFEF",
//     },
// ];
// const HeroSlider = () => {
//     return (
//         <div className="position-sticky top-0 w-100 vh-100 ">
//             <Slider>
//                 {sliderData.map((slide, index) => (
//                     <section
//                         key={slide.id}
//                         className="vh-100 position-sticky top-0 overflow-hidden d-flex align-items-center justify-content-center"
//                         style={{ backgroundColor: slide.bgColor }}
//                     >
//                         <motion.div
//                             className="position-absolute top-0 start-0 w-100 h-100"
//                         >
//                             {/* ✅ Conditional media rendering */}
//                             {slide.type === "video" ? (
//                                 <video
//                                     src={slide.src}
//                                     autoPlay
//                                     muted
//                                     loop
//                                     playsInline
//                                     className="object-fit-cover w-100 h-100"
//                                 />
//                             ) : (
//                                 <Image
//                                     src={slide.src}
//                                     alt={slide.title}
//                                     fill
//                                     priority
//                                     className="object-fit-contain w-100 h-100"
//                                 />
//                             )}

//                             {/* ✅ Overlay text */}
//                             <div className="position-absolute bottom-0 start-0 ps-5 pb-5 text-start text-dark">
//                                 <motion.h1
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6 }}
//                                     className="display-3 fw-bold mb-2 headingColor"
//                                 >
//                                     {slide.title}
//                                 </motion.h1>
//                                 <motion.h5
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.2 }}
//                                     className="fw-normal fs-3 textColor"
//                                 >
//                                     {slide.subtitle}
//                                 </motion.h5>
//                             </div>
//                         </motion.div>
//                     </section>
//                 ))}

//             </Slider>
//         </div>
//     );
// };

// export default HeroSlider;


"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "../ExternalLib/Carousel/Carousel";

export const sliderData = [
    {
        id: 1,
        type: "image",
        src: "https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_large.jpg",
        title: "Vision Pro",
        subtitle: "Blending digital content with your physical space.",
        bgColor: "#F7F7F7",
    },
    {
        id: 2,
        type: "video",
        src: "1.mp4",
        title: "Immersive Experience",
        subtitle: "A new dimension of computing.",
        bgColor: "#000000",
    },
    {
        id: 3,
        type: "video",
        src: "2.mp4",
        title: "Spatial Computing",
        subtitle: "Interact with apps in your space.",
        bgColor: "#EFEFEF",
    },
];

const HeroSlider = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    // Update progress bar while video plays
    useEffect(() => {
        if (!videoRef.current) return;

        const video = videoRef.current;
        const updateProgress = () => {
            if (video.duration) {
                const percent = (video.currentTime / video.duration) * 100;
                setProgress(percent);
            }
        };

        video.addEventListener("timeupdate", updateProgress);
        return () => video.removeEventListener("timeupdate", updateProgress);
    }, [videoRef.current]);

    // Toggle play/pause
    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="position-sticky top-0 w-100 vh-100">
            <Slider>
                {sliderData.map((slide) => (
                    <section
                        key={slide.id}
                        className="vh-100 position-sticky top-0 overflow-hidden d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: slide.bgColor }}
                    >
                        <motion.div className="position-absolute top-0 start-0 w-100 h-100">
                            {slide.type === "video" ? (
                                <div className="position-relative w-100 h-100">
                                    <video
                                        ref={videoRef}
                                        src={slide.src}
                                        muted
                                        autoPlay={isPlaying}
                                        loop={false}
                                        playsInline
                                        onClick={togglePlay}
                                        className="object-fit-cover w-100 h-100"
                                    />

                                    {/* 🎛️ Control bar (top-right) */}
                                    <div
                                        className="position-absolute top-0 end-0 d-flex align-items-center gap-3 p-3"
                                        style={{
                                            background: "rgba(0,0,0,0.4)",
                                            borderBottomLeftRadius: "16px",
                                            backdropFilter: "blur(6px)",
                                            marginTop: "70px"
                                        }}
                                    >
                                        {/* ⏱️ Progress bar */}
                                        <div
                                            className="rounded-pill overflow-hidden bg-white bg-opacity-25"
                                            style={{
                                                width: "120px",
                                                height: "6px",
                                                position: "relative",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${progress}%`,
                                                    height: "100%",
                                                    background: "var(--bs-primary)",
                                                    transition: "width 0.2s linear",
                                                }}
                                            />
                                        </div>

                                        {/* ▶️ / ⏸️ Button */}
                                        <button
                                            onClick={togglePlay}
                                            className="btn btn-light btn-sm rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                            style={{
                                                width: "36px",
                                                height: "36px",
                                                border: "1px solid #EE7838",
                                                backdropFilter: "blur(8px)",
                                            }}
                                        >
                                            {isPlaying ? (
                                                <i className="bi bi-pause-fill fs-5"></i>
                                            ) : (
                                                <i className="bi bi-play-fill fs-5"></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={slide.src}
                                    alt={slide.title}
                                    fill
                                    priority
                                    className="object-fit-contain w-100 h-100"
                                />
                            )}

                            {/* 🧾 Overlay text */}
                            <div className="position-absolute bottom-0 start-0 ps-5 pb-5 text-start text-dark">
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="display-3 fw-bold mb-2 headingColor"
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.h5
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="fw-normal fs-3 textColor"
                                >
                                    {slide.subtitle}
                                </motion.h5>
                            </div>
                        </motion.div>
                    </section>
                ))}
            </Slider>
        </div >
    );
};

export default HeroSlider;
