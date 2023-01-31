const configMovies = {
    url: ' https://api.nomoreparties.co/beatfilm-movies',
      headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }
}

export class MoviesApi {
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
    //метод загрузки фильмов с сервера
    getMovies() {
        return fetch(`${this._url}`, { headers: this._headers})
        .then(this._getResponseData);
    }
}
const moviesApi = new MoviesApi(configMovies);

export { moviesApi };