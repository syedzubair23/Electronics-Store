import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useSearchParams();
  const onSearchChange = debounce((e) => {
    const text = e.target.value;

    if (text.length === 0) {
      search.delete("query");
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set("query", text);
      setSearch(search, {
        replace: true,
      });
    }
  }, 350);

  return (
    <div
      className={"flex gap-x-2 shadow-search items-center pb-2 mr-1 w-36" + (focused ? " hover:shadow-search_focus" : "")}
    >
      <label htmlFor="search" className="block">
        <MagnifyingGlassIcon className={'h-3.5 w-3.5 text-[#777]' + (focused ? " text-cyan-400" : "")} />
      </label>
      <input
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused((focus) => !focus)}
        onChange={onSearchChange}
        // defaultValue={search.get("query") ?? ""}
        id="search"
        name="search"
        className="block w-full text-xs border-none outline-none placeholder:text-xs placeholder:leading-none"
        type="search"
        placeholder="Find items by name..."
      />
    </div>
  );
}

export default SearchBar;
