const configMain = {
    url: 'https://api.diplom.svetlana.nomoredomains.club',
      headers: {
        authorization: '',
        'Content-Type': 'application/json'
      }
}

export class MainApi {
    constructor({ url, headers}) {
        this._url = url;
        this._headers = headers;
    }
    _getResponseData(res) {
        if(res.ok) {
          return res.json();
        } else {
          Promise.reject(`Ошибка ${res.status}`);
        }
    }
    setToken(jwt) {
      this._headers.authorization = jwt;
    }
    
    //метод загрузки информации о пользователе с сервера
    getUser() {
        return fetch(`${this._url}/users/me`, { headers: this._headers})
        .then(this._getResponseData); 
    }
    //метод редактирования профиля пользователя
    updateProfile({ name, email }) {
        return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({ name, email })
        }).then(this._getResponseData);
    }
    //метод загрузки фильмов с сервера
    getMovies() {
        return fetch(`${this._url}/movies`, { headers: this._headers})
        .then(this._getResponseData);
    }
    //метод добавления фильма
    addMovie = (movie) => {
        return fetch(`${this._url}/movies`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify(movie)
        }).then(this._getResponseData);
    }
    //метод удаления фильма 
    deleteMovie = (_id) => {
        return fetch(`${this._url}/movies/${_id}`, {
          method: "DELETE",
          headers: this._headers
        }).then(this._getResponseData);
    }
    //метод регистрации
    register = (name, email, password) => {
        return fetch(`${this._url}/signup`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            "name": name,
            "email": email,
            "password": password     
          })
        }).then(this._getResponseData);
    }
    //метод авторизации
    authorize = (email, password) => {
        return fetch(`${this._url}/signin`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ email, password })
        }).then(this._getResponseData);
    }
}
const mainApi = new MainApi(configMain);

export { mainApi };