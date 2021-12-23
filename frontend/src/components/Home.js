import React from "react";
import styled from 'styled-components';


const StyledHome = styled.div`
  background: url('https://picsum.photos/id/1080/2000/1000');
  background-size: cover;
  color: #F7DC6F;
  padding: 20%;
`
const StyledLine1 = styled.div`
  padding: 10%;
  background-color: #145A32;
`

function Home (){
  return <StyledHome>
           <StyledLine1>
           <h2>Welcome to Sauti Africa Marketplace!</h2>
           <h3>We are an African online marketplace that empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.</h3>
           <h3>You think you grow the best strawberries in your town? Our platform lets people in your area, as well as outsiders, know what you have to offer!</h3>
           <h3>Or, maybe you enjoy eating strawberries but do not like growing them so much? No problem, this website also allows you to look up best fruit/vegetable options in your area and purchase what YOU like the most from the sellers YOU choose!</h3>
           </StyledLine1>
         </StyledHome>

}

export default Home;