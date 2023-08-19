import Formauth from '../AurhForm/AuthForm';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
  return (
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
        ></Formauth>
      </section>
    </main>
  );
}

export default Login;