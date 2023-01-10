import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies(props) {
    return (
        <main className="saved-movies">
            <SearchForm/>
            <MoviesCardList cards={props.cards}/>
            <div className="saved-movies__devider"></div>
        </main>
    )
}

export default SavedMovies;