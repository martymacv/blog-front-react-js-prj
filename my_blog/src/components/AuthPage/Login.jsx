import ActionButton from "../components/generals/ActionButton"
import Input from "../generals/Input"
import Title from "../generals/Title"

function Login() {
    return (
        <form className="flex flex-col gap-5 items-center justify-center max-w-70">
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
        </form>
    )
}

export default Login
