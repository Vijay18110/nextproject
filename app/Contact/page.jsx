// pages/contact.js
"use client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
return (
<div className="container-fluid my-5 pt-5 bg-white">
    {/* Contact Info Section */}

<div className="row text-center mb-5">

  {/* Location */}
  <div className="col-md-4 mb-4">
    <div className="p-4 h-100 rounded-3 shadow-sm" style={{
      background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
    }}>
      <div className="mb-3 d-flex align-items-center justify-content-center" style={{
        fontSize: '2rem',
        width: '60px',
        height: '60px',
        background: '#f1f3f6',
        borderRadius: '50%',
        margin: '0 auto'
      }}>
        <FaMapMarkerAlt className="text-primary" />
      </div>
      <h5 className="fw-bold mt-2">Our Location</h5>
      <p className="mb-0 small">
        Maa Kripa Tower, MIG 12, Shekhupura Colony, Behind HDFC Bank,<br/>
        Kursi Road, Vikas Nagar, Lucknow, Uttar Pradesh
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="col-md-4 mb-4">
    <div className="p-4 h-100 rounded-3 shadow-sm" style={{
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)'
    }}>
      <div className="mb-3 d-flex align-items-center justify-content-center" style={{
        fontSize: '2rem',
        width: '60px',
        height: '60px',
        background: '#b2ebf2',
        borderRadius: '50%',
        margin: '0 auto'
      }}>
        <FaPhoneAlt className="text-primary" />
      </div>
      <h5 className="fw-bold mt-2">Our Phone</h5>
      <p className="mb-0">+91 92363 97315</p>
    </div>
  </div>

  {/* Email */}
  <div className="col-md-4 mb-4">
    <div className="p-4 h-100 rounded-3 shadow-sm" style={{
      background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)'
    }}>
      <div className="mb-3 d-flex align-items-center justify-content-center" style={{
        fontSize: '2rem',
        width: '60px',
        height: '60px',
        background: '#ffe0b2',
        borderRadius: '50%',
        margin: '0 auto'
      }}>
        <FaEnvelope className="text-primary" />
      </div>
      <h5 className="fw-bold mt-2">Our Mail</h5>
      <p className="mb-0">info.propertyatm@kezanconsulting.com</p>
    </div>
  </div>

</div>


    {/* Contact Form + Map */}
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
                <h4 className="mb-4">Get In Touch</h4>
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Your Name *" required />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email Address *" required />
                    </div>
                    <div className="mb-3">
                        <input type="tel" className="form-control" placeholder="Mobile Number *" required />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-orange text-white">
                        Send Message
                    </button>
                </form>
            </div>
        </div>

        <div className="col-md-6 ">
            <div className="border rounded ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0115139946666!2d80.99392627433716!3d26.88584398315713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd8e0ffb407f%3A0x5c348a362d02957c!2sHDFC%20Bank%2C%20Kursi%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen=""
                    loading="lazy"></iframe>
            </div>
        </div>
    </div>

</div>
);
};

export default Contact;