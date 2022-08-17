import { MoonIcon } from '@heroicons/react/solid'

function DarkModeToggle({ handleThemeSwitch }) {
  return (
    <div className="flex items-center space-x-2 rounded-full p-4 bg-gray-100 absolute top-[6rem] left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95 dark:bg-zinc-800 cursor-pointer" onClick={handleThemeSwitch}>
      <MoonIcon className="h-10 w-10 dark:text-white" />
    </div>
  );
}

export default DarkModeToggle