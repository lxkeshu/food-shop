import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="px-4 lg:px-6 py-4">
      <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4">
        Find the best food
      </h3>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-4 py-2 font-medium rounded-full text-sm lg:text-base whitespace-nowrap transition-all duration-200 ${
            selectedCategory === "All" 
              ? "bg-green-500 text-white shadow-md" 
              : "bg-gray-100 text-gray-800 hover:bg-green-500 hover:text-white hover:shadow-md"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-4 py-2 font-medium rounded-full text-sm lg:text-base whitespace-nowrap transition-all duration-200 ${
              selectedCategory === category 
                ? "bg-green-500 text-white shadow-md" 
                : "bg-gray-100 text-gray-800 hover:bg-green-500 hover:text-white hover:shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
