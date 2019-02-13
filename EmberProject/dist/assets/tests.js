'use strict';

define("ember-project/tests/helpers/ember-simple-auth", ["exports", "ember-simple-auth/authenticators/test"], function (_exports, _test) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.authenticateSession = authenticateSession;
  _exports.currentSession = currentSession;
  _exports.invalidateSession = invalidateSession;
  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);

    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const {
      __container__: container
    } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');

    if (session.get('isAuthenticated')) {
      session.invalidate();
    }

    return app.testHelpers.wait();
  }
});
define("ember-project/tests/integration/components/create-new-post/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | create-new-post', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LlANlhKO",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"create-new-post\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "d9sRDWjY",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"create-new-post\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/login-form/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "My4J7qTe",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"login-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QnYGFQE0",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"login-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/logout-form/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | logout-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bgX7OLBe",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"logout-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1HqeDQhi",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"logout-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/main-page/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | main-page', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "5UAon/4f",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"main-page\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WWkOHFdQ",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"main-page\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/nav-bar/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | nav-bar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1eDpu8Iw",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nav-bar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "uS8bFgbD",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"nav-bar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/signup-form/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | signup-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1dhndyZo",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"signup-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "FfqDPLJj",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"signup-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/integration/components/view-post/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | view-post', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "s2DtxbO9",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"view-post\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IvVfbk4O",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"view-post\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("ember-project/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('authenticators/knockjwt.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authenticators/knockjwt.js should pass ESLint\n\n3:8 - \'config\' is defined but never used. (no-unused-vars)\n5:17 - Use import { Promise } from \'rsvp\'; instead of using Ember destructuring (ember/new-module-imports)\n5:41 - Use import { run } from \'@ember/runloop\'; instead of using Ember destructuring (ember/new-module-imports)\n5:46 - Use import { get } from \'@ember/object\'; instead of using Ember destructuring (ember/new-module-imports)\n5:46 - \'get\' is assigned a value but never used. (no-unused-vars)\n13:12 - Use import { isEmpty } from \'@ember/utils\'; instead of using Ember.isEmpty (ember/new-module-imports)');
  });
  QUnit.test('authorizers/knockjwt.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'authorizers/knockjwt.js should pass ESLint\n\n5:5 - Unexpected \'debugger\' statement. (no-debugger)');
  });
  QUnit.test('components/create-new-post/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/create-new-post/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/login-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/logout-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/logout-form/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/main-page/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/main-page/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/nav-bar/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nav-bar/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/signup-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/signup-form/component.js should pass ESLint\n\n');
  });
  QUnit.test('components/view-post/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/view-post/component.js should pass ESLint\n\n');
  });
  QUnit.test('models/blogpost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/blogpost.js should pass ESLint\n\n');
  });
  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n5:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
  });
  QUnit.test('routes/createpost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/createpost.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });
  QUnit.test('routes/logout.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/logout.js should pass ESLint\n\n');
  });
  QUnit.test('routes/signup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/signup.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/blogpost.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/blogpost.js should pass ESLint\n\n4:23 - \'options\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('serializers/user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'serializers/user.js should pass ESLint\n\n4:24 - \'options\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('services/currentuser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/currentuser.js should pass ESLint\n\n');
  });
  QUnit.test('services/session-account.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session-account.js should pass ESLint\n\n');
  });
});
define("ember-project/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-project/components/create-new-post/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/components/create-new-post/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/components/login-form/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-project/components/login-form/template.hbs should pass TemplateLint.\n\nember-project/components/login-form/template.hbs\n  29:2  error  Incorrect indentation for `{{#if}}` beginning at L29:C2. Expected `{{#if}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  58:7  error  Incorrect indentation for `if` beginning at L29:C2. Expected `{{/if}}` ending at L58:C7 to be at an indentation of 2 but was found at 0.  block-indentation\n  30:2  error  Incorrect indentation for `<a>` beginning at L30:C2. Expected `<a>` to be at an indentation of 4 but was found at 2.  block-indentation\n  37:21  error  you must use double quotes in templates  quotes\n  37:32  error  you must use double quotes in templates  quotes\n  40:42  error  you must use double quotes in templates  quotes\n  43:66  error  you must use double quotes in templates  quotes\n  43:82  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-project/components/logout-form/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-project/components/logout-form/template.hbs should pass TemplateLint.\n\nember-project/components/logout-form/template.hbs\n  30:21  error  you must use double quotes in templates  quotes\n  30:34  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-project/components/main-page/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-project/components/main-page/template.hbs should pass TemplateLint.\n\nember-project/components/main-page/template.hbs\n  4:6  error  Incorrect indentation for `{{#if}}` beginning at L4:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6.  block-indentation\n');
  });
  QUnit.test('ember-project/components/nav-bar/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-project/components/nav-bar/template.hbs should pass TemplateLint.\n\nember-project/components/nav-bar/template.hbs\n  4:17  error  you must use double quotes in templates  quotes\n  8:23  error  you must use double quotes in templates  quotes\n  9:23  error  you must use double quotes in templates  quotes\n  11:23  error  you must use double quotes in templates  quotes\n  12:23  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-project/components/signup-form/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'ember-project/components/signup-form/template.hbs should pass TemplateLint.\n\nember-project/components/signup-form/template.hbs\n  33:42  error  you must use double quotes in templates  quotes\n  36:66  error  you must use double quotes in templates  quotes\n  36:82  error  you must use double quotes in templates  quotes\n  39:73  error  you must use double quotes in templates  quotes\n  39:96  error  you must use double quotes in templates  quotes\n  42:61  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('ember-project/components/view-post/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/components/view-post/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/createpost.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/createpost.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/login.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/logout.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/logout.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-project/templates/signup.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-project/templates/signup.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-project/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/create-new-post/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/create-new-post/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/login-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/logout-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/logout-form/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/main-page/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/main-page/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/nav-bar/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-bar/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/signup-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/signup-form/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/view-post/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/view-post/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/blogpost-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/blogpost-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/createpost-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/createpost-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/logout-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/logout-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/signup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/signup-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/blogpost-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/blogpost-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/serializers/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/user-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/currentuser-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/currentuser-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/session-account-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/session-account-test.js should pass ESLint\n\n');
  });
});
define("ember-project/tests/test-helper", ["ember-project/app", "ember-project/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-project/tests/unit/adapters/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define("ember-project/tests/unit/models/blogpost-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | blogpost', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('blogpost', {});
      assert.ok(model);
    });
  });
});
define("ember-project/tests/unit/models/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define("ember-project/tests/unit/routes/createpost-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | createpost', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:createpost');
      assert.ok(route);
    });
  });
});
define("ember-project/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("ember-project/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("ember-project/tests/unit/routes/logout-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | logout', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:logout');
      assert.ok(route);
    });
  });
});
define("ember-project/tests/unit/routes/signup-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | signup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:signup');
      assert.ok(route);
    });
  });
});
define("ember-project/tests/unit/serializers/blogpost-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | blogpost', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('blogpost');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('blogpost', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-project/tests/unit/serializers/user-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('user');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('user', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("ember-project/tests/unit/services/currentuser-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | currentuser', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:currentuser');
      assert.ok(service);
    });
  });
});
define("ember-project/tests/unit/services/session-account-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | session-account', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:session-account');
      assert.ok(service);
    });
  });
});
define('ember-project/config/environment', [], function() {
  var prefix = 'ember-project';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-project/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
