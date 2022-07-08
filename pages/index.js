import Head from "next/head";
import { useState, useEffect } from "react";
import { supabase } from "../utils/client";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });

  return (
    <div>
      <Head>
        <title>Junk</title>
      </Head>
      <main>Test</main>
    </div>
  );
}
