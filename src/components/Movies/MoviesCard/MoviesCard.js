import './MoviesCard.css';
import { Switch, Route } from 'react-router-dom';

function MoviesCard({ card }) {
    // Создаём переменную, которую после зададим для кнопки saved
    const saveButton = card.saved ? 
    (<button type="button" className='card__button-save'></button>) : 
    (<button type="button" className='card__button-saved'></button>);
    return (
        <li className="card">
            <img className="card__img" src={card.link} alt={card.name}/>
            <Switch>
                <Route path="/movies">
                    {saveButton}
                </Route>
                <Route path="/saved-movies">
                    <button type="button" className='card__button-delite'></button>
                </Route>
            </Switch>
            <div className="card__container">
                <h3 className="card__title">{card.name}</h3>
                <div className="card__duration">{card.duration}</div>
            </div>
        </li>
    )
}

export default MoviesCard;