import React from "react";
import './Register.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register({ onRegister, textError }) {
    console.log(onRegister);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isformValid, setFormValid] = React.useState(false);
    const submitButton = isformValid ? 'form__submit-button' : 'form__submit-button_type_error';

    React.useEffect(() => {
        if(nameError || emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, passwordError]);

    const handleName = (e) => {
        setName(e.target.value);
        //проверяем валидацию
        if(!e.target.value) {
            setFormValid(false);
        }
        setNameError(e.target.validationMessage);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        //проверяем валидацию email
        if(!e.target.value) {
            setFormValid(false);
        }
        setEmailError(e.target.validationMessage);  
    }
    const HandlePassword = (e) => {
        setPassword(e.target.value);
        //проверяем валидацию password
        if(!e.target.value) {
            setFormValid(false);
        }
        setPasswordError(e.target.validationMessage);
    }
   
    const handleSubmit = (e)=>{
        e.preventDefault();
        onRegister(
            name,
            email,
            password
        );
    }
    return (
        <main className="register">
            <Link to="/" className="register__container-logo">
                <img className="register__logo" src={logo} alt="логотип"/>
            </Link>
            <h3 className="register__title">Добро пожаловать!</h3>
            <form onSubmit={handleSubmit} className="form" name="text">
                <fieldset className="form__fieldset">
                    <label className="form__label">Имя</label>
                    <input id="name" type="name" value={name.name} onChange={handleName} className="form__input form__input_type_name" placeholder="Имя" name="name" minLength="2" maxLength="40" required/>
                    {nameError && <div className="form__error">{nameError}</div>}
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">E-mail</label>
                    <input id="email" type="email" value={email.email} onChange={handleEmail} className="form__input form__input_type_email" placeholder="Email" name="email" minLength="2" maxLength="40" required/>
                    {emailError && <div className="form__error">{emailError}</div>}
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">Пароль</label>
                    <input id="password" type="password" value={password.password} onChange={HandlePassword} className="form__input form__input_type_password" placeholder="Пароль" name="password" minLength="2" maxLength="200" required/>
                    {passwordError && <div className="form__error">{passwordError}</div>}
                </fieldset>
                <div className="form__container_type_button">
                    {!isformValid && <div className="form__text-error">{textError}</div>}
                    <button type="submit" className={submitButton}>Зарегистрироваться</button>
                </div>
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
