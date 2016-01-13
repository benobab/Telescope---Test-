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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package['telescope:lib']._;
var Template = Package.templating.Template;
var Telescope = Package['telescope:lib'].Telescope;
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
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Mongo = Package.mongo.Mongo;
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
var HTML = Package.htmljs.HTML;
var WebApp = Package.webapp.WebApp;
var DDP = Package['ddp-client'].DDP;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var Reload = Package.reload.Reload;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/package-i18n.js                                 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
TAPi18n.packages["telescope:getting-started"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                      // 2
// define package's translation function (proxy to the i18next)                       // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                      // 4
// define the package's templates registrar                                           // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:getting-started");
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                      // 8
// Record the list of templates prior to package load                                 // 9
var _ = Package.underscore._;                                                         // 10
non_package_templates = _.keys(Template);                                             // 11
                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/lib/getting_started.js                          //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
Users.addField({                                                                      // 1
  fieldName: 'telescope.isDummy',                                                     // 2
  fieldSchema: {                                                                      // 3
    type: Boolean,                                                                    // 4
    optional: true,                                                                   // 5
    autoform: {                                                                       // 6
      omit: true                                                                      // 7
    }                                                                                 //
  }                                                                                   //
});                                                                                   //
                                                                                      //
Posts.addField({                                                                      // 12
  fieldName: 'dummySlug',                                                             // 13
  fieldSchema: {                                                                      // 14
    type: String,                                                                     // 15
    optional: true,                                                                   // 16
    autoform: {                                                                       // 17
      omit: true                                                                      // 18
    }                                                                                 //
  }                                                                                   //
});                                                                                   //
                                                                                      //
Posts.addField({                                                                      // 23
  fieldName: 'isDummy',                                                               // 24
  fieldSchema: {                                                                      // 25
    type: Boolean,                                                                    // 26
    optional: true,                                                                   // 27
    autoform: {                                                                       // 28
      omit: true                                                                      // 29
    }                                                                                 //
  }                                                                                   //
});                                                                                   //
                                                                                      //
Comments.addField({                                                                   // 34
  fieldName: 'isDummy',                                                               // 35
  fieldSchema: {                                                                      // 36
    type: Boolean,                                                                    // 37
    optional: true,                                                                   // 38
    autoform: {                                                                       // 39
      omit: true                                                                      // 40
    }                                                                                 //
  }                                                                                   //
});                                                                                   //
                                                                                      //
/**                                                                                   //
 * Copy over profile.isDummy to telescope.isDummy on user creation                    //
 * @param {Object} user – the user object being iterated on and returned              //
 * @param {Object} options – user options                                             //
 */                                                                                   //
function copyDummyProperty(user, options) {                                           // 50
  if (typeof user.profile.isDummy !== "undefined") {                                  // 51
    user.telescope.isDummy = user.profile.isDummy;                                    // 52
  }                                                                                   //
  return user;                                                                        // 54
}                                                                                     //
Telescope.callbacks.add("onCreateUser", copyDummyProperty);                           // 56
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ar.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);        // 8
                                                                                      // 9
for (var i = 0; i < package_templates.length; i++) {                                  // 10
  var package_template = package_templates[i];                                        // 11
                                                                                      // 12
  registerI18nTemplate(package_template);                                             // 13
}                                                                                     // 14
                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/bg.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/cs.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/da.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/de.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/el.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/en.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
// integrate the fallback language translations                                       // 8
translations = {};                                                                    // 9
translations[namespace] = {"what_an_awesome_app":"What an awesome app!"};             // 10
TAPi18n._loadLangFileObject("en", translations);                                      // 11
                                                                                      // 12
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/es.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/et.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/fr.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/hu.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/id.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/it.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ja.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/kk.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ko.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/nl.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/pl.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/pt-BR.i1 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ro.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ru.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/sl.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/sv.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/th.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/tr.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/vi.i18n. //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/zh-CN.i1 //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _ = Package.underscore._,                                                         // 1
    package_name = "telescope:getting-started",                                       // 2
    namespace = "telescope:getting-started";                                          // 3
                                                                                      // 4
if (package_name != "project") {                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                             // 6
}                                                                                     // 7
                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:getting-started'] = {};

})();
