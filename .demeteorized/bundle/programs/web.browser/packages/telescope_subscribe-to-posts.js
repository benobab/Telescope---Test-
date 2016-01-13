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
var __, registerI18nTemplate, registerTemplate, non_package_templates, subscribeItem, unsubscribeItem, translations;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/package-i18n.js                                         //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
TAPi18n.packages["telescope:subscribe-to-posts"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                 // 2
// define package's translation function (proxy to the i18next)                                  // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                 // 4
// define the package's templates registrar                                                      // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:subscribe-to-posts");         // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                 // 8
// Record the list of templates prior to package load                                            // 9
var _ = Package.underscore._;                                                                    // 10
non_package_templates = _.keys(Template);                                                        // 11
                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/lib/subscribe-to-posts.js                               //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Users.addField({                                                                                 // 1
  fieldName: 'telescope.subscribedItems',                                                        // 2
  fieldSchema: {                                                                                 // 3
    type: Object,                                                                                // 4
    optional: true,                                                                              // 5
    blackbox: true,                                                                              // 6
    autoform: {                                                                                  // 7
      omit: true                                                                                 // 8
    }                                                                                            //
  }                                                                                              //
});                                                                                              //
                                                                                                 //
Posts.addField({                                                                                 // 13
  fieldName: 'subscribers',                                                                      // 14
  fieldSchema: {                                                                                 // 15
    type: [String],                                                                              // 16
    optional: true,                                                                              // 17
    autoform: {                                                                                  // 18
      omit: true                                                                                 // 19
    }                                                                                            //
  }                                                                                              //
});                                                                                              //
                                                                                                 //
Posts.addField({                                                                                 // 24
  fieldName: 'subscriberCount',                                                                  // 25
  fieldSchema: {                                                                                 // 26
    type: Number,                                                                                // 27
    optional: true,                                                                              // 28
    autoform: {                                                                                  // 29
      omit: true                                                                                 // 30
    }                                                                                            //
  }                                                                                              //
});                                                                                              //
                                                                                                 //
Telescope.modules.add("profileEdit", {                                                           // 35
  template: 'user_subscribed_posts',                                                             // 36
  order: 5                                                                                       // 37
});                                                                                              //
                                                                                                 //
Telescope.modules.add("commentThreadBottom", {                                                   // 40
  template: 'post_subscribe',                                                                    // 41
  order: 10                                                                                      // 42
});                                                                                              //
                                                                                                 //
Posts.views.add("userSubscribedPosts", function (terms) {                                        // 45
  var user = Meteor.users.findOne(terms.userId),                                                 // 46
      postsIds = [];                                                                             //
                                                                                                 //
  if (user && user.telescope.subscribedItems && user.telescope.subscribedItems.Posts) {          // 49
    postsIds = _.pluck(user.telescope.subscribedItems.Posts, "itemId");                          // 50
  }                                                                                              //
                                                                                                 //
  return {                                                                                       // 53
    find: { _id: { $in: postsIds } },                                                            // 54
    options: { limit: 5, sort: { postedAt: -1 } }                                                // 55
  };                                                                                             //
});                                                                                              //
                                                                                                 //
var hasSubscribedItem = function (item, user) {                                                  // 59
  return item.subscribers && item.subscribers.indexOf(user._id) != -1;                           // 60
};                                                                                               //
                                                                                                 //
var addSubscribedItem = function (userId, item, collectionName) {                                // 63
  var field = 'telescope.subscribedItems.' + collectionName;                                     // 64
  var add = {};                                                                                  // 65
  add[field] = item;                                                                             // 66
  Meteor.users.update({ _id: userId }, {                                                         // 67
    $addToSet: add                                                                               // 68
  });                                                                                            //
};                                                                                               //
                                                                                                 //
var removeSubscribedItem = function (userId, itemId, collectionName) {                           // 72
  var field = 'telescope.subscribedItems.' + collectionName;                                     // 73
  var remove = {};                                                                               // 74
  remove[field] = { itemId: itemId };                                                            // 75
  Meteor.users.update({ _id: userId }, {                                                         // 76
    $pull: remove                                                                                // 77
  });                                                                                            //
};                                                                                               //
                                                                                                 //
subscribeItem = function (collection, itemId, user) {                                            // 81
  var item = collection.findOne(itemId),                                                         // 82
      collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);   //
                                                                                                 //
  if (!user || !item || hasSubscribedItem(item, user)) return false;                             // 85
                                                                                                 //
  // author can't subscribe item                                                                 //
  if (item.userId && item.userId === user._id) return false;                                     // 89
                                                                                                 //
  // Subscribe                                                                                   //
  var result = collection.update({ _id: itemId, subscribers: { $ne: user._id } }, {              // 93
    $addToSet: { subscribers: user._id },                                                        // 94
    $inc: { subscriberCount: 1 }                                                                 // 95
  });                                                                                            //
                                                                                                 //
  if (result > 0) {                                                                              // 98
    // Add item to list of subscribed items                                                      //
    var obj = {                                                                                  // 100
      itemId: item._id,                                                                          // 101
      subscribedAt: new Date()                                                                   // 102
    };                                                                                           //
    addSubscribedItem(user._id, obj, collectionName);                                            // 104
  }                                                                                              //
                                                                                                 //
  return true;                                                                                   // 107
};                                                                                               //
                                                                                                 //
unsubscribeItem = function (collection, itemId, user) {                                          // 110
  var user = Meteor.user(),                                                                      // 111
      item = collection.findOne(itemId),                                                         //
      collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);   //
                                                                                                 //
  if (!user || !item || !hasSubscribedItem(item, user)) return false;                            // 115
                                                                                                 //
  // Unsubscribe                                                                                 //
  var result = collection.update({ _id: itemId, subscribers: user._id }, {                       // 119
    $pull: { subscribers: user._id },                                                            // 120
    $inc: { subscriberCount: -1 }                                                                // 121
  });                                                                                            //
                                                                                                 //
  if (result > 0) {                                                                              // 124
    // Remove item from list of subscribed items                                                 //
    removeSubscribedItem(user._id, itemId, collectionName);                                      // 126
  }                                                                                              //
  return true;                                                                                   // 128
};                                                                                               //
                                                                                                 //
Meteor.methods({                                                                                 // 131
  subscribePost: function (postId) {                                                             // 132
    check(postId, String);                                                                       // 133
    return subscribeItem.call(this, Posts, postId, Meteor.user());                               // 134
  },                                                                                             //
  unsubscribePost: function (postId) {                                                           // 136
    check(postId, String);                                                                       // 137
    return unsubscribeItem.call(this, Posts, postId, Meteor.user());                             // 138
  }                                                                                              //
});                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/lib/client/templates/template.post_subscribe.js         //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("post_subscribe");                                                          // 2
Template["post_subscribe"] = new Template("Template.post_subscribe", (function() {               // 3
  var view = this;                                                                               // 4
  return Blaze.If(function() {                                                                   // 5
    return Spacebars.call(view.lookup("canSubscribe"));                                          // 6
  }, function() {                                                                                // 7
    return [ "\n    ", HTML.DIV({                                                                // 8
      "class": "post-subscribe module grid-block"                                                // 9
    }, "\n      ", Blaze.If(function() {                                                         // 10
      return Spacebars.call(view.lookup("subscribed"));                                          // 11
    }, function() {                                                                              // 12
      return [ "\n        ", HTML.A({                                                            // 13
        "class": "unsubscribe-link",                                                             // 14
        href: "#"                                                                                // 15
      }, "\n          ", HTML.SPAN(Blaze.View("lookup:_", function() {                           // 16
        return Spacebars.mustache(view.lookup("_"), "unsubscribe_from_thread");                  // 17
      })), "\n        "), "\n      " ];                                                          // 18
    }, function() {                                                                              // 19
      return [ "\n        ", HTML.A({                                                            // 20
        "class": "subscribe-link",                                                               // 21
        href: "#"                                                                                // 22
      }, "\n          ", HTML.SPAN(Blaze.View("lookup:_", function() {                           // 23
        return Spacebars.mustache(view.lookup("_"), "subscribe_to_thread");                      // 24
      })), "\n        "), "\n      " ];                                                          // 25
    }), "\n    "), "\n  " ];                                                                     // 26
  });                                                                                            // 27
}));                                                                                             // 28
                                                                                                 // 29
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/lib/client/templates/post_subscribe.js                  //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Template.post_subscribe.helpers({                                                                // 1
  canSubscribe: function () {                                                                    // 2
    // you cannot subscribe to your own posts                                                    //
    return Meteor.userId() && this.userId !== Meteor.userId();                                   // 4
  },                                                                                             //
  subscribed: function () {                                                                      // 6
    var user = Meteor.user();                                                                    // 7
    if (!user) return false;                                                                     // 8
                                                                                                 //
    return _.include(this.subscribers, user._id);                                                // 10
  }                                                                                              //
});                                                                                              //
                                                                                                 //
Template.post_subscribe.events({                                                                 // 14
  'click .subscribe-link': function (e, instance) {                                              // 15
    e.preventDefault();                                                                          // 16
    if (this.userId === Meteor.userId()) return;                                                 // 17
                                                                                                 //
    var post = this;                                                                             // 20
                                                                                                 //
    if (!Meteor.user()) {                                                                        // 22
      FlowRouter.go('atSignIn');                                                                 // 23
      Messages.flash(i18n.t("please_log_in_first"), "info");                                     // 24
    }                                                                                            //
                                                                                                 //
    Meteor.call('subscribePost', post._id, function (error, result) {                            // 27
      if (result) Events.track("post subscribed", { '_id': post._id });                          // 28
    });                                                                                          //
  },                                                                                             //
                                                                                                 //
  'click .unsubscribe-link': function (e, instance) {                                            // 33
    e.preventDefault();                                                                          // 34
    var post = this;                                                                             // 35
                                                                                                 //
    if (!Meteor.user()) {                                                                        // 37
      FlowRouter.go('atSignIn');                                                                 // 38
      Messages.flash(i18n.t("please_log_in_first"), "info");                                     // 39
    }                                                                                            //
                                                                                                 //
    Meteor.call('unsubscribePost', post._id, function (error, result) {                          // 42
      if (result) Events.track("post unsubscribed", { '_id': post._id });                        // 43
    });                                                                                          //
  }                                                                                              //
});                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/lib/client/templates/template.user_subscribed_posts.js  //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
                                                                                                 // 1
Template.__checkName("user_subscribed_posts");                                                   // 2
Template["user_subscribed_posts"] = new Template("Template.user_subscribed_posts", (function() {
  var view = this;                                                                               // 4
  return HTML.DIV({                                                                              // 5
    "class": "user-profile-subscribed grid grid-small grid-module "                              // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {                                       // 7
    return Spacebars.mustache(view.lookup("_"), "subscribed_posts");                             // 8
  })), "\n    ", Blaze._TemplateWith(function() {                                                // 9
    return Spacebars.call(view.lookup("arguments"));                                             // 10
  }, function() {                                                                                // 11
    return Spacebars.include(view.lookupTemplate("posts_list_controller"));                      // 12
  }), "\n  ");                                                                                   // 13
}));                                                                                             // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/lib/client/templates/user_subscribed_posts.js           //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
Template.user_subscribed_posts.helpers({                                                         // 1
  arguments: function () {                                                                       // 2
    var user = this;                                                                             // 3
    return {                                                                                     // 4
      template: "posts_list_compact",                                                            // 5
      options: {                                                                                 // 6
        currentUser: user,                                                                       // 7
        fieldLabel: i18n.t("subscribedAt"),                                                      // 8
        fieldValue: function (post) {                                                            // 9
          var user = this.currentUser;                                                           // 10
          var item = _.findWhere(user.telescope.subscribedItems.Posts, { itemId: post._id });    // 11
          return moment(item.subscribedAt).format("MM/DD/YYYY, HH:mm");                          // 12
        }                                                                                        //
      },                                                                                         //
      terms: {                                                                                   // 15
        view: 'userSubscribedPosts',                                                             // 16
        userId: user._id,                                                                        // 17
        limit: 5                                                                                 // 18
      }                                                                                          //
    };                                                                                           //
  }                                                                                              //
});                                                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ar.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                   // 8
                                                                                                 // 9
for (var i = 0; i < package_templates.length; i++) {                                             // 10
  var package_template = package_templates[i];                                                   // 11
                                                                                                 // 12
  registerI18nTemplate(package_template);                                                        // 13
}                                                                                                // 14
                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/bg.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/cs.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/da.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/de.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/el.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/en.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
// integrate the fallback language translations                                                  // 8
translations = {};                                                                               // 9
translations[namespace] = {"subscribed_posts":"Subscribed Posts","subscribe_to_thread":"Subscribe to comment thread","unsubscribe_from_thread":"Unsubscribe from comment thread"};
TAPi18n._loadLangFileObject("en", translations);                                                 // 11
                                                                                                 // 12
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/es.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/et.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/fr.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/hu.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/id.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/it.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ja.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/kk.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ko.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/nl.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/pl.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/pt-BR.i18n.js //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ro.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ru.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/sl.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/sv.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/th.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/tr.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/vi.i18n.js    //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                               //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/zh-CN.i18n.js //
//                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                 //
var _ = Package.underscore._,                                                                    // 1
    package_name = "telescope:subscribe-to-posts",                                               // 2
    namespace = "telescope:subscribe-to-posts";                                                  // 3
                                                                                                 // 4
if (package_name != "project") {                                                                 // 5
    namespace = TAPi18n.packages[package_name].namespace;                                        // 6
}                                                                                                // 7
                                                                                                 // 8
///////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:subscribe-to-posts'] = {
  subscribeItem: subscribeItem,
  unsubscribeItem: unsubscribeItem
};

})();
