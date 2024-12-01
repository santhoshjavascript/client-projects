import styles from "./Navbar.module.css";
import { menus } from "../../../utils/utils";
import { assets } from "../../../assets/assets";

function MenuLarge({ isMenuOpen, handleMenuToggle }) {
  return (
    <ul
      className={`${styles.menuListRes} ${isMenuOpen ? styles.open : ""} flex`}
    >
      <div className={`${styles.inputContainerRes} ${styles.menuItem}`}>
        <input
          type="text"
          placeholder="Search"
          className={styles.inputBoxRes}
        />
        <span className="flex">
          <img
            src={assets.searchIcon}
            className={styles.searchIcon}
            alt="brand logo"
          />
        </span>
      </div>
      {menus.map((item) => {
        return (
          <li className={`${styles.menuItem}`} key={item}>
            {item}
            <span>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </li>
        );
      })}
      <div className={styles.btnClose} onClick={handleMenuToggle}>
        &times;
      </div>
    </ul>
  );
}

export default MenuLarge;
