import React from "react";

import classes from "./Login.module.css";

const SignIn = () => {
  return (
    <div className={classes.signin}>
      <h1>Log in</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
      <a href="#">Forget Password ?</a>
    </div>
  );
};

export default SignIn;
