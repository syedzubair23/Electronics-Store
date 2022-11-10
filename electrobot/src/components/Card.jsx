import { useState, useContext } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { StarIcon, HeartIcon as HeartFillIcon, ShoppingCartIcon as ShoppingCartFillIcon  } from "@heroicons/react/24/solid";
import { Context } from "./logic_components/Context"

export default function Card({ product }) {
  const {toggleFavorite, cartItems, addToCart, removeFromCart, favoriteItems, addToFavorite, removeFromFavorite} = useContext(Context)

  // console.log();

  // function heartIcon() {
  //   if(product.isFavorite) {
  //       return <HeartFillIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => toggleFavorite(product.id)} />
  //   } else {
  //       return <HeartIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => toggleFavorite(product.id)} />
  //   }

  function heartIcon() {
    const alreadyInFavorite = favoriteItems.some(item => item.id === product.id)
    if(alreadyInFavorite) {
        return <HeartFillIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => removeFromFavorite(product.id)} />
    } else {
        return <HeartIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => addToFavorite(product)} />
    }
}

  function cartIcon() {
    const alreadyInCart = cartItems.some(item => item.id === product.id)
    if(alreadyInCart) {
        return <ShoppingCartFillIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => removeFromCart(product.id)} />
    } else {
        return <ShoppingCartIcon className="h-6 w-6 text-cyan-400 cursor-pointer" onClick={() => addToCart(product)} />      }
}

  return (
        <div
          className="group relative p-6 border-x border-y border-gray-200"
        > 
          <div className="min-h-64 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-64">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-8 flex flex-col">
            <div className="mb-3 self-center">
              <h3 className="text-lg font-medium text-gray-900">
                {/* <a href={product.href}> */}
                  {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                  {product.name}
                {/* </a> */}
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-x-0.5">
                {Array(Number(product.rating))
                  .fill()
                  .map(() => (
                    <p>
                      <StarIcon className="h-5 w-5 text-yellow-300" />
                    </p>
                  ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{`${product.reviews} reviews`}</p>
            </div>
            <div className="flex justify-between items-center mt-5 mb-4">
               {heartIcon()}
              <p className="text-lg font-bold text-gray-900">{`$${product.price}`}</p>
              {cartIcon()}
            </div>
          </div>
        </div>
  );
}
