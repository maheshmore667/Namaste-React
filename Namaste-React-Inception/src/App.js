import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantInfo from "./components/RestaurantInfo";
import { Provider } from "react-redux";
import appStore from "./Store/appStore.js";

import ErrorPage from "./components/Error";
import Cart from "./components/Cart.js";

const About = lazy(() => {
  return import("./components/About");
});
const AppComponent = () => {
  return (
    <Provider store={appStore}>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </Provider>
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
        element: (
          <Suspense fallback={<></>}>
            {" "}
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restro/:id",
        element: <RestaurantInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
