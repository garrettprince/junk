import React from "react";

function CategoryButton({ name, color, selected, handleClick }) {
  return (
    <button
      type="button"
      className={`${selected ? 'w-24 text-white' : 'w-6'} rounded-full h-6 cursor-pointer text-xs font-extrabold text-transparent transition-all ease-in-out hover:duration-150 hover:w-24 hover:text-white hover:scale-105 active:scale-95`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
