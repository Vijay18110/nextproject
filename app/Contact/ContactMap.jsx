"use client";
import React from "react";

const ContactMap = () => (
    <div className="rounded-4 overflow-hidden shadow-sm h-100">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0115139946666!2d80.99392627433716!3d26.88584398315713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd8e0ffb407f%3A0x5c348a362d02957c!2sHDFC%20Bank%2C%20Kursi%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    </div>
);

export default ContactMap;
