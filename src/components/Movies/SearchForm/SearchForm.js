import React from "react";
import './SearchForm.css';
 
function SearchForm(props) {
    
    const [state, setState] = React.useState({name: '', isShorts: false});
    const [textError, setTextError] = React.useState('');
   
    const handleChange = (e) => {
        const newState = {...state, name: e.target.value}
        setState(newState);
        if(!e.target.value) {
            setTextError('Нужно ввести ключевое слово');
        }else{
            setTextError(''); 
        }
    }
    const handleChangeCheckbox = (e) => {
        const newState = {...state, isShorts: e.target.checked}
        setState(newState);
        props.filterCards(newState);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.filterCards(state);   
    }

    return (
        <section className="search">
            <form onSubmit={handleSubmit} className="form-search" name="search">
                {textError && <div style={{color:'red'}}>{textError}</div>} 
                <fieldset className="search__fieldset search__fieldset_type_input"> 
                    <input onChange={handleChange} value={state.name} id="film" type="text" className='form-search__input' placeholder='фильм' name='film' minLength={2} required/>
                    <button type="submit" className="form-search__button" >Поиск</button>
                </fieldset>
                <fieldset className="search__fieldset search__fieldset_type_switch">
                    <input id="switch" type="checkbox" className="search__switch" name="switch" checked={state.isShorts} onChange={handleChangeCheckbox}/>
                    <label htmlFor="switch" className="search__fake"></label>
                    <label htmlFor="switch" className="search__label">Короткометражки</label>
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;