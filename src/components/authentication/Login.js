import React, { useState } from "react";

import Card from "../UI/card/Card";

import classes from "./Login.module.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [showLogIn, setShowLogIn] = useState(true);

  return (
    <>
      <Card>
        <div className={classes.links}>
          <button
            className={`${classes.btn} ${showLogIn ? classes.active : ""}`}
            onClick={() => setShowLogIn(true)}
          >
            Log in
          </button>
          <button
            className={`${classes.btn} ${!showLogIn ? classes.active : ""}`}
            onClick={() => setShowLogIn(false)}
          >
            Create an account
          </button>
        </div>
        {showLogIn && <SignIn />}
        {!showLogIn && <SignUp />}
      </Card>
    </>
  );
};

export default Login;
