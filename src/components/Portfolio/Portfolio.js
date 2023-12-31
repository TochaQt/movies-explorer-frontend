import './Portfolio.css'

function Portfolio() {
    return(
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <ul className='portfolio__ul'>
                <li className='portfolio__li'><a className="portfolio__link" target='blank' href="https://github.com/TochaQt/how-to-learn"><p className="portfolio__link-text">Статичный сайт</p><p className="portfolio__link-arrow">&#8599;</p></a></li>
                <li className='portfolio__li'><a className="portfolio__link" target='blank' href="https://github.com/TochaQt/russian-travel"><p className="portfolio__link-text">Адаптивный сайт</p><p className="portfolio__link-arrow">&#8599;</p></a></li>
                <li className='portfolio__li'><a className="portfolio__link" target='blank' href="https://github.com/TochaQt/react-mesto-auth"><p className="portfolio__link-text">Одностраничное приложение</p><p className="portfolio__link-arrow">&#8599;</p></a></li>
            </ul>
        </section>
    )
}

export default Portfolio;