import styles from "./ProductCard.module.css";

import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { heartOutline, heart } from "ionicons/icons";
import { useDispatch } from "react-redux";
import { setItem } from "./product.Slice";
import ProductPrice from "../ProductPrice/ProductPrice";

function ProductCard({ img, currntObj }) {
  const dispatch = useDispatch();

  function toggleClick(event, items) {
    event.preventDefault();
    dispatch(setItem(items));
  }

  const id = currntObj.id;
  if (!id) return;

  return (
    <Link to={`${id}`} className={styles.link}>
      <div className={styles.card}>
        <img src={img} alt="product" />
        <div className={styles.productInformations}>
          <p className={styles.brand}>NextGen</p>
          <p className={styles.title}>Polo Collar T-Shirt</p>
          <ProductPrice price="2,577" offPrice="1,344" offPercentage="10" />
          <IonIcon
            className={styles.icon}
            icon={currntObj.isFilled ? heart : heartOutline}
            style={{ color: currntObj.isFilled ? "red" : "black" }}
          />
        </div>
        <div className={styles.hoverInformations}>
          <div
            className={styles.addToWishlist}
            onClick={(e) => toggleClick(e, currntObj)}
          >
            <span>
              <span>
                <IonIcon
                  icon={currntObj.isFilled ? heart : heartOutline}
                  style={{ color: currntObj.isFilled ? "red" : "white" }}
                />
              </span>
              {currntObj.isFilled ? "Wishlisted" : "Wishlist"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
