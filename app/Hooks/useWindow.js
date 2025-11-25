"use client";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => setWidth(window.innerWidth);

        handleResize(); // set initial width
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

export default useWindowWidth;
