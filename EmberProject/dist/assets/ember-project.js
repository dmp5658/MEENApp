'use strict';



;define("ember-project/app", ["exports", "ember-project/resolver", "ember-load-initializers", "ember-project/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("ember-project/authenticators/knockjwt", ["exports", "ember-simple-auth/authenticators/base", "ember-project/config/environment"], function (_exports, _base, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    RSVP: {
      Promise
    },
    $: {
      ajax
    },
    run,
    get
  } = Ember;

  var _default = _base.default.extend({
    tokenEndpoint: `http://localhost:3000/login`,

    restore(data) {
      return new Promise((resolve, reject) => {
        if (!Ember.isEmpty(data.token)) {
          resolve(data);
        } else {
          reject();
        }
      });
    },

    authenticate(creds) {
      const {
        email,
        password
      } = creds;
      const data = JSON.stringify({
        email,
        password
      });
      console.log("AFTER STRINGIFY");
      console.log(data);
      const requestOptions = {
        url: this.tokenEndpoint,
        type: 'POST',
        data: {
          "email": email,
          "password": password
        },
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json'
      };
      console.log(requestOptions);
      return new Promise((resolve, reject) => {
        ajax(requestOptions).then(response => {
          const {
            jwt
          } = response; // Wrapping aync operation in Ember.run

          run(() => {
            resolve({
              token: jwt
            });
          });
        }, error => {
          // Wrapping aync operation in Ember.run
          run(() => {
            reject(error);
          });
        });
      });
    },

    invalidate(data) {
      return Promise.resolve(data);
    }

  });

  _exports.default = _default;
});
;define("ember-project/authorizers/knockjwt", ["exports", "ember-simple-auth/authorizers/base"], function (_exports, _base) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _base.default.extend({
    authorize()
    /*data, block*/
    {
      debugger;
    }

  });

  _exports.default = _default;
});
;define("ember-project/components/create-new-post/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    blogpost: null,
    router: Ember.inject.service('-routing'),
    actions: {
      save: function (blogpost) {
        console.log(blogpost.title);
        console.log(blogpost.body);
        console.log(blogpost);
        blogpost.save().then(value => {
          Ember.Logger.info(value);
        }).catch(err => {
          Ember.Logger.info('failure to save');
          console.log(err);
        });
      }
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/create-new-post/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "c/utmHwE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h3\"],[9],[0,\"Create a New Post\"],[10],[0,\"\\n\\n\"],[7,\"form\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"name\",\"value\",\"class\",\"placeholder\"],[\"title\",[23,[\"blogpost\",\"title\"]],\"form-control\",\"Title\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"textarea\",null,[[\"name\",\"value\",\"class\",\"placeholder\",\"rows\",\"cols\"],[\"body\",[23,[\"blogpost\",\"body\"]],\"form-control\",\"Body\",\"10\",\"140\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-block\"],[11,\"value\",\"Save\"],[11,\"type\",\"submit\"],[9],[0,\"Publish\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[3,\"action\",[[22,0,[]],\"save\",[23,[\"blogpost\"]]],[[\"on\"],[\"submit\"]]],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/create-new-post/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/login-form/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    session: Ember.inject.service(),
    actions: {
      login() {
        console.log('login');
        this.set('loginError', false);
        this.set('loginError', false);
        const {
          email,
          password
        } = this.getProperties('email', 'password');
        const s = this.get('session');
        s.authenticate('authenticator:knockjwt', {
          email,
          password
        }).catch(() => {
          // If login fails, just set an error
          // so the error UI shows up
          this.set('loginError', true);
        });
      },

      signout() {
        console.log('signout');
        this.get('session').invalidate();
      }

    }
  });

  _exports.default = _default;
});
;define("ember-project/components/login-form/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ANsvzoow",
    "block": "{\"symbols\":[],\"statements\":[[7,\"html\"],[11,\"lang\",\"en\"],[9],[0,\"\\n\\n  \"],[7,\"head\"],[9],[0,\"\\n    \"],[7,\"style\"],[11,\"type\",\"text/css\"],[9],[0,\"\\n      .login-form {\\n        width: 340px;\\n          margin: 50px auto;\\n      }\\n        .login-form form {\\n          margin-bottom: 15px;\\n            background: #f7f7f7;\\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\\n            padding: 30px;\\n        }\\n        .login-form h2 {\\n            margin: 0 0 15px;\\n        }\\n        .form-control, .btn {\\n            min-height: 38px;\\n            border-radius: 2px;\\n        }\\n        .btn {\\n            font-size: 15px;\\n            font-weight: bold;\\n        }\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"body\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"login-form\"],[9],[0,\"\\n      \"],[7,\"form\"],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-center\"],[9],[0,\"Log in\"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"placeholder\",\"class\",\"required\"],[[23,[\"email\"]],\"Login\",\"form-control\",\"required\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"placeholder\",\"type\",\"required\"],[[23,[\"password\"]],\"form-control\",\"Password\",\"password\",\"required\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-block\"],[11,\"type\",\"submit\"],[9],[0,\"Log in\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[3,\"action\",[[22,0,[]],\"login\"],[[\"on\"],[\"submit\"]]],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-center\"],[9],[4,\"link-to\",[\"signup\"],null,{\"statements\":[[0,\"Create an Account\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[7,\"a\"],[11,\"href\",\"/logout\"],[11,\"class\",\"logoutBtn\"],[9],[0,\"\\n    logout\\n  \"],[3,\"action\",[[22,0,[]],\"signout\"]],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/login-form/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/nav-bar/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("ember-project/components/nav-bar/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9X+wXKQI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[11,\"class\",\"navbar navbar-default\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"navbar-header\"],[9],[0,\"\\n      \"],[7,\"button\"],[11,\"class\",\"navbar-toggle collapsed\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-target\",\"#menu-collapse\"],[11,\"type\",\"button\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"sr-only\"],[9],[0,\"Toggle navigation\"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"icon-bar\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"collapse navbar-collapse pull-right\"],[11,\"id\",\"menu-collapse\"],[9],[0,\"\\n      \"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"signup\"],null,{\"statements\":[[0,\"SignUp\"]],\"parameters\":[]},null],[10],[0,\"\\n        \"],[7,\"li\"],[9],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"Login\"]],\"parameters\":[]},null],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/nav-bar/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/signup-form/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions: {
      singupacc: function () {
        if (this.get('password') === this.get('retypedpassword')) {
          this.store.createRecord('user', {
            email: this.get('login'),
            password: this.get('password')
          });
          console.log('done');
        } else {
          alert("Passwords do not match");
        }
      }
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/signup-form/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "lqHPldDJ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"html\"],[11,\"lang\",\"en\"],[9],[0,\"\\n\\n  \"],[7,\"head\"],[9],[0,\"\\n    \"],[7,\"style\"],[11,\"type\",\"text/css\"],[9],[0,\"\\n      .signup-form {\\n        width: 340px;\\n          margin: 50px auto;\\n      }\\n        .signup-form form {\\n          margin-bottom: 15px;\\n            background: #f7f7f7;\\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\\n            padding: 30px;\\n        }\\n        .signup-form h2 {\\n            margin: 0 0 15px;\\n        }\\n        .form-control, .btn {\\n            min-height: 38px;\\n            border-radius: 2px;\\n        }\\n        .btn {\\n            font-size: 15px;\\n            font-weight: bold;\\n        }\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"body\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"signup-form\"],[9],[0,\"\\n      \"],[7,\"form\"],[9],[0,\"\\n        \"],[7,\"h2\"],[11,\"class\",\"text-center\"],[9],[0,\"Sign Up\"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"placeholder\",\"class\",\"required\"],[[23,[\"login\"]],\"Login\",\"form-control\",\"required\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"placeholder\",\"type\",\"required\"],[[23,[\"password\"]],\"form-control\",\"Password\",\"password\",\"required\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"placeholder\",\"type\",\"required\"],[[23,[\"retypedpassword\"]],\"form-control\",\"Retype Password\",\"password\",\"required\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n          \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-block\"],[9],[0,\"Sign Up\"],[3,\"action\",[[22,0,[]],\"singupacc\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"text-center\"],[9],[4,\"link-to\",[\"login\"],null,{\"statements\":[[0,\"Already have an account? Login\"]],\"parameters\":[]},null],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/signup-form/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/view-post/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("ember-project/components/view-post/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZFtQzsS+",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"h1\"],[9],[1,[23,[\"blogpost\",\"title\"]],false],[10],[0,\"\\n\"],[7,\"p\"],[9],[1,[23,[\"blogpost\",\"body\"]],false],[10],[0,\"\\n\"],[7,\"div\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"badge\"],[9],[0,\"Posted \"],[1,[23,[\"blogpost\",\"datePosted\"]],false],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"hr\"],[9],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/view-post/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("ember-project/helpers/app-version", ["exports", "ember-project/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-project/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("ember-project/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("ember-project/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-project/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-project/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-project/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("ember-project/initializers/ember-simple-auth", ["exports", "ember-project/config/environment", "ember-simple-auth/configuration", "ember-simple-auth/initializers/setup-session", "ember-simple-auth/initializers/setup-session-service", "ember-simple-auth/initializers/setup-session-restoration"], function (_exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;

      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }

  };
  _exports.default = _default;
});
;define("ember-project/initializers/export-application-global", ["exports", "ember-project/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-project/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("ember-project/instance-initializers/ember-simple-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  var _default = {
    name: 'ember-simple-auth',

    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-project/models/blogpost", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    body: _emberData.default.attr('string'),
    datePosted: _emberData.default.attr('string')
  });

  _exports.default = _default;
});
;define("ember-project/models/user", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({});

  _exports.default = _default;
});
;define("ember-project/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-project/router", ["exports", "ember-project/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('signup');
    this.route('login');
    this.route('createpost');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("ember-project/routes/application", ["exports", "ember-simple-auth/mixins/application-route-mixin"], function (_exports, _applicationRouteMixin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend(_applicationRouteMixin.default, {
    model() {// return this.store.findAll('blogpost');
    }

  });

  _exports.default = _default;
});
;define("ember-project/routes/createpost", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.store.createRecord('blogpost');
    }

  });

  _exports.default = _default;
});
;define("ember-project/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let blogposts = [{
    "_id": "5c588e1bc23c5e5620c59b4e",
    "title": "Helloooo",
    "body": "teeest",
    "datePosted": "2019-02-04T19:10:19.422Z",
    "__v": 0
  }, {
    "_id": "5c589c1f773a76461cf1e4be",
    "title": "titletest",
    "body": "bodytest",
    "datePosted": "2019-02-04T20:10:07.790Z",
    "__v": 0
  }, {
    "_id": "5c58becee53d4925a88c20fb",
    "title": "titletest2",
    "body": "titletest2",
    "datePosted": "2019-02-04T22:38:06.660Z",
    "__v": 0
  }, {
    "_id": "5c58cf647d0a52086c5aac5d",
    "body": "rere",
    "title": "rerere",
    "datePosted": "2019-02-04T23:48:52.477Z",
    "__v": 0
  }];

  var _default = Ember.Route.extend({
    model() {
      // console.log("IN ROUTE");
      // console.log(blogposts);
      //var code = this.store.findAll('blogpost');
      //console.log(typeof code);
      //console.log(code);
      return blogposts; //console.log(this.store.findAll('blogpost'));

      /*
      return this.store.findAll('blogpost').then(result => {
        console.log(result);
         return result;
      });
      */
    },

    actions: {
      createPost: function () {
        console.log('we here');
        this.transitionTo('createpost');
      }
    }
  });

  _exports.default = _default;
});
;define("ember-project/routes/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("ember-project/routes/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("ember-project/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ember-project/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
;define("ember-project/services/session", ["exports", "ember-simple-auth/services/session"], function (_exports, _session) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _session.default;
  _exports.default = _default;
});
;define("ember-project/session-stores/application", ["exports", "ember-simple-auth/session-stores/adaptive"], function (_exports, _adaptive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _adaptive.default.extend();

  _exports.default = _default;
});
;define("ember-project/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VXWH7LGB",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"nav-bar\"],false],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/templates/createpost", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "HjvJKynA",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-sm-12 pull-left\"],[9],[0,\"\\n    \"],[1,[27,\"create-new-post\",null,[[\"blogpost\"],[[23,[\"model\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/createpost.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/JogAL7f",
    "block": "{\"symbols\":[\"blogpost\"],\"statements\":[[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\nVIEW\\n\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-md-12\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"type\",\"button\"],[9],[0,\"Create Post\"],[3,\"action\",[[22,0,[]],\"createPost\"]],[10],[0,\"\\n    \"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"view-post\",null,[[\"blogpost\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\nVIEW\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8nfX/ii3",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[21,\"login-form\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/login.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-project/templates/signup", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/2nEHWh0",
    "block": "{\"symbols\":[],\"statements\":[[1,[27,\"signup-form\",null,[[\"store\"],[[23,[\"store\"]]]]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/signup.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('ember-project/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("ember-project/app")["default"].create({"name":"ember-project","version":"0.0.0+e34b109a"});
          }
        
//# sourceMappingURL=ember-project.map
