import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

function CheckoutForm() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2 xl:gap-x-8">
          <form action="">
            <div>
              <h2 className="text-lg text-gray-900 font-medium mb-5">
                Contact information
              </h2>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-lg text-gray-900 font-medium mb-5">
                Shipping information
              </h2>

              <div className="grid gap-x-4 gap-y-5 mb-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="company"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="apartment"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Apartment, suite, etc.
                </label>
                <input
                  type="text"
                  id="apartment"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
              <div className="grid gap-x-4 gap-y-5 mb-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="state_province"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    State / Province
                  </label>
                  <input
                    type="text"
                    id="state_province"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="postal_code"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    id="postal_code"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-lg text-gray-900 font-medium mb-5">
                Delivery method
              </h2>
              <div className="grid gap-x-4 gap-y-5 mb-5 sm:grid-cols-2">
                <div className="bg-white px-4 py-5 rounded-lg shadow">
                  <div className="group">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        Standard
                      </h3>
                      <div>
                        <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 font-light mt-2">
                      4-10 business days
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 mt-6">
                      $5.00
                    </h3>
                  </div>
                </div>
                <div className="bg-white px-4 py-5 rounded-lg shadow">
                  <div className="group">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-900">
                        Express
                      </h3>
                      <div>
                        <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 font-light mt-2">
                      2-5 business days
                    </p>
                    <h3 className="text-sm font-medium text-gray-900 mt-6">
                      $16.00
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-lg text-gray-900 font-medium mb-5">
                Shipping information
              </h2>

              <div className="mb-5">
                <label
                  htmlFor="card_number"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Card number
                </label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  id="card_number"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name_on_card"
                  className="block mb-1.5 font-medium text-sm text-gray-900"
                >
                  Name on card
                </label>
                <input
                  type="text"
                  id="name_on_card"
                  className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow outline-none"
                  required=""
                />
              </div>
              <div className="grid gap-x-4 gap-y-5 mb-5 md:grid-cols-4">
                <div className="col-span-3">
                  <label
                    htmlFor="expirtation_date"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    Expiration date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id="expirtation_date"
                    className="text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow outline-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvc"
                    className="block mb-1.5 font-medium text-sm text-gray-900"
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    id="cvc"
                    className="outline-none text-gray-500 text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow"
                    required=""
                  />
                </div>
              </div>

              {/* <div className="flex items-start mb-6">
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
              </div> */}
              {/* <button
                type="submit"
                className="text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Continue
              </button> */}
              {/* <div className="grid grid-cols-1">
              <button
                type="submit"
                className="text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 outline-none focus:ring-cyan-200 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-3 text-center"
              >
                Pay now
              </button>
              </div> */}
            </div>
          </form>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
            <div className="flex flex-col bg-white shadow rounded-lg mt-5">
              <div className="py-6 px-4 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product) => (
                      <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-medium text-gray-900">
                              <h3>
                                <a href={product.href}>{product.name}</a>
                              </h3>
                              <p className="ml-4">{product.price}</p>
                            </div>
                            <p className="mt-1 text-sm font-light text-gray-500">
                              {product.color}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500 font-light">
                              Qty {product.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-cyan-400 hover:text-cyan-300"
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
                    <p className="font-medium">$122.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="font-medium">$5.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Taxes</p>
                    <p className="font-medium">$5.52</p>
                  </div>
                  <hr className="h-[1px] bg-gray-200" />
                  <div className="flex justify-between font-semibold">
                    <p>Total</p>
                    <p>$132.52</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
