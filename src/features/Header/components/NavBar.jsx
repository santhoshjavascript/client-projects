import Actions from "./Actions";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import MenuContainer from "./Menu";
import Offer from "../../Offer/components/Offer";
import LogoName from "../../../components/Logo";
import { Menu, Search } from "lucide-react";
import MenuLarge from "./MenuLarge";
import { assets } from "../../../assets/assets";

function NavBar({ isMenuOpen, handleMenuToggle }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 840);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleSearchToggle() {
    setIsSearchOpen(!isSearchOpen);
  }

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 840);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Offer />
        <div className={styles.navContainer}>
          <aside
            className={`${styles.resMenu} ${
              isSearchOpen ? styles.searchOpen : ""
            }`}
          >
            <Menu
              width="24px"
              height="24px"
              className={styles.resIcon}
              onClick={handleMenuToggle}
            />
            <Search
              width="24px"
              height="24px"
              className={`${styles.resIcon} ${styles.lucideSearchIcon}`}
              onClick={handleSearchToggle}
            />
            <img src={assets.logo} alt="" className={styles.iconRes} />
            <span>
              <input type="text" />
              <button onClick={handleSearchToggle}>&times;</button>
            </span>
          </aside>
          <LogoName justifySelf="center" />
          <Actions />
        </div>
        {!isSmallScreen && <MenuContainer />}
      </header>
      {isSmallScreen && (
        <div>
          <MenuLarge
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        </div>
      )}
    </>
  );
}

export default NavBar;
