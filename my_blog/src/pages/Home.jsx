import Header from "../components/HomePage/Header";
import Sidebar from "../components/sidebar";
import Stories from "../components/HomePage/Stories";
import AddPost from "../components/HomePage/AddPost";
import SimplePost from "../components/HomePage/SimplePost";
import VideoPost from "../components/HomePage/VideoPost";
import NormalPost from "../components/HomePage/NormalPost";

function Home() {
  return (
    <div className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
        <aside className="flex flex-col shadow-sidebar gap-4 min-h-full w-[300px] bg-[#202020ff] items-center">
            <Sidebar/>
        </aside>
        <div className="flex flex-col w-full">
            <header>
                <Header/>
            </header>
            <main className="flex flex-col w-full items-center">
                <Stories></Stories>
                <AddPost></AddPost>
                <SimplePost></SimplePost>
                <VideoPost></VideoPost>
                <NormalPost></NormalPost>
            </main>
            <footer className="h-15"></footer>
        </div>      
    </div>
  );
}

export default Home;