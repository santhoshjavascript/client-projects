import React from "react";
import styles from "./Product.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";
import { IonIcon } from "@ionic/react";
import { heartOutline, heart } from "ionicons/icons";
import { setItem } from "../redux/product.Slice";
import { useDispatch } from "react-redux";
import { setIsShow } from "../../../components/ProductCard/product.Slice";

// import { NavLink } from "react-router-dom";

function ProductItem({ currntObj }) {
  const dispatch = useDispatch();

  function toggleClick(event, items) {
    event.preventDefault();
    dispatch(setItem(items));
  }

  function moveToBag(addObj) {
    console.log(addObj);
    console.log("hacker");

    dispatch(setIsShow(addObj));
  }

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
          <span onClick={() => moveToBag(currntObj)}>move to bag</span>
        </div>
        <span onClick={(e) => toggleClick(e, currntObj)}>
          <IonIcon
            icon={currntObj.isFilled ? heart : heartOutline}
            style={{
              color: currntObj.isFilled ? "red" : "black",
              fontSize: "20px",
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default ProductItem;
