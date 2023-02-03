import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Context } from "../../context/Provider";

export default function Habilities() {


  const { apiTec, setApiTec } = useContext(Context)

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={15}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
}
