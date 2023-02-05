import './MoviesCard.css';
import React from "react";
import { Switch, Route } from 'react-router-dom';

function MoviesCard({ card, onCardSaved, savedCards }) {
    // Определяем, сохранена ли карточка
    const savedCard =  savedCards.find(item => item.movieId === card.id);
    const isSaved = savedCard !== undefined  ;

    function handleSavedClick() {
        onCardSaved(card); 
    }
    // Создаём переменную, которую после зададим для кнопки saved
    const saveButton = !isSaved ? 
    (<button type="button" className='card__button-save' onClick={()=>handleSavedClick()}></button>) : 
    (<button type="button" className='card__button-saved' onClick={()=>handleSavedClick()}></button>); 
    
    const newCard = {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.thumbnail || `https://api.nomoreparties.co/${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: card.thumbnail || `https://api.nomoreparties.co/${card.image.url}`,
        movieId: card.id,
        _id: card._id || '',
        nameRU: card.nameRU,
        nameEN: card.nameEN   
      }
    
    return (
        <li className="card">
            <a href={newCard.trailerLink}>
                <img className="card__img" src={newCard.image} alt={newCard.nameRU}/>
            </a>
            <Switch>
                <Route path="/movies">
                    {saveButton}
                </Route>
                <Route path="/saved-movies">
                    <button type="button" className='card__button-delite' onClick={()=>handleSavedClick()}></button>
                </Route>
            </Switch>
            <div className="card__container">
                <h3 className="card__title">{newCard.nameRU}</h3>
                <div className="card__duration">{newCard.duration}</div>
            </div>
        </li>
    )
}

export default MoviesCard;