"use client"
import { FaHeart } from "react-icons/fa";
import styles from "../../Componets/ProductSection/product.module.css";
import { useRouter } from "next/navigation";
import { slugify } from '../../Utility/Slugify'
import Button from "../Button";
import { FiGitPullRequest } from "react-icons/fi";
import MainPortal from '../../Componets/MainPortal/MainPortal'
import RequestForm from '../../Componets/EnqueryForm'
import { useState } from "react";
const ProductCard = ({ item }) => {
  const router = useRouter()
  const [openForm, setOpenForm] = useState(false);
  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
    // 🔹 You can integrate your API call or toast here
  };
  console.log(item)
  return (
    <div style={{ cursor: "pointer" }} className={styles.productCard} key={item.id} onClick={() => router.push(`/product-details/${slugify(item?.title)}`)}>
      <div className={styles.productImage}>
        <img lazy="loading" src={item?.image} alt={item?.title} className=" rounded-bottom-4 shadow" />
        <div className={`${styles.tag} ${styles.type}`}>{item?.type}</div>
        <button className={styles.favorite}>
          <FaHeart />
        </button>
      </div>
      <div className={styles?.productInfo}>
        <h3 className="my-2 ">{item?.title}</h3>
        <p className={styles.desc}>{item?.description}</p>
        <div className="d-flex gap-3 mb-4 z-3">
          <Button handleNavigate={(e) => {
            e.stopPropagation()
            setOpenForm(true)
          }} className="btn onHover btn-dark px-4 py-2 rounded-pill fw-semibold d-flex align-items-center gap-2">
            <FiGitPullRequest /> Request
          </Button>
          {openForm && <MainPortal handleCloseModal={(e) => { e.stopPropagation(), setOpenForm(false) }}  >
            <RequestForm
              onSubmit={handleFormSubmit}
              onClose={(e) => { e.stopPropagation(), setOpenForm(false) }}
            />
          </MainPortal>}
        </div>
      </div>
    </div>
  )
}

export default ProductCard;

