import React from "react";
import styles from "./ProductDetail.module.css";
import { assets } from "../../../assets/assets";
import Button from "../../../components/Button/Button";

function SubProductDetails() {
  return (
    <div className={styles.productActions}>
      <div className={styles.necessaryDetails}>
        <h1>Women's Classic Low Top</h1>
        <div className={styles.productPrice}>
          <p>$ 2,256</p>
          <p>$ 2,560</p> <p>(10% off)</p>
          <img
            src={assets.logoWhite}
            alt="logo"
            className={styles.iconDetail}
          />
        </div>
      </div>

      <div className={styles.policyContainer}>
        <p className={styles.policy}>We are committed to sustainability</p>

        <ul className={styles.policyList}>
          <li className={styles.policyItem}>
            <i className="ri-recycle-line"></i> Made from 100% sustainable
            materials
          </li>

          <li className={styles.policyItem}>
            <i className="ri-archive-line"></i> Arrives in recycled packaging
          </li>

          <li className={styles.policyItem}>
            <i className="ri-tree-line"></i> Carbon neutral shipment & delivery
          </li>
        </ul>
      </div>

      <div className={styles.sizeWrapper}>
        <p>Size</p>
        <ul className={styles.sizeContainer}>
          <li className={`${styles.size} active`}>M</li>
          <li className={styles.size}>S</li>
          <li className={styles.size}>L</li>
          <li className={styles.size}>XL</li>
          <li className={styles.size}>2XL</li>
        </ul>
      </div>

      <div className={styles.sizeWrapper}>
        <p>Quantity</p>
        <div className={styles.quantityContainer}>
          <div className={styles.quantity}>&ndash;</div>
          <input className={styles.quantity} type="text" />
          <div className={styles.quantity}>&#43;</div>
        </div>
      </div>

      <Button
        bgColor="#fff"
        boxShadow="inset 0 0 0 2px #000"
        color="#000"
        marginBottom="1.4rem"
      >
        add to cart
      </Button>
      <Button bgColor="#000" color="#fff">
        buy now
      </Button>
    </div>
  );
}

export default SubProductDetails;
