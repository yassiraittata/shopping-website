import React from "react";

import classes from "./Features.module.css";

const Features = () => {
  return (
    <>
      <div className={classes.features}>
        <div className={classes.feature}>
          <ion-icon name="cash-sharp" className="feature-box__icon"></ion-icon>
          <h3 className={classes.feature_title}>cash on delivery</h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>

        <div className={classes.feature}>
          <ion-icon name="flash-sharp" class="feature-box__icon"></ion-icon>
          <h3 className={classes.feature_title}>fast delivery</h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>

        <div className={classes.feature}>
          <ion-icon
            name="lock-closed-sharp"
            class="feature-box__icon"
          ></ion-icon>
          <h3 className={classes.feature_title}>high secured</h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>

        <div className={classes.feature}>
          <ion-icon name="earth-outline"></ion-icon>
          <h3 className={classes.feature_title}>
            Shopping anywhere all over the world
          </h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>

        <div className={classes.feature}>
          <ion-icon name="time-outline"></ion-icon>
          <h3 className={classes.feature_title}>Shop anytime</h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>

        <div className={classes.feature}>
          <ion-icon name="cart-outline"></ion-icon>
          <h3 className={classes.feature_title}>Everythng you need</h3>
          <p className={classes.feature_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            similique consequuntur, sequi quas laboriosam quasi non iste soluta.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
