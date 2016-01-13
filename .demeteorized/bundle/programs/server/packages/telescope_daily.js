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
var __, daysPerPage, translations;

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
                                                                                                                  // 5
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
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                   // 8
  TAPi18n.translations["ar"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                        // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                   // 8
  TAPi18n.translations["bg"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                        // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                   // 8
  TAPi18n.translations["cs"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                        // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["cs"][namespace], {"daily":"Den po dni","day_by_day_view":"Nejoblíbenější příspěvky dne.","load_next_days":"Načíst další dny"});
TAPi18n._registerServerTranslator("cs", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                   // 8
  TAPi18n.translations["da"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                        // 12
  TAPi18n.translations["da"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("da", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                   // 8
  TAPi18n.translations["de"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                        // 12
  TAPi18n.translations["de"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["de"][namespace], {"daily":"Daily"});                                               // 16
TAPi18n._registerServerTranslator("de", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                   // 8
  TAPi18n.translations["el"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                        // 12
  TAPi18n.translations["el"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("el", namespace);                                                               // 17
                                                                                                                  // 18
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
TAPi18n._registerServerTranslator("en", namespace);                                                               // 12
                                                                                                                  // 13
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
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                   // 8
  TAPi18n.translations["es"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                        // 12
  TAPi18n.translations["es"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["es"][namespace], {"daily":"Diario","day_by_day_view":"Los posts mas populares de cada día.","load_next_days":"Cargar días siguientes"});
TAPi18n._registerServerTranslator("es", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                   // 8
  TAPi18n.translations["et"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                        // 12
  TAPi18n.translations["et"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["et"][namespace], {"daily":"Päeviti","day_by_day_view":"Kõige populaarsemad postitused.","load_next_days":"Laadi Järgmised Päevad"});
TAPi18n._registerServerTranslator("et", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                   // 8
  TAPi18n.translations["fr"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                        // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["fr"][namespace], {"daily":"Jour par jour","day_by_day_view":"Les posts les plus populaires de chaque jour.","load_next_days":"Chargez les jours suivants"});
TAPi18n._registerServerTranslator("fr", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                   // 8
  TAPi18n.translations["hu"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                        // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                   // 8
  TAPi18n.translations["id"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                        // 12
  TAPi18n.translations["id"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["id"][namespace], {"daily":"Harian","day_by_day_view":"Postingan terpopuler per hari.","load_next_days":"Memuat Hari Berikutnya"});
TAPi18n._registerServerTranslator("id", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                   // 8
  TAPi18n.translations["it"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                        // 12
  TAPi18n.translations["it"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["it"][namespace], {"daily":"Giornaliero","day_by_day_view":"I post più popolari di ogni giorno.","load_next_days":"Carica i Giorni Successivi"});
TAPi18n._registerServerTranslator("it", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                   // 8
  TAPi18n.translations["ja"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                        // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                   // 8
  TAPi18n.translations["kk"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                        // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                   // 8
  TAPi18n.translations["ko"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                        // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["ko"][namespace], {"daily":"데일리","day_by_day_view":"매일 가장 인기있는 게시물.","load_next_days":"다음날 보기"});
TAPi18n._registerServerTranslator("ko", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                   // 8
  TAPi18n.translations["nl"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                        // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                   // 8
  TAPi18n.translations["pl"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                        // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["pl"][namespace], {"daily":"Dziennie","day_by_day_view":"Najpopularniejsze posty każdego dnia.","load_next_days":"Wczytaj kolejne dni"});
TAPi18n._registerServerTranslator("pl", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                // 8
  TAPi18n.translations["pt-BR"] = {};                                                                             // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                     // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                  // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"daily":"Diário","day_by_day_view":"As postagens mais populares de cada dia.","load_next_days":"Carregar Próximos Dias"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                            // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                   // 8
  TAPi18n.translations["ro"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                        // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["ro"][namespace], {"daily":"Zilnic","day_by_day_view":"Cele mai populare posturi din fiecare zi.","load_next_days":"Încărcați următoarele zile"});
TAPi18n._registerServerTranslator("ro", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                   // 8
  TAPi18n.translations["ru"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                        // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                   // 8
  TAPi18n.translations["sl"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                        // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["sl"][namespace], {"daily":"Dnevno","day_by_day_view":"Najbolj priljubljene objave posameznih dni.","load_next_days":"Prikaži več dni"});
TAPi18n._registerServerTranslator("sl", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                   // 8
  TAPi18n.translations["sv"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                        // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["sv"][namespace], {"daily":"Dagligen","day_by_day_view":"De mest populära inläggen varje dag.","load_next_days":"Hämta nästkommande dagar."});
TAPi18n._registerServerTranslator("sv", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                   // 8
  TAPi18n.translations["th"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                        // 12
  TAPi18n.translations["th"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("th", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                   // 8
  TAPi18n.translations["tr"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                        // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["tr"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                   // 8
  TAPi18n.translations["vi"] = {};                                                                                // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                        // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                     // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                              // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                               // 17
                                                                                                                  // 18
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
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                // 8
  TAPi18n.translations["zh-CN"] = {};                                                                             // 9
}                                                                                                                 // 10
                                                                                                                  // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                     // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                  // 13
}                                                                                                                 // 14
                                                                                                                  // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"daily":"Daily"});                                            // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                            // 17
                                                                                                                  // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:daily'] = {};

})();

//# sourceMappingURL=telescope_daily.js.map
