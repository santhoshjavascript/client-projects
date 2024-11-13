// import { Link } from "react-router-dom";

import styles from "./ProductsView.module.css";
import Sidebar from "./Sidebar";
import ProductViewBar from "./ProductViewBar";

function ProductsView() {
  return (
    <div className={styles.productsView}>
      <select name="clothing" id="cloth-select">
        <option value="">Sort by:</option>
        <option value="what-new">What's New</option>
        <option value="popularity">Popularity</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="low-to-high">Price: Low to How</option>
        <option value="inStock">In stock</option>
        <option value="outOfStock">Sold out</option>
      </select>
      <div className={styles.col2}>
        <Sidebar />
        <ProductViewBar />
      </div>
    </div>
  );
}

export default ProductsView;
