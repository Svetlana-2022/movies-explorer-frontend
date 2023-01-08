import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <ul className="card-list">
            {props.cards.map((card, i) =>{
                return (
                    <MoviesCard
                        key={i}
                        card={card}
                    />
                )
            })}
        </ul>
    )
}

export default MoviesCardList;