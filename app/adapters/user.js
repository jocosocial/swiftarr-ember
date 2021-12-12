import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForQueryRecord(query) {
    let originalUrl = super.urlForQueryRecord(...arguments);

    if (query.me) {
      delete query.me;
      return `${originalUrl}/profile`;
    }

    return originalUrl;
  }
}
