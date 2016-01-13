//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var Messages = Package['telescope:messages'].Messages;
var i18n = Package['telescope:i18n'].i18n;
var Events = Package['telescope:events'].Events;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
var Posts = Package['telescope:posts'].Posts;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Session = Package.session.Session;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var Picker = Package['meteorhacks:picker'].Picker;
var DocHead = Package['kadira:dochead'].DocHead;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var marked = Package['chuangbo:marked'].marked;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var __init_fast_render = Package['meteorhacks:fast-render'].__init_fast_render;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var Cookie = Package['chuangbo:cookie'].Cookie;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var RouterAutoscroll = Package['okgrow:router-autoscroll'].RouterAutoscroll;
var Counts = Package['tmeasday:publish-counts'].Counts;
var WebApp = Package.webapp.WebApp;
var DDP = Package['ddp-client'].DDP;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var Reload = Package.reload.Reload;
var HTML = Package.htmljs.HTML;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/lib/search.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// push "search" template to primaryNav                                                                            //
Telescope.modules.add("primaryNav", {                                                                              // 2
  template: 'search',                                                                                              // 3
  order: 100                                                                                                       // 4
});                                                                                                                //
                                                                                                                   //
Telescope.modules.add("mobileNav", {                                                                               // 7
  template: 'search',                                                                                              // 8
  order: 1                                                                                                         // 9
});                                                                                                                //
                                                                                                                   //
Telescope.colorElements.add('.search.empty .search-field', 'secondaryContrastColor');                              // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/lib/parameters.js                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
function addSearchQueryParameter(parameters, terms) {                                                              // 1
  if (!!terms.query) {                                                                                             // 2
    var parameters = Telescope.utils.deepExtend(true, parameters, {                                                // 3
      find: {                                                                                                      // 4
        $or: [{ title: { $regex: terms.query, $options: 'i' } }, { url: { $regex: terms.query, $options: 'i' } }, { body: { $regex: terms.query, $options: 'i' } }]
      }                                                                                                            //
    });                                                                                                            //
  }                                                                                                                //
  return parameters;                                                                                               // 13
}                                                                                                                  //
Telescope.callbacks.add("postsParameters", addSearchQueryParameter);                                               // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/package-i18n.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
TAPi18n.packages["telescope:search"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                   // 2
// define package's translation function (proxy to the i18next)                                                    // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                   // 4
// define the package's templates registrar                                                                        // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:search");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                   // 8
// Record the list of templates prior to package load                                                              // 9
var _ = Package.underscore._;                                                                                      // 10
non_package_templates = _.keys(Template);                                                                          // 11
                                                                                                                   // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/lib/client/templates/template.search.js                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("search");                                                                                    // 2
Template["search"] = new Template("Template.search", (function() {                                                 // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("canSearch"));                                                               // 6
  }, function() {                                                                                                  // 7
    return [ "\n    ", HTML.DIV({                                                                                  // 8
      "class": function() {                                                                                        // 9
        return [ "search ", Spacebars.mustache(view.lookup("searchQueryEmpty")), " ", Spacebars.mustache(view.lookup("moduleClass")) ];
      }                                                                                                            // 11
    }, "\n        ", HTML.INPUT({                                                                                  // 12
      id: "search",                                                                                                // 13
      type: "search",                                                                                              // 14
      "class": "search-field",                                                                                     // 15
      placeholder: function() {                                                                                    // 16
        return Spacebars.mustache(view.lookup("_"), "rechercher...");                                              // 17
      },                                                                                                           // 18
      value: function() {                                                                                          // 19
        return Spacebars.mustache(view.lookup("searchQuery"));                                                     // 20
      }                                                                                                            // 21
    }), "\n    "), "\n  " ];                                                                                       // 22
  });                                                                                                              // 23
}));                                                                                                               // 24
                                                                                                                   // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/lib/client/templates/search.js                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay                                              //
var delay = (function () {                                                                                         // 2
  var timer = 0;                                                                                                   // 3
  return function (callback, ms) {                                                                                 // 4
    clearTimeout(timer);                                                                                           // 5
    timer = setTimeout(callback, ms);                                                                              // 6
  };                                                                                                               //
})();                                                                                                              //
                                                                                                                   //
Template.search.helpers({                                                                                          // 10
  canSearch: function () {                                                                                         // 11
    return Users.can.view(Meteor.user());                                                                          // 12
  },                                                                                                               //
  searchQuery: function () {                                                                                       // 14
    return FlowRouter.getQueryParam("query");                                                                      // 15
  },                                                                                                               //
  searchQueryEmpty: function () {                                                                                  // 17
    return !!FlowRouter.getQueryParam("query") ? "" : "empty";                                                     // 18
  }                                                                                                                //
});                                                                                                                //
                                                                                                                   //
Template.search.events({                                                                                           // 22
  'keyup .search-field': function (e) {                                                                            // 23
                                                                                                                   //
    e.preventDefault();                                                                                            // 25
                                                                                                                   //
    var val = $(e.target).val(),                                                                                   // 27
        $search = $('.search');                                                                                    //
                                                                                                                   //
    // if we're not on search route, go to it                                                                      //
                                                                                                                   //
    if (FlowRouter.getRouteName() !== "postsDefault") {                                                            // 32
      FlowRouter.go("postsDefault");                                                                               // 33
    }                                                                                                              //
                                                                                                                   //
    if (val === '') {                                                                                              // 36
      // if search field is empty                                                                                  //
      $search.addClass('empty');                                                                                   // 38
      val = null;                                                                                                  // 39
    } else {                                                                                                       //
      $search.removeClass('empty');                                                                                // 41
    }                                                                                                              //
                                                                                                                   //
    delay(function () {                                                                                            // 44
      FlowRouter.setQueryParams({ query: val });                                                                   // 45
    }, 700);                                                                                                       //
  }                                                                                                                //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/ar.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                     // 8
                                                                                                                   // 9
for (var i = 0; i < package_templates.length; i++) {                                                               // 10
  var package_template = package_templates[i];                                                                     // 11
                                                                                                                   // 12
  registerI18nTemplate(package_template);                                                                          // 13
}                                                                                                                  // 14
                                                                                                                   // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/bg.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/cs.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/da.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/de.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/el.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/en.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
// integrate the fallback language translations                                                                    // 8
translations = {};                                                                                                 // 9
translations[namespace] = {"load_more":"Load more","search":"Search","search_logs":"Search Logs","see_what_people_are_searching_for":"See what people are searching for."};
TAPi18n._loadLangFileObject("en", translations);                                                                   // 11
                                                                                                                   // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/es.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/et.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/fr.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/hu.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/id.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/it.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/ja.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/kk.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/ko.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/nl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/pl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/pt-BR.i18n.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/ro.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/ru.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/sl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/sv.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/th.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/tr.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/vi.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_search/packages/telescope_searchi18n/zh-CN.i18n.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:search",                                                                             // 2
    namespace = "telescope:search";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
                                                                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:search'] = {};

})();
