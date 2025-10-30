import { Link, Form, useActionData } from "react-router-dom"

import ActionButton from "../../components/generals/ActionButton";
import Input from "../../components/generals/Input";
import Title from "../../components/generals/Title";

function LoginForm() {
    const actionData = useActionData();
    console.log(actionData);
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <Form 
                className="flex flex-col gap-5 items-center justify-center w-full"
                method="POST"
                action="/auth/login"
                >
                <Title>Вход</Title>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Email"
                ></Input>
                <Input 
                    type="password"
                    name="password"
                    placeholder="Пароль"
                ></Input>
                <ActionButton
                    type="submit"
                    >Войти</ActionButton>
            </Form>
            <div className="flex flex-row gap-4">
                <Link to={'/recovery/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановление</Link>
                <Link to={'/registration/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">регистрация</Link>
            </div>
        </div>
    );
}

export default LoginForm
