import React, { useState, useEffect } from "react";
import data from "../data/extractedData_v2"
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartFillIcon,
  ShoppingBagIcon as ShoppingBagFillIcon,
} from "@heroicons/react/24/solid";
import CustomSelect from "../CustomSelect";
import ShoppingCart from "../ShoppingCart";
import useLocalStorage from "../../hooks/useLocalStorage";
import { BrowserRouter as Router } from "react-router-dom";

const Context = React.createContext();


function ContextProvider({ children }) {
  const [allData, setAllData] = useState(data);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const openCart = () => setShowCart(true)
  const closeCart = () => setShowCart(false)


  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.qty || 0
  }

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

  const cartQuantity = cartItems.reduce(
    (acc, item) => acc + (item.items_in_stock > 0 ? Number(item.qty) || 1 : 0),
    0
  );

  function addToCart(product) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === product.id) == null) {
        console.log([...currItems, {...product, qty: 1}])
        return [...currItems, {...product , qty: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === product.id) {
            return {...item, qty: item.qty + 1}
          } else {
            return item
          }
        })
      }
    })
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
        getItemQuantity,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        addQuantity,
        heartIcon,
        cartQuantity,
        // openCart,
        // closeCart,
      }}
    >
      {children}
      {/* <Router> */}
        {/* <ShoppingCart showCart={showCart} /> */}
      {/* </Router> */}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
