import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/helpers";
import App from "./containers/App/components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
