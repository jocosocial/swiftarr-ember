import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @belongsTo('user-header') header;
  
  @attr displayedName;
  @attr about;
  @attr email;
  @attr homeLocation;
  @attr message;
  @attr preferredPronoun;
  @attr realName;
  @attr roomNumber;
  @attr limitAccess;
}
