import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";

function CartLeft() {
  return (
    <div className={styles.cartLeft}>
      <h1 className={styles.cartHeading}>Your Cart</h1>
      <div className={styles.cartInfo}>
        <table className={styles.tableLeft}>
          <thead>
            <tr>
              <th className={styles.product}>product</th>
              <th className={styles.price}>quantity</th>
              <th className={styles.quantity}>total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.productRow}>
              <td>
                <div className={styles.productCardItem}>
                  <div className={styles.imgBox}>
                    <img src={assets.women} alt="women" />
                  </div>
                  <div className={styles.contentBox}>
                    <span className={styles.brandName}>nextgen</span>
                    <Link to="/">Mantilla Lace Sleeveless Dress Tees</Link>
                    <div className={styles.optionBox}>
                      <span>Color: Black</span>
                      <span>Size: XL</span>
                      <span className={styles.addToWishList}>
                        <ion-icon name="heart-outline"></ion-icon>
                        Add to wishlist
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className={styles.priceInput}>
                <div className={styles.priceWrapper}>
                  <span>-</span>
                  <input type="number" />
                  <span>+</span>
                </div>
              </td>
              <td>Rs.10,000</td>
              <span className={styles.btnDelete}>&times;</span>
            </tr>
            <tr className={styles.productRow}>
              <td>
                <div className={styles.productCardItem}>
                  <div className={styles.imgBox}>
                    <img src={assets.women} alt="women" />
                  </div>
                  <div className={styles.contentBox}>
                    <span className={styles.brandName}>nextgen</span>
                    <Link to="/">Mantilla Lace Sleeveless Dress Tees</Link>
                    <div className={styles.optionBox}>
                      <span>Color: Black</span>
                      <span>Size: XL</span>
                      <span className={styles.addToWishList}>
                        <ion-icon name="heart-outline"></ion-icon>
                        Add to wishlist
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className={styles.priceInput}>
                <div className={styles.priceWrapper}>
                  <span>-</span>
                  <input type="number" />
                  <span>+</span>
                </div>
              </td>
              <td>Rs.10,000</td>
              <span className={styles.btnDelete}>&times;</span>
            </tr>
            <tr className={styles.productRow}>
              <td>
                <div className={styles.productCardItem}>
                  <div className={styles.imgBox}>
                    <img src={assets.women} alt="women" />
                  </div>
                  <div className={styles.contentBox}>
                    <span className={styles.brandName}>nextgen</span>
                    <Link to="/">Mantilla Lace Sleeveless Dress Tees</Link>
                    <div className={styles.optionBox}>
                      <span>Color: Black</span>
                      <span>Size: XL</span>
                      <span className={styles.addToWishList}>
                        <ion-icon name="heart-outline"></ion-icon>
                        Add to wishlist
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className={styles.priceInput}>
                <div className={styles.priceWrapper}>
                  <span>-</span>
                  <input type="number" />
                  <span>+</span>
                </div>
              </td>
              <td>Rs.10,000</td>
              <span className={styles.btnDelete}>&times;</span>
            </tr>
          </tbody>
        </table>
        <Link to="/wishlist" className={styles.link}>
          Add more from Wishlist
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
}

export default CartLeft;
