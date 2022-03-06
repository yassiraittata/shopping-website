import React from "react";
import ProductsSwiper from "../products/swiper/ProductsSwiper";
import Card from "../UI/card/Card";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.product_detail}>
          <Card>
            <div className={classes.detail}>
              <div className={classes.product_image}>
                <img src="https://media.istockphoto.com/photos/men-perfume-isolated-on-a-white-background-picture-id517570960?k=20&m=517570960&s=612x612&w=0&h=4AWAcXnmr5E_p8zd2zu3-zOLPngA8wSrXsEx95iVlKc=" />
              </div>
              <div className={classes.product_price}>
                <h2>A great parfume</h2>
                <h1>$19.99</h1>
                <div className={classes.amount}>
                  <button>-</button>
                  <label>0</label>
                  <button>+</button>
                </div>
                <button>ADD TO CART</button>
              </div>
            </div>
            <div className={classes.description}>
              <h2>About the product</h2>
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page, le texte définitif venant remplacer le faux-texte dès
                qu'il est prêt ou que la mise en page est achevée. Généralement,
                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
              </p>
            </div>
          </Card>
        </div>
        <div className={classes.laivraison}>
          <Card>
            <p>Select shipping place</p>
            <select>
              <option>Marrakesh</option>
            </select>
            <select>
              <option>Mhamid</option>
            </select>
          </Card>
        </div>
      </div>
      <ProductsSwiper />
    </>
  );
};

export default ProductDetail;
