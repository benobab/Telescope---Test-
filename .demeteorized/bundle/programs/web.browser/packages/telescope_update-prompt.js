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
var compareVersions;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_update-prompt/lib/package_versions.js                               //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Meteor.methods({                                                                          // 1
  getPackageVersions: function () {                                                       // 2
    if (Meteor.isServer) {                                                                // 3
      var url = "https://atmospherejs.com/a/packages/findByNames";                        // 4
      var packageNames = _.filter(_.keys(Package), function (packageName) {               // 5
        return packageName.indexOf("telescope") !== -1;                                   // 6
      });                                                                                 //
      this.unblock;                                                                       // 8
      try {                                                                               // 9
        var result = HTTP.get(url, {                                                      // 10
          headers: {                                                                      // 11
            "Accept": "application/json"                                                  // 12
          },                                                                              //
          params: {                                                                       // 14
            names: packageNames                                                           // 15
          }                                                                               //
        });                                                                               //
        // console.log(result);                                                           //
        var packageData = JSON.parse(result.content);                                     // 19
        var versionData = packageData.map(function (package) {                            // 20
          return {                                                                        // 21
            name: package.name,                                                           // 22
            latestVersion: package.latestVersion.version,                                 // 23
            currentVersion: MeteorFilesHelpers.getPackageVersion(package.name)            // 24
          };                                                                              //
        });                                                                               //
        console.log(versionData);                                                         // 27
        return versionData;                                                               // 28
      } catch (e) {                                                                       //
        console.log(e);                                                                   // 30
        return e;                                                                         // 31
      }                                                                                   //
    }                                                                                     //
  }                                                                                       //
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_update-prompt/lib/client/update.js                                  //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
compareVersions = function (v1, v2) {                                                     // 1
  // return true if v2 is newer than v1                                                   //
  var v1Array = v1.split('.');                                                            // 2
  var v2Array = v2.split('.');                                                            // 3
  var isGreater = false;                                                                  // 4
  // go through each segment of v2 and stop if we find one that's higher                  //
  // than the equivalent segment of v1; else return false                                 //
  v2Array.some(function (value, index) {                                                  // 7
    if (parseInt(value) > parseInt(v1Array[index])) {                                     // 8
      // v2 segment > v1 segment                                                          //
      isGreater = true;                                                                   // 10
      return true; // stop comparison                                                     // 11
    } else if (parseInt(value) < parseInt(v1Array[index])) {                              //
        // v2 segment < v1 segment                                                        //
        isGreater = false;                                                                // 14
        return true; // stop comparison                                                   // 15
      }                                                                                   //
    return false; // continue comparison as long as both values are equal                 // 17
  });                                                                                     //
  return isGreater;                                                                       // 19
};                                                                                        //
                                                                                          //
Meteor.startup(function () {                                                              // 22
  Session.set('updateVersion', null);                                                     // 23
                                                                                          //
  Meteor.call('phoneHome', function (error, result) {                                     // 25
    // console.log(error)                                                                 //
    // console.log(result)                                                                //
    if (result) {                                                                         // 28
      var currentVersion = Telescope.VERSION;                                             // 29
      var newVersion = result.content;                                                    // 30
      if (compareVersions(currentVersion, newVersion)) {                                  // 31
        Session.set('updateVersion', newVersion);                                         // 32
      }                                                                                   //
    }                                                                                     //
  });                                                                                     //
});                                                                                       //
                                                                                          //
Telescope.modules.add("hero", {                                                           // 38
  template: 'update_banner'                                                               // 39
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_update-prompt/lib/client/templates/template.update_banner.js        //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("update_banner");                                                    // 2
Template["update_banner"] = new Template("Template.update_banner", (function() {          // 3
  var view = this;                                                                        // 4
  return Blaze.If(function() {                                                            // 5
    return Spacebars.call(view.lookup("showBanner"));                                     // 6
  }, function() {                                                                         // 7
    return [ "\n    ", HTML.DIV({                                                         // 8
      "class": "content-wrapper"                                                          // 9
    }, "\n      ", HTML.DIV({                                                             // 10
      "class": "update-banner grid-module grid banner"                                    // 11
    }, "\n        ", HTML.H3({                                                            // 12
      "class": "update-version"                                                           // 13
    }, Blaze.View("lookup:version", function() {                                          // 14
      return Spacebars.mustache(view.lookup("version"));                                  // 15
    })), "\n        ", HTML.DIV({                                                         // 16
      "class": "update-content"                                                           // 17
    }, "\n          ", HTML.H4({                                                          // 18
      "class": "update-prompt"                                                            // 19
    }, "A new version of Telescope is available."), "\n          ", HTML.P({              // 20
      "class": "update-message"                                                           // 21
    }, "\n            You have: ", Blaze.View("lookup:currentVersion", function() {       // 22
      return Spacebars.mustache(view.lookup("currentVersion"));                           // 23
    }), ". Note: this message is only displayed to admins.\n            ", HTML.A({       // 24
      href: "https://github.com/TelescopeJS/Telescope/blob/master/History.md",            // 25
      target: "_blank"                                                                    // 26
    }, "Learn more"), "\n            "), "\n        "), "\n      "), "\n    "), "\n  " ];
  });                                                                                     // 28
}));                                                                                      // 29
                                                                                          // 30
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_update-prompt/lib/client/templates/update_banner.js                 //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Template.update_banner.helpers({                                                          // 1
  showBanner: function () {                                                               // 2
    return Session.get('updateVersion');                                                  // 3
  },                                                                                      //
  version: function () {                                                                  // 5
    return Session.get('updateVersion');                                                  // 6
  },                                                                                      //
  currentVersion: function () {                                                           // 8
    return Telescope.VERSION;                                                             // 9
  },                                                                                      //
  message: function () {                                                                  // 11
    return Session.get('updateMessage');                                                  // 12
  }                                                                                       //
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:update-prompt'] = {
  compareVersions: compareVersions
};

})();
