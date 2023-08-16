import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
    return (
        <section className="savedmovies">
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default SavedMovies;