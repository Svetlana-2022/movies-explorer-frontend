import "./AboutProject.css";

function AboutProject() {
    return (
        <section id="about" className="about">
            <div className="about__title-container">
                <h3 className="about__title">О проекте</h3>
            </div>
            <div className="about__items">
                <div className="about__item">
                    <h4 className="about__item-title">Дипломный проект включал 5 этапов</h4>
                    <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__item">
                    <h4 className="about__item-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__container">
                <div>
                    <p className="about__term about__term_type_green">1 неделя</p>
                    <p className="about__caption">Back-end</p>
                </div>
                <div>
                    <p className="about__term about__term_type_grey">4 недели</p>
                    <p className="about__caption">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;