import { useState, useContext } from "react";
import { HeartIcon, ShoppingCartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  StarIcon,
  HeartIcon as HeartFillIcon,
  ShoppingBagIcon as ShoppingBagFillIcon,
} from "@heroicons/react/24/solid";
import { Context } from "./logic_components/Context";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  const {
    toggleFavorite,
    cartItems,
    addToCart,
    removeFromCart,
    favoriteItems,
    addToFavorite,
    removeFromFavorite,
    heartIcon
  } = useContext(Context);

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (alreadyInCart) {
      return (
        <ShoppingBagFillIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => removeFromCart(product.id)}
        />
      );
    } else {
      return (
        <ShoppingBagIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => addToCart(product)}
        />
      );
    }
  }

  return (
    <div className="group relative p-6 border-x border-y border-gray-200">
      <div className="min-h-64 aspect-w-1 aspect-h-1 w-full shadow overflow-hidden rounded-lg bg-white group-hover:opacity-75 lg:aspect-none lg:h-64">
        <img
          src={product.url}
          alt={product.title}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-8 flex flex-col">
        <div className="mb-3 self-center">
          <h3 className="text-lg font-medium text-gray-900">
            <Link to={`/product-details/${product.id}`}>
              {product.title.substring(0, 18)}...
            </Link>
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-x-0.5">
            {Array(Math.floor(Number(product.rating)))
              .fill()
              .map(() => (
                <p>
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </p>
              ))}
          </div>
          <p className="text-sm text-gray-500 mt-2">{`${product.reviews} reviews`}</p>
        </div>
        <div className="flex justify-between items-center mt-5 mb-4">
            {heartIcon(product)}
          <p className="text-lg font-bold text-gray-900">{`$${Number(product.price).toFixed(2)}`}</p>
            {cartIcon()}
        </div>
      </div>
    </div>
  );
}
