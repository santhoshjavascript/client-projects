import { useDispatch, useSelector } from "react-redux";
import FilterBox from "../../../components/FilterBox/FilterBox";
import Input from "../../../components/Input/Input";
import PriceInput from "../../../components/PriceInput/PriceInput";
import styles from "./ProductsView.module.css";
import {
  filterInStock,
  filterSoldOut,
} from "../../../components/ProductCard/product.Slice";

function Sidebar() {
  const { allItems } = useSelector((current) => current.product);

  const stock = allItems.filter((el) => el.stock > 0).length;
  const soldOut = allItems.filter((el) => el.stock === 0).length;

  const dispatch = useDispatch();

  function handleStockChange(event) {
    console.log(event.target.checked);

    if (event.target.checked) {
      dispatch(filterInStock(event.target.checked));
    } else {
      dispatch(filterInStock(event.target.checked));
    }
  }

  function handleSoldOutChange(event) {
    if (event.target.checked) {
      console.log("Sold out checked");
      dispatch(filterSoldOut(event.target.checked));
    } else {
      console.log("Sold out unchecked");
      dispatch(filterSoldOut(event.target.checked));
    }
  }

  return (
    <div className={styles.sidebar}>
      <p className={styles.filter}>Filter:</p>
      <div className={styles.boxFilterAvailability}>
        <FilterBox title="Availability" />
        <Input
          stock="In stock"
          onChange={handleStockChange}
          count={stock}
          id="stock"
        />
        <Input
          stock="Sold out"
          onChange={handleSoldOutChange}
          count={soldOut}
          id="outOfStock"
        />
      </div>
      <div className={styles.boxFilterPrice}>
        <div className={styles.wrapper}>
          <FilterBox title="Price" />
          <PriceInput minPlaceholder="From" maxPlaceholder="To" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
