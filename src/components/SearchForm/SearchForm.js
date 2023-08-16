import './SearchForm.css';
import search from '../../images/find-3.svg';

function SearchForm() {
    return (
        <section className="searchform">
            <form className='searchform__form'>
                <input className='searchform__input' placeholder='Фильм'></input>
                <button className='searchform__button'>
                    <img className='searchform__button-icon' src={search} alt='search' />
                </button>
            </form>
      <div className='searchform__checkbox'>
      <label className='checkbox__toggle'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
        <span className='searchform__checkbox-title'>Короткометражки</span>
      </div>
        </section>
    )
}

export default SearchForm;