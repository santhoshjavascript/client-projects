import React from "react";
import styles from "./Product.module.css";
// import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  // const { id } = product;

  return (
    <div className={styles.productCard}>
      {/* <NavLink to={`product/${id}`}> */}
      <div className={styles.badge}>Hot</div>
      <div className={styles.productTumb}>
        <img
          src="https://images.unsplash.com/photo-1535368362808-e21d5f250bed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGh8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className={styles.productDetails}>
        <p className={styles.productTitle}>{product.title}</p>
        <div className={styles.productBottomDetails}>
          <div className={styles.productPrice}>
            <span>₹{product.price}</span>
            <span>₹96.00</span>
            <span>10% Off</span>
          </div>
        </div>
      </div>
      <div className={styles.cartContainer}>
        <div>
          <p>Add to Cart</p>
        </div>
        <ion-icon name="heart-outline" className={styles.heartIcon}></ion-icon>
      </div>
      {/* </NavLink> */}
    </div>
  );
}

export default ProductItem;
