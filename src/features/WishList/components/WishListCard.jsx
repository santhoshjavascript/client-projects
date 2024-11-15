import styles from "./WishList.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";
import { useDispatch } from "react-redux";
import {
  removeWhisList,
  setIsShow,
} from "../../../components/ProductCard/product.Slice";

function WishListCard({ obj }) {
  const dispatch = useDispatch();

  function deleteWhisList(currntObj) {
    dispatch(removeWhisList(currntObj));
  }

  function moveToBag(addObj) {
    dispatch(setIsShow(addObj));
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      // console.log("pressed");
      dispatch(setIsShow(false));
    }
  });

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
        <div onClick={() => moveToBag(obj)}>
          <ion-icon name="bag-outline"></ion-icon>
          <span>move to bag</span>
        </div>
      </div>
      <div className={styles.btnDelete} onClick={() => deleteWhisList(obj)}>
        <ion-icon name="close-outline"></ion-icon>
      </div>
    </div>
  );
}

export default WishListCard;
