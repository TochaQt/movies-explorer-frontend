import './Register.css';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import AuthForm from '../AurhForm/AuthForm';
import api from '../../utils/MainApi';

function Register({setLogged, logged, setPreloader}) {
    const nav = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    function getValue(e) {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
    }
    
    function handleRegistration(e) {
        setPreloader(false);
        e.preventDefault();
        const form = e.target;
        const formError = form.querySelector('.authform__submit-error');
        api
          .registration(data)
          .then((res) => {
            if (res) {
              api
                .login(data)
                .then((res) => {
                  if (res) {
                    setLogged(true);
                    nav('/movies');
                  }
                })
                .catch((err) => err);
            }
          })
          .catch((err) => {
            if (err === 400) {
              formError.textContent = 'Введены некорректные данные';
              console.log(123)
            }
            if (err === 409) {
              formError.textContent = 'Этот Email уже зарегистрирован';
              console.log(123)
            }
          })
          .finally(setPreloader(true));
    }
    

    return logged ? (
        <Navigate to={'/'} replace/>
      ) : (
        <main className='register'>
            <section className='register__section'>
                <Link to={'/'}><img src={logo} alt='Логотип' className='register__logo'/></Link>
                <AuthForm
                    linkText='Уже зарегистрированы?'
                    buttonText='Войти'
                    url='/signin'
                    submitText='Зарегистрироваться'
                    formName='register'
                    formTitle='Добро пожаловать!'
                    submit={handleRegistration}
                    getValue={getValue}
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
                    type="text"
                    onChange={getValue}>
                    </input>
                    <span id='name' className='authform__error'></span>
                    </label>
                </AuthForm>
            </section>
        </main>
    )
}

export default Register;