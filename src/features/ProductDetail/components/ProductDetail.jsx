import styles from "./ProductDetail.module.css";
import SubProductDetails from "./SubProductDetails";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItem,
  selectedProduct,
  setLoading,
} from "../../../components/ProductCard/product.Slice";

const BASE_URL = "http://localhost:9000/products";
function ProductDetail() {
  const { id } = useParams();
  const { productView } = useSelector((currennt) => currennt.product);
  const dispatch = useDispatch();

  useEffect(() => {
    async function mounted() {
      try {
        dispatch(setLoading());
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) throw new Error("Network fetching error");
        const data = await res.json();
        dispatch(selectedProduct(data));
      } catch (error) {
        console.log(error.message);
      }
    }
    mounted();

    return () => {
      dispatch(clearItem());
    };
  }, [id, dispatch]);

  if (!productView) return;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDesigns}>
        {productView.images.map((shoe) => {
          return (
            <div className={styles.additionalImage} key={shoe}>
              <img src={shoe} alt="shoe" className={styles.image} />
            </div>
          );
        })}
      </div>
      <div className={styles.productImage}>
        <img
          src={productView.thumbnail}
          alt="main shoe"
          className={styles.mainShoe}
        />
      </div>
      <SubProductDetails />
    </div>
  );
}
// import styles from "./ProductDetail.module.css";

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import {
//   clearItem,
//   setError,
//   setItem,
//   setLoading,
// } from "../../ProductList/redux/product.Slice";

// function ProductDetail() {
//   const { id } = useParams();
//   const { loading, item } = useSelector((current) => current.product);
//   const dispatch = useDispatch();
//   const BASE_URL = "https://fakestoreapi.com/products";

//   console.log(item);
//   useEffect(() => {
//     async function fetchProduct() {
//       dispatch(setLoading()); // Set loading state to true
//       dispatch(clearItem());
//       try {
//         const res = await fetch(`${BASE_URL}/${id}`);
//         if (!res.ok) throw new Error("Product not found");
//         const data = await res.json();
//         dispatch(setItem(data)); // Set fetched product item
//       } catch (error) {
//         console.error(error.message);
//         dispatch(setError(error.message)); // Set error state if fetch fails
//       }
//     }

//     fetchProduct();
//   }, [id, dispatch]);

//   if (loading) return <h1>Loading...</h1>;

//   return <h1>Content</h1>;
// }

export default ProductDetail;
