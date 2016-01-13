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
var translations;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/modules.js                                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// array containing nav items;                                                                                  //
                                                                                                                //
Telescope.modules.add("secondaryNav", [{                                                                        // 3
  template: "submit_button",                                                                                    // 5
  order: 30                                                                                                     // 6
}]);                                                                                                            //
                                                                                                                //
Telescope.modules.add("mobileNav", [{                                                                           // 10
  template: "submit_button",                                                                                    // 12
  order: 30                                                                                                     // 13
}]);                                                                                                            //
                                                                                                                //
Telescope.modules.add("footer", [{                                                                              // 17
  template: "footer_code",                                                                                      // 19
  order: 10                                                                                                     // 20
}]);                                                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/vote.js                                                                          //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                //
// getVotePower returns how much "power" a user's votes have                                                    //
// It is can be set in a package, by setting getVotePower to a Number or Function then re-exporting             //
// The default is found in base.js in the base package, and returns 1.                                          //
                                                                                                                //
var modifyKarma = function (userId, karma) {                                                                    // 6
  Meteor.users.update({ _id: userId }, { $inc: { "telescope.karma": karma } });                                 // 7
};                                                                                                              //
                                                                                                                //
var hasUpvotedItem = function (item, user) {                                                                    // 10
  return item.upvoters && item.upvoters.indexOf(user._id) !== -1;                                               // 11
};                                                                                                              //
                                                                                                                //
var hasDownvotedItem = function (item, user) {                                                                  // 14
  return item.downvoters && item.downvoters.indexOf(user._id) !== -1;                                           // 15
};                                                                                                              //
                                                                                                                //
var addVote = function (userId, vote, collection, upOrDown) {                                                   // 18
  var field = 'telescope.' + upOrDown + 'voted' + collection;                                                   // 19
  var add = {};                                                                                                 // 20
  add[field] = vote;                                                                                            // 21
  Meteor.users.update({ _id: userId }, {                                                                        // 22
    $addToSet: add                                                                                              // 23
  });                                                                                                           //
};                                                                                                              //
                                                                                                                //
var removeVote = function (userId, itemId, collection, upOrDown) {                                              // 27
  var field = 'telescope.' + upOrDown + 'voted' + collection;                                                   // 28
  var remove = {};                                                                                              // 29
  remove[field] = { itemId: itemId };                                                                           // 30
  Meteor.users.update({ _id: userId }, {                                                                        // 31
    $pull: remove                                                                                               // 32
  });                                                                                                           //
};                                                                                                              //
                                                                                                                //
Telescope.upvoteItem = function (collection, itemId, user) {                                                    // 36
                                                                                                                //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                    // 38
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                  // 39
  var item = collection.findOne(itemId);                                                                        // 40
                                                                                                                //
  // make sure user has rights to upvote first                                                                  //
  if (!user || !Users.can.vote(user, true) || hasUpvotedItem(item, user)) return false;                         // 43
                                                                                                                //
  // ------------------------------ Callbacks ------------------------------ //                                 //
                                                                                                                //
  // run all upvote callbacks on item successively                                                              //
                                                                                                                //
  item = Telescope.callbacks.run("upvote", item, user);                                                         // 50
                                                                                                                //
  // ----------------------------------------------------------------------- //                                 //
                                                                                                                //
  var votePower = getVotePower(user);                                                                           // 54
                                                                                                                //
  // in case user is upvoting a previously downvoted item, cancel downvote first                                //
  Telescope.cancelDownvote(collection, itemId, user);                                                           // 57
                                                                                                                //
  // Votes & Score                                                                                              //
  var result = collection.update({ _id: item && item._id, upvoters: { $ne: user._id } }, {                      // 60
    $addToSet: { upvoters: user._id },                                                                          // 61
    $inc: { upvotes: 1, baseScore: votePower },                                                                 // 62
    $set: { inactive: false }                                                                                   // 63
  });                                                                                                           //
                                                                                                                //
  if (result > 0) {                                                                                             // 66
                                                                                                                //
    // Add item to list of upvoted items                                                                        //
    var vote = {                                                                                                // 69
      itemId: item._id,                                                                                         // 70
      votedAt: new Date(),                                                                                      // 71
      power: votePower                                                                                          // 72
    };                                                                                                          //
    addVote(user._id, vote, collectionName, 'up');                                                              // 74
                                                                                                                //
    // extend item with baseScore to help calculate newScore                                                    //
    item = _.extend(item, { baseScore: item.baseScore + votePower });                                           // 77
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                           // 78
                                                                                                                //
    // if the item is being upvoted by its own author, don't give karma                                         //
    if (item.userId !== user._id) {                                                                             // 81
      modifyKarma(item.userId, votePower);                                                                      // 82
                                                                                                                //
      // if karma redistribution is enabled, give karma to all previous upvoters of the post                    //
      // (but not to the person doing the upvoting)                                                             //
      if (Settings.get('redistributeKarma', false)) {                                                           // 86
        _.each(item.upvoters, function (upvoterId) {                                                            // 87
          // share the karma equally among all upvoters, but cap the value at 0.1                               //
          var karmaIncrease = Math.min(0.1, votePower / item.upvoters.length);                                  // 89
          modifyKarma(upvoterId, karmaIncrease);                                                                // 90
        });                                                                                                     //
      }                                                                                                         //
    }                                                                                                           //
                                                                                                                //
    // --------------------- Server-Side Async Callbacks --------------------- //                               //
                                                                                                                //
    Telescope.callbacks.runAsync("upvoteAsync", item, user);                                                    // 97
                                                                                                                //
    // ----------------------------------------------------------------------- //                               //
  }                                                                                                             //
  // console.log(collection.findOne(item._id));                                                                 //
  return true;                                                                                                  // 102
};                                                                                                              //
                                                                                                                //
Telescope.downvoteItem = function (collection, itemId, user) {                                                  // 105
                                                                                                                //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                    // 107
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                  // 108
  var item = collection.findOne(itemId);                                                                        // 109
                                                                                                                //
  // make sure user has rights to downvote first                                                                //
  if (!user || !Users.can.vote(user, true) || hasDownvotedItem(item, user)) return false;                       // 112
                                                                                                                //
  // ------------------------------ Callbacks ------------------------------ //                                 //
                                                                                                                //
  // run all downvote callbacks on item successively                                                            //
  item = Telescope.callbacks.run("downvote", item, user);                                                       // 118
                                                                                                                //
  // ----------------------------------------------------------------------- //                                 //
                                                                                                                //
  var votePower = getVotePower(user);                                                                           // 122
                                                                                                                //
  // in case user is downvoting a previously upvoted item, cancel upvote first                                  //
  Telescope.cancelUpvote(collection, item, user);                                                               // 125
                                                                                                                //
  // Votes & Score                                                                                              //
  var result = collection.update({ _id: item && item._id, downvoters: { $ne: user._id } }, {                    // 128
    $addToSet: { downvoters: user._id },                                                                        // 129
    $inc: { downvotes: 1, baseScore: -votePower },                                                              // 130
    $set: { inactive: false }                                                                                   // 131
  });                                                                                                           //
                                                                                                                //
  if (result > 0) {                                                                                             // 134
    // Add item to list of downvoted items                                                                      //
    var vote = {                                                                                                // 136
      itemId: item._id,                                                                                         // 137
      votedAt: new Date(),                                                                                      // 138
      power: votePower                                                                                          // 139
    };                                                                                                          //
    addVote(user._id, vote, collectionName, 'down');                                                            // 141
                                                                                                                //
    // extend item with baseScore to help calculate newScore                                                    //
    item = _.extend(item, { baseScore: item.baseScore - votePower });                                           // 144
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                           // 145
                                                                                                                //
    // if the item is being upvoted by its own author, don't give karma                                         //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                          // 148
                                                                                                                //
    // --------------------- Server-Side Async Callbacks --------------------- //                               //
                                                                                                                //
    Telescope.callbacks.runAsync("downvoteAsync", item, user);                                                  // 153
                                                                                                                //
    // ----------------------------------------------------------------------- //                               //
  }                                                                                                             //
  // console.log(collection.findOne(item._id));                                                                 //
  return true;                                                                                                  // 158
};                                                                                                              //
                                                                                                                //
Telescope.cancelUpvote = function (collection, itemId, user) {                                                  // 161
                                                                                                                //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                    // 163
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                  // 164
  var item = collection.findOne(itemId);                                                                        // 165
                                                                                                                //
  // if user isn't among the upvoters, abort                                                                    //
  if (!hasUpvotedItem(item, user)) return false;                                                                // 168
                                                                                                                //
  // ------------------------------ Callbacks ------------------------------ //                                 //
                                                                                                                //
  // run all cancel upvote callbacks on item successively                                                       //
  item = Telescope.callbacks.run("cancelUpvote", item, user);                                                   // 174
                                                                                                                //
  // ----------------------------------------------------------------------- //                                 //
                                                                                                                //
  var votePower = getVotePower(user);                                                                           // 178
                                                                                                                //
  // Votes & Score                                                                                              //
  var result = collection.update({ _id: item && item._id, upvoters: user._id }, {                               // 181
    $pull: { upvoters: user._id },                                                                              // 182
    $inc: { upvotes: -1, baseScore: -votePower },                                                               // 183
    $set: { inactive: false }                                                                                   // 184
  });                                                                                                           //
                                                                                                                //
  if (result > 0) {                                                                                             // 187
    // Remove item from list of upvoted items                                                                   //
    removeVote(user._id, item._id, collectionName, 'up');                                                       // 189
                                                                                                                //
    // extend item with baseScore to help calculate newScore                                                    //
    item = _.extend(item, { baseScore: item.baseScore - votePower });                                           // 192
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                           // 193
                                                                                                                //
    // if the item is being upvoted by its own author, don't give karma                                         //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                          // 196
                                                                                                                //
    // --------------------- Server-Side Async Callbacks --------------------- //                               //
                                                                                                                //
    Telescope.callbacks.runAsync("cancelUpvoteAsync", item, user);                                              // 202
                                                                                                                //
    // ----------------------------------------------------------------------- //                               //
  }                                                                                                             //
  // console.log(collection.findOne(item._id));                                                                 //
  return true;                                                                                                  // 207
};                                                                                                              //
                                                                                                                //
Telescope.cancelDownvote = function (collection, itemId, user) {                                                // 210
                                                                                                                //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                    // 212
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                  // 213
  var item = collection.findOne(itemId);                                                                        // 214
                                                                                                                //
  // if user isn't among the downvoters, abort                                                                  //
  if (!hasDownvotedItem(item, user)) return false;                                                              // 217
                                                                                                                //
  // ------------------------------ Callbacks ------------------------------ //                                 //
                                                                                                                //
  // run all cancel downvote callbacks on item successively                                                     //
                                                                                                                //
  item = Telescope.callbacks.run("cancelDownvote", item, user);                                                 // 224
                                                                                                                //
  // ----------------------------------------------------------------------- //                                 //
                                                                                                                //
  var votePower = getVotePower(user);                                                                           // 228
                                                                                                                //
  // Votes & Score                                                                                              //
  var result = collection.update({ _id: item && item._id, downvoters: user._id }, {                             // 231
    $pull: { downvoters: user._id },                                                                            // 232
    $inc: { downvotes: -1, baseScore: votePower },                                                              // 233
    $set: { inactive: false }                                                                                   // 234
  });                                                                                                           //
                                                                                                                //
  if (result > 0) {                                                                                             // 237
    // Remove item from list of downvoted items                                                                 //
    removeVote(user._id, item._id, collectionName, 'down');                                                     // 239
                                                                                                                //
    // extend item with baseScore to help calculate newScore                                                    //
    item = _.extend(item, { baseScore: item.baseScore + votePower });                                           // 242
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                           // 243
                                                                                                                //
    // if the item is being upvoted by its own author, don't give karma                                         //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                          // 246
                                                                                                                //
    // --------------------- Server-Side Async Callbacks --------------------- //                               //
                                                                                                                //
    Telescope.callbacks.runAsync("cancelDownvoteAsync", item, user);                                            // 252
                                                                                                                //
    // ----------------------------------------------------------------------- //                               //
  }                                                                                                             //
  // console.log(collection.findOne(item._id));                                                                 //
  return true;                                                                                                  // 257
};                                                                                                              //
                                                                                                                //
Meteor.methods({                                                                                                // 260
  upvotePost: function (postId) {                                                                               // 261
    check(postId, String);                                                                                      // 262
    return Telescope.upvoteItem.call(this, Posts, postId);                                                      // 263
  },                                                                                                            //
  downvotePost: function (postId) {                                                                             // 265
    check(postId, String);                                                                                      // 266
    return Telescope.downvoteItem.call(this, Posts, postId);                                                    // 267
  },                                                                                                            //
  cancelUpvotePost: function (postId) {                                                                         // 269
    check(postId, String);                                                                                      // 270
    return Telescope.cancelUpvote.call(this, Posts, postId);                                                    // 271
  },                                                                                                            //
  cancelDownvotePost: function (postId) {                                                                       // 273
    check(postId, String);                                                                                      // 274
    return Telescope.cancelDownvote.call(this, Posts, postId);                                                  // 275
  },                                                                                                            //
  upvoteComment: function (commentId) {                                                                         // 277
    check(commentId, String);                                                                                   // 278
    return Telescope.upvoteItem.call(this, Comments, commentId);                                                // 279
  },                                                                                                            //
  downvoteComment: function (commentId) {                                                                       // 281
    check(commentId, String);                                                                                   // 282
    return Telescope.downvoteItem.call(this, Comments, commentId);                                              // 283
  },                                                                                                            //
  cancelUpvoteComment: function (commentId) {                                                                   // 285
    check(commentId, String);                                                                                   // 286
    return Telescope.cancelUpvote.call(this, Comments, commentId);                                              // 287
  },                                                                                                            //
  cancelDownvoteComment: function (commentId) {                                                                 // 289
    check(commentId, String);                                                                                   // 290
    return Telescope.cancelDownvote.call(this, Comments, commentId);                                            // 291
  }                                                                                                             //
});                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/subscriptions.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// note: this is shared between client/server in order to enable fast-render to auto-detect subscriptions       //
                                                                                                                //
Telescope.subscriptions.preload('settings');                                                                    // 3
Telescope.subscriptions.preload('currentUser');                                                                 // 4
                                                                                                                //
FlowRouter.subscriptions = function () {                                                                        // 6
  var flow = this;                                                                                              // 7
  Telescope.subscriptions.forEach(function (sub) {                                                              // 8
    if (typeof sub === 'object') {                                                                              // 9
      flow.register(sub.subName, Meteor.subscribe(sub.subName, sub.subArguments));                              // 10
    } else {                                                                                                    //
      flow.register(sub, Meteor.subscribe(sub));                                                                // 12
    }                                                                                                           //
  });                                                                                                           //
};                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/server/start.js                                                                  //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.startup(function () {                                                                                    // 1
  Events.log({                                                                                                  // 2
    name: "firstRun",                                                                                           // 3
    unique: true, // will only get logged a single time                                                         // 4
    important: true                                                                                             // 5
  });                                                                                                           //
});                                                                                                             //
                                                                                                                //
if (Settings.get('mailUrl')) process.env.MAIL_URL = Settings.get('mailUrl');                                    // 9
                                                                                                                //
Meteor.startup(function () {                                                                                    // 12
  SyncedCron.start();                                                                                           // 13
});                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/server/fastrender.js                                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
Meteor.startup(function () {                                                                                    // 1
                                                                                                                //
  FastRender.onAllRoutes(function (path) {                                                                      // 3
                                                                                                                //
    var fr = this;                                                                                              // 5
                                                                                                                //
    Telescope.subscriptions.forEach(function (sub) {                                                            // 7
                                                                                                                //
      if (typeof sub === 'object') {                                                                            // 9
                                                                                                                //
        fr.subscribe(sub.subName, sub.subArguments);                                                            // 11
      } else {                                                                                                  //
                                                                                                                //
        fr.subscribe(sub);                                                                                      // 15
      }                                                                                                         //
    });                                                                                                         //
  });                                                                                                           //
});                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/lib/server/routes.js                                                                 //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var increasePostClicks = function (postId, ip) {                                                                // 1
                                                                                                                //
  var clickEvent = {                                                                                            // 3
    name: 'click',                                                                                              // 4
    properties: {                                                                                               // 5
      postId: postId,                                                                                           // 6
      ip: ip                                                                                                    // 7
    }                                                                                                           //
  };                                                                                                            //
                                                                                                                //
  // make sure this IP hasn't previously clicked on this post                                                   //
  var existingClickEvent = Events.findOne({ name: 'click', 'properties.postId': postId, 'properties.ip': ip });
                                                                                                                //
  if (!existingClickEvent) {                                                                                    // 14
    Events.log(clickEvent);                                                                                     // 15
    Posts.update(postId, { $inc: { clickCount: 1 } });                                                          // 16
  }                                                                                                             //
};                                                                                                              //
                                                                                                                //
Picker.route('/out', function (params, req, res, next) {                                                        // 20
  var query = params.query;                                                                                     // 21
  if (query.url) {                                                                                              // 22
    // for some reason, query.url doesn't need to be decoded                                                    //
    var post = Posts.findOne({ url: query.url });                                                               // 23
    if (post) {                                                                                                 // 24
      var ip = req.connection.remoteAddress;                                                                    // 25
      increasePostClicks(post._id, ip);                                                                         // 26
      res.writeHead(302, { 'Location': query.url });                                                            // 27
      res.end();                                                                                                // 28
    } else {                                                                                                    //
      // don't redirect if we can't find a post for that link                                                   //
      res.end('Invalid URL');                                                                                   // 31
    }                                                                                                           //
  } else {                                                                                                      //
    res.end("Please provide a URL");                                                                            // 34
  }                                                                                                             //
});                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/ar.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                           // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                          // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                 // 11
  TAPi18n.translations["ar"] = {};                                                                              // 12
}                                                                                                               // 13
                                                                                                                // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                      // 15
  TAPi18n.translations["ar"][namespace] = {};                                                                   // 16
}                                                                                                               // 17
                                                                                                                // 18
_.extend(TAPi18n.translations["ar"][namespace], {"menu":"قائمة","view":"معاينة","top":"اﻻكثر شعبية","new":"جديد","best":"اﻻفضل","digest":"ملخص","users":"مستخدمين","settings":"الإعدادات","admin":"مشرف","post":"ارسل","toolbox":"الأدوات","sign_up_sign_in":"دخول/تسجيل","my_account":"حسابي","view_profile":"مشاهدة الملف الشخصي","edit_account":"تعديل الحساب","you_are_already_logged_in":"انت اﻻن متصل","sorry_this_is_a_private_site_please_sign_up_first":"يتوجب عليك الدخول","thanks_for_signing_up":"شكرا لقيامك بالتسجيل","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"الدخول الى الموقع  يكون عن طريق الدعوة فقط. سوف نبلغك في أقرب وقت عندما يكو ن فيه  مكانا متاحا.","sorry_you_dont_have_the_rights_to_view_this_page":"ﻻ يمكنك رؤية هذه الصفحة","not_found":"Oups","were_sorry_whatever_you_were_looking_for_isnt_here":"ما تبحث عنه غير موجود هنا","sorry_you_do_not_have_access_to_this_page":"عذرا, ﻻ يمكنك الدخول لهذه الصفحة","please_sign_in_first":"يتوجب عليك الدخول","sorry_you_have_to_be_an_admin_to_view_this_page":"عذرا, يتوجب عليك ان تكون مشرف لرؤية هذه الصفحة","sorry_you_dont_have_permissions_to_add_new_items":"ليس ليدك الصلحيات ﻻضافة مشاركات","sorry_you_cannot_edit_this_post":"ﻻ سنكنك التعديل على هذه المشاركة","you_need_to_login_and_be_an_admin_to_add_a_new_category":"يجب أن تكون مشرف ومسجلا لإضافة مجموعة","you_need_to_login_or_be_invited_to_post_new_comments":"يجب أن تكون مسجلا و مدعو لإضافة التعليقات","please_wait":"Merci de patienter ","seconds_before_commenting_again":" ثواني قبل نشر تعليق جديد","your_comment_is_empty":"تعليقك فارغ","you_dont_have_permission_to_delete_this_comment":"ليس  لديك إذن لحذف هذا التعليق","you_need_to_login_or_be_invited_to_post_new_stories":"يجب أن تكون مسجلا أو مدعو ﻻنشاء مشاركة جديدة","read_more":"اقر اﻻتي","your_account_has_been_approved":"قد تم قبول حسابك","welcome_to":"مرحبا بك في  ","profile":"الملف الشخصي","sign_out":"خروج","invitedcount":"اعضاء المدعون","actions":"اعمال","invites_left":"الدعوات الباقية","id":"ID","github":"GitHub","site":"الموقع","upvoted_posts":"المشاركات المصوت لها","downvoted_posts":"المشاركات المصوت ضدها","pending":"في الانتظار","loading":"تحميل ...","submit":"ابعث","you_must_be_logged_in":"يتوجب عليك الدخول","are_you_sure":"هل انت متاكد؟","please_log_in_first":"يتوجب عليك الدخول","sign_in_sign_up_with_twitter":"تسجيل الدخول / تسجيل عبر تويتر","most_popular_posts":"اﻻكثر شعبية اﻻن","newest_posts":"أحدث المشاركات.","highest_ranked_posts_ever":"اﻻفضل في كل اﻻوقات","the_profile_of":"الملف الشخصى ل","posts_awaiting_moderation":"مشاركات تنتظر المصادقة","future_scheduled_posts":"المشاركات المقرر مستقبﻻ.","users_dashboard":"لوحة قيادة الخاصة بالمستخدمين","telescope_settings_panel":"لوحة اﻻعدادات","various_utilities":"المرافق المختلفة."});
TAPi18n._registerServerTranslator("ar", namespace);                                                             // 20
                                                                                                                // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/bg.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                      // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                 // 9
  TAPi18n.translations["bg"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                      // 13
  TAPi18n.translations["bg"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["bg"][namespace], {"menu":"Меню","view":"Преглед","top":"Топ","new":"Нови ","best":"Най-добри","digest":"Справочник","users":"Потребители","settings":"Настройки","admin":"Администратор","post":"Публикация","toolbox":"Toolbox","sign_up_sign_in":"Регистрирай се/Влезте","my_account":"Моят профил","view_profile":"Преглед на профил","edit_account":"Редактиране на профила","you_are_already_logged_in":"Вече сте влезли в системата","sorry_this_is_a_private_site_please_sign_up_first":"За съжаление, това е частен сайт. Моля, регистрирайте се първо.","thanks_for_signing_up":"Благодаря, че се регистрирахте!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Сайтът в момента е само с покани, но ние ще ви уведомим веднага щом  отвари.","sorry_you_dont_have_the_rights_to_view_this_page":"Съжаляваме, но нямате нужните правата, за да видите тази страница.","not_found":"Not Found!","were_sorry_whatever_you_were_looking_for_isnt_here":"За съжаление; Каквото и да търсите не е тук..","sorry_you_do_not_have_access_to_this_page":"Съжаляваме, нямате достъп до тази страница.","please_sign_in_first":"Моля, първо влезте в системата.","sorry_you_have_to_be_an_admin_to_view_this_page":"Съжаляваме, трябва да сте администратор за да видите тази страница.","sorry_you_dont_have_permissions_to_add_new_items":"Съжаляваме, нямате права за да добавяте нови елементи.","sorry_you_cannot_edit_this_post":"Съжаляваме, неможете да променяте тази публикация.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Трябва да сте влезнали в системата и да сте администратор за да добавяте нова категория.","you_need_to_login_or_be_invited_to_post_new_comments":"Трябва да сте влезнали в системата или да сте поканен за да публикувате нови коментари.","please_wait":"Моля изчакайте ","seconds_before_commenting_again":" секунди преди да коментирате отново","your_comment_is_empty":"Коментара ви е празен.","you_dont_have_permission_to_delete_this_comment":"Нямате права за да изтриете този коментар.","you_need_to_login_or_be_invited_to_post_new_stories":"Трябва да влезете в системата или да бъде поканен да публикувате нови истории.","read_more":"Прочетете повече","your_account_has_been_approved":"Профилът ви е одобрен.","welcome_to":"Добре дошли в ","profile":"Профил","sign_out":"Излизане","invitedcount":"Брой пъти поканен","actions":"Действия","invites_left":"Оставащи покани","id":"ID","github":"GitHub","site":"Сайт","upvoted_posts":"Харесвани публикации","downvoted_posts":"Нехаресвани публикации","pending":"в очакване","loading":"Зареждане...","submit":"Предай","you_must_be_logged_in":"Трябва да сте влезнали в системата.","are_you_sure":"Сигурни ли сте?","please_log_in_first":"Моля първо влезте в системата","sign_in_sign_up_with_twitter":"Влезте/Регистрирайте се с Twitter","most_popular_posts":"Най-популярни публикации в момента.","newest_posts":"Най-нови публикации.","highest_ranked_posts_ever":"Топ публикации за всички времена.","the_profile_of":"Профилът на","posts_awaiting_moderation":"Публикации очакващи модерация.","future_scheduled_posts":"Планирани публикации.","users_dashboard":"Потребителски панел.","telescope_settings_panel":"Telescope настройки.","various_utilities":"Други услуги."});
TAPi18n._registerServerTranslator("bg", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/cs.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                 // 9
  TAPi18n.translations["cs"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                      // 13
  TAPi18n.translations["cs"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["cs"][namespace], {"menu":"Menu","view":"Zobrazit","top":"Top","new":"Nejnovější","best":"Ne","digest":"Výběr","scheduled":"Naplánováno","users":"Uživatelé","settings":"Na","admin":"Admin","post":"Příspěvek","toolbox":"Nástroje","sign_up_sign_in":"RegistrovatP","my_account":"Můj účet","view_profile":"Zobrazit profil","edit_account":"Upravit účet","view_your_profile":"Zobrazit můj profil","edit_your_profile":"Upravit můj profil","you_are_already_logged_in":"Již jste přihlášeni","sorry_this_is_a_private_site_please_sign_up_first":"Omlouváme se, ale toto je soukromá část webu. Nejdříve se prosím zaregistrujte.","thanks_for_signing_up":"Děkujeme za registraci!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Tento web je v současné době pouze pro pozvané, jakmile se uvolní místo, ozveme se vám.","sorry_you_dont_have_the_rights_to_view_this_page":"Je nám líto, nemáte oprávnění k zobrazení této stránky.","sorry_you_do_not_have_the_rights_to_comments":"Je nám líto, ale pro vložení komentáře nemáte dostatečná práva.","not_found":"Nenalezeno!","were_sorry_whatever_you_were_looking_for_isnt_here":"Omlouváme se. Vámi hledaná věc zde není...","disallowed_property_detected":"Zjistili jsme nepovolenou vlastnost","sorry_you_do_not_have_access_to_this_page":"Je nám líto, na tuto stránku nemáte přístup","please_sign_in_first":"Nejdříve se prosím přihlašte","sorry_you_have_to_be_an_admin_to_view_this_page":"Pro zobrazení této stránky musíte být admin.","sorry_you_dont_have_permissions_to_add_new_items":"Je nám líto, nemáte oprávnění k přidání nové položky.","sorry_you_cannot_edit_this_post":"Je nám líto, tento příspěvek nemůžete editovat.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Pro přidání nové kategorie musíte být přihlášení s administrátorskými právy.","you_need_to_login_or_be_invited_to_post_new_comments":"Pro vložení nového komentáře musíte být přihlášení nebo pozvaní.","please_wait":"Prosím, čekejte","seconds_before_commenting_again":"Vyčkejte prosím chvíli před dalším komentářem","your_comment_is_empty":"Váš komentář je prázdný.","you_dont_have_permission_to_delete_this_comment":"Nemáte oprávnění k odstranění tohoto komentáře.","you_need_to_login_or_be_invited_to_post_new_stories":"Pro vložení nového příspěvku musíte být přihlášení nebo pozvaní.","read_more":"Více informací","your_account_has_been_approved":"Váš účet byl schválen.","welcome_to":"Vítejte v","profile":"Profil","sign_out":"Odhlásit se","you_ve_been_signed_out":"Byli jste odhlášeni. Vraťte se brzy zpět!","invitedcount":"Počet pozvánek","actions":"Akce","invites_left":"Zbývajících pozvánek","id":"ID","github":"GitHub","site":"Web","submitted_posts":"Vložené příspěvky","upvoted_posts":"Příspěvky hlasované +1","downvoted_posts":"Příspěvky hlasované -1","pending":"Zatím nevyřízené","loading":"Nahrávám...","submit":"Vložit","you_must_be_logged_in":"Musíte být přihlášeni.","are_you_sure":"Jste si jistí?","please_log_in_first":"Nejdříve se prosím přihlašte.","please_log_in_to_comment":"Pro vložení komentáře se prosím nejprve přihlašte.","sign_in_sign_up_with_twitter":"Registrovat / přihlásit přes Twitter","most_popular_posts":"Nejpopulárnější příspěvky právě teď.","newest_posts":"Nejnovější příspěvky.","highest_ranked_posts_ever":"Nejlépe hodnocené příspěvky za celou dobu.","the_profile_of":"Profil","posts_awaiting_moderation":"Příspěvky čekající na schválení.","future_scheduled_posts":"Naplánované příspěvky.","users_dashboard":"Nástěnka uživatele.","telescope_settings_panel":"Nastavení aplikace.","various_utilities":"Ostatní nastavení."});
TAPi18n._registerServerTranslator("cs", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/da.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                 // 9
  TAPi18n.translations["da"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                      // 13
  TAPi18n.translations["da"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["da"][namespace], {"scheduled":"Planlagt","users":"Brugere","settings":"Indstillinger","admin":"Admin","post":"Indlæg","toolbox":"Værktøjskasse","sign_up_sign_in":"Tilmeld / Log ind","my_account":"Min konto","view_profile":"Profil","edit_account":"Rediger konto","you_are_already_logged_in":"Du er allerede logget ind","read_more":"Læs mere","welcome_to":"Velkommen til","profile":"Profil","sign_out":"Log ud","actions":"Handlinger","id":"ID","github":"GitHub","sign_in_sign_up_with_twitter":"Tilmeld / Log ind med Twitter","newest_posts":"De nyeste indlæg.","telescope_settings_panel":" "});
TAPi18n._registerServerTranslator("da", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/de.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                 // 9
  TAPi18n.translations["de"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                      // 13
  TAPi18n.translations["de"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["de"][namespace], {"menu":"Menü","top":"Top","new":"Neu","digest":"Zusammenfassung","users":"Benutzer","settings":"Einstellungen","admin":"Admin","post":"Link eintragen","toolbox":"Werkzeuge","sign_up_sign_in":"Registrieren/Anmelden","my_account":"Mein Konto","view_profile":"Profil anzeigen","edit_account":"Konto bearbeiten","you_are_already_logged_in":"Du bist bereits eingeloggt","sorry_this_is_a_private_site_please_sign_up_first":"Dies ist ein privates Angebot. Du musst dich erst registrieren.","thanks_for_signing_up":"Vielen Dank für Deine Registrierung!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Derzeit sind Neuregistrierungen nur mit einer Einladung möglich, aber wir werden dich wissen lassen, wenn wir unsere Registrierung wieder öffnen.","sorry_you_dont_have_the_rights_to_view_this_page":"Entschuldigung, Du hast leider keine Rechte diese Seite anzuzeigen.","not_found":"Nichts gefunden!","were_sorry_whatever_you_were_looking_for_isnt_here":"Es tut uns leid, wonach auch immer Du gesucht hast, hier ist es nicht.","sorry_you_do_not_have_access_to_this_page":"Sorry, Du hast keinen Zugang zu dieser Seite","please_sign_in_first":"Bitte melde Dich zuerst an.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sorry, Du musst Admin sein um diese Seite anzeigen zu können.","sorry_you_dont_have_permissions_to_add_new_items":"Sorry, Du hast keine Berechtigung neue Einträge zu erstellen.","sorry_you_cannot_edit_this_post":"Sorry, Du kannst diesen Beitrag nicht bearbeiten.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Du musst Dich anmelden und ein Admin sein um eine neue Kategorien hinzuzufügen.","you_need_to_login_or_be_invited_to_post_new_comments":"Du musst dich einloggen oder eingeladen sein um neue Kommentare schreiben zu können.","please_wait":"Bitte warte ","seconds_before_commenting_again":" Sekunden, bevor du wieder kommentierst.","your_comment_is_empty":"Dein Kommentar ist leer.","you_dont_have_permission_to_delete_this_comment":"Du hast keine Berechtigung diesen Kommentar zu löschen.","you_need_to_login_or_be_invited_to_post_new_stories":"Du musst eingeloggt oder eingeladen sein um einen neuen Link zu posten.","read_more":"weiterlesen","your_account_has_been_approved":"Dein Konto wurde freigeschaltet.","welcome_to":"Willkommen bei ","profile":"Profil","sign_out":"Einloggen!","pending":"Wartet","loading":"lädt...","submit":"Abschicken","you_must_be_logged_in":"Du musst angemeldet sein.","are_you_sure":"Bist Du sicher?","please_log_in_first":"Bitte melde Dich zuerst an","sign_in_sign_up_with_twitter":"Anmelden/Registrieren mit Twitter"});
TAPi18n._registerServerTranslator("de", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/el.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                 // 9
  TAPi18n.translations["el"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                      // 13
  TAPi18n.translations["el"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["el"][namespace], {"menu":"Μενού","view":"Προβολή","top":"Κορυφαία","new":"Νέα","best":"Καλύτερα","digest":"Περίληψη","users":"Χρήστες","settings":"Ρυθμίσεις","admin":"Διαχειριστής","post":"Δημοσίευση","toolbox":"Εργαλειοθήκη","sign_up_sign_in":"Εγγραφή/Σύνδεση","my_account":"Ο λογαριασμός μου","view_profile":"Προβολή προφίλ","edit_account":"Επεξεργασία λογαριασμού","you_are_already_logged_in":"Είστε ήδη συνδεδεμένος","sorry_this_is_a_private_site_please_sign_up_first":"Μας συγχωρείτε αλλα πρέπει να εγγραφείτε για να συνεχίσετε.","thanks_for_signing_up":"Ευχαριστούμε για την εγγραφή σας!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Δυστυχώς χρειάζεστε πρόσκληση για να εγγραφείτε. Θα σας ειδοποιήσουμε μόλις ανοίξουν πάλι οι εγγραφές.","sorry_you_dont_have_the_rights_to_view_this_page":"Δεν έχετε δικαίωμα να δείτε αυτήν την σελίδα.","not_found":"Δεν βρέθηκε!","were_sorry_whatever_you_were_looking_for_isnt_here":"Αυτό που ψάχνετε δεν είναι εδώ!","sorry_you_do_not_have_access_to_this_page":"Συγγνώμη, δεν έχετε πρόσβαση σε αυτήν τη σελίδα","please_sign_in_first":"Πρέπει να συνδεθείς πρώτα.","sorry_you_have_to_be_an_admin_to_view_this_page":"Συγγνώμη, πρέπει να είσαι διαχειριστής για να δείς αυτήν τη σελίδα.","sorry_you_dont_have_permissions_to_add_new_items":"Συγγνώμη, Συγγνώμη, δεν έχετε δικαίωμα να προσθέσετε νέα στοιχεία.","sorry_you_cannot_edit_this_post":"Συγγνώμη, δεν μπορείς να επεξεργαστείς αυτήν την δημοσίευση.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Πρέπει να συνδεθείς για να προσθέσεις νέα κατηγορία.","you_need_to_login_or_be_invited_to_post_new_comments":"Πρέπει να συνδεθείς ή να έχεις πρόσκληση για να κάνεις σχόλια.","please_wait":"Παρακαλώ περιμένετε ","seconds_before_commenting_again":" δευτερόλεπτα πριν μπορείτε να ξανα σχολιάσετε.","your_comment_is_empty":"Το σχόλιό σας είναι άδειο.","you_dont_have_permission_to_delete_this_comment":"Συγγνώμη, Συγγνώμη, δεν έχετε δικαίωμα να διαγράψετε αυτό το σχόλιο.","you_need_to_login_or_be_invited_to_post_new_stories":"Πρέπει να συνδεθείς ή να έχεις πρόσκληση για να δημοσιέυσεις.","read_more":"Διάβασε περισσότερα","your_account_has_been_approved":"Ο λογαριασμό σου έχει εγκριθεί.","welcome_to":"Καλωσορίσατε στο ","profile":"Προφίλ","sign_out":"Αποσύνδεση","invitedcount":"Πλήθος προσκλήσεων","actions":"Ενέργειες","invites_left":"Προσκλήσεις που απομενουν","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Δημοσιεύσεις που μου αρέσουν","downvoted_posts":"Δημοσιεύσεις που ΔΕΝ μου αρέσουν","pending":"Εκκρεμούν","loading":"Περιμένετε...","submit":"Υποβολή","you_must_be_logged_in":"Πρέπει να συνδεθείτε.","are_you_sure":"Είστε σίγουρος?","please_log_in_first":"Πρέπει να συνδεθείτε πρώτα.","sign_in_sign_up_with_twitter":"Εγγραφείτε με το Twitter σας","most_popular_posts":"Οι πιο δημοφιλής δημοσιεύσεις.","newest_posts":"Οι πιο καινούριες δημοσιεύσεις.","highest_ranked_posts_ever":"Οι πιο υπερψηφισμένες δημοσιεύσεις.","the_profile_of":"Το προφίλ του","posts_awaiting_moderation":"Δημοσιεύσεις που αναμένουν έγγριση.","future_scheduled_posts":"Μελλοντικές δημοσιεύσεις.","users_dashboard":"Πίνακας Χρηστών.","telescope_settings_panel":"Γενικές Ρυθμίσεις.","various_utilities":"Διάφορα εργαλεία."});
TAPi18n._registerServerTranslator("el", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/en.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
// integrate the fallback language translations                                                                 // 8
translations = {};                                                                                              // 9
translations[namespace] = {"menu":"Menu","view":"View","top":"Top","new":"New","best":"Best","digest":"Digest","scheduled":"Scheduled","users":"Users","settings":"Settings","admin":"Admin","post":"Post","toolbox":"Toolbox","sign_up_sign_in":"Register/Sign In","my_account":"My Account","view_profile":"View Profile","edit_account":"Edit Account","view_your_profile":"View your profile","edit_your_profile":"Edit your profile","you_are_already_logged_in":"You are already logged in","sorry_this_is_a_private_site_please_sign_up_first":"Sorry, this is a private site. Please register first.","thanks_for_signing_up":"Thanks for registering!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"The site is currently invite-only, but we will let you know as soon as a spot opens up.","sorry_you_dont_have_the_rights_to_view_this_page":"Sorry, you don't have the rights to view this page.","sorry_you_do_not_have_the_rights_to_comments":"Sorry, you do not have the rights to leave comments at this time.","not_found":"Not Found!","were_sorry_whatever_you_were_looking_for_isnt_here":"We're sorry; whatever you were looking for isn't here..","disallowed_property_detected":"Disallowed property detected","sorry_you_do_not_have_access_to_this_page":"Sorry, you do not have access to this page","please_sign_in_first":"Please Sign In First.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sorry, you  have to be an admin to view this page.","sorry_you_dont_have_permissions_to_add_new_items":"Sorry, you don't have permissions to add new items.","sorry_you_cannot_edit_this_post":"Sorry, you cannot edit this post.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"You need to login and be an admin to add a new category.","you_need_to_login_or_be_invited_to_post_new_comments":"You need to login or be invited to post new comments.","please_wait":"Please wait ","seconds_before_commenting_again":" seconds before commenting again","your_comment_is_empty":"Your comment is empty.","you_dont_have_permission_to_delete_this_comment":"You don't have permission to delete this comment.","you_need_to_login_or_be_invited_to_post_new_stories":"You need to login or be invited to post new stories.","read_more":"Read more","your_account_has_been_approved":"Your account has been approved.","welcome_to":"Welcome to ","profile":"Profile","sign_out":"Sign Out","you_ve_been_signed_out":"You've been signed out. Come back soon!","invitedcount":"InvitedCount","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","submitted_posts":"Submitted Posts","upvoted_posts":"Upvoted Posts","downvoted_posts":"Downvoted Posts","pending":"Pending","loading":"Loading...","submit":"Submit","you_must_be_logged_in":"You must be logged in.","are_you_sure":"Are you sure?","please_log_in_first":"Please log in first.","please_log_in_to_comment":"Please log in to comment.","sign_in_sign_up_with_twitter":"Register/Sign Up with Twitter","most_popular_posts":"The most popular posts right now.","newest_posts":"The newest posts.","highest_ranked_posts_ever":"The all-time highest-ranked posts.","the_profile_of":"The profile of","posts_awaiting_moderation":"Posts awaiting moderation.","future_scheduled_posts":"Future scheduled posts.","users_dashboard":"Users dashboard.","telescope_settings_panel":"Telescope settings panel.","various_utilities":"Various utilities.","follow_on_twitter":"Follow on Twitter","like_on_facebook":"Like on Facebook","share_on_twitter":"Share on Twitter","share_on_facebook":"Share on Facebook","powered_by_telescope":"Powered by Telescope"};
TAPi18n._loadLangFileObject("en", translations);                                                                // 11
TAPi18n._registerServerTranslator("en", namespace);                                                             // 12
                                                                                                                // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/es.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                  // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                 // 9
  TAPi18n.translations["es"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                      // 13
  TAPi18n.translations["es"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["es"][namespace], {"menu":"Menú","view":"Explorar","top":"Top","new":"Nuevos","best":"Mejores","digest":"Resumen","scheduled":"Programado","users":"Usuarios","settings":"Configuración","admin":"Administrador","post":"Post","toolbox":"Herramientas","sign_up_sign_in":"Registrarse/Entrar","my_account":"Mi Cuenta","view_profile":"Ver perfil","edit_account":"Editar cuenta","view_your_profile":"Ver perfil","edit_your_profile":"Editar perfil","you_are_already_logged_in":"Ya estás conectado","sorry_this_is_a_private_site_please_sign_up_first":"Lo sentimos pero esta página es privada. Por favor, inicia sesión para verla.","thanks_for_signing_up":"Gracias por registrarte!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"El sitio solo es accesible mediante invitación, pero tan pronto como esté disponible para el público te lo haremos saber.","sorry_you_dont_have_the_rights_to_view_this_page":"Lo sentimos pero no tienes los permisos suficientes para ver esta página.","sorry_you_do_not_have_the_rights_to_comments":"Lo sentimos, no tiene los permisos para dejar comentarios en este momento.","not_found":"¡No encontramos nada!","were_sorry_whatever_you_were_looking_for_isnt_here":"Lo sentimos; lo que estás buscando no está aquí ..","sorry_you_do_not_have_access_to_this_page":"Lo sentimos, no tienes acceso a esta página","please_sign_in_first":"Por favor, inicia sesión primero.","sorry_you_have_to_be_an_admin_to_view_this_page":"Lo sentimos, tienes que ser un administrador para ver esta página.","sorry_you_dont_have_permissions_to_add_new_items":"Lo sentimos, no tiene permisos para agregar nuevos elementos.","sorry_you_cannot_edit_this_post":"Lo sentimos, no puede editar este post.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Usted tiene que entrar y ser un administrador para añadir una nueva categoría","you_need_to_login_or_be_invited_to_post_new_comments":"¡Tienes que iniciar sesión o ser invitado a publicar nuevos comentarios.","please_wait":"Espera por favor","seconds_before_commenting_again":" segundos antes de comentar de nuevo","your_comment_is_empty":"Tu comentario está vacío","you_dont_have_permission_to_delete_this_comment":"No tiene permiso para eliminar este comentario.","you_need_to_login_or_be_invited_to_post_new_stories":"Tienes que iniciar sesión o ser invitado para publicar nuevas historias.","read_more":"Leer más","your_account_has_been_approved":"Su cuenta ha sido aprobada.","welcome_to":"Bienvenido a","profile":"Perfil","sign_out":"Cerrar sesión","you_ve_been_signed_out":"Has cerrado tu sesión. ¡Vuelve pronto!","invitedcount":"Total de invitados","actions":"Acciones","invites_left":"Invitaciones pendientes","id":"ID","github":"GitHub","site":"Sitio","upvoted_posts":"Posts votados a favor","downvoted_posts":"Posts votados en contra","pending":"Pendiente","loading":"Cargando...","submit":"Enviar","you_must_be_logged_in":"Debe estar conectado.","are_you_sure":"¿Está seguro? ","please_log_in_first":"Por favor, inicie sesión primero.","please_log_in_to_comment":"Por favor, inicia una sesión para comentar.","sign_in_sign_up_with_twitter":"Registrar/Iniciar sesión con Twitter","most_popular_posts":"Los posts más populares en este momento.","newest_posts":"Los posts más nuevos.","highest_ranked_posts_ever":"Los posts mejor ubicados de todos los tiempos.","the_profile_of":"El perfil de","posts_awaiting_moderation":"Posts esperando moderación.","future_scheduled_posts":"Posts programados para el futuro.","users_dashboard":"Panel de usuarios.","telescope_settings_panel":"Panel de configuración de Telescope","various_utilities":"Varias utilidades."});
TAPi18n._registerServerTranslator("es", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/et.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                 // 9
  TAPi18n.translations["et"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                      // 13
  TAPi18n.translations["et"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["et"][namespace], {"menu":"Menüü","view":"Vaata","top":"Populaarseimad","new":"Uued","best":"Parimad","digest":"Digest","scheduled":"Plaanitud","users":"Kasutajad","settings":"Seaded","admin":"Admin","post":"Postitus","toolbox":"Tööriistad","sign_up_sign_in":"Registreeru / Logi sisse","my_account":"Minu konto","view_profile":"Vaata profiili","edit_account":"Muuda kontot","view_your_profile":"Vaata oma profiili","edit_your_profile":"Muuda oma profiili","you_are_already_logged_in":"Sa oled juba sisse logitud","sorry_this_is_a_private_site_please_sign_up_first":"Vabandame, see on privaatne veebileht. Palun registreeri kasutajaks.","thanks_for_signing_up":"Täname registreerimise eest!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"See veebileht on hetkel ainult kutsetega, me anname teada kui avaneb kõigile kasutajatele","sorry_you_dont_have_the_rights_to_view_this_page":"V","sorry_you_do_not_have_the_rights_to_comments":"Vabandame, sul ei ole praegu õigust kommenteerida.","not_found":"Ei leitud!","were_sorry_whatever_you_were_looking_for_isnt_here":"Vabandame; mida sa otsisid ei ole siin..","disallowed_property_detected":"Keelatud omadus tuvastatud","sorry_you_do_not_have_access_to_this_page":"Vabandame, sul ei ole ligipääsu sellele lehele","please_sign_in_first":"Palun Logi sisse.","sorry_you_have_to_be_an_admin_to_view_this_page":"Vabandame, sa pead olema admin selle lehe vaatamiseks.","sorry_you_dont_have_permissions_to_add_new_items":"Vabandame, sul ei ole õigusi lisada uusi objekte.","sorry_you_cannot_edit_this_post":"Vabandame, sa ei saa muuta seda postitust.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Sa pead sisse logima ja olema admin, et lisada uus kategooria.","you_need_to_login_or_be_invited_to_post_new_comments":"Sa pead sisse logima või olema kutsutud, et postitada uusi kommentaare.","please_wait":"Palun oota","seconds_before_commenting_again":" sekundit enne kommenteerides uuesti","your_comment_is_empty":"Teie kommentaar on tühi.","you_dont_have_permission_to_delete_this_comment":"Sul ei ole luba, et see kommentaar kustutada.","you_need_to_login_or_be_invited_to_post_new_stories":"Sa pead sisse logima või olema kutsutud, et postitada uusi postitusi.","read_more":"Loe rohkem","your_account_has_been_approved":"Sinu konto on heaks kiidetud.","welcome_to":"Tere tulemast","profile":"Profiil","sign_out":"Logi välja","you_ve_been_signed_out":"Oled välja logitud. Tule varsti tagasi!","invitedcount":"InvitedCount","actions":"Actions","invites_left":"kutset jäänud","id":"ID","github":"Github","site":"Sait","submitted_posts":"Esitatud postitused","upvoted_posts":"Upvoted postitused","downvoted_posts":"Downvoted postitused","pending":"Ootel","loading":"Laadimine...","submit":"Saada","you_must_be_logged_in":"Sa pead olema sisse logitud.","are_you_sure":"Oled sa kindel?","please_log_in_first":"Palun Logi sisse.","please_log_in_to_comment":"Palun logi sisse, et kommenteerida.","sign_in_sign_up_with_twitter":"Registreeru / Logi sisse Twitteriga","most_popular_posts":"Kõige po","newest_posts":"Uusimad postitused.","highest_ranked_posts_ever":"Kõigi aegade populaarseimad postitused.","the_profile_of":"Profiil","posts_awaiting_moderation":"Postitused ootavad kinnitust.","future_scheduled_posts":"Tulevikku planeeritud postitused.","users_dashboard":"Kasutajate töölaud.","telescope_settings_panel":"Teleskoobi seadete paneel.","various_utilities":"Erinevad teenused."});
TAPi18n._registerServerTranslator("et", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/fr.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                 // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                 // 9
  TAPi18n.translations["fr"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                      // 13
  TAPi18n.translations["fr"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["fr"][namespace], {"menu":"Menu","view":"Classement","top":"Populaire","new":"Nouveau","best":"Meilleur","digest":"Résumé","scheduled":"Planifié","users":"Utilisateurs","settings":"Paramètres","admin":"Admin","post":"Poster","toolbox":"Outils","sign_up_sign_in":"Connexion/Créer un compte","my_account":"Mon compte","view_profile":"Voir le profil","edit_account":"Modifier le compte","view_your_profile":"Voir votre profil","edit_your_profile":"Editer votre profil","you_are_already_logged_in":"Vous êtes déjà connecté","sorry_this_is_a_private_site_please_sign_up_first":"Désolé mais ce site est privé, vous devez d'abord vous connecter","thanks_for_signing_up":"Merci pour votre inscription !","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"L'accès au site se fait uniquement par invitation. Nous vous informerons dès qu'une place se libère.","sorry_you_dont_have_the_rights_to_view_this_page":"Désolé, vous n'avez pas le droit de voir cette page.","sorry_you_do_not_have_the_rights_to_comments":"Désolé, vous n'avez pas le droit de commenter","not_found":"Oups ! La page est introuvable.","were_sorry_whatever_you_were_looking_for_isnt_here":"Désolé, mais ce que vous cherchez n'est pas ici...","disallowed_property_detected":"Opération interdite","sorry_you_do_not_have_access_to_this_page":"Désolé, vous n'avez pas accès à cette page","please_sign_in_first":"Vous devez d'abord vous connecter.","sorry_you_have_to_be_an_admin_to_view_this_page":"Désolé, vous devez être administrateur pour voir cette page.","sorry_you_dont_have_permissions_to_add_new_items":"Désolé, vous n'avez pas la permission d'ajouter de nouveaux posts.","sorry_you_cannot_edit_this_post":"Désolé, vous ne pouvez pas modifier ce post.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Vous devez être administrateur et connecté pour ajouter une catégorie","you_need_to_login_or_be_invited_to_post_new_comments":"Vous devez être connecté et invité pour poster des commentaires","please_wait":"Merci de patienter ","seconds_before_commenting_again":" secondes avant de poster un nouveau commentaire","your_comment_is_empty":"Votre commentaire est vide","you_dont_have_permission_to_delete_this_comment":"Vous n'avez pas la permission de supprimer ce commentaire","you_need_to_login_or_be_invited_to_post_new_stories":"Vous devez être connecté ou invité pour créer un nouveau post","read_more":"Lire la suite.","your_account_has_been_approved":"Votre compte a été validé.","welcome_to":"Bienvenu sur ","profile":"Profil","sign_out":"Se déconnecter","you_ve_been_signed_out":"Vous avez été déconnecté","invitedcount":"Nombre d'invités","actions":"Actions","invites_left":"Invitations restantes","id":"ID","github":"GitHub","site":"Site","submitted_posts":"Posts soumis","upvoted_posts":"Posts upvotés","downvoted_posts":"Posts downvotés","pending":"En attente","loading":"Chargement...","submit":"Envoyer","you_must_be_logged_in":"Vous devez être connecté.","are_you_sure":"Etes-vous sûr ?","please_log_in_first":"Connectez-vous d'abord.","please_log_in_to_comment":"Connectez-vous pour commenter.","sign_in_sign_up_with_twitter":"Connexion/Créer un compte avec Twitter","most_popular_posts":"Posts les plus populaires.","newest_posts":"Posts les plus récents.","highest_ranked_posts_ever":"Posts les plus populaires de tous les temps.","the_profile_of":"Le profil de","posts_awaiting_moderation":"Posts en attente de moderation.","future_scheduled_posts":"Posts planifiés.","users_dashboard":"Tableau de bord utilisateur.","telescope_settings_panel":"Page de configuration de Telescope.","various_utilities":"Outils divers"});
TAPi18n._registerServerTranslator("fr", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/hu.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                 // 9
  TAPi18n.translations["hu"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                      // 13
  TAPi18n.translations["hu"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["hu"][namespace], {"menu":"Menü","view":"Nézet","top":"Felső","new":"Új","best":"Legjobb","digest":"Feltörekvő","users":"Felhasználók","settings":"Beállítások","admin":"Adminisztrátor","post":"Bejegyzés","toolbox":"Eszköztár","sign_up_sign_in":"Regisztráció / Bejelentkezés","my_account":"Fiókom","view_profile":"Profil megtekintése","edit_account":"Fiók szerkesztése","you_are_already_logged_in":"Már be vagy jelentkezve","sorry_this_is_a_private_site_please_sign_up_first":"Sajnálom, ez egy privát közösség. Kérlek, regisztrálj.","thanks_for_signing_up":"Köszönöm a regisztrációt!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Az oldal jelenleg csak meghívásos, de jelezni fogjuk, amint elérhető a regisztráció.","sorry_you_dont_have_the_rights_to_view_this_page":"Sajnáljuk, de nincs meg a jogod az oldal megtekintéséhez.","not_found":"Nem található!","were_sorry_whatever_you_were_looking_for_isnt_here":"Sajnáljuk, nincs itt amit keresel...","sorry_you_do_not_have_access_to_this_page":"Sajnáljuk, de nincs hozzáférésed ehhez az oldalhoz","please_sign_in_first":"Kérlek, először jelentkezz be.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sajnáljuk, de az oldal megtekintése csak adminisztrátoroknak lehetséges.","sorry_you_dont_have_permissions_to_add_new_items":"Sajnáljuk, de nincs jogosultságod új elemeket hozzáadni.","sorry_you_cannot_edit_this_post":"Sajnálom, nem szerkesztheted ezt a bejegyzést.","pending":"Függőben"});
TAPi18n._registerServerTranslator("hu", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/id.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                              // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                 // 9
  TAPi18n.translations["id"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                      // 13
  TAPi18n.translations["id"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["id"][namespace], {"menu":"Menu","view":"Tampilan","top":"Teratas","new":"Terbaru","best":"Terbaik","digest":"Intisari","scheduled":"Dijadwalkan","users":"Pengguna","settings":"Pengaturan","admin":"Admin","post":"Posting","toolbox":"Perkakas","sign_up_sign_in":"Daftar / Masuk","my_account":"Akun saya","view_profile":"Tampilkan profil","edit_account":"Ubah Akun","view_your_profile":"Lihat profil Anda","edit_your_profile":"Mengedit profil Anda","you_are_already_logged_in":"Kamu sudah masuk","sorry_this_is_a_private_site_please_sign_up_first":"Maaf, situs ini tidak untuk umum. Silahkan mendaftar terlebih dahulu.","thanks_for_signing_up":"Terima kasih telah mendaftar!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Situs ini saat ini hanya buat yang diundang, tapi kami akan memberitahu Anda sesegera setelah dibuka untuk umum.","sorry_you_dont_have_the_rights_to_view_this_page":"Maaf, Anda tidak memiliki hak untuk melihat halaman ini.","sorry_you_do_not_have_the_rights_to_comments":"Maaf, Anda tidak memiliki hak untuk meninggalkan komentar saat ini.","not_found":"Tidak ditemukan!","were_sorry_whatever_you_were_looking_for_isnt_here":"Kami meminta maaf; apa pun yang Anda cari tidak ada di sini ..","disallowed_property_detected":"Isian yang tidak diijinkan terdeteksi","sorry_you_do_not_have_access_to_this_page":"Maaf, Anda tidak memiliki hak akses untuk melihat halaman ini.","please_sign_in_first":"Silahkan Login Terlebih Dahulu","sorry_you_have_to_be_an_admin_to_view_this_page":"Maaf, Anda harus menjadi admin untuk melihat halaman ini.","sorry_you_dont_have_permissions_to_add_new_items":"Maaf, Anda tidak memiliki izin untuk menambahkan hal baru.","sorry_you_cannot_edit_this_post":"Maaf, Anda tidak dapat mengedit postingan ini.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Anda perlu login dan menjadi admin untuk menambahkan kategori baru.","you_need_to_login_or_be_invited_to_post_new_comments":"Anda harus login atau diundang untuk mengirimkan komentar baru.","please_wait":"Mohon tunggu","seconds_before_commenting_again":"detik sebelum berkomentar lagi","your_comment_is_empty":"Komentar anda kosong.","you_dont_have_permission_to_delete_this_comment":"Anda tidak memiliki izin untuk menghapus komentar ini.","you_need_to_login_or_be_invited_to_post_new_stories":"Anda harus login atau diundang untuk posting cerita baru.","read_more":"Baca selengkapnya","your_account_has_been_approved":"Akun Anda telah disetujui.","welcome_to":"Selamat Datang di","profile":"Profil","sign_out":"Keluar","you_ve_been_signed_out":"Anda telah logout. Sampai jumpa kembali!","invitedcount":"JumlahTerundang","actions":"Tindakan","invites_left":"undangan tersisa","id":"ID","github":"GitHub","site":"Situs","submitted_posts":"Postingan","upvoted_posts":"Postingan yang Disundul","downvoted_posts":"Postingan yang Ditenggelamkan","pending":"Tertunda","loading":"Memuat...","submit":"Kirim","you_must_be_logged_in":"Anda sudah login","are_you_sure":"Apa kamu yakin?","please_log_in_first":"Silahkan login terlebih dahulu.","please_log_in_to_comment":"Silahkan login untuk berkomentar.","sign_in_sign_up_with_twitter":"Mendaftar/Login melalui Twitter","most_popular_posts":"Postingan paling populer saat ini.","newest_posts":"Postingan terbaru","highest_ranked_posts_ever":"Postingan terbaik sepanjang masa","the_profile_of":"Profil dari","posts_awaiting_moderation":"Postingan menunggu moderasi.","future_scheduled_posts":"Postingan terjadwal yang akan datang","users_dashboard":"Dasbor penguna","telescope_settings_panel":"Panel pengaturan Telescope","various_utilities":"Berbagai utilitas."});
TAPi18n._registerServerTranslator("id", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/it.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                 // 9
  TAPi18n.translations["it"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                      // 13
  TAPi18n.translations["it"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["it"][namespace], {"menu":"Menu","view":"Vista","top":"Top","new":"Nuovi","best":"Migliori","digest":"Selezione","users":"Utenti","settings":"Impostazioni","admin":"Amministrazione","post":"Post","toolbox":"Strumenti","sign_up_sign_in":"Registrati/Accedi","my_account":"Il Mio Account","view_profile":"Vedi Profilo","edit_account":"Modifica Account","view_your_profile":"Visualizza il tuo profilo","edit_your_profile":"Modifica il tuo profilo","you_are_already_logged_in":"Hai già eseguito l'accesso","sorry_this_is_a_private_site_please_sign_up_first":"Ci spiace, questo è un sito privato. Per favore registrati.","thanks_for_signing_up":"Grazie per esserti registrato!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Questo sito al momento è solo per chi è stato invitato, ma ti faremo sapere non appena ci sarà la possibilità di accedere.","sorry_you_dont_have_the_rights_to_view_this_page":"Ci spiace, non hai i permessi per visualizzare questa pagina.","sorry_you_do_not_have_the_rights_to_comments":"Ci spiace, non hai i permessi per lasciare commenti in questo momento.","not_found":"Non Trovato!","were_sorry_whatever_you_were_looking_for_isnt_here":"Ci spiace; qualsiasi cosa stessi cercando non è qua..","sorry_you_do_not_have_access_to_this_page":"Ci spiace, non hai accesso a questa pagina","please_sign_in_first":"Per favore esegui prima l'accesso.","sorry_you_have_to_be_an_admin_to_view_this_page":"Ci spiace, devi essere un amministratore per poter vedere questa pagina.","sorry_you_dont_have_permissions_to_add_new_items":"Ci spiace, non hai i permessi per aggiungere nuovi elementi.","sorry_you_cannot_edit_this_post":"Ci spiace, non puoi modificare questo post.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Devi accedere ed essere un amministratore per aggiungere una nuova categoria.","you_need_to_login_or_be_invited_to_post_new_comments":"Devi accedere od essere invitato per postare nuovi commenti.","please_wait":"Attendere prego","seconds_before_commenting_again":" secondi prima di poter fare un altro commento","your_comment_is_empty":"Il tuo commento è vuoto.","you_dont_have_permission_to_delete_this_comment":"Non hai i permessi per eliminare questo commento.","you_need_to_login_or_be_invited_to_post_new_stories":"Devi accedere o essere invitato per postare nuove storie.","read_more":"Leggi di più","your_account_has_been_approved":"Il tuo account è stato approvato.","welcome_to":"Benvenuto a ","profile":"Profilo","sign_out":"Esci","you_ve_been_signed_out":"Ti sei disconnesso. Torna presto!","invitedcount":"Numero Invitati","actions":"Azioni","invites_left":"iInviti rimasti","id":"ID","github":"GitHub","site":"Sito","submitted_posts":"Post Inviati","upvoted_posts":"Post Consigliati","downvoted_posts":"Post Sconsigliati","pending":"In attesa","loading":"Caricamento...","submit":"Invia","you_must_be_logged_in":"Devi effettuare l'accesso.","are_you_sure":"Sei sicuro?","please_log_in_first":"Per favore esegui prima l'accesso.","please_log_in_to_comment":"Per favore accedi per commentare.","sign_in_sign_up_with_twitter":"Accedi/Registrati con Twitter","most_popular_posts":"I post più popolari di questo momento.","newest_posts":"I post più recenti.","highest_ranked_posts_ever":"I post più in alto in classifica di tutti i tempi.","the_profile_of":"Il profilo di","posts_awaiting_moderation":"Messaggi in attesa di moderazione.","telescope_settings_panel":"Pannello Impostazioni di Telescope."});
TAPi18n._registerServerTranslator("it", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/ja.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                 // 9
  TAPi18n.translations["ja"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                      // 13
  TAPi18n.translations["ja"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                                            // 17
TAPi18n._registerServerTranslator("ja", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/kk.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                        // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                 // 9
  TAPi18n.translations["kk"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                      // 13
  TAPi18n.translations["kk"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["kk"][namespace], {"menu":"Мәзір","view":"Көрініс","top":"Жоғарғы","new":"Жаңа","best":"Үздік","digest":"Қорыту","users":"Пайдаланушылар","settings":"Баптаулар","admin":"Админ","post":"Жазба","toolbox":"Құралдар","sign_up_sign_in":"Тіркелу / Кіру","my_account":"Менің аккаунтым","view_profile":"Профилін көру","edit_account":"аккаунт түзету","you_are_already_logged_in":"сіз алдеқашан кіргенсіз","sorry_this_is_a_private_site_please_sign_up_first":"Кешіріңіз, бұл жеке сайт. Алдымен тіркеліңіз.","thanks_for_signing_up":" Тіркелгеніңіз үшін рахмет!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Сайтқа қазіргі уақытта тек шақырумен  қабылдаймыз, бірақ орын шықса сізге хабар береміз.","sorry_you_dont_have_the_rights_to_view_this_page":"Кешіріңіз, сіз осы бетті көру үшін құқығыңыз жоқ.","not_found":"Табылмады!","were_sorry_whatever_you_were_looking_for_isnt_here":" Кешіріңіз, іздегеніңіз мұнда жоқ.","sorry_you_do_not_have_access_to_this_page":" Кешіріңіз, осы бетке рұқсатыңыз жоқ.","please_sign_in_first":"Алдымен кіріңіз.","sorry_you_have_to_be_an_admin_to_view_this_page":"Кешіріңіз, сіз осы бетті көру үшін Admin болуы тиіс.","sorry_you_dont_have_permissions_to_add_new_items":"Кешіріңіз, сіз жаңа элементтерді қосу үшін рұқсаттарыңыз жоқ.","sorry_you_cannot_edit_this_post":"Кешіріңіз, сіз осы жазбаны өңдеу мүмкін емес.","pending":"күту"});
TAPi18n._registerServerTranslator("kk", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/ko.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                 // 9
  TAPi18n.translations["ko"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                      // 13
  TAPi18n.translations["ko"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["ko"][namespace], {"menu":"메뉴","view":"보기","top":"인기","new":"새글","best":"베스트","digest":"다이제스트","users":"유저","settings":"설정","admin":"관리자","post":"글쓰기","toolbox":"도구 상자","sign_up_sign_in":"가입/로그인","my_account":"내 계정","view_profile":"프로필보기","edit_account":"계정 편집","view_your_profile":"내 프로필 보기","edit_your_profile":"내 프로필 편집하기","you_are_already_logged_in":"이미 로그인되었습니다.","sorry_this_is_a_private_site_please_sign_up_first":"죄송합니다. 비공개 사이트입니다. 가입이 필요합니다.","thanks_for_signing_up":"가입해주셔서 감사합니다!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":" ","sorry_you_dont_have_the_rights_to_view_this_page":"이 페이지를 볼 수 있는 권한이 없습니다.","sorry_you_do_not_have_access_to_this_page":"이 페이지 접근 권한이 없습니다.","please_sign_in_first":"로그인하시기 바랍니다.","sorry_you_have_to_be_an_admin_to_view_this_page":"접근 권한이 필요합니다.","sorry_you_cannot_edit_this_post":"이 게시물을 편집 할 수 없습니다.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"새 카테고리 추가를 위해 로그인과 어드민 권한이 필요합니다.","you_need_to_login_or_be_invited_to_post_new_comments":"댓글을 달기 위해서 로그인 해주세요.","please_wait":"기다려 주세요.","seconds_before_commenting_again":"초동안 기다려주세요.","your_comment_is_empty":"댓글을 입력해주세요.","you_dont_have_permission_to_delete_this_comment":"이 댓글을 삭제 할 수있는 권한이 없습니다.","you_need_to_login_or_be_invited_to_post_new_stories":"새 게시물을 작성하기 위해 로그인 해주세요.","read_more":"더 읽기","your_account_has_been_approved":"계정이 승인되었습니다.","profile":"프로필","sign_out":"로그아웃","you_ve_been_signed_out":"로그아웃 하셨습니다. 곧 돌아와 주세요!","id":"ID","github":"깃허브(GitHub)","site":"사이트","submitted_posts":"작성 게시물","pending":"보류","loading":"로딩중","you_must_be_logged_in":"로그인이 필요합니다.","are_you_sure":"확실 합니까?","please_log_in_first":"먼저 로그인하시기 바랍니다.","please_log_in_to_comment":"댓글 작성을 위해 로그인해주세요.","sign_in_sign_up_with_twitter":"트위터로 가입/로그인","most_popular_posts":"지금 가장 인기있는 게시물.","newest_posts":"새 게시물","users_dashboard":"사용자 대시보드"});
TAPi18n._registerServerTranslator("ko", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/nl.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                 // 9
  TAPi18n.translations["nl"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                      // 13
  TAPi18n.translations["nl"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["nl"][namespace], {"menu":"Menu","view":"Weergave","top":"Top","new":"Nieuw","best":"Beste","digest":"Samenvatting","users":"Gebruikers","settings":"Instellingen","admin":"Beheerder","post":"Artikel","toolbox":"Toolbox","sign_up_sign_in":"Registreren/Login","my_account":"Mijn profiel","view_profile":"Profiel bekijken","edit_account":"Profiel bewerken","you_are_already_logged_in":"Je bent al ingelogd","sorry_this_is_a_private_site_please_sign_up_first":"Sorry, dit is een privé website. Eerst registreren alstublieft.","thanks_for_signing_up":"Bedankt voor het registreren!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"De website is op dit moment alleen op basis van uitnodiging, maar zodra er een plek vrij is hoor je het gelijk van ons.","sorry_you_dont_have_the_rights_to_view_this_page":"Sorry, je hebt geen rechten om deze pagina te bekijken.","sorry_you_do_not_have_the_rights_to_comments":"Sorry, op dit moment heb je rechten om te reageren.","not_found":"Niet gevonden!","were_sorry_whatever_you_were_looking_for_isnt_here":"Het spijt ons; we hebben niet kunnen vinden waar je naar op zoek was..","disallowed_property_detected":"Verboden toegang","sorry_you_do_not_have_access_to_this_page":"Sorry, je hebt geen toegang tot deze pagina","please_sign_in_first":"Log eerst in.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sorry, alleen beheerders kunnen deze pagina bekijken.","sorry_you_dont_have_permissions_to_add_new_items":"Sorry, je hebt geen rechten om toe te voegen.","sorry_you_cannot_edit_this_post":"Sorry, je kan dit artikel niet bewerken.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Je moet eerst inloggen en een beheerder zijn om een categorie aan te maken.","you_need_to_login_or_be_invited_to_post_new_comments":"Je moet eerst inloggen of uitgenodigd worden om een reactie te kunnen plaatsen.","please_wait":"Moment geduld ","seconds_before_commenting_again":" seconden voordat je opnieuw kunt reageren","your_comment_is_empty":"Je reactie is leeg.","you_dont_have_permission_to_delete_this_comment":"Je hebt geen rechten om deze reactie te verwijderen.","you_need_to_login_or_be_invited_to_post_new_stories":"Je moet eerst inloggen of uitgenoegd worden om artikelen te kunnen plaatsen.","read_more":"Verder lezen","your_account_has_been_approved":"Jouw account is goedgekeurd.","welcome_to":"Welkom bij ","profile":"Profiel","sign_out":"Uitloggen","you_ve_been_signed_out":"Je bent uitgelogd. Tot snel!","invitedcount":"Aantal uitgenodigd","actions":"Acties","invites_left":"uitnodigingen over","id":"ID","github":"GitHub","site":"Website","upvoted_posts":"Omhoog gestemd","downvoted_posts":"Omlaag gestemd","pending":"In behandeling","loading":"Laden...","submit":"Verzenden","you_must_be_logged_in":"Je moet ingelogd zijn.","are_you_sure":"Zeker weten?","please_log_in_first":"Log eerst in.","please_log_in_to_comment":"Log eerst in om een reactie te kunnen plaatsen.","sign_in_sign_up_with_twitter":"Registreer/Registreer met Twitter","most_popular_posts":"De meest populaire artikelen.","newest_posts":"De nieuwste artikelen.","highest_ranked_posts_ever":"Artikelen met de meeste stemmen.","the_profile_of":"Profiel van","posts_awaiting_moderation":"Artikelen die op goedkeuring wachten.","future_scheduled_posts":"Ingeplande artikelen.","users_dashboard":"Gebruikers dashboard.","telescope_settings_panel":"Telescope intellingen pagina.","various_utilities":"Verschillende voorzieningen."});
TAPi18n._registerServerTranslator("nl", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/pl.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                            // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                 // 9
  TAPi18n.translations["pl"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                      // 13
  TAPi18n.translations["pl"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["pl"][namespace], {"menu":"Menu","view":"Widok","top":"Na topie","new":"Najnowsze","best":"Najlepsze","digest":"Dzisiaj","users":"Użytkownicy","settings":"Ustawienia","admin":"Admin","post":"Nowy temat","toolbox":"Narzędzia","sign_up_sign_in":"Zarejestruj/Zaloguj","my_account":"Moje konto","view_profile":"Profil","edit_account":"Edytuj konto","you_are_already_logged_in":"Jesteś już zalogowany","sorry_this_is_a_private_site_please_sign_up_first":"Musisz się najpierw zarejestrować.","thanks_for_signing_up":"Dzięki za rejestrację!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Tą stronę mogą oglądać jedynie zaproszone osoby","sorry_you_dont_have_the_rights_to_view_this_page":"Niestety nie masz odpowiednich praw dostępu żeby widzieć tą stronę.","sorry_you_do_not_have_the_rights_to_comments":"Niestety nie masz odpowiednich praw dostępu żeby móc dodawać komentarze.","not_found":"Nie znaleziono!","were_sorry_whatever_you_were_looking_for_isnt_here":"Niestety nie ma tutaj tego czego szukałeś...","sorry_you_do_not_have_access_to_this_page":"Przepraszamy, nie masz dostępu.","please_sign_in_first":"Zaloguj się.","sorry_you_have_to_be_an_admin_to_view_this_page":"Musisz być adminem żeby to zobaczyć.","sorry_you_dont_have_permissions_to_add_new_items":"Nie masz uprawnień do dodawania.","sorry_you_cannot_edit_this_post":"Nie możesz edytować tego postu.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Musisz się zalogować jako admin aby móc dodawać nowe kategorie.","you_need_to_login_or_be_invited_to_post_new_comments":"Musisz być zalogowany lub zaproszony aby dodawaćc nowe komentarze.","please_wait":"Proszę czekać ","seconds_before_commenting_again":" sekund zanim znowu będziesz móc komentować","your_comment_is_empty":"Twój komentarz jest pusty.","you_dont_have_permission_to_delete_this_comment":"Nie możesz usunąć tego komentarza.","you_need_to_login_or_be_invited_to_post_new_stories":"Musisz być zalogowany lub zaproszony aby dodawać nowe posty.","read_more":"Czytaj dalej","your_account_has_been_approved":"Twoje konto zostało zaakceptowane.","welcome_to":"Witaj na ","profile":"Profil","sign_out":"Wyloguj się","you_ve_been_signed_out":"Zostałeś prawidłowo wylogowany!","invitedcount":"Liczba zaproszeń","actions":"Akcje","invites_left":"zaproszeń pozostało","id":"ID","github":"GitHub","site":"Strona WWW","upvoted_posts":"Głosy pozytywne","downvoted_posts":"Głosy negatywne","pending":"Oczekuje","loading":"Ładowanie...","submit":"Wyślij","you_must_be_logged_in":"Musisz być zalogowany.","are_you_sure":"Jesteś pewny?","please_log_in_first":"Najpierw się zaloguj.","please_log_in_to_comment":"Aby komentować musisz być zalogowany.","sign_in_sign_up_with_twitter":"Zarejestruj/Zaloguj się przez Twitter","most_popular_posts":"Aktualnie najpopularniejsze posty.","newest_posts":"Najnowsze posty.","highest_ranked_posts_ever":"Najwyżej oceniane posty wszechczasów.","the_profile_of":"Profil","posts_awaiting_moderation":"Posty czekające na moderację.","future_scheduled_posts":"Posty na przyszłość.","users_dashboard":"Pulpit użytkowników.","telescope_settings_panel":"Ustawienia.","various_utilities":"Narzędzia."});
TAPi18n._registerServerTranslator("pl", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/pt-BR.i18n.js                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                               // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                              // 9
  TAPi18n.translations["pt-BR"] = {};                                                                           // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                   // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {"menu":"Menu","view":"Visão","top":"Topo","new":"Novo","best":"Melhor","digest":"Resumo","users":"Usuários","settings":"Configurações","admin":"Admin","post":"Postar","toolbox":"Toolbox","sign_up_sign_in":"Registrar/Entrar","my_account":"Minha Conta","view_profile":"Ver Perfil","edit_account":"Editar Conta","you_are_already_logged_in":"Você já está logado","sorry_this_is_a_private_site_please_sign_up_first":"Desculpe, mas este é um site privado. Registre-se primeiro.","thanks_for_signing_up":"Obrigado por se registrar!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"O site está atualmente apenas para convidados, mas nós iremos avisá-lo assim que abrirmos ao público geral.","sorry_you_dont_have_the_rights_to_view_this_page":"Desculpe, você não pode ver esta página.","sorry_you_do_not_have_the_rights_to_comments":"Desculpe, você não pode comentar neste momento.","not_found":"Não Encontrado!","were_sorry_whatever_you_were_looking_for_isnt_here":"Nos desculpe; o que estava procurando não se encontra aqui...","disallowed_property_detected":"Propriedade não permitida detectada","sorry_you_do_not_have_access_to_this_page":"Desculpe, você não possui acesso a esta página","please_sign_in_first":"Por favor, entre com sua conta primeiro.","sorry_you_have_to_be_an_admin_to_view_this_page":"Desculpe, você precisa ser admin para ver esta página.","sorry_you_dont_have_permissions_to_add_new_items":"Desculpe, você não possui permissão para adicionar novos itens.","sorry_you_cannot_edit_this_post":"Desculpe, você não pode estar esta postagem.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Você precisa se logar e ser um admin para adicionar uma nova categoria.","you_need_to_login_or_be_invited_to_post_new_comments":"Você precisa se logar ou ser convidado para postar novos comentários.","please_wait":"Por favor aguarde ","seconds_before_commenting_again":" segundos antes de comentar novamente","your_comment_is_empty":"Seu comentário está vazio.","you_dont_have_permission_to_delete_this_comment":"Você não possui permissão para deletar este comentário.","you_need_to_login_or_be_invited_to_post_new_stories":"Você precisa se logar ou ser convidado para novas postagens.","read_more":"Ler mais","your_account_has_been_approved":"Sua conta foi aprovada.","welcome_to":"Bem vindo para ","profile":"Perfil","sign_out":"Sair","you_ve_been_signed_out":"Você saiu com sucesso. Volte logo!","invitedcount":"ContagemConvites","actions":"Ações","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Postagens votadas","downvoted_posts":"Postagens contra","pending":"Pendente","loading":"Carregando...","submit":"Submeter","you_must_be_logged_in":"Você deve estar logado.","are_you_sure":"Você está certo?","please_log_in_first":"Por favor, entre primeiro.","please_log_in_to_comment":"Por favor entre para comentário.","sign_in_sign_up_with_twitter":"Registrar/Entrar com Twitter","most_popular_posts":"As postagens mais populares neste momento.","newest_posts":"As postagens mais novas.","highest_ranked_posts_ever":"As melhores postagens de todos os tempos.","the_profile_of":"O perfil de","posts_awaiting_moderation":"Postagens aguardando moderação.","future_scheduled_posts":"Postagens agendadas para o futuro.","users_dashboard":"Painel dos usuários.","telescope_settings_panel":"Painel de Configurações do Telescope.","various_utilities":"Várias utilidades."});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                          // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/ro.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                 // 9
  TAPi18n.translations["ro"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                      // 13
  TAPi18n.translations["ro"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["ro"][namespace], {"menu":"Meniu","top":"Top Știri","new":"Noutăți","digest":"Rezumat","scheduled":"Programat","users":"Utilizatori","settings":"Setări","admin":"Admin","post":"Postează","toolbox":"Trusa de scule","sign_up_sign_in":"Înregistrare/Autentificare","my_account":"Contul meu","view_profile":"Afișează profil","edit_account":"Modifica profil","view_your_profile":"Vizualizați profilul","edit_your_profile":"Editează profilul","you_are_already_logged_in":"Sunteți deja logat.","sorry_this_is_a_private_site_please_sign_up_first":"Ne cerem scuze, acesta este un site care necesită înscriere.","thanks_for_signing_up":"Mulțumim pentru înregistrare!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Momentan nu acceptăm decât înscrieri pe bază de invitație, dar vă vom anunța de îndată ce avem un loc disponibil!","sorry_you_dont_have_the_rights_to_view_this_page":"Ne cerem scuze, însă nu aveți drepturi de a accesa această pagină.","sorry_you_do_not_have_the_rights_to_comments":"Ne cerem scuze, nu  aveți încă drepturile necesare pentru a posta un comentariu.","not_found":"Inexistent!","were_sorry_whatever_you_were_looking_for_isnt_here":"Ne pare rău, dar ceea ce ați căutat nu pare a fi disponibil.","sorry_you_do_not_have_access_to_this_page":"Ne pare rău, dar nu ai acces la acestă pagină","please_sign_in_first":"Este nevoie să te autentifici.","sorry_you_have_to_be_an_admin_to_view_this_page":"Ne pare rău, trebuie să ai drepturi de administrare pentru a accesa această pagină.","sorry_you_dont_have_permissions_to_add_new_items":"Ne pare rău, nu ai drepturi de a adăuga înregistrări.","sorry_you_cannot_edit_this_post":"Ne pare rău, nu poți edita această postare.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Trebuie să fi autentificat și să ai drepturi de administrare pentru a adăuga noi categorii.","you_need_to_login_or_be_invited_to_post_new_comments":"Trebuie să fi autentificat și să ai drepturi de administrare pentru a adăuga comentarii.","please_wait":"Te rugăm să aștepți ","seconds_before_commenting_again":" Secunde, până vei putea adăuga comentarii.","your_comment_is_empty":"Comentariul nu conține nici un text.","you_dont_have_permission_to_delete_this_comment":"Nu ai drepturi de a șterge acest comentariu.","you_need_to_login_or_be_invited_to_post_new_stories":"Trebuie să fi autentificat sau invitat pentru a putea posta.","read_more":"mai mult","your_account_has_been_approved":"Profilul tău a fost activat.","welcome_to":"Bine ai venit ","profile":"Profil","sign_out":"De-logare","you_ve_been_signed_out":"Ai fost deconectat. Te așteptăm să revi cât de curând!","invitedcount":"Număr de invitați","actions":"Actiuni","invites_left":"invitații rămase","id":"ID","github":"GitHub","site":"Site","upvoted_posts":"Postări promvate","downvoted_posts":"Postări în trend","pending":"în așteptare","loading":"se încarcă...","submit":"Trimite","you_must_be_logged_in":"Trebuie să fi autentificat.","are_you_sure":"Ești sigur?","please_log_in_first":"Te rugăm să te autentifici mai întâi","please_log_in_to_comment":"Te rugăm să te autentifici pentru a comenta.","sign_in_sign_up_with_twitter":"Autentificare/Înregistrare cu Twitter","most_popular_posts":"Cele mai populare postări la acest moment.","newest_posts":"Cele mai noi postări.","highest_ranked_posts_ever":"Cele mai populare postări.","the_profile_of":"P","posts_awaiting_moderation":"Postări ce necesită verificare.","future_scheduled_posts":"Viitoare postări programate.","users_dashboard":"Tablou de bord utilizatori.","telescope_settings_panel":"Panou setari Telescope.","various_utilities":"Diverse utilitare."});
TAPi18n._registerServerTranslator("ro", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/ru.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                 // 9
  TAPi18n.translations["ru"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                      // 13
  TAPi18n.translations["ru"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["ru"][namespace], {"menu":"Меню","view":"Вид","top":"Топ","new":"Новое","best":"Лучшее","digest":"Дайджест","users":"Пользователи","settings":"Настройки","admin":"Админ","post":"Пост","toolbox":"Инструменты","sign_up_sign_in":"Вход/Регистрация","my_account":"Мой аккаунт","view_profile":"Просмотр профиля","edit_account":"Редактирование аккаунта","you_are_already_logged_in":"Вы уже вошли","sorry_this_is_a_private_site_please_sign_up_first":"Извините, это частный сайт. Вначале зарегистрируйтесь.","thanks_for_signing_up":"Thanks for signing up!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Сайт пока что только по инвайтам, но мы вам сообщим, если будет открыта регистрация.","sorry_you_dont_have_the_rights_to_view_this_page":"Извините, но у вас нет прав для просмотра страницы.","not_found":"Not Found!","were_sorry_whatever_you_were_looking_for_isnt_here":"Извините, но что бы вы не искали, этого тут нет..","sorry_you_do_not_have_access_to_this_page":"Извините, у вас нет доступа к этой странице","please_sign_in_first":"Вначале войдите.","sorry_you_have_to_be_an_admin_to_view_this_page":"Извините, вы должны быть админом для просмотра этой страницы.","sorry_you_dont_have_permissions_to_add_new_items":"Извините, у вас нет прав для добавления новых элементов.","sorry_you_cannot_edit_this_post":"Извините, вы не можете редактировать этот пост.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Вам нужно войти и быть админом для создания новой категории.","you_need_to_login_or_be_invited_to_post_new_comments":"Вам нужно войти или быть приглашённым для комментирования.","please_wait":"Пожалуйста подождите ","seconds_before_commenting_again":" секунд перед новым комментарием","your_comment_is_empty":"Ваш комментарий пуст.","you_dont_have_permission_to_delete_this_comment":"У вас нет прав для удаления этого комментария.","you_need_to_login_or_be_invited_to_post_new_stories":"Вам нужно войти или быть приглашённым, чтобы публиковать новые истории.","read_more":"Подробнее","your_account_has_been_approved":"Ваш аккаунт утвердили.","welcome_to":"Добро пожаловать ","profile":"Профиль","sign_out":"Выйти","you_ve_been_signed_out":"Вы вышли. Возвращайтесь снова!","invitedcount":"Подсчёт инвайтов","actions":"Действия","invites_left":"осталось инвайтов","id":"ИД","github":"GitHub","site":"Сайт","upvoted_posts":"Постов За","downvoted_posts":"Постов Против","pending":"Ожидает","loading":"Загружается...","submit":"Отправить","you_must_be_logged_in":"Вы должны залогиниться.","are_you_sure":"Уверены?","please_log_in_first":"Войдите вначале","sign_in_sign_up_with_twitter":"Войти/зарегистрироваться с помощью Twitter"});
TAPi18n._registerServerTranslator("ru", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/sl.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                 // 9
  TAPi18n.translations["sl"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                      // 13
  TAPi18n.translations["sl"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["sl"][namespace], {"menu":"Meni","view":"Pogled","top":"Top","new":"Novo","best":"Najboljše","digest":"Izbor","scheduled":"Načrtovano","users":"Uporabniki","settings":"Nastavitve","admin":"Skrbnik","post":"Objavi","toolbox":"Orodjarna","sign_up_sign_in":"Registracija / Prijava","my_account":"Moj Račun","view_profile":"Ogled profila","edit_account":"Uredi račun","view_your_profile":"Oglejte si svoj profil","edit_your_profile":"Uredite svoj profil","you_are_already_logged_in":"Ste že prijavljeni","sorry_this_is_a_private_site_please_sign_up_first":"Žal, to je zasebna stran. Prosimo, najprej se registrirajte.","thanks_for_signing_up":"Hvala za registracijo!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Stran je trenutno dosegljiva samo s povabilom. Obvestili vas bomo takoj, ko se sprosti kakšno mesto. ","sorry_you_dont_have_the_rights_to_view_this_page":"Oprostite, nimate pravic za ogled te strani.","sorry_you_do_not_have_the_rights_to_comments":"Oprostite, trenutno nimate pravic za komentiranje.","not_found":"Ni najdeno!","were_sorry_whatever_you_were_looking_for_isnt_here":"Žal nam je; tega, kar ste iskali, ni tukaj..","disallowed_property_detected":"Odkrita nedovoljena lastnost","sorry_you_do_not_have_access_to_this_page":"Oprostite, nimate pravic za ogled te strani.","please_sign_in_first":"Prosimo, najprej se prijavite.","sorry_you_have_to_be_an_admin_to_view_this_page":"Žal, za ogled te strani morate biti skrbnik.","sorry_you_dont_have_permissions_to_add_new_items":"Žal nimate dovoljenja za dodajanje novih postavk.","sorry_you_cannot_edit_this_post":"Žal, ne morete urejati te objave.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Morate se prijaviti in biti skrbnik za dodajanje nove kategorije.","you_need_to_login_or_be_invited_to_post_new_comments":"Morate se prijaviti ali imeti vabilo za objavo novih komentarjev.","please_wait":"Prosimo počakajte","seconds_before_commenting_again":"sekund pred ponovnim komentiranjem","your_comment_is_empty":"Vaš komentar je prazen.","you_dont_have_permission_to_delete_this_comment":"Nimate dovoljenja za brisanje tega komentarja.","you_need_to_login_or_be_invited_to_post_new_stories":"Morate se prijaviti ali imeti vabilo za objavo novih zgodb.","read_more":"Preberi več","your_account_has_been_approved":"Vaš račun je bil odobren.","welcome_to":"Dobrodošli v","profile":"Profil","sign_out":"Odjava","you_ve_been_signed_out":"Bili ste odjavljeni. Vrnite se kmalu!","invitedcount":"ŠteviloPovabljenih","actions":"Dejanja","invites_left":"povabil na voljo","id":"ID","github":"GitHub","site":"Stran","submitted_posts":"Objavljeno","upvoted_posts":"Izglasovane Objave","downvoted_posts":"Neizglasovane Objave","pending":"Čaka","loading":"Nalaganje ...","submit":"Potrdi","you_must_be_logged_in":"Morate biti prijavljeni.","are_you_sure":"Ali ste prepričani?","please_log_in_first":"Prosimo, najprej se prijavite.","please_log_in_to_comment":"Prosimo, prijavite se za komentiranje.","sign_in_sign_up_with_twitter":"Registracija / Prijava s Twitterjem","most_popular_posts":"Najbolj priljubljene objave trenutno.","newest_posts":"Najnovejše objave.","highest_ranked_posts_ever":"Najvišje uvrščene objave vseh časov.","the_profile_of":"Profil","posts_awaiting_moderation":"Prispevkov čaka potrditev.","future_scheduled_posts":"Prihodnje načrtovane objave.","users_dashboard":"Nadzorna plošča uporabnika.","telescope_settings_panel":"Telescope plošča z nastavitvami.","various_utilities":"Razni pripomočki."});
TAPi18n._registerServerTranslator("sl", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/sv.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                 // 9
  TAPi18n.translations["sv"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                      // 13
  TAPi18n.translations["sv"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["sv"][namespace], {"menu":"Meny","view":"Vy","top":"Topp","new":"Ny","best":"Bäst","digest":"Sammanställt","scheduled":"Planerad","users":"Användare","settings":"Inställningar","admin":"Admin","post":"Nytt inlägg\n","toolbox":"Verktygslåda","sign_up_sign_in":"Skapa konto/Logga in","my_account":"Min Profil","view_profile":"Se Profil","edit_account":"Ändra Konto","view_your_profile":"Se Profil","edit_your_profile":"Redigera din profil","you_are_already_logged_in":"Du är redan inloggad","sorry_this_is_a_private_site_please_sign_up_first":"Tyvärr, detta är en privat sida. Vänligen bli medlem.","thanks_for_signing_up":"Tack för att du blev medlem!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Denna sida är för tillfället endast tillgänglig för inbjudna, vi talar om så fort vi får plats.","sorry_you_dont_have_the_rights_to_view_this_page":"Du har inte rättigheter att se denna sida.","sorry_you_do_not_have_the_rights_to_comments":"Tyvärr har du inte rättigheter att lämna kommentarer.","not_found":"Hittades Inte!","were_sorry_whatever_you_were_looking_for_isnt_here":"Ursäkta, vad du letar efter verkar inte finnas här...","disallowed_property_detected":"Ogiltigt fält upptäckt","sorry_you_do_not_have_access_to_this_page":"Tyvärr, du har inte tillgång till denna sida","please_sign_in_first":"Vänligen logga in först.","sorry_you_have_to_be_an_admin_to_view_this_page":"Tyvärr måste du vara adminstratör för att se denna sida.","sorry_you_dont_have_permissions_to_add_new_items":"Tyvärr har du inte rättigheter att lägga till saker.","sorry_you_cannot_edit_this_post":"Tyvärr, du kan inte redigera detta inlägg.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Du måste vara inloggad som administratör för att lägga till nya kategorier.","you_need_to_login_or_be_invited_to_post_new_comments":"Du måste logga in eller vara inbjuden för att kommentera.","please_wait":"Vänligen vänta ","seconds_before_commenting_again":" sekunder innan du kommenterar igen.","your_comment_is_empty":"Din kommentar är tom.","you_dont_have_permission_to_delete_this_comment":"Du har inte tillåtelse att ta bort denna kommentar.","you_need_to_login_or_be_invited_to_post_new_stories":"Du måste logga in eller vara inbjuden för att skriva nya inlägg.","read_more":"Läs mer","your_account_has_been_approved":"Ditt konto har blivit godkänt.","welcome_to":"Välkommen till ","profile":"Profil","sign_out":"Logga ut","you_ve_been_signed_out":"Du har loggat ut. Välkommen åter!","invitedcount":"Inbjudningar","actions":"Aktiviteter","invites_left":"Inbjudningar kvar","id":"ID","github":"GitHub","site":"Hemsida","submitted_posts":"Skapade inlägg","upvoted_posts":"Uppröstade Inlägg","downvoted_posts":"Nedröstade Inlägg","pending":"Väntar","loading":"Laddar...","submit":"Skicka","you_must_be_logged_in":"Du måste vara inloggad.","are_you_sure":"Är du säker?","please_log_in_first":"Vänligen logga in först.","please_log_in_to_comment":"Vänligen logga in för att kommentera.","sign_in_sign_up_with_twitter":"Logga in eller bli medlem med Twitter","most_popular_posts":"De mest populära inläggen just nu.","newest_posts":"De senaste inläggen.","highest_ranked_posts_ever":"De högst rankade inläggen någonsin.","the_profile_of":"Profilen tillhörande","posts_awaiting_moderation":"Inlägg väntar på moderering.","future_scheduled_posts":"Framtida planerade inlägg.","users_dashboard":"Användarnas inställningspanel.","telescope_settings_panel":"Telescopes inställningspanel.","various_utilities":"Olika verktyg."});
TAPi18n._registerServerTranslator("sv", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/th.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                 // 9
  TAPi18n.translations["th"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                      // 13
  TAPi18n.translations["th"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["th"][namespace], {"menu":"เมนู","please_wait":"กรุณารอสักครู่","seconds_before_commenting_again":" วินาทีจนกว่าจะแสดงความเห็นอีกครั้ง","read_more":"อ่านเพิ่มเติม"});
TAPi18n._registerServerTranslator("th", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/tr.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                 // 9
  TAPi18n.translations["tr"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                      // 13
  TAPi18n.translations["tr"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["tr"][namespace], {"menu":"Menü","view":"Görünüm","top":"En Yukarı","new":"Yeni","best":"En İyiler","digest":"Toplu","scheduled":"Planlanmış","users":"Kullanıcılar","settings":"Ayarlar","admin":"Admin?","post":"Paylaş","toolbox":"Araç Kutusu","sign_up_sign_in":"Kayıt Ol/Giriş Yap","my_account":"Hesabım","view_profile":"Profili gör","edit_account":"Hesabı Ayarla","view_your_profile":"Profilinizi görüntüleyin","edit_your_profile":"Profilinizi düzenleyin","you_are_already_logged_in":"Zaten giriş yapmış durumdasınız","sorry_this_is_a_private_site_please_sign_up_first":"Maalesef, bu özel bir sitedir. İlk önce kayıt olun.","thanks_for_signing_up":"Kayıt olduğunuz için teşekkür ederiz!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Bu site sadece davetliler için ama bir yer açılınca size haber vereceğiz","sorry_you_dont_have_the_rights_to_view_this_page":"Özür dileriz, bu sayfaya erişiminiz yok","sorry_you_do_not_have_the_rights_to_comments":"Üzgünüz, şu anda yorum yapma hakkına sahip değilsiniz.","not_found":"Bulunamadı!","were_sorry_whatever_you_were_looking_for_isnt_here":"Üzgünüz ama aradığınız şey burada yok. ","disallowed_property_detected":"İzin verilmeyen bir hareket algılandı","sorry_you_do_not_have_access_to_this_page":"Özür dileriz, bu sayfaya erişim izniniz yok","please_sign_in_first":"Lütfen önce giriş yapın","sorry_you_have_to_be_an_admin_to_view_this_page":"Üzgünüz, bu sayfayı sadece yöneticiler görüntüleyebilir.","sorry_you_dont_have_permissions_to_add_new_items":"Üzgünüm, yeni bir şeyler eklemeye yetkiniz yok","sorry_you_cannot_edit_this_post":"Maalesef, bu yazıyı düzenleyemezsiniz.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Yeni kategori eklemek için admin olarak giriş yapmanız lazım.","you_need_to_login_or_be_invited_to_post_new_comments":"Yorum yapmak için giriş yapmanız veya davet edilmeniz lazım.","please_wait":"Lütfen bekleyin ","seconds_before_commenting_again":" saniye daha beklemeniz lazım ki tekrardan yorum yapabilesiniz. ","your_comment_is_empty":"Yorumunuz boş.","you_dont_have_permission_to_delete_this_comment":"Bu yorumu silmek için izniniz yok.","you_need_to_login_or_be_invited_to_post_new_stories":"Paylaşım yapmak için giriş yapmanız ya da davet edilmiş olmanız lazım.","read_more":"Daha fazla oku","your_account_has_been_approved":"Hesabınız onaylandı","welcome_to":"Hoşgeldiniz ","profile":"Profil","sign_out":"Çıkış Yap","you_ve_been_signed_out":"Çıkış yaptınız ! En kısa zamanda sizi tekrardan bekliyoruz!","invitedcount":"Davetiye Sayısı","actions":"Yapılanlar","invites_left":"davetiye kaldı","id":"ID","github":"GitHub","site":"Site","submitted_posts":"Gönderiler ","upvoted_posts":"Yukarı oy alan paylaşımlar","downvoted_posts":"Aşağı oy alan paylaşımlar","pending":"Onay bekliyor","loading":"Yüklüyor","submit":"Gönder","you_must_be_logged_in":"Giriş yapmanız lazım","are_you_sure":"Emin misiniz?","please_log_in_first":"Lütfen önce giriş yapın","please_log_in_to_comment":"Yorumlamak için giriş yapınız.","sign_in_sign_up_with_twitter":"Twitter ile kayıt ol/giriş yap","users_dashboard":"Kullanıcı Paneli","telescope_settings_panel":"Telescope Ayar Paneli","various_utilities":"Çeşitli programlar."});
TAPi18n._registerServerTranslator("tr", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/vi.i18n.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                 // 9
  TAPi18n.translations["vi"] = {};                                                                              // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                      // 13
  TAPi18n.translations["vi"][namespace] = {};                                                                   // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["vi"][namespace], {"menu":"Danh mục","view":"Xem","top":"Top","new":"New","best":"Best","digest":"Digest","users":"Người dùng","settings":"Settings","admin":"Admin","post":"Bài","toolbox":"Toolbox","sign_up_sign_in":"Đăng ký/Đăng nhập","my_account":"Tài khoản","view_profile":"Xem hồ sơ","edit_account":"Chỉnh sửa","you_are_already_logged_in":"Bạn đã đăng nhập","sorry_this_is_a_private_site_please_sign_up_first":"Xin lỗi, bạn cần đăng ký để xem thông tin.","thanks_for_signing_up":"Cám ơn bạn đã đăng ký!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"Trang này hiện chỉ dùng cho những người được mời, chúng tôi sẽ cho bạn biết khi sẵn sàng.","sorry_you_dont_have_the_rights_to_view_this_page":"Xin lỗi, bạn không có quyền để xem trang này.","sorry_you_do_not_have_the_rights_to_comments":"Xin lỗi, hiện tại bạn không có quyền để đăng ý kiến.","not_found":"Không tìm thấy!","were_sorry_whatever_you_were_looking_for_isnt_here":"Chúng tôi xin lỗi vì không có thông tin bạn đang tìm kiếm...","sorry_you_do_not_have_access_to_this_page":"Xin lỗi, bạn không có quyền truy cập vào trang này","please_sign_in_first":"Xin đăng nhập trước.","sorry_you_have_to_be_an_admin_to_view_this_page":"Xin lỗi, bản phải có quyền Admin để xem trang này.","sorry_you_dont_have_permissions_to_add_new_items":"Xin lỗi, bạn không có quyền thêm.","sorry_you_cannot_edit_this_post":"Xin lỗi, bạn không thể sửa bài này.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"Bạn phải đăng nhập và là Admin để tạo thẻ.","you_need_to_login_or_be_invited_to_post_new_comments":"Bạn phải đăng nhập và được mời để đăng ý kiến.","please_wait":"Làm ơn đợi ","seconds_before_commenting_again":" một vài giây để đăng ý kiến tiếp","your_comment_is_empty":"Xin nhập ý kiến.","you_dont_have_permission_to_delete_this_comment":"Bạn không có quyền để xóa ý kiến này.","you_need_to_login_or_be_invited_to_post_new_stories":"Bạn phải đăng nhập và được mời để đăng bài mới.","read_more":"Xem tiếp","your_account_has_been_approved":"Tài khoản của bạn đã được đồng ý.","welcome_to":"Xin chào ","profile":"Hồ sơ","sign_out":"Đăng xuất","you_ve_been_signed_out":"Bạn đã đăng xuất, hẹn sớm gặp lại","invitedcount":"đếmMoi","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"website","upvoted_posts":"Thích bài","downvoted_posts":"Không thích bài","pending":"Pending","loading":"Tải...","submit":"Gửi","you_must_be_logged_in":"Bạn phải đăng nhập.","are_you_sure":"Bạn có chắn?","please_log_in_first":"Xin đăng nhập trước.","please_log_in_to_comment":"Đăng nhập để bình luận","sign_in_sign_up_with_twitter":"Đăng ký/Đăng nhập với Twitter","most_popular_posts":"Những bài được xem nhiều nhất","newest_posts":"Những bài mới nhất.","highest_ranked_posts_ever":"Những bài được thích nhất.","the_profile_of":"Hồ sơ của","posts_awaiting_moderation":"Bài đang đợi để sửa","future_scheduled_posts":"Bài đăng theo lịch","users_dashboard":"Bảng người dùng.","telescope_settings_panel":"Bản thiết lập Telescope.","various_utilities":"Một số tiện ích."});
TAPi18n._registerServerTranslator("vi", namespace);                                                             // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/telescope_core/packages/telescope_corei18n/zh-CN.i18n.js                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _ = Package.underscore._,                                                                                   // 1
    package_name = "project",                                                                                   // 2
    namespace = "project";                                                                                      // 3
                                                                                                                // 4
if (package_name != "project") {                                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                       // 6
}                                                                                                               // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                                  // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                              // 9
  TAPi18n.translations["zh-CN"] = {};                                                                           // 10
}                                                                                                               // 11
                                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                   // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                // 14
}                                                                                                               // 15
                                                                                                                // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {"menu":"菜单","view":"视图","top":"置顶","new":"最新","best":"精华","digest":"摘要","users":"用户","settings":"设置","admin":"管理","post":"提交","toolbox":"工具箱","sign_up_sign_in":"注册/登录","my_account":"帐号","view_profile":"个人资料","edit_account":"编辑帐号","you_are_already_logged_in":"你已经登录","sorry_this_is_a_private_site_please_sign_up_first":"对不起, 请先注册再进行后续操作","thanks_for_signing_up":"感谢您的注册!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"该站点暂时只允许邀请访问, 如果开放了我们会让你知道","sorry_you_dont_have_the_rights_to_view_this_page":"抱歉你没有权利查看此页面","not_found":"页面不存在","were_sorry_whatever_you_were_looking_for_isnt_here":"抱歉没有你要查看的内容!","sorry_you_do_not_have_access_to_this_page":"抱歉你没有权限访问此页面","please_sign_in_first":"请先登录.","sorry_you_have_to_be_an_admin_to_view_this_page":"抱歉你必须是管理员才能查看此页面","sorry_you_dont_have_permissions_to_add_new_items":"抱歉你没有权限添加新项.","sorry_you_cannot_edit_this_post":"对不起你不能编辑这个帖子","you_need_to_login_and_be_an_admin_to_add_a_new_category":"你必须登录并且是管理员才能添加新类别.","you_need_to_login_or_be_invited_to_post_new_comments":"你需要登录或被邀请才能发表新的评论.","please_wait":"请稍等 ","seconds_before_commenting_again":" 秒后在评论","your_comment_is_empty":"你的评论是空的.","you_dont_have_permission_to_delete_this_comment":"你没有删除此评论的权限.","you_need_to_login_or_be_invited_to_post_new_stories":"你需要登录或被邀请才能发布新的内容.","read_more":"查看更多","your_account_has_been_approved":"你的帐号已被批准","welcome_to":"欢迎来到 ","profile":"个人中心","sign_out":"登出","invitedcount":"邀请总数","actions":"操作","id":"ID","github":"GitHub","site":"网址","upvoted_posts":"最多踩","pending":"悬而未决...","loading":"加载中...","submit":"提交","you_must_be_logged_in":"你必须登录.","are_you_sure":"是否确定?","please_log_in_first":"请先登录","sign_in_sign_up_with_twitter":"使用微博等/注册"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                          // 18
                                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:core'] = {};

})();

//# sourceMappingURL=telescope_core.js.map
