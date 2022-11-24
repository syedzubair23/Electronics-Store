import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pagination() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 sm:mx-2 pb-4 sm:px-6">
      <div className="flex flex-1 justify-between">
        <div className="flex items-center gap-x-3">
          <ArrowLongLeftIcon className="w-6 text-gray-400" />
          <button className="mr-2 relative inline-flex items-center bg-white py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
            Previous
          </button>
        </div>

        <div className="hidden sm:block">
          <Tab.Group>
            <Tab.List className="flex gap-x-1 px-1">
              {[...Array(10)].fill(1).map((page, i) => (
                (i < 4 || (i > 6 && i <= 9)) ? (
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "px-4 py-4 text-sm font-medium leading-5 outline-none",
                      (selected && i != 3)
                        ? "border-cyan-400 text-cyan-400 -mt-[1px] z-10"
                        : "border-transparent text-gray-500 hover:text-gray-600",
                      "flex items-center whitespace-nowrap border-t-2 transition-colors duration-200 ease-out"
                    )
                  }
                >
                  {
                     i === 3 ? "..." : 
                     (i + 1) 
                    }
                </Tab>) : null
              ))}
            </Tab.List>
          </Tab.Group>
          {/* <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            
            Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              10
            </a>
            
          </nav> */}
        </div>

        <div className="flex items-center gap-x-3">
          <button className="relative ml-2 inline-flex items-center bg-white py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
            Next
          </button>
          <ArrowLongRightIcon className="w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
