import "./AboutMe.css";
import photo from "../../../images/about-photo.jpg"

function AboutMe() {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me__title-container">
                <h3 className="about-me__title">Студент</h3>
            </div>
            <div className="about-me__items">
                <div className="about-me__item-text">
                    <h4 className="about-me__item-title">Виталий</h4>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__description">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
                        2015 года работал в компании «СКБ Контур». После того, как прошёл курс по 
                        веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <p className="about-me__text">Github</p>
                </div>
                <div>
                    <img className="about-me__item-photo" src={photo} alt="фото"/>
                </div>
            </div>
            
        </section>
    )
}

export default AboutMe;