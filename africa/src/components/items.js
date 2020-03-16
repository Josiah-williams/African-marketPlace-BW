import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";
import { useHistory } from "react-router-dom";



export function Item({ getItems, items }) {
  const history = useHistory();
  useEffect(() => {
    getItems();
  }, []);
  if (!items){return null}
  
  

    
    const Logout = e => {
      localStorage.removeItem("token");
      history.push("/login");
      
    };
    const sell = e => {
      history.push("/sellerform")
    }
      
    return (
      <>
      
        <h1>items List</h1>
        {
        items.map(item => (
          <div key = {item.id}>
              
              <p>id: {item.id}</p>
              <div className="item-name">
                <strong>
                name: {item.name}</strong>
                </div>
                <div className="item-description">
                <strong>description: {item.description}</strong>
                </div>
                <div className="item-price">
                  <strong>price: {item.price}</strong>
                  </div>
                  <div className="item-location">
				           <strong>location: {item.location}</strong>
                   </div>
                   <div className="item-category">
				            <strong>category: {item.category}</strong>
              </div>
              
              
              </div>
            

              
    
        ))}

      
        <button onClick={Logout}>Log out</button>
        <button onClick={sell}>sell</button>
  </>
    )
}
   
   export default connect(
    function mapStateToProps(state) {
      console.log(state);
      
      return {
        items: state.items.items
      };
    },
    actionCreators
  )(Item);