import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | goodbye', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Goodbye />`);
    assert.dom().containsText('Hope you have a very happy');
  });
});
