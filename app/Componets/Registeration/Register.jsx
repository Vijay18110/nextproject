"use client";
import Button from "../../Shared/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";


const Registration = ({ onClose, onSubmit ,setIsRegistering}) => {
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
            <h4 className="fw-bold text-center mb-4">Registration Form</h4>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="w-100">
                {/* Name */}
                               <div className="form-floating m-2">
                    <input
                        type="name"
                        {...register("name", {
                            required: "Name is required",
                           
                        })}
                        className={`form-control  p-1   ${errors.name ? "is-invalid" : ""}`}


                        placeholder="Enter your Name"
                    />
                    <label >Name <strong className="text-danger">*</strong></label>

                    {errors.name && <small className="text-danger">{errors.name.message}</small>}
                </div>
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
                        type="password"
                        {...register("password", {
                            required: "password is required",
                            minLength: { value: 10, message: "Enter password" },
                        })}
                        className={`form-control  p-1   ${errors.name ? "is-invalid" : ""}`}

                        placeholder="Enter your password"
                    />
                    <label className="">password <strong className="text-danger">*</strong></label>
                    {errors.password && <small className="text-danger">{errors.password.message}</small>}
                </div>

                {/* Message */}
 
                    <p className="text-end">Already have an account? <strong style={{cursor:"pointer"}} onClick={() => setIsRegistering(false)} className="text-primary">Sign In</strong>
</p>
                <div className=" d-flex justify-content-center" >
                    <Button
                    className="btn  w-25  btn-dark bg-gradient onHover  fw-semibold mt-3"
                >
                    Sign Up
                </Button>
                </div>
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

export default Registration;
