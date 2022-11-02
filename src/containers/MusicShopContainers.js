import React, { useState } from "react";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import Basket from "../components/Basket";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const MusicShopContainer = () => {
    const user1 = {Name:"John", last_name: "Smith", age: 37}

    const shopItems = [
        {title:"Best of my love", band: 'Ella Eyre', genre: 'pop', price: 20},
        {title:"In the air tonight", band: 'Phil Collins', genre: 'Soul', price:30},
        {title:"Siamese Dream", band: 'The Smashing Pumpking', genre: 'Rock', price: 40}
    ]

    const[user, setUser] = useState(user1);
    const[items, setItem] = useState (shopItems);
    const[basket, setBasket] = useState([]);

    const clickHandler = (item) => {
        const copyBasket = [...basket];
        copyBasket.push(item);
        setBasket(copyBasket);
    }

    return (
        <>
    <Router>
        <Routes>
            <Route path="/" element={<ItemList items={items} clickHandler={clickHandler}/>}/>
            <Route path="/basket" element={<Basket basket={basket}/>}/>
        </Routes>
    </Router>
        </>
    )
}

export default MusicShopContainer;