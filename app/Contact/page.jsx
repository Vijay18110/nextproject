"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";
import ContactInfoCard from "./ContactInfoCard ";
import BannerPage from "../Shared/BannerPage/BannerPage";


const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Our Location",
    text: (
      <>
        Maa Kripa Tower, MIG 12, Shekhupura Colony, Behind HDFC Bank,
        <br /> Kursi Road, Vikas Nagar, Lucknow, Uttar Pradesh
      </>
    ),
    gradient: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Our Phone",
    text: "+91 9628554907",
    link: "tel:+9628554907",
    gradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
  },
  {
    icon: <FaEnvelope />,
    title: "Our Mail",
    text: "info@infiniox.com",
    link: "mailto:info@infiniox.com",
    gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
  },
  {
    icon: <FaWhatsapp />,
    title: "Chat on WhatsApp",
    text: "+91 9628554907",
    link: "https://wa.me/9628554907",
    gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
];

const Contact = () => (
  <>
    <BannerPage text={"Contact"} banner={"./images/bg/8.jpg"} />
    <div className="container-fluid  bg-light ">
      {/* Contact Info Section */}
      <div className="row text-center mb-5 mt-5">
        {contactInfo.map((info, i) => (
          <ContactInfoCard key={i} {...info} />
        ))}
      </div>

      {/* Contact Form + Map */}
      <div className="row align-items-stretch">
        <div className="col-md-6 mb-4">
          <ContactForm />
        </div>
        <div className="col-md-6">
          <ContactMap />
        </div>
      </div>
    </div>
  </>
);

export default Contact;
