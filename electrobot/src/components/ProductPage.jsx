import { Fragment, useState, useContext } from "react";
import {
  HomeIcon,
  CheckIcon,
  HeartIcon as HeartFillIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Tab } from "@headlessui/react";
import { Context } from "./logic_components/Context";
import { useNavigate, useParams } from "react-router-dom";
import { HeartIcon } from "@heroicons/react/24/outline";
import CustomSelect from "./CustomSelect";
import { XMarkIcon } from "@heroicons/react/20/solid";
import FeaturedProducts from "./FeaturedProducts"
// import {HomeIcon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductPage() {
  const {
    allData,
    addToCart,
    addToFavorite,
    removeFromFavorite,
    favoriteItems,
    addQuantity,
    heartIcon
  } = useContext(Context);
  const { Id: id } = useParams();
  const navigate=useNavigate();

  const selected_product = allData.filter((item) => item.id === id);


  return (
    <div className="bg-white">
      {selected_product.map((product) => (
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 border-b border-gray-100">
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
                <div className="text-sm text-gray-500 flex items-center gap-x-2 capitalize">
                    <HomeIcon className="h-4 w-4 text-center hover:text-gray-400 cursor-pointer" onClick={() => navigate("/")} />/
                  <p className="cursor-pointer hover:underline" onClick={() => navigate(`/${product.category}`, {replace: true})}>{product.category}</p>/
                  <p className="cursor-pointer hover:underline" onClick={() => navigate(`/${product.category}/${product.subcategory}`, {replace: true})}>{product.subcategory}</p>
                </div>
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
                <div className="my-6 flex gap-x-6 items-center justify-start">
                  <div className="w-64">
                    <button
                      className="outline-none text-center w-full rounded-lg border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-500"
                      onClick={() => addToCart(product)}
                    >
                      Add to Basket
                    </button>
                  </div>
                  {heartIcon(product)}
                </div>
              </div>
            </div>
          </div>

          <div className="my-32 w-full">
          <Tab.Group>
        <Tab.List className="flex space-x-6 px-4 border-b border-gray-200">
            <Tab
              className={({ selected }) =>
                classNames(
                  'px-8 py-4 text-base font-medium leading-5 text-cyan-400',
                  selected
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-gray-700 hover:text-gray-800",
                    "flex items-center whitespace-nowrap border-b-2 transition-colors duration-200 ease-out"
                )
              }
            >
              Reviews
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'px-8 py-4 text-base font-medium leading-5 text-cyan-400',
                  selected
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-gray-700 hover:text-gray-800",
                    "flex items-center whitespace-nowrap border-b-2 transition-colors duration-200 ease-out"
                )
              }
            >
              Description
            </Tab>
        </Tab.List>
        <Tab.Panels className="mt-16">
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-white'
              )}
            >
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
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                'rounded-xl bg-gray-100 p-3'
              )}
            >
              <div className="py-24 bg-gray-100">
                <p className="text-lg text-gray-500 mx-auto max-w-prose pl-4 border-l-8 rounded-md border-cyan-900">
                    {product.description}
                </p>
              </div>
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
          </div>
        </div>
      ))}
      <FeaturedProducts />
    </div>
  );
}

export default ProductPage;

