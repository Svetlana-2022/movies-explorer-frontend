import "./Portfolio.css";
import arrow from "../../../images/arrow.svg";

function Portfolio() {
    return (
        <section className="portfolio">
            <h6 className="portfolio__title">Портфолио</h6>
            <ul className="portfolio__container">
                <li className="portfolio__subtitle-container">
                    <p className="portfolio__subtitle">Статичный сайт</p>
                    <a href="https://github.com/Svetlana-2022/how-to-learn">
                        <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
                    </a>
                </li>
                <li className="portfolio__subtitle-container">
                    <p className="portfolio__subtitle">Адаптивный сайт</p>
                    <a href="https://github.com/Svetlana-2022/russian-travel">
                        <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
                    </a>
                </li>
                <li className="portfolio__subtitle-container">
                    <p className="portfolio__subtitle">Одностраничное приложение</p>
                    <a href="https://github.com/Svetlana-2022/mesto-react">
                        <img className="portfolio__arrow" src={arrow} alt="стрелка"/>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;