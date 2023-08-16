import { Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}>
          <Route index element={<Main />} />
        </Route>
        <Route path='/' element={<MoviesPage />}>
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
        </Route>
        <Route path='/' element={<ProfilePage />}>
          <Route path='profile' element={<Profile userName={'Виталий'} userEmail={'pochta@yandex.ru'} />} />
        </Route>
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
