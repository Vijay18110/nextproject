"use client";

import React from "react";
import "./styles.css";
/**
 * WhatsAppFloatingButton
 * Props:
 *  - phone: string (with country code, e.g. +911234567890)
 *  - message: default message to prefill
 *  - size: icon/button size in px (default 56)
 *  - bottom: CSS bottom offset (string, e.g. '24px')
 *  - right: CSS right offset (string, e.g. '24px')
 *
 * Behavior:
 *  - Fixed at bottom-right
 *  - Tries to open the native WhatsApp app on mobile (whatsapp://),
 *    falls back to web.whatsapp.com / wa.me if not available
 *  - Accessible (keyboard + aria)
 */

export default function WhatsAppFloatingButton({
  phone = "9628554907",
  message = "Hello! I would like to chat.",
  size = 56,
  bottom = "24px",
  right = "24px",
}) {
  // sanitize phone to digits only for wa.me
  const phoneDigits = phone.replace(/[^0-9+]/g, "").replace(/^\+/, "");
  const encodedMessage = encodeURIComponent(message);

  const webUrl = `https://wa.me/${phoneDigits}?text=${encodedMessage}`;
  const appUrl = `whatsapp://send?phone=${phoneDigits}&text=${encodedMessage}`;

  function openWhatsApp() {
    // Try to open the app URL first (works on mobile when WhatsApp installed)
    // Then fallback to web URL after a short delay.
    // Note: some browsers block direct opening; this approach is a common pragmatic fallback.
    const timeout = setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 700);

    // Attempt to open the native app (will either succeed or throw/ignore)
    try {
      window.location.href = appUrl;
    } catch (e) {
      // If direct assign fails, open web URL immediately
      clearTimeout(timeout);
      window.open(webUrl, "_blank");
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") openWhatsApp();
  }

  return (
    <div
      style={{ position: "fixed", bottom, right, zIndex: 9999 }}
      aria-hidden={false}
    >
      <button
        onClick={openWhatsApp}
        onKeyDown={onKeyDown}
        aria-label={`Chat on WhatsApp with ${phone}`}
        title="Chat on WhatsApp"
        style={{
          width: size,
          height: size,
          borderRadius: "9999px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.18)",
          background: "linear-gradient(135deg,#25D366,#128C7E)",
          border: "none",
          cursor: "pointer",
          transition: "transform .15s ease, box-shadow .15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={Math.round(size * 0.56)}
          height={Math.round(size * 0.56)}
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M20.52 3.48A11.9 11.9 0 0 0 12.02.5C6.01.5 1.08 5.43 1.08 11.44c0 2.02.53 3.92 1.53 5.62L.1 23.5l6.86-1.8a11.78 11.78 0 0 0 5.06 1.06h.01c6.01 0 10.94-4.93 10.94-10.94 0-3-1.17-5.79-3.48-7.34zM12.02 21.2c-1.52 0-3.02-.41-4.33-1.18l-.31-.18-4.07 1.07 1.12-3.96-.2-.33A8.06 8.06 0 0 1 3.06 11.44c0-4.43 3.6-8.03 8.03-8.03 2.15 0 4.17.84 5.68 2.36a7.98 7.98 0 0 1-4.75 13.43z"
          />
          <path
            fill="#ffffff"
            d="M17.55 14.2c-.31-.16-1.84-.9-2.12-1--.28-.1-.48-.16-.68.16-.2.33-.78 1-.96 1.2-.18.2-.36.22-.67.08a5.6 5.6 0 0 1-1.65-.99 6.93 6.93 0 0 1-1.29-1.6c-.14-.28 0-.43.11-.59.11-.16.24-.36.36-.55.12-.19.16-.33.24-.55.08-.22 0-.4-.13-.56-.13-.16-.68-1.63-.93-2.22-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.56-.01-.2 0-.52.07-.8.37-.28.3-1.07 1.04-1.07 2.53 0 1.49 1.1 2.93 1.25 3.13.15.2 2.16 3.4 5.24 4.77 3.08 1.37 3.08.91 3.64.84.56-.08 1.82-.74 2.07-1.46.25-.72.25-1.34.18-1.46-.07-.12-.28-.18-.59-.34z"
          />
        </svg>
      </button>

      {/* small label that appears on hover (desktop) */}
      <div
        style={{
          position: "absolute",
          right: `calc(${size}px + 12px)`,
          bottom: `calc((${size}px - 28px) / 2)`,
          background: "#111827",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "8px",
          fontSize: "13px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
          opacity: 0,
          transform: "translateX(8px)",
          transition: "opacity .12s ease, transform .12s ease",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
        className="whatsapp-tooltip"
      >
        Chat on WhatsApp
      </div>

   
    </div>
  );
}
