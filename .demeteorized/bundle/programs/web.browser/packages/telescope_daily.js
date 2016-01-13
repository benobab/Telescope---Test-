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
var __, registerI18nTemplate, registerTemplate, non_package_templates, daysPerPage, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/package-i18n.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
TAPi18n.packages["telescope:daily"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                  // 2
// define package's translation function (proxy to the i18next)                                                   // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                  // 4
// define the package's templates registrar                                                                       // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:daily");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                  // 8
// Record the list of templates prior to package load                                                             // 9
var _ = Package.underscore._;                                                                                     // 10
non_package_templates = _.keys(Template);                                                                         // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/daily.js                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
daysPerPage = 5;                                                                                                  // 1
                                                                                                                  //
Telescope.menuItems.add("viewsMenu", {                                                                            // 3
  route: Posts.getRoute,                                                                                          // 4
  name: 'daily',                                                                                                  // 5
  label: 'daily',                                                                                                 // 6
  description: 'day_by_day_view',                                                                                 // 7
  viewTemplate: 'posts_daily'                                                                                     // 8
});                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/template.after_day.js                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("after_day");                                                                                // 2
Template["after_day"] = new Template("Template.after_day", (function() {                                          // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/template.before_day.js                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("before_day");                                                                               // 2
Template["before_day"] = new Template("Template.before_day", (function() {                                        // 3
  var view = this;                                                                                                // 4
  return "";                                                                                                      // 5
}));                                                                                                              // 6
                                                                                                                  // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/template.posts_daily.js                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("posts_daily");                                                                              // 2
Template["posts_daily"] = new Template("Template.posts_daily", (function() {                                      // 3
  var view = this;                                                                                                // 4
  return HTML.DIV({                                                                                               // 5
    "class": "posts-daily"                                                                                        // 6
  }, "\n    ", Blaze.Each(function() {                                                                            // 7
    return Spacebars.call(view.lookup("days"));                                                                   // 8
  }, function() {                                                                                                 // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("before_day")), "\n      ", HTML.DIV({             // 10
      "class": "posts-day"                                                                                        // 11
    }, "\n        ", Blaze._TemplateWith(function() {                                                             // 12
      return {                                                                                                    // 13
        date: Spacebars.call(view.lookup("date"))                                                                 // 14
      };                                                                                                          // 15
    }, function() {                                                                                               // 16
      return Spacebars.include(view.lookupTemplate("day_heading"));                                               // 17
    }), "\n        ", Blaze._TemplateWith(function() {                                                            // 18
      return Spacebars.call(view.lookup("arguments"));                                                            // 19
    }, function() {                                                                                               // 20
      return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                     // 21
    }), "\n      "), "\n      ", Spacebars.include(view.lookupTemplate("after_day")), "\n    " ];                 // 22
  }), "\n    ", Blaze._TemplateWith(function() {                                                                  // 23
    return {                                                                                                      // 24
      handler: Spacebars.call(view.lookup("loadMoreHandler"))                                                     // 25
    };                                                                                                            // 26
  }, function() {                                                                                                 // 27
    return Spacebars.include(view.lookupTemplate("load_more_days"));                                              // 28
  }), "\n  ");                                                                                                    // 29
}));                                                                                                              // 30
                                                                                                                  // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/posts_daily.js                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Template.posts_daily.onCreated(function () {                                                                      // 1
  var template = this;                                                                                            // 2
  var daysCount = FlowRouter.getQueryParam("days") || daysPerPage;                                                // 3
  template.daysCount = new ReactiveVar(daysCount);                                                                // 4
});                                                                                                               //
                                                                                                                  //
Template.posts_daily.helpers({                                                                                    // 7
  days: function () {                                                                                             // 8
    var instance = Template.instance();                                                                           // 9
    var daysCount = instance.daysCount.get();                                                                     // 10
                                                                                                                  //
    var daysArray = [];                                                                                           // 12
    for (var i = 0; i < daysCount; i++) {                                                                         // 13
      daysArray.push({                                                                                            // 14
        date: moment().subtract(i, 'days').startOf('day').toDate(),                                               // 15
        index: i                                                                                                  // 16
      });                                                                                                         //
    }                                                                                                             //
    return daysArray;                                                                                             // 19
  },                                                                                                              //
  arguments: function () {                                                                                        // 21
    var instance = Template.instance();                                                                           // 22
    var daysCount = instance.daysCount.get();                                                                     // 23
                                                                                                                  //
    FlowRouter.watchPathChange();                                                                                 // 25
    var terms = _.clone(FlowRouter.current().queryParams);                                                        // 26
                                                                                                                  //
    terms = _.extend(terms, {                                                                                     // 28
      view: "top",                                                                                                // 29
      date: this.date,                                                                                            // 30
      after: moment(this.date).format("YYYY-MM-DD"),                                                              // 31
      before: moment(this.date).format("YYYY-MM-DD"),                                                             // 32
      enableCache: daysCount <= 15 ? true : false // only cache first 15 days                                     // 33
    });                                                                                                           //
                                                                                                                  //
    var context = { terms: terms };                                                                               // 36
    return context;                                                                                               // 37
  },                                                                                                              //
  loadMoreHandler: function () {                                                                                  // 39
    var instance = Template.instance();                                                                           // 40
    var daysCount = instance.daysCount.get();                                                                     // 41
                                                                                                                  //
    return function () {                                                                                          // 43
      var newCount = daysCount + daysPerPage;                                                                     // 44
      instance.daysCount.set(newCount);                                                                           // 45
    };                                                                                                            //
  }                                                                                                               //
});                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/template.day_heading.js                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("day_heading");                                                                              // 2
Template["day_heading"] = new Template("Template.day_heading", (function() {                                      // 3
  var view = this;                                                                                                // 4
  return HTML.H2({                                                                                                // 5
    "class": "posts-day-heading"                                                                                  // 6
  }, Blaze.View("lookup:formatDate", function() {                                                                 // 7
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("date"), "dddd, MMMM Do YYYY");              // 8
  }));                                                                                                            // 9
}));                                                                                                              // 10
                                                                                                                  // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/template.load_more_days.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("load_more_days");                                                                           // 2
Template["load_more_days"] = new Template("Template.load_more_days", (function() {                                // 3
  var view = this;                                                                                                // 4
  return HTML.A({                                                                                                 // 5
    "class": "load-more-days-button grid-module",                                                                 // 6
    href: function() {                                                                                            // 7
      return Spacebars.mustache(view.lookup("loadMoreDaysPath"));                                                 // 8
    }                                                                                                             // 9
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 10
    return Spacebars.mustache(view.lookup("_"), "load_next_days");                                                // 11
  })));                                                                                                           // 12
}));                                                                                                              // 13
                                                                                                                  // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/lib/client/templates/load_more_days.js                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Template.load_more_days.helpers({                                                                                 // 1
  loadMoreDaysPath: function () {                                                                                 // 2
    // FlowRouter.watchPathChange()                                                                               //
    // var currentQuery = _.clone(FlowRouter.current().queryParams);                                              //
    // var days = (FlowRouter.getQueryParam("days") || daysPerPage) + daysPerPage;                                //
    // var newQuery = _.extend(currentQuery, {days: days});                                                       //
    // return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);                             //
  }                                                                                                               //
});                                                                                                               //
                                                                                                                  //
Template.load_more_days.events({                                                                                  // 11
  'click .load-more-days-button': function (e, instance) {                                                        // 12
    e.preventDefault();                                                                                           // 13
    instance.data.handler();                                                                                      // 14
  }                                                                                                               //
});                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/ar.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                    // 8
                                                                                                                  // 9
for (var i = 0; i < package_templates.length; i++) {                                                              // 10
  var package_template = package_templates[i];                                                                    // 11
                                                                                                                  // 12
  registerI18nTemplate(package_template);                                                                         // 13
}                                                                                                                 // 14
                                                                                                                  // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/bg.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/cs.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/da.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/de.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/el.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/en.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
// integrate the fallback language translations                                                                   // 8
translations = {};                                                                                                // 9
translations[namespace] = {"daily":"Daily","day_by_day_view":"The most popular posts of each day.","load_next_days":"Load Next Days"};
TAPi18n._loadLangFileObject("en", translations);                                                                  // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/es.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/et.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/fr.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/hu.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/id.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/it.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/ja.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/kk.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/ko.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/nl.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/pl.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/pt-BR.i18n.js                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/ro.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/ru.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/sl.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/sv.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/th.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/tr.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/vi.i18n.js                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_daily/packages/telescope_dailyi18n/zh-CN.i18n.js                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "telescope:daily",                                                                             // 2
    namespace = "telescope:daily";                                                                                // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
                                                                                                                  // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:daily'] = {};

})();
