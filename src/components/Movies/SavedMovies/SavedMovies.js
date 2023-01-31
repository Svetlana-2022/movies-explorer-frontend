import React from 'react'
import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
    

    React.useEffect(() => {
        const searchSaved =JSON.parse(localStorage.getItem('searchSaved') || '{"name":"", "isShorts": false}');
        // if (props.savedCards.length === 0) {
            props.filterSavedCards(searchSaved);

        // }
    }, [props.savedCards.length]);

    return (
        <main className="saved-movies">
            <SearchForm filterCards={props.filterSavedCards}/>
            <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved} savedCards={props.savedCards} loadCards={props.loadCards}/>
        </main>
    )
}

export default SavedMovies;