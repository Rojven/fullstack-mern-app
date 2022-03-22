import { NavLink, Link } from 'react-router-dom';
import { IoMdExit } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';
import './header.scss';

const navLinkStyle = ({ isActive }) => ({color: isActive ? 'red' : 'inherit'});

const navLinksData = [
    {link: '/', text: 'Главная'},
    {link: '/createPost', text: 'Создать'},
    {link: '/account', text: 'Аккаунт'}
];

const Header = () => {

    const user = null;

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

    const headerBtns = user 
    ? ( 
        <div>
            {/* <p>{user.result.name.charAt(0)}</p> */}
            {/* <MdOutlineAccountCircle/> */}
            Выход
        </div>
    ) : ( 
        <div>
            <Link to='/login'>Вход</Link>
           {/*  <IoMdExit/> */}
        </div>
    )
 
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
                    <button className="header__link header__link_button">
                        {headerBtns}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;