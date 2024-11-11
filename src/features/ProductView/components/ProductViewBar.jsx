import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../../components/ProductCard/ProductCard";
import styles from "./ProductsView.module.css";
import { useEffect } from "react";
import {
  setError,
  setItems,
  setLoading,
} from "../../../components/ProductCard/product.Slice";

const BASE_URL = "http://localhost:9000/products";

function ProductViewBar() {
  const { items, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      try {
        dispatch(setLoading());
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();

        const itemsWithIsFilled = data.map((item) => ({
          ...item,
          isFilled: false,
        }));

        dispatch(setItems(itemsWithIsFilled));
      } catch (err) {
        console.error(err.message);
        dispatch(setError(err.message));
      }
    }
    fetchProducts();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.viewbar}>
      {items.map((el) => (
        <ProductCard key={el.id} img={el.thumbnail} currntObj={el} />
      ))}
    </div>
  );
}

export default ProductViewBar;
