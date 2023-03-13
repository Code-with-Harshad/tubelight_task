import React from "react";
import {  useRoutes } from "react-router-dom";
import NoPageFound from "../component/404Page";
import Counter from "../component/counter";
import Userlist from "../component/user";

const Routers = () => {
  return useRoutes([
    { index: true, element: <Counter /> },
    { path: "/user-List", element: <Userlist /> },
    { path: "*", element: <NoPageFound /> },
  ]);
};

export default Routers;
