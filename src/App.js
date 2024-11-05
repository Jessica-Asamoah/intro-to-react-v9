import React from "react"; //default export
import { createRoot } from "react-dom"; // named export
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Good pizza",
    }),
    React.createElement(Pizza, {
      name: "The Americano Pizza",
      description: "French fries and hotdogs on pizza",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Pineapple and ham on pizza",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza?",
      description: "Chicken nuggies on your pizza",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "Baked potatoes on pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
