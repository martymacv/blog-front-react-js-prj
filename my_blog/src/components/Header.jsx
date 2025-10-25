import { NavLink } from "react-router-dom"

function Header() {
    return (
        <nav className="w-full p-4 bg-[#0d0d0dff] shadow-header">
            <ul className="flex flex-row gap-6">
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
            </ul>
        </nav>
    )
}

export default Header
