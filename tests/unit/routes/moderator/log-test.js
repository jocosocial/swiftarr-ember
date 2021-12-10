import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | moderator/log', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:moderator/log');
    assert.ok(route);
  });
});
