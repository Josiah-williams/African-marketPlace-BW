import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage, label } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../auth/axiosWithAuth";

const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 49%;
`;

export default function register() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("please enter your username"),
    department: Yup.string().required(""),
    password: Yup.string().required("please enter a password"),
    repeat_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "passwords must match"
    )
  });

  // const history = useHistory();
  // const goToLogin = () => {
  //   history.push("/login");
  // };

  const initialState = {
    username: "",
    department: "",
    password: "",
    repeat_password: "",
    
  };

  function handleSubmit(values, actions) {
    // console.log(values);
    // console.log(actions);
    const allValues = {
      ...values,

 
    };
    delete allValues.repeat_password;
    // console.log(allValues);

   
      axiosWithAuth()
        .post("https://lbs-african-marketplace.herokuapp.com/auth/register", allValues)
        .then(response => {
          console.log(response);
          actions.resetForm();
          
  const history=useHistory()
          history.push("/login")
          // goToLogin();
        })
        .catch(err => {
            console.log(err);
          });
        //   ("form#contact-form").submit(function(){
        //     setTimeout(function(){this.reset()}, 2000);
        // });
          // setTimeout(resetForm, 2000)
        }
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialState}
    >
      <Form className="form-container">
        <h1 className="card--title">Sign up</h1>
        <label className="form--label">
          <Field
            required
            type="text"
            id="name"
            name="name"
            className="form--input"
          />{" "}
          <span className="input--label">username</span>
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="text"
            id="username"
            name="username"
            className="form--input"
          />
          <span className="input--label">Department</span>
          <ErrorMessage name="username" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="text"
            id="department"
            name="department"
            className="form--input"
          />
         
          <span className="input--label">Password</span>
          <ErrorMessage name="password" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="form--input"
          />
          <span className="input--label">Repeat password</span>
          <ErrorMessage
            name="repeat_password"
            component="div"
            className="error"
          />
        </label>
        <button type="submit" className="button-primary button-big">
          Continue
        </button>
      </Form>
    </Formik>
  );
  }
