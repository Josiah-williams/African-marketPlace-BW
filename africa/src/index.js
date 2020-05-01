import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Context from "./context/userContext"
import Items from "./components/items"

  ReactDOM.render(
    <Router>
      {/* <Context.Provider value={obj}> */}
      <App />
      {/* </Context.Provider> */}
  
  </Router>
  , document.getElementById("root")
  );
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

