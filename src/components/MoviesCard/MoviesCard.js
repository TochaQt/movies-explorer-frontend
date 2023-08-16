import { useLocation } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import './MoviesCard.css'

function MoviesCard(props) {
    const location = useLocation().pathname;
    const [active, setActive] = useState(false);

    function handleLikeClick() {
        if (active === false) {
            setActive(true)
        }
        else {setActive(false)}
    }

    return (
        <div className="moviescard" onClick={handleLikeClick}>
            <img src={props.movieImg} className="moviescard__img"></img>
            <div className="moviescard__info">
                <p className="moviescard__name">{props.movieName}</p>
                <p className="moviescard__duration">{props.movieDuration}</p>
            </div>
            <button className={`moviescard__save ${active === true ? 'moviescard__save_active' : ''}`}></button>
        </div>
    )
}

export default MoviesCard;