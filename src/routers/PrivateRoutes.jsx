import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { Root } from "../components/Root";

export const PrivateRoutes = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  const { pathname } = useLocation();
  localStorage.setItem("lastPath", pathname);

  return <>{logged ? <Root /> : <Navigate to={"/login"} />}</>;
};
