import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "../lib/utils/client";
import CloseMenuButton from "../lib/components/CloseMenuButton";
import DarkModeToggle from "../lib/components/DarkModeToggle";
import KanbanContainer from "../lib/components/KanbanContainer";
import LevelContainer from "../lib/components/LevelContainer";
import MenuButton from "../lib/components/MenuButton";
import OptionsMenu from "../lib/components/OptionsMenu";
import Sidebar from "../lib/components/Sidebar";

export default function Home() {
  const [theme, setTheme] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  // Dark Mode useEffect hooks
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  const handleSidebarToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <main className="dark:bg-zinc-900 h-screen">
        {!sidebar ? (
          <MenuButton handleSidebarToggle={handleSidebarToggle} />
        ) : (
          <div>
            {/* <CloseMenuButton handleSidebarToggle={handleSidebarToggle} /> */}
            <Sidebar handleSidebarToggle={handleSidebarToggle} />
          </div>
        )}

        {/* <MenuButton handleSidebarToggle={handleSidebarToggle} /> */}
        {/* <DarkModeToggle handleThemeSwitch={handleThemeSwitch} /> */}
        <KanbanContainer />
        {/* <LevelContainer /> */}
      </main>
    </div>
  );
}
