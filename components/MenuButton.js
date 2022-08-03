import { MenuIcon } from "@heroicons/react/solid";
import React from "react";

function MenuButton() {
  return (
    <button className="absolute top-0 left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95">
      <MenuIcon className="h-10 w-10" />
    </button>
  );
}

export default MenuButton;
