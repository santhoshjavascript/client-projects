import styles from "./Admin.module.css";

function SummaryContent() {
  return (
    <ul className={styles.summary}>
      <li>
        <p className={styles.summaryTitle}>Orders</p>
        <div className={styles.summaryDetails}>
          <ion-icon name="cart-outline"></ion-icon>
          <div>
            <p className={styles.count}>0</p>
            <span>processing: 0</span>
            <span>complete: 4</span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default SummaryContent;
