import Footer from "../../Footer/components/Footer";
import NavBar from "../../Header/components/NavBar";
import styles from "./WishList.module.css";
import WishListCard from "./WishListCard";

function WishList() {
  return (
    <>
      <NavBar />
      <div className={styles.wishlist}>
        <p className={styles.myWishList}>My WishList</p>
        <span className={styles.itemsCount}>(5 items)</span>
        <div className={styles.cardContainer}>
          <WishListCard />
          <WishListCard />
          <WishListCard />
          <WishListCard />
          <WishListCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WishList;
