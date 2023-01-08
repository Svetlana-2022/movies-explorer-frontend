import React from "react";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
// import profile from '../../images/profile.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    
    return (
        <Switch>
            <Route exact path="/">
                {props.loggedIn &&     
                <div className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </div>
                }
                {!props.loggedIn &&
                <div className="header">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container">
                        <Link to="/sign-up" className="header__link header__link_white">Регистрация</Link>
                        <div className="header__link-container">
                            <Link to="/sign-in" className="header__link">Войти</Link>
                        </div>
                    </div>
                </div>
            }
            </Route>
            <Route path="/movies">
                <div className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </div>
            </Route>
            <Route path="/saved-movies">
                <div className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img type="button" className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </div>
            </Route>
            <Route path="/profile">
                <div className="header header_type_white">
                    <Link to="/" className="header__container-logo">
                        <img className="header__logo" src={logo} alt="логотип"/>
                    </Link>
                    <div className="header__container-burger">
                        <div type="button" className="header__burger" onClick={props.onPopupClick}></div>
                    </div>
                    <Navigation/>
                </div>
            </Route>
        </Switch>
        
    );
}

export default Header;
