"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "../ExternalLib/Carousel/Carousel";

export const sliderData = [
  {
    id: 1,
    type: "video",
    src: "/01-01-2026.mp4",
    bgColor: "#F7F7F7",
  },

  // {
  //   id: 2,
  //   type: "video",
  //   src: "/video/epoxy_LampVideo.mp4",

  //   bgColor: "#000000",
  // },
  // {
  //   id: 3,
  //   type: "video",
  //   src: "/video/The-touch-sensitive-river-table-offers-a-captivating-and-interactive-experience-for-users..mp4",
  //   bgColor: "#EFEFEF",
  // },
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
        vid.play().catch(() => {});
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
    <div className="w-100 position-sticky top-0 ">
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
