import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import NewListing from "../components/NewListing";

const StyledBox = styled.div`
  width: 80%;
  text-align: left;
  margin-bottom: 1em;
`;

const StyledHeader = styled.h2`
  font-size: 1.9em;
`;

const StyledPrice = styled.div`
  width: 15%;
  text-align: left;
  padding-top: 3rem;
  margin-bottom: 1em;
  font-weight: bold;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  margin: auto;
  border-bottom: 1px solid black;
`;

const StyledListing = styled.div`
  max-width: 1000px;
  min-width: 300px;
  width: 80vw;
  margin: 50px auto;
  background-color: #ffffff;
  border-radius: 25px;
`;
const RegButton = styled.button`
  padding: 1%;
`;

function Listings() {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("/categories")
      .then((res) => {
        // console.log(res.data)
        setCategories(res.data);
      });
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("/products")
      .then((res) => {
        const categoryMap = {};
        categories.forEach((item) => (categoryMap[item.id] = item));

        let listings = res.data.map((item) => {
          if (categoryMap[item.category_id]) {
            item.categoryName = categoryMap[item.category_id].name;
          }
          return item;
        });

        if (category.id) {
          listings = listings.filter(
            (item) => item.category_id === category.id
          );
        }
        setListings(listings);
      });
  }, [category, categories]);

  const onCategoryChange = (event) => {
    const { value } = event.target;
    setCategory({ ...category, id: parseInt(value) });
  };

  return (
    <div>
      <Link to="/newlisting">
        <RegButton>Add new listing</RegButton>
      </Link>
      <div>
        <label>
          Choose a category:
          <select name="category" onChange={onCategoryChange}>
            <option value="">All</option>
            {categories ? (
              categories.map((item) => {
                return <option value={item.id} key={item.id}>{item.name}</option>;
              })
            ) : (
              <></>
            )}
          </select>
        </label>
      </div>
      <StyledListing>
        {listings.map((listing) => {
          return (
            <StyledTop key={listing.id}>
              <StyledBox listing={listing}>
                <StyledHeader>{listing.name}</StyledHeader>

                <h3>Item description:</h3>
                <h4>{listing.description}</h4>

                <h3>Category:</h3>
                <h4>{listing.categoryName}</h4>
              </StyledBox>
              <StyledPrice>
                <h3>Item price:</h3>
                <h4>${listing.price}</h4>

                <h3>Location:</h3>
                <h4>{listing.location}</h4>
              </StyledPrice>
            </StyledTop>
          );
        })}
      </StyledListing>
    </div>
  );
}

export default Listings;
