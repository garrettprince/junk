import Head from "next/head";
import KanbanContainer from "../components/KanbanContainer";
import LevelContainer from "../components/LevelContainer";
import MenuButton from "../components/MenuButton";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <main className="">
        <MenuButton />
        <KanbanContainer />
        {/* <LevelContainer /> */}
      </main>
    </div>
  );
}