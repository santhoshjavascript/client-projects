import styles from "./AddressForm.module.css";
import SummaryCard from "../../../../components/SummaryCard/SummaryCard";

function LeftSide() {
  return (
    <section className={styles.leftSide}>
      <ul className={styles.itemDetail}>
        <li>
          <div className={styles.product}>Product</div>
          <div className={styles.quantity}>Qty</div>
          <div className={styles.price}>Price</div>
        </li>
        <li>
          <SummaryCard size="small" className={styles.summaryCard} />
          <div className={styles.quantity}>1</div>
          <div className={styles.price}>1,444</div>
        </li>
      </ul>
      <div className={styles.cartTotalBox}>
        <h3>total</h3>
        <ul className={styles.total}>
          <li>
            <p>Item total</p>
            <p>$2,519</p>
          </li>
          <li>
            <p>Shipping</p>
            <p>Free</p>
          </li>
          <li>
            <p>Grand total</p>
            <p>$2,519</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LeftSide;
