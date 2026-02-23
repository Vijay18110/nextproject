"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiArrowLeft } from "react-icons/fi";
import styles from "../Componets/Login/Login.module.css"; // Ensure this path is correct
import Link from "next/link";

const ForgotPassword = ({ onBackToLogin }) => {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReset = (data) => {
    console.log("Reset email sent to:", data.email);
    setIsSent(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <div className={styles.header}>
            <h2>Reset Password</h2>
            <p>We'll send you instructions via email</p>
          </div>

          {!isSent ? (
            <form onSubmit={handleSubmit(handleReset)} className={styles.form}>
              <div className={styles.inputGroup}>
                <div
                  className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ""}`}
                >
                  <div className={styles.iconBox}>
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className={styles.inputField}
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <span className={styles.errorText}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="alert alert-success">
                Check your inbox! We've sent a recovery link.
              </div>
            </div>
          )}

          <div className={styles.footer}>
            <Link
              href="/login"
              onClick={onBackToLogin}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <FiArrowLeft /> Back to Login
            </Link>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightContent}>
            <h2>No worries!</h2>
            <p>
              It happens to the best of us. Let's get you back into your account
              safely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
