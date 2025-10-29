import { Link } from "react-router-dom"
import Title from "../../components/generals/Title"
import Input from "../../components/generals/Input"
import ActionButton from "../../components/generals/ActionButton"

function ConfirmEmailForm() {
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <form className="flex flex-col gap-5 items-center justify-center w-full">
                <Title>Подтверждение Email</Title>
                <Input 
                    type="text"
                    placeholder="Код подтверждения из Email"
                ></Input>
                <Link to="/">
                    <ActionButton>Подтвердить</ActionButton>
                </Link>
            </form>
        </div>
    )
}

export default ConfirmEmailForm
