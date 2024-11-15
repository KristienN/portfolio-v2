import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | frameworks', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Frameworks />`);
    assert.dom().hasText('');
  });
});
