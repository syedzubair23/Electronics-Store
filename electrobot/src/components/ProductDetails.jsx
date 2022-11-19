import { Fragment, useState, useContext } from "react";
import {
  CheckIcon,
  HeartIcon as HeartFillIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Tab, Transition } from "@headlessui/react";
import { Context } from "./logic_components/Context";
import { useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import CustomSelect from "./CustomSelect";
import { XMarkIcon } from "@heroicons/react/20/solid";

// const navigation = {
//     categories: [
//       {
//         id: "components",
//         name: "Components",
//         featured: [
//           {
//             name: "Resistors",
//             href: "#",
//             imageSrc:
//               "https://media.gettyimages.com/photos/electronic-component-electric-heating-elements-of-various-models-picture-id1339847300?k=20&m=1339847300&s=612x612&w=0&h=aukuydVEoGuY3m6c8VXpwsIzBsRSivMEBfX2f4ihrvw=",
//             imageAlt: "Resistors",
//           },
//           {
//             name: "Capcitors",
//             href: "#",
//             imageSrc:
//               "https://media.gettyimages.com/photos/collection-of-capacitors-against-a-white-background-picture-id172962646?k=20&m=172962646&s=612x612&w=0&h=ES1R7bMMDkR5r3Xp3CnJD-GJTaWLtL8aQ4e-wi-Aaxo=",
//             imageAlt: "Capacitors",
//           },
//           {
//             name: "Inductors",
//             href: "#",
//             imageSrc:
//               "https://qph.fs.quoracdn.net/main-qimg-d7ec636623ea2d1081f16042a4aabd38-c",
//             imageAlt: "Inductors",
//           },
//           {
//             name: "Leds",
//             href: "#",
//             imageSrc:
//               "https://media.gettyimages.com/photos/high-angle-view-of-led-lights-against-white-background-picture-id1157527318?k=20&m=1157527318&s=612x612&w=0&h=LyjPCH4bSngY-LtXpphg1eKmrfMo0FICYpd_1OTISnM=",
//             imageAlt: "Leds",
//           },
//         ],
//       },
//       {
//         id: "microcontrollers",
//         name: "Microcontrollers",
//         featured: [
//           {
//             name: "Arduino",
//             href: "#",
//             imageSrc:
//               "https://c1.wallpaperflare.com/preview/107/530/442/electronics-arduino-diy.jpg",
//             imageAlt: "Arduino",
//           },
//           {
//             name: "Esp32",
//             href: "#",
//             imageSrc:
//               "https://everybitelectronics.co.uk/wp-content/uploads/2020/04/ESP32.jpg",
//             imageAlt: "Esp32",
//           },
//           {
//             name: "Raspberri pi",
//             href: "#",
//             imageSrc:
//               "https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg",
//             imageAlt: "Raspberri pi",
//           },
//           {
//             name: "Stm32",
//             href: "#",
//             imageSrc:
//               "https://th.bing.com/th/id/OIP.HC9F52kRLNEhyd5W5b0BmQHaHP?pid=ImgDet&rs=1",
//             imageAlt: "Stm32",
//           },
//         ],
//       },
//     ],
//   };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductDetails() {
  const {
    allData,
    addToCart,
    addToFavorite,
    removeFromFavorite,
    favoriteItems,
    addQuantity,
  } = useContext(Context);
  const { id } = useParams();

  const selected_product = allData.filter((item) => item.id === id);

  function heartIcon() {
    const alreadyInFavorite = favoriteItems.some(
      (item) => item.id === selected_product.id
    );
    if (alreadyInFavorite) {
      return (
        <HeartFillIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => removeFromFavorite(selected_product.id)}
        />
      );
    } else {
      return (
        <HeartIcon
          className="h-6 w-6 text-cyan-400 cursor-pointer"
          onClick={() => addToFavorite(selected_product)}
        />
      );
    }
  }

  return (
    <div className="bg-white">
      {selected_product.map((product) => (
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 lg:gap-x-16 lg:grid-cols-5">
            <div className="col-span-3  border border-gray-100 rounded-lg bg-white group-hover:opacity-75 flex items-center">
              <div className="min-h-96 aspect-w-1 aspect-h-1 w-full  overflow-hidden lg:aspect-none lg:h-96">
                <img
                  // src="https://c4.wallpaperflare.com/wallpaper/672/858/376/raspberry-pi-computer-macro-wallpaper-preview.jpg"
                  src={product.url}
                  alt={product.title}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-col gap-y-4">
                <p className="text-sm text-gray-500">
                  <span className="mr-2 capitalize">{product.category}</span>/
                  <span className="ml-2 capitalize">{product.subcategory}</span>
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mt-0.5">
                  {product.title}
                </h2>
                <div className="flex items-center">
                  <h3 className="text-xl text-gray-900 font-medium">
                    ${product.price}
                  </h3>
                  <span
                    className="mx-4 h-6 w-px bg-gray-500"
                    aria-hidden="true"
                  ></span>
                  <div className="flex items-center gap-x-2.5">
                    <div className="flex items-center text-yellow-400">
                      {Array(Math.floor(Number(product.rating)))
                        .fill()
                        .map(() => (
                          <p>
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                          </p>
                        ))}
                    </div>
                    <p className="text-sm text-gray-900 font-medium self-end">
                      {product.reviews} reviews
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-500 text-justify">
                  {product.description}
                </p>
                <div className="flex gap-x-3 items-center mt-1">
                  {product.items_in_stock <= 0 ? (
                    <>
                      <XMarkIcon className="w-5 h-5 text-red-500" />
                      <p className="text-sm text-gray-500">No items in stock</p>
                    </>
                  ) : (
                    <>
                      <CheckIcon className="w-5 h-5 text-green-500" />
                      <p className="text-sm text-gray-500">
                        In stock and ready to ship
                      </p>
                    </>
                  )}
                </div>
                <div className="my-6 grid grid-cols-2 gap-x-6 items-center">
                  <div className="">
                    <button
                      className="outline-none text-center w-full rounded-lg border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500 hover:shadow"
                      onClick={() => addToCart(product)}
                    >
                      Add to Basket
                    </button>
                  </div>
                  <div className="">
                    <button
                      className="outline-none text-center w-full rounded-lg border border-cyan-400 px-6 py-3 text-base font-medium text-cyan-400 shadow-sm hover:bg-cyan-100 hover:text-cyan-900 hover:border-none hover:shadow"
                      onClick={() => addToFavorite(product)}
                    >
                      Add to Wishlist
                    </button>
                  </div>
                  {/* {heartIcon()} */}
                </div>
              </div>
            </div>
          </div>
          <div className="my-32">
            <div className="grid grid-cols-1 gap-y-10 lg:gap-x-16 lg:grid-cols-5">
              <div className="col-span-2 flex flex-col gap-y-3.5">
                <h2 className="font-bold text-2xl">Customer Reviews</h2>
                <div className="flex items-center gap-x-2.5">
                  <div className="flex items-center text-yellow-400">
                    {Array(Math.floor(Number(product.rating)))
                      .fill()
                      .map(() => (
                        <p>
                          <StarIcon className="h-5 w-5 text-yellow-400" />
                        </p>
                      ))}
                  </div>
                  <p className="text-sm text-gray-900 font-medium">
                    Based on {product.reviews} reviews
                  </p>
                </div>
                <div className="flex flex-col gap-y-[20px] mt-4">
                  {product.product_reviews.star_ratings.map((s_rating) => (
                    <div className="flex items-center gap-x-2.5">
                      <p className="text-base font-medium w-3">
                        {s_rating.stars}
                      </p>
                      <div className="">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="mx-1 h-3 w-full bg-gray-100 rounded-full">
                        <div
                          className="h-full rounded-full bg-yellow-400"
                          style={{ width: `${s_rating.percentage}` }}
                        ></div>
                      </div>
                      <p className="text-base font-medium w-16 text-right">
                        {s_rating.percentage}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <h3 className="text-lg font-medium">Share your thoughts</h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-[45ch]">
                    If you've used this product, share your thoughts with other
                    customers
                  </p>
                </div>
                <button
                  disabled={true}
                  className="mt-4 broder-px cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-40 border-cyan-400 text-center w-full rounded-lg border px-6 py-2.5 text-base font-medium text-gray-900 shadow-sm hover:bg-cyan-500"
                >
                  Write a review
                </button>
              </div>
              <div className="col-span-3 flex flex-col">
                {product.product_reviews.customer_reviews.map((c_review, i) => (
                  <div className="flex flex-col gap-y-4">
                    <div className="flex gap-x-3.5 items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-400">
                        <img
                          // src="https://avatars.githubusercontent.com/u/92371583?s=400&u=3bfbe4078a3fd92304b410b05a09a3aeea0c8c9a&v=4"
                          src={c_review.avatar_url}
                          alt="avatar"
                          className="w-full h-full rounded-full object-center object-fill"
                        />
                      </div>
                      <div className="flex flex-col gap-y-1.5">
                        <h3 className="text-sm font-bold text-gray-900">
                          {c_review.customer_name}
                        </h3>
                        <div className="flex items-center text-yellow-400">
                          {Array(Math.floor(Number(c_review.rating)))
                            .fill()
                            .map(() => (
                              <p>
                                <StarIcon className="h-5 w-5 text-yellow-400" />
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-gray-500 italic">
                      {c_review.comments}
                    </p>
                    <hr
                      className={`h-1 text-gray-200 w-full my-12 ${
                        product.product_reviews.customer_reviews.length === 1 ||
                        product.product_reviews.customer_reviews.length - 1 ===
                          i
                          ? "hidden"
                          : "block"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;

{
  /* <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-5 xl:gap-x-8">
            
            
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
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
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
        </div> */
}
