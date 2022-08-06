import React, { useState } from "react";
import { categoryData, statusTypes } from "../utils/data";

function CategoryButton({ name, color, onClick, category }) {
  const [categoryTest, setCategoryTest] = useState('');

  const currentCategory = categoryTest

  return (
    <button
      type="button"
      className={`${
        currentCategory === categoryTest
          ? "rounded-full h-6 w-6 cursor-pointer text-xs font-bold text-transparent transition-all ease-in-out hover:duration-150 hover:w-20 hover:text-white hover:scale-105 active:scale-95"
          : "border border-black"
      }`}
      style={color}
      onClick={onClick}
      category={category}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
