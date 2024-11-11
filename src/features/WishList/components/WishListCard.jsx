import styles from "./WishList.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";

function WishListCard() {
  return (
    <div className={styles.wishlistCard}>
      <img src={assets.women} alt="women" />
      <div className={styles.wishlistInfo}>
        <div>
          <p>Mast & Harbour Men Slim Fit Text</p>
          <ProductPrice price="4,344" offPrice="2,455" offPercentage="10" />
        </div>
      </div>
      <div className={styles.moveToBagBox}>
        <div>
          <ion-icon name="bag-outline"></ion-icon>
          <span>move to bag</span>
        </div>
      </div>
      <div className={styles.btnDelete}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  );
}

export default WishListCard;
