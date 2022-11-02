import { click } from "@testing-library/user-event/dist/click";
import React, { Component } from "react";
import ItemDetails from "./ItemDetails";
import { Link } from "react-router-dom";



const ItemList = ({items, clickHandler}) => {
    const shopItems = items.map((item, index) => {
        return <ItemDetails key={index} item={item} clickHandler={clickHandler}/>
    });



    return (
    <div>
        <h2> Records List: </h2>
        <ul>
            {shopItems}
        </ul>
        <Link to="/basket">View Basket</Link>
    </div>
    )
}



export default ItemList;