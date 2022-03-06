import React from "react";

import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={classes.product}>
        <div className={classes.product_detail}>
          <div className={classes.product_image}>
            <img src="https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=" />
          </div>
          <h2 className={classes.product_title}>A good parfume</h2>
        </div>
        <div className={classes.product_price}>
          <h1>$19.99</h1>
          <div className={classes.amount}>
            <button>-</button>
            <label>0</label>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
