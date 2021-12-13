import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class SessionService extends Service {
  @storageFor('session') sessionStorage;
  @service router;
  @service cookies;
  @service store;

  get token() {
    return this.sessionStorage.get('token');
  }

  @computed('sessionStorage.token', 'token')
  get isAuthenticated() {
    return this.token != null;
  }

  @computed('isAuthenticated', 'sessionStorage.token')
  get currentUser() {
    if (this.isAuthenticated) {
      return this.store.queryRecord('currentUser', {});
    }
    return null;
  }

  storeSession(token, accessLevel, userId) {
    var store = this.sessionStorage;
    store.set('token', token);
    store.set('accessLevel', accessLevel);
    store.set('userId', userId);
  }

  invalidate() {
    this.sessionStorage.clear();
  }

  prohibitAuthentication(redirectTo) {
    if (this.isAuthenticated) {
      this.router.replaceWith(redirectTo);
    }
  }

  requireAuthentication(redirectTo) {
    if (!this.isAuthenticated) {
      this.router.transitionTo(redirectTo);
    }
  }
}
