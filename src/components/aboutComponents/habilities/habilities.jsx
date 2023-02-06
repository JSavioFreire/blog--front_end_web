import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";
import { Context } from "../../../context/Provider";

import { EachHability } from "./styleHabilities";

export default function Habilities() {

  const { apiTec, loadingApiTec } = useContext(Context);

  return (
<div style={{paddingLeft: 20, paddingRight: 20}}>
  
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
  
        {loadingApiTec && <h1>Carregando</h1>}
        {apiTec && apiTec.map((el, key) => {
          return (
            <SwiperSlide key={key}>
              <EachHability>
                <img src={el.image}></img>
                <h1>{el.title}</h1>
                <p>{el.content}</p>
  
              </EachHability>
            </SwiperSlide>
          )
        })}
  
  
  
      </Swiper>
</div>





  )
}
