import styles from "./WishList.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";
import { useDispatch } from "react-redux";
import { removeWhisList } from "../../../components/ProductCard/product.Slice";

function WishListCard({ obj }) {
  console.log(obj);
  const dispatch = useDispatch();

  function deleteWhisList(event, currntObj) {
    console.log(event, currntObj);

    dispatch(removeWhisList(currntObj));
  }

  return (
    <div className={styles.wishlistCard}>
      <img src={assets.women} alt="women" />
      <div className={styles.wishlistInfo}>
        <div>
          <p>{obj.title}</p>
          <ProductPrice price={obj.price} offPrice="2,455" offPercentage="10" />
        </div>
      </div>
      <div className={styles.moveToBagBox}>
        <div>
          <ion-icon name="bag-outline"></ion-icon>
          <span>move to bag</span>
        </div>
      </div>
      <div className={styles.btnDelete} onClick={(e) => deleteWhisList(e, obj)}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  );
}

export default WishListCard;
