import { PencilIcon, DuplicateIcon, TrashIcon } from '@heroicons/react/solid'

function OptionsMenu() {
  return (
    <div className="absolute rounded-xl h-40 w-44 bg-gray-100 dark:bg-zinc-800 p-2 flex flex-col justify-between">
      <div className="flex dark:text-white bg-transparent hover:bg-gray-200 dark:bg-transparent dark:hover:bg-zinc-700 cursor-pointer w-full h-11 rounded-lg p-1 items-center px-4 space-x-3">
        <PencilIcon className="h-5 w-5" />
        <p>Edit</p>
      </div>
      <div className="flex dark:text-white bg-transparent hover:bg-gray-200 dark:bg-transparent dark:hover:bg-zinc-700 cursor-pointer w-full h-11 rounded-lg p-1 items-center px-4 space-x-3">
        <DuplicateIcon className="h-5 w-5" />
        <p>Duplicate</p>
      </div>
      <div className="flex dark:text-white bg-transparent hover:bg-gray-200 dark:bg-transparent dark:hover:bg-zinc-700 cursor-pointer w-full h-11 rounded-lg p-1 items-center px-4 space-x-3">
        <TrashIcon className="h-5 w-5" />
        <p>Delete</p>
      </div>
    </div>
  );
}

export default OptionsMenu;
