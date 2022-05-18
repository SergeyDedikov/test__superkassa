import { BASE_URL_API } from "./const";

class ApiPhones {
  constructor(url) {
    this._url = url;
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  _checkResult = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        const message = data.message || "Что-то пошло не так!";
        return Promise.reject(message);
      });
    }
  };

  getPhones() {
    return fetch(`${this._url}/phones`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResult);
  }

  createPhone({ select, phone }) {
    return fetch(`${this._url}/phones`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        code: select,
        number: phone
      }),
    }).then(this._checkResult);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/phones`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResult);
  }
}

const api = new ApiPhones(BASE_URL_API);

export default api;
