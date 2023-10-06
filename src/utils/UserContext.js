import { createContext, useState } from 'react';
import { useEffect } from 'react';
import api from './MainApi';

export const UserContext = createContext(null);

export const UserProvider = ({ children, logged }) => {
  const [user, setUser] = useState({});

  function setNewUser (data) {
    setUser(data)
  }

  function signout (){
    setUser({})
    localStorage.removeItem('savedMovies')
    localStorage.removeItem('searchParams')
    localStorage.removeItem('filtered')
    localStorage.removeItem('films')
  }

  useEffect(() => {
    api
      .checkToken()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [logged]);

  const value = {user, logged, signout, setNewUser}

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};