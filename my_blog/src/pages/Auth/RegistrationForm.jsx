import { Link, Form, useActionData, useNavigate } from "react-router-dom"
import { EMAIL_REQUIREMENTS, PASSWORD_REQUIREMENTS, PASSWORD_MATCHED } from "../../constants";
import ActionButton from "../../components/generals/ActionButton";
import Input from "../../components/generals/Input";
import Title from "../../components/generals/Title";
import { useEffect, useState } from "react";

function RegistrationFrom() {
    const actionData = useActionData();
    const navigate = useNavigate();

    useEffect(() => {
        if (actionData?.success) {
            console.log(actionData)
            localStorage.setItem('auth:userId', actionData.user.pk);
            localStorage.setItem('user:isConfirmed', actionData.user.is_comfirmed);
            console.log(localStorage)
            navigate(actionData.redirect);
        }
    }, [actionData, navigate]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [pwdValidation, setPwdValidation] = useState({ base: false });
    const [pwdMatched, setPwdMatched] = useState({ isMatched: false });
    const [emailValidation, setEmailValidation] = useState(false);

    function validatePassword( pwd ) {
        const newValidation = {};
        PASSWORD_REQUIREMENTS.forEach(( req ) => {
            switch(req.type) {
                case (req.required && 'min_length'):
                    newValidation[req.type] = req.validate(pwd);
                    break;
                case (req.required && 'uppercase'):
                    newValidation[req.type] = req.validate(pwd);
                    break;
                case (req.required && 'lowercase'):
                    newValidation[req.type] = req.validate(pwd);
                    break;
                case (req.required && 'digits'):
                    newValidation[req.type] = req.validate(pwd);
                    break;
                case (req.required && 'special_chars'):
                    newValidation[req.type] = req.validate(pwd);
                    break;
                default:
                    newValidation[req.type] = false;
            }
        });
        setPwdValidation(newValidation);
        console.log(pwdValidation)
    };

    function validateEmail( email ) {
        const newValidation = {};
        EMAIL_REQUIREMENTS.forEach(( req ) => {
            switch(req.type) {
                case (req.required && 'emailFormat'):
                    newValidation[req.type] = req.validate(email);
                    break;
                default:
                    newValidation[req.type] = false;
            }
        });
        setEmailValidation(newValidation);
    }

    function validatePasswordMatched( pwd1, pwd2 ) {
        const newValidation = {};
        PASSWORD_MATCHED.forEach(( req ) => {
            switch(req.type) {
                case (req.required && 'isMatched'):
                    newValidation[req.type] = req.validate(pwd1, pwd2);
                    break;
                default:
                    newValidation[req.type] = false;
            }
        });
        setPwdMatched(newValidation);
    }

    function handleEmailChange( event ) {
        const newEmail = event.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    }

    function handlePwdChange( event ) {
        const newPwd = event.target.value;
        setPassword(newPwd);
        validatePassword(newPwd);
    };

    function handlePwd2Change( event ) {
        const newPwd = event.target.value;
        setPassword2(newPwd);
        validatePasswordMatched(password, newPwd);
    };

    const isEmailValid = Object.values(emailValidation).every((value) => value);
    const isPasswordValid = Object.values(pwdValidation).every((value) => value);
    const isPasswordMatched = Object.values(pwdMatched).every((value) => value);

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
                    placeholder="Введите Email"
                    required
                    requirements={EMAIL_REQUIREMENTS}
                    fieldValue={email}
                    state={emailValidation}
                    onChange={handleEmailChange}
                    variant={email ? isEmailValid === true ? 'valid': 'invalid' : 'primary'}
                />
                <Input 
                    type="password"
                    name="password"
                    placeholder="Введите пароль"
                    required
                    requirements={PASSWORD_REQUIREMENTS}
                    fieldValue={password}
                    state={pwdValidation}
                    onChange={handlePwdChange}
                    variant={password ? isPasswordValid === true ? 'valid': 'invalid' : 'primary'}
                    value={password}
                />
                <Input 
                    type="password"
                    name="password2"
                    placeholder="Подтвердите пароль"
                    required
                    requirements={PASSWORD_MATCHED}
                    fieldValue={password2}
                    state={pwdMatched}
                    onChange={handlePwd2Change}
                    variant={password2 ? isPasswordMatched ? 'valid': 'invalid' : 'primary'}
                />
                <ActionButton
                    type="submit"
                    disabled={!(isEmailValid && isPasswordValid && isPasswordMatched)}
                    variant={(isEmailValid && isPasswordValid && isPasswordMatched) ? 'primary' : 'disabled'}
                    >
                    Зарегистрироваться
                </ActionButton>
            </Form>
            <div className="flex flex-row gap-4">
                <Link to={'/recovery/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановление</Link>
                <Link to={'/login/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">вход</Link>
            </div>
        </div>
    );
}

export default RegistrationFrom
