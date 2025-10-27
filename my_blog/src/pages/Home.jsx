import { Link } from "react-router-dom";

import Stories from "../components/HomePage/Stories";
import AddPost from "../components/HomePage/AddPost";
import SimplePost from "../components/HomePage/SimplePost";
import VideoPost from "../components/HomePage/VideoPost";
import NormalPost from "../components/HomePage/NormalPost";
import PageNav from "../components/HomePage/PageNav";

function Home() {
  return (
    <>
        <main className="flex flex-col w-full items-center">
            <Stories></Stories>
            <AddPost></AddPost>
            <SimplePost></SimplePost>
            <VideoPost></VideoPost>
            <NormalPost/>
        </main>
        <footer className="p-12">
            <PageNav></PageNav>
        </footer>
    </>
  );
}

export default Home;