import './Register.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import AuthForm from '../AurhForm/AuthForm';

function Register() {
    return (
        <main className='register'>
            <Link to={'/'}><img src={logo} alt='logo' className='register__logo'/></Link>
            <AuthForm
                linkText='Уже зарегистрированы?'
                buttonText='Войти'
                url='/signin'
                submitText='Зарегистрироваться'
                formName='register'
                formTitle='Добро пожаловать!'
            >
                <label className='authform__lable'>
                <span className='authform__hint'>Имя</span>
                <input 
                name='name' 
                className='authform__input' 
                required 
                minLength="2"
                maxLength="40" 
                placeholder='Виталий'
                type="text">
                </input>
                <span id='name' className='authform__error'></span>
                </label>
            </AuthForm>
        </main>
    )
}

export default Register;