import React from "react";
import './Profile.css'

function Profile() {
    return (
        <div className="profile">
            <h3 className="profile__title">Привет, Виталий!</h3>
            <div className="profile__container">
                <div className="profile__container_type_name">
                    <p className="profile__name">Имя</p>
                    <p className="profile__name">Виталий</p>
                    {/* <input id="name" type="name" className="profile__name" placeholder="Имя" name="name" minLength="2" maxLength="40" required/> */}
                </div>
                <div className="profile__container_type_email">
                    <p className="profile__email">E-mail</p>
                    <p className="profile__email">pochta@yandex.ru</p>
                    {/* <input id="email" type="email" className="profile__email" placeholder="Email" name="email" minLength="2" maxLength="40" required/> */}
                </div>
                <div className="profile__container_type_button">
                    <button type="button" className="profile__button profile__button_type_edit">Редактировать</button>
                    <button type="button" className="profile__button profile__button_type_exit">Выйти из аккаунта</button> 
                </div>
            </div>
        </div>
    )
}

export default Profile;