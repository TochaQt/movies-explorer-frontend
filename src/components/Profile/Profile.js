import './Profile.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormValidation from '../../utils/FormValidation';

function Profile(props) {

    return (
        <main className="profile">
            <h1 className="profile__title">Привет, {props.userName}!</h1>
            <form className='profile__form' name='profile'>
                <div className='profile__form-container'>
                    <label className='profile__form-lable'>
                        <span className='profile__form-hint'>Имя</span>
                        <input className='profile__form-input' placeholder={props.userName} type='text'></input>
                    </label>
                    <hr className='profile__form-line'></hr>
                    <label className='profile__form-lable'>
                        <span className='profile__form-hint'>E-mail</span>
                        <input className='profile__form-input' placeholder={props.userEmail} type='email'></input>
                    </label>
                </div>
                <button className='profile__form-submit' type='submit'>Редактировать</button>
            </form>
            <Link to={'/'} className='profile__link'>Выйти из аккаунта</Link>
        </main>
    )
}

export default Profile;