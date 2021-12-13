import RESTAdapter from '@ember-data/adapter/rest';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;

  namespace = 'api/v3';
  host = 'https://swiftarr.herokuapp.com';

  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.token}`;
    }
    return headers;
  }
}
