import styles from "./SummaryCard.module.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function SummaryCard({ size = "large", item = "L" }) {
  return (
    <div className={`${styles.productCardItem} ${styles[size]}`}>
      <div className={`${styles.imgBox} ${styles[size]}`}>
        <img src={assets.women} alt="Product" />
      </div>
      <div className={`${styles.contentBox} ${styles[size]}`}>
        <span className={`${styles.brandName} ${styles[size]}`}>nextgen</span>
        <Link to="/">Mantilla Lace Sleeveless Dress Tees</Link>
        <div className={`${styles.optionBox} ${styles[size]}`}>
          <span>Color: Black</span>
          <span>Size: {item.size}</span>
          <span className={styles.addToWishList}>
            <ion-icon name="heart-outline"></ion-icon>
            <span>Add to wishlist</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
