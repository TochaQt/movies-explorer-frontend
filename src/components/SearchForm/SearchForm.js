import './SearchForm.css';
import search from '../../images/find-3.svg';

function SearchForm() {
    return (
        <div className="searchform">
            <form className='searchform__form'>
                <div className='searchform__container'>
                <input className='searchform__input' required placeholder='Фильм' type='search'></input>
                <button className='searchform__button' type='submit'>
                    <img className='searchform__button-icon' src={search} alt='search' />
                </button>
                </div>
                <div className='searchform__checkbox'>
                    <label className='checkbox-toggle'>
                        <input type='checkbox' />
                        <span className='slider round'></span>
                    </label>
                    <span className='searchform__checkbox-title'>Короткометражки</span>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;