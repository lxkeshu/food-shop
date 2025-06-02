import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-2 h-full">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={img}
          alt={name}
          className="w-full h-[180px] object-cover hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-base lg:text-lg">{name}</h2>
        <span className="text-green-500 font-semibold">₹{price}</span>
      </div>
      <p className="text-sm font-normal text-gray-600 line-clamp-2">{desc}</p>
      <div className="flex justify-between items-center mt-auto pt-2">
        <span className="flex items-center text-sm">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(
              addToCart({ id, name, price, rating, img, qty: 1 })
            );
            handleToast(name);
          }}
          className="px-3 py-1.5 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm transition-colors duration-200"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
