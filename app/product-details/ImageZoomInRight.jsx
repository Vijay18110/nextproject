"use client";
import React, { useState, useRef } from "react";

const ImageZoomRight = ({ src, zoomWidth = 350, zoomHeight = 350 }) => {
    const [backgroundPos, setBackgroundPos] = useState("center");
    const [showZoom, setShowZoom] = useState(false);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setBackgroundPos(`${x}% ${y}%`);
    };

    return (
        <div className="d-flex align-items-start gap-3">
            {/* 🔹 Main Image */}
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "12px",
                    cursor: "zoom-in",
                }}
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
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
                    }}
                />
            </div>

            {/* 🔹 Zoom Box */}
            {showZoom && (
                <div
                    style={{
                        width: `${zoomWidth}px`,
                        height: `${zoomHeight}px`,
                        border: "2px solid #eee",
                        borderRadius: "12px",
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "200% 200%",
                        backgroundPosition: backgroundPos,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        transition: "opacity 0.3s ease",
                        position: "absolute",
                        right: "0",
                        zIndex: "1099"
                    }}
                />
            )}
        </div>
    );
};

export default ImageZoomRight;
