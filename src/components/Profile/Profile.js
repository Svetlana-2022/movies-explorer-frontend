import React from "react";
import './Profile.css';

function Profile(props) {
    const [name, setName] = React.useState(props.currentUser.name);
    const [email, setEmail] = React.useState(props.currentUser.email);
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [isformValid, setFormValid] = React.useState(false);
    const [disabledButton, setDisabledButton] = React.useState(true);

    React.useEffect(() => {
        setName(props.currentUser.name);
        setEmail(props.currentUser.email);
    }, [props.currentUser.name, props.currentUser.email]);

    React.useEffect(() => {
        if(name === props.currentUser.name && email === props.currentUser.email) {
            setDisabledButton(false);
        } else {
            setDisabledButton(true);
        }
        if(nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, props.currentUser.name, props.currentUser.email, name, email]);

    function handleName(e) {
        setName(e.target.value);
        setNameError(e.target.validationMessage);
        // console.log(e.target.validationMessage);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
        if(!e.target.value) {
            setFormValid(false);
        }
        setEmailError(e.target.validationMessage);   
    }
    function handleSubmit(e) {
        e.preventDefault();
        
        props.onUpdateUser({
            name: name,
            email: email
        }) 
    }

    return (
        <main className="profile">
            <h3 className="profile__title">Привет, {props.currentUser.name}</h3>
            <form onSubmit={handleSubmit} className="profile__containers">
                <div className="profile__container profile__container_type_name">
                    <p className="profile__name">Имя</p>
                    <input id="name" type="name" value={name} onChange={(e)=>handleName(e)} className="profile__name" placeholder="Имя" name="name" minLength="2" maxLength="40" required/>
                </div>
                {nameError && <div className="profile__error" style={{color:'red'}}>{nameError}</div>}
                <div className="profile__container profile__container_type_email">
                    <p className="profile__email">E-mail</p>
                    <input id="email" type="email" value={email} onChange={(e)=>handleEmail(e)}className="profile__email" placeholder="email" name="email" minLength="2" maxLength="40" required/>
                </div>
                {emailError && <div className="profile__error">{emailError}</div>}
                <div className="profile__container profile__container_type_button">
                    {!isformValid && <div className="profile__text-error">{props.text}</div>} 
                    <button disabled={!isformValid || !disabledButton} type="submit" className='profile__submit-button' >Редактировать</button>
                    <button onClick={props.signOut} type="button" className="profile__button">Выйти из аккаунта</button> 
                </div>
            </form>
        </main>
    )
}

export default Profile;