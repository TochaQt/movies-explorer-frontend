import { Link, useLocation } from 'react-router-dom';
import './NavigationMovies.css';
import logo from '../../images/logo.svg';

function NavigationMovies() {
  const location = useLocation().pathname;
  function openBurger() {
    document.querySelector('.header').classList.toggle('active');
    document
      .querySelector('.navigationmovies__burger-container')
      .classList.toggle('navigationmovies__burger-container_active');
    document.querySelector('.navigationmovies__burger-button').classList.toggle('navigationmovies__burger-button_active');
  }

  return (
    <div className='navigationmovies'>
      <Link to={'/'}><img src={logo} alt='Логотип' className='navigationmovies__logo'/></Link>
    <div className='navigationmovies__burger-container'>
      <button type='button' className='navigationmovies__burger-button' onClick={openBurger}>
        <span></span>
      </button>
      <nav className='navigationmovies__main'>
        <ul className='navigationmovies__container'>
          <li className='navigationmovies__item'>
            <Link to='/' className='navigationmovies__link navigationmovies__link_home' onClick={openBurger}>Главная</Link>
          </li>
          <li className='navigationmovies__item'>
            <Link to='/movies'className={`navigationmovies__link navigationmovies__link_film ${location === '/movies' ? 'navigationmovies__link_active' : ''}`} onClick={openBurger}> Фильмы</Link>
          </li>
          <li className='navigationmovies__item'>
            <Link to='/saved-movies' className={`navigationmovies__link navigationmovies__link_saved-film ${location === '/saved-movies' ? 'navigationmovies__link_active' : ''}`} onClick={openBurger}>Сохраненные фильмы</Link>
          </li>
          <li className='navigationmovies__item'>
            <Link to='/profile' className='navigationmovies__link navigationmovies__link_account'>Аккаунт</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default NavigationMovies;