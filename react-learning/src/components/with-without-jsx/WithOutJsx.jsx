import React from "react";

// function WithOutJsx() {
//   return React.createElement("h1", null, "Hello I am without JSX");
// }

// export default WithOutJsx;

function WithOutJsx() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { id: "heading" }, "Hello I am without JSX"),
  );
}

export default WithOutJsx;
