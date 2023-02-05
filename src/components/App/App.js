import React from 'react';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from "../Footer/Footer";
import PopupForHeader from '../PopupForHeader/PopupForHeader';
import NotFound from '../NotFound/NotFound';


function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [filteredCards, setFilteredCards] = React.useState([]);
  const [filteredSavedCards, setFilteredSavedCards] = React.useState([]);
  const [isShowPreloader, setShowPreloader] = React.useState(false);
  const [showText, setShowText] = React.useState('');
  const [savedCards,  setSavedCards] = React.useState([]);
  const [text, setText] = React.useState('');
  const [textError, setTextError] = React.useState('');
  
  const calcCardsCounter = () => {
    const counter = { init: 12, more: 3 };
  
    if (window.innerWidth < 1180) {
      counter.init = 8;
      counter.more = 2;
    }
    if (window.innerWidth < 440) {
      counter.init = 5;
      counter.more = 1;
    }
    
    return counter;
  };
  const counter = calcCardsCounter(); 
  const [cardsCounter, setcardsCounter] = React.useState(counter.init);
  const [isUpdateSearch, setUpdateSearch] = React.useState(false);
  console.log(currentUser, '--currentUser');

  const history = useHistory();
  React.useEffect(() => {
    tokenCheck();
  }, []);
 
  function loadSavedCards() {
    const counters = calcCardsCounter();
    setcardsCounter(cardsCounter + counters.more);
  }
  function handleUpdateUser({name, email}) {
    mainApi.updateProfile({ name, email }).then((newUser) => {
        setCurrentUser(newUser.data);
        setText('Вы успешно обновили профиль!');
    }).catch(err => {
      console.log(err);
      setText('При обновлении профиля произошла ошибка.');
    });
  }

  function handleClickSubmit() {
    setShowPreloader(true);
  }
  function filterCards(request) {
    //  при каждом поиске на странице фильмов результаты поиска фильмов нужно сохранять в localstorage
    // В сохраняемые данные должны входить и строка поиска и статус чекбокса «Короткометражки»
    localStorage.setItem('searchSaved', JSON.stringify(request));
    if(cards.length === 0) {
      setShowPreloader(true);
      const films = JSON.parse(localStorage.getItem('films') || '[]');
      if(films.length === 0) {
        moviesApi.getMovies().then((res) => {
          localStorage.setItem('films', JSON.stringify(res));
          filter(res);
          setCards(res);
        }).catch(err => {
          console.log(err);
        })
        .finally(() => {
           setShowPreloader(false);
        });
      } else {
        setCards(films);
          filter(films);
          setShowPreloader(false);
      }
    } else {
      filter(cards);
      setShowPreloader(false);
    }
    
    function filter(cards) {
      const newCards = cards.filter((card) => {
        const isValidName = card.nameRU.includes(request.name);
        const isShorts = request.isShorts ? card.duration <= 40 : true;
        return isValidName && isShorts; 
      });
      setFilteredCards(newCards);
      if(newCards.length === 0) {
        setShowText('Ничего не найдено');
      } 
    }
  }
  function filterSavedCards(request) {
    if(savedCards.length === 0) {
      setShowPreloader(true);
      const savedFilms = JSON.parse(localStorage.getItem('savedFilms') || '[]');
      if(savedFilms.length === 0) {
        const jwt = localStorage.getItem('jwt');
        mainApi.setToken(jwt);
        mainApi.getMovies().then((res) => {
          console.log(res, '---resSaved');
          localStorage.setItem('savedFilms', JSON.stringify(res.data));
          filter(res.data);
          setSavedCards(res.data);
        }).catch(err => {
          console.log(err);
        })
        .finally(() => {
           setShowPreloader(false);
        });
      } else {
        setSavedCards(savedFilms);
          filter(savedFilms);
          setShowPreloader(false);
      }
    } else {
      filter(savedCards);
      setShowPreloader(false);
    }
    
    function filter(cards) {
      const newCards = cards.filter((card) => {
        const isValidName = card.nameRU.includes(request.name);
        const isShorts = card.isShorts ? card.duration <= 40 : true;
        return isValidName && isShorts; 
      });
      setFilteredSavedCards(newCards);
      if(newCards.length === 0) {
        setShowText('Ничего не найдено');
      }
    }
  }
  
  function handleCardSaved(card) {
    //если фильм не сохранен добавляем, иначе удаляем
    //проверяем, есть ли в массиве сохраненных фильмов
    const savedCard=  savedCards.find(item => item.movieId === card.id);
    const isSaved = savedCard !== undefined ;
    if(!isSaved) {
      const newCard = {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `https://api.nomoreparties.co/${card.image.url}`,
        trailerLink: card.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${card.image.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN   
      }
      
      mainApi.addMovie(newCard).then((res) => {
        setSavedCards((cards) =>{
          const newCards = [res.data, ...cards]
          localStorage.setItem('savedFilms', JSON.stringify(newCards));
          return newCards;
        });
        
      }).catch(err => {
        console.log(err);
      });
    } else {
      mainApi.deleteMovie(savedCard._id).then(() => {
        setSavedCards(() =>{
          const newCards = (savedCards.filter((c) => c._id !== savedCard._id))
          localStorage.setItem('savedFilms', JSON.stringify(newCards));
          return newCards;
        })
      }).catch(err => {
        console.log(err);
      });
    }
    
  }
  function handleCardDelete(savedCard) {
    setUpdateSearch(false);
    mainApi.deleteMovie(savedCard._id).then(() => {
      setSavedCards(() =>{
        const newCards = (savedCards.filter((c) => c._id !== savedCard._id))
        localStorage.setItem('savedFilms', JSON.stringify(newCards));
        return newCards;
      })
      setUpdateSearch(true);
    }).catch(err => {
      console.log(err);
    }); 
  }
  
  function closePopup() {
    setPopupOpen(false);
  }
  function handleRegister(name, email, password) {
    return mainApi.register(name, email, password).then((res) => {
      if(res) {
        history.push('/sign-in');
        setTextError('Вы успешно зарегистрировались!');
      }
    }).catch(err => {
      console.log(err);
      setTextError('При регистрации пользователя произошла ошибка.');
    });
  }
  function handleLogin(email, password) {
    return mainApi.authorize(email, password)
    .then((data) =>{
        if(!data.token) throw new Error('Missing jwt');

        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        tokenCheck();
        history.push('/movies');
         
      }).catch(err => {
        console.log(err);
        setLoggedIn(false);
        setTextError('При логировании пользователя произошла ошибка.');
      });
  }
  // При логауте пользователя информацию в хранилище и стейт-переменных из useState уничтожать.
  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('savedFilms');
    localStorage.removeItem('films');
    localStorage.removeItem('searchSaved');
    localStorage.clear();
    setCurrentUser({});
    setCards([]);
    setSavedCards([]);
    setFilteredCards([]);
    setFilteredSavedCards([]);
    history.push('/');
    setLoggedIn(false);
    mainApi.setToken('');
  }
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    mainApi.setToken(jwt);
    if (!jwt) return;
    mainApi.getUser().then((user) => {
      if(user) {
        setLoggedIn(true);
        setCurrentUser(user);
      } else {
        handleSignOut(); 
      }
    }).catch(err => {
      console.log(err);
      handleSignOut();
    });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} onPopupClick={() => setPopupOpen(true)}/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} cards={filteredCards.filter((c, i) => i < cardsCounter)} filterCards={filterCards} onClickSubmit={handleClickSubmit} onCardSaved={handleCardSaved} isShowPreloader={isShowPreloader} showText={showText} savedCards={savedCards} loadCards={loadSavedCards} hasCards={filteredCards.length >= cardsCounter}/>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} cards={filteredSavedCards} filterSavedCards={filterSavedCards} onCardSaved={handleCardDelete} savedCards={savedCards} loadCards={loadSavedCards} isUpdateSearch={isUpdateSearch}/>
          <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} currentUser={currentUser} onUpdateUser={handleUpdateUser} text={text} signOut={handleSignOut}/>
          <Route path="/sign-up">
            <Register onRegister={handleRegister} textError={textError}/>
          </Route>
          <Route path="/sign-in">
            <Login onLogin={handleLogin} textError={textError}/>
          </Route>
          <Route path="*">
            {<NotFound />}
          </Route>
        </Switch>
        <Footer/>
        <PopupForHeader isOpen={popupOpen} onClose={closePopup}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
