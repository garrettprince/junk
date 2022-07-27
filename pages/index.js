import Head from "next/head";
import { useState, useEffect } from "react";
import KanbanContainer from "../components/KanbanContainer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <KanbanContainer />
    </div>
  );
}
