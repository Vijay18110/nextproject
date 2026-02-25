import React from "react";
import styles from "./CoreServices.module.css";

// Keeping static data outside the component prevents recreation on every render
const services = [
  {
    title: "Smart Solar Benches",
    img: "/images/smart-bench.png",
    icon: "/images/i4.png",
    desc: "Intelligent public furniture with solar power, IoT sensors, and charging capabilities",
  },
  {
    title: "Wooden Toys",
    img: "/images/wooden-toy.png",
    icon: "/images/i3.png",
    desc: "Educational play products combining safety, sustainability, and developmental learning",
  },
  {
    title: "Epoxy Furniture",
    img: "/images/epoxy-flooring.png",
    icon: "/images/i2.png",
    desc: "Premium artistic pieces blending natural wood with contemporary epoxy integration",
  },
  {
    title: "Epoxy Flooring",
    img: "/images/epoxy-furniture.png",
    icon: "/images/i1.png",
    desc: "Durable, beautiful flooring for healthcare, industrial, commercial, and residential applications",
  },
];

// Extracted card component for cleaner, more readable code
const ServiceItem = ({ title, img, icon, desc }) => (
  // Using <article> is semantically better for independent blocks of content
  <article className={styles.serviceWrapper}>
    <div className={styles.serviceImageBox}>
      <div className={styles.imgFrame}>
        {/* Added lazy loading & async decoding for performance */}
        <img
          src={img}
          alt={title}
          className={styles.serviceImage}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>
        <img src={icon} alt={`${title} icon`} loading="lazy" decoding="async" />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDesc}>{desc}</p>
    </div>
  </article>
);

export default function CoreServices() {
  return (
    <section
      className={`container-fluid ${styles.coreServicesSection}`}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className={styles.heading}>
        Our Core Services
      </h2>
      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <ServiceItem key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
