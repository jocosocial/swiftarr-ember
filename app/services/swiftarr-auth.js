import Service from '@ember/service';
import $ from 'jquery';

export default class SwiftarrAuthService extends Service {
  authenticate(username, password) {
    let headers = {
      Authorization: `Basic ${this.b64Encode(`${username}:${password}`)}`,
    };
    return this.ajaxPromise(
      'https://swiftarr.herokuapp.com/api/v3/auth/login',
      'POST',
      headers
    );
  }

  logout() {
    let headers = {
      Authorization: `Bearer ${this.session.data.authenticated.token}`,
    };
    return this.ajaxPromise(
      'https://swiftarr.herokuapp.com/api/v3/auth/logout',
      'POST',
      headers
    );
  }

  ajaxPromise(url, method, headers) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        headers: headers,
        type: method,
        success: function (data) {
          resolve(data);
        },
        error: function (error) {
          reject(error);
        },
      });
    });
  }

  b64Encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
}
