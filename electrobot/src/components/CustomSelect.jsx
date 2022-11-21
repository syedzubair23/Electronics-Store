import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export default function CustomSelect({ quantity, id, addQuantity, getItemQuantity }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(1);
  
  const quantity_array = [...Array(quantity).keys()];

  const filteredQuantity =
    query === ""
      ? quantity_array
      : quantity_array.filter((value) =>
          String(value + 1)
            .replace(/\s+/g, "")
            .includes(query.replace(/\s+/g, ""))
        );
  
  return (
    <div className="w-[70px]">
      <Combobox value={getItemQuantity(id)} onChange={(value) => {
        setSelected(value)
        addQuantity(id, value);
      }
        }>
        {console.log("item id :", id, "item quantity :", selected)}
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border outline-cyan-400 rounded-md py-1.5 pl-3 pr-7 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(qt) => qt}
              onChange={(event) => setQuery(event.target.value)}
              />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
                />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options
              className={`
            absolute z-50 mt-1 max-h-40 overflow-auto w-24 rounded-md bg-white py-1 text-sm shadow-md ring-1 ring-cyan-400 ring-opacity-5 focus:outline-none sm:text-sm`}
            >
              {filteredQuantity.length === 0 && query != "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-cyan-900 text-center">
                  {/* Only {people.length} items left */}
                  Nothing found
                </div>
              ) : (
                filteredQuantity.map((qt) => (
                  <Combobox.Option
                    key={qt}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-cyan-400 text-white" : "text-gray-900"
                      }`
                    }
                    value={qt + 1}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {qt + 1}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-cyan-900" : "text-cyan-400"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
