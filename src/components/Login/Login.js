import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login({ onLogin, textError, loggedIn}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isformValid, setFormValid] = React.useState(false);
    const submitButton = isformValid ? 'form__submit-button' : 'form__submit-button_type_error';
    
    React.useEffect(() => {
        if(emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);
   
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
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!email || !password) return;
        
         onLogin(email, password);
    }
    return (
        <main className="login">
            <Link to="/" className="login__container-logo">
                <img className="login__logo" src={logo} alt="логотип"/>
            </Link>
            <h3 className="login__title">Рады видеть!</h3>
            <form onSubmit={handleSubmit} className="form form_type_login" name="text">
                <fieldset className="form__fieldset">
                    <label className="form__label">E-mail</label>
                    <input id="email" type="email" value={email.email} onChange={handleEmail} className="form__input form__input_type_email" placeholder="Email" name="email" minLength="2" maxLength="40" required/>
                    {emailError && <div className="form__text-error">{emailError}</div>}
                </fieldset>
                <fieldset className="form__fieldset">
                    <label className="form__label">Пароль</label>
                    <input id="password" type="password" value={password.password} onChange={HandlePassword} className="form__input form__input_type_password" placeholder="Пароль" name="password" minLength="2" maxLength="200" required/>
                    {passwordError && <div className="form__text-error">{passwordError}</div>}
                </fieldset>
                <div className="form__container_type_button">
                {!isformValid && <div className="form__text-error">{textError}</div>}
                    <button type="submit" className={submitButton}>Войти</button>
                </div>
            </form>
            <div className="login__singup">
                <p>Ещё не зарегистрированы? 
                    <Link to="/sign-up" className="login__singup-link">Регистрация</Link>
                </p>
            </div>
        </main>
    )
}

export default Login;