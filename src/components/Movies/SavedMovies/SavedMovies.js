import React from 'react'
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {

    return (
        <main className="saved-movies">
            <SearchForm filterCards={props.filterSavedCards} isUpdateSearch={props.isUpdateSearch}/>
            <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved} savedCards={props.savedCards} loadCards={props.loadCards}/>
        </main>
    )
}

export default SavedMovies;