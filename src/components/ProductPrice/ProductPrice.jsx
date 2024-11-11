import styles from "./ProductPrice.module.css";

function ProductPrice({ price, offPrice, offPercentage }) {
  return (
    <div className={styles.productPrice}>
      <span>
        <small>₹</small> {price}
      </span>
      <span>
        <small>₹</small> {offPrice}
      </span>
      <span>{`${offPercentage}% off`}</span>
    </div>
  );
}

export default ProductPrice;
