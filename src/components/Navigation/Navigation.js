import "./Navigation.css"
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation() {
    return (
        <div className="navigation navigation_type_white">
            <div className="navigation__links">
                <Link to="/movies" className="navigation__link navigation__link_type_white">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__link navigation__link_type_white">Сохранённые фильмы</Link>
            </div>
            <Link to="/profile">
                <img className="navigation__profile" src={profile} alt="аккаунт"/>
            </Link>
        </div>
    ) 
}

export default Navigation;