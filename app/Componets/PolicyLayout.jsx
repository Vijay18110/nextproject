"use client";
import { motion } from "framer-motion";

export default function PolicyLayout({ title, subtitle, children }) {
  return (
    <main className="bg-white min-vh-100">
      {/* Header Section */}
      <div className="bg-dark py-5 mb-5 text-center">
        <div className="container py-4">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="display-4 fw-bold text-white mb-2"
          >
            {title}
          </motion.h1>
          <p className="text-secondary mb-0">Last Updated: January 2026</p>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8">
            <div className="policy-content text-dark">
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}