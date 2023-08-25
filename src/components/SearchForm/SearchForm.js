import './SearchForm.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import search from '../../images/find-3.svg';

function SearchForm({ formName, onSubmit, handleShort, handleKey, searchKey }) {
    const location = useLocation();

    useEffect(() => {
    if ((location.pathname === '/movies')) {
      const checkbox = document.getElementsByName('short-films')[0];
      const params = JSON.parse(localStorage.getItem('searchParams'));
      params ? checkbox.checked = params.shortFilm : checkbox.checked = false
    }
  }, [location]);
  
    return (
        <section className="searchform">
            <form className='searchform__form' name={formName} onSubmit={onSubmit}>
                <div className='searchform__container'>
                <input className='searchform__input' required placeholder='Фильм' type='search' onChange={handleKey} value={searchKey}></input>
                <button className='searchform__button' type='submit'>
                    <img className='searchform__button-icon' src={search} alt='Поиск' />
                </button>
                </div>
                <div className='searchform__checkbox'>
                    <label className='checkbox-toggle'>
                        <input type='checkbox' name='short-films' onClick={handleShort} />
                        <span className='slider round'></span>
                    </label>
                    <span className='searchform__checkbox-title'>Короткометражки</span>
                </div>
            </form>
        </section>
    )
}

export default SearchForm;