import React from "react";
import './Register.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
    return (
        <main className="register">
            <Link to="/" className="register__container-logo">
                <img className="register__logo" src={logo} alt="логотип"/>
            </Link>
            <h3 className="register__title">Добро пожаловать!</h3>
            <form className="form form_type_register" name="text">
                <fieldset className="form__fieldset">
                    <label className="form__label">Имя</label>
                    <input id="name" type="name" className="form__input form__input_type_name" placeholder="Имя" name="name" minLength="2" maxLength="40" required/>
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">E-mail</label>
                    <input id="email" type="email" className="form__input form__input_type_email" placeholder="Email" name="email" minLength="2" maxLength="40" required/>
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">Пароль</label>
                    <input id="password" type="password" className="form__input form__input_type_password" placeholder="Пароль" name="password" minLength="2" maxLength="200" required/>
                </fieldset>
                <button type="submit" className="form__submit-button form__submit-button_type_register">Зарегистрироваться</button>
            </form>
            <div className="register__singin">
                <p>Уже зарегистрированы? 
                    <Link to="/sign-in" className="register__singin-link"> Войти</Link>
                </p>
            </div>
        </main>
    )
}

export default Register;
