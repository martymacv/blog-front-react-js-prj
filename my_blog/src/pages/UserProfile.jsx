import { Link } from "react-router-dom"
import ActionButton from "../components/generals/ActionButton"
import Input from "../components/generals/Input"
import Title from "../components/generals/Title"
import Avatar from "../components/UserProfile/Avatar"

function UserProfile() {
    return (
        <div className="m-12">
            <div className="flex flex-row flex-wrap gap-x-25 gap-y-7">
                <form className="flex flex-col gap-5 min-w-70">
                    <Title>Профиль</Title>
                    <Input type="username"
                        placeholder="ФИО"></Input>
                    <Input type="email"
                        placeholder="Email"></Input>
                    <Input type="password"
                        placeholder="Новый пароль"></Input>
                    <Input type="password"
                        placeholder="Подтвердите пароль"></Input>
                    <ActionButton>Сохранить</ActionButton>
                </form>
                <div className="flex flex-col justify-center">
                    <Avatar src="../src/assets/images/avatars/profile_avatar.png" alt="" />
                    <Link
                        className="inline-block font-roboto text-[#107effff] text-[14px] leading-[100%] font-normal">
                            выбрать аватар
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
