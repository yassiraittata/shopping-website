import React from "react";
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import classes from "./ProductsSwiper.module.css";

import Card from "../../UI/card/Card";
import ProductSwiperItem from "./ProductSwiperItem";

const ProductsSwiper = () => {
  return (
    <>
      <Card>
        <div className={classes.category_title}>Clothes</div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={false}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={classes.swiper}
        >
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
          <SwiperSlide className={classes.SwiperSlide}>
            <ProductSwiperItem />
          </SwiperSlide>
        </Swiper>

        <div className={classes.products_link}>
          <a href="#">See all products &rarr;</a>
        </div>
      </Card>
    </>
  );
};

export default ProductsSwiper;
