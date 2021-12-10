import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tweets', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tweets');
    assert.ok(route);
  });
});
