"use client";
import { createContext, useEffect, useState} from "react";

export const Context = createContext(null);

function GlobalState({children}){
    // localStorage.clear();
    const [cartItems, setCartItems] = useState([]);
    function handleAddToCart(getCurrentItem){
        let copyCartItems = [...cartItems];
        const indexOfCurrentItem = copyCartItems.findIndex(item => item.id === getCurrentItem.id);

        if(indexOfCurrentItem === -1){
            copyCartItems.push(getCurrentItem)
        };

        setCartItems(copyCartItems);
        localStorage.setItem('cartItems', JSON.stringify(copyCartItems));
    }
    function changeQuantityItem(id, quantity){
        let copyCartItems = [...cartItems];
        const newValue = copyCartItems.map((el) => {
            return el.id === id ? {...el, count:quantity} : el
        });
        setCartItems(newValue);
        localStorage.setItem('cartItems', JSON.stringify(newValue));
    };

    function removeFromCart(getCurrentId){
        let copyCartItems = [...cartItems];
        copyCartItems = copyCartItems.filter(item => item.id !== getCurrentId);
        setCartItems(copyCartItems);
        localStorage.setItem('cartItems', JSON.stringify(copyCartItems));
    };

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("cartItems")) || [])
    }, []);

    return <Context.Provider value={{cartItems, handleAddToCart, removeFromCart, changeQuantityItem}}>{children}</Context.Provider>
}

export default GlobalState
