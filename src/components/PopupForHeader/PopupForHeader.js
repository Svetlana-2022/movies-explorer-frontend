import React from "react";
import { Link } from 'react-router-dom';
import './PopupForHeader.css';
import profile from '../../images/profile.svg';

function PopupForHeader(props) {
    const popupClassName = props.isOpen ? 'popup_opened' : '';
    return (
        <div className={`popup ${popupClassName}`}>
            <div className="popup__container">
                <button type="button" className="popup__button" onClick={props.onClose}></button>
                <div className="popup__links">
                    <Link to="/" className="popup__link">Главная</Link>
                    <Link to="/movies" className="popup__link">Фильмы</Link>
                    <Link to="/saved-movies" className="popup__link">Сохранённые фильмы</Link>
                    <Link to="/profile" className="popup__link-profile">
                        <img className="popup__link-img" src={profile} alt="аккаунт"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PopupForHeader;