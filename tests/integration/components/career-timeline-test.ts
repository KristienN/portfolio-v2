import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | career-timeline', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CareerTimeline />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CareerTimeline>
        template block text
      </CareerTimeline>
    `);

    assert.dom().hasText('template block text');
  });
});
