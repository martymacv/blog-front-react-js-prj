import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Stories from "../components/Stories";
import AddPost from "../components/AddPost";

function Home() {
  return (
    <div className="flex flex-row min-h-screen min-w-full bg-[#181818ff]">
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
            </main>
        </div>      
    </div>
  );
}

export default Home;