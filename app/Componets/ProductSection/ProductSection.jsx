import React from "react";
import styles from "./product.module.css";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const Products = ({ title, products }) => {
  return (
    <section className={styles.productSection}>
      <h2 className="text-center mb-5 fw-bold text-dark">{title}</h2>
      <div className={styles.container}>
        {products.map((item, idx) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;
