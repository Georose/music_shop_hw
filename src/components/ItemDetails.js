import React from "react";
import styled from "styled-components";

const Button = styled.button`
Font-size: 1em;
padding: 1em;
margin: 1em;
border: #D0B8A8;
background: ${(props) => props.background || "#D0B8A8"};
&:hover {
    background: #F8EDE3;
  }

`
const ItemDetails = ({item, clickHandler}) => {
    return (
        <div>
        <h3>{item.title}</h3>
        <h3>{item.band}</h3>
        <h3>{item.genre}</h3>
        <h3>{item.price}</h3>
        <Button onClick={() => {
            clickHandler(item)
        }}>Add to Basket</Button>
        </div>
    );
};

export default ItemDetails;