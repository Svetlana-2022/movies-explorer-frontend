import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function Movies(props) {
    return (
        <main className="movies">
            <SearchForm/>
            <MoviesCardList cards={props.cards}/>
            <div className='card-list__container'>
                <button type="button" className='card-list__button'>Ещё</button>
            </div>
        </main>
    )
}

export default Movies;