import React from "react";
import { categoryData, statusTypes } from "../utils/data";


function CategoryButton({ name, color, onClick }) {
  return (
    <button
      type="button"
      className="rounded-full h-6 w-6 cursor-pointer text-xs font-bold text-transparent transition-all ease-in-out hover:duration-150 hover:w-20  hover:text-white hover:scale-120"
      style={color}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
