import { useEffect } from "react";
import styles from "./Product.module.css";
import ProductItem from "./ProductItem";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/product.Slice";
import { useLoaderData } from "react-router-dom";
import SelectOptions from "../../WishList/components/SelectOptions";

function ProductList({ type }) {
  const { items, isShow } = useSelector((current) => current.product);

  const dispatch = useDispatch();

  const { home } = useLoaderData();

  useEffect(
    function () {
      dispatch(setItems(home));
    },
    [dispatch, home]
  );

  return (
    <div className={styles.productContainer}>
      <h1>{type}</h1>

      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={false}
        speed={1200}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem currntObj={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={styles.overlay}
        style={{ display: isShow ? "block" : "none" }}
      ></div>
      <SelectOptions />
    </div>
  );
}

export default ProductList;
