import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";

//Redux actions
import {  logout } from "./components/state/actionCreators";

// //styles
// import "./CSS/App.css";
// import styled from "styled-components";

//Child components
import Items from "./components/items"
import SellerForm from "./components/seller/sellerForm"
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import RestrictedRoute from "./components/auth/protectedRoute";
import Edititem from "./components/EditItem"
import ItemPage from "./components/ItemPage"
import UpdateItem from "./components/UpdateItem"
function App({ appState, user, checkToken, logout }) {
  const history = useHistory();
  useEffect(() => {
    // if (!appState) {
      // checkToken(history);
  }, []);
  return (
    
    <div className="container">
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path ="/items">
        <Items/>
        </Route>
        <Route exact path ="/Register">
          Register
        </Route>
        <Route exact path="/sellerForm">
        <SellerForm />
      </Route>
      <Route exact path ="/edititem">
        <Edititem />
      </Route>
      <Route exact path ="/itemPage">
        <ItemPage />
        <Route exact path = "/updateItem">
          <UpdateItem />
        </Route>

      </Route>
      </Switch>
        </div>
  
  );
}

function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}

export default connect(mapStateToProps, { logout })(App);

