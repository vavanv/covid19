// Support Babel 7.4
import "core-js/stable";

import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import App from "./App";
import "typeface-roboto";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
