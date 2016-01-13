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
var compareVersions;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/telescope_update-prompt/lib/package_versions.js                     //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
Meteor.methods({                                                                // 1
  getPackageVersions: function () {                                             // 2
    if (Meteor.isServer) {                                                      // 3
      var url = "https://atmospherejs.com/a/packages/findByNames";              // 4
      var packageNames = _.filter(_.keys(Package), function (packageName) {     // 5
        return packageName.indexOf("telescope") !== -1;                         // 6
      });                                                                       //
      this.unblock;                                                             // 8
      try {                                                                     // 9
        var result = HTTP.get(url, {                                            // 10
          headers: {                                                            // 11
            "Accept": "application/json"                                        // 12
          },                                                                    //
          params: {                                                             // 14
            names: packageNames                                                 // 15
          }                                                                     //
        });                                                                     //
        // console.log(result);                                                 //
        var packageData = JSON.parse(result.content);                           // 19
        var versionData = packageData.map(function (package) {                  // 20
          return {                                                              // 21
            name: package.name,                                                 // 22
            latestVersion: package.latestVersion.version,                       // 23
            currentVersion: MeteorFilesHelpers.getPackageVersion(package.name)  // 24
          };                                                                    //
        });                                                                     //
        console.log(versionData);                                               // 27
        return versionData;                                                     // 28
      } catch (e) {                                                             //
        console.log(e);                                                         // 30
        return e;                                                               // 31
      }                                                                         //
    }                                                                           //
  }                                                                             //
});                                                                             //
//////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/telescope_update-prompt/lib/server/phone_home.js                    //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
Meteor.methods({                                                                // 1
  phoneHome: function () {                                                      // 2
                                                                                //
    var url = 'http://version.telescopeapp.org/';                               // 4
                                                                                //
    if (Meteor.user() && Users.is.admin(Meteor.user())) {                       // 6
                                                                                //
      var params = {                                                            // 8
        currentVersion: Telescope.VERSION,                                      // 9
        siteTitle: Settings.get('title'),                                       // 10
        siteUrl: Telescope.utils.getSiteUrl(),                                  // 11
        users: Meteor.users.find().count(),                                     // 12
        posts: Posts.find().count(),                                            // 13
        comments: Comments.find().count()                                       // 14
      };                                                                        //
                                                                                //
      this.unblock();                                                           // 17
      try {                                                                     // 18
        var result = HTTP.get(url, {                                            // 19
          params: params                                                        // 20
        });                                                                     //
        return result;                                                          // 22
      } catch (e) {                                                             //
        // Got a network error, time-out or HTTP error in the 400 or 500 range.
        return false;                                                           // 25
      }                                                                         //
    }                                                                           //
  }                                                                             //
});                                                                             //
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:update-prompt'] = {
  compareVersions: compareVersions
};

})();

//# sourceMappingURL=telescope_update-prompt.js.map
