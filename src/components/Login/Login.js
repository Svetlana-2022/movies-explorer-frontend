import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
    return (
        <div className="login">
            <Link to="/" className="login__container-logo">
                <img className="login__logo" src={logo} alt="логотип"/>
            </Link>
            <h3 className="login__title">Рады видеть!</h3>
            <form className="form form_type_login" name="text">
                <fieldset className="form__fieldset">
                    <label className="form__label">E-mail</label>
                    <input id="email" type="email" className="form__input form__input_type_email" placeholder="Email" name="email" minLength="2" maxLength="40" required/>
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">Пароль</label>
                    <input id="password" type="password" className="form__input form__input_type_password" placeholder="Пароль" name="password" minLength="2" maxLength="200" required/>
                </fieldset>
                <button type="submit" className="form__submit-button form__submit-button_type_login">Войти</button>
            </form>
            <div className="login__singup">
                <p>Ещё не зарегистрированы? 
                    <Link to="/sign-up" className="login__singup-link">Регистрация</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;