import "./Techs.css";

function Techs() {
    return (
        <section id="techs" className="techs">
            <div className="techs__title-container">
                <h3 className="techs__title">Технологии</h3>
            </div>
            <div className="techs__content">
                <h4 className="techs__item-title">7 технологий</h4>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__items">
                    <div className="techs__item">
                        <p className="techs__name">HTML</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">CSS</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">JS</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">React</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">Git</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">Express.js</p>
                    </div>
                    <div className="techs__item">
                        <p className="techs__name">mongoDB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;