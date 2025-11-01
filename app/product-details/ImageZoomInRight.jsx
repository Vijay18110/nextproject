"use client";
import React, { useState, useRef } from "react";

const ImageZoomRight = ({ src, zoomWidth = 350, zoomHeight = 350 }) => {
    const [backgroundPos, setBackgroundPos] = useState("center");
    const [showZoom, setShowZoom] = useState(false);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!imgRef.current) return;

        const rect = imgRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    return (
        <div
            className="d-flex align-items-start gap-3 position-relative"
            style={{ width: "fit-content" }}
        >
            {/* 🔹 Main Image */}
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    cursor: isMobile ? "default" : "zoom-in",
                }}
                onMouseEnter={() => !isMobile && setShowZoom(true)}
                onMouseLeave={() => !isMobile && setShowZoom(false)}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
                ref={imgRef}
            >
                <img
                    src={src}
                    alt="Zoomable"
                    className="zoomImgSize"
                    style={{
                        display: "block",
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
            </div>

            {/* 🔹 Zoom Box (Desktop only) */}
            {showZoom && !isMobile && (
                <div
                    style={{
                        width: `${zoomWidth}px`,
                        height: `${zoomHeight}px`,
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "200% 200%",
                        backgroundPosition: backgroundPos,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        transition: "opacity 0.3s ease",
                        position: "absolute",
                        top: 0,
                        left: "calc(100% + 16px)",
                        zIndex: 1099,
                    }}
                />
            )}
        </div>
    );
};

export default ImageZoomRight;
