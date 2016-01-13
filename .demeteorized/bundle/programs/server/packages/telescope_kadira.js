(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Kadira = Package['meteorhacks:kadira'].Kadira;
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
var __, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/package-i18n.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
TAPi18n.packages["telescope:kadira"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                   // 2
// define package's translation function (proxy to the i18next)                                                    // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                   // 4
                                                                                                                   // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/lib/kadira-settings.js                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var kadiraAppIdProperty = {                                                                                        // 1
  fieldName: "kadiraAppId",                                                                                        // 2
  propertyGroup: "kadira",                                                                                         // 3
  fieldSchema: {                                                                                                   // 4
    type: String,                                                                                                  // 5
    optional: true,                                                                                                // 6
    autoform: {                                                                                                    // 7
      group: "kadira"                                                                                              // 8
    }                                                                                                              //
  }                                                                                                                //
};                                                                                                                 //
Settings.addField(kadiraAppIdProperty);                                                                            // 12
                                                                                                                   //
var kadiraAppSecretProperty = {                                                                                    // 14
  fieldName: "kadiraAppSecret",                                                                                    // 15
  propertyGroup: "kadira",                                                                                         // 16
  fieldSchema: {                                                                                                   // 17
    type: String,                                                                                                  // 18
    optional: true,                                                                                                // 19
    "private": true,                                                                                               // 20
    autoform: {                                                                                                    // 21
      group: "kadira",                                                                                             // 22
      "class": "private-field"                                                                                     // 23
    }                                                                                                              //
  }                                                                                                                //
};                                                                                                                 //
Settings.addField(kadiraAppSecretProperty);                                                                        // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/lib/server/kadira.js                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.startup(function () {                                                                                       // 1
  if (!!Settings.get('kadiraAppId') && !!Settings.get('kadiraAppSecret')) {                                        // 2
    Kadira.connect(Settings.get('kadiraAppId'), Settings.get('kadiraAppSecret'));                                  // 3
  }                                                                                                                //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/ar.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                    // 8
  TAPi18n.translations["ar"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                         // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/bg.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                    // 8
  TAPi18n.translations["bg"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                         // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/cs.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                    // 8
  TAPi18n.translations["cs"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                         // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["cs"][namespace], {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/da.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                    // 8
  TAPi18n.translations["da"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                         // 12
  TAPi18n.translations["da"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("da", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/de.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                    // 8
  TAPi18n.translations["de"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                         // 12
  TAPi18n.translations["de"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["de"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("de", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/el.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                    // 8
  TAPi18n.translations["el"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                         // 12
  TAPi18n.translations["el"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("el", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/en.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
// integrate the fallback language translations                                                                    // 8
translations = {};                                                                                                 // 9
translations[namespace] = {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"};                   // 10
TAPi18n._loadLangFileObject("en", translations);                                                                   // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                // 12
                                                                                                                   // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/es.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                    // 8
  TAPi18n.translations["es"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                         // 12
  TAPi18n.translations["es"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["es"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("es", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/et.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                    // 8
  TAPi18n.translations["et"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                         // 12
  TAPi18n.translations["et"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["et"][namespace], {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"});
TAPi18n._registerServerTranslator("et", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/fr.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                    // 8
  TAPi18n.translations["fr"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                         // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["fr"][namespace], {"kadiraAppId":"Identifiant Kadira de l'application","kadiraAppSecret":"Secret Kadira de l'application"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/hu.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                    // 8
  TAPi18n.translations["hu"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                         // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/id.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                    // 8
  TAPi18n.translations["id"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                         // 12
  TAPi18n.translations["id"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["id"][namespace], {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"});
TAPi18n._registerServerTranslator("id", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/it.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                    // 8
  TAPi18n.translations["it"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                         // 12
  TAPi18n.translations["it"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["it"][namespace], {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Secret"});
TAPi18n._registerServerTranslator("it", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/ja.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                    // 8
  TAPi18n.translations["ja"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                         // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/kk.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                    // 8
  TAPi18n.translations["kk"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                         // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/ko.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                    // 8
  TAPi18n.translations["ko"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                         // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["ko"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("ko", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/nl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                    // 8
  TAPi18n.translations["nl"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                         // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/pl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                    // 8
  TAPi18n.translations["pl"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                         // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["pl"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("pl", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/pt-BR.i18n.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                 // 8
  TAPi18n.translations["pt-BR"] = {};                                                                              // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                      // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                   // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {});                                                            // 16
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                             // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/ro.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                    // 8
  TAPi18n.translations["ro"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                         // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/ru.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                    // 8
  TAPi18n.translations["ru"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                         // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/sl.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                    // 8
  TAPi18n.translations["sl"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                         // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["sl"][namespace], {"kadiraAppId":"Kadira App ID","kadiraAppSecret":"Kadira App Skrivnost"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/sv.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                    // 8
  TAPi18n.translations["sv"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                         // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["sv"][namespace], {"kadiraAppId":"Kadira App-ID","kadiraAppSecret":"Kadira App-hemlighet"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/th.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                    // 8
  TAPi18n.translations["th"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                         // 12
  TAPi18n.translations["th"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/tr.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                    // 8
  TAPi18n.translations["tr"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                         // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["tr"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/vi.i18n.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                    // 8
  TAPi18n.translations["vi"] = {};                                                                                 // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                         // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                      // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                               // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                                // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_kadira/packages/telescope_kadirai18n/zh-CN.i18n.js                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _ = Package.underscore._,                                                                                      // 1
    package_name = "telescope:kadira",                                                                             // 2
    namespace = "telescope:kadira";                                                                                // 3
                                                                                                                   // 4
if (package_name != "project") {                                                                                   // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                          // 6
}                                                                                                                  // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                 // 8
  TAPi18n.translations["zh-CN"] = {};                                                                              // 9
}                                                                                                                  // 10
                                                                                                                   // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                      // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                   // 13
}                                                                                                                  // 14
                                                                                                                   // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                                            // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                             // 17
                                                                                                                   // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:kadira'] = {};

})();

//# sourceMappingURL=telescope_kadira.js.map
