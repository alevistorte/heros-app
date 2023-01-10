import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./UI/NavBar";

export const Root = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};
