import './Techs.css';

function Techs() {
    return(
        <section id='techs' className="techs">
            <h3 className="techs__title">Технологии</h3>
            <h2 className="techs__subtitle">7 технологий</h2>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__list">
                <div className="techs__list-container">
                    <p className="tecs__list-tech">HTML</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">CSS</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">JS</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">React</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">Git</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">Express.js</p>
                </div>
                <div className="techs__list-container">
                    <p className="tecs__list-tech">mongoDB</p>
                </div>
            </div>
        </section>
    )
}

export default Techs;