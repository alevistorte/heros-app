import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/Login/LoginScreen";

export const PublicRoutes = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return <>{!logged ? <LoginScreen /> : <Navigate to={"/"} />}</>;
};
