import CloseMenuButton from "./CloseMenuButton";

function Sidebar({ handleSidebarToggle }) {
  return (
    <div className="top-0 left-0 w-96 dark:bg-zinc-800 bg-gray-100 p-10 pl-20 text-white fixed h-full ">
      <CloseMenuButton handleSidebarToggle={handleSidebarToggle} />
    </div>
  );
}

export default Sidebar;
