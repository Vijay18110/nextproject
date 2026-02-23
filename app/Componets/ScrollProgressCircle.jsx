"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressCircle = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hook to get scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Smooth out the progress value
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show circle only after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`position-fixed bottom-0 end-0 p-4 z-3 transition-opacity ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ cursor: "pointer", transition: "0.3s" }}
      onClick={scrollToTop}
    >
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{ width: "60px", height: "60px" }}
      >
        {/* SVG Circle */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          className="position-absolute rotate-n90"
        >
          {/* Background Circle (Track) */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="rgba(255, 255, 255, 0.1)"
            stroke="rgba(152, 89, 246, 0.2)"
            strokeWidth="8"
          />
          {/* Progress Circle (Mirroring Scroll) */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#9859f6" // Your brand color
            strokeWidth="8"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              transformOrigin: "center",
            }}
          />
        </svg>

        {/* Arrow Icon in Center */}
        <div style={{ color: "#9859f6", fontSize: "20px", zIndex: 1 }}>↑</div>
      </div>
    </div>
  );
};

export default ScrollProgressCircle;
