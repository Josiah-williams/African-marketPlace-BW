import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Login from "./components/user/Login";
import { Link, withRouter } from "react-router-dom";

export default function Register(props) {
  const history = props.history;

  const initialState = {
    username: '',
    department: '',
  
  }
  function handleSubmit(values, actions) {
    console.log(values);
    debugger;
    axios
      .post(
        " https://lbs-african-marketplace.herokuapp.com/auth/register",
        {
          ...values,
          profile_pic_url: ""
        }
      )
      .then(response => {
        debugger;
        history.push("/login");

        console.log(response.data);

        actions.resetForm();
      })
      .catch(error => console.log(error.response.data))
      .finally(() => {
        console.log("done");
      });
  }

  return (
    <div className='LoginForm'>
      <h1>Africa MarketPlace SignUp Form</h1>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialState}
>
        <Form className="form">
        <label>username</label>
        <Field
        type="text"
        id="username"
        name="username"
        className="input"/>
        <ErrorMessage name="username" component="div" className="error"/>

        <label>Department</label>
        <Field
        type="tel"
        id="department"
        name="department"
        className="input"/>
        <ErrorMessage name="department" component="div" className="error"/>

        <label>password</label>
        <Field
        type="password"
        id="password"
        name="password"
        className="input"/>
        <ErrorMessage name="password" component="div" className="error"/>

        <button type="submit">Continue</button>

      </Form>
    </Formik>
    </div>
    )}