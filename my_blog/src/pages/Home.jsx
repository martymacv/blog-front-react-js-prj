import { Link } from "react-router-dom";

import Stories from "../components/HomePage/Stories";
import AddPost from "../components/HomePage/AddPost";
import SimplePost from "../components/HomePage/SimplePost";
import VideoPost from "../components/HomePage/VideoPost";
import NormalPost from "../components/HomePage/NormalPost";
import PageNav from "../components/HomePage/PageNav";

function Home() {
  return (
    <div className="mx-12">
        <main className="flex flex-col w-full items-center max-w-150">
            <Stories></Stories>
            <AddPost></AddPost>
            <SimplePost></SimplePost>
            <VideoPost></VideoPost>
            <NormalPost/>
        </main>
        <footer className="my-12 max-w-150">
            <PageNav></PageNav>
        </footer>
    </div>
  );
}

export default Home;