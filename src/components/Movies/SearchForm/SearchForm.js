import './SearchForm.css';
 
function SearchForm() {
    return (
        <div className="search">
            <form className="form-search" name="search">
                <fieldset className="search__fieldset search__fieldset_type_input">
                    <input id="film" type="text" className='form-search__input' placeholder='фильм' name='film' minLength={2} required/>
                    <button type="submit" className="form-search__button">Поиск</button>
                </fieldset>
                <fieldset className="search__fieldset search__fieldset_type_switch">
                    <input id="switch" type="checkbox" className="search__switch" name="switch"/>
                    <label htmlFor="switch" className="search__fake"></label>
                    <label htmlFor="switch" className="search__label">Короткометражки</label>
                </fieldset>
            </form>
        </div>
    )
}

export default SearchForm;