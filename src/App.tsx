import React, { ReactElement } from "react";
import Heatmap from "./heatmap";
import "./app.scss";

const App = (): ReactElement => {
  return (
    <div className="app">
      <h2>Financial Transactions Heatmap 2019</h2>
      <div className="container">
        <Heatmap />
      </div>
    </div>
  );
};

export default App;
