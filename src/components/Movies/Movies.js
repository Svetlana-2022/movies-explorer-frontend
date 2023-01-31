import React from 'react';
import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function Movies(props) {
    
    return (
        <main className="movies">
            <SearchForm   filterCards={props.filterCards}/>
            <MoviesCardList cards={props.cards} isShowPreloader={props.isShowPreloader} showText={props.showText} savedCards={props.savedCards} onCardSaved={props.onCardSaved} loadCards={props.loadCards}/>
            {props.hasCards ? (
                <div className='card-list__container'>
                    <button onClick={props.loadCards} type="button" className='card-list__button'>Ещё</button>
                </div>
            ) : (
                <div className="saved-movies__devider"></div>
            )}
            
        </main>
    )
}

export default Movies;