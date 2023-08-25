import { useLocation } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import api from '../../utils/MainApi';
import './MoviesCard.css'

function MoviesCard({film, deletefilm}) {
  const location = useLocation().pathname;
  const [savedFilms, setSavedFilms] = useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  const [savedMovie, setSavedMovie] = useState(false);
  let image;
  film._id
    ? (image = film.image)
    : (image = `https://api.nomoreparties.co/${film.image.url}`);

  useEffect(() => {
    savedFilms.find((movie) => movie.movieId === film.id) || film.owner
      ? setSavedMovie(true)
      : setSavedMovie(false);
  }, [savedFilms, film]);

function handleLikeClick() {
    if (savedMovie) {
      api
        .deleteMovie(film)
        .then((res) => {
          if (res) {
            setSavedMovie(!savedMovie);
            deletefilm(film)
          }
        })
        .catch((err) => console.log(err));
    } else {
      api
        .saveMovie(film)
        .then((res) => {
          if (res) {
            setSavedMovie(!savedMovie);
          }
        })
        .catch((err) => console.log(err));
    }
}

function handleTrailerClick() {
    window.open(film.trailerLink, '_blank');
}

function calcDuration() {
    const h = Math.round(film.duration / 60);
    const m = film.duration % 60;
    return `${h ? `${h} ч` : ''} ${m} м`;
}

return (
    <div className="moviescard" >
        <img src={image} alt={`Обложка "${film.nameRU}"`} className="moviescard__img" onClick={handleTrailerClick} ></img>
        <div className="moviescard__info">
            <p className="moviescard__name">{film.nameRU}</p>
            <p className="moviescard__duration">{calcDuration()}</p>
        </div>
        <button type='button' onClick={handleLikeClick} className={`moviescard__save ${location==='/saved-movies' ? 'moviescard__save_active_saved' : ''} ${savedMovie === true ? 'moviescard__save_active' : ''}` }></button>
    </div>
)
}

export default MoviesCard;