import React from "react";
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return(
        <div className='not-found'>
            <div className="not-found__content">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">Страница не найдена</p>
                <Link to="/" className='not-found__container-link'>
                    <div className="not-found__link">Назад</div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;