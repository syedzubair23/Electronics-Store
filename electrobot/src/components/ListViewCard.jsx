import React, { useContext } from "react";
import { Context } from "./logic_components/Context";
import { Link } from "react-router-dom";

function ListViewCard({ product }) {
  const { heartIcon } = useContext(Context);
  return (
    <div className="grid grid-cols-4 space-x-5 rounded-xl shadow-lg p-3 w-full border border-white bg-white">
      <div className="col-span-1 max-h-64 aspect-w-1 aspect-h-1 w-full shadow overflow-hidden rounded-xl bg-white group-hover:opacity-75">
        <img
          src={product.url}
          alt={product.title}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="col-span-3 bg-white flex flex-col space-y-2">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block capitalize">
            {product.category}
          </p>
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-gray-600 font-bold text-sm">
              {Math.floor(Number(product.rating)).toFixed(2)}
              <span className="text-gray-500 font-normal">
                {" "}
                ({product.reviews} reviews)
              </span>
            </p>
          </div>
          <div>{heartIcon(product)}</div>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block capitalize">
            {product.subcategory}
          </div>
        </div>

        <Link to={`/${product.category}/${product.subcategory}/${product.id}`} className='hover:underline'>
          <h3 className="font-black text-gray-800 lg:text-3xl md:text-2xl sm:xl text-lg hidden sm:block">
            {product.title}
          </h3>
          <h3 className="font-black text-gray-800 lg:text-3xl md:text-2xl sm:xl text-lg block sm:hidden">
            {product.title.substring(0, 25)}
            {product.title.length > 30 ? "..." : null}
          </h3>
        </Link>

        <p className="md:text-base text-gray-500 text-sm hidden md:block">
          {product.description.substring(0, 200)}
          {product.description.length > 200 ? "..." : null}
        </p>
        <p className="text-gray-500 text-sm block md:hidden">
          {product.description.substring(0, 60)}
          {product.description.length > 60 ? "..." : null}
        </p>

        <p className="text-sm md:text-lg lg:text-xl font-black text-gray-800">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ListViewCard;
