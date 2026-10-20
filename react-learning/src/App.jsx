import React from "react";
import Greet from "./components/function-based-component/Greet";
import Welcome from "./components/class-based-component/Welcome";
import WithJsx from "./components/with-without-jsx/WithJsx";
import WithOutJsx from "./components/with-without-jsx/WithOutJsx";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Greet />
      <hr />
      <Welcome />
      <hr />
      <WithJsx />
      <hr />
      <WithOutJsx />
    </div>
  );
}

export default App;
