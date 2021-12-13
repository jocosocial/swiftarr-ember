import Model, { attr } from '@ember-data/model';

export default class DailyThemeModel extends Model {
	@attr title;
	@attr info;
	@attr image;
	@attr cruiseDay;
}
