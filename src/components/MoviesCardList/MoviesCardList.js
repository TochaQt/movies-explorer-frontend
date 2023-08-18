import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import movieImg from '../../images/color.jpg'

function MoviesCardList() {
    return (
        <section className="moviescardlist">
            <ul className='moviescardlist__container'>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
                <li className='moviescardlist__li'><MoviesCard movieName='33 слова о дизайне' movieDuration='1ч 17м' movieImg={movieImg} /></li>
            </ul>
            <button type='button' className='moviescardlist__button'>Еще</button>
        </section>
    )
}

export default MoviesCardList;