import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home"; // Oder "./components/Home", je nachdem wo sie liegt

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
