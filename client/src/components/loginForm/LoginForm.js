import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInputChange } from '../../hooks/useInputChange';
import { jwtSignup, jwtSignin } from '../../redux/actions/login';
import './loginForm.scss';

const LoginForm = ({ isSignup }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [loginFormData, setLoginFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const {onInputChange} = useInputChange(loginFormData, setLoginFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
           dispatch(jwtSignup(loginFormData, navigate)); 
        } else {
            dispatch(jwtSignin(loginFormData, navigate));
        }
    }

    return (
        <form 
        onSubmit={handleSubmit}
        className="login-form">
            {!isSignup && (
                <input 
                type="text"
                name="name"
                placeholder='name'
                
                onChange={onInputChange}/>
            )}
            <input 
            type="email"
            name="email"
            placeholder='email'
            
            onChange={onInputChange}/>
            <input 
            type="password"
            name="password"
            placeholder='password'
            
            onChange={onInputChange}/>
            <button type="submit">{isSignup ? 'Войти' : 'Зарегистрироваться'}</button>
            {/* {isSignup ? (
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
            )}  */}
        </form>
    )
}

export default LoginForm