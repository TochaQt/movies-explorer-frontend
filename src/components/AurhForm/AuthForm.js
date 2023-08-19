import './AuthForm.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormValidation from '../../utils/FormValidation.js';

function AuthForm({
    children,
    linkText,
    buttonText,
    url,
    submitText,
    formName,
    formTitle,
  }) {
    useEffect(() => {
      const validation = new FormValidation();
      validation.enableValidation(formName);
      return () => {
        validation.disableValidation();
      };
    });
    return (
        <form className='authform' name={formName}>
          <div className='authform__container'>
          <h1 className='authform__title'>{formTitle}</h1>
          {children}
          <label className='authform__lable'>
            <span className='authform__hint'>E-mail</span>
            <input 
            name='email' 
            className='authform__input' 
            required 
            placeholder='example@mail.com'
            type='email'
            ></input>
            <span id='email' className='authform__error'></span>
          </label>
          <label className='authform__lable'>
            <span className='authform__hint'>Пароль</span>
            <input
              name='password'
              className='authform__input'
              type='password'
              required
              placeholder='*******'
              minLength="2"
              maxLength="40"
            ></input>
            <span id='password' className='authform__error'></span>
          </label>
          </div>
          <div className='authform__container-submit'>
          <button className='authform__submit' type='submit'>{submitText}</button>
          <span className='authform__link'>
          {linkText}
          <Link to={url} className='authform__link-button'>
            {buttonText}
          </Link>
        </span>
          </div>
        </form>
    );
  }
  
  export default AuthForm;