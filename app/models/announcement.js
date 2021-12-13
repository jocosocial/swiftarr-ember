import Model, { attr, belongsTo } from '@ember-data/model';

export default class AnnouncementModel extends Model {
	@belongsTo('user-header') author;
	
  @attr text;
  @attr updatedAt;
  @attr displayUntil;
  @attr isDeleted;
}
