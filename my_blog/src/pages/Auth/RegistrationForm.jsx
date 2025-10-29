import { Link } from "react-router-dom"

import ActionButton from "../../components/generals/ActionButton";
import Input from "../../components/generals/Input";
import Title from "../../components/generals/Title";

function RegistrationFrom() {
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <form className="flex flex-col gap-5 items-center justify-center w-full">
                <Title>Регистрация</Title>
                <Input 
                    type="email"
                    placeholder="Email"
                ></Input>
                <Input 
                    type="password"
                    placeholder="Пароль"
                ></Input>
                <Input 
                    type="password"
                    placeholder="Подтвердите пароль"
                ></Input>
                <Link to="/auth/confirm-email">
                    <ActionButton>Регистрация</ActionButton>
                </Link>
            </form>
            <div className="flex flex-row gap-4">
                <Link to={'/recovery/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановление</Link>
                <Link to={'/login/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">вход</Link>
            </div>
        </div>
    );
}

export default RegistrationFrom
