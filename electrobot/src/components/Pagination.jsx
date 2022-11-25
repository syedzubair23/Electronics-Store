import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import { usePagination, DOTS } from "./usePagination";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

//   console.log( paginationRange)

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 pb-4 sm:px-6">
      {/* Left navigation arrow */}
      <button
        className="flex items-center gap-x-3 cursor-pointer disabled:cursor-not-allowed"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <ArrowLongLeftIcon className="w-6 text-gray-400" />
        <p className="mr-2 relative inline-flex items-center bg-white py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
          Previous
        </p>
      </button>

      <ul className="hidden sm:flex">
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={index+"a"} className="px-4 py-4 text-sm font-medium leading-5 outline-none">
                &#8230;
              </li>
            );
          }

          // Render our Page
          return (
            <Tab.Group key={pageNumber}>
              <Tab.List className="flex gap-x-1 px-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "px-4 py-4 text-sm font-medium leading-5 outline-none",
                      pageNumber === currentPage
                        ? "border-cyan-400 text-cyan-400 -mt-[1px] z-10"
                        : "border-transparent text-gray-500 hover:text-gray-600",
                      "flex items-center whitespace-nowrap border-t-2 transition-colors duration-200 ease-out"
                    )
                  }
                  onClick={() => onPageChange(pageNumber)}
                  
                >
                  {pageNumber}
                </Tab>
              </Tab.List>
            </Tab.Group>
          );
        })}
      </ul>
      {/*  Right Navigation arrow */}
      <button
        className="flex items-center gap-x-3 cursor-pointer disabled:cursor-not-allowed"
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <p className="relative ml-2 inline-flex items-center bg-white py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
          Next
        </p>
        <ArrowLongRightIcon className="w-6 text-gray-400" />
      </button>
    </div>
  );
}

