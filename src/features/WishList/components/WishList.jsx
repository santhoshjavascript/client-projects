import { useSelector } from "react-redux";
import Footer from "../../Footer/components/Footer";
import NavBar from "../../Header/components/NavBar";
import styles from "./WishList.module.css";
import WishListCard from "./WishListCard";

function WishList() {
  const { wishList } = useSelector((current) => current.product);
  console.log(wishList);

  return (
    <>
      <NavBar />
      <div className={styles.wishlist}>
        <p className={styles.myWishList}>My WishList</p>
        {wishList.length === 0 ? (
          <span className={styles.myWishList}>
            Bro Go to Add Wish List First Bro
          </span>
        ) : (
          <span className={styles.itemsCount}>{wishList.length}</span>
        )}
        <div className={styles.cardContainer}>
          {wishList.map((el) => (
            <WishListCard key={crypto.randomUUID()} obj={el} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WishList;
