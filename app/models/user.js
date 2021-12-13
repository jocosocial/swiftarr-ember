import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr username;
  @attr displayedName;
  @attr about;
  @attr displayName;
  @attr email;
  @attr homeLocation;
  @attr message;
  @attr preferredPronoun;
  @attr realName;
  @attr roomNumber;
  @attr limitAccess;
}
