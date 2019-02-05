"use strict"
define("ember-project/adapters/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default.RESTAdapter.extend({})
e.default=o}),define("ember-project/app",["exports","ember-project/resolver","ember-load-initializers","ember-project/config/environment"],function(e,t,o,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,o.default)(a,r.default.modulePrefix)
var n=a
e.default=n}),define("ember-project/components/create-new-post/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({actions:{createPost:function(e){console.log(e.title,e.text)}}})
e.default=t}),define("ember-project/components/create-new-post/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"P0msp0D7",block:'{"symbols":[],"statements":[[7,"h3"],[9],[0,"Create a New Post"],[10],[0,"\\n\\n"],[7,"form"],[11,"id","NewPost"],[9],[0,"\\n  "],[7,"p"],[9],[0,"\\n    "],[1,[27,"input",null,[["value","placeholder"],[[23,["newPost","title"]],"Title"]]],false],[0,"\\n  "],[10],[0,"\\n  "],[7,"p"],[9],[0,"\\n    "],[1,[27,"textarea",null,[["value","placeholder","rows","cols"],[[23,["newPost","text"]],"Body","10","140"]]],false],[0,"\\n  "],[10],[0,"\\n  "],[7,"p"],[9],[0,"\\n    "],[7,"button"],[9],[0,"Publish"],[3,"action",[[22,0,[]],"createPost",[23,["newPost"]]]],[10],[0,"\\n  "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"ember-project/components/create-new-post/template.hbs"}})
e.default=t}),define("ember-project/components/view-post/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({})
e.default=t}),define("ember-project/components/view-post/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"myHIZcg5",block:'{"symbols":["&default"],"statements":[[0,"  "],[7,"p"],[9],[1,[23,["blogpost","title"]],false],[0," - "],[1,[23,["blogpost","body"]],false],[10],[0,"\\n"],[14,1]],"hasEval":false}',meta:{moduleName:"ember-project/components/view-post/template.hbs"}})
e.default=t}),define("ember-project/helpers/app-version",["exports","ember-project/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,o){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,n=r.versionOnly||r.hideSha,l=r.shaOnly||r.hideVersion,i=null
return n&&(r.showExtended&&(i=a.match(o.versionExtendedRegExp)),i||(i=a.match(o.versionRegExp))),l&&(i=a.match(o.shaRegExp)),i?i[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var a=Ember.Helper.helper(r)
e.default=a}),define("ember-project/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("ember-project/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("ember-project/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-project/config/environment"],function(e,t,o){var r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o.default.APP&&(r=o.default.APP.name,a=o.default.APP.version)
var n={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=n}),define("ember-project/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=o}),define("ember-project/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("ember-project/initializers/export-application-global",["exports","ember-project/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default=void 0
var r={name:"export-application-global",initialize:o}
e.default=r}),define("ember-project/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"ember-data",initialize:t.default}
e.default=o}),define("ember-project/models/blogpost",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default.Model.extend({title:t.default.attr("string"),body:t.default.attr("string")})
e.default=o}),define("ember-project/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("ember-project/router",["exports","ember-project/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){})
var r=o
e.default=r}),define("ember-project/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=[{_id:"5c588e1bc23c5e5620c59b4e",title:"Helloooo",body:"teeest",datePosted:"2019-02-04T19:10:19.422Z",__v:0},{_id:"5c589c1f773a76461cf1e4be",title:"titletest",body:"bodytest",datePosted:"2019-02-04T20:10:07.790Z",__v:0},{_id:"5c58becee53d4925a88c20fb",title:"titletest2",body:"titletest2",datePosted:"2019-02-04T22:38:06.660Z",__v:0},{_id:"5c58cf647d0a52086c5aac5d",body:"rere",title:"rerere",datePosted:"2019-02-04T23:48:52.477Z",__v:0}],o=Ember.Route.extend({model:function(){return console.log("IN ROUTE"),console.log(t),this.store.findAll("blogpost").then(function(e){return console.log(e),e})}})
e.default=o}),define("ember-project/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-project/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"pkAiVNVX",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"ember-project/templates/application.hbs"}})
e.default=t}),define("ember-project/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"q9hQdiAN",block:'{"symbols":["blogpost"],"statements":[[4,"create-new-post",null,[["newPost","createPost"],[[23,["model"]],"createPost"]],{"statements":[],"parameters":[]},null],[0,"\\n\\nVIEW\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"  "],[1,[27,"view-post",null,[["blogpost"],[[22,1,[]]]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"VIEW"]],"hasEval":false}',meta:{moduleName:"ember-project/templates/index.hbs"}})
e.default=t}),define("ember-project/config/environment",[],function(){try{var e="ember-project/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),o={default:JSON.parse(unescape(t))}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("ember-project/app").default.create({name:"ember-project",version:"0.0.0+873d41c4"})
