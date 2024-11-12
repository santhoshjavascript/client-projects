import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./PriceInput.module.css";
import Rupees from "../Rupees";
import { priceChanges } from "../../components/ProductCard/product.Slice";

function PriceInput({ minPlaceholder, maxPlaceholder }) {
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const minValue = Number(minInput);
    const maxValue = Number(maxInput);

    if (
      (minInput && maxInput && minValue <= maxValue) ||
      (!minInput && !maxInput)
    ) {
      dispatch(priceChanges({ min: minInput, max: maxInput }));
    }
  }, [minInput, maxInput, dispatch]);

  function maxInputVal(event) {
    setMaxInput(event.target.value);
  }

  function minInputVal(event) {
    setMinInput(event.target.value);
  }

  return (
    <div className={styles.priceInput}>
      <div className={styles.field}>
        <Rupees />
        <input
          type="number"
          required
          className={styles.inputMin}
          id="min-price"
          onChange={minInputVal}
        />
        <label htmlFor="min-price" className={styles.label}>
          {minPlaceholder}
        </label>
      </div>
      <div className={styles.field}>
        <Rupees />
        <input
          type="number"
          required
          className={styles.inputMin}
          id="max-price"
          onChange={maxInputVal}
        />
        <label htmlFor="max-price" className={styles.label}>
          {maxPlaceholder}
        </label>
      </div>
    </div>
  );
}

export default PriceInput;
