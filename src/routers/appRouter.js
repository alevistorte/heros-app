import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { loader as heroLoader } from "../components/Heroes/HeroScreen";

// Screens
import { DCScreen } from "../components/DC/DCScreen";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { HeroScreen } from "../components/Heroes/HeroScreen";
import { ErrorPage } from "../components/ErrorPage";
import {
  SearchScreen,
  loader as searchLoader,
} from "../components/Search/SearchScreen";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { HomeScreen } from "../components/HomeScreen";

// Actions

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomeScreen /> },
          {
            path: "dc",
            element: <DCScreen />,
          },
          {
            path: "marvel",
            element: <MarvelScreen />,
          },
          {
            path: "/hero/:heroId",
            element: <HeroScreen />,
            loader: heroLoader,
          },
          {
            path: "search",
            element: <SearchScreen />,
            loader: searchLoader,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <PublicRoutes />,
  },
]);
