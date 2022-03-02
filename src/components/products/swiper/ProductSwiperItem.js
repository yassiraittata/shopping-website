import React from "react";

import classes from "./ProductSwiperItem.module.css";

const ProductSwiperItem = () => {
  return (
    <>
      <div
        className={classes.product_container}
        onClick={() => {
          console.log("hello");
        }}
      >
        <div className={classes.product_image_wrapper}>
          <img
            src="https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc="
            className={classes.product_image}
          />
        </div>
        <div className={classes.product_title_wrapper}>
          <h2 className={classes.product_title}>
            A red marrakech T-shirt awsomeesds man this is,the hf hf
          </h2>
        </div>
        <h1 className={classes.product_price}>$19.99</h1>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductSwiperItem;
