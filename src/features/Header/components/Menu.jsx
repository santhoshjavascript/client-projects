import styles from "./Navbar.module.css";
import { menus } from "../../../utils/utils";
import React from "react";

function MenuContainer() {
  return (
    <ul className={`${styles.menuList} flex`}>
      {menus.map((item) => {
        return (
          <li className={`${styles.menuItem}`} key={item}>
            {item}
            <span>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default MenuContainer;
