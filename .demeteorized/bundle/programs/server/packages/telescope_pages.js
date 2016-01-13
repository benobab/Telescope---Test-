(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var i18n = Package['telescope:i18n'].i18n;
var Events = Package['telescope:events'].Events;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
var Posts = Package['telescope:posts'].Posts;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var Picker = Package['meteorhacks:picker'].Picker;
var DocHead = Package['kadira:dochead'].DocHead;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var marked = Package['chuangbo:marked'].marked;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var MeteorFilesHelpers = Package['sanjo:meteor-files-helpers'].MeteorFilesHelpers;
var Handlebars = Package.ui.Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var Counts = Package['tmeasday:publish-counts'].Counts;
var publishCount = Package['tmeasday:publish-counts'].publishCount;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Spacebars = Package.spacebars.Spacebars;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var HTML = Package.htmljs.HTML;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var Pages, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/lib/pages.js                                                                  //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
Pages = new Mongo.Collection('pages');                                                                    // 1
                                                                                                          //
Telescope.subscriptions.preload('pages');                                                                 // 3
                                                                                                          //
Pages.schema = new SimpleSchema({                                                                         // 5
  title: {                                                                                                // 6
    type: String                                                                                          // 7
  },                                                                                                      //
  slug: {                                                                                                 // 9
    type: String,                                                                                         // 10
    optional: true                                                                                        // 11
  },                                                                                                      //
  content: {                                                                                              // 13
    type: String,                                                                                         // 14
    autoform: {                                                                                           // 15
      rows: 10                                                                                            // 16
    }                                                                                                     //
  },                                                                                                      //
  order: {                                                                                                // 19
    type: Number,                                                                                         // 20
    optional: true                                                                                        // 21
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
Meteor.startup(function () {                                                                              // 25
  Pages.internationalize();                                                                               // 26
});                                                                                                       //
                                                                                                          //
Pages.attachSchema(Pages.schema);                                                                         // 29
                                                                                                          //
Pages.before.insert(function (userId, doc) {                                                              // 31
  // if no slug has been provided, generate one                                                           //
  if (!doc.slug) doc.slug = Telescope.utils.slugify(doc.title);                                           // 33
});                                                                                                       //
                                                                                                          //
Telescope.modules.add("primaryNav", {                                                                     // 37
  template: "pages_menu",                                                                                 // 38
  order: 5                                                                                                // 39
});                                                                                                       //
                                                                                                          //
Telescope.modules.add("mobileNav", {                                                                      // 42
  template: 'pages_menu',                                                                                 // 43
  order: 5                                                                                                // 44
});                                                                                                       //
                                                                                                          //
Meteor.startup(function () {                                                                              // 47
  Pages.allow({                                                                                           // 48
    insert: Users.is.adminById,                                                                           // 49
    update: Users.is.adminById,                                                                           // 50
    remove: Users.is.adminById                                                                            // 51
  });                                                                                                     //
                                                                                                          //
  Meteor.methods({                                                                                        // 54
    insertPage: function (pageTitle, pageContent) {                                                       // 55
      check(pageTitle, String);                                                                           // 56
      check(pageContent, String);                                                                         // 57
      return Feeds.insert({ title: pageTitle, content: pageContent });                                    // 58
    }                                                                                                     //
  });                                                                                                     //
});                                                                                                       //
                                                                                                          //
Telescope.menuItems.add("adminMenu", {                                                                    // 63
  route: 'adminPages',                                                                                    // 64
  label: "pages",                                                                                         // 65
  description: "manage_static_pages"                                                                      // 66
});                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/lib/routes.js                                                                 //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
                                                                                                          //
Telescope.adminRoutes.route('/pages', {                                                                   // 2
  name: "adminPages",                                                                                     // 3
  action: function (params, queryParams) {                                                                // 4
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "pages" });                              // 5
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
FlowRouter.route('/page/:slug', {                                                                         // 9
  name: "page",                                                                                           // 10
  action: function (params, queryParams) {                                                                // 11
    BlazeLayout.render("layout", { main: "page" });                                                       // 12
  }                                                                                                       //
});                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/lib/server/publications.js                                                    //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
Meteor.publish('pages', function () {                                                                     // 1
  return Pages.find({});                                                                                  // 2
});                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/ar.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                     // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                    // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                           // 11
  TAPi18n.translations["ar"] = {};                                                                        // 12
}                                                                                                         // 13
                                                                                                          // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                // 15
  TAPi18n.translations["ar"][namespace] = {};                                                             // 16
}                                                                                                         // 17
                                                                                                          // 18
_.extend(TAPi18n.translations["ar"][namespace], {});                                                      // 19
TAPi18n._registerServerTranslator("ar", namespace);                                                       // 20
                                                                                                          // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/bg.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                           // 9
  TAPi18n.translations["bg"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                // 13
  TAPi18n.translations["bg"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["bg"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("bg", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/cs.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                           // 9
  TAPi18n.translations["cs"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                // 13
  TAPi18n.translations["cs"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["cs"][namespace], {"manage_static_pages":"Správa statických stránek"});     // 17
TAPi18n._registerServerTranslator("cs", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/da.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                       // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                           // 9
  TAPi18n.translations["da"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                // 13
  TAPi18n.translations["da"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["da"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("da", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/de.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                           // 9
  TAPi18n.translations["de"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                // 13
  TAPi18n.translations["de"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["de"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("de", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/el.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                           // 9
  TAPi18n.translations["el"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                // 13
  TAPi18n.translations["el"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["el"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("el", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/en.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
// integrate the fallback language translations                                                           // 8
translations = {};                                                                                        // 9
translations[namespace] = {"pages":"Pages","manage_static_pages":"Manage static pages"};                  // 10
TAPi18n._loadLangFileObject("en", translations);                                                          // 11
TAPi18n._registerServerTranslator("en", namespace);                                                       // 12
                                                                                                          // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/es.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                            // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                           // 9
  TAPi18n.translations["es"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                // 13
  TAPi18n.translations["es"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["es"][namespace], {"manage_static_pages":"Administrar páginas estáticas"});
TAPi18n._registerServerTranslator("es", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/et.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                           // 9
  TAPi18n.translations["et"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                // 13
  TAPi18n.translations["et"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["et"][namespace], {"manage_static_pages":"Muuda staatilisi lehekülgi"});    // 17
TAPi18n._registerServerTranslator("et", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/fr.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                           // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                           // 9
  TAPi18n.translations["fr"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                // 13
  TAPi18n.translations["fr"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["fr"][namespace], {"manage_static_pages":"Gérer les pages statiques"});     // 17
TAPi18n._registerServerTranslator("fr", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/hu.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                   // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                           // 9
  TAPi18n.translations["hu"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                // 13
  TAPi18n.translations["hu"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["hu"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("hu", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/id.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                        // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                           // 9
  TAPi18n.translations["id"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                // 13
  TAPi18n.translations["id"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["id"][namespace], {"manage_static_pages":"Mengelola halaman statis"});      // 17
TAPi18n._registerServerTranslator("id", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/it.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                   // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                           // 9
  TAPi18n.translations["it"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                // 13
  TAPi18n.translations["it"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["it"][namespace], {"manage_static_pages":"Gestire le pagine statiche"});    // 17
TAPi18n._registerServerTranslator("it", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/ja.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                       // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                           // 9
  TAPi18n.translations["ja"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                // 13
  TAPi18n.translations["ja"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("ja", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/kk.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                  // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                           // 9
  TAPi18n.translations["kk"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                // 13
  TAPi18n.translations["kk"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["kk"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("kk", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/ko.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                           // 9
  TAPi18n.translations["ko"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                // 13
  TAPi18n.translations["ko"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["ko"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("ko", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/nl.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                   // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                           // 9
  TAPi18n.translations["nl"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                // 13
  TAPi18n.translations["nl"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["nl"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("nl", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/pl.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                      // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                           // 9
  TAPi18n.translations["pl"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                // 13
  TAPi18n.translations["pl"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["pl"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("pl", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/pt-BR.i18n.js                                    //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                         // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                        // 9
  TAPi18n.translations["pt-BR"] = {};                                                                     // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                             // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                          // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {});                                                   // 17
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                    // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/ro.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                           // 9
  TAPi18n.translations["ro"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                // 13
  TAPi18n.translations["ro"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["ro"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("ro", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/ru.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                           // 9
  TAPi18n.translations["ru"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                // 13
  TAPi18n.translations["ru"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["ru"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("ru", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/sl.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                              // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                           // 9
  TAPi18n.translations["sl"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                // 13
  TAPi18n.translations["sl"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["sl"][namespace], {"manage_static_pages":"Upravljajte statične strani"});   // 17
TAPi18n._registerServerTranslator("sl", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/sv.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                           // 9
  TAPi18n.translations["sv"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                // 13
  TAPi18n.translations["sv"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["sv"][namespace], {"manage_static_pages":"Hantera statiska sidor"});        // 17
TAPi18n._registerServerTranslator("sv", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/th.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                           // 9
  TAPi18n.translations["th"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                // 13
  TAPi18n.translations["th"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["th"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("th", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/tr.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                           // 9
  TAPi18n.translations["tr"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                // 13
  TAPi18n.translations["tr"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["tr"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("tr", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/vi.i18n.js                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                              // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                           // 9
  TAPi18n.translations["vi"] = {};                                                                        // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                // 13
  TAPi18n.translations["vi"][namespace] = {};                                                             // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["vi"][namespace], {});                                                      // 17
TAPi18n._registerServerTranslator("vi", namespace);                                                       // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_pages/packages/telescope_pagesi18n/zh-CN.i18n.js                                    //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "project",                                                                             // 2
    namespace = "project";                                                                                // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                            // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                        // 9
  TAPi18n.translations["zh-CN"] = {};                                                                     // 10
}                                                                                                         // 11
                                                                                                          // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                             // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                          // 14
}                                                                                                         // 15
                                                                                                          // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                                   // 17
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                    // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:pages'] = {
  Pages: Pages
};

})();

//# sourceMappingURL=telescope_pages.js.map
