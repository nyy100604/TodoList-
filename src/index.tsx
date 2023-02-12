import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* UI就可拿取store中的東西 */}
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
