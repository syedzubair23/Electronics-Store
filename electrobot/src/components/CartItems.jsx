import React from "react";
import { useContext } from "react";
import { Context } from "./logic_components/Context";
import CustomSelect from "./CustomSelect";
import { XMarkIcon } from "@heroicons/react/20/solid";

function CartItems() {
  const { cartItems, removeFromCart, addQuantity, getItemQuantity } = useContext(Context);

  return (
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="flex py-6">
            <div className="h-auto w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-sm font-medium text-gray-900">
                  <h3 className="leading-tight">
                    <a href={item.href}>{item.title}</a>
                  </h3>
                  <p className="ml-4">{`$${item.price}`}</p>
                </div>
                <p className="mt-1 text-sm font-light text-gray-500">
                  {item.model}
                </p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
              
                {Number(item.items_in_stock) > 0 ? (
                  <CustomSelect
                    quantity={Number(item.items_in_stock)}
                    id={item.id}
                    addQuantity={addQuantity}
                    items_in_stock={item.items_in_stock}
                    qty={item.qty}
                    getItemQuantity={getItemQuantity}
                  />
                ) : (
                  <div className="flex gap-x-3 items-center">
                    <XMarkIcon className="w-5 h-5 text-red-600" />
                    <p className="text-sm text-gray-500">No items in stock.</p>
                  </div>
                )}

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-cyan-400 hover:text-cyan-300"
                    onClick={() => removeFromCart(item.id)}
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

export default CartItems;
