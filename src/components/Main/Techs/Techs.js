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
                <ul className="techs__items">
                    <li className="techs__item">
                        <p className="techs__name">HTML</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">CSS</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">JS</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">React</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">Git</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">Express.js</p>
                    </li>
                    <li className="techs__item">
                        <p className="techs__name">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;