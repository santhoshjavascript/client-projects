import LogoName from "../../../../components/Logo";
import styles from "./CartHeader.module.css";

function CartHeader({ isActive }) {
  return (
    <header className={styles.checkHeader}>
      <figure>
        <LogoName />
      </figure>
      <ul>
        <li
          className={
            isActive ? `${styles.step} ${styles.stepActive}` : `${styles.step}`
          }
        >
          login
        </li>
        <li className={styles.divider}></li>
        <li
          className={
            isActive ? `${styles.step} ${styles.stepActive}` : `${styles.step}`
          }
        >
          address
        </li>
        <li className={styles.divider}></li>
        <li
          className={
            isActive ? `${styles.step} ${styles.stepActive}` : `${styles.step}`
          }
        >
          payment
        </li>
      </ul>
    </header>
  );
}

export default CartHeader;
