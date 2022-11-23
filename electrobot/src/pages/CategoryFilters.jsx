import { Fragment, useState, useContext } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  StarIcon as StarFillIcon,
} from "@heroicons/react/20/solid";
import { Context } from "../components/logic_components/Context";
import Card from "../components/Card";
import * as Slider from "@radix-ui/react-slider";
import { useEffect } from "react";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  //   { name: 'Trending', href: '#', current: true },
  { name: "Featured", href: "#", current: false },
  { name: "Best Rating", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
// const filters = [
//   {
//     id: "brand",
//     name: "Brand",
//     options: [
//       { value: "arduino", label: "Arduino", checked: false },
//       { value: "sparkfun", label: "Sparkfun", checked: false },
//       { value: "raspberri pi", label: "Raspberri pi", checked: true },
//       { value: "fujitsu", label: "Fujitsu", checked: false },
//     ],
//   },
//   {
//     id: "category",
//     name: "Category",
//     options: [
//       { value: "new-arrivals", label: "New Arrivals", checked: false },
//       { value: "sale", label: "Sale", checked: false },
//       { value: "travel", label: "Travel", checked: true },
//       { value: "organization", label: "Organization", checked: false },
//       { value: "accessories", label: "Accessories", checked: false },
//     ],
//   },
//   {
//     id: "size",
//     name: "Size",
//     options: [
//       { value: "2l", label: "2L", checked: false },
//       { value: "6l", label: "6L", checked: false },
//       { value: "12l", label: "12L", checked: false },
//       { value: "18l", label: "18L", checked: false },
//       { value: "20l", label: "20L", checked: false },
//       { value: "40l", label: "40L", checked: true },
//     ],
//   },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoryFilters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { allData, minPrice, maxPrice } = useContext(Context);
  const [filterData, setFilterData] = useState(allData);
  const [categoryIds, setCategoryIds] = useState([]);
  const [starRating, setStarRating] = useState(null);
  const [changeView, setChangeView] = useState(false);
  const [values, setValues] = useState([minPrice, maxPrice]);

  const all_data = [...allData];

  

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    const slicedVal = [...new Set(newVal)].slice(8);
    property === "subcategory"
      ? (newVal = ["All", ...slicedVal])
      : (newVal = [...new Set(newVal)]);
    return newVal;
  };

  const categoryOnlyData = getUniqueData(allData, "category");
  const subCategoryOnlyData = getUniqueData(allData, "subcategory");
  const brandsOnlyData = getUniqueData(allData, "brand");

  const filters = [
    {
      id: "brand",
      name: "Brand",
      options: brandsOnlyData,
    },
    {
      id: "category",
      name: "Category",
      options: categoryOnlyData,
    },
  ];

  const toggle = () => {
    setChangeView(!changeView);
  };

  const resetState = () => {
    setCategoryIds([]);
    setFilterData([]);
    setStarRating(null);
    setValues([minPrice, maxPrice])
  };

  const updateFilterValue = (event) => {
    resetState();
    let name = event.target.name;
    let value = event.target.value;

    const filterDataArray = filteredData(value);

    setFilterData(filterDataArray);

    return filterDataArray;
  };

  const filteredData = (filterProperty) => {
    let filterArray =
      filterProperty === "All"
        ? all_data.filter((product) => product.category === "sensors")
        : all_data.filter((product) => product.subcategory === filterProperty);
    return filterArray;
  };

  const brandData = (filterBrand) => {
    return all_data.filter(
      (product) =>
        product.brand === filterBrand || product.category === filterBrand
    );
  };

  const handleCategory = (e) => {
    resetState();
    const currentCategoryChecked = e.target.value;
    const allCategoriesChecked = [...categoryIds];
    const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

    let updatedCategoryIds;
    if (indexFound === -1) {
      updatedCategoryIds = [...categoryIds, currentCategoryChecked];
      setCategoryIds(updatedCategoryIds);
    } else {
      updatedCategoryIds = [...categoryIds];
      updatedCategoryIds.splice(indexFound, 1);
      setCategoryIds(updatedCategoryIds);
    }
    const DataArray = updatedCategoryIds.map((item) => brandData(item));
    // const branddata = [...new Set([].concat(...DataArray))] // old of doing it
    const branddata = [...new Set(DataArray.flat())]; // new way of doing it
    branddata.length < 1 ? setFilterData(all_data) : setFilterData(branddata);
  };

  const getSortedProducts = (sortBy) => {
    if (sortBy === "Price: Low to High") {
      return all_data.sort((item1, item2) => item1.price - item2.price);
    }
    if (sortBy === "Price: High to Low") {
      return all_data.sort((item1, item2) => item2.price - item1.price);
    }
    if (sortBy === "Best Rating") {
      return all_data.filter((item) => item.rating === "5");
    }
    if (sortBy === "Featured") {
      return all_data.filter((item) => item.featured);
    }
    if (sortBy === "Most Popular") {
      return all_data.filter((item) => item.trending);
    }
    return allData;
  };

  const manageSort = (e) => {
    resetState();
    const currentValue = e.target.value;
    const sortedProducts = getSortedProducts(currentValue);
    setFilterData(sortedProducts);
  };

  const handleRating = (value) => {
    resetState();
    setStarRating(value);

    const ratedFilter = all_data.filter(
      (item) => Math.floor(Number(item.rating)) === value
    );
    ratedFilter.length > 0
      ? setFilterData(ratedFilter)
      : setFilterData(all_data);
  };

  const handlePrice = (values) => {
    resetState()

    setValues([values[0], values[1]]);

    const filterPricedItem = all_data.filter((item) => (Number(item.price) >= values[0] && Number(item.price) <= values[1]))
    filterPricedItem.length > 0 ? setFilterData(filterPricedItem) : setFilterData(all_data)
  }

  const card = filterData?.map((product) => (
    <Card key={product.id} product={product} />
  ));

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
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
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Sensor Subcategories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategoryOnlyData.map((subcategory) => (
                        <li key={subcategory}>
                          <button
                            type="button"
                            name="subcategory"
                            value={subcategory}
                            onClick={updateFilterValue}
                            className="block px-2 py-3 capitalize"
                          >
                            {subcategory}
                          </button>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div
                                className={`max-h-64 space-y-6 ${
                                  section.options.length > 5
                                    ? "overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-slate-100 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:scrollbar-thumb-cyan-500"
                                    : "overflow-hidden"
                                }`}
                              >
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${option}[]`}
                                      type="checkbox"
                                      value={option}
                                      checked={categoryIds.includes(option)}
                                      className="h-4 w-4 rounded border-gray-300 text-cyan-400 focus:ring-cyan-300"
                                      onChange={handleCategory}
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500 capitalize"
                                    >
                                      {option}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}

                    <div className="border-t border-gray-200 px-4 py-6 flex gap-x-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          type="button"
                          key={i}
                          onClick={() => handleRating(i + 1)}
                          className="cursor-pointer"
                        >
                          {starRating > i ? (
                            <StarFillIcon className="h-6 w-6 text-yellow-400 hover:text-yellow-500 hover:shadow" />
                          ) : (
                            <StarIcon className="h-6 w-6 text-yellow-400 hover:text-yellow-500 hover:shadow" />
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6">
                    <Slider.Root
                    onValueChange={handlePrice}
                    className="flex items-center relative max-w-full slider"
                    value={values}
                    min={0}
                    max={maxPrice}
                    step={5}
                    minStepsBetweenThumbs={1}
                  >
                    <Slider.Track className="h-[3px] bg-gray-200 relative flex-auto">
                      <Slider.Range className="h-[3px] bg-cyan-400" />
                    </Slider.Track>
                    <Slider.Thumb className="shadow-custom hover:bg-cyan-500 block w-4 h-4 bg-white rounded-full outline-cyan-600" />
                    <Slider.Thumb className="shadow-custom hover:bg-cyan-500 block w-4 h-4 bg-white rounded-full outline-cyan-600" />
                  </Slider.Root>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Store
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              type="button"
                              name="sort"
                              value={option.name}
                              onClick={manageSort}
                            >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                onClick={toggle}
              >
                <span className="sr-only">
                  View {changeView ? "List" : "grid"}
                </span>
                {changeView ? (
                  <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategoryOnlyData.map((subcategory) => (
                    <li key={subcategory}>
                      <button
                        type="button"
                        name="subcategory"
                        value={subcategory}
                        onClick={updateFilterValue}
                        className="capitalize"
                      >
                        {subcategory}
                      </button>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div
                            className={`max-h-64 space-y-4 ${
                              section.options.length > 5
                                ? "overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-slate-100 scrollbar-track-rounded-full scrollbar-thumb-rounded-full hover:scrollbar-thumb-cyan-500"
                                : "overflow-hidden"
                            }`}
                          >
                            {section.options.map((option, optionIdx) => (
                              <div key={option} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  value={option}
                                  checked={categoryIds.includes(option)}
                                  className="h-4 w-4 rounded border-gray-300 text-cyan-400 focus:ring-cyan-300"
                                  onChange={handleCategory}
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600 capitalize"
                                >
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}

                <div className="border-b border-gray-200 py-6 flex gap-x-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      type="button"
                      key={i}
                      onClick={() => handleRating(i + 1)}
                      className="cursor-pointer"
                    >
                      {starRating > i ? (
                        <StarFillIcon className="h-6 w-6 text-yellow-400 hover:text-yellow-500 hover:shadow" />
                      ) : (
                        <StarIcon className="h-6 w-6 text-yellow-400 hover:text-yellow-500 hover:shadow" />
                      )}
                    </span>
                  ))}
                </div>

                <div className="border-b border-gray-200 py-6">
                  <Slider.Root
                    onValueChange={handlePrice}
                    className="flex items-center relative max-w-full slider"
                    value={values}
                    min={0}
                    max={maxPrice}
                    step={5}
                    minStepsBetweenThumbs={1}
                  >
                    <Slider.Track className="h-[3px] bg-gray-200 relative flex-auto">
                      <Slider.Range className="h-full block absolute bg-cyan-400" />
                    </Slider.Track>
                    <Slider.Thumb className="shadow-custom hover:bg-cyan-500 block w-4 h-4 bg-gray-50 rounded-full outline-cyan-600" />
                    <Slider.Thumb className="shadow-custom hover:bg-cyan-500 block w-4 h-4 bg-gray-50 rounded-full outline-cyan-600" />
                  </Slider.Root>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8">
                  {card}
                </div>
                {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full" /> */}
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
