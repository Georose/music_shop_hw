import React from 'react';
import './App.css';
import MusicShopContainer from './containers/MusicShopContainers';
import Basket from './components/Basket';
import styled from "styled-components";

const Title = styled.h1`
text-align: center;
background-color: #9F8772;
font-size: 2em;
`


function App() {
  return (
    <>
    <Title>Music Shop</Title>
    <MusicShopContainer/>
    </>
  );
}

export default App;
