import React from 'react';
import styles from './CoreServices.module.css';

const coreServices = [
  {
    title: "Smart Solar Benches",
    img: "/images/smart-bench.png",
    desc: "Intelligent public furniture with solar power, IoT sensors, and charging capabilities",
    icon: "🪑" // Replace with your Icon components
  },
  {
    title: "Wooden Toys",
    img: "/images/wooden-toy.png",
    desc: "Educational play products combining safety, sustainability, and developmental learning",
    icon: "⚽" 
  },
  {
    title: "Epoxy Furniture",
    img: "/images/epoxy-furniture.png",
    desc: "Premium artistic pieces blending natural wood with contemporary epoxy integration",
    icon: "🛋️"
  },
  {
    title: "Epoxy Flooring",
    img: "/images/epoxy-flooring.png",
    desc: "Durable, beautiful flooring for healthcare, industrial, commercial, and residential applications",
    icon: "🏃"
  }
];

export default function CoreServices1() {
  return (
    <section className={styles.container}>
      {/* SECTION 1: OUR CORE SERVICES (Circular Design) */}
      <div className={styles.coreSection}>
        <h2 className={styles.mainHeading}>OUR CORE SERVICES</h2>
        <div className={styles.circleGrid}>
          {coreServices.map((service, index) => (
            <div key={index} className={styles.serviceColumn}>
              <div className={styles.imageWrapper}>
                <img src={service.img} alt={service.title} className={styles.topImage} />
              </div>
              <div className={styles.circleCard}>
                <div className={styles.iconBox}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      {/* SECTION 2: SERVICES OFFERED (Horizontal Cards) */}
      <div className={styles.offeredSection}>
        <h2 className={styles.subHeading}>Services Offered</h2>
        <div className={styles.horizontalGrid}>
          <ServiceHorizontalCard 
            title="Residential" 
            img="/images/res.jpg" 
            text="We provide all residential services including: Off-Grid | On-Grid | Hybrid" 
          />
          <ServiceHorizontalCard 
            title="Commercial" 
            img="/images/comm.jpg" 
            text="We provide all commercial services including: Off-Grid | On-Grid | Hybrid" 
          />
          <ServiceHorizontalCard 
            title="Maintenance" 
            img="/images/maint.jpg" 
            text="We provide maintenance for installations done by us with complete customer satisfaction." 
          />
        </div>
      </div>
    </section>
  );
}

function ServiceHorizontalCard({ title, img, text }) {
  return (
    <div className={styles.hCard}>
      <div className={styles.hCardImage} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.hCardContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}