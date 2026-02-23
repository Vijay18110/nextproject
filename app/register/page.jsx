"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import styles from "../Componets/Login/Login.module.css"; // Ensure this path is correct
import Link from "next/link";
const Registration = ({ onClose, setIsRegistering }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log("Registering user:", data);
    // Add your registration logic here
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Left Panel: Form */}
        <div className={styles.leftPanel}>
          <div className={styles.header}>
            <h2>Create Account</h2>
            <p>Join our community today</p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className={styles.form}>
            {/* Full Name */}
            <div className={styles.inputGroup}>
              <div
                className={`${styles.inputWrapper} ${errors.fullName ? styles.inputError : ""}`}
              >
                <div className={styles.iconBox}>
                  <FiUser />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={styles.inputField}
                  {...register("fullName", { required: "Name is required" })}
                />
              </div>
              {errors.fullName && (
                <span className={styles.errorText}>
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className={styles.inputGroup}>
              <div
                className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ""}`}
              >
                <div className={styles.iconBox}>
                  <FiMail />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.inputField}
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                />
              </div>
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className={styles.inputGroup}>
              <div
                className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ""}`}
              >
                <div className={styles.iconBox}>
                  <FiLock />
                </div>
                <input
                  type="password"
                  placeholder="Create Password"
                  className={styles.inputField}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Min 8 characters" },
                  })}
                />
              </div>
              {errors.password && (
                <span className={styles.errorText}>
                  {errors.password.message}
                </span>
              )}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Sign Up
            </button>
          </form>

          <div className={styles.footer}>
            Already have an account?
            <Link href="/login" onClick={() => setIsRegistering(false)}>
              Login
            </Link>
          </div>
        </div>

        {/* Right Panel: Graphic */}
        <div className={styles.rightPanel}>
          <div className={styles.rightContent}>
            <h2>Hello, Friend!</h2>
            <p>Enter your personal details and start your journey with us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
