"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSlider from "./Componets/HeroSection";

// === Static Data ===
const PRODUCT_DATA_1 = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals",
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship",
  },
  {
    id: 5,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals",
  },

  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now",
  },
];

const PRODUCT_DATA_2 = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "New Arrivals",
    btn: "Shop Now +",
    image: "/Burning Table of Wood and Epoxy Fire Lava/1 (1).jpg",
    link: "/new-arrivals",
  },
  {
    id: 2,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship",
  },
  {
    id: 5,
    title: "Ready to Ship",
    subtitle: "Ready to Ship",
    btn: "Shop Now +",
    image: "/Epoxy Lamp AIR/Screenshot 2024-01-15 195247.png",
    link: "/ready-to-ship",
  },
  {
    id: 3,
    title: "Trending Now",
    subtitle: "Trending Now",
    btn: "Shop Now +",
    image: "/CHESS FIRE/rerere-1024x576.jpg",
    link: "/trending-now",
  },
];

const PRODUCT_DATA_3 = [...PRODUCT_DATA_1];

// === Animation Variants ===
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "circOut" },
  },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// === Reusable Sub-Components ===
const FullWidthSection = ({ src, alt }) => (
  <motion.section
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    className="container py-5"
  >
    <motion.div variants={imageVariant} className="justify-content-center g-4">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={600}
        className="w-100 product-img1 h-auto"
      />
    </motion.div>
  </motion.section>
);

const ProductGrid = ({ data, title, isSmall = false, showDetails = true }) => (
  <motion.section
    className="container py-5"
    variants={sectionVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
  >
    {title && (
      <motion.div className="mb-4">
        <motion.h2 variants={listItem} className="fw-bold">
          {title}
        </motion.h2>
      </motion.div>
    )}
    <motion.div
      className="row justify-content-center g-4"
      variants={listContainer}
    >
      {data.map((item, idx) => (
        <motion.div
          key={`${item.id}-${idx}`}
          className={isSmall ? "col-md-3 col-sm-6" : "col-md-4 col-sm-6"}
          variants={listItem}
        >
          <div
            className={`${
              isSmall ? "product-card1" : "product-card"
            } shadow-sm rounded overflow-hidden position-relative`}
          >
            <motion.div variants={imageVariant} style={{ overflow: "hidden" }}>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={isSmall ? 300 : 300}
                className="w-100 product-img"
              />
            </motion.div>
            <div className={isSmall ? "product-overlay1" : "product-overlay"}>
              <h4
                className={`text-white fw-semibold ${
                  isSmall ? "titleText" : ""
                }`}
              >
                {item.title}
              </h4>
            </div>
          </div>
          {showDetails && (
            <div className="mt-2">
              <h6 className="fw-semibold">{item.subtitle}</h6>
              {item.btn && (
                <Link href={item.link} className="small fw-bold text-dark">
                  {item.btn}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export const ShieldIcon = () => (
  <IconWrapper>
    <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
    <path d="M9 12l2 2 4-4" />
  </IconWrapper>
);
export const FactoryIcon = () => (
  <IconWrapper>
    <path d="M3 21V9l5 3V9l5 3V9l8 4v8H3z" />
    <path d="M14 3h4v4h-4z" />
  </IconWrapper>
);
export const ChecklistIcon = () => (
  <IconWrapper>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 9h8M8 13h8M8 17h5" />
    <path d="M9 4l1 1 2-2" />
  </IconWrapper>
);
export const WoodLayersIcon = () => (
  <IconWrapper>
    <path d="M3 7l9-4 9 4-9 4-9-4z" />
    <path d="M3 12l9 4 9-4" />
    <path d="M3 17l9 4 9-4" />
  </IconWrapper>
);
export const CubeIcon = () => (
  <IconWrapper>
    <path d="M12 2l9 5v10l-9 5-9-5V7z" />
    <path d="M12 12l9-5M12 12v10M12 12l-9-5" />
  </IconWrapper>
);
export const ChainIcon = () => (
  <IconWrapper>
    <path d="M8 12a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" />
    <path d="M16 12a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
  </IconWrapper>
);
export const BadgeIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="12" r="7" />
    <path d="M9 12l2 2 4-4" />
  </IconWrapper>
);
export const SmileIcon = () => (
  <IconWrapper>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 10h.01M16 10h.01" />
    <path d="M8 15c1.3 1 2.7 1.5 4 1.5s2.7-.5 4-1.5" />
  </IconWrapper>
);
export default function HomePage() {
  const features = [
    { icon: <ShieldIcon />, title: "10 Year Warranty" },
    { icon: <FactoryIcon />, title: "Direct Selling : Factory To Customer" },
    { icon: <ChecklistIcon />, title: "66 Quality Checks" },
    {
      icon: <WoodLayersIcon />,
      title: "KD (Kiln Dried) and HT (Heat Treated)",
    },
    { icon: <CubeIcon />, title: "Ergonomically Designed" },
    { icon: <ChainIcon />, title: "Generations Long Durability" },
    { icon: <BadgeIcon />, title: "All India Service Warranty" },
    { icon: <SmileIcon />, title: "Free Of Child Labour" },
  ];

  return (
    <main className="bg-white text-dark" style={{ marginTop: "-75px" }}>
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <HeroSlider />
      </motion.div>

      {/* 1. New Arrivals */}
      <motion.section
        className="container py-5"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="text-center mb-4">
          <motion.h5 variants={listItem} className="fw-bold">
            New Arrivals, New Stories
          </motion.h5>
          <motion.p variants={listItem} className="text-muted">
            Step into a world of crafted design, where every piece feels like a
            first.
          </motion.p>
        </div>
        <motion.div
          className="row justify-content-center g-4"
          variants={listContainer}
        >
          {PRODUCT_DATA_1.map((item) => (
            <ProductCardItem key={item.id} item={item} />
          ))}
        </motion.div>
      </motion.section>

      {/* 2. Full Width Section Set 1 */}
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190348.png"
        alt="Ether 1"
      />
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190201.png"
        alt="Ether 2"
      />
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 190711.png"
        alt="Ether 3"
      />

      {/* 3. Every Collection is a Chapter */}
      <ProductGrid
        data={PRODUCT_DATA_2}
        title="Every Collection is a Chapter"
        isSmall
        showDetails={false}
      />

      {/* 4. Full Width Section Set 2 */}
      <FullWidthSection src="/CHESS FIRE/fhfh-1024x576.jpg" alt="Chess Fire" />
      <FullWidthSection
        src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194354.png"
        alt="Most Exclusive"
      />

      {/* 5. In the Spotlight */}
      <ProductGrid data={PRODUCT_DATA_3} title="In the Spotlight" isSmall />

      {/* 6. Full Width Section Set 3 */}
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191344.png"
        alt="Ether 4"
      />
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png"
        alt="Ether 5"
      />

      {/* 7. More Waiting for You */}
      <ProductGrid
        data={PRODUCT_DATA_2}
        title="More Waiting for You"
        isSmall
        showDetails={false}
      />

      {/* 8. Full Width Section Set 4 */}
      <FullWidthSection
        src="/Most Exclusive Smart Table in the World! SPACE/Screenshot 2024-01-15 194610.png"
        alt="Space 2"
      />
      <FullWidthSection
        src="/A Smart Table of Epoxy Resin ETHER/Screenshot 2024-01-15 191025.png"
        alt="Ether 6"
      />

      {/* 9. Meet our Design Masters */}
      <ProductGrid
        data={PRODUCT_DATA_2}
        title="Meet our Design Masters"
        isSmall
        showDetails={false}
      />

      {/* 10. Final Full Width */}
      <FullWidthSection
        src="/CHESS FIRE/sdsds-1024x576.jpg"
        alt="Chess Final"
      />

      {/* 11. Curated Galleries */}
      <motion.section
        className="position-relative bg-white z-2 min-vh-100"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <div className="container">
          <div className="text-center">
            <motion.h5 variants={listItem} className="mb-4 text-dark">
              Curated Galleries
            </motion.h5>
            <motion.p variants={listItem} className="lead text-secondary mb-4">
              Our stores exude an aura that’s irresistible with great wood and
              fabric...
            </motion.p>
          </div>
          <motion.div
            className="row justify-content-center g-4"
            variants={listContainer}
          >
            {PRODUCT_DATA_1.map((item) => (
              <ProductCardItem key={`gallery-${item.id}`} item={item} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 12. Features Grid */}
      <div className="container py-5">
        <motion.div
          className="row g-4"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="col-md-3 col-sm-6"
              variants={listItem}
            >
              <div className="feature-box p-4">
                <motion.div variants={imageVariant} className="feature-icon">
                  {item.icon}
                </motion.div>
                <motion.p variants={listItem} className="feature-title mb-0">
                  {item.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

// Helper for the standard card item used in New Arrivals & Curated Galleries
const ProductCardItem = ({ item }) => (
  <motion.div className="col-md-3 col-sm-6" variants={listItem}>
    <div className="product-card shadow-sm rounded overflow-hidden position-relative">
      <motion.div
        variants={imageVariant}
        className="w-100"
        style={{ overflow: "hidden" }}
      >
        <Image
          src={item.image}
          alt={item.title}
          width={550}
          height={400}
          className="w-100 product-img"
        />
      </motion.div>
      <div className="product-overlay">
        <h4 className="text-white fw-semibold">{item.title}</h4>
      </div>
    </div>
    <div className="mt-4">
      <h6 className="fw-bold">{item.subtitle}</h6>
      <Link href={item.link} className="small fw-semibold text-dark">
        {item.btn}
      </Link>
    </div>
  </motion.div>
);

// === Icon Components ===
const IconWrapper = ({ children }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);
