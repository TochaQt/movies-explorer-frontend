import { Link, useLocation } from 'react-router-dom';
import './NavigationMovies.css';
import logo from '../../images/logo.svg';

function NavigationMovies() {
  const location = useLocation().pathname;
  function openBurger() {
    document.querySelector('.header').classList.toggle('active');
    document
      .querySelector('.burger__container')
      .classList.toggle('burger__container_active');
    document.querySelector('.burger__button').classList.toggle('active');
  }

  return (
    <div className='navigationmovies'>
      <Link to={'/'}><img src={logo} alt='logo' className='navigationmovies__logo'/></Link>
    <div className='burger__container'>
      <div className='burger__button' onClick={openBurger}>
        <span></span>
      </div>
      <nav className='navigationmovies__main'>
        <ul className='navigationmovies__container'>
          <li className='navigationmovies__item'>
            <Link to='/' className='navigationmovies__link navigationmovies__link_home' onClick={openBurger}>Главная</Link>
          </li>
          <li className='navigationmovies__item'>
            <Link to='/movies'className={`navigationmovies__link navigationmovies__link_film ${location === '/movies' ? 'link_active' : ''}`} onClick={openBurger}> Фильмы</Link>
          </li>
          <li className='navigationmovies__item'>
            <Link to='/saved-movies' className={`navigationmovies__link navigationmovies__link_saved-film ${location === '/saved-movies' ? 'link_active' : ''}`} onClick={openBurger}>Сохраненные фильмы</Link>
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