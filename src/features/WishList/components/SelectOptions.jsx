import styles from "./WishList.module.css";
import { assets } from "../../../assets/assets";
import ProductPrice from "../../../components/ProductPrice/ProductPrice";

function SelectOptions() {
  return (
    <section className={styles.selectOptions}>
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
          <div className={styles.size}>S</div>
          <div className={styles.size}>M</div>
          <div className={styles.size}>L</div>
          <div className={styles.size}>XL</div>
          <div className={styles.size}>XXL</div>
        </div>
      </aside>
      <button className={styles.btnDone}>Done</button>
      <button className={styles.btnDelete}>&times;</button>
    </section>
  );
}

export default SelectOptions;
