import axios from "axios";
import { React, useState, useEffect } from "react";
import FormSchema from "./FormSchema";
import * as yup from "yup";
import styled from "styled-components";

const StyledRegister = styled.div`
    display: flex;
    align-content: center;
    align-items:center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 1%;
    margin-bottom: 2%;  
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
    tos: '',
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
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "enter an api here",
        user
      )
      .then((res) => {
        setUser(initialValues);
      })
      .catch((error) => console.log(error));
  };

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    FormSchema.isValid(user).then(valid => {
      setDisabled(!valid)
    })
  }, [user])

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={onChange}
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
          />
        </label>
        
        <label>Full Name:
          <input
            type='text'
            name='fullName'
            value={user.fullName}
            onChange={onChange}
          />
        </label>    

        <label>Username:
          <input
            type='text'
            name='username'
            value={user.username}
            onChange={onChange} 
          />
        </label>

        <label>Email:
          <input
            type='email'
            name='email'
            value={user.email}
            onChange={onChange}
          />
        </label>

        <label>Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={onChange}
          />
        </label>
            {/*Todo: maybe change this to a dropdown*/}
        <label>Role: 
          <input
            type='text' 
            name='role'
            value={user.role}
            onChange={onChange} 
          />
        </label>

        <label>Terms of Service:
          <input
            type='checkbox'
            name='tos'
            checked={user.tos}
            onChange={onChange}
          />
        </label>

          <input type ='submit' value='Register User'/>
    
            {/*<button id='registerButton'>Submit</button>*/}
      </form>
    </div>
    );
}

const ImplementCreateUser = () => {
    const[formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [users, setUsers] = useState([]);

    const handleSubmit = () => {
        axios.post('https://african-marketplace-dec-2021.herokuapp.com/api/auth/register', formValues)
        .then(r => {
          setUsers([r.data, ...users])
        })
        .catch(err => console.error(err))
        .finally(()=> setFormValues(initialValues))
      }

      const validate = (name, value) => {
        yup.reach(FormSchema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
      }
    
      const handleChange = (name, value) => {
        validate(name, value);
        setFormValues({...formValues, [name]: value})
      }

      const updateForm = (inputName, inputValue) => {
        setUsers({ ...users, [inputName]: inputValue });
      };

      const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newVal = type === "checkbox" ? checked : value;
        validate(name, newVal);
        updateForm(name, newVal);
      };

    return (
        <div className='implement-form'>
            <CreateUser 
            values={formValues} 
            change={handleChange} 
            errors={formErrors} 
            submit={handleSubmit}
            />

            {users.map(user => (
            <div key={user.id}>
            {console.log(user)}
            <p>{user.createdAt}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            </div>
    ))}
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={users.role}
            onChange={onChange}
          />
        </label>

        <label>
          Terms of Service:
          <input
            type="checkbox"
            name="tos"
            checked={users.tos}
            onChange={onChange}
          />
        </label>

        {/* <button id='registerButton' disabled={disabled}>Register</button> */}

        <div id="errors">
            {formErrors.fullName}
            {formErrors.username}
            {formErrors.email}
            {formErrors.password}
            {formErrors.role}
            {formErrors.tos}
        </div>
    </div>
  );
};
 
export default ImplementCreateUser;
// export default CreateUser;