import React, { useState, useEffect } from "react";
import products from "../productsData";

const Context = React.createContext();

// const products = [{
// 	"id": 1,
// 	"name": "Throwback Hip Bag",
// 	"href": "#",
// 	"color": "Salmon",
// 	"price": "$90.00",
// 	"quantity": 1,
// 	"imageSrc": "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
// 	"imageAlt": "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
// 	"isFavorite": false
// }, {
// 	"id": 2,
// 	"name": "Medium Stuff Satchel",
// 	"href": "#",
// 	"color": "Blue",
// 	"price": "$32.00",
// 	"quantity": 1,
// 	"imageSrc": "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
// 	"imageAlt": "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
// 	"isFavorite": false
// }]

function ContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState(products);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  //   useEffect(() => {
  //     setAllProducts(products);
  //   }, []);

  //   function toggleFavorite(id) {
  //     console.log(id);
  //     const updatedArr = allProducts.map((product) => {
  //       if (product.id === id) {
  //         return { ...product, isFavorite: !product.isFavorite };
  //         setFavoriteItems(product)
  //       }
  //       return product;
  //     });
  //     setAllProducts(updatedArr);
  //   }

  function addQuantity(id, qty=1) {
    console.log(id);
    const updatedArr = cartItems.map((product) => {
      if (product.id === id) {
        return { ...product, qty: qty };
        setCartItems(product);
      }
      return product;
    });
    setCartItems(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
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

  return (
    <Context.Provider
      value={{
        allProducts,
        // toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        favoriteItems,
        addToFavorite,
        removeFromFavorite,
        addQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
