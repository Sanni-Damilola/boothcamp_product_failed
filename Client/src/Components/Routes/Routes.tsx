import React from "react";
import { useRoutes } from "react-router-dom";
import Bcomponent from "../BComponent/Bcomponent";
import PComponent from "../PComponent/PComponent";
import Personal from "../Personal/Personal";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/p",
      element: <PComponent />,
    },
    {
      path: "/b",
      element: <Bcomponent />,
    },
    {
      path: "/ps",
      element: <Personal />,
    },
    
  ]);

  return element;
};

export default Routes;
