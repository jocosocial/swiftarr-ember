import ApplicationAdapter from './application';

export default class CurrentUserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query) {
    return `${this.urlPrefix()}/user/whoami`;
  }
}
