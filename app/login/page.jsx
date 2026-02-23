"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../Componets/Login/Login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.token) {
        localStorage.setItem("token", json.token);
        router.push("/");
      } else {
        alert(json.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <div className={styles.header}>
            <h2>Hello!</h2>
            <p>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputGroup}>
              <div
                className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ""}`}
              >
                <div className={styles.iconBox}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <input
                  type="email"
                  className={styles.inputField}
                  placeholder="E-mail"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && (
                <span className={styles.errorText}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <div
                className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ""}`}
              >
                <div className={styles.iconBox}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.inputField}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword((s) => !s)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              {errors.password && (
                <span className={styles.errorText}>
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className={styles.optionsRow}>
              <label className={styles.rememberMe}>
                <input type="checkbox" {...register("rememberMe")} />
                <span>Remember me</span>
              </label>
              <Link href="/forgot-passowrd" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={styles.submitBtn}
            >
              {loading ? "Signing..." : "SIGN IN"}
            </button>
          </form>

          <div className={styles.footer}>
            Don't have an account? <Link href="/register">Create</Link>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightContent}>
            <h2>Welcome Back!</h2>
            <p>
              We are thrilled to see you again. Log in to access your
              personalized dashboard, track your progress, and pick up right
              where you left off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
