import React, { useState, useEffect } from "react";
import axios from 'axios';

const initialFormValues = {
    name: '',
    description: '',
    price: '',
    location: '',
    category: '',
}

const initialFormErrors = {
    name: '',
    description: '',
    price: '',
    location: '',
    category: '',
}
const initialListing=[]


function NewListing () {

    const [listing, setListing] = useState(initialListing)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

const getListings = () => {
    axios.get('https://african-marketplace-dec-2021.herokuapp.com/api/products/')
        .then(resp => {
            setListing(resp.data);
        }).catch(err => console.log('error'))
}

const postNewListing = newListing => {
    axios.post('https://african-marketplace-dec-2021.herokuapp.com/api/products/', newListing)
        .then(resp => {
            setFormValues([resp.data, ...listing ])
            console.log('this is resp', resp)
        }).catch(err => console.log(err.toJSON()))
        .finally(() => setFormValues(initialFormValues))
}

                ///validate here///
// const validate = (name, value) => {
//     yup.reach(schema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
//   }

const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

const formSubmit = () => {
    const newListing = {
        name: formValues.name,
        description: formValues.description,
        price: Number(formValues.price),
        location: formValues.location,
        category_id: Number(formValues.category)
    }
    console.log(newListing);
  postNewListing(newListing);
}
const onSubmit = evt => {
    evt.preventDefault()
    formSubmit();
}

const onChange = evt => {
    const {name, value, checked, type } = evt.target
    // const valueToUse = type === 'checkbox' ? checked : value;
    inputChange(name, value)
    console.log(value)
}

useEffect(() => {
    getListings()
}, [])

return (
      <form onSubmit={onSubmit}>
        <div>
          <h2>Create a new listing</h2>
        </div>
        
        <label>Item
          <input
            name='name'
            type='text'
            value={formValues.name}
            onChange={onChange}
          />
        </label>

        <label>Description
          <input
            name='description'
            type='text'
            value={formValues.description}
            onChange={onChange}
          />
        </label>

        <label>Price
          <input
            name='price'
            type='text'
            value={formValues.price}
            onChange={onChange}
          />
        </label>

        <label>Location
          <select
            name='location'
            value={formValues.location}
            onChange={onChange}
          >
            <option value=''>-Choose Location</option>
            <option value='1'>Location 1</option>
            <option value='2'>Location 2</option>
            <option value='3'>Location 3</option>
            <option value='4'>Location 4</option>
            <option value='5'>Location 5</option>
          </select>
        </label>

        <label>Category
          <select
            name='category'
            value={formValues.category_id}
            onChange={onChange}
          >
            <option value=''>-Choose Category</option>
            <option value='1'>category 1</option>
            <option value='2'>category 2</option>
            <option value='3'>category 3</option>
            <option value='4'>category 4</option>
            <option value='5'>category 5</option>
          </select>
        </label>

        <button>Submit</button>

      </form>
    )
}

export default NewListing;