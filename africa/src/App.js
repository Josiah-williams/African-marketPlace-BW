import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";

//Redux actions
import { checkToken, logout } from "./state/actionCreators";

// //styles
// import "./CSS/App.css";
// import styled from "styled-components";

//Child components
import Items from "./components/items"
import UpdateItem from "./components/Edit-Item"
import SellerForm from "./components/seller/sellerForm"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import RestrictedRoute from "./auth/restrictedRoute";

function App({ appState, user, checkToken, logout }) {
  const history = useHistory();
  useEffect(() => {
    if (!appState) {
      checkToken(history);
    }
  }, []);
  return (
    
    <div className="container">
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route exact path="/Login">
        <Login />
      </Route>
      <RestrictedRoute exact path="/items">
        <Items/>
        </RestrictedRoute>
        <RestrictedRoute exact path="/sellerForm">
        <SellerForm />
      </RestrictedRoute>
      <RestrictedRoute exact path="/updateItem">
        <UpdateItem/>
        </RestrictedRoute>
        </Switch>
        </div>
  
  );
}


    




  

export default App;
