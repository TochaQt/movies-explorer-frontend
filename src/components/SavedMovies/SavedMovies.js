import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import api from '../../utils/MainApi';

function SavedMovies({logged, setPreloader}) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useState({
    key: '',
    shortSwitcher: false,
  });

  useEffect(()=>{
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  })

  useEffect(() => {
    api
      .getSavedMovies()
      .then((res) => {
        if (res) {
          if (logged) {
            localStorage.setItem('savedMovies', JSON.stringify(res));
            setSavedMovies(res);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [logged]);

  function handeleSearch(event) {
    setPreloader(false);
    event.preventDefault();
    let filtered = savedMovies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(searchParams.key) ||
        movie.nameEN.toLowerCase().includes(searchParams.key)
    );
    if (searchParams.shortSwitcher) {
      filtered = filtered.filter(
        (movie) => movie.duration < 40
      );
    }
    setFiltered(filtered);
    setPreloader(true);
  }

  function handleShort() {
    setSearchParams({
      ...searchParams,
      shortSwitcher: !searchParams.shortSwitcher,
    });
  }
  
  function deletefilm (card) {
    setSavedMovies(
      savedMovies.filter(film => {
        return film._id !== card._id
      })
    )
  }

  function handleKey(event) {
    setSearchParams({
      ...searchParams,
      key: event.target.value.toLowerCase(),
    });
  }

    return (
        <main className="savedmovies">
            <SearchForm 
                      onSubmit={handeleSearch}
                      handleKey={handleKey}
                      handleShort={handleShort}/>
            <MoviesCardList movies={filtered.length ? filtered : savedMovies} deletefilm={deletefilm}/>
        </main>
    )
}

export default SavedMovies;