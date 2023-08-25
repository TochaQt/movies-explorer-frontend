import Formauth from '../AurhForm/AuthForm';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import api from '../../utils/MainApi';
import './Login.css';

function Login({setLogged, logged, setPreloader}) {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  function handleAuthorization(e) {
    setPreloader(false);
    e.preventDefault();
    const formError = e.target.querySelector('.authform__submit-error');
    api
      .login(data)
      .then((res) => {
        if (res) {
          setLogged(true);
          nav('/movies');
        }
      })
      .catch((err) => {
        if (err === 401) {
          formError.textContent = 'Неверный Email или пароль';
        }
      })
      .finally(setPreloader(true));
  }
  
  function getValue(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  return logged ? (
    <Navigate to={'/'} replace/>)
     : (
    <main className='login'>
      <section className='login__section'>
        <Link to={'/'}><img src={logo} alt='Логотип' className='login__logo'/></Link>
        <Formauth
          linkText='Ещё не зарегистрированы?'
          buttonText='Регистрация'
          url='/signup'
          submitText='Войти'
          formName='login'
          formTitle='Рады видеть!'
          submit={handleAuthorization}
          getValue={getValue}
        ></Formauth>
      </section>
    </main>
  );
}

export default Login;