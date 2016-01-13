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
var serveAPI;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/telescope_api/lib/server/api.js                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
serveAPI = function (terms) {                                                                               // 1
  var posts = [];                                                                                           // 2
                                                                                                            //
  var parameters = Posts.parameters.get(terms);                                                             // 4
                                                                                                            //
  Posts.find(parameters.find, parameters.options).forEach(function (post) {                                 // 6
    var url = Posts.getLink(post);                                                                          // 7
    var postOutput = {                                                                                      // 8
      title: post.title,                                                                                    // 9
      headline: post.title, // for backwards compatibility                                                  // 10
      author: post.author,                                                                                  // 11
      date: post.postedAt,                                                                                  // 12
      url: url,                                                                                             // 13
      pageUrl: Posts.getPageUrl(post, true),                                                                // 14
      guid: post._id                                                                                        // 15
    };                                                                                                      //
                                                                                                            //
    if (post.body) postOutput.body = post.body;                                                             // 18
                                                                                                            //
    if (post.url) postOutput.domain = Telescope.utils.getDomain(url);                                       // 21
                                                                                                            //
    if (post.thumbnailUrl) {                                                                                // 24
      postOutput.thumbnailUrl = Telescope.utils.addHttp(post.thumbnailUrl);                                 // 25
    }                                                                                                       //
                                                                                                            //
    var twitterName = Users.getTwitterNameById(post.userId);                                                // 28
    if (twitterName) postOutput.twitterName = twitterName;                                                  // 29
                                                                                                            //
    var comments = [];                                                                                      // 32
                                                                                                            //
    Comments.find({ postId: post._id }, { sort: { postedAt: -1 }, limit: 50 }).forEach(function (comment) {
      var commentProperties = {                                                                             // 35
        body: comment.body,                                                                                 // 36
        author: comment.author,                                                                             // 37
        date: comment.postedAt,                                                                             // 38
        guid: comment._id,                                                                                  // 39
        parentCommentId: comment.parentCommentId                                                            // 40
      };                                                                                                    //
      comments.push(commentProperties);                                                                     // 42
    });                                                                                                     //
                                                                                                            //
    var commentsToDelete = [];                                                                              // 45
                                                                                                            //
    comments.forEach(function (comment, index) {                                                            // 47
      if (comment.parentCommentId) {                                                                        // 48
        var parent = comments.filter(function (obj) {                                                       // 49
          return obj.guid === comment.parentCommentId;                                                      // 50
        })[0];                                                                                              //
        if (parent) {                                                                                       // 52
          parent.replies = parent.replies || [];                                                            // 53
          parent.replies.push(JSON.parse(JSON.stringify(comment)));                                         // 54
          commentsToDelete.push(index);                                                                     // 55
        }                                                                                                   //
      }                                                                                                     //
    });                                                                                                     //
                                                                                                            //
    commentsToDelete.reverse().forEach(function (index) {                                                   // 60
      comments.splice(index, 1);                                                                            // 61
    });                                                                                                     //
                                                                                                            //
    postOutput.comments = comments;                                                                         // 64
                                                                                                            //
    posts.push(postOutput);                                                                                 // 66
  });                                                                                                       //
                                                                                                            //
  return JSON.stringify(posts);                                                                             // 69
};                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/telescope_api/lib/server/routes.js                                                              //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// for backwards compatibility's sake, accept a "limit" segment                                             //
Picker.route('/api/:limit?', function (params, req, res, next) {                                            // 2
  if (typeof params.limit !== "undefined") {                                                                // 3
    params.query.limit = params.limit;                                                                      // 4
  }                                                                                                         //
  res.end(serveAPI(params.query));                                                                          // 6
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:api'] = {};

})();

//# sourceMappingURL=telescope_api.js.map
