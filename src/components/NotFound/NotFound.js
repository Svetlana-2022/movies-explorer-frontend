import React from "react";
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {
    const notFoundClassName = props.isOpen ? 'not-found_opened' : 'not-found';
    return(
        <div className={notFoundClassName}>
            <div className="not-found__content">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__subtitle">Страница не найдена</p>
                <div className='not-found__container-link'>
                    <Link to="/" className="not-found__link">Назад</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;