"use client"
import { FaHeart, FaBed, FaBath, FaExpand } from "react-icons/fa";
import styles from "../../Componets/ProductSection/product.module.css";
import { useRouter } from "next/navigation";
import { slugify } from '../../Utility/Slugify'
const ProductCard = ({ item }) => {
  const router = useRouter()
  return (
    <div className={styles.productCard} key={item.id} onClick={() => router.push(`/product-details/${slugify(item?.title)}`)}>
      <div className={styles.productImage}>
        <img lazy="loading" src={item?.image} alt={item?.title} className=" rounded-bottom-4 shadow" />

        <div className={`${styles.tag} ${styles.type}`}>{item?.type}</div>
        <button className={styles.favorite}>
          <FaHeart />
        </button>
      </div>
      <div className={styles?.productInfo}>
        <h3>{item?.title}</h3>
        <p className={styles.price}>{item?.price}</p>
        <p className={styles.desc}>{item?.description}</p>

        <ul className={styles.details}>
          <li>
            <FaBed /> {item?.details?.beds}
          </li>
          <li>
            <FaBath /> {item?.details?.baths}
          </li>
          <li>
            <FaExpand /> {item?.details?.area}
          </li>
        </ul>

        <div className={styles.author}>
          <img src={item?.author?.image} lazy="loading" alt={item?.author?.name} />
          <p>
            By <strong>{item?.author?.name}</strong>
          </p>
        </div>


      </div>
    </div>
  )
}

export default ProductCard;

