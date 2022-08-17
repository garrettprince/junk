import Head from "next/head";
import { useEffect, useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import KanbanContainer from "../components/KanbanContainer";
import LevelContainer from "../components/LevelContainer";
import MenuButton from "../components/MenuButton";
import OptionsMenu from "../components/OptionsMenu";

export default function Home() {
  const [theme, setTheme] = useState(null);

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
    console.log(theme)
  };

  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <main className="dark:bg-zinc-900 h-screen">
        <MenuButton />
        <DarkModeToggle handleThemeSwitch={handleThemeSwitch} />
        <KanbanContainer />
        {/* <LevelContainer /> */}
      </main>
    </div>
  );
}
