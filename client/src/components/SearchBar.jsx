import React from "react";
import { IoSearch } from "react-icons/io5";
import { actionType } from "../Context/reducer";
import { useStateValue } from "../Context/StateProvider";

const SearchBar = () => {
  const [{ searchTerm }, dispatch] = useStateValue();

  const setSearchTerm = (value) => {
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      searchTerm: value,
    });
  };

  return (
    <div className="w-full px-4 my-4 h-16 bg-card flex items-center justify-center">
      <div className="w-full gap-4 p-4 md:w-2/3 bg-primary shadow-xl mt-12 rounded-md flex items-center ring-2 ring-violet-600 ring-opacity-60">
        <IoSearch className="text-2xl text-textColor" />
        <input
          type="text"
          value={searchTerm}
          className="w-full h-full bg-transparent text-lg text-textColor  border-none outline-none "
          placeholder="Search here ...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
