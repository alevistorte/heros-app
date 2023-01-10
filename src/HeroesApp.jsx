import React, { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { appRouter } from "./routers/appRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <RouterProvider router={appRouter} />
    </AuthContext.Provider>
  );
};
