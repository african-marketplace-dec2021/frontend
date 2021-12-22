import React from "react";
import FormSchema from './FormSchema';

function CreateUser () {
    return (
        <form className='form container'>
            {/* dont forget submit button */}
            <h2> Register a new user!</h2>

            <label>Username
                <input
                //   value={values.username}
                //   onChange={onChange}
                  name='name'
                  type='text'
                />
            </label>

            <label>Password:
                <input
                    // value={values.password}
                    // onChange={onChange}
                    name='password'
                    type='password'
                />
            </label>

            <label>Role:
                <input
                    // value={values.email}
                    // onChange={onChange}
                    name='username'
                    type='text'
                />
            </label>
            <button id='registerButton'>Register</button>
        </form>
    )
}

export default CreateUser;