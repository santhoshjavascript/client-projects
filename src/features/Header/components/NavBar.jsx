import Actions from "./Actions";
import styles from "./Navbar.module.css";
import React from "react";
import Menu from "./Menu";
import Offer from "../../Offer/components/Offer";
import LogoName from "../../../components/Logo";

function NavBar() {
  return (
    <header className={styles.header}>
      <Offer />
      <div className={`${styles.navContainer} grid grid--col-2`}>
        <LogoName justifySelf="center" />
        <Actions />
      </div>
      <Menu />
    </header>
  );
}

export default NavBar;
