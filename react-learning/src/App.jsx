import React from "react";
import Greet from "./components/function-based-component/Greet";
import Welcome from "./components/class-based-component/Welcome";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <Greet />
      <hr />
      <Welcome />
    </div>
  );
}

export default App;
