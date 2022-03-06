import React from "react";

import classes from "./Login.module.css";

const SignUp = () => {
  return (
    <div className={classes.signup}>
      <h1>Create an Account</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Create accout</button>
      </form>
    </div>
  );
};

export default SignUp;
