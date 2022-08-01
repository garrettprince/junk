import React from "react";

function CategoryButton({ name, color }) {
  return (
    <button
      className="rounded-full h-6 w-6 cursor-pointer text-xs font-bold text-transparent transition-all ease-in-out hover:duration-150 hover:w-20  hover:text-white"
      style={color}
      onClick={() => {}}
    >
      {name}
    </button>
  );
}

export default CategoryButton;
