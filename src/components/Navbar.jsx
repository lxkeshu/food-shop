import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-4 px-4 lg:px-6 mb-6 lg:mb-10 bg-white shadow-sm">
      <div className="mb-4 lg:mb-0">
        <h3 className="text-base lg:text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Food Shop</h1>
      </div>
      <div className="w-full lg:w-auto">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-2 lg:p-3 border border-gray-300 text-sm rounded-lg outline-none w-full lg:w-[25vw] focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-200"
        />
      </div>
    </nav>
  );
};

export default Navbar;
