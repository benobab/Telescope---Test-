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

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_scoring/lib/scoring.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Telescope.updateScore = function (args) {                                                                            // 1
  var collection = args.collection;                                                                                  // 2
  var item = args.item;                                                                                              // 3
  var forceUpdate = args.forceUpdate;                                                                                // 4
                                                                                                                     //
  // console.log(item)                                                                                               //
                                                                                                                     //
  // Status Check                                                                                                    //
                                                                                                                     //
  if (!!item.status && item.status !== 2) // if item has a status and is not approved, don't update its score        // 10
    return 0;                                                                                                        // 11
                                                                                                                     //
  // Age Check                                                                                                       //
                                                                                                                     //
  // If for some reason item doesn't have a "postedAt" property, abort                                               //
  if (!item.postedAt) return 0;                                                                                      // 16
                                                                                                                     //
  var postedAt = item.postedAt.valueOf();                                                                            // 19
  var now = new Date().getTime();                                                                                    // 20
  var age = now - postedAt;                                                                                          // 21
  var ageInHours = age / (60 * 60 * 1000);                                                                           // 22
                                                                                                                     //
  if (postedAt > now) // if post has been scheduled in the future, don't update its score                            // 24
    return 0;                                                                                                        // 25
                                                                                                                     //
  // For performance reasons, the database is only updated if the difference between the old score and the new score
  // is meaningful enough. To find out, we calculate the "power" of a single vote after n days.                      //
  // We assume that after n days, a single vote will not be powerful enough to affect posts' ranking order.          //
  // Note: sites whose posts regularly get a lot of votes can afford to use a lower n.                               //
                                                                                                                     //
  // n =  number of days after which a single vote will not have a big enough effect to trigger a score update       //
  //      and posts can become inactive                                                                              //
  var n = 30;                                                                                                        // 34
  // x = score increase amount of a single vote after n days (for n=100, x=0.000040295)                              //
  var x = 1 / Math.pow(n * 24 + 2, 1.3);                                                                             // 36
  // time decay factor                                                                                               //
  var f = 1.3;                                                                                                       // 38
                                                                                                                     //
  // use baseScore if defined, if not just use the number of votes                                                   //
  // note: for transition period, also use votes if there are more votes than baseScore                              //
  // var baseScore = Math.max(item.votes || 0, item.baseScore || 0);                                                 //
  var baseScore = item.baseScore;                                                                                    // 43
                                                                                                                     //
  // HN algorithm                                                                                                    //
  var newScore = baseScore / Math.pow(ageInHours + 2, f);                                                            // 46
                                                                                                                     //
  // console.log(now)                                                                                                //
  // console.log(age)                                                                                                //
  // console.log(ageInHours)                                                                                         //
  // console.log(baseScore)                                                                                          //
  // console.log(newScore)                                                                                           //
                                                                                                                     //
  // Note: before the first time updateScore runs on a new item, its score will be at 0                              //
  var scoreDiff = Math.abs(item.score - newScore);                                                                   // 55
                                                                                                                     //
  // only update database if difference is larger than x to avoid unnecessary updates                                //
  if (forceUpdate || scoreDiff > x) {                                                                                // 58
    collection.update(item._id, { $set: { score: newScore, inactive: false } });                                     // 59
    return 1;                                                                                                        // 60
  } else if (ageInHours > n * 24) {                                                                                  //
    // only set a post as inactive if it's older than n days                                                         //
    collection.update(item._id, { $set: { inactive: true } });                                                       // 63
  }                                                                                                                  //
  return 0;                                                                                                          // 65
};                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_scoring/lib/server/cron.js                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 1
  var scoreInterval = Settings.get("scoreUpdateInterval") || 30;                                                     // 2
  if (scoreInterval > 0) {                                                                                           // 3
                                                                                                                     //
    // active items get updated every N seconds                                                                      //
    Meteor.setInterval(function () {                                                                                 // 6
      var updatedPosts = 0;                                                                                          // 7
      var updatedComments = 0;                                                                                       // 8
      // console.log('tick ('+scoreInterval+')');                                                                    //
      Posts.find({ 'status': 2, 'inactive': { $ne: true } }).forEach(function (post) {                               // 10
        // only run scoring on approved posts                                                                        //
        updatedPosts += Telescope.updateScore({ collection: Posts, item: post });                                    // 11
      });                                                                                                            //
      Comments.find({ 'inactive': { $ne: true } }).forEach(function (comment) {                                      // 13
        updatedComments += Telescope.updateScore({ collection: Comments, item: comment });                           // 14
      });                                                                                                            //
      // console.log("Updated "+updatedPosts+"/"+Posts.find().count()+" Posts")                                      //
      // console.log("Updated "+updatedComments+"/"+Comments.find().count()+" Comments")                             //
    }, scoreInterval * 1000);                                                                                        //
                                                                                                                     //
    // inactive items get updated every hour                                                                         //
    Meteor.setInterval(function () {                                                                                 // 21
      var updatedPosts = 0;                                                                                          // 22
      var updatedComments = 0;                                                                                       // 23
      Posts.find({ 'inactive': true }).forEach(function (post) {                                                     // 24
        updatedPosts += Telescope.updateScore({ collection: Posts, item: post });                                    // 25
      });                                                                                                            //
      Comments.find({ 'inactive': true }).forEach(function (comment) {                                               // 27
        updatedComments += Telescope.updateScore({ collection: Comments, item: comment });                           // 28
      });                                                                                                            //
    }, 3600 * 1000);                                                                                                 //
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:scoring'] = {};

})();

//# sourceMappingURL=telescope_scoring.js.map
