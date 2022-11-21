import React from "react";
import { render } from "react-dom";

import GridExample from "./components/Grid/examples/GridExample";

const App = () => (
  <div
    style={{
      height: "calc(100vh - 16px)"
    }}
  >
    <GridExample />
  </div>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
