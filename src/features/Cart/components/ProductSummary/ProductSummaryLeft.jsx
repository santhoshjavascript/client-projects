import styles from "./ProductSummary.module.css";
import { Link } from "react-router-dom";
import { assets } from "../../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  deletingCart,
  setAmount,
  setAddCart,
} from "../../../../components/ProductCard/product.Slice";
import SummaryCard from "../../../../components/SummaryCard/SummaryCard";

function ProductSummaryLeft() {
  const { addCart, amount } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const updatedTotalAmount = addCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    dispatch(setAmount({ amount: updatedTotalAmount }));
  }, [addCart, dispatch]);

  const [quantities, setQuantities] = useState(
    addCart.map((item) => item.quantity)
  );

  useEffect(() => {
    setQuantities(addCart.map((item) => item.quantity));
  }, [addCart]);

  const incrementFn = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);

    const updatedItem = {
      ...addCart[index],
      quantity: updatedQuantities[index],
    };
    dispatch(setAddCart(updatedItem));
  };

  const decrementFn = (index) => {
    if (quantities[index] > 1) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);

      const updatedItem = {
        ...addCart[index],
        quantity: updatedQuantities[index],
      };
      dispatch(setAddCart(updatedItem));
    }
  };

  const handleInputChange = (e, index) => {
    const value = Math.max(1, Number(e.target.value));
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = value;
    setQuantities(updatedQuantities);

    const updatedItem = {
      ...addCart[index],
      quantity: updatedQuantities[index],
    };
    dispatch(setAddCart(updatedItem));
  };

  const deleteAddCartItem = (item) => {
    dispatch(deletingCart(item));
  };

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
            </tr>
          </thead>
          <tbody>
            {addCart.map((item, index) => (
              <tr key={index} className={styles.productRow}>
                <td>
                  <SummaryCard size="large" item={item} />
                </td>
                <td className={styles.priceInput}>
                  <div className={styles.priceWrapper}>
                    <button onClick={() => decrementFn(index)}>-</button>
                    <input
                      type="number"
                      onChange={(e) => handleInputChange(e, index)}
                      value={quantities[index]}
                    />
                    <button onClick={() => incrementFn(index)}>+</button>
                  </div>
                </td>
                <td>Rs.${item.price * quantities[index]}</td>
                <td>
                  <button
                    onClick={() => deleteAddCartItem(item)}
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

export default ProductSummaryLeft;
