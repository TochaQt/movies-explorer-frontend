import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__date">© 2020</p>
                <nav className="footer__links">
                    <a className="footer__link" target='blank' href='https://practicum.yandex.ru/'>Яндекс.Практикум</a>
                    <a className="footer__link" target='blank' href='https://github.com/'>Github</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;