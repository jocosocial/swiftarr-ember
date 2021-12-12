import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forum-mentions', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ForumMentions />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ForumMentions>
        template block text
      </ForumMentions>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
