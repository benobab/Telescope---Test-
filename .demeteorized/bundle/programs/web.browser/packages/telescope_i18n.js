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
var Session = Package.session.Session;
var Mongo = Package.mongo.Mongo;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
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
var i18n;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// packages/telescope_i18n/i18n.js                                                          //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
i18n = {};                                                                                  // 1
                                                                                            //
// do this better:                                                                          //
i18n.setLanguage = function (language) {                                                    // 4
  // Session.set('i18nReady', false);                                                       //
  // console.log('i18n loading… '+language)                                                 //
                                                                                            //
  // moment                                                                                 //
  Session.set('momentReady', false);                                                        // 9
  // console.log('moment loading…')                                                         //
  if (language.toLowerCase() === "en") {                                                    // 11
    Session.set('momentReady', true);                                                       // 12
  } else {                                                                                  //
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/lang/" + language.toLowerCase() + ".js", function (result) {
      moment.locale(language);                                                              // 15
      Session.set('momentReady', true);                                                     // 16
      Session.set('momentLocale', language);                                                // 17
      // console.log('moment loaded!')                                                      //
    });                                                                                     //
  }                                                                                         //
                                                                                            //
  // TAPi18n                                                                                //
  Session.set("TAPi18nReady", false);                                                       // 23
  // console.log('TAPi18n loading…')                                                        //
  TAPi18n.setLanguage(language).done(function () {                                          // 25
    Session.set("TAPi18nReady", true);                                                      // 27
    // console.log('TAPi18n loaded!')                                                       //
  });                                                                                       //
                                                                                            //
  // T9n                                                                                    //
  T9n.setLanguage(language);                                                                // 32
};                                                                                          //
                                                                                            //
i18n.t = function (str, options) {                                                          // 35
  if (Meteor.isServer) {                                                                    // 36
    return TAPi18n.__(str, options, Settings.get('language', 'en'));                        // 37
  } else {                                                                                  //
    return TAPi18n.__(str, options);                                                        // 39
  }                                                                                         //
};                                                                                          //
                                                                                            //
Mongo.Collection.prototype.internationalize = function () {                                 // 43
  var schema = this.simpleSchema()._schema;                                                 // 44
  _.each(schema, function (property, key) {                                                 // 45
    if (!property.label) {                                                                  // 46
      schema[key].label = function () {                                                     // 47
        // if property is nested ("telescope.email"), only consider the last part ("email")
        if (key.indexOf(".") !== -1) {                                                      // 49
          key = _.last(key.split("."));                                                     // 50
        }                                                                                   //
        return i18n.t(key);                                                                 // 52
      };                                                                                    //
    }                                                                                       //
  });                                                                                       //
  return this;                                                                              // 56
};                                                                                          //
                                                                                            //
Meteor.startup(function () {                                                                // 59
                                                                                            //
  if (Meteor.isClient) {                                                                    // 61
    i18n.setLanguage(Settings.get('language', 'en'));                                       // 62
  }                                                                                         //
});                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:i18n'] = {
  i18n: i18n
};

})();
