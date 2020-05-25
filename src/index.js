import React from "react";
import ReactDOM from "react-dom";
import "./Style/Stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducers from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
