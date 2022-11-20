import React, { useState, useEffect } from "react";
import data from "../data/extractedData_v2"
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartFillIcon,
  ShoppingBagIcon as ShoppingBagFillIcon,
} from "@heroicons/react/24/solid";
import CustomSelect from "../CustomSelect";

const Context = React.createContext();


function ContextProvider({ children }) {
  const [allData, setAllData] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);


  function addQuantity(id, qty=1) {
    console.log(id);
    const updatedArr = cartItems.map((product) => {
      if (product.id === id) {
        return { ...product, qty: qty };
      }
      return product;
    });
    setCartItems(updatedArr);
  }

  function addToCart(newItem) {
    const alreadyInCart = cartItems.some((item) => item.id === newItem.id);
    if (!alreadyInCart) {
    return setCartItems((prevItems) => [...prevItems, newItem]);
    } 
  }
  console.log(cartItems);

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  function addToFavorite(newItem) {
    setFavoriteItems((prevItems) => [...prevItems, newItem]);
  }
  console.log(favoriteItems);

  function removeFromFavorite(id) {
    setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function heartIcon(product) {
    const alreadyInFavorite = favoriteItems.some(
      (item) => item.id === product.id
    );
    if (alreadyInFavorite) {
      return (
        <HeartFillIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => removeFromFavorite(product.id)}
        />
      );
    } else {
      return (
        <HeartIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => addToFavorite(product)}
        />
      );
    }
  }

  

  return (
    <Context.Provider
      value={{
        allData,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        addQuantity,
        heartIcon,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
