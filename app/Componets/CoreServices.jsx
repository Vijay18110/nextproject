import React from "react";
import styles from "./CoreServices.module.css";
import {
  SmartBenchIcon,
  ToysIcon,
  EpoxyFurnitureIcon,
  EpoxyFlooringIcon,
} from "./CoreServicesIcons";

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

export default function CoreServices() {
  return (
    <section className={`container-fluid ${styles.coreServicesSection}`}>
      <h2 className={styles.heading}>OUR CORE SERVICES</h2>
      <div className={styles.servicesContainer}>
        {services.map((s) => (
          <div className={styles.serviceWrapper} key={s.title}>
            <div className={styles.serviceImageBox}>
              <img src={s.img} alt={s.title} className={styles.serviceImage} />
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img src={s.icon} alt={s.title} />
              </div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
