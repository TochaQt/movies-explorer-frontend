import './SearchInfo.css'

export default function SearchInfo({error}) {
    return(
        <article className='search-info'>
            <h1 className='search-info__title'>{error}</h1>
        </article>
    )
}