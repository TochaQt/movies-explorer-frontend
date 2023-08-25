import './Movies.css'
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from "../SearchForm/SearchForm";
import SearchInfo from '../SearchInfo/SearchInfo';

function Movies({setPreloader, logged}) {
  const [searchError, setSearchError] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [renderedFilms, setRenderedFilms] = useState([]);
  const [listView, setListView] = useState({
      list: 12,
      more: 3,
  });
  const [searchParams, setSearchParams] = useState({
      shortFilm: false,
      filteredFilms: [],
      key: '',
  });

  useEffect(() => {
      window.addEventListener('resize', resizeWindow);
      if (width < 769 && width > 481) {
        setListView({
          list: 8,
          more: 2,
        });
      }
      if (width < 481 && width > 319) {
        setListView({
          list: 5,
          more: 1,
        });
      }
      return () => {
        window.removeEventListener('resize', resizeWindow);
      };
  }, [width]);

  useEffect(() => {
      const params = JSON.parse(localStorage.getItem('searchParams'));
      if (params) {
        return setSearchParams(params);
      } else {
        setSearchParams({
          shortFilm: false,
          filteredFilms: [],
          key: '',
        });
      }
  }, []);

  useEffect(() => {
    setRenderedFilms(searchParams.filteredFilms.slice(0, listView.list));
    if (searchParams.filteredFilms.length) {
      localStorage.setItem('searchParams', JSON.stringify(searchParams));
    }
  }, [searchParams, listView]);

  function handleShort() {
    setSearchParams({
      ...searchParams,
      shortFilm: !searchParams.shortFilm,
    });
  }

  function handleMoreFilms() {
    setListView({
      ...listView,
      list: listView.list + listView.more,
    });
  }

  function handleKey(event) {
    setSearchParams({
      ...searchParams,
      key: event.target.value,
    });
  }

  function resizeWindow() {
    setWidth(window.innerWidth);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setPreloader(false)
    if (searchParams.key === '') {
      setSearchError('Нужно ввести ключевое слово');
    } else {
      setSearchError('');
      moviesApi.search(searchParams.key, searchParams.shortFilm);
      const filtered = JSON.parse(localStorage.getItem('filtered'));
      if (filtered.length === 0) {
        setSearchError('Ничего не найдено');
      }
      setSearchParams({
        ...searchParams,
        filteredFilms: filtered,
      });
    }
    setPreloader(true)
  }

    return (
        <main className="movies">
            <SearchForm 
                onSubmit={handleSubmit}
                handleShort={handleShort}
                handleKey={handleKey}
                searchKey={searchParams.key}/>
            {searchError ? (
              <SearchInfo error={searchError} />
            ):(
              <MoviesCardList
                  movies={renderedFilms} 
                  handleMoreFilms={handleMoreFilms} 
                  listView={listView.list} 
                  filteredFilms={searchParams.filteredFilms.length} />
            )}
        </main>
    )
}

export default Movies;