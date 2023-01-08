import "./NavTab.css";

function NavTab() {
    return (
        <div className="nav">
            <ul className="nav__links">
                <li><a className="nav__link" href="#about">О проекте</a></li>
                <li><a className="nav__link" href="#techs">Технологии</a></li>
                <li><a className="nav__link" href="#about-me">Студент</a></li>
            </ul>
        </div>
    )
}

export default NavTab;