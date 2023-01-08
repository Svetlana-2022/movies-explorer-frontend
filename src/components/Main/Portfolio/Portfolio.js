import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h6 className="portfolio__title">Портфолио</h6>
            <div className="portfolio__subtitle-container">
                <p className="portfolio__subtitle">Статичный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
            </div>
            <div className="portfolio__subtitle-container">
                <p className="portfolio__subtitle">Адаптивный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
            </div>
            <div className="portfolio__subtitle-container">
                <p className="portfolio__subtitle">Одностраничное приложение</p>
                <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
            </div>
        </section>
    )
}

export default Portfolio;