import { Link } from "react-router-dom"
import ActionButton from "../components/generals/ActionButton"
import Input from "../components/generals/Input"
import Title from "../components/generals/Title"

function Auth() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center my-7 px-12 w-full">
            <Title>Вход</Title>
            <Input 
                type="email"
                placeholder="Email"
            ></Input>
            <Input 
                type="password"
                placeholder="Пароль"
            ></Input>
            <Link to="/">
                <ActionButton>Войти</ActionButton>
            </Link>
            <div className="flex flex-row gap-4">
                <Link className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановить</Link>
                <Link className="font-roboto text-white text-[12px] leading-[100%] font-normal">регистрация</Link>
            </div>
        </div>
    )
}

export default Auth
