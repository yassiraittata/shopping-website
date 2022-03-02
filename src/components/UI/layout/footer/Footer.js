import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_wraper}>
        <h1 className={classes.logo}>AITTATA</h1>
        <div className={classes.detail}>
          <div className={classes.social}>
            <li>
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </div>
          <div className={classes.copyright}>
            <h2 className={classes.copyright_tag}>&copy; YASSIR AITTATA</h2>
            <p className={classes.copyright_text}>
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
