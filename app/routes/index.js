import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return {
      dailyTheme: this.processTheme(this.store.findAll('dailyTheme')),
      announcements: this.store.findAll('announcement'),
    };
  }

  processTheme(themes) {
    // TODO: Based on theme response, find the theme for the current day and populate the object
    let daysUntilCruise =
      0 -
      Math.ceil(
        (new Date().getTime() - new Date('March 5, 2022').getTime()) /
          (1000 * 3600 * 24)
      );
    return {
      title: `Let's build a new Twit-arr UI! ${daysUntilCruise} days until the cruise!`,
      info: 'Gotta get this done before the cruise...',
      cruiseDay: daysUntilCruise,
    };
  }
}
