import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.wrapper}>
          <NavLink to="/home">
            <h1 className={classes.logo}>AITTATA</h1>
          </NavLink>
          <form className={classes.search_form}>
            <input type="text" placeholder="Search" />
            <button>SEARCH</button>
          </form>
          <nav className={classes.nav}>
            <li className={classes.nav_item}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.nav_link} ${classes.active}`
                    : classes.nav_link
                }
              >
                <ion-icon name="person-circle-outline"></ion-icon>
                <label>Sign up</label>
              </NavLink>
            </li>
            <li className={classes.nav_item}>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.nav_link} ${classes.active}`
                    : classes.nav_link
                }
              >
                <ion-icon name="cart-outline"></ion-icon>
                <label>Cart</label>
              </NavLink>
            </li>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
