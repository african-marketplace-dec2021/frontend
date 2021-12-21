import React from "react";
import FormSchema from './FormSchema';

function CreateUser () {
    return (
        <form className='form container'>
            {/* dont forget submit button */}
            <h2> Register a new user!</h2>

            <label>Full Name
                <input
                //   value={values.fullName}
                //   onChange={onChange}
                  name='fullname'
                  type='text'
                />
            </label>

            <label>Email
                <input
                    // value={values.email}
                    // onChange={onChange}
                    name='email'
                    type='email'
                />
            </label>

            <label>Username
                <input
                    // value={values.email}
                    // onChange={onChange}
                    name='username'
                    type='text'
                />
            </label>

            <label>Password
                <input
                    // value={values.email}
                    // onChange={onChange}
                    name='password'
                    type='password'
                />
            </label>


















            <button id='registerButton'>Register</button>
        </form>
    )
}

export default CreateUser;