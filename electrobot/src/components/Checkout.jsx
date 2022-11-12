import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { useStateValue } from "./logic_components/StateProvider";
import { Context } from "./logic_components/Context";
import CustomSelect from "./CustomSelect";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Tab, Combobox } from "@headlessui/react";
import CheckoutForm from "./CheckoutForm";



// const products = [
//   {
//     id: 1,
//     name: "Throwback Hip Bag",
//     href: "#",
//     color: "Salmon",
//     price: "$90.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
//     imageAlt:
//       "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
//   },
//   {
//     id: 2,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     color: "Blue",
//     price: "$32.00",
//     quantity: 1,
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   // More products...
// ];



function Checkout() {
  // const [{basket}, dispatch] = useStateValue();
  const { cartItems, removeFromCart, addQuantity } = useContext(Context);
  // const [qty, setQty] = useState(1);

  const removeFromBasket = () => {
    // remove items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: products.id,
    });
  };

  //   const product_quantity = cartItems.map((product) =>
  //   Number(product.quantity) > 0 && [...Array(Number(product.quantity)).keys()].map((qt) => (
  //     <option key={qt+1} value={qt+1}>{qt+1}</option>
  //   ))
  //       )
  // console.log(product_quantity)

  const subtotal = cartItems
    .reduce(
      (acc, item) =>
        acc + (item.quantity > 0 ? (Number(item.qty) || 1) : 0) * Number(item.price),
      0
    )
    .toFixed(2);
    // const shipping_charges = Number(deliveryCharges).toFixed(2);
    const shipping_charges = Number("5").toFixed(2);
    const taxes =
    subtotal < 500
      ? ((subtotal * 2.2) / 100).toFixed(2)
      : ((subtotal * 3.12) / 100).toFixed(2);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2 xl:gap-x-8">

          <CheckoutForm />

          <div>
            <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
            <div className="flex flex-col bg-white shadow rounded-lg mt-5">
              {cartItems.length <= 0 ? (
                <div className="xl:py-32 lg:py-24 py-16 grid grid-cols-1 place-items-center">
                  <h2 className="text-2xl text-cyan-900 text-bold text-center px-2">
                    There is no item in the cart.
                  </h2>
                </div>
              ) : (
                <>
                  <div className="py-6 px-4 sm:px-6">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-sm font-medium text-gray-900">
                                  <h3>
                                    <a href={item.href}>{item.name}</a>
                                  </h3>
                                  <p className="ml-4">{`$${item.price}`}</p>
                                </div>
                                <p className="mt-1 text-sm font-light text-gray-500">
                                  {item.model}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                {/* <p className="text-gray-500 font-light">
                                  Qty {item.quantity}
                                </p> */}
                                {/* <div className="w-14 lg:max-w-sm">
                                  <select
                                    className="py-1 px-2 w-full text-sm transition
                                    ease-in-out text-gray-500 divide-y divide-gray-100
                                    bg-white border rounded-md shadow-sm outline-none focus:border-cyan-400"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                  >
                                    {Number(item.quantity) > 0 &&
                                      [
                                        ...Array(Number(item.quantity)).keys(),
                                      ].map((qt) => (
                                        <option className="text-sm" key={qt + 1} value={qt + 1}>
                                          {qt + 1}
                                        </option>
                                      ))}
                                  </select>
                                </div> */}
                                {Number(item.quantity) > 0 ? (
                                  <CustomSelect
                                    quantity={Number(item.quantity)}
                                    id={item.id}
                                    addQuantity={addQuantity}
                                  />
                                ) : (
                                  <div className="flex gap-x-3 items-center">
                                    <XMarkIcon className="w-5 h-5 text-red-600" />
                                    <p className="text-sm text-gray-500">
                                      No items in stock.
                                    </p>
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
                  </div>

                  <div className="border-y border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex flex-col gap-y-7 text-sm text-gray-900 font-medium">
                      <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p className="font-medium">${subtotal}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Shipping</p>
                        <p className="font-medium">${shipping_charges}</p>
                      </div>
                      <div className="flex justify-between">
                        <p>Taxes</p>
                        <p className="font-medium">${taxes}</p>
                      </div>
                      <hr className="h-[1px] bg-gray-200" />
                      <div className="flex justify-between font-semibold">
                        <p>Total</p>
                        <p>
                          $
                          {(
                            Number(subtotal) +
                            Number(shipping_charges) +
                            Number(taxes)
                          ).toFixed(2)}
                        </p>
                      </div>
                      {/* <hr className="h-[1px] bg-gray-200" /> */}
                    </div>
                  </div>

                  <div className="m-6">
                    <div className="flex items-start mb-4">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="outline-none w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-2 focus:ring-cyan-200"
                          required=""
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        I agree with the{" "}
                        <a
                          href="#"
                          className="text-cyan-400 hover:underline outline-none focus:ring-2 focus:ring-cyan-200"
                        >
                          terms and conditions
                        </a>
                        .
                      </label>
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        className="outline-none text-center w-full rounded-md border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500"
                      >
                        Pay now
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
