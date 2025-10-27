import { NavLink } from "react-router-dom"
import Input from "../generals/Input"

function Header() {
    return (
        <div className="flex flex-row justify-between items-center p-4 bg-[#0d0d0dff] shadow-header">
            <nav className="">
                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink>
                            Главное
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink>
                            Обо мне
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={"/profile/1"}>
                            Профиль
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={"/login"}>
                            Войти
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink 
                className="text-white text-[11px] font-[400] font-roboto uppercase">
                Поиск
            </NavLink>
            <form className="min-w-90 mx-2 hidden"
                action="POST">
                <Input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Поиск по блогу"></Input>
            </form>
        </div>
    )
}

export default Header
