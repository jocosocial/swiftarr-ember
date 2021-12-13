import Model, { attr } from '@ember-data/model';

export default class CurrentUserModel extends Model {
  @attr username;
  @attr userID;
  @attr isLoggedIn;
}
