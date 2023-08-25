import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormValidation from '../../utils/FormValidation';
import api from '../../utils/MainApi';
import { UserContext } from '../../utils/UserContext';
import './Profile.css'

function Profile({setLogged, setPreloader}) {
    const { user, signout, setNewUser } = useContext(UserContext);
    const [data, setData] = useState({
      name: user.name,
      email: user.email, 
    });
    const nav = useNavigate();

    useEffect(() => {
      const validation = new FormValidation();
      validation.enableValidation('profile');
      return () => {
        validation.disableValidation();
      };
    }, []);

    function getValue(event) {
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value,
      });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPreloader(false);
        const form = event.target;
        const inputList = Array.from(form.getElementsByTagName('input'));
        inputList.forEach((input) => (input.disabled = true));
        const formError = form.querySelector('.profile__form-error');
        if (data.email === user.email && data.name === user.name) {
          setPreloader(true);
          inputList.forEach((input) => (input.disabled = false));
          formError.classList.remove('profile__form-error_ok');
          return (formError.textContent = 'Email и Имя не были изменены');
        }
        api
          .updateUser(data)
          .then((res) => {
            if (res) {
              setNewUser(res);
              formError.textContent = 'Данные изменены';
              formError.classList.add('profile__form-error_ok');
            }
          })
          .catch((err) => {
            console.log(err);
            if (err === 409) {
              formError.classList.remove('profile__form-error_ok');
              formError.textContent = 'Этот Email уже занят';
            }
          })
          .finally(() => {
            inputList.forEach((input) => (input.disabled = false));
            setPreloader(true);
          });
    }

    function handleLoguot() {
        api
          .logout()
          .then((res) => {
            setLogged(false);
            nav('/');
            signout();
          })
          .catch((err) => console.log(err));
    }

    return (
        <main className="profile">
            <section className="profile__section">
                <h1 className="profile__title">Привет, {user.name}!</h1>
                <form className='profile__form' name='profile' onSubmit={handleSubmit}>
                    <div className='profile__form-container'>
                    
                        <label className='profile__form-lable'>
                            <span className='profile__form-hint'>Имя</span>
                            <input className='profile__form-input'
                            placeholder={user.name} 
                            type='text'
                            minLength="2"
                            maxLength="40"
                            name='name'
                            onChange={getValue}
                            value={data.name}>
                            </input>
                        </label>
                        <span id='name' className='profile__form-input-error'></span>
                        <hr className='profile__form-line'></hr>
                        <label className='profile__form-lable'>
                            <span className='profile__form-hint'>E-mail</span>
                            <input className='profile__form-input'
                            placeholder={user.email} 
                            type='email'
                            name='email'
                            onChange={getValue}
                            value={data.email}>
                            </input>
                        </label>
                        <span id='email' className='profile__form-input-error'></span>
                    </div>
                    <span className='profile__form-error'></span>
                    <button className='profile__form-submit' type='submit'>Редактировать</button>
                </form>
                <Link to={'/'} className='profile__link' onClick={handleLoguot}>Выйти из аккаунта</Link>
            </section>
        </main>
    )
}

export default Profile;
