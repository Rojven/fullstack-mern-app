import { useState } from 'react';
import { LoginForm, GoogleAuth } from '../../components';
import './login.scss';

const Login = () => {

    const [isSignup, setIsSignup] = useState(false);

    const onFormsToggle = () => setIsSignup(!isSignup)

    return (
        <section className="login">
            <h1>{isSignup ? 'Войти' : 'Регистрация'}</h1>
            <LoginForm isSignup={isSignup} setIsSignup={setIsSignup}/>
            <GoogleAuth/>
            <button onClick={onFormsToggle}>
                {isSignup ? 'Создать аккаунт' : 'Уже есть аккаунт'}
            </button>
        </section>
    )
}

export default Login;