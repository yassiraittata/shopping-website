import React from "react";

import classes from "./Categories.module.css";
import Features from "./Features";

const Categories = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.categories}>
          <ul className={classes.categories_list}>
            <li>
              <a href="">
                <ion-icon name="nutrition-outline"></ion-icon> Supermarket
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="sparkles-outline"></ion-icon> Bueaty
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="shirt-outline"></ion-icon> Cloths
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="watch-outline"></ion-icon>
                Fashion Accessories
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="home-outline"></ion-icon>
                House & kitchen
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="phone-portrait-outline"></ion-icon>
                Cell Phones
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="bed-outline"></ion-icon>
                Home appliance
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="desktop-outline"></ion-icon>
                computers
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="barbell-outline"></ion-icon>
                Sport
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="tv-outline"></ion-icon>
                Tv & Hi Tech
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="sad-outline"></ion-icon>
                Babies
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
                Other
              </a>
            </li>
          </ul>
        </div>
        <Features />
      </div>
    </>
  );
};

export default Categories;
