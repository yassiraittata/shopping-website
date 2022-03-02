import React from "react";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.wrapper}>
          <h1 className={classes.logo}>AITTATA</h1>
          <form className={classes.search_form}>
            <input type="text" placeholder="Search" />
            <button>SEARCH</button>
          </form>
          <nav className={classes.nav}>
            <li className={classes.nav_item}>
              <a href="#" className={classes.nav_link}>
                <ion-icon name="person-circle-outline"></ion-icon>
                <label>Sign up</label>
              </a>
            </li>
            <li className={classes.nav_item}>
              <a href="#" className={classes.nav_link}>
                <ion-icon name="cart-outline"></ion-icon>
                <label>Cart</label>
              </a>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
