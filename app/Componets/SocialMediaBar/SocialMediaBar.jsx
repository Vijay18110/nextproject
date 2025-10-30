import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
    FaPinterest,
    FaLinkedinIn,
} from "react-icons/fa6";
import "./SocialMediaBar.css";

const SocialMediaBar = () => {
    const socials = [
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn />,
            gradient: "linear-gradient(135deg, #0077B5 0%, #00A0DC 100%)",
            link: "https://linkedin.com",
        },
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            gradient: "linear-gradient(135deg, #1877F2 0%, #3B5998 100%)",
            link: "https://facebook.com",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            gradient: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            link: "https://instagram.com",
        },
        {
            name: "X",
            icon: <FaXTwitter />,
            gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
            link: "https://x.com",
        },
        {
            name: "YouTube",
            icon: <FaYoutube />,
            gradient: "linear-gradient(135deg, #FF0000 0%, #C60000 100%)",
            link: "https://youtube.com",
        },
        {
            name: "Pinterest",
            icon: <FaPinterest />,
            gradient: "linear-gradient(135deg, #BD081C 0%, #FF3366 100%)",
            link: "https://pinterest.com",
        },
    ];

    return (
        <div className="social-bar position-fixed top-50 translate-middle-y ps-2 z-3">
            {socials.map((s, i) => (
                <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="iconContainer text-decoration-none"
                >
                    <div
                        className="iconBg"
                        style={{
                            background: s.gradient,
                            color: "#fff",
                            border: "2px solid #fff",
                        }}
                    >
                        {s.icon}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialMediaBar;
