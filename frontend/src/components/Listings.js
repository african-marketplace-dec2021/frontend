import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import NewListing from '../components/NewListing';

const StyledBox = styled.div`
    width: 80%;
    text-align: left;
    margin-bottom: 1em;
`

const StyledPrice = styled.div`
    width: 15%;
    text-align: left;
    padding-top: 3rem;
    margin-bottom: 1em;
    font-weight: bold;
`

const StyledTop = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 85%;
    margin: auto;
    border-bottom: 1px solid black;
`

const StyledListing = styled.div`
    max-width: 1000px;
    min-width: 300px;
    width: 80vw;
    margin: 50px auto;
    background-color: #ffffff;
    border-radius: 25px;
`

function Listings (){

    const [listings, setListings] = useState([

    ])
    useEffect(() => {
        fetchListings()
    },[])

    function fetchListings (){
        axiosWithAuth().get("/products")
            .then(res => {
                setListings(res.data);
            })
    }
  return (
    <div>
      <Link to='/newlisting'> Add new listing </Link>
        <StyledListing>
        {
            listings.map(listing => {
                return (
                    <StyledTop>
                    <StyledBox listing={listing}>
                        <h1>{listing.name}</h1>

                        <h2>Item description:</h2>
                        <h3>{listing.description}</h3>

                    </StyledBox>
                    <StyledPrice>
                        <h3>Item price:</h3>
                        <h4>{listing.price}</h4>
                    </StyledPrice>
                    </StyledTop>

            )
        })}
        </StyledListing>
  </div>
  )
}

export default Listings;