"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Shared/Button";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        alert("Message Sent Successfully ✅");
        reset();
    };

    return (
        <div
            className="p-5 rounded-4 shadow-sm bg-white h-100"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
            <h4 className="fw-bold mb-4 text-primary">Get In Touch</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        id="name"
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    <label htmlFor="name">Your Name *</label>
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                {/* Email */}
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Enter a valid email",
                            },
                        })}
                    />
                    <label htmlFor="email">Email Address *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                {/* Phone */}
                <div className="form-floating mb-3">
                    <input
                        type="tel"
                        id="phone"
                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                        placeholder="Mobile Number"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit number",
                            },
                        })}
                    />
                    <label htmlFor="phone">Mobile Number *</label>
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                </div>

                {/* Message */}
                <div className="form-floating mb-4">
                    <textarea
                        id="message"
                        className={`form-control ${errors.message ? "is-invalid" : ""}`}
                        placeholder="Your Message"
                        style={{ height: "120px" }}
                        {...register("message",)}
                    ></textarea>
                    <label htmlFor="message">Your Message *</label>
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <Button
                    text={isSubmitting ? "Sending..." : "Send Message"}
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-light onHover px-4 py-2 fw-semibold rounded-pill shadow-sm"
                />
            </form>
        </div>
    );
};

export default ContactForm;
