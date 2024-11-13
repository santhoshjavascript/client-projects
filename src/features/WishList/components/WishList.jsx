import { useSelector } from "react-redux";
import Footer from "../../Footer/components/Footer";
import NavBar from "../../Header/components/NavBar";
import styles from "./WishList.module.css";
import WishListCard from "./WishListCard";
import SelectOptions from "./SelectOptions";

function WishList() {
  const { wishList } = useSelector((current) => current.product);
  console.log(wishList);

  return (
    <>
      <NavBar />

      <div className={styles.wishlist}>
        <p className={styles.myWishList}>My WishList</p>
        {wishList.length === 0 ? (
          <span className={styles.myWishList}>Add Items</span>
        ) : (
          <span className={styles.itemsCount}>{`(${wishList.length} ${
            wishList.length > 1 ? "items" : "item"
          })`}</span>
        )}
        <div className={styles.cardContainer}>
          {wishList.map((el) => (
            <WishListCard key={crypto.randomUUID()} obj={el} />
          ))}
        </div>
        <div className={styles.overlay}></div>
        <SelectOptions />
      </div>
      <Footer />
    </>
  );
}

export default WishList;
