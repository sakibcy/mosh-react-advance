import React from "react";
import { useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const usercontext = useContext(UserContext);
  return (
    <button onClick={() => usercontext.onLoggedIn("username")}>Log In</button>
  );
};

export default Login;
