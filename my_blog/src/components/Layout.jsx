import { Outlet } from "react-router-dom";
import Header from "./HomePage/Header";
import Sidebar from "./HomePage/Sidebar";

function Layout() {
  return (
    <div id="header"className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
        <aside className="flex flex-col shadow-sidebar gap-4 min-h-full w-[300px] bg-[#202020ff] items-center">
            <Sidebar/>
        </aside>
        <div className="flex flex-col w-full">
            <header>
                <Header/>
            </header>
            <Outlet/>
        </div>
    </div>
  );
}

export default Layout;