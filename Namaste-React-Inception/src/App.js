import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

const AppComponent = () => {
  return (
    <div className="container">
      <Header />
      <MainContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
