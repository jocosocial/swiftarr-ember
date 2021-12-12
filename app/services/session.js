import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class SessionService extends Service {
  @storageFor('session') sessionStorage;
  @service router;
  @service cookies;

  @computed('sessionStorage.token')
  get isAuthenticated() {
    return this.get('sessionStorage').get('token') != null;
  }

  storeSession(token, accessLevel, userId) {
    var store = this.get('sessionStorage');
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
