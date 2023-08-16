import './AboutMe.css'
import photo from '../../images/photo.jpg'

function AboutMe() {
    return(
        <section id='aboutme' className="aboutme">
            <h3 className="aboutme__title">Студент</h3>
            <div className="aboutme__container">
                <div className="aboutme__info">
                    <p className="aboutme__name">Виталий</p>
                    <p className="aboutme__about">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="aboutme__link" target='blank' href="https://github.com/TochaQt">Github</a>
                </div>
                <img className="aboutme__photo" src={photo} alt='photo'></img>
            </div>
        </section>
    )
}

export default AboutMe;