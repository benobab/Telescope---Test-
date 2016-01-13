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
var translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/modules.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// array containing nav items;                                                                                         //
                                                                                                                       //
Telescope.modules.add("secondaryNav", [{                                                                               // 3
  template: "submit_button",                                                                                           // 5
  order: 30                                                                                                            // 6
}]);                                                                                                                   //
                                                                                                                       //
Telescope.modules.add("mobileNav", [{                                                                                  // 10
  template: "submit_button",                                                                                           // 12
  order: 30                                                                                                            // 13
}]);                                                                                                                   //
                                                                                                                       //
Telescope.modules.add("footer", [{                                                                                     // 17
  template: "footer_code",                                                                                             // 19
  order: 10                                                                                                            // 20
}]);                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/vote.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
// getVotePower returns how much "power" a user's votes have                                                           //
// It is can be set in a package, by setting getVotePower to a Number or Function then re-exporting                    //
// The default is found in base.js in the base package, and returns 1.                                                 //
                                                                                                                       //
var modifyKarma = function (userId, karma) {                                                                           // 6
  Meteor.users.update({ _id: userId }, { $inc: { "telescope.karma": karma } });                                        // 7
};                                                                                                                     //
                                                                                                                       //
var hasUpvotedItem = function (item, user) {                                                                           // 10
  return item.upvoters && item.upvoters.indexOf(user._id) !== -1;                                                      // 11
};                                                                                                                     //
                                                                                                                       //
var hasDownvotedItem = function (item, user) {                                                                         // 14
  return item.downvoters && item.downvoters.indexOf(user._id) !== -1;                                                  // 15
};                                                                                                                     //
                                                                                                                       //
var addVote = function (userId, vote, collection, upOrDown) {                                                          // 18
  var field = 'telescope.' + upOrDown + 'voted' + collection;                                                          // 19
  var add = {};                                                                                                        // 20
  add[field] = vote;                                                                                                   // 21
  Meteor.users.update({ _id: userId }, {                                                                               // 22
    $addToSet: add                                                                                                     // 23
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
var removeVote = function (userId, itemId, collection, upOrDown) {                                                     // 27
  var field = 'telescope.' + upOrDown + 'voted' + collection;                                                          // 28
  var remove = {};                                                                                                     // 29
  remove[field] = { itemId: itemId };                                                                                  // 30
  Meteor.users.update({ _id: userId }, {                                                                               // 31
    $pull: remove                                                                                                      // 32
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
Telescope.upvoteItem = function (collection, itemId, user) {                                                           // 36
                                                                                                                       //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                           // 38
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                         // 39
  var item = collection.findOne(itemId);                                                                               // 40
                                                                                                                       //
  // make sure user has rights to upvote first                                                                         //
  if (!user || !Users.can.vote(user, true) || hasUpvotedItem(item, user)) return false;                                // 43
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all upvote callbacks on item successively                                                                     //
                                                                                                                       //
  item = Telescope.callbacks.run("upvote", item, user);                                                                // 50
                                                                                                                       //
  // ----------------------------------------------------------------------- //                                        //
                                                                                                                       //
  var votePower = getVotePower(user);                                                                                  // 54
                                                                                                                       //
  // in case user is upvoting a previously downvoted item, cancel downvote first                                       //
  Telescope.cancelDownvote(collection, itemId, user);                                                                  // 57
                                                                                                                       //
  // Votes & Score                                                                                                     //
  var result = collection.update({ _id: item && item._id, upvoters: { $ne: user._id } }, {                             // 60
    $addToSet: { upvoters: user._id },                                                                                 // 61
    $inc: { upvotes: 1, baseScore: votePower },                                                                        // 62
    $set: { inactive: false }                                                                                          // 63
  });                                                                                                                  //
                                                                                                                       //
  if (result > 0) {                                                                                                    // 66
                                                                                                                       //
    // Add item to list of upvoted items                                                                               //
    var vote = {                                                                                                       // 69
      itemId: item._id,                                                                                                // 70
      votedAt: new Date(),                                                                                             // 71
      power: votePower                                                                                                 // 72
    };                                                                                                                 //
    addVote(user._id, vote, collectionName, 'up');                                                                     // 74
                                                                                                                       //
    // extend item with baseScore to help calculate newScore                                                           //
    item = _.extend(item, { baseScore: item.baseScore + votePower });                                                  // 77
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                                  // 78
                                                                                                                       //
    // if the item is being upvoted by its own author, don't give karma                                                //
    if (item.userId !== user._id) {                                                                                    // 81
      modifyKarma(item.userId, votePower);                                                                             // 82
                                                                                                                       //
      // if karma redistribution is enabled, give karma to all previous upvoters of the post                           //
      // (but not to the person doing the upvoting)                                                                    //
      if (Settings.get('redistributeKarma', false)) {                                                                  // 86
        _.each(item.upvoters, function (upvoterId) {                                                                   // 87
          // share the karma equally among all upvoters, but cap the value at 0.1                                      //
          var karmaIncrease = Math.min(0.1, votePower / item.upvoters.length);                                         // 89
          modifyKarma(upvoterId, karmaIncrease);                                                                       // 90
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    // --------------------- Server-Side Async Callbacks --------------------- //                                      //
                                                                                                                       //
    Telescope.callbacks.runAsync("upvoteAsync", item, user);                                                           // 97
                                                                                                                       //
    // ----------------------------------------------------------------------- //                                      //
  }                                                                                                                    //
  // console.log(collection.findOne(item._id));                                                                        //
  return true;                                                                                                         // 102
};                                                                                                                     //
                                                                                                                       //
Telescope.downvoteItem = function (collection, itemId, user) {                                                         // 105
                                                                                                                       //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                           // 107
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                         // 108
  var item = collection.findOne(itemId);                                                                               // 109
                                                                                                                       //
  // make sure user has rights to downvote first                                                                       //
  if (!user || !Users.can.vote(user, true) || hasDownvotedItem(item, user)) return false;                              // 112
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all downvote callbacks on item successively                                                                   //
  item = Telescope.callbacks.run("downvote", item, user);                                                              // 118
                                                                                                                       //
  // ----------------------------------------------------------------------- //                                        //
                                                                                                                       //
  var votePower = getVotePower(user);                                                                                  // 122
                                                                                                                       //
  // in case user is downvoting a previously upvoted item, cancel upvote first                                         //
  Telescope.cancelUpvote(collection, item, user);                                                                      // 125
                                                                                                                       //
  // Votes & Score                                                                                                     //
  var result = collection.update({ _id: item && item._id, downvoters: { $ne: user._id } }, {                           // 128
    $addToSet: { downvoters: user._id },                                                                               // 129
    $inc: { downvotes: 1, baseScore: -votePower },                                                                     // 130
    $set: { inactive: false }                                                                                          // 131
  });                                                                                                                  //
                                                                                                                       //
  if (result > 0) {                                                                                                    // 134
    // Add item to list of downvoted items                                                                             //
    var vote = {                                                                                                       // 136
      itemId: item._id,                                                                                                // 137
      votedAt: new Date(),                                                                                             // 138
      power: votePower                                                                                                 // 139
    };                                                                                                                 //
    addVote(user._id, vote, collectionName, 'down');                                                                   // 141
                                                                                                                       //
    // extend item with baseScore to help calculate newScore                                                           //
    item = _.extend(item, { baseScore: item.baseScore - votePower });                                                  // 144
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                                  // 145
                                                                                                                       //
    // if the item is being upvoted by its own author, don't give karma                                                //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                                 // 148
                                                                                                                       //
    // --------------------- Server-Side Async Callbacks --------------------- //                                      //
                                                                                                                       //
    Telescope.callbacks.runAsync("downvoteAsync", item, user);                                                         // 153
                                                                                                                       //
    // ----------------------------------------------------------------------- //                                      //
  }                                                                                                                    //
  // console.log(collection.findOne(item._id));                                                                        //
  return true;                                                                                                         // 158
};                                                                                                                     //
                                                                                                                       //
Telescope.cancelUpvote = function (collection, itemId, user) {                                                         // 161
                                                                                                                       //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                           // 163
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                         // 164
  var item = collection.findOne(itemId);                                                                               // 165
                                                                                                                       //
  // if user isn't among the upvoters, abort                                                                           //
  if (!hasUpvotedItem(item, user)) return false;                                                                       // 168
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all cancel upvote callbacks on item successively                                                              //
  item = Telescope.callbacks.run("cancelUpvote", item, user);                                                          // 174
                                                                                                                       //
  // ----------------------------------------------------------------------- //                                        //
                                                                                                                       //
  var votePower = getVotePower(user);                                                                                  // 178
                                                                                                                       //
  // Votes & Score                                                                                                     //
  var result = collection.update({ _id: item && item._id, upvoters: user._id }, {                                      // 181
    $pull: { upvoters: user._id },                                                                                     // 182
    $inc: { upvotes: -1, baseScore: -votePower },                                                                      // 183
    $set: { inactive: false }                                                                                          // 184
  });                                                                                                                  //
                                                                                                                       //
  if (result > 0) {                                                                                                    // 187
    // Remove item from list of upvoted items                                                                          //
    removeVote(user._id, item._id, collectionName, 'up');                                                              // 189
                                                                                                                       //
    // extend item with baseScore to help calculate newScore                                                           //
    item = _.extend(item, { baseScore: item.baseScore - votePower });                                                  // 192
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                                  // 193
                                                                                                                       //
    // if the item is being upvoted by its own author, don't give karma                                                //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                                 // 196
                                                                                                                       //
    // --------------------- Server-Side Async Callbacks --------------------- //                                      //
                                                                                                                       //
    Telescope.callbacks.runAsync("cancelUpvoteAsync", item, user);                                                     // 202
                                                                                                                       //
    // ----------------------------------------------------------------------- //                                      //
  }                                                                                                                    //
  // console.log(collection.findOne(item._id));                                                                        //
  return true;                                                                                                         // 207
};                                                                                                                     //
                                                                                                                       //
Telescope.cancelDownvote = function (collection, itemId, user) {                                                       // 210
                                                                                                                       //
  user = typeof user === "undefined" ? Meteor.user() : user;                                                           // 212
  var collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);                         // 213
  var item = collection.findOne(itemId);                                                                               // 214
                                                                                                                       //
  // if user isn't among the downvoters, abort                                                                         //
  if (!hasDownvotedItem(item, user)) return false;                                                                     // 217
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all cancel downvote callbacks on item successively                                                            //
                                                                                                                       //
  item = Telescope.callbacks.run("cancelDownvote", item, user);                                                        // 224
                                                                                                                       //
  // ----------------------------------------------------------------------- //                                        //
                                                                                                                       //
  var votePower = getVotePower(user);                                                                                  // 228
                                                                                                                       //
  // Votes & Score                                                                                                     //
  var result = collection.update({ _id: item && item._id, downvoters: user._id }, {                                    // 231
    $pull: { downvoters: user._id },                                                                                   // 232
    $inc: { downvotes: -1, baseScore: votePower },                                                                     // 233
    $set: { inactive: false }                                                                                          // 234
  });                                                                                                                  //
                                                                                                                       //
  if (result > 0) {                                                                                                    // 237
    // Remove item from list of downvoted items                                                                        //
    removeVote(user._id, item._id, collectionName, 'down');                                                            // 239
                                                                                                                       //
    // extend item with baseScore to help calculate newScore                                                           //
    item = _.extend(item, { baseScore: item.baseScore + votePower });                                                  // 242
    Telescope.updateScore({ collection: collection, item: item, forceUpdate: true });                                  // 243
                                                                                                                       //
    // if the item is being upvoted by its own author, don't give karma                                                //
    if (item.userId !== user._id) modifyKarma(item.userId, votePower);                                                 // 246
                                                                                                                       //
    // --------------------- Server-Side Async Callbacks --------------------- //                                      //
                                                                                                                       //
    Telescope.callbacks.runAsync("cancelDownvoteAsync", item, user);                                                   // 252
                                                                                                                       //
    // ----------------------------------------------------------------------- //                                      //
  }                                                                                                                    //
  // console.log(collection.findOne(item._id));                                                                        //
  return true;                                                                                                         // 257
};                                                                                                                     //
                                                                                                                       //
Meteor.methods({                                                                                                       // 260
  upvotePost: function (postId) {                                                                                      // 261
    check(postId, String);                                                                                             // 262
    return Telescope.upvoteItem.call(this, Posts, postId);                                                             // 263
  },                                                                                                                   //
  downvotePost: function (postId) {                                                                                    // 265
    check(postId, String);                                                                                             // 266
    return Telescope.downvoteItem.call(this, Posts, postId);                                                           // 267
  },                                                                                                                   //
  cancelUpvotePost: function (postId) {                                                                                // 269
    check(postId, String);                                                                                             // 270
    return Telescope.cancelUpvote.call(this, Posts, postId);                                                           // 271
  },                                                                                                                   //
  cancelDownvotePost: function (postId) {                                                                              // 273
    check(postId, String);                                                                                             // 274
    return Telescope.cancelDownvote.call(this, Posts, postId);                                                         // 275
  },                                                                                                                   //
  upvoteComment: function (commentId) {                                                                                // 277
    check(commentId, String);                                                                                          // 278
    return Telescope.upvoteItem.call(this, Comments, commentId);                                                       // 279
  },                                                                                                                   //
  downvoteComment: function (commentId) {                                                                              // 281
    check(commentId, String);                                                                                          // 282
    return Telescope.downvoteItem.call(this, Comments, commentId);                                                     // 283
  },                                                                                                                   //
  cancelUpvoteComment: function (commentId) {                                                                          // 285
    check(commentId, String);                                                                                          // 286
    return Telescope.cancelUpvote.call(this, Comments, commentId);                                                     // 287
  },                                                                                                                   //
  cancelDownvoteComment: function (commentId) {                                                                        // 289
    check(commentId, String);                                                                                          // 290
    return Telescope.cancelDownvote.call(this, Comments, commentId);                                                   // 291
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/subscriptions.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// note: this is shared between client/server in order to enable fast-render to auto-detect subscriptions              //
                                                                                                                       //
Telescope.subscriptions.preload('settings');                                                                           // 3
Telescope.subscriptions.preload('currentUser');                                                                        // 4
                                                                                                                       //
FlowRouter.subscriptions = function () {                                                                               // 6
  var flow = this;                                                                                                     // 7
  Telescope.subscriptions.forEach(function (sub) {                                                                     // 8
    if (typeof sub === 'object') {                                                                                     // 9
      flow.register(sub.subName, Meteor.subscribe(sub.subName, sub.subArguments));                                     // 10
    } else {                                                                                                           //
      flow.register(sub, Meteor.subscribe(sub));                                                                       // 12
    }                                                                                                                  //
  });                                                                                                                  //
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/handlebars.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// ** Handlebars helpers **                                                                                            //
                                                                                                                       //
Template.registerHelper('eachWithRank', function (items, options) {                                                    // 3
  // not used, forces multiple renders                                                                                 //
  // note: cannot use this because it would delete and recreate all nodes                                              //
  items.rewind();                                                                                                      // 6
  var out = '';                                                                                                        // 7
  items.forEach(function (item, i) {                                                                                   // 8
    var key = 'Branch-' + i;                                                                                           // 9
    out = out + Spark.labelBranch(key, function () {                                                                   // 10
      return options.fn(_.extend(item, { rank: i }));                                                                  // 11
    });                                                                                                                //
  });                                                                                                                  //
  return out;                                                                                                          // 14
});                                                                                                                    //
Template.registerHelper('isLoggedIn', function () {                                                                    // 16
  return !!Meteor.user();                                                                                              // 17
});                                                                                                                    //
Template.registerHelper('canView', function () {                                                                       // 19
  return Users.can.view(Meteor.user());                                                                                // 20
});                                                                                                                    //
Template.registerHelper('canPost', function () {                                                                       // 22
  return Users.can.post(Meteor.user());                                                                                // 23
});                                                                                                                    //
Template.registerHelper('canComment', function () {                                                                    // 25
  return Users.can.comment(Meteor.user());                                                                             // 26
});                                                                                                                    //
Template.registerHelper('isAdmin', function (user) {                                                                   // 28
  var user = typeof user === "undefined" ? Meteor.user() : user;                                                       // 29
  if (Users.is.admin(Meteor.user())) {                                                                                 // 30
    return true;                                                                                                       // 31
  }                                                                                                                    //
  return false;                                                                                                        // 33
});                                                                                                                    //
Template.registerHelper('canEdit', function (item) {                                                                   // 35
  return Users.can.edit(Meteor.user(), item, false);                                                                   // 36
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('log', function (context) {                                                                    // 39
  console.log(context);                                                                                                // 40
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('formatDate', function (datetime, format) {                                                    // 43
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper                            // 44
  return moment(datetime).format(format);                                                                              // 45
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('timeAgo', function (datetime) {                                                               // 48
  Session.get('momentLocale'); // depend on session variable to reactively rerun the helper                            // 49
  return moment(datetime).fromNow();                                                                                   // 50
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('sanitize', function (content) {                                                               // 53
  console.log('cleaning up…');                                                                                         // 54
  console.log(content);                                                                                                // 55
  return Telescope.utils.cleanUp(content);                                                                             // 56
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('pluralize', function (count, string) {                                                        // 59
  string = count === 1 ? string : string + 's';                                                                        // 60
  return i18n.t(string);                                                                                               // 61
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('getProfileUrl', function (userOrUserId) {                                                     // 64
  var user = typeof userOrUserId === 'string' ? Meteor.users.findOne(userOrUserId) : userOrUserId;                     // 65
  if (!!user) {                                                                                                        // 66
    return Users.getProfileUrl(user);                                                                                  // 67
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('getUsername', function (userOrUserId) {                                                       // 71
  var user = typeof userOrUserId === 'string' ? Meteor.users.findOne(userOrUserId) : userOrUserId;                     // 72
  if (!!user) {                                                                                                        // 73
    return Users.getUserName(user);                                                                                    // 74
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('getDisplayName', function (userOrUserId) {                                                    // 78
  var user = typeof userOrUserId === 'string' ? Meteor.users.findOne(userOrUserId) : userOrUserId;                     // 79
  if (!!user) {                                                                                                        // 80
    return Users.getDisplayName(user);                                                                                 // 81
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('icon', function (iconName, iconClass) {                                                       // 85
  return Telescope.utils.getIcon(iconName, iconClass);                                                                 // 86
});                                                                                                                    //
                                                                                                                       //
Template.registerHelper('moduleClass', function () {                                                                   // 89
  // to get the module class from within a module, we go back up                                                       //
  // four steps to access the zone data                                                                                //
  var zoneData = Template.parentData(4);                                                                               // 92
  if (zoneData) {                                                                                                      // 93
    // node: modules may not always be included from within a zone                                                     //
    var moduleClass = zoneData.zone + "-module ";                                                                      // 95
    if (zoneData.moduleClass) {                                                                                        // 96
      moduleClass += zoneData.moduleClass;                                                                             // 97
    }                                                                                                                  //
    return moduleClass;                                                                                                // 99
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/main.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Session variables                                                                                                   //
Session.set('appIsReady', false);                                                                                      // 2
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 4
  var link = { rel: "alternate", type: "application/rss+xml", href: "/feed.xml", title: i18n.t("new_posts") };         // 5
  DocHead.addLink(link);                                                                                               // 6
});                                                                                                                    //
                                                                                                                       //
// Global Subscriptions                                                                                                //
                                                                                                                       //
Telescope.subsManager = new SubsManager({                                                                              // 11
  // cache recent 50 subscriptions                                                                                     //
  cacheLimit: 50,                                                                                                      // 13
  // expire any subscription after 30 minutes                                                                          //
  expireIn: 30                                                                                                         // 15
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/scripts/jquery.quickfit.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function ($) {                                                                                                        // 1
  var Quickfit, QuickfitHelper, defaults, pluginName;                                                                  // 2
                                                                                                                       //
  pluginName = 'quickfit';                                                                                             // 4
                                                                                                                       //
  defaults = {                                                                                                         // 6
    min: 8,                                                                                                            // 7
    max: 12,                                                                                                           // 8
    tolerance: 0.02,                                                                                                   // 9
    truncate: false,                                                                                                   // 10
    width: null,                                                                                                       // 11
    sampleNumberOfLetters: 10,                                                                                         // 12
    sampleFontSize: 12                                                                                                 // 13
  };                                                                                                                   //
  QuickfitHelper = (function () {                                                                                      // 15
                                                                                                                       //
    var sharedInstance = null;                                                                                         // 17
                                                                                                                       //
    QuickfitHelper.instance = function (options) {                                                                     // 19
      if (!sharedInstance) {                                                                                           // 20
        sharedInstance = new QuickfitHelper(options);                                                                  // 21
      }                                                                                                                //
      return sharedInstance;                                                                                           // 23
    };                                                                                                                 //
                                                                                                                       //
    function QuickfitHelper(options) {                                                                                 // 26
      this.options = options;                                                                                          // 27
                                                                                                                       //
      this.item = $('<span id="meassure"></span>');                                                                    // 29
      this.item.css({                                                                                                  // 30
        position: 'absolute',                                                                                          // 31
        left: '-1000px',                                                                                               // 32
        top: '-1000px',                                                                                                // 33
        'font-size': "" + this.options.sampleFontSize + "px"                                                           // 34
      });                                                                                                              //
      $('body').append(this.item);                                                                                     // 36
                                                                                                                       //
      this.meassures = {};                                                                                             // 38
    }                                                                                                                  //
                                                                                                                       //
    QuickfitHelper.prototype.getMeassure = function (letter) {                                                         // 41
      var currentMeassure;                                                                                             // 42
      currentMeassure = this.meassures[letter];                                                                        // 43
      if (!currentMeassure) {                                                                                          // 44
        currentMeassure = this.setMeassure(letter);                                                                    // 45
      }                                                                                                                //
      return currentMeassure;                                                                                          // 47
    };                                                                                                                 //
                                                                                                                       //
    QuickfitHelper.prototype.setMeassure = function (letter) {                                                         // 50
      var currentMeassure, index, sampleLetter, text, _ref;                                                            // 51
                                                                                                                       //
      text = '';                                                                                                       // 53
      sampleLetter = letter === ' ' ? '&nbsp;' : letter;                                                               // 54
                                                                                                                       //
      for (index = 0, _ref = this.options.sampleNumberOfLetters - 1; 0 <= _ref ? index <= _ref : index >= _ref; 0 <= _ref ? index++ : index--) {
        text += sampleLetter;                                                                                          // 57
      }                                                                                                                //
                                                                                                                       //
      this.item.html(text);                                                                                            // 60
      currentMeassure = this.item.width() / this.options.sampleNumberOfLetters / this.options.sampleFontSize;          // 61
      this.meassures[letter] = currentMeassure;                                                                        // 62
                                                                                                                       //
      return currentMeassure;                                                                                          // 64
    };                                                                                                                 //
                                                                                                                       //
    return QuickfitHelper;                                                                                             // 67
  })();                                                                                                                //
                                                                                                                       //
  Quickfit = (function () {                                                                                            // 71
                                                                                                                       //
    function Quickfit(element, options) {                                                                              // 73
      this.$element = element;                                                                                         // 74
      this.options = $.extend({}, defaults, options);                                                                  // 75
      this.$element = $(this.$element);                                                                                // 76
      this._defaults = defaults;                                                                                       // 77
      this._name = pluginName;                                                                                         // 78
      this.quickfitHelper = QuickfitHelper.instance(this.options);                                                     // 79
    }                                                                                                                  //
                                                                                                                       //
    Quickfit.prototype.fit = function () {                                                                             // 82
      var elementWidth;                                                                                                // 83
      if (!this.options.width) {                                                                                       // 84
        elementWidth = this.$element.width();                                                                          // 85
        this.options.width = elementWidth - this.options.tolerance * elementWidth;                                     // 86
      }                                                                                                                //
      if (this.text = this.$element.attr('data-quickfit')) {                                                           // 88
        this.previouslyTruncated = true;                                                                               // 89
      } else {                                                                                                         //
        this.text = this.$element.text();                                                                              // 91
      }                                                                                                                //
      this.calculateFontSize();                                                                                        // 93
                                                                                                                       //
      if (this.options.truncate) this.truncate();                                                                      // 95
                                                                                                                       //
      return {                                                                                                         // 97
        $element: this.$element,                                                                                       // 98
        size: this.fontSize                                                                                            // 99
      };                                                                                                               //
    };                                                                                                                 //
                                                                                                                       //
    Quickfit.prototype.calculateFontSize = function () {                                                               // 103
      var letter, textWidth, i;                                                                                        // 104
                                                                                                                       //
      textWidth = 0;                                                                                                   // 106
      for (i = 0; i < this.text.length; ++i) {                                                                         // 107
        letter = this.text.charAt(i);                                                                                  // 108
        textWidth += this.quickfitHelper.getMeassure(letter);                                                          // 109
      }                                                                                                                //
                                                                                                                       //
      this.targetFontSize = parseInt(this.options.width / textWidth);                                                  // 112
      return this.fontSize = Math.max(this.options.min, Math.min(this.options.max, this.targetFontSize));              // 113
    };                                                                                                                 //
                                                                                                                       //
    Quickfit.prototype.truncate = function () {                                                                        // 116
      var index, lastLetter, letter, textToAdd, textWidth;                                                             // 117
                                                                                                                       //
      if (this.fontSize > this.targetFontSize) {                                                                       // 119
        textToAdd = '';                                                                                                // 120
        textWidth = 3 * this.quickfitHelper.getMeassure('.') * this.fontSize;                                          // 121
                                                                                                                       //
        index = 0;                                                                                                     // 123
        while (textWidth < this.options.width && index < this.text.length) {                                           // 124
          letter = this.text[index++];                                                                                 // 125
          if (lastLetter) textToAdd += lastLetter;                                                                     // 126
          textWidth += this.fontSize * this.quickfitHelper.getMeassure(letter);                                        // 127
          lastLetter = letter;                                                                                         // 128
        }                                                                                                              //
                                                                                                                       //
        if (textToAdd.length + 1 === this.text.length) {                                                               // 131
          textToAdd = this.text;                                                                                       // 132
        } else {                                                                                                       //
          textToAdd += '...';                                                                                          // 134
        }                                                                                                              //
        this.textWasTruncated = true;                                                                                  // 136
                                                                                                                       //
        return this.$element.attr('data-quickfit', this.text).html(textToAdd);                                         // 138
      } else {                                                                                                         //
        if (this.previouslyTruncated) {                                                                                // 141
          return this.$element.html(this.text);                                                                        // 142
        }                                                                                                              //
      }                                                                                                                //
    };                                                                                                                 //
                                                                                                                       //
    return Quickfit;                                                                                                   // 147
  })();                                                                                                                //
                                                                                                                       //
  return $.fn.quickfit = function (options) {                                                                          // 151
    var measurements = [];                                                                                             // 152
                                                                                                                       //
    // Separate measurements from repaints                                                                             //
    // First calculate all measurements...                                                                             //
    var $elements = this.each(function () {                                                                            // 156
      var measurement = new Quickfit(this, options).fit();                                                             // 157
      measurements.push(measurement);                                                                                  // 158
      return measurement.$element;                                                                                     // 159
    });                                                                                                                //
                                                                                                                       //
    // ... then apply the measurements.                                                                                //
    for (var i = 0; i < measurements.length; i++) {                                                                    // 163
      var measurement = measurements[i];                                                                               // 164
                                                                                                                       //
      measurement.$element.css({ fontSize: measurement.size + 'px' });                                                 // 166
    }                                                                                                                  //
                                                                                                                       //
    return $elements;                                                                                                  // 169
  };                                                                                                                   //
})(jQuery, window);                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/modules/template.modules.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("modules");                                                                                       // 2
Template["modules"] = new Template("Template.modules", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return Spacebars.mustache(view.lookup("getClass"));                                                              // 7
    },                                                                                                                 // 8
    "data-zone": function() {                                                                                          // 9
      return Spacebars.mustache(view.lookup("zone"));                                                                  // 10
    },                                                                                                                 // 11
    id: function() {                                                                                                   // 12
      return Spacebars.mustache(view.lookup("getId"));                                                                 // 13
    }                                                                                                                  // 14
  }, "\n    ", Blaze.Each(function() {                                                                                 // 15
    return Spacebars.call(view.lookup("getModules"));                                                                  // 16
  }, function() {                                                                                                      // 17
    return [ "\n      ", Blaze.If(function() {                                                                         // 18
      return Spacebars.call(view.lookup("showModule"));                                                                // 19
    }, function() {                                                                                                    // 20
      return [ "\n        ", Blaze._TemplateWith(function() {                                                          // 21
        return {                                                                                                       // 22
          template: Spacebars.call(view.lookup("template")),                                                           // 23
          data: Spacebars.call(view.lookup("moduleData"))                                                              // 24
        };                                                                                                             // 25
      }, function() {                                                                                                  // 26
        return Spacebars.include(function() {                                                                          // 27
          return Spacebars.call(Template.__dynamic);                                                                   // 28
        });                                                                                                            // 29
      }), "\n      " ];                                                                                                // 30
    }), "\n    " ];                                                                                                    // 31
  }), "\n  ");                                                                                                         // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/modules/modules.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.modules.helpers({                                                                                             // 1
  isDebug: function () {                                                                                               // 2
    return Session.get('debug');                                                                                       // 3
  },                                                                                                                   //
  getClass: function () {                                                                                              // 5
    var zoneClass = "zone-wrapper ";                                                                                   // 6
    if (this.zoneClass) {                                                                                              // 7
      zoneClass += this.zoneClass;                                                                                     // 8
    } else {                                                                                                           //
      zoneClass += this.zone;                                                                                          // 10
    }                                                                                                                  //
    return zoneClass;                                                                                                  // 12
  },                                                                                                                   //
  getId: function () {                                                                                                 // 14
    return this.wrapperId;                                                                                             // 15
  },                                                                                                                   //
  getModules: function () {                                                                                            // 17
    var modules = this;                                                                                                // 18
                                                                                                                       //
    var zoneModules = Telescope.modules.get(modules.zone).map(function (module) {                                      // 20
                                                                                                                       //
      // use deep copy to avoid modifying original module when extending it with modules property                      //
      var newModule = jQuery.extend(true, {}, module);                                                                 // 23
      newModule.modules = modules;                                                                                     // 24
      return newModule;                                                                                                // 25
    });                                                                                                                //
                                                                                                                       //
    return zoneModules;                                                                                                // 29
  },                                                                                                                   //
  showModule: function () {                                                                                            // 31
    var module = this;                                                                                                 // 32
                                                                                                                       //
    // if module should only run on specific routes, test for them                                                     //
    if (module.only) {                                                                                                 // 35
      if (Array.isArray(module.only)) {                                                                                // 36
        return _.contains(module.only, FlowRouter.getRouteName());                                                     // 37
      } else {                                                                                                         //
        return module.only();                                                                                          // 39
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    // if module should *not* run on specific routes, test for them                                                    //
    if (module.except) {                                                                                               // 44
      if (Array.isArray(module.except)) {                                                                              // 45
        return !_.contains(module.except, FlowRouter.getRouteName());                                                  // 46
      } else {                                                                                                         //
        return module.except();                                                                                        // 48
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return true;                                                                                                       // 52
  },                                                                                                                   //
  moduleData: function () {                                                                                            // 54
    var data = _.extend({                                                                                              // 55
      zone: this.modules.zone,                                                                                         // 56
      moduleClass: this.modules.moduleClass                                                                            // 57
    }, this.modules.moduleData);                                                                                       //
    return data;                                                                                                       // 59
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/admin/template.admin_menu.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("admin_menu");                                                                                    // 2
Template["admin_menu"] = new Template("Template.admin_menu", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("isAdmin"));                                                                     // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 8
      return {                                                                                                         // 9
        menuName: Spacebars.call("admin"),                                                                             // 10
        menuType: Spacebars.call("list"),                                                                              // 11
        menuItems: Spacebars.call(view.lookup("adminMenuItems"))                                                       // 12
      };                                                                                                               // 13
    }, function() {                                                                                                    // 14
      return Spacebars.include(view.lookupTemplate("menuComponent"));                                                  // 15
    }), "\n  " ];                                                                                                      // 16
  });                                                                                                                  // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/admin/admin_menu.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.admin_menu.helpers({                                                                                          // 1
  adminMenuItems: function () {                                                                                        // 2
    return Telescope.menuItems.get("adminMenu");                                                                       // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/admin/template.admin_wrapper.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("admin_wrapper");                                                                                 // 2
Template["admin_wrapper"] = new Template("Template.admin_wrapper", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid admin-wrapper"                                                                                      // 6
  }, "\n    ", Spacebars.include(view.lookupTemplate("admin_menu")), "\n    ", HTML.DIV({                              // 7
    "class": function() {                                                                                              // 8
      return [ "admin-contents ", Spacebars.mustache(view.lookup("currentRouteName")), "-contents" ];                  // 9
    }                                                                                                                  // 10
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 11
    return {                                                                                                           // 12
      template: Spacebars.call(view.lookup("admin"))                                                                   // 13
    };                                                                                                                 // 14
  }, function() {                                                                                                      // 15
    return Spacebars.include(function() {                                                                              // 16
      return Spacebars.call(Template.__dynamic);                                                                       // 17
    });                                                                                                                // 18
  }), "\n    "), "\n  ");                                                                                              // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/template.css.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("css");                                                                                           // 2
Template["css"] = new Template("Template.css", (function() {                                                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.STYLE("\n\n      ", Blaze.If(function() {                                                              // 5
    return Spacebars.call(view.lookup("elementColors"));                                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n        ", Blaze.View("lookup:elementColors", function() {                                             // 8
      return Spacebars.mustache(view.lookup("elementColors"));                                                         // 9
    }), "\n      " ];                                                                                                  // 10
  }), "\n\n      ", Blaze.If(function() {                                                                              // 11
    return Spacebars.dataMustache(view.lookup("getSetting"), "fontFamily");                                            // 12
  }, function() {                                                                                                      // 13
    return [ '\n        body, textarea, input, button, input[type="submit"], input[type="button"]{\n          font-family: ', Blaze.View("lookup:getSetting", function() {
      return Spacebars.mustache(view.lookup("getSetting"), "fontFamily");                                              // 15
    }), ";\n        }\n      " ];                                                                                      // 16
  }), "\n\n      ", Blaze.If(function() {                                                                              // 17
    return Spacebars.dataMustache(view.lookup("getSetting"), "backgroundCSS");                                         // 18
  }, function() {                                                                                                      // 19
    return [ "\n        body{\n          background: ", Blaze.View("lookup:getSetting", function() {                   // 20
      return Spacebars.mustache(view.lookup("getSetting"), "backgroundCSS");                                           // 21
    }), ";\n        }\n      " ];                                                                                      // 22
  }), "\n\n\n      .logo-image a{\n        ", Blaze.If(function() {                                                    // 23
    return Spacebars.dataMustache(view.lookup("getSetting"), "logoHeight");                                            // 24
  }, function() {                                                                                                      // 25
    return [ "\n          max-height:", Blaze.View("lookup:getSetting", function() {                                   // 26
      return Spacebars.mustache(view.lookup("getSetting"), "logoHeight");                                              // 27
    }), "px;\n        " ];                                                                                             // 28
  }), "\n        ", Blaze.If(function() {                                                                              // 29
    return Spacebars.dataMustache(view.lookup("getSetting"), "logoWidth");                                             // 30
  }, function() {                                                                                                      // 31
    return [ "\n          max-width:", Blaze.View("lookup:getSetting", function() {                                    // 32
      return Spacebars.mustache(view.lookup("getSetting"), "logoWidth");                                               // 33
    }), "px;\n        " ];                                                                                             // 34
  }), "\n      }\n\n      ", Blaze.View("lookup:hideAuthClass", function() {                                           // 35
    return Spacebars.mustache(view.lookup("hideAuthClass"));                                                           // 36
  }), "\n\n      @media screen and (max-width: 600px) {\n        /* find a way to get rid of this */\n        .post-discuss .icon, .post-discuss .action-count{\n          color: ", Blaze.View("lookup:getSetting", function() {
    return Spacebars.mustache(view.lookup("getSetting"), "buttonColor");                                               // 38
  }), ";\n        }\n      }\n\n      ", Blaze.If(function() {                                                         // 39
    return Spacebars.call(view.lookup("extraCSS"));                                                                    // 40
  }, function() {                                                                                                      // 41
    return [ "\n        ", Blaze.View("lookup:extraCSS", function() {                                                  // 42
      return Spacebars.mustache(view.lookup("extraCSS"));                                                              // 43
    }), "\n      " ];                                                                                                  // 44
  }), "\n  \n  "), "\n  ", Blaze.If(function() {                                                                       // 45
    return Spacebars.dataMustache(view.lookup("getSetting"), "fontUrl");                                               // 46
  }, function() {                                                                                                      // 47
    return [ "\n    ", HTML.LINK({                                                                                     // 48
      href: function() {                                                                                               // 49
        return Spacebars.mustache(view.lookup("getSetting"), "fontUrl");                                               // 50
      },                                                                                                               // 51
      rel: "stylesheet",                                                                                               // 52
      type: "text/css"                                                                                                 // 53
    }), "\n  " ];                                                                                                      // 54
  }) ];                                                                                                                // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/css.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.css.helpers({                                                                                                 // 1
  elementColors: function () {                                                                                         // 2
    var css = "";                                                                                                      // 3
                                                                                                                       //
    // first loop over each of the four color                                                                          //
    _.each(Telescope.colorElements.colorTable, function (elements, color) {                                            // 6
      var properties = {};                                                                                             // 7
                                                                                                                       //
      // for each color, loop over the items to build the selector                                                     //
      _.each(elements, function (element) {                                                                            // 10
        var elementSelector = element.selector;                                                                        // 11
        var elementProperty = !!element.property ? element.property : "color"; // default to color property            // 12
        properties[elementProperty] += ", " + elementSelector;                                                         // 13
      });                                                                                                              //
                                                                                                                       //
      // loop over all properties, and add the relevant selectors                                                      //
      _.each(properties, function (selector, property) {                                                               // 17
        css += selector + "{\n  " + property + ": " + Settings.get(color, Telescope.colorElements.defaultColors[color]) + ";\n}\n";
      });                                                                                                              //
    });                                                                                                                //
    return css;                                                                                                        // 21
  },                                                                                                                   //
  headerTextColorHalfOpacity: function () {                                                                            // 23
    return tinycolor(Settings.get("headerTextColor")).setAlpha(0.5);                                                   // 24
  },                                                                                                                   //
  buttonColorHalfOpacity: function () {                                                                                // 26
    return tinycolor(Settings.get("buttonColor")).setAlpha(0.5);                                                       // 27
  },                                                                                                                   //
  hideAuthClass: function () {                                                                                         // 29
                                                                                                                       //
    var authClass = '';                                                                                                // 31
    var authMethods = Settings.get('authMethods', ["email"]);                                                          // 32
    var selectors = [{ name: 'email', selector: ".at-pwd-form" }, { name: 'twitter', selector: "#at-twitter" }, { name: 'facebook', selector: "#at-facebook" }];
    selectors.forEach(function (method) {                                                                              // 38
      // if current method is not one of the enabled auth methods, hide it                                             //
      if (authMethods.indexOf(method.name) == -1) {                                                                    // 40
        authClass += method.selector + ", ";                                                                           // 41
      }                                                                                                                //
    });                                                                                                                //
                                                                                                                       //
    // unless we're showing at least one of twitter and facebook AND the password form,                                //
    // hide separator                                                                                                  //
    if (authMethods.indexOf('email') == -1 || authMethods.indexOf('facebook') == -1 && authMethods.indexOf('twitter') == -1) {
      authClass += ".at-sep, ";                                                                                        // 48
    }                                                                                                                  //
                                                                                                                       //
    return authClass.slice(0, -2) + "{display:none !important}";                                                       // 51
  },                                                                                                                   //
  extraCSS: function () {                                                                                              // 54
    return Settings.get("extraCSS");                                                                                   // 55
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/template.footer_code.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("footer_code");                                                                                   // 2
Template["footer_code"] = new Template("Template.footer_code", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "footer-code ", Spacebars.mustache(view.lookup("moduleClass")) ];                                       // 7
    }                                                                                                                  // 8
  }, "\n    ", Blaze.If(function() {                                                                                   // 9
    return Spacebars.call(view.lookup("footerCode"));                                                                  // 10
  }, function() {                                                                                                      // 11
    return [ "\n      ", Spacebars.include(view.lookupTemplate("markdown"), function() {                               // 12
      return Blaze.View("lookup:footerCode", function() {                                                              // 13
        return Spacebars.mustache(view.lookup("footerCode"));                                                          // 14
      });                                                                                                              // 15
    }), "\n    " ];                                                                                                    // 16
  }, function() {                                                                                                      // 17
    return [ "\n      ", HTML.A({                                                                                      // 18
      href: "http://www.intranet.edf.fr",                                                                              // 19
      target: "_blank"                                                                                                 // 20
    }, Blaze.View("lookup:_", function() {                                                                             // 21
      return Spacebars.mustache(view.lookup("_"), "EDF Collaborative Tools");                                          // 22
    })), "\n    " ];                                                                                                   // 23
  }), "\n  ");                                                                                                         // 24
}));                                                                                                                   // 25
                                                                                                                       // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/footer_code.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.footer_code.helpers({                                                                                         // 1
  footerCode: function () {                                                                                            // 2
    return Settings.get('footerCode');                                                                                 // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/template.loader.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("loader");                                                                                        // 2
Template["loader"] = new Template("Template.loader", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("ready"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze._InOuterTemplateScope(view, function() {                                                  // 8
      return Spacebars.include(function() {                                                                            // 9
        return Spacebars.call(view.templateContentBlock);                                                              // 10
      });                                                                                                              // 11
    }), "\n  " ];                                                                                                      // 12
  }, function() {                                                                                                      // 13
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 14
  });                                                                                                                  // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/template.checker.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("checker");                                                                                       // 2
Template["checker"] = new Template("Template.checker", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("allow"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze._InOuterTemplateScope(view, function() {                                                  // 8
      return Spacebars.include(function() {                                                                            // 9
        return Spacebars.call(view.templateContentBlock);                                                              // 10
      });                                                                                                              // 11
    }), "\n  " ];                                                                                                      // 12
  }, function() {                                                                                                      // 13
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 14
      return {                                                                                                         // 15
        message: Spacebars.call(view.lookup("message"))                                                                // 16
      };                                                                                                               // 17
    }, function() {                                                                                                    // 18
      return Spacebars.include(view.lookupTemplate("no_rights"));                                                      // 19
    }), "\n  " ];                                                                                                      // 20
  });                                                                                                                  // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/checker.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.checker.helpers({                                                                                             // 1
  allow: function () {                                                                                                 // 2
    return Users.can[this.check](Meteor.user(), this.doc);                                                             // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/template.layout.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("layout");                                                                                        // 2
Template["layout"] = new Template("Template.layout", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("appIsReady"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Spacebars.include(view.lookupTemplate("css")), "\n    ", HTML.DIV({                             // 8
      "class": function() {                                                                                            // 9
        return [ "outer-wrapper ", Spacebars.mustache(view.lookup("currentPage")), " ", Spacebars.mustache(view.lookup("navLayout")) ];
      }                                                                                                                // 11
    }, "\n      ", Spacebars.include(view.lookupTemplate("mobile_nav")), "\n      ", HTML.DIV({                        // 12
      "class": function() {                                                                                            // 13
        return [ "inner-wrapper template-", Spacebars.mustache(view.lookup("pageName")) ];                             // 14
      }                                                                                                                // 15
    }, "\n        ", Spacebars.include(view.lookupTemplate("header")), "\n        ", Blaze._TemplateWith(function() {  // 16
      return {                                                                                                         // 17
        zone: Spacebars.call("hero")                                                                                   // 18
      };                                                                                                               // 19
    }, function() {                                                                                                    // 20
      return Spacebars.include(view.lookupTemplate("modules"));                                                        // 21
    }), "\n        ", HTML.DIV({                                                                                       // 22
      "class": "content-wrapper"                                                                                       // 23
    }, "\n          ", Blaze.If(function() {                                                                           // 24
      return Spacebars.call(view.lookup("notAllowed"));                                                                // 25
    }, function() {                                                                                                    // 26
      return [ "\n            ", Blaze._TemplateWith(function() {                                                      // 27
        return {                                                                                                       // 28
          template: Spacebars.call(Spacebars.dot(view.lookup("notAllowed"), "template")),                              // 29
          data: Spacebars.call(Spacebars.dot(view.lookup("notAllowed"), "data"))                                       // 30
        };                                                                                                             // 31
      }, function() {                                                                                                  // 32
        return Spacebars.include(function() {                                                                          // 33
          return Spacebars.call(Template.__dynamic);                                                                   // 34
        });                                                                                                            // 35
      }), "\n          " ];                                                                                            // 36
    }, function() {                                                                                                    // 37
      return [ "\n            ", Blaze._TemplateWith(function() {                                                      // 38
        return {                                                                                                       // 39
          template: Spacebars.call(view.lookup("adminMenu"))                                                           // 40
        };                                                                                                             // 41
      }, function() {                                                                                                  // 42
        return Spacebars.include(function() {                                                                          // 43
          return Spacebars.call(Template.__dynamic);                                                                   // 44
        });                                                                                                            // 45
      }), "\n            ", Blaze._TemplateWith(function() {                                                           // 46
        return {                                                                                                       // 47
          zone: Spacebars.call("contentTop")                                                                           // 48
        };                                                                                                             // 49
      }, function() {                                                                                                  // 50
        return Spacebars.include(view.lookupTemplate("modules"));                                                      // 51
      }), "\n            ", Blaze._TemplateWith(function() {                                                           // 52
        return {                                                                                                       // 53
          template: Spacebars.call(view.lookup("main"))                                                                // 54
        };                                                                                                             // 55
      }, function() {                                                                                                  // 56
        return Spacebars.include(function() {                                                                          // 57
          return Spacebars.call(Template.__dynamic);                                                                   // 58
        });                                                                                                            // 59
      }), "\n            ", Blaze._TemplateWith(function() {                                                           // 60
        return {                                                                                                       // 61
          zone: Spacebars.call("contentBottom")                                                                        // 62
        };                                                                                                             // 63
      }, function() {                                                                                                  // 64
        return Spacebars.include(view.lookupTemplate("modules"));                                                      // 65
      }), "\n          " ];                                                                                            // 66
    }), "\n          ", Blaze._TemplateWith(function() {                                                               // 67
      return {                                                                                                         // 68
        zone: Spacebars.call("footer")                                                                                 // 69
      };                                                                                                               // 70
    }, function() {                                                                                                    // 71
      return Spacebars.include(view.lookupTemplate("modules"));                                                        // 72
    }), "\n        "), "\n        ", HTML.DIV({                                                                        // 73
      "class": "overlay hidden"                                                                                        // 74
    }), "\n      "), "\n      ", Blaze.View("lookup:extraCode", function() {                                           // 75
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("extraCode")));                                          // 76
    }), "\n    "), "\n  " ];                                                                                           // 77
  }, function() {                                                                                                      // 78
    return [ "\n    ", HTML.DIV({                                                                                      // 79
      "class": "app-loading"                                                                                           // 80
    }, Spacebars.include(view.lookupTemplate("loading"))), "\n  " ];                                                   // 81
  });                                                                                                                  // 82
}));                                                                                                                   // 83
                                                                                                                       // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/common/layout.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var init = _.once(function () {                                                                                        // 1
  var title = Settings.get("title", "Telescope");                                                                      // 2
  if (!!Settings.get("tagline")) {                                                                                     // 3
    title += ": " + Settings.get("tagline");                                                                           // 4
  }                                                                                                                    //
  DocHead.setTitle(title);                                                                                             // 6
                                                                                                                       //
  if (!!Settings.get("description")) {                                                                                 // 8
    DocHead.addMeta({ name: "description", content: Settings.get("description") });                                    // 9
    DocHead.addMeta({ property: "og:description", content: Settings.get("description") });                             // 10
  }                                                                                                                    //
                                                                                                                       //
  if (!!Settings.get("siteImage")) {                                                                                   // 13
    DocHead.addMeta({ property: "og:image", content: Settings.get("siteImage") });                                     // 14
  }                                                                                                                    //
                                                                                                                       //
  Events.analyticsInit();                                                                                              // 17
});                                                                                                                    //
                                                                                                                       //
Template.layout.onCreated(function () {                                                                                // 20
                                                                                                                       //
  DocHead.setTitle(i18n.t("loading"));                                                                                 // 22
                                                                                                                       //
  Tracker.autorun(function () {                                                                                        // 24
                                                                                                                       //
    if (FlowRouter.subsReady()) {                                                                                      // 26
      init();                                                                                                          // 27
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Template.layout.helpers({                                                                                              // 35
  appIsReady: function () {                                                                                            // 36
    return FlowRouter.subsReady();                                                                                     // 37
  },                                                                                                                   //
  notAllowed: function () {                                                                                            // 39
                                                                                                                       //
    FlowRouter.watchPathChange();                                                                                      // 41
    var user = Meteor.user();                                                                                          // 42
    var userRoutes = ['signIn', 'signUp', 'changePwd', 'forgotPwd', 'resetPwd', 'enrollAccount', 'verifyEmail', 'signOut', 'userEdit', 'userProfile'];
    var isOnUserRoute = _.contains(userRoutes, FlowRouter.getRouteName());                                             // 44
                                                                                                                       //
    if (!isOnUserRoute && user && !Users.userProfileComplete(user)) {                                                  // 46
      return { template: "user_complete" };                                                                            // 47
    }                                                                                                                  //
                                                                                                                       //
    if (FlowRouter.current().route.group && FlowRouter.current().route.group.name === "admin" && !Users.is.admin(user)) {
      return { template: "no_rights", data: { message: i18n.t("sorry_you_need_to_be_an_admin_to_view_this_page") } };  // 51
    }                                                                                                                  //
                                                                                                                       //
    if (!isOnUserRoute && !Users.can.view(user)) {                                                                     // 54
      return { template: "no_rights", data: { message: i18n.t("sorry_you_dont_have_the_rights_to_view_this_page") } };
    }                                                                                                                  //
                                                                                                                       //
    if (FlowRouter.getRouteName() === "postSubmit") {                                                                  // 58
      if (!user) {                                                                                                     // 59
        return { template: "no_rights", data: { message: i18n.t("please_sign_in_first"), link: FlowRouter.path("signIn") } };
      } else if (!Users.can.post(user)) {                                                                              //
        return { template: "no_rights", data: { message: i18n.t("sorry_you_dont_have_permissions_to_add_new_items") } };
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
    return false;                                                                                                      // 66
  },                                                                                                                   //
  navLayout: function () {                                                                                             // 68
    return Settings.get('navLayout', 'top-nav');                                                                       // 69
  },                                                                                                                   //
  pageName: function () {                                                                                              // 71
    FlowRouter.watchPathChange();                                                                                      // 72
    return FlowRouter.current().route.name;                                                                            // 73
  },                                                                                                                   //
  extraCode: function () {                                                                                             // 75
    return Settings.get('extraCode');                                                                                  // 76
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.layout.onCreated(function () {                                                                                // 80
  Session.set('currentScroll', null);                                                                                  // 81
});                                                                                                                    //
                                                                                                                       //
Template.layout.onRendered(function () {                                                                               // 84
  var currentScroll = Session.get('currentScroll');                                                                    // 85
  if (currentScroll) {                                                                                                 // 86
    $('body').scrollTop(currentScroll);                                                                                // 87
    Session.set('currentScroll', null);                                                                                // 88
  }                                                                                                                    //
                                                                                                                       //
  // favicon                                                                                                           //
  var link = document.createElement('link');                                                                           // 92
  link.type = 'image/x-icon';                                                                                          // 93
  link.rel = 'shortcut icon';                                                                                          // 94
  link.href = Settings.get('faviconUrl', '/img/favicon.ico');                                                          // 95
  document.getElementsByTagName('head')[0].appendChild(link);                                                          // 96
                                                                                                                       //
  // canonical                                                                                                         //
  var canonicalLink = document.createElement('link');                                                                  // 99
  canonicalLink.rel = 'canonical';                                                                                     // 100
  document.getElementsByTagName('head')[0].appendChild(canonicalLink);                                                 // 101
});                                                                                                                    //
                                                                                                                       //
Template.layout.events({                                                                                               // 104
  'click .inner-wrapper': function (e) {                                                                               // 105
    if ($('body').hasClass('mobile-nav-open')) {                                                                       // 106
      e.preventDefault();                                                                                              // 107
      $('body').removeClass('mobile-nav-open');                                                                        // 108
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.already_logged_in.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("already_logged_in");                                                                             // 2
Template["already_logged_in"] = new Template("Template.already_logged_in", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog"                                                                            // 6
  }, "\n		", HTML.P(Blaze.View("lookup:_", function() {                                                                // 7
    return Spacebars.mustache(view.lookup("_"), "you_are_already_logged_in");                                          // 8
  })), "\n	");                                                                                                         // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.loading.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("loading");                                                                                       // 2
Template["loading"] = new Template("Template.loading", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "loader"                                                                                                  // 6
  }, HTML.DIV(Blaze.View("lookup:_", function() {                                                                      // 7
    return Spacebars.mustache(view.lookup("_"), "loading");                                                            // 8
  })));                                                                                                                // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/loading.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.loading.helpers({                                                                                             // 1
  log: function () {                                                                                                   // 2
    console.log('loading…');                                                                                           // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.no_account.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("no_account");                                                                                    // 2
Template["no_account"] = new Template("Template.no_account", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog"                                                                            // 6
  }, "\n		", HTML.P(Blaze.View("lookup:_", function() {                                                                // 7
    return Spacebars.mustache(view.lookup("_"), "sorry_this_is_a_private_site_please_sign_up_first");                  // 8
  })), "\n		", Blaze.View("lookup:landingPageText", function() {                                                       // 9
    return Spacebars.mustache(view.lookup("landingPageText"));                                                         // 10
  }), "\n		", HTML.DIV({                                                                                               // 11
    "class": "twitter-signup twitter-auth"                                                                             // 12
  }, "\n      		", HTML.A({                                                                                            // 13
    "class": "twitter-button button",                                                                                  // 14
    href: "#"                                                                                                          // 15
  }, Blaze.View("lookup:_", function() {                                                                               // 16
    return Spacebars.mustache(view.lookup("_"), "sign_in_sign_up_with_twitter");                                       // 17
  })), "\n    	"), "\n	");                                                                                             // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/no_account.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.no_account.helpers({                                                                                          // 1
  landingPageText: function () {                                                                                       // 2
    return Settings.get("landingPageText");                                                                            // 3
  }                                                                                                                    //
});                                                                                                                    //
Template.no_account.events({                                                                                           // 6
  'click .twitter-button': function () {                                                                               // 7
    Meteor.loginWithTwitter(function () {                                                                              // 8
      FlowRouter.go("postsDefault");                                                                                   // 9
    });                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.no_invite.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("no_invite");                                                                                     // 2
Template["no_invite"] = new Template("Template.no_invite", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog"                                                                            // 6
  }, "\n		", HTML.H2(Blaze.View("lookup:_", function() {                                                               // 7
    return Spacebars.mustache(view.lookup("_"), "thanks_for_signing_up");                                              // 8
  })), "\n		", Blaze.View("lookup:afterSignupText", function() {                                                       // 9
    return Spacebars.mustache(view.lookup("afterSignupText"));                                                         // 10
  }), "\n		", HTML.P(Blaze.View("lookup:_", function() {                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up");
  })), "\n	");                                                                                                         // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/no_invite.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.no_invite.helpers({                                                                                           // 1
  afterSignupText: function () {                                                                                       // 2
    return Settings.get("afterSignupText");                                                                            // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.no_rights.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("no_rights");                                                                                     // 2
Template["no_rights"] = new Template("Template.no_rights", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog no-rights"                                                                  // 6
  }, "\n    ", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("link"));                                                                        // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.A({                                                                                      // 10
      href: function() {                                                                                               // 11
        return Spacebars.mustache(view.lookup("link"));                                                                // 12
      }                                                                                                                // 13
    }, Blaze.View("lookup:errorMessage", function() {                                                                  // 14
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 15
    })), "\n    " ];                                                                                                   // 16
  }, function() {                                                                                                      // 17
    return [ "\n      ", Blaze.View("lookup:errorMessage", function() {                                                // 18
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 19
    }), "\n    " ];                                                                                                    // 20
  }), "\n  ");                                                                                                         // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/no_rights.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.no_rights.helpers({                                                                                           // 1
  errorMessage: function () {                                                                                          // 2
    return !!this.message ? i18n.t(this.message) : i18n.t("sorry_you_dont_have_the_rights_to_view_this_page");         // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/errors/template.not_found.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("not_found");                                                                                     // 2
Template["not_found"] = new Template("Template.not_found", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid-small grid-block dialog"                                                                            // 6
  }, "\n		", HTML.H2(Blaze.View("lookup:_", function() {                                                               // 7
    return Spacebars.mustache(view.lookup("_"), "not_found");                                                          // 8
  })), "\n    ", HTML.P(Blaze.View("lookup:_", function() {                                                            // 9
    return Spacebars.mustache(view.lookup("_"), "were_sorry_whatever_you_were_looking_for_isnt_here");                 // 10
  })), "\n	");                                                                                                         // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/forms/template.urlCustomType.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afBootstrapUrl_bootstrap3");                                                                     // 2
Template["afBootstrapUrl_bootstrap3"] = new Template("Template.afBootstrapUrl_bootstrap3", (function() {               // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "text",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/forms/urlCustomType.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AutoForm.addInputType("bootstrap-url", {                                                                               // 1
  template: "afBootstrapUrl",                                                                                          // 2
  valueOut: function () {                                                                                              // 3
    var url = this.val();                                                                                              // 4
    if (!!url) {                                                                                                       // 5
      // add http:// if missing                                                                                        //
      if (url.substring(0, 7) !== "http://" && url.substring(0, 8) !== "https://") {                                   // 7
        url = "http://" + url;                                                                                         // 8
      }                                                                                                                //
      return url;                                                                                                      // 10
    } else {                                                                                                           //
      return null;                                                                                                     // 13
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.afBootstrapUrl_bootstrap3.helpers({                                                                           // 18
  atts: (function () {                                                                                                 // 19
    function addFormControlAtts() {                                                                                    // 19
      console.log(this);                                                                                               // 20
      var atts = _.clone(this.atts);                                                                                   // 21
      // Add bootstrap class                                                                                           //
      atts = AutoForm.Utility.addClass(atts, "form-control");                                                          // 23
      return atts;                                                                                                     // 24
    }                                                                                                                  //
                                                                                                                       //
    return addFormControlAtts;                                                                                         //
  })()                                                                                                                 //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/template.logo.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("logo");                                                                                          // 2
Template["logo"] = new Template("Template.logo", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "logo header-module"                                                                                      // 6
  }, "\n    ", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("logoUrl"));                                                                     // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.H1({                                                                                     // 10
      "class": "logo-image "                                                                                           // 11
    }, "\n        ", HTML.A({                                                                                          // 12
      href: "/"                                                                                                        // 13
    }, "\n          ", HTML.IMG({                                                                                      // 14
      src: function() {                                                                                                // 15
        return Spacebars.mustache(view.lookup("logoUrl"));                                                             // 16
      },                                                                                                               // 17
      alt: function() {                                                                                                // 18
        return Spacebars.mustache(view.lookup("getSetting"), "title", "Telescope");                                    // 19
      }                                                                                                                // 20
    }), "\n        "), "\n      "), "\n    " ];                                                                        // 21
  }, function() {                                                                                                      // 22
    return [ "\n      ", HTML.H1({                                                                                     // 23
      "class": "logo-text"                                                                                             // 24
    }, HTML.A({                                                                                                        // 25
      href: "/"                                                                                                        // 26
    }, Blaze.View("lookup:getSetting", function() {                                                                    // 27
      return Spacebars.mustache(view.lookup("getSetting"), "title", "Telescope");                                      // 28
    }))), "\n    " ];                                                                                                  // 29
  }), "\n    ", Blaze.If(function() {                                                                                  // 30
    return Spacebars.dataMustache(view.lookup("getSetting"), "tagline");                                               // 31
  }, function() {                                                                                                      // 32
    return [ "\n      ", HTML.H2({                                                                                     // 33
      "class": "tagline"                                                                                               // 34
    }, Blaze.View("lookup:getSetting", function() {                                                                    // 35
      return Spacebars.mustache(view.lookup("getSetting"), "tagline");                                                 // 36
    })), "\n    " ];                                                                                                   // 37
  }), "\n  ");                                                                                                         // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/logo.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.logo.helpers({                                                                                                // 1
  logoUrl: function () {                                                                                               // 2
    return Settings.get("logoUrl");                                                                                    // 3
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.logo.onRendered(function () {                                                                                 // 7
  $(".side-nav .logo-text").quickfit({                                                                                 // 8
    min: 16,                                                                                                           // 9
    max: 40,                                                                                                           // 10
    truncate: false                                                                                                    // 11
  });                                                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/template.mobile_nav.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("mobile_nav");                                                                                    // 2
Template["mobile_nav"] = new Template("Template.mobile_nav", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "mobile-nav dark-bg"                                                                                      // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "mobile-nav-inner"                                                                                        // 8
  }, "\n      ", HTML.UL({                                                                                             // 9
    "class": "mobile-menu"                                                                                             // 10
  }, "\n        ", Blaze._TemplateWith(function() {                                                                    // 11
    return {                                                                                                           // 12
      zone: Spacebars.call("mobileNav"),                                                                               // 13
      moduleClass: Spacebars.call("mobile-menu-item")                                                                  // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 17
  }), "\n      "), "\n    "), "\n  ");                                                                                 // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/mobile_nav.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.mobile_nav.events({                                                                                           // 1
  'click .mobile-nav a': function (e) {                                                                                // 2
    if ($(e.target).closest("a").attr("href") !== "#") {                                                               // 3
      $('body').removeClass('mobile-nav-open');                                                                        // 4
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/template.header.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("header");                                                                                        // 2
Template["header"] = new Template("Template.header", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.HEADER({                                                                                                 // 5
    "class": function() {                                                                                              // 6
      return [ "header ", Spacebars.mustache(view.lookup("headerClass")) ];                                            // 7
    }                                                                                                                  // 8
  }, "\n\n    ", HTML.A({                                                                                              // 9
    href: "#menu",                                                                                                     // 10
    "class": "mobile-only mobile-menu-button button"                                                                   // 11
  }, "\n      ", Blaze.View("lookup:icon", function() {                                                                // 12
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "menu"));                                         // 13
  }), "\n    "), "\n\n    ", Spacebars.include(view.lookupTemplate("logo")), "\n\n    ", Blaze.If(function() {         // 14
    return Spacebars.call(view.lookup("hasPrimaryNav"));                                                               // 15
  }, function() {                                                                                                      // 16
    return [ "\n      ", Blaze._TemplateWith(function() {                                                              // 17
      return {                                                                                                         // 18
        zone: Spacebars.call("primaryNav"),                                                                            // 19
        zoneClass: Spacebars.call("nav primary-nav desktop-nav header-module desktop-only"),                           // 20
        moduleClass: Spacebars.call("header-submodule")                                                                // 21
      };                                                                                                               // 22
    }, function() {                                                                                                    // 23
      return Spacebars.include(view.lookupTemplate("modules"));                                                        // 24
    }), "\n    " ];                                                                                                    // 25
  }), "\n\n    ", Blaze.If(function() {                                                                                // 26
    return Spacebars.call(view.lookup("hasSecondaryNav"));                                                             // 27
  }, function() {                                                                                                      // 28
    return [ "\n      ", Blaze._TemplateWith(function() {                                                              // 29
      return {                                                                                                         // 30
        zone: Spacebars.call("secondaryNav"),                                                                          // 31
        zoneClass: Spacebars.call("nav secondary-nav desktop-nav header-module desktop-only"),                         // 32
        moduleClass: Spacebars.call("header-submodule")                                                                // 33
      };                                                                                                               // 34
    }, function() {                                                                                                    // 35
      return Spacebars.include(view.lookupTemplate("modules"));                                                        // 36
    }), "\n    " ];                                                                                                    // 37
  }), "\n\n  ");                                                                                                       // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/header.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.header.helpers({                                                                                              // 1
  headerClass: function () {                                                                                           // 2
    var headerClass = "";                                                                                              // 3
    var bgBrightness = tinycolor(Settings.get('headerColor')).getBrightness();                                         // 4
    if (bgBrightness < 50) {                                                                                           // 5
      headerClass += " dark-bg";                                                                                       // 6
    } else if (bgBrightness < 130) {                                                                                   //
      headerClass += " medium-dark-bg";                                                                                // 8
    } else if (bgBrightness < 220) {                                                                                   //
      headerClass += " medium-light-bg";                                                                               // 10
    } else if (bgBrightness < 255) {                                                                                   //
      headerClass += " light-bg";                                                                                      // 12
    } else {                                                                                                           //
      headerClass += " white-bg";                                                                                      // 14
    }                                                                                                                  //
    return headerClass;                                                                                                // 16
  },                                                                                                                   //
  hasPrimaryNav: function () {                                                                                         // 18
    return !!Telescope.modules.get("primaryNav").length;                                                               // 19
  },                                                                                                                   //
  hasSecondaryNav: function () {                                                                                       // 21
    return !!Telescope.modules.get("secondaryNav").length;                                                             // 22
  },                                                                                                                   //
  dropdownClass: function () {                                                                                         // 24
    var dropdownClass = "";                                                                                            // 25
    // only use dropdowns for top nav                                                                                  //
    if (this.length > 3) {                                                                                             // 27
      dropdownClass += "long-dropdown";                                                                                // 28
    }                                                                                                                  //
    if (Settings.get('navLayout', 'top-nav') === 'top-nav' && getThemeSetting('useDropdowns', true)) {                 // 30
      dropdownClass += "has-dropdown";                                                                                 // 31
    } else {                                                                                                           //
      dropdownClass += "no-dropdown";                                                                                  // 33
    }                                                                                                                  //
    return dropdownClass;                                                                                              // 35
  },                                                                                                                   //
  hasMoreThanThreeItems: function () {                                                                                 // 37
    return this.length > 3;                                                                                            // 38
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.header.events({                                                                                               // 42
  'click .mobile-menu-button': function (e) {                                                                          // 43
    e.preventDefault();                                                                                                // 44
    e.stopPropagation(); // Make sure we don't immediately close the mobile nav again. See layout.js event handler.    // 45
    $('body').toggleClass('mobile-nav-open');                                                                          // 46
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/lib/client/templates/nav/template.submit_button.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("submit_button");                                                                                 // 2
Template["submit_button"] = new Template("Template.submit_button", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "submit-button ", Spacebars.mustache(view.lookup("moduleClass")) ];                                     // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    id: "submit",                                                                                                      // 10
    "class": "submit btn btn-primary",                                                                                 // 11
    href: function() {                                                                                                 // 12
      return Spacebars.mustache(view.lookup("pathFor"), "postSubmit");                                                 // 13
    }                                                                                                                  // 14
  }, Blaze.View("lookup:_", function() {                                                                               // 15
    return Spacebars.mustache(view.lookup("_"), "post");                                                               // 16
  })), "\n  ");                                                                                                        // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/ar.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                                  // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                 // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/bg.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                             // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/cs.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                                  // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/da.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                                    // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/de.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                                  // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/el.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                                  // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/en.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"menu":"Menu","view":"View","top":"Top","new":"New","best":"Best","digest":"Digest","scheduled":"Scheduled","users":"Users","settings":"Settings","admin":"Admin","post":"Post","toolbox":"Toolbox","sign_up_sign_in":"Register/Sign In","my_account":"My Account","view_profile":"View Profile","edit_account":"Edit Account","view_your_profile":"View your profile","edit_your_profile":"Edit your profile","you_are_already_logged_in":"You are already logged in","sorry_this_is_a_private_site_please_sign_up_first":"Sorry, this is a private site. Please register first.","thanks_for_signing_up":"Thanks for registering!","the_site_is_currently_invite_only_but_we_will_let_you_know_as_soon_as_a_spot_opens_up":"The site is currently invite-only, but we will let you know as soon as a spot opens up.","sorry_you_dont_have_the_rights_to_view_this_page":"Sorry, you don't have the rights to view this page.","sorry_you_do_not_have_the_rights_to_comments":"Sorry, you do not have the rights to leave comments at this time.","not_found":"Not Found!","were_sorry_whatever_you_were_looking_for_isnt_here":"We're sorry; whatever you were looking for isn't here..","disallowed_property_detected":"Disallowed property detected","sorry_you_do_not_have_access_to_this_page":"Sorry, you do not have access to this page","please_sign_in_first":"Please Sign In First.","sorry_you_have_to_be_an_admin_to_view_this_page":"Sorry, you  have to be an admin to view this page.","sorry_you_dont_have_permissions_to_add_new_items":"Sorry, you don't have permissions to add new items.","sorry_you_cannot_edit_this_post":"Sorry, you cannot edit this post.","you_need_to_login_and_be_an_admin_to_add_a_new_category":"You need to login and be an admin to add a new category.","you_need_to_login_or_be_invited_to_post_new_comments":"You need to login or be invited to post new comments.","please_wait":"Please wait ","seconds_before_commenting_again":" seconds before commenting again","your_comment_is_empty":"Your comment is empty.","you_dont_have_permission_to_delete_this_comment":"You don't have permission to delete this comment.","you_need_to_login_or_be_invited_to_post_new_stories":"You need to login or be invited to post new stories.","read_more":"Read more","your_account_has_been_approved":"Your account has been approved.","welcome_to":"Welcome to ","profile":"Profile","sign_out":"Sign Out","you_ve_been_signed_out":"You've been signed out. Come back soon!","invitedcount":"InvitedCount","actions":"Actions","invites_left":"invites left","id":"ID","github":"GitHub","site":"Site","submitted_posts":"Submitted Posts","upvoted_posts":"Upvoted Posts","downvoted_posts":"Downvoted Posts","pending":"Pending","loading":"Loading...","submit":"Submit","you_must_be_logged_in":"You must be logged in.","are_you_sure":"Are you sure?","please_log_in_first":"Please log in first.","please_log_in_to_comment":"Please log in to comment.","sign_in_sign_up_with_twitter":"Register/Sign Up with Twitter","most_popular_posts":"The most popular posts right now.","newest_posts":"The newest posts.","highest_ranked_posts_ever":"The all-time highest-ranked posts.","the_profile_of":"The profile of","posts_awaiting_moderation":"Posts awaiting moderation.","future_scheduled_posts":"Future scheduled posts.","users_dashboard":"Users dashboard.","telescope_settings_panel":"Telescope settings panel.","various_utilities":"Various utilities.","follow_on_twitter":"Follow on Twitter","like_on_facebook":"Like on Facebook","share_on_twitter":"Share on Twitter","share_on_facebook":"Share on Facebook","powered_by_telescope":"Powered by Telescope"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/es.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                         // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/et.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                                  // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/fr.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                        // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/hu.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                                // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/id.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                                     // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/it.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                                // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/ja.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                                    // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/kk.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                               // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/ko.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/nl.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                                // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/pl.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                                   // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/pt-BR.i18n.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                                      // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/ro.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                                 // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/ru.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                                 // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/sl.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                                           // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/sv.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                                 // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/th.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                                        // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/tr.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                                  // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/vi.i18n.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                           // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_core/packages/telescope_corei18n/zh-CN.i18n.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "project",                                                                                          // 2
    namespace = "project";                                                                                             // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                                         // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:core'] = {};

})();
