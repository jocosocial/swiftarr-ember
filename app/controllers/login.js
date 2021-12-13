import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @tracked errorMessage;
  @service swiftarrAuth;
  @service session;
  @service router;
  @service store;

  @action
  async authenticate(e) {
    var self = this;
    this.swiftarrAuth
      .authenticate(this.username, this.password)
      .then(
        function (json) {
          self.session.storeSession(json.token, json.accessLevel, json.userID);

          self.router.transitionTo('index');
        },
        function () {
          self.set(
            'errorMessage',
            'Login failed. Please check your username and password and try again.'
          );
        }
      )
      .finally(function () {
        self.set('password', null);
      });
  }
}
