import { Link } from "react-router-dom"

import ActionButton from "../../components/generals/ActionButton";
import Input from "../../components/generals/Input";
import Title from "../../components/generals/Title";

function RecoveryForm() {
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <form className="flex flex-col gap-5 items-center justify-center w-full">
                <Title>Восставновление</Title>
                <Input 
                    type="email"
                    placeholder="Email"
                ></Input>
                <Link to="/">
                    <ActionButton>Восстановить</ActionButton>
                </Link>
            </form>
            <div className="flex flex-row gap-4">
                <Link to={'/login/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">вход</Link>
                <Link to={'/registration/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">регистрация</Link>
            </div>
        </div>
    );
}

export default RecoveryForm
