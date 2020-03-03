import React, { useState } from "react";
import { NavLink, Button, Form, Label, Input, FormGroup } from "reactstrap";
import styled from "styled-components";
import withAuth from "../../axios/index";
import { connect } from "react-redux";
import { Register } from "../../state/actionCreators";

const Register = ({ user, registerUser }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
    console.log(userData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    registerUser(userData);
  };

  export const registerUser = data => dispatch => {
    axiosWithAuth()
      .post("/register", data)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        dispatch({
          type: types.REGISTER,
          payload: {
            user: response.data.user
          }
        });
      })
    
  return (
    <LoginForm>
      {JSON.stringify(user)}
      <div className="topHalf">
        {/* <img src={} alt="logo" /> */}
        <h2>Sign In / Register</h2>
      </div>

      <div className="bottomHalf">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="email"
              placeholder="email address"
              value={userData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <br />
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={userData.password}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <FormGroup>
            <Input
              type="text"
              name="first name"
              id="first_name"
              placeholder="first name"
              value={userData.first_name}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <FormGroup>
            <Input
              type="text"
              name="first name"
              id="last_name"
              placeholder="last name"
              value={userData.last_name}
              onChange={handleChange}
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <NavLink to="/">
            <Button>Register</Button>
          </NavLink>
        </Form>
      </div>
    </LoginForm>
  );
};

const LoginForm = styled.form`
  .topHalf {
    min-height: 50%;
    background-color: #e9e7e3;
  }
  img {
    max-height: 100px;
    max-width: 100px;
  }
  h2 {
    color: #fe0202;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    margin-right: 15%;
    padding-top: 20%;
  }
  button {
    color: #fe0202;
    width: 300px;
    height: 70px;
    border: 1px solid #fe0202;
    border-radius: 2rem;
    font-size: 36px;
  }
`;
}
export default connect(state => state, { registerUser })(Register);