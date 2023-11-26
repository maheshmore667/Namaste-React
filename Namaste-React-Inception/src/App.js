import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/Error";
const AppComponent = () => {
  
  return (
    <div className="container">
      <Header />
      <MainContainer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppComponent />,
    errorElement: <ErrorPage />
  },
  {
    path:"/about",
    element: <About />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
