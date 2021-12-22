import React, {useState} from 'react';
import axios from 'axios';

import * as yup from 'yup';
import schema from './FormSchema';


const initVals = {
    fullName: '',
    username: '',
    password: '',
    email: '',
    role: '', 
    tos: false
  }
  
  const initErrors = {
    fullName: '',
    username: '',
    password: '',
    email: '',
    role: '', 
    tos: ''
  }


const CreateUser = (props) => {
    const {change, submit, errors} = props;
    const {username, fullName, email, password, role, tos} = props.values;

    const onChange = (event) => {
        const {name, value, checked, type} = event.target
        const newVal = type === 'checkbox' ?
        checked : value;
        change(name, newVal);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div className='form-container'>
            <h2>Register</h2>
            {/*Enter Validation errors here
            as <p>{errors.username}</p> ETC. */}
        <form  onSubmit={onSubmit}>
        
        <label>Full Name:
                <input
                type='text'
                name='fullName'
                value={fullName}
                onChange={onChange}
                  
                  
                />
            </label>    

            <label>Username:
                <input
                type='text'
                name='name'
                value={username}
                onChange={onChange}
                  
                  
                />
            </label>

            <label>Email:
                <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                  
                  
                />
            </label>

            <label>Password:
                <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                    
                    
                />
            </label>
            {/*Todo: maybe change this to a dropdown*/}
            <label>Role: 
                <input
                type='text' 
                name='role'
                value={role}
                onChange={onChange}
                    
                    
                />
            </label>

            <label>Terms of Service:
                <input
                type='checkbox'
                name='tos'
                checked={tos}
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
    const[formValues, setFormValues] = useState(initVals);
    const [formErrors, setFormErrors] = useState(initErrors);
    const [users, setUsers] = useState([]);

    const handleSubmit = () => {
        axios.post('https://african-marketplace-dec-2021.herokuapp.com/api/auth/register', formValues)
        .then(r => {
          setUsers([r.data, ...users])
        })
        .catch(err => console.error(err))
        .finally(()=> setFormValues(initVals))
      }

      const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
      }
    
      const handleChange = (name, value) => {
        validate(name, value);
        setFormValues({...formValues, [name]: value})
      }

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
        </div>
    );
}

 
export {ImplementCreateUser}
export default CreateUser;
