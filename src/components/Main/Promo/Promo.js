import "./Promo.css";
import promo from "../../../images/promo_logo.svg";

function Promo() {
    return (
        <section className="promo">
            <img className="promo__logo" src={promo} alt="логотип проекта"/>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;