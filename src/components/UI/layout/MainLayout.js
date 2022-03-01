import React from "react";
import MainHeader from "../header/MainHeader";

import classes from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default MainLayout;
