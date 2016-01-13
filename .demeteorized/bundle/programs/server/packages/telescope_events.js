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
var Events;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_events/lib/events.js                                                     //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Events = new Mongo.Collection('events');                                                       // 1
                                                                                               //
Events.schema = new SimpleSchema({                                                             // 3
  createdAt: {                                                                                 // 4
    type: Date                                                                                 // 5
  },                                                                                           //
  name: {                                                                                      // 7
    type: String                                                                               // 8
  },                                                                                           //
  description: {                                                                               // 10
    type: String,                                                                              // 11
    optional: true                                                                             // 12
  },                                                                                           //
  unique: {                                                                                    // 14
    type: Boolean,                                                                             // 15
    optional: true                                                                             // 16
  },                                                                                           //
  important: { // marking an event as important means it should never be erased                // 18
    type: Boolean,                                                                             // 19
    optional: true                                                                             // 20
  },                                                                                           //
  properties: {                                                                                // 22
    type: Object,                                                                              // 23
    optional: true,                                                                            // 24
    blackbox: true                                                                             // 25
  }                                                                                            //
});                                                                                            //
                                                                                               //
Meteor.startup(function () {                                                                   // 29
  // needs to happen after every fields are added                                              //
  Events.internationalize();                                                                   // 31
});                                                                                            //
                                                                                               //
Events.attachSchema(Events.schema);                                                            // 34
                                                                                               //
if (Meteor.isServer) {                                                                         // 36
  Events.log = function (event) {                                                              // 37
                                                                                               //
    // if event is supposed to be unique, check if it has already been logged                  //
    if (!!event.unique && !!Events.findOne({ name: event.name })) {                            // 40
      return;                                                                                  // 41
    }                                                                                          //
                                                                                               //
    event.createdAt = new Date();                                                              // 44
                                                                                               //
    Events.insert(event);                                                                      // 46
  };                                                                                           //
}                                                                                              //
                                                                                               //
Events.track = function (event, properties) {                                                  // 51
  // console.log('trackevent: ', event, properties);                                           //
  properties = properties || {};                                                               // 53
  //TODO                                                                                       //
  // add event to an Events collection for logging and buffering purposes                      //
  if (Meteor.isClient) {                                                                       // 56
    if (typeof mixpanel !== 'undefined' && typeof mixpanel.track !== 'undefined') {            // 57
      mixpanel.track(event, properties);                                                       // 58
    }                                                                                          //
    if (typeof GoSquared !== 'undefined' && typeof GoSquared.DefaultTracker !== 'undefined') {
      GoSquared.DefaultTracker.TrackEvent(event, JSON.stringify(properties));                  // 61
    }                                                                                          //
  }                                                                                            //
};                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:events'] = {
  Events: Events
};

})();

//# sourceMappingURL=telescope_events.js.map
