import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LogoutRoute extends Route {
  @service session;
  @service router;

  beforeModel(transition) {
    this.session.invalidate();
    this.router.transitionTo('index');
  }
}
