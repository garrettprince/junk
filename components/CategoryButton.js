import React from "react";

function CategoryButton({ name, color, selected, handleClick }) {
  return (
    <button
      type="button"
      className={`${selected ? 'w-20 text-white' : 'w-6'} rounded-full h-6 cursor-pointer text-xs font-bold text-transparent transition-all ease-in-out hover:duration-150 hover:w-20 hover:text-white hover:scale-105 active:scale-95`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
