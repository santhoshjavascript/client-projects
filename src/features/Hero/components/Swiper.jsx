import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../../utils/utils";
import "swiper/swiper-bundle.css";
import styles from "./Hero.module.css";

function Slides() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className={styles.sliderImage}>
          <img src={slide.image} alt={slide.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slides;
