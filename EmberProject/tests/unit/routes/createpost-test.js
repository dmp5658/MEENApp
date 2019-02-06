import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | createpost', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:createpost');
    assert.ok(route);
  });
});
