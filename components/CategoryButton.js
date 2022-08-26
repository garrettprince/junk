import React from "react";
import { colorData } from "../utils/data";

function CategoryButton({ name, categoryColor, selected, handleClick }) {
  const { color } = colorData.find(
    (c) => c.name === categoryColor
  );

  return (
    <button
      type="button"
      className={`${
        selected ? "w-24 text-white" : "w-6"
      } rounded-full h-6 cursor-pointer text-xs font-extrabold text-transparent transition-all ease-in-out hover:duration-150 hover:w-24 hover:text-white hover:scale-105 active:scale-95`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
