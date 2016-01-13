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
var RSS, getMeta, servePostRSS, serveCommentRSS, post;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_rss/lib/server/rss.js                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
RSS = Npm.require('rss');                                                                                         // 1
                                                                                                                  //
getMeta = function (url) {                                                                                        // 3
  var siteUrl = Settings.get('siteUrl', Meteor.absoluteUrl());                                                    // 4
  return {                                                                                                        // 5
    title: Settings.get('title'),                                                                                 // 6
    description: Settings.get('tagline'),                                                                         // 7
    feed_url: siteUrl + url,                                                                                      // 8
    site_url: siteUrl,                                                                                            // 9
    image_url: siteUrl + 'img/favicon.png'                                                                        // 10
  };                                                                                                              //
};                                                                                                                //
                                                                                                                  //
servePostRSS = function (terms, url) {                                                                            // 14
  var feed = new RSS(getMeta(url));                                                                               // 15
                                                                                                                  //
  var params = Posts.parameters.get(terms);                                                                       // 17
  delete params['options']['sort']['sticky'];                                                                     // 18
                                                                                                                  //
  Posts.find(params.find, params.options).forEach(function (post) {                                               // 20
                                                                                                                  //
    var description = !!post.body ? post.body + '</br></br>' : '';                                                // 22
    var feedItem = {                                                                                              // 23
      title: post.title,                                                                                          // 24
      description: description + '<a href="' + post.getPageUrl(true) + '">Discuss</a>',                           // 25
      author: post.author,                                                                                        // 26
      date: post.postedAt,                                                                                        // 27
      guid: post._id,                                                                                             // 28
      url: Posts.getShareableLink(post)                                                                           // 29
    };                                                                                                            //
                                                                                                                  //
    if (post.thumbnailUrl) {                                                                                      // 32
      var url = Telescope.utils.addHttp(post.thumbnailUrl);                                                       // 33
      feedItem.custom_elements = [{ "imageUrl": url }, { "content": url }];                                       // 34
    }                                                                                                             //
                                                                                                                  //
    feed.item(feedItem);                                                                                          // 37
  });                                                                                                             //
                                                                                                                  //
  return feed.xml();                                                                                              // 40
};                                                                                                                //
                                                                                                                  //
serveCommentRSS = function (terms, url) {                                                                         // 43
  var feed = new RSS(getMeta(url));                                                                               // 44
                                                                                                                  //
  Comments.find({ isDeleted: { $ne: true } }, { sort: { postedAt: -1 }, limit: 20 }).forEach(function (comment) {
    post = Posts.findOne(comment.postId);                                                                         // 47
    feed.item({                                                                                                   // 48
      title: 'Comment on ' + post.title,                                                                          // 49
      description: comment.body + '</br></br>' + '<a href="' + Telescope.utils.getPostCommentUrl(post._id, comment._id) + '">Discuss</a>',
      author: comment.author,                                                                                     // 51
      date: comment.postedAt,                                                                                     // 52
      url: comment.getPageUrl(true),                                                                              // 53
      guid: comment._id                                                                                           // 54
    });                                                                                                           //
  });                                                                                                             //
                                                                                                                  //
  return feed.xml();                                                                                              // 58
};                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/telescope_rss/lib/server/routes.js                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Picker.route('/feed.xml', function (params, req, res, next) {                                                     // 1
  if (typeof params.query.view === "undefined") {                                                                 // 2
    params.query.view = 'new';                                                                                    // 3
  }                                                                                                               //
  res.end(servePostRSS(params.query, 'feed.xml'));                                                                // 5
});                                                                                                               //
                                                                                                                  //
Picker.route('/rss/posts/new.xml', function (params, req, res, next) {                                            // 8
  res.end(servePostRSS({ view: 'new' }, '/rss/posts/new.xml'));                                                   // 9
});                                                                                                               //
                                                                                                                  //
Picker.route('/rss/posts/top.xml', function (params, req, res, next) {                                            // 12
  res.end(servePostRSS({ view: 'top' }, '/rss/posts/top.xml'));                                                   // 13
});                                                                                                               //
                                                                                                                  //
Picker.route('/rss/posts/best.xml', function (params, req, res, next) {                                           // 16
  res.end(servePostRSS({ view: 'best' }, '/rss/posts/best.xml'));                                                 // 17
});                                                                                                               //
                                                                                                                  //
Picker.route('/rss/category/:slug/feed.xml', function (params, req, res, next) {                                  // 20
  res.end(servePostRSS({ view: 'new', cat: params.slug }, '/rss/category/:slug/feed.xml'));                       // 21
});                                                                                                               //
                                                                                                                  //
Picker.route('/rss/comments.xml', function (params, req, res, next) {                                             // 24
  res.end(serveCommentRSS({}, '/rss/comments.xml'));                                                              // 25
});                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:rss'] = {};

})();

//# sourceMappingURL=telescope_rss.js.map
