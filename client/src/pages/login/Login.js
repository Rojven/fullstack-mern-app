import { LoginForm } from '../../components';
import './login.scss';

const Login = () => {

    const isSignup = false;

    return (
        <section className="login">
            <h1>{isSignup ? 'Sign in' : 'Sigh up'}</h1>
            <LoginForm isSignup={isSignup}/>
        </section>
    )
}

export default Login;