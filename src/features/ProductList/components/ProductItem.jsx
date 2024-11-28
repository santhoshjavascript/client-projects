import React from "react";
import styles from "./Product.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";
import { Heart } from "lucide-react";
// import { NavLink } from "react-router-dom";

function ProductItem() {
  return (
    <div className={styles.wishlistCard}>
      <img src={assets.women} alt="women" />
      <div className={styles.wishlistInfo}>
        <div>
          <p>Dress</p>
          <ProductPrice price="1,455" offPrice="2,455" offPercentage="10" />
        </div>
      </div>
      <div className={styles.moveToBagBox}>
        <div>
          <ion-icon name="bag-outline"></ion-icon>
          <span>move to bag</span>
        </div>
        <Heart size={16} />
      </div>
    </div>
  );
}

export default ProductItem;
