import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/cartSlice";

import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    console.log(item);
    dispatch(cartActions.addItemToCart(item));
  };

  const decreaseItemAmount = () => {
    dispatch(cartActions.decreaseItemAmount(item));
  };

  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(item));
  };

  return (
    <>
      <div className={classes.product}>
        <button className={classes.remove_btn} onClick={removeItem}>
          Delete Item
        </button>
        <div className={classes.product_detail}>
          <div className={classes.product_image}>
            <img src={item.image} />
          </div>
          <h2 className={classes.product_title}>{item.title}</h2>
        </div>
        <div className={classes.product_price}>
          <h1>${item.price}</h1>
          <div className={classes.amount}>
            <button disabled={item.amount === 1} onClick={decreaseItemAmount}>
              -
            </button>
            <label>{item.amount}</label>
            <button onClick={addItem}>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
