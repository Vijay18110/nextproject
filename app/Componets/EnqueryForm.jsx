"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Button from "../Shared/Button";

const RequestForm = ({ onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit(data);
        reset();
        onClose();
    };

    return (
        <div className=" w-100  position-relative">
            <h4 className="fw-bold text-center mb-4">Request Form</h4>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="w-100">
                {/* Name */}
                <div className="form-floating m-2">
                    <input
                        {...register("name", { required: "Name is required" })}
                        className={`form-control  p-1   ${errors.name ? "is-invalid" : ""}`}

                        placeholder="Enter your name"
                    />
                    <label >Full Name <strong className="text-danger">*</strong></label>

                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </div>

                {/* Email */}
                <div className="form-floating m-2">
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                        })}
                        className={`form-control  p-1   ${errors.name ? "is-invalid" : ""}`}


                        placeholder="Enter your email"
                    />
                    <label >Email <strong className="text-danger">*</strong></label>

                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>

                {/* Phone */}
                <div className="form-floating m-2">

                    <input
                        type="tel"
                        {...register("phone", {
                            required: "Phone is required",
                            minLength: { value: 10, message: "Enter a valid phone number" },
                        })}
                        className={`form-control  p-1   ${errors.name ? "is-invalid" : ""}`}

                        placeholder="Enter your phone number"
                    />
                    <label className="">Phone <strong className="text-danger">*</strong></label>
                    {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
                </div>

                {/* Message */}
                <div className="form-floating m-2">
                    <textarea
                        {...register("message")}
                        className={`form-control `}

                        rows={3}
                        placeholder="Write your message..."
                    />
                    <label >Message</label>
                </div>

                <Button
                    className="btn btn-outline-success onHover rounded-pill fw-semibold mt-3"
                >
                    Submit Request
                </Button>
            </form>
            <button
                onClick={onClose}
                className="btn btn-sm btn-danger shadow position-absolute top-0 end-0   rounded-circle"
            >
                <FaTimes />
            </button>
        </div>
    );
};

export default RequestForm;
