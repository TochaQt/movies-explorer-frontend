import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import MainPage from '../MainPage/MainPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import MoviesPage from '../MoviesPage/MoviesPage';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProfilePage from '../ProfilePage/ProfilePage';
import api from '../../utils/MainApi';
import { UserProvider } from '../../utils/UserContext';
import ProtectedRoute from '../../utils/ProtectedRoute';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import './App.css';

function App() {
  const [logged, setLogged] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setPreloader(false);
    api
      .checkToken()
      .then((res) => {
        if (res) {
          setLogged(true);
          navigate(location.pathname);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setPreloader(true));
  }, []);

  useEffect(() => {
    moviesApi
      .get()
      .then((res) => {
        if (res) {
          if (logged) {
            localStorage.setItem('films', JSON.stringify(res));
          }
        }
      })
      .catch((err) => console.log(err));
  }, [logged]);
  
  useEffect(() => {
    api
      .getSavedMovies()
      .then((res) => {
        if (res) {
          if (logged) {
            localStorage.setItem('savedMovies', JSON.stringify(res));
          }
        }
      })
      .catch((err) => console.log(err));
  }, [logged]);

  return (
    <div className="App">
      <Preloader hidden={preloader} />
      <UserProvider logged={logged}>
        <Routes>
          <Route path='/' element={<MainPage 
                          logged={logged}/>}>
            <Route index element={<Main />} />
          </Route>
          <Route path='/' element={<MoviesPage />}>
            <Route path='movies'  element={<ProtectedRoute
                                  element={Movies} 
                                  logged={logged}
                                  setPreloader={setPreloader} />} />
            <Route path='saved-movies' element={<ProtectedRoute 
                                       element={SavedMovies} 
                                       logged={logged} 
                                       setPreloader={setPreloader} />} />
          </Route>
          <Route path='/' element={<ProfilePage />}>
            <Route path='profile' element={<ProtectedRoute
                                  element={Profile}
                                  setLogged={setLogged}
                                  logged={logged}
                                  setPreloader={setPreloader} />} />
          </Route>
          <Route path='/signup' element={<Register 
                                setLogged={setLogged}
                                logged={logged}
                                setPreloader={setPreloader} />} />
          <Route path='/signin' element={<Login 
                                setLogged={setLogged} 
                                logged={logged} 
                                setPreloader={setPreloader} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
