import React, { useContext } from "react";
import { Context } from "./logic_components/Context";
import { XMarkIcon } from "@heroicons/react/20/solid";

function Wishlist() {
  const { favoriteItems, removeFromFavorite } = useContext(Context);

  function wishlist() {
    if (favoriteItems.length <= 0) {
      return (
        <div className="py-16 md:py-16 lg:py-24 xl:py-32 grid grid-cols-1 place-items-center">
          <h2 className="text-2xl text-cyan-900 text-bold text-center px-2">
            There is no item in the wishlist.
          </h2>
        </div>
      );
    } else {
      return (
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {favoriteItems.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-sm font-medium text-gray-900">
                      <h3>
                        <a href={item.href}>{item.title}</a>
                      </h3>
                      <p className="ml-4">{`$${item.price}`}</p>
                    </div>
                    <p className="mt-1 text-sm font-light text-gray-500">
                      {item.model}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    {item.items_in_stock <= 0 ? (
                      <div className="flex gap-x-3 items-center">
                        <XMarkIcon className="w-5 h-5 text-red-600 text-left" />
                        <p className="text-sm text-gray-500">
                          No items in stock.
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-500 font-light">
                        Qty: {item.items_in_stock} available
                      </p>
                    )}

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-cyan-400 hover:text-cyan-300"
                        onClick={() => removeFromFavorite(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  return (
    <div className="bg-gray-100 min-h-[calc(100vh-105px)]">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-3xl lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Wishlist</h2>
          <div className="flex flex-col bg-white shadow rounded-lg mt-5">
            <div className="py-6 px-4 sm:px-6">{wishlist()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
