import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./HomePage";
import faker from "faker";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
