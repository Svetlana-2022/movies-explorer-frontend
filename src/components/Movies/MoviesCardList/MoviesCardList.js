import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
   
    
    return (
        <>
            { props.cards.length > 0 && (
                <ul className="card-list">
                    {props.cards.map((card, i) =>{
                        return (
                            <MoviesCard
                                key={i}
                                card={card}
                                onCardSaved={props.onCardSaved}
                                savedCards={props.savedCards}
                                loadCards={props.loadCards}
                            />
                        )
                    })}
                </ul>
            )} 
            { props.isShowPreloader && <Preloader/>}
            { props.cards.length === 0 &&(
                <div className="card-text">{props.showText}</div>
            )}
        </>
    )
}

export default MoviesCardList;