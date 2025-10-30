import { Link, Form, useActionData, useNavigate } from "react-router-dom"

import ActionButton from "../../components/generals/ActionButton";
import Input from "../../components/generals/Input";
import Title from "../../components/generals/Title";
import { useEffect } from "react";

function RegistrationFrom() {
    const actionData = useActionData();
    const navigate = useNavigate();

    useEffect(() => {
        if (actionData?.success) {
            console.log(actionData)
            localStorage.setItem('userId', actionData.user.pk);
            localStorage.setItem('isConfirmed', actionData.user.is_comfirmed);
            console.log(localStorage)
            navigate(actionData.redirect);
        }
    }, [actionData, navigate]);

    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <Form 
                className="flex flex-col gap-5 items-center justify-center w-full"
                method="POST" 
                action="/auth/registration"
                >
                <Title>Регистрация</Title>
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
                <Input 
                    type="password"
                    name="password2"
                    placeholder="Подтвердите пароль"
                ></Input>
                {/* <Link to="/auth/confirm-email"> */}
                    <ActionButton
                        type="submit"
                        // onClick={createUser}
                        >Регистрация</ActionButton>
                {/* </Link> */}
            </Form>
            <div className="flex flex-row gap-4">
                <Link to={'/recovery/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановление</Link>
                <Link to={'/login/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">вход</Link>
            </div>
        </div>
    );
}

export default RegistrationFrom
