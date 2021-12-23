import axios from "axios";
import { React, useState, useEffect } from "react";
import CreateUserFormSchema from "./CreateUserFormSchema";
import * as yup from "yup";
import styled from "styled-components";


const StylishName = styled.div`
  margin-bottom: 10px;
`
const StylishUsername = styled.div`
  margin-bottom: 10px;
`
const StylishEmail = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`
const StylishPass = styled.div`
  margin-bottom: 10px;
`
const StylishRole = styled.div`
  margin-bottom: 10px;
`
const StylishTos = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`
const StylishContainer = styled.div`
  display:flex;
  justify-content: center;
`
const StylishErrors = styled.div`
  margin-top: 15px;
  color: #C0392B;
`





const initialValues = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  role: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  fullName: "",
  email: "",
  password: "",
  role: "",
  tos: "",
};

const initialDisabled = true;

const CreateUser = (props) => {
  const [user, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const updateForm = (inputName, inputValue) => {
    setUser({ ...user, [inputName]: inputValue });
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newVal = type === "checkbox" ? checked : value;
    validate(name, newVal);
    updateForm(name, newVal);
    // console.log(value);
    // console.log(newVal);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: user.username,
      password: user.password,
      role: user.role,
    };

    axios
      .post(
        "https://african-marketplace-dec-2021.herokuapp.com/api/auth/register/",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      // console.log('user', user)
      .then((res) => {
        // console.log('user', user)
        console.log(res);
        setUser(initialValues);
        // go to home ??
      })
      .catch((error) => console.log(error.toJSON()));
  };

  const validate = (name, value) => {
    yup
      .reach(CreateUserFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    CreateUserFormSchema.isValid(user).then((valid) => {
      setDisabled(!valid);
    });
  }, [user]);

  return (
    <StylishContainer>
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        
        <StylishName>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={onChange}
          />
        </label>
        </StylishName>
        
        <StylishUsername>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onChange}
          />
        </label>
        </StylishUsername>
        
        <StylishEmail>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
        </label>
        </StylishEmail>

        <StylishPass>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
          />
        </label>
        </StylishPass>

        <StylishRole>
        <label>
          Role:
          <select value={user.role} onChange={onChange} name="role">
            <option value=''>-Choose Role</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </label>
        </StylishRole>

        <StylishTos>
        <label>
          Terms of Service:
          <input
            type="checkbox"
            name="tos"
            checked={user.tos}
            onChange={onChange}
          />
        </label>
        </StylishTos>

        <button id="registerButton" disabled={disabled}>
          Register
        </button>
      
      <StylishErrors>
        <div id="errors">
          {formErrors.fullName}<br/>
          {formErrors.username}<br/>
          {formErrors.email}<br/>
          {formErrors.password}<br/>
          {formErrors.role}<br/>
          {formErrors.tos}<br/>
        </div>
      </StylishErrors>
      </form>
    </div>
    </StylishContainer>
  );
};

export default CreateUser;
