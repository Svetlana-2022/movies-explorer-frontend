import './Movies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function Movies(props) {
    return (
        <section className="movies">
            <SearchForm/>
            <MoviesCardList cards={props.cards}/>
            <div className='card-list__container'>
                <button type="button" className='card-list__button'>Ещё</button>
            </div>
        </section>
    )
}

export default Movies;