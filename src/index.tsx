import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
//import Hello from "./components/Hello";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
//ReactDOM.render(<Hello />, document.getElementById("root") as HTMLElement);
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
