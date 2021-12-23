import React, { useState } from "react";
import axios from 'axios';
import NewListingFormSchema from './NewListingFormSchema';
import * as yup from 'yup';
import styled from "styled-components";

const StylishItem = styled.div`
  margin-bottom: 10px;
`
const StylishDes = styled.div`
  margin-bottom: 10px;
`
const StylishPrice = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`
const StylishLocation = styled.div`
  margin-bottom: 10px;
`
const StylishCat = styled.div`
  margin-bottom: 10px;
`
const StylishErr = styled.div`
  margin-top: 15px;
  color: #C0392B;
`

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


const postNewListing = newListing => {
    axios.post('https://african-marketplace-dec-2021.herokuapp.com/api/products/', newListing)
        .then(resp => {
            setFormValues([resp.data, ...listing ])
        }).catch(err => console.log(err.response.data.message))
        .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
    yup.reach(NewListingFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

const inputChange = (name, value) => {
    validate(name, value);
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
  postNewListing(newListing);
}
const onSubmit = evt => {
    evt.preventDefault()
    formSubmit();
}

const onChange = evt => {
    const {name, value } = evt.target
    inputChange(name, value)
}

return (
      <form onSubmit={onSubmit}>
        <div>
          <h2>Create a new listing</h2>
        </div>
        
        <StylishItem>
        <label>Item:
          <input
            name='name'
            type='text'
            value={formValues.name}
            onChange={onChange}
          />
        </label>
        </StylishItem>

        <StylishDes>
        <label>Description:
          <input
            name='description'
            type='text'
            value={formValues.description}
            onChange={onChange}
          />
        </label>
        </StylishDes>

        <StylishPrice>
        <label>Price:
          <input
            name='price'
            type='number'
            value={formValues.price}
            onChange={onChange}
          />
        </label>
        </StylishPrice>

        <StylishLocation>
        <label>Location:
          <select
            name='location'
            value={formValues.location}
            onChange={onChange}
          >
            <option value=''>-Choose Location</option>
            <option value='Location 1'>Location 1</option>
            <option value='Location 2'>Location 2</option>
            <option value='Location 3'>Location 3</option>
            <option value='Location 4'>Location 4</option>
            <option value='Location 5'>Location 5</option>
          </select>
        </label>
        </StylishLocation>

        <StylishCat>
        <label>Category:
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
        </StylishCat>
        <button>Submit</button>
        <StylishErr>
        <div className='errors'>
          <div>{formErrors.name}</div>
          <div>{formErrors.description}</div>
          <div>{formErrors.price}</div>
          <div>{formErrors.location}</div>
          <div>{formErrors.category}</div>
        </div>
        </StylishErr>

      </form>
    )
}

export default NewListing;