import ApplicationSerializer from './application';

export default class CurrentUserSerializer extends ApplicationSerializer {
  primaryKey = 'userID';
}
