import React, { useEffect } from "react";
import { Route, Switch, withRouter, Router, Link, NavLink, useHistory } from "react-router-dom";


// //styles
// import "./CSS/App.css";
// import styled from "styled-components";

//Child components
import Items from "./components/items"
import SellerForm from "./seller/sellerForm"
import Login from "./components/Login"
import Register from "./components/Register"
import RestrictedRoute from "./auth/protectedRoute";

function App() {
  return (
    
    <div>
      <Link to="/login">
        <button>Login</button>
        </Link>
      <Link to="/items">
        <button>ItemsList</button>
        </Link>
        <Link to="/Register">
          <button>Register</button>
          </Link>
        <Link to="/sellerForm">
        <button>SellerForm</button>
        </Link>
        <Route path='/items'>
        <Items />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/Register'>
        <Register />
      </Route>
      <Route path='/sellerForm'>
        <SellerForm />
      </Route>

        </div>
  
  );
}

export default App