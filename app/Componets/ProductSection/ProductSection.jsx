import React from "react";
import styles from "./product.module.css";
import ProductCard from "../../Shared/ProductCard/ProductCard";
const products = [
  {
    id: 1,
    title: "Urban House for Rent",
    price: "$130,000",
    type: "House",
    status: "Rent",
    image: "/images/all/1.jpg",
    description: "Modern living in downtown. Spacious living room and great view.",
    details: { beds: 2, baths: 1, area: "110 ft²" },
    author: { name: "Viki Morintagee", image: "/images/user1.jpg" },
  },
  {
    id: 2,
    title: "Family House for Rent",
    price: "$1500 / month",
    type: "Residential",
    status: "Rent",
    image: "/images/all/2.jpg",
    description: "Comfortable home for families in a quiet neighborhood.",
    details: { beds: 2, baths: 2, area: "95 ft²" },
    author: { name: "Liza Archer", image: "/images/user2.jpg" },
  },
  {
    id: 3,
    title: "Contemporary Apartment",
    price: "$850,000",
    type: "Commercial",
    status: "Sale",
    image: "/images/all/3.jpg",
    description: "Elegant modern design with premium amenities and open space.",
    details: { beds: 4, baths: 2, area: "450 ft²" },
    author: { name: "Judi Collins", image: "/images/user3.jpg" },
  },
  {
    id: 4,
    title: "Luxury Villa in California",
    price: "$1,250,000",
    type: "Villa",
    status: "Sale",
    image: "/images/all/4.jpg",
    description: "Luxury villa with ocean view, private pool, and modern interior.",
    details: { beds: 5, baths: 3, area: "680 ft²" },
    author: { name: "Mason White", image: "/images/user4.jpg" },
  },
  {
    id: 5,
    title: "Downtown Studio Apartment",
    price: "$950 / month",
    type: "Studio",
    status: "Rent",
    image: "/images/all/7.jpg",
    description: "Compact studio perfect for young professionals in the city center.",
    details: { beds: 1, baths: 1, area: "60 ft²" },
    author: { name: "Anna Brown", image: "/images/user5.jpg" },
  },
  {
    id: 6,
    title: "Mountain Cabin Getaway",
    price: "$430,000",
    type: "Cabin",
    status: "Sale",
    image: "/images/all/6.jpg",
    description: "Peaceful wooden cabin surrounded by nature, ideal for vacations.",
    details: { beds: 3, baths: 2, area: "250 ft²" },
    author: { name: "Jake Hudson", image: "/images/user6.jpg" },
  },
  {
    id: 7,
    title: "Beachfront Bungalow",
    price: "$1,050 / month",
    type: "Bungalow",
    status: "Rent",
    image: "/images/all/7.jpg",
    description: "Enjoy the sunrise and ocean breeze in this cozy beachfront home.",
    details: { beds: 2, baths: 1, area: "150 ft²" },
    author: { name: "Sophie Turner", image: "/images/user7.jpg" },
  },
  {
    id: 8,
    title: "Modern Office Space",
    price: "$2,500 / month",
    type: "Office",
    status: "Rent",
    image: "/images/all/8.jpg",
    description: "Spacious open-plan office with conference room and city view.",
    details: { beds: 0, baths: 2, area: "600 ft²" },
    author: { name: "Robert King", image: "/images/user8.jpg" },
  },
  {
    id: 9,
    title: "Luxury Penthouse Suite",
    price: "$2,750,000",
    type: "Penthouse",
    status: "Sale",
    image: "/images/all/9.jpg",
    description: "Sky-high penthouse with panoramic city views and private rooftop.",
    details: { beds: 4, baths: 4, area: "800 ft²" },
    author: { name: "Emily Carter", image: "/images/user9.jpg" },
  },
];

const Products = () => {
  return (
    <section className={styles.productSection}>
        <h2 className="text-center mb-5 fw-bold text-dark">Featured Products</h2>
      <div className={styles.container}>
        {products.map((item,idx) =><ProductCard key={item.id} item={item}/>)}
      </div>
    </section>
  );
};

export default Products;
