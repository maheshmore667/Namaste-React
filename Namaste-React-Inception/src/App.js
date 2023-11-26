import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import RestaurantInfo from "./components/RestaurantInfo";

import ErrorPage from "./components/Error";
const AppComponent = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restro/:id",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <ErrorPage />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
