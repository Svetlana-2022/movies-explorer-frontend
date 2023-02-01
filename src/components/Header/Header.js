import React from "react";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    
    return (
        <Switch>
            <Route exact path="/">
                {props.loggedIn &&     
                <header className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </header>
                }
                {!props.loggedIn &&
                <header className="header">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container">
                        <Link to="/sign-up" className="header__link header__link_white">Регистрация</Link>
                        <div className="header__link-container">
                            <Link to="/sign-in" className="header__link">Войти</Link>
                        </div>
                    </div>
                </header>
                }
            </Route>
            <Route path="/movies">
                <header className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </header>
            </Route>
            <Route path="/saved-movies">
                <header className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img type="button" className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </header>
            </Route>
            <Route path="/profile">
                <header className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </header>
            </Route>
        </Switch>
        
    );
}

export default Header;
