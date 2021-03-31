import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import faker from "faker";

const App = () => {
  return (
    <div>
      <h1>Hello {faker.name.firstName()} </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
