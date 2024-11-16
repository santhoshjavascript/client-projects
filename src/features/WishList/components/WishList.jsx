import { useSelector } from "react-redux";
import styles from "./WishList.module.css";
import WishListCard from "./WishListCard";
import SelectOptions from "./SelectOptions";

function WishList() {
  const { wishList } = useSelector((current) => current.product);

  const { isShow } = useSelector((current) => current.product);

  return (
    <>
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
        <div
          className={styles.overlay}
          style={{ display: isShow ? "block" : "none" }}
        ></div>
        <SelectOptions />
      </div>
    </>
  );
}

export default WishList;
