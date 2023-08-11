import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import myLogger from "./middlewares/myLogger";

// root reducer
import rootReducer from "./modules";

// redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(myLogger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
