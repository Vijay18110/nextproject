import styles from "./WhyChooseUs.module.css";
export default function WhyChooseUs() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Why Choose Us</h2>

      <div className={styles.container}>
        {/* Left Cards Section */}
        <div className={styles.cardsSection}>
          <div className={`${styles.card} ${styles.pink}`}>
            <h3>Design Innovation</h3>
            <p>
              River tables, artistic epoxy patterns, and modern concepts that
              lead trends.
            </p>
          </div>

          <div className={`${styles.card} ${styles.yellow}`}>
            <h3>Built to Last</h3>
            <p>
              Heavy usage, moisture and scratch resistance for homes, offices,
              and commercial spaces.
            </p>
          </div>

          <div className={`${styles.card} ${styles.blue}`}>
            <h3>Sustainable Practices</h3>
            <p>
              Responsible sourcing, minimal waste, reclaimed wood, and
              low-emission finishes.
            </p>
          </div>

          <div className={`${styles.card} ${styles.green}`}>
            <h3>Premium Value</h3>
            <p>
              Direct manufacturing eliminates middlemen—premium quality at fair
              pricing.
            </p>
          </div>

          <div className={`${styles.card} ${styles.peach}`}>
            <h3>After-Sales Support</h3>
            <p>
              Maintenance guidance, repair support, refinishing services, and
              ongoing assistance.
            </p>
          </div>
        </div>

        {/* Promise Section */}
        <div className={styles.promiseBox}>
          <h3>Our Promise</h3>
          <ul>
            <li>Unique designs</li>
            <li>Reliable quality</li>
            <li>Transparent pricing</li>
            <li>Timely delivery</li>
            <li>Custom solutions</li>
            <li>Professional service</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
