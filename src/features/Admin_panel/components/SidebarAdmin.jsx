import styles from "./Admin.module.css";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";

function SidebarAdmin() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={assets.logo} alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="pulse-outline"></ion-icon>
              <span className={styles.title}>Dashboard</span>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="checkmark-circle-outline"></ion-icon>
              <span className={styles.title}>Todo</span>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="images-outline"></ion-icon>
              <span className={styles.title}>Media Library</span>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="mail-outline"></ion-icon>
              <span className={styles.title}>Messages</span>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="chatbubbles-outline"></ion-icon>
              <span className={styles.title}>Chat</span>
            </Link>
          </li>
          <li className={`${styles.navHeading} ${styles.navLink}`}>
            ecommerce
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className={styles.title}>Sales</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </li>
          <li className={styles.navLink}>
            <Link>
              <ion-icon name="cube-outline"></ion-icon>
              <span className={styles.title}>Products</span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarAdmin;
