import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-typescript-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | frameworks', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Frameworks />`);
    assert.dom().containsText("I'm Not Afraid of Frameworks");
    const testCases: string[] = [
      'React',
      'AngularJS',
      'EmberJS',
      'Fastify',
      'Spring',
      'Express',
    ];
    for (let i = 0; i < 6; i++) {
      assert.dom().containsText(testCases[i] as string);
    }
  });
});
