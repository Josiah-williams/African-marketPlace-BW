import React, { useContext ,useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userContext } from "../context/userContext";
import { useHistory } from 'react-router-dom'
import Itemslist from "./itemsList"

export default function Items() {
  const items = useContext(userContext);
  const [deleteItem, updateItem,] = useState(items)
  const [itemslist, getitems] = useState([])

  // const { items } = userContext

  useEffect(() => {
    getitems()
  }, [])
  console.log(items)
  if (!items) { return null }
  


  
// const history = useHistory;

  // return <div>'loading'</div>;
  // console.log(context)

  // if (items.length == 0) {
 

  // console.log(context.items)

  return (
    <div>
    <itemslist />
      {items.map(item => {
        return (

          <div key={item.id}>
            <h1>items List</h1>



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
              <div>
                <button onClick={() => updateItem(item)}>
                  Update
              </button>
              </div>
            </div>
            <div>
              {" "}
              <button onClick={() => deleteItem(item)}>
                Delete
              </button>
            </div>
            <div>
              <Form>
                <label htmlFor="itemForm_name">Name</label>
                <Field
                  type="text"
                  id="itemForm_name"
                  name="name"
                  placeholder="Enter item name"
                  onChange={onchange}
                  value={item.name}
                />
                <label htmlFor="itemForm__description">Description</label>
                <Field
                  type="text"
                  id="itemForm_description"
                  name="description"
                  placeholder="Enter item description"
                  onChange={onchange}
                  value={item.description}
                />
                <label htmlFor="itemForm__price">Price</label>
                <Field
                  type="text"
                  id="itemForm_price"
                  name="price"
                  placeholder="Enter item price"
                  onChange={onchange}
                  value={item.price}
                />
                <label htmlFor="itemForm__location">Location</label>
                <Field
                  type="text"
                  id="itemForm__location"
                  name="location"
                  placeholder="Enter item location"
                  onChange={onchange}
                  value={item.location}
                />
                <label htmlFor="itemForm__category">Category</label>
                <Field
                  type="text"
                  id="itemForm__category"
                  name="category"
                  placeholder="Enter item category"
                />
                <input type='submit' />
                <button onClick={oncancel}>Cancel </button>
              </Form>
            </div>
              ) : (
            <div></div>
              )}
          </div>
        );
      })}
    </div>
  );
}


