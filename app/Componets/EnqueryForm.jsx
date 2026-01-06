"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import Button from "../Shared/Button";
import Swal from "sweetalert2";
import Loader from "./Loader";

const RequestForm = ({ onClose, product }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Include product info in the data sent to the backend

      const payload = {
        ...data,
        productName: product?.title || "Unknown Product",
        productId: product?.id || "N/A",
      };
      console.log("payload", payload);
      const response = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response?.ok) {
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "Request sent successfully! ✅",
        });
        reset();
        onClose();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "error!",
        text: "Error sending request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-100 position-relative p-3">
      <h4 className="fw-bold text-center mb-1">Request Information</h4>
      {product && (
        <p className="text-center text-muted  mb-4">
          Product: <strong>{product.title}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-100">
        {/* Name */}
        <div className="form-floating mb-2">
          <input
            {...register("name", { required: "Name is required" })}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Name"
          />
          <label>Full Name *</label>
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        {/* Email */}
        <div className="form-floating mb-2">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="Email"
          />
          <label>Email Address *</label>
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        {/* Phone */}
        <div className="form-floating mb-2">
          <input
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="Phone"
          />
          <label>Phone Number *</label>
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>

        {/* Message */}
        <div className="form-floating mb-3">
          <textarea
            {...register("message")}
            className="form-control"
            style={{ height: "100px" }}
            placeholder="Message"
          />
          <label>Additional Notes</label>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-100 rounded-pill fw-semibold"
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>
      </form>

      <button
        onClick={onClose}
        className="btn btn-sm btn-danger shadow position-absolute top-0 end-0 rounded-circle"
        style={{ marginTop: "-10px", marginRight: "-10px" }}
      >
        <FaTimes />
      </button>
      {isSubmitting && <Loader />}
    </div>
  );
};

export default RequestForm;
