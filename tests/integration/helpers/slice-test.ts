import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | range', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it slices an array correctly', async function (assert) {
    this.set('start', 1);
    this.set('end', 3);
    this.set('array', [10, 20, 30, 40]);

    await render(hbs`{{slice this.start this.end this.array}}`);
    assert.dom(this.element).hasText('20,30', 'Slices array from index 1 to 3');
  });
});
