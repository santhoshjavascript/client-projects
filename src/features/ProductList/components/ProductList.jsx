import { useEffect } from "react";
import styles from "./Product.module.css";
import ProductItem from "./ProductItem";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setError, setItems, setLoading } from "../redux/product.Slice";

const BASE_URL = "https://fakestoreapi.com/products";

function ProductList({ type }) {
  const { items, loading } = useSelector((current) => current.product);
  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          dispatch(setLoading());
          const res = await fetch(BASE_URL);
          if (!res.ok) throw new Error("Something wrong happened");
          const data = await res.json();

          dispatch(setItems(data));
        } catch (err) {
          console.error(err.message);
          dispatch(setError(err.message));
        }
      }
      fetchProducts();
    },
    [dispatch]
  );

  if (loading) return <div> Loading .... </div>;

  return (
    <div className={styles.productContainer}>
      <h1>{type}</h1>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={false}
        speed={1200}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductList;
