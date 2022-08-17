import { MoonIcon } from '@heroicons/react/solid'

function DarkModeToggle({ handleThemeSwitch }) {
  return (
    <div className="flex items-center space-x-2 rounded-full absolute top-[6rem] left-0 m-10 transition ease-in-out transform duration-100 hover:scale-105 active:scale-95 cursor-pointer" onClick={handleThemeSwitch}>
      <MoonIcon className="h-10 w-10 dark:text-white" />
    </div>
  );
}

export default DarkModeToggle