import React from "react";

import Card from "../../UI/card/Card";
import CartItem from "../cartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <>
      <div className={classes.cart_container}>
        <div className={classes.cart}>
          <Card>
            <h1 className={classes.cart_title}>Cart (2)</h1>
            <CartItem />
            <CartItem />
          </Card>
        </div>
        <div className={classes.total}>
          <Card>
            <h1 className={classes.title}>TOTAL PRICE:</h1>
            <div className={classes.price_tag}>
              <h3>Total : </h3>
              <h2>$199.99</h2>
            </div>
            <button className={classes.btn}>CHECK OUT</button>
          </Card>
        </div>
      </div>

      {/* sjdbgsbg;qhfkfhqflhgkqhgfjkqhsfjkfhkqgkjqbgjqkfjgk */}
    </>
  );
};

export default Cart;
