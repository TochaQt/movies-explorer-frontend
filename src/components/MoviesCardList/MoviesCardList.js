import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, handleMoreFilms, listView, filteredFilms, deletefilm}) {
    return (
        <section className="moviescardlist">
            <ul className='moviescardlist__container'>
            {movies.map((film) => {
            return (<li key={film.id || film._id} className='moviescardlist__li'><MoviesCard film={film} deletefilm={deletefilm}/></li>)})}
            </ul>
            {listView < filteredFilms ? (
                <button type='button' className='moviescardlist__button' onClick={handleMoreFilms}>Еще</button>
          ) : null}
        </section>
    )
}

export default MoviesCardList;


