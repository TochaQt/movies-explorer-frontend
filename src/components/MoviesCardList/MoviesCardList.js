import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import movieImg from '../../images/color.jpg'

function MoviesCardList() {
    return (
        <section className="moviescardlist">
            <div className='moviescardlist__container'>
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            <MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} />
            </div>
            <button className='moviescardlist__button'>Еще</button>
        </section>
    )
}

export default MoviesCardList;