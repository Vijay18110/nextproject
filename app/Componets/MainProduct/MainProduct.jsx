"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {MainCategories} from '../../StaticData/MainCategoriesData.js'

const MainProducts = () => {
  const router = useRouter();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-dark">Our Main Products</h2>

      <div className="row g-4">
        {MainCategories.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100  border-0 hover-card"
              onClick={() => router.push(product.link)}
              style={{ cursor: "pointer", transition: "0.3s" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{product.title}</h5>
                <p className="card-text text-muted small">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

export default MainProducts;
