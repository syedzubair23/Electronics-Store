

import { Fragment, useState, useContext } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import ShoppingCart from "./ShoppingCart";
import { Context } from "./logic_components/Context";
import { Link, useNavigate } from "react-router-dom";
import {
  Bars3BottomLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  BellIcon
} from "@heroicons/react/24/outline";
import {
  ShoppingBagIcon as ShoppingBagFillIcon,
  HeartIcon as HeartFillIcon,
} from "@heroicons/react/24/solid";
import Subtotal from "./Subtotal";
import CartItems from "./CartItems";


const navigation = {
  categories: [
    {
      id: "components",
      name: "Components",
      featured: [
        // {
        //   id: "fc01",
        //   name: "Resistors",
        //   href: "#",
        //   imageSrc:
        //     "https://media.gettyimages.com/photos/electronic-component-electric-heating-elements-of-various-models-picture-id1339847300?k=20&m=1339847300&s=612x612&w=0&h=aukuydVEoGuY3m6c8VXpwsIzBsRSivMEBfX2f4ihrvw=",
        //   imageAlt: "Resistors",
        // },
        {
          id: "transistors",
          name: "Transistors",
          href: "#",
          imageSrc:
            "https://media.istockphoto.com/id/1057911984/photo/electronic-transistor-isolated.jpg?b=1&s=612x612&w=0&k=20&c=Yo6xShmYmkS-EJzuBrIPk561gqwFcQ63aWgnS8blCLQ=",
          imageAlt: "Transistors",
        },
        {
          id: "capacitors",
          name: "Capacitors",
          href: "#",
          imageSrc:
            "https://media.gettyimages.com/photos/collection-of-capacitors-against-a-white-background-picture-id172962646?k=20&m=172962646&s=612x612&w=0&h=ES1R7bMMDkR5r3Xp3CnJD-GJTaWLtL8aQ4e-wi-Aaxo=",
          imageAlt: "Capacitors",
        },
        {
          id: "inductors",
          name: "Inductors",
          href: "#",
          imageSrc:
            "https://qph.fs.quoracdn.net/main-qimg-d7ec636623ea2d1081f16042a4aabd38-c",
          imageAlt: "Inductors",
        },
        {
          id: "leds",
          name: "Leds",
          href: "#",
          imageSrc:
            "https://media.gettyimages.com/photos/high-angle-view-of-led-lights-against-white-background-picture-id1157527318?k=20&m=1157527318&s=612x612&w=0&h=LyjPCH4bSngY-LtXpphg1eKmrfMo0FICYpd_1OTISnM=",
          imageAlt: "Leds",
        },
      ],
    },
    {
      id: "microcontrollers",
      name: "Microcontrollers",
      featured: [
        {
          id: "arduino",
          name: "Arduino",
          href: "#",
          imageSrc:
            "https://c1.wallpaperflare.com/preview/107/530/442/electronics-arduino-diy.jpg",
          imageAlt: "Arduino",
        },
        {
          id: "esp series",
          name: "Esp series",
          href: "#",
          imageSrc:
            "https://everybitelectronics.co.uk/wp-content/uploads/2020/04/ESP32.jpg",
          imageAlt: "Esp32",
        },
        {
          id: "raspberri pi",
          name: "Raspberri pi",
          href: "#",
          imageSrc:
            "https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg",
          imageAlt: "Raspberri pi",
        },
        {
          id: "stm32",
          name: "Stm32",
          href: "#",
          imageSrc:
            "https://th.bing.com/th/id/OIP.HC9F52kRLNEhyd5W5b0BmQHaHP?pid=ImgDet&rs=1",
          imageAlt: "Stm32",
        },
      ],
    },
    // {
    //   id: "sensors",
    //   name: "Sensors",
    //   featured: [
    //     {
    //       id: "fs01",
    //       name: "Ultrasonic Sensors",
    //       href: "#",
    //       imageSrc:
    //         "https://th.bing.com/th/id/OIP.exqofz-kQaM9nCVoKaUEpQHaHa?pid=ImgDet&rs=1",
    //       imageAlt: "Ultrasonic Sensors",
    //     },
    //     {
    //       id: "fs02",
    //       name: "PH Sensors",
    //       href: "#",
    //       imageSrc:
    //         "data:image/jpeg;base64,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",
    //       imageAlt: "PH Sensors",
    //     },
    //     {
    //       id: "fs03",
    //       name: "Turbidity Sensors",
    //       href: "#",
    //       imageSrc:
    //         "https://th.bing.com/th/id/OIP.XKhJ7HCRaCJdVGHQF2qyswHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    //       imageAlt: "Turbidity Sensors",
    //     },
    //     {
    //       id: "fs04",
    //       name: "Temperature Sensors",
    //       href: "#",
    //       imageSrc:
    //         "https://th.bing.com/th/id/R.903bfae344fb8d10152b963c7800bbb6?rik=n4YNLNtti8PDmw&pid=ImgRaw&r=0",
    //       imageAlt: "Temperature Sensors",
    //     },
    //   ],
    // },
  ],
  pages: [
    { id: "sensors", name: "Sensors", href: "/sensors" },
    { id: "store", name: "Store", href: "/store" }
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, favoriteItems, cartQuantity } =
    useContext(Context);
  
    const navigate = useNavigate()
  
  

  const cartIcon =
    cartItems.length > 0 ? (
      <ShoppingBagFillIcon
        className="h-6 w-6 flex-shrink-0 text-cyan-900"
        aria-hidden="true"
      />
    ) : (
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-cyan-900"
        aria-hidden="true"
      />
    );

  const heartIcon =
    favoriteItems.length > 0 ? (
      <HeartFillIcon
        className="h-6 w-6 flex-shrink-0 text-cyan-900"
        aria-hidden="true"
      />
    ) : (
      <HeartIcon
        className="h-6 w-6 flex-shrink-0 text-cyan-900"
        aria-hidden="true"
      />
    );

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-1 px-2">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "text-cyan-400 border-cyan-400"
                                : "text-gray-900 border-transparent",
                              "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-w-1 aspect-h-1 h-32 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <Link to={`/category/${item.id}`} className="mt-6 block font-medium text-gray-900">
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map((page) => (
                    <div key={page.id} className="flow-root">
                        <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                          {page.name}
                        </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 px-4">
                  <a className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, Canadian currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <div className=" bg-cyan-900">
          <div className="h-10 mx-auto max-w-7xl flex place-content-center lg:place-content-between px-4 text-sm font-medium text-white">
            <div className="hidden lg:flex">
              <a className="flex items-center hover:text-white/90">
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, Canadian currency</span>
              </a>
            </div>

            <p className="flex items-center justify-center text-center sm:px-6 lg:px-8">
              Get free delivery on orders over $100
            </p>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a className="text-sm font-medium hover:text-white/90">
                Sign in
              </a>
              <span className="h-6 w-px bg-gray-400" aria-hidden="true" />
              <a className="text-sm font-medium hover:text-white/90">
                Create account
              </a>
            </div>
          </div>
        </div>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Link to="/">
                <div className="ml-4 flex lg:ml-0">
                  <button>
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto"
                      src="images/Electrobot.svg"
                      alt="Electrobot"
                    />
                  </button>
                </div>
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-cyan-400 text-cyan-400"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-20">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-1 grid grid-cols-4 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center h-full"
                                            />
                                          </div>
                                          <Link to={`/category/${item.id}`} className="mt-6 block font-medium text-gray-900">
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.id}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <BellIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {/* Favorite */}
                <div className="flex ml-4 lg:ml-6">
                  <Link to="/wishlist">
                    <button className="p-2">
                      <span className="sr-only">Favorite</span>
                      {heartIcon}
                    </button>
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  {/* <Tab.Group> */}
                  <button
                    className="group -m-2 flex items-center p-2  relative"
                    onClick={() => setShowCart(true)}
                  >
                    {cartIcon}
                    <span className="ml-2 text-sm font-medium text-cyan-700 group-hover:text-cyan-800">
                      {cartQuantity}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                    <Transition.Root show={showCart} as={Fragment}>
                      <Dialog
                        as="div"
                        className="z-30 relative"
                        onClose={setShowCart}
                      >
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                              <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                              >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                  <div className="flex h-full flex-col overflow-y-scroll scrollbar visible-scrollbar bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto scrollbar-thin visible-scrollbar scrollbar-thumb-cyan-400 scrollbar-track-slate-100 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:scrollbar-thumb-cyan-500 py-6 px-4 sm:px-6">
                                      <div className="flex items-start justify-between">
                                        <Dialog.Title className="text-lg font-medium text-gray-900">
                                          Shopping cart
                                        </Dialog.Title>
                                        <div className="ml-3 flex h-7 items-center">
                                          <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                            onClick={() => setShowCart(false)}
                                          >
                                            <span className="sr-only">
                                              Close panel
                                            </span>
                                            <XMarkIcon
                                              className="h-6 w-6"
                                              aria-hidden="true"
                                            />
                                          </button>
                                        </div>
                                      </div>

                                      {cartItems.length <= 0 ? (
                                        <div className="h-full grid grid-cols-1 place-items-center">
                                          <h2 className="text-2xl text-cyan-900 text-bold text-center px-2">
                                            There is no item in the cart.
                                          </h2>
                                        </div>
                                      ) : (
                                        <div className="mt-8">
                                          <CartItems />
                                        </div>
                                      )}
                                    </div>

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>
                                          ${<Subtotal cartItems={cartItems} />}
                                        </p>
                                      </div>
                                      <p className="mt-0.5 text-sm text-gray-500">
                                        Shipping and taxes calculated at
                                        checkout.
                                      </p>
                                        <div className="mt-6">
                                          <button
                                            disabled={cartItems.length <= 0}
                                            className="flex items-center justify-center disabled:opacity-40 disabled:focus:outline-none disabled:cursor-not-allowed w-full rounded-md border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500"
                                            onClick={() => {
                                              navigate("/checkout");
                                              setShowCart(false)}}
                                          >
                                            Checkout
                                          </button>
                                        </div>
                                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                          or
                                          <span> </span>
                                          <button
                                            type="button"
                                            className="font-medium text-cyan-400 hover:text-cyan-300"
                                            onClick={() => setShowCart(false)}
                                          >
                                            Continue Shopping
                                            <span aria-hidden="true">
                                              {" "}
                                              &rarr;
                                            </span>
                                          </button>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </div>
                      </Dialog>
                    </Transition.Root>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

