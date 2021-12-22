import React from "react";
//import FormSchema from './FormSchema';

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
                value={props.fullName}
                onChange={onChange}
                  
                  
                />
            </label>    

            <label>Username:
                <input
                type='text'
                name='name'
                value={props.username}
                onChange={onChange}
                  
                  
                />
            </label>

            <label>Email:
                <input
                type='email'
                name='email'
                value={props.email}
                onChange={onChange}
                  
                  
                />
            </label>

            <label>Password:
                <input
                type='password'
                name='password'
                value={props.password}
                onChange={onChange}
                    
                    
                />
            </label>

            <label>Role:
                <input
                type='text'
                name='role'
                value={props.role}
                onChange={onChange}
                    
                    
                />
            </label>

            <label>Terms of Service:
                <input
                type='checkbox'
                name='tos'
                checked={props.tos}
                onChange={onChange}
                    
                    
                />
            </label>

            <input type ='submit' value='Register User'/>
    
            {/*<button id='registerButton'>Submit</button>*/}
            </form>
        </div>
    )
}

export default CreateUser;
