import './Techs.css';

function Techs() {
    return(
        <section id='techs' className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="techs__list-container">
                    <p className="techs__list-tech">HTML</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">CSS</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">JS</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">React</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">Git</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">Express.js</p>
                </li>
                <li className="techs__list-container">
                    <p className="techs__list-tech">mongoDB</p>
                </li>
            </ul>
        </section>
    )
}

export default Techs;