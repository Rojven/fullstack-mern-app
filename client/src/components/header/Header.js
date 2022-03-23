import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/login';
import './header.scss';

const navLinkStyle = ({ isActive }) => ({color: isActive ? 'red' : 'inherit'});

const navLinksData = [
    {link: '/', text: 'Главная'},
    {link: '/createPost', text: 'Создать'},
    {link: '/account', text: 'Аккаунт'}
];

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('prof')));

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('prof')));
    }, [location]);
    
    const onLogout = () => {
        dispatch(logout());
        navigate('/');
        setUser(null);
    }

    const navLinks = navLinksData.map((navLink, i) => {
        const {link, text} = navLink;
        return (
            <li 
            className="header__link"
            key={i}>
                <NavLink 
                to={link}
                style={navLinkStyle}
                end>
                    {text}
                </NavLink>
            </li>
        )
    })

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper flex">
                    <p className="header__link">
                        <Link to='/'>
                            Blog
                        </Link>
                    </p>
                    <ul className="header__menu flex">
                        {user ? navLinks : null}
                    </ul>
                    <div className='flex'>
                        {user && (
                            <div className='header__auth flex'>
                                <img src={user.data.result.imageUrl} alt="user" className='user-pic'/>
                                <p>{user.data.result.name}</p>
                            </div>
                        )}
                        {user ? (
                            <button 
                            className="header__link header__link_button"
                            onClick={onLogout}>
                               Выход
                            </button>
                        ) : (
                            <button className="header__link header__link_button">
                               <Link to='/login'>Вход</Link>
                            </button>
                        )}
                    </div>  
                </div>
            </div>
        </header>
    )
}

export default Header;