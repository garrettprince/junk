import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "../utils/client";
import CloseMenuButton from "../components/CloseMenuButton";
import DarkModeToggle from "../components/DarkModeToggle";
import KanbanContainer from "../components/KanbanContainer";
import LevelContainer from "../components/LevelContainer";
import MenuButton from "../components/MenuButton";
import OptionsMenu from "../components/OptionsMenu";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase.from("posts").select();
    setPosts(data);
    console.log("data: ", data);
  }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

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
