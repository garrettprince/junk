import { MenuIcon } from "@heroicons/react/solid";
import React from "react";

function MenuButton({ handleSidebarToggle }) {
  return (
    <button
      className="flex items-center space-x-2 rounded-full absolute top-0 left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95"
      onClick={handleSidebarToggle}
    >
      <MenuIcon className="h-10 w-10 dark:text-white" />
    </button>
  );
}

export default MenuButton;
