import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  deletingCart,
  setAmount,
} from "../../../components/ProductCard/product.Slice";

function CartLeft() {
  const { addCart } = useSelector((current) => current.product);
  const dispatch = useDispatch();

  const totalAmount = addCart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const { amount } = useSelector((current) => current.product);

  console.log(amount);

  if (Object.keys(amount).length === 0) {
    dispatch(setAmount({ amount: totalAmount }));
  }
  // Initialize quantities from the addCart state
  const [quantity, setQuantities] = useState(
    addCart.map((item) => item.quantity)
  );

  useEffect(() => {
    setQuantities(addCart.map((item) => item.quantity));
  }, [addCart]);

  function incrementFn(index) {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      const updatedTotalPrice = addCart.reduce((acc, el, idx) => {
        return acc + el.price * newQuantities[idx];
      }, 0);
      dispatch(setAmount({ amount: updatedTotalPrice }));
      return newQuantities;
    });
  }

  function decrementFn(index) {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      const updatedTotalPrice = addCart.reduce((acc, el, idx) => {
        return acc + el.price * newQuantities[idx];
      }, 0);
      dispatch(setAmount({ amount: updatedTotalPrice }));
      return newQuantities;
    });
  }

  function handleInputChange(e, index) {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantities((prevQuantities) => {
        const newQuantities = [...prevQuantities];
        newQuantities[index] = value;
        const updatedTotalPrice = addCart.reduce((acc, el, idx) => {
          return acc + el.price * newQuantities[idx];
        }, 0);
        dispatch(setAmount({ amount: updatedTotalPrice }));
        return newQuantities;
      });
    }
  }

  function deleteAddCartItem(selectedItem) {
    dispatch(deletingCart(selectedItem));
  }

  return (
    <div className={styles.cartLeft}>
      <h1 className={styles.cartHeading}>Your Cart</h1>
      <div className={styles.cartInfo}>
        <table className={styles.tableLeft}>
          <thead>
            <tr>
              <th className={styles.product}>Product</th>
              <th className={styles.price}>Quantity</th>
              <th className={styles.quantity}>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addCart.map((el, index) => (
              <tr key={index} className={styles.productRow}>
                <td>
                  <div className={styles.productCardItem}>
                    <div className={styles.imgBox}>
                      <img src={assets.women} alt="Product" />
                    </div>
                    <div className={styles.contentBox}>
                      <span className={styles.brandName}>nextgen</span>
                      <Link to="/">Mantilla Lace Sleeveless Dress Tees</Link>
                      <div className={styles.optionBox}>
                        <span>Color: Black</span>
                        <span>Size: {el.size}</span>
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
                    <button onClick={() => decrementFn(index)}>-</button>
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, index)}
                      value={quantity[index]}
                    />
                    <button onClick={() => incrementFn(index)}>+</button>
                  </div>
                </td>
                <td>Rs.${el.price * quantity[index]}</td>
                <td>
                  <button
                    onClick={() => deleteAddCartItem(el)}
                    className={styles.btnDelete}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartLeft;
