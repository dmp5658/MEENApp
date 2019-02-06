'use strict';



;define("ember-project/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({});

  _exports.default = _default;
});
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
;define("ember-project/components/create-new-post/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    actions: {
      createPost: function (newPost) {
        console.log(newPost.title, newPost.text);
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
    "id": "P0msp0D7",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h3\"],[9],[0,\"Create a New Post\"],[10],[0,\"\\n\\n\"],[7,\"form\"],[11,\"id\",\"NewPost\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"input\",null,[[\"value\",\"placeholder\"],[[23,[\"newPost\",\"title\"]],\"Title\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[1,[27,\"textarea\",null,[[\"value\",\"placeholder\",\"rows\",\"cols\"],[[23,[\"newPost\",\"text\"]],\"Body\",\"10\",\"140\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"\\n    \"],[7,\"button\"],[9],[0,\"Publish\"],[3,\"action\",[[22,0,[]],\"createPost\",[23,[\"newPost\"]]]],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/components/create-new-post/template.hbs"
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
    "id": "myHIZcg5",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"  \"],[7,\"p\"],[9],[1,[23,[\"blogpost\",\"title\"]],false],[0,\" - \"],[1,[23,[\"blogpost\",\"body\"]],false],[10],[0,\"\\n\"],[14,1]],\"hasEval\":false}",
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
;define("ember-project/models/blogpost", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    body: _emberData.default.attr('string')
  });

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
  });
  var _default = Router;
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
      console.log("IN ROUTE");
      console.log(blogposts); //var code = this.store.findAll('blogpost');
      //console.log(typeof code);
      //console.log(code);
      //console.log(this.store.findAll('blogpost'));

      return this.store.findAll('blogpost').then(result => {
        console.log(result);
        return result;
      });
    }

  });

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
;define("ember-project/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "pkAiVNVX",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/application.hbs"
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
    "id": "q9hQdiAN",
    "block": "{\"symbols\":[\"blogpost\"],\"statements\":[[4,\"create-new-post\",null,[[\"newPost\",\"createPost\"],[[23,[\"model\"]],\"createPost\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\nVIEW\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"view-post\",null,[[\"blogpost\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"VIEW\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-project/templates/index.hbs"
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
    "id": "8Ukf51ME",
    "block": "{\"symbols\":[],\"statements\":[[7,\"form\"],[9],[0,\"\\n  \"],[7,\"label\"],[11,\"for\",\"loginOrEmail\"],[9],[0,\"Login or Email\"],[10],[0,\"\\n  \"],[1,[27,\"view\",[[23,[\"Ember\",\"TextField\"]]],[[\"valueBinding\",\"placeholder\"],[\"loginOrEmail\",\"Login or Email\"]]],false],[0,\"\\n  \"],[7,\"label\"],[11,\"for\",\"password\"],[9],[0,\"Password\"],[10],[0,\"\\n  \"],[1,[27,\"view\",[[23,[\"Ember\",\"TextField\"]]],[[\"valueBinding\",\"placeholder\"],[\"password\",\"Password\"]]],false],[0,\"\\n  \"],[7,\"button\"],[9],[0,\"Login\"],[3,\"action\",[[22,0,[]],\"createSession\"]],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
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
            require("ember-project/app")["default"].create({"name":"ember-project","version":"0.0.0+873d41c4"});
          }
        
//# sourceMappingURL=ember-project.map
