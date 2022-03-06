import React from "react";
import Categories from "../../categories/Categories";

import classes from "./ProductItem.module.css";

const ProductItem = () => {
  return (
    <>
      <div className={classes.product_container}>
        <div className={classes.product_image}>
          <img src="https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=" />
        </div>
        <div className={classes.product_description}>
          <h3 className={classes.product_title}>A good parfume for men</h3>
        </div>
        <div className={classes.product_price_wraper}>
          <h2 className={classes.product_price}>$19.99</h2>
          <button className={classes.button}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
