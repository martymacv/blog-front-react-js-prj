import { Link, Form, useNavigate } from "react-router-dom";
import Title from "../../components/generals/Title";
import ActionButton from "../../components/generals/ActionButton";

function LogoutForm() {
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <Form 
                className="flex flex-col gap-5 items-center justify-center w-full"
                method="POST"
                action="/auth/logout"
                >
                <Title>Подтвердите выход</Title>
                <ActionButton
                    type="submit"
                    >Выйти</ActionButton>
                <Link to="/">
                    <ActionButton
                        type="submit"
                        >Остаться</ActionButton>
                </Link>
            </Form>
        </div>
    );
}

export default LogoutForm
