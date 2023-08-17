import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <main className="notfound">
            <div className='notfound__container'>
                <h1 className="notfound__title">404</h1>
                <h2 className="notfound__subtitle">Страница не найдена</h2>
            </div>
            <Link to={-1} className='notfound__link'>Назад</Link>
        </main>
    )
}

export default NotFound;