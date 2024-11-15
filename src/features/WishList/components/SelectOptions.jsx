import styles from "./WishList.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedSizes,
  setAddCart,
  setIsShow,
} from "../../../components/ProductCard/product.Slice";

function SelectOptions() {
  const { isShow, derssSize } = useSelector((current) => current.product);
  const dispatch = useDispatch();

  function closeCart() {
    dispatch(setIsShow(false));
  }

  const arr = ["S", "M", "L", "XL", "XLL"];

  function selectedSize(size) {
    dispatch(selectedSizes(size));
  }

  function addToCart() {
    if (isShow) {
      const store = { ...isShow, size: derssSize };
      if (!derssSize) alert("Select size bro");
      if (derssSize) {
        dispatch(setAddCart(store));
        alert("Item Added Sucesssfully");
        dispatch(setIsShow(false));
        dispatch(selectedSizes(""));
      }
    }
  }

  return (
    <section
      className={styles.selectOptions}
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className={styles.optionsProductCard}>
        <img src={assets.women} alt="" />
        <div>
          <p>StyleCast Men without Crop Bomber with Patchwork Jacket</p>
          <ProductPrice price="4,233" offPrice="5,234" offPercentage="10" />
        </div>
      </div>
      <aside className={styles.sizeBox}>
        <p>Select Size</p>
        <div>
          {arr.map((el) => (
            <div
              key={el}
              className={` ${styles.size} ${
                el === derssSize ? styles.active : ""
              }`}
              onClick={() => selectedSize(el)}
            >
              {el}
            </div>
          ))}
        </div>
      </aside>
      <button className={styles.btnDone} onClick={addToCart}>
        Done
      </button>
      <button className={styles.btnDelete} onClick={closeCart}>
        &times;
      </button>
    </section>
  );
}

export default SelectOptions;
