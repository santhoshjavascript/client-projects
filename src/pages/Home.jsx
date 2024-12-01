// import NavBar from "../features/Header/components/NavBar";
import styles from "../features/Header/components/Navbar.module.css";
import Hero from "../features/Hero/components/Hero";
import ProductList from "../features/ProductList/components/ProductList";
import Gender from "../features/Gender/components/Gender";
import NavBar from "../features/Header/components/NavBar";
import Footer from "../features/Footer/components/Footer";
import { useState } from "react";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <main className={styles.main}>
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`}
        onClick={handleMenuToggle}
      ></div>
      <NavBar isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <Hero />
      <ProductList type={"Hot Collections"} />
      <ProductList type={"Featured Products"} />
      <Gender />
      <ProductList type={"Featured Products"} />
      <Footer />
    </main>
  );
}

export default Home;
