import React from "react";
import Categories from "../../categories/Categories";
import Card from "../../UI/card/Card";
import ProductItem from "./ProductItem";

import classes from "./ProductList.module.css";

const ProductsList = () => {
  return (
    <div>
      <Card>
        <div className={classes.list_headline}>
          <h1>Products list</h1>
          <button className={classes.sort_button}>Sort asc</button>
        </div>
      </Card>
      <Card>
        <div className={classes.products}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Card>
    </div>
  );
};

export default ProductsList;
