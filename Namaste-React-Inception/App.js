import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namste React by Mahesh!"
);

//nested element creation
const nestedElements = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement(
      "h1",
      { id: "nestedheading1" },
      "Namste React by Mahesh of nested elements!"
    ),React.createElement(
        "h2",
        { id: "nestedheading2" },
        "Namste React by Mahesh of nested elements!"
      )]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement(
      "h1",
      { id: "nestedheading3" },
      "Namste React by Mahesh of nested elements!"
    ),React.createElement(
        "h2",
        { id: "nestedheading4" },
        "Namste React by Mahesh of nested elements!"
      )]
  )
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);
