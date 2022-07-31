import React from "react";

function CategoryButton({ name, style }) {
  return (
    <div className="rounded-full h-6 w-6 cursor-pointer text-xs font-bold text-transparent transition-all hover:w-20  hover:text-white hover:px-auto hover:py-auto" style={style}>{name}</div>
  );
}

export default CategoryButton;
