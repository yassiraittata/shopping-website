import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../UI/card/Card";
import CartItem from "../cartItem/CartItem";

import { cartActions } from "../../../store/cartSlice";

import classes from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const checkout = () => {
    dispatch(cartActions.checkout());
  };

  return (
    <>
      <div className={classes.cart_container}>
        <div className={classes.cart}>
          <Card>
            <h1 className={classes.cart_title}>Cart ({cart.totalQuantity})</h1>
            {cart.items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </Card>
        </div>
        <div className={classes.total}>
          <Card>
            <h1 className={classes.title}>TOTAL PRICE:</h1>
            <div className={classes.price_tag}>
              <h3>Total : </h3>
              <h2>${cart.totalPrice.toFixed(2)}</h2>
            </div>
            <button className={classes.btn} onClick={checkout}>
              CHECK OUT
            </button>
          </Card>
        </div>
      </div>

      {/* sjdbgsbg;qhfkfhqflhgkqhgfjkqhsfjkfhkqgkjqbgjqkfjgk */}
    </>
  );
};

export default Cart;
