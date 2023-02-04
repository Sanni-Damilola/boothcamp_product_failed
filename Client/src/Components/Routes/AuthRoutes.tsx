import React from "react";
import { useRoutes } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const AuthRoutes = () => {
  const element = useRoutes([
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <SignUp />,
    },
  ]);

  return element;
};

export default AuthRoutes;
