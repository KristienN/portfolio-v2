import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | highlights/highlights', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Highlights />`);
    assert.dom().containsText('Yahoo');
  });
});
