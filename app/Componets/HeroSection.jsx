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
    type: "image",
    src: "/images/all/1.jpg",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const videoRefs = useRef([]);

  // Update progress of active video
  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setElapsedTime(Math.floor(video.currentTime));
      }
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, [activeIndex]);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    setProgress(0);
    setElapsedTime(0);

    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === index) {
        vid.currentTime = 0;
        vid.play().catch(() => { });
        setIsPlaying(true);
      } else {
        vid.pause();
      }
    });
  };

  const togglePlay = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-100 position-sticky top-0">
      <Slider onSlideChange={handleSlideChange}>
        {sliderData.map((slide, index) => (
          <section
            key={slide.id}
            className="position-relative d-flex align-items-center justify-content-center"
            style={{ backgroundColor: slide.bgColor, height: "100vh" }}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                muted
                autoPlay={true} // autoplay only for active slide
                loop
                playsInline
                className="object-fit-cover w-100 h-100"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-fit-contain"
              />
            )}

            {slide.type === "video" && index === activeIndex && (
              <button
                onClick={togglePlay}
                className="position-absolute top-0 end-0 m-3 p-3 rounded-circle bg-dark bg-opacity-50 text-white"
                style={{ width: "60px", height: "60px" }}
              >
                {/* Progress Ring */}
                <svg width="60" height="60">
                  <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="#ffffff30"
                    strokeWidth="3"
                    fill="transparent"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r={radius}
                    stroke="#EE7838"
                    strokeWidth="3"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.3s linear" }}
                  />
                </svg>
                <span
                  className="position-absolute top-50 start-50 translate-middle text-white fw-semibold"
                  style={{ fontSize: "0.9rem" }}
                >
                  {isPlaying ? elapsedTime : "►"}
                </span>
              </button>
            )}

            <div className="position-absolute bottom-0 start-0 p-5 text-dark">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="display-3 fw-bold title"
              >
                {slide.title}
              </motion.h1>
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fw-normal fs-3 subtitle"
              >
                {slide.subtitle}
              </motion.h5>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
