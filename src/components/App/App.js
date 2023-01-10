import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies'
import Profile from '../Profile/Profile';
import './App.css';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Footer from "../Footer/Footer";
import PopupForHeader from '../PopupForHeader/PopupForHeader';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([{
    name: 'cards.name',
    link: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    duration: 45
  },
  {
    name: 'cards.name',
    link: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    duration: 45
  },
  {
    name: 'cards.name',
    link: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    duration: 45
  },
  {
    name: 'cards.name',
    link: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    duration: 45
  }
  ]);
    
  function closePopup() {
    setPopupOpen(false);
  }

  function handleLoggedIn() {
    setLoggedIn(true);
  }
  return (
    <div className="page">
      <Header loggedIn={loggedIn} onPopupClick={() => setPopupOpen(true)}/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} cards={cards}/>
        <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} cards={cards}/>
        <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile}/>
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="*">
          {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer/>
      <PopupForHeader isOpen={popupOpen} onClose={closePopup}/>
    </div>
  );
}

export default App;
