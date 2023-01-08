import "./Footer.css"

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__title-container">
                <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            </div>
            <div className="footer__copyright">
                <p className="footer__date">&copy; 2022</p>
                <div className="footer__items">
                    <p className="footer__item">Яндекс.Практикум</p>
                    <p className="footer__item">Github</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;