import "react-hot-loader"; // Needs to be imported here before React and ReactDOM to enable hot-reloading

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
