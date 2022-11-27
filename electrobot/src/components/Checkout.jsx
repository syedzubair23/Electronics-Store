import { useState, useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Context } from "./logic_components/Context";
import { Tab } from "@headlessui/react";
import { useFormik } from "formik";
import { userFormSchema } from "./form_validation_schema/formValidation";
import Subtotal from "./Subtotal";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const delivery_method = [
  { id: 1, delivery: "Standard", business_days: "4-10", charges: "5" },
  { id: 2, delivery: "Express", business_days: "2-5", charges: "16" },
];

let initialValues = {
  email: "",
  first_name: "",
  last_name: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  country: "",
  state_province: "",
  postal_code: "",
  phone: "",
  delivery_Charges: "5",
  card_number: "",
  name_on_card: "",
  expiration_date: "",
  cvc: "",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Checkout() {
  const { cartItems } = useContext(Context);
  const [deliveryCharges, setDeliveryCharges] = useLocalStorage(
    "delivery-charges",
    "5"
  );
  const [formInput, setFormInput] = useLocalStorage(
    "checkout-form",
    initialValues
  );
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm: resetsForm } =
    useFormik({
      initialValues,
      validationSchema: userFormSchema,
      onSubmit: (values, action) => {
        values.delivery_Charges = deliveryCharges;
        action.resetForm();
        navigate("/order-summary", { replace: true });
      },
    });

    useEffect(() => {
      values.email = formInput.email;
      values.first_name = formInput.first_name;
      values.last_name = formInput.last_name;
      values.company = formInput.company;
      values.address = formInput.address;
      values.apartment = formInput.apartment;
      values.city = formInput.city;
      values.country = formInput.country;
      values.state_province = formInput.state_province;
      values.postal_code = formInput.postal_code;
      values.phone = formInput.phone;
      values.delivery_Charges = deliveryCharges;
      values.card_number = formInput.card_number;
      values.name_on_card = formInput.name_on_card;
      values.expiration_date = formInput.expiration_date;
      values.cvc = formInput.cvc;
      return () => {
        values.email = "";
        values.first_name = "";
        values.last_name = "";
        values.company = "";
        values.address = "";
        values.apartment = "";
        values.city = "";
        values.country = "";
        values.state_province = "";
        values.postal_code = "";
        values.phone = "";
        values.delivery_Charges = "5";
        values.card_number = "";
        values.name_on_card = "";
        values.expiration_date = "";
        values.cvc = "";
      };
    }, []);
  
    function resetForm() {
      values.email = "";
      values.first_name = "";
      values.last_name = "";
      values.company = "";
      values.address = "";
      values.apartment = "";
      values.city = "";
      values.country = "";
      values.state_province = "";
      values.postal_code = "";
      values.phone = "";
      values.delivery_Charges = "5";
      values.card_number = "";
      values.name_on_card = "";
      values.expiration_date = "";
      values.cvc = "";
      setFormInput(initialValues);
      resetsForm()
    } 

  useEffect(() => {
    setFormInput(values);
  }, [values, formInput]);

  const subtotal = cartItems
    .reduce(
      (acc, item) =>
        acc +
        (item.items_in_stock > 0 ? Number(item.qty) || 1 : 0) *
          Number(item.price),
      0
    )
    .toFixed(2);
  const shipping_charges = Number(deliveryCharges).toFixed(2);

  const taxes =
    subtotal < 500
      ? ((subtotal * 2.2) / 100).toFixed(2)
      : ((subtotal * 3.12) / 100).toFixed(2);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-2 md:gap-x-16">
            {/* <CheckoutForm /> */}
            <div>
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
                    name="email"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.email ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  ) : null}
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
                      name="first_name"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.first_name ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.first_name && touched.first_name ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.first_name}
                      </p>
                    ) : null}
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
                      name="last_name"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.last_name ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.last_name && touched.last_name ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.last_name}
                      </p>
                    ) : null}
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
                    name="company"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.company ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.company && touched.company ? (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.company}
                    </p>
                  ) : null}
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
                    name="address"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.address ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.address && touched.address ? (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.address}
                    </p>
                  ) : null}
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
                    name="apartment"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.apartment ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.apartment && touched.apartment ? (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.apartment}
                    </p>
                  ) : null}
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
                      name="city"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.city ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="text-xs text-red-500 mt-1">{errors.city}</p>
                    ) : null}
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
                      name="country"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.country ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.country && touched.country ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.country}
                      </p>
                    ) : null}
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
                      name="state_province"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.state_province ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.state_province && touched.state_province ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.state_province}
                      </p>
                    ) : null}
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
                      name="postal_code"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                      value={values?.postal_code ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.postal_code && touched.postal_code ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.postal_code}
                      </p>
                    ) : null}
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
                    name="phone"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow-sm outline-none"
                    value={values?.phone ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  ) : null}
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-lg text-gray-900 font-medium mb-5">
                  Delivery method
                </h2>

                <div>
                  <Tab.Group defaultIndex={deliveryCharges === "16" ? 1 : 0}>
                    <Tab.List className="grid gap-x-4 gap-y-5 mb-5 sm:grid-cols-2">
                      {delivery_method.map((deliveryMethod) => (
                        <Tab
                          onClick={() =>
                            setDeliveryCharges(deliveryMethod.charges)
                          }
                          key={deliveryMethod.id}
                          //   name="delivery_method"
                          className={({ selected }) =>
                            classNames(
                              "bg-white px-4 py-5 rounded-lg shadow outline-none",
                              selected
                                ? "border-2 border-cyan-400 border-opacity-70 shadow-md"
                                : "border-transparent"
                            )
                          }
                        >
                          <div className="group">
                            <div className="flex justify-between items-center">
                              <h3 className="text-sm font-medium text-gray-900">
                                {deliveryMethod.delivery}
                              </h3>
                              <div>
                                <CheckCircleIcon className="h-4 w-4 text-cyan-400" />
                              </div>
                            </div>
                            <p className="text-sm text-gray-400 text-left font-light mt-2">
                              {deliveryMethod.business_days} business days
                            </p>
                            <h3 className="text-sm font-medium text-left text-gray-900 mt-6">
                              ${deliveryMethod.charges}
                            </h3>
                          </div>
                        </Tab>
                      ))}
                    </Tab.List>
                  </Tab.Group>
                </div>
              </div>
              <div className="mt-12">
                <h2 className="text-lg text-gray-900 font-medium mb-5">
                  Credit Card information
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
                    name="card_number"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.card_number ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.card_number && touched.card_number ? (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.card_number}
                    </p>
                  ) : null}
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
                    name="name_on_card"
                    className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200  block w-full p-2.5 shadow-sm outline-none"
                    value={values?.name_on_card ?? ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name_on_card && touched.name_on_card ? (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.name_on_card}
                    </p>
                  ) : null}
                </div>
                <div className="grid gap-x-4 gap-y-5 mb-5 sm:grid-cols-4">
                  <div className="col-span-2 sm:col-span-3">
                    <label
                      htmlFor="expiration_date"
                      className="block mb-1.5 font-medium text-sm text-gray-900"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <input
                      type="text"
                      id="expiration_date"
                      name="expiration_date"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow-sm outline-none"
                      value={values?.expiration_date ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.expiration_date && touched.expiration_date ? (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.expiration_date}
                      </p>
                    ) : null}
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="cvc"
                      className="block mb-1.5 font-medium text-sm text-gray-900"
                    >
                      CVC
                    </label>
                    <input
                      type="password"
                      pattern="[0-9]*"
                      id="cvc"
                      name="cvc"
                      className="text-gray-500 border border-gray-300 focus:border-none text-sm rounded-lg focus:ring-2 focus:ring-cyan-200 block w-full p-2.5 shadow-sm outline-none"
                      value={values?.cvc ?? ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.cvc && touched.cvc ? (
                      <p className="text-xs text-red-500 mt-1">{errors.cvc}</p>
                    ) : null}
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-2 text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 outline-none focus:ring-cyan-200 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  onClick={() => resetForm()}
                >
                  Clear Form
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Shopping cart
              </h2>
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
                      <CartItems />
                    </div>

                    <div className="border-y border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex flex-col gap-y-7 text-sm text-gray-900 font-medium">
                        <div className="flex justify-between">
                          <p>Subtotal</p>
                          <p className="font-medium">
                            ${<Subtotal cartItems={cartItems} />}
                          </p>
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
                          type="button"
                          className="disabled:cursor-not-allowed disabled:opacity-30 outline-none text-center w-full rounded-md border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500"
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
        </form>
      </div>
    </div>
  );
}

export default Checkout;
