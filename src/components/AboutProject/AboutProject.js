import "./AboutProject.css"

function AboutProject() {
    return (
        <div id='about-project' className="about-project">
            <h3 className="about-project__title">О проекте</h3>
            <div className="about-project__container">
                <div className="about-project__column">
                    <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__column">
                    <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__time">
                    <div className="about-project__time-line">
                        <div className="about-project__time-backend">1 неделя</div>
                        <div className="about-project__time-frontend">4 недели</div>
                    </div>
                    <div className="about-project__time-description">
                        <p className="about-project__time-description-backend">Back-end</p>
                        <p className="about-project__time-description-frontend">Front-end</p>
                    </div>
                </div>
        </div>
    );
}

export default AboutProject;