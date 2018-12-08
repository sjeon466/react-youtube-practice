import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import Hello from "./components/Hello";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
// ReactDOM.render(<Hello />, document.getElementById("root") as HTMLElement);
ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
