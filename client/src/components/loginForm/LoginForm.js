import './loginForm.scss';

const LoginForm = ({ isSignup }) => {

    const handleSubmit = () => {

    }

    return (
        <form 
        onSubmit={handleSubmit}
        className="login-form">
            {isSignup ? (
                <>
                    <input 
                    type="email"
                    name="email"
                    placeholder='email'/>
                    <input 
                    type="password"
                    name="password"
                    placeholder='password'/>
                    <button type="submit">Войти</button>
                </>
            ) : (
                <>
                    <input 
                    type="text"
                    name="name"
                    placeholder='name'/>
                    <input 
                    type="email"
                    name="email"
                    placeholder='email'/>
                    <input 
                    type="password"
                    name="password"
                    placeholder='password'/>
                    <button type="submit">Зарегистрироваться</button>
                </>
            )} 
        </form>
    )
}

export default LoginForm