import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | highlights/highlights', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Highlights::Highlights />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Highlights::Highlights>
        template block text
      </Highlights::Highlights>
    `);

    assert.dom().hasText('template block text');
  });
});
