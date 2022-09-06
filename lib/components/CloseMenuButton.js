import { XIcon } from "@heroicons/react/solid";

function CloseMenuButton({ handleSidebarToggle }) {
  return (
    <button
      className="flex items-center space-x-2 rounded-full absolute top-0 left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95"
      onClick={handleSidebarToggle}
    >
      <XIcon className="h-10 w-10 dark:text-white text-black" />
    </button>
  );
}

export default CloseMenuButton;
