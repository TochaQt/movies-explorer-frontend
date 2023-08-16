import './NavigationLogin.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function NavigationLogin() {
    return (
        <nav className="navigationlogin">
            <Link to={'/'}><img src={logo} alt='logo' className='navigationlogin__logo'/></Link>
            <div className='navigationlogin__container'>
                <Link to='/signup' className='navigationlogin__register'>Регистрация</Link>
                <Link to='/signin' className='navigationlogin__signin'>Войти</Link>`
            </div>
        </nav>
    )
}

export default NavigationLogin;