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
var __, subscribeItem, unsubscribeItem, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/package-i18n.js                                       //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
TAPi18n.packages["telescope:subscribe-to-posts"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                               // 2
// define package's translation function (proxy to the i18next)                                // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                               // 4
                                                                                               // 5
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/lib/subscribe-to-posts.js                             //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Users.addField({                                                                               // 1
  fieldName: 'telescope.subscribedItems',                                                      // 2
  fieldSchema: {                                                                               // 3
    type: Object,                                                                              // 4
    optional: true,                                                                            // 5
    blackbox: true,                                                                            // 6
    autoform: {                                                                                // 7
      omit: true                                                                               // 8
    }                                                                                          //
  }                                                                                            //
});                                                                                            //
                                                                                               //
Posts.addField({                                                                               // 13
  fieldName: 'subscribers',                                                                    // 14
  fieldSchema: {                                                                               // 15
    type: [String],                                                                            // 16
    optional: true,                                                                            // 17
    autoform: {                                                                                // 18
      omit: true                                                                               // 19
    }                                                                                          //
  }                                                                                            //
});                                                                                            //
                                                                                               //
Posts.addField({                                                                               // 24
  fieldName: 'subscriberCount',                                                                // 25
  fieldSchema: {                                                                               // 26
    type: Number,                                                                              // 27
    optional: true,                                                                            // 28
    autoform: {                                                                                // 29
      omit: true                                                                               // 30
    }                                                                                          //
  }                                                                                            //
});                                                                                            //
                                                                                               //
Telescope.modules.add("profileEdit", {                                                         // 35
  template: 'user_subscribed_posts',                                                           // 36
  order: 5                                                                                     // 37
});                                                                                            //
                                                                                               //
Telescope.modules.add("commentThreadBottom", {                                                 // 40
  template: 'post_subscribe',                                                                  // 41
  order: 10                                                                                    // 42
});                                                                                            //
                                                                                               //
Posts.views.add("userSubscribedPosts", function (terms) {                                      // 45
  var user = Meteor.users.findOne(terms.userId),                                               // 46
      postsIds = [];                                                                           //
                                                                                               //
  if (user && user.telescope.subscribedItems && user.telescope.subscribedItems.Posts) {        // 49
    postsIds = _.pluck(user.telescope.subscribedItems.Posts, "itemId");                        // 50
  }                                                                                            //
                                                                                               //
  return {                                                                                     // 53
    find: { _id: { $in: postsIds } },                                                          // 54
    options: { limit: 5, sort: { postedAt: -1 } }                                              // 55
  };                                                                                           //
});                                                                                            //
                                                                                               //
var hasSubscribedItem = function (item, user) {                                                // 59
  return item.subscribers && item.subscribers.indexOf(user._id) != -1;                         // 60
};                                                                                             //
                                                                                               //
var addSubscribedItem = function (userId, item, collectionName) {                              // 63
  var field = 'telescope.subscribedItems.' + collectionName;                                   // 64
  var add = {};                                                                                // 65
  add[field] = item;                                                                           // 66
  Meteor.users.update({ _id: userId }, {                                                       // 67
    $addToSet: add                                                                             // 68
  });                                                                                          //
};                                                                                             //
                                                                                               //
var removeSubscribedItem = function (userId, itemId, collectionName) {                         // 72
  var field = 'telescope.subscribedItems.' + collectionName;                                   // 73
  var remove = {};                                                                             // 74
  remove[field] = { itemId: itemId };                                                          // 75
  Meteor.users.update({ _id: userId }, {                                                       // 76
    $pull: remove                                                                              // 77
  });                                                                                          //
};                                                                                             //
                                                                                               //
subscribeItem = function (collection, itemId, user) {                                          // 81
  var item = collection.findOne(itemId),                                                       // 82
      collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);
                                                                                               //
  if (!user || !item || hasSubscribedItem(item, user)) return false;                           // 85
                                                                                               //
  // author can't subscribe item                                                               //
  if (item.userId && item.userId === user._id) return false;                                   // 89
                                                                                               //
  // Subscribe                                                                                 //
  var result = collection.update({ _id: itemId, subscribers: { $ne: user._id } }, {            // 93
    $addToSet: { subscribers: user._id },                                                      // 94
    $inc: { subscriberCount: 1 }                                                               // 95
  });                                                                                          //
                                                                                               //
  if (result > 0) {                                                                            // 98
    // Add item to list of subscribed items                                                    //
    var obj = {                                                                                // 100
      itemId: item._id,                                                                        // 101
      subscribedAt: new Date()                                                                 // 102
    };                                                                                         //
    addSubscribedItem(user._id, obj, collectionName);                                          // 104
  }                                                                                            //
                                                                                               //
  return true;                                                                                 // 107
};                                                                                             //
                                                                                               //
unsubscribeItem = function (collection, itemId, user) {                                        // 110
  var user = Meteor.user(),                                                                    // 111
      item = collection.findOne(itemId),                                                       //
      collectionName = collection._name.slice(0, 1).toUpperCase() + collection._name.slice(1);
                                                                                               //
  if (!user || !item || !hasSubscribedItem(item, user)) return false;                          // 115
                                                                                               //
  // Unsubscribe                                                                               //
  var result = collection.update({ _id: itemId, subscribers: user._id }, {                     // 119
    $pull: { subscribers: user._id },                                                          // 120
    $inc: { subscriberCount: -1 }                                                              // 121
  });                                                                                          //
                                                                                               //
  if (result > 0) {                                                                            // 124
    // Remove item from list of subscribed items                                               //
    removeSubscribedItem(user._id, itemId, collectionName);                                    // 126
  }                                                                                            //
  return true;                                                                                 // 128
};                                                                                             //
                                                                                               //
Meteor.methods({                                                                               // 131
  subscribePost: function (postId) {                                                           // 132
    check(postId, String);                                                                     // 133
    return subscribeItem.call(this, Posts, postId, Meteor.user());                             // 134
  },                                                                                           //
  unsubscribePost: function (postId) {                                                         // 136
    check(postId, String);                                                                     // 137
    return unsubscribeItem.call(this, Posts, postId, Meteor.user());                           // 138
  }                                                                                            //
});                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/lib/server/publications.js                            //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Meteor.publish('userSubscribedPosts', function (terms) {                                       // 1
                                                                                               //
  terms.userId = this.userId; // add userId to terms                                           // 3
                                                                                               //
  var parameters = Posts.parameters.get(terms);                                                // 5
  var posts = Posts.find(parameters.find, parameters.options);                                 // 6
  return posts;                                                                                // 7
});                                                                                            //
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ar.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                // 8
  TAPi18n.translations["ar"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                     // 12
  TAPi18n.translations["ar"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("ar", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/bg.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                // 8
  TAPi18n.translations["bg"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                     // 12
  TAPi18n.translations["bg"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("bg", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/cs.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                // 8
  TAPi18n.translations["cs"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                     // 12
  TAPi18n.translations["cs"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["cs"][namespace], {"subscribed_posts":"Odebírané příspěvky","subscribe_to_thread":"Odebírat komentáře","unsubscribe_from_thread":"Odhlásit se z odběru komentářů"});
TAPi18n._registerServerTranslator("cs", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/da.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                // 8
  TAPi18n.translations["da"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                     // 12
  TAPi18n.translations["da"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("da", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/de.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                // 8
  TAPi18n.translations["de"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                     // 12
  TAPi18n.translations["de"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["de"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("de", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/el.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                // 8
  TAPi18n.translations["el"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                     // 12
  TAPi18n.translations["el"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("el", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/en.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
// integrate the fallback language translations                                                // 8
translations = {};                                                                             // 9
translations[namespace] = {"subscribed_posts":"Subscribed Posts","subscribe_to_thread":"Subscribe to comment thread","unsubscribe_from_thread":"Unsubscribe from comment thread"};
TAPi18n._loadLangFileObject("en", translations);                                               // 11
TAPi18n._registerServerTranslator("en", namespace);                                            // 12
                                                                                               // 13
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/es.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                // 8
  TAPi18n.translations["es"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                     // 12
  TAPi18n.translations["es"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["es"][namespace], {"subscribed_posts":"Posts suscritos","subscribe_to_thread":"Suscribirse a esta conversación","unsubscribe_from_thread":"Cancelar la suscripción a esta conversación"});
TAPi18n._registerServerTranslator("es", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/et.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                // 8
  TAPi18n.translations["et"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                     // 12
  TAPi18n.translations["et"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["et"][namespace], {"subscribed_posts":"Tellitud postitused","subscribe_to_thread":"Liitu, et teemat kommenteerida","unsubscribe_from_thread":"Loobu teema kommenteerimisest"});
TAPi18n._registerServerTranslator("et", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/fr.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                // 8
  TAPi18n.translations["fr"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                     // 12
  TAPi18n.translations["fr"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["fr"][namespace], {"subscribed_posts":"Posts auxquels vous êtes abonnés","subscribe_to_thread":"S'abonner au fil de commentaires","unsubscribe_from_thread":"Se désabonner du fil de commentaires"});
TAPi18n._registerServerTranslator("fr", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/hu.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                // 8
  TAPi18n.translations["hu"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                     // 12
  TAPi18n.translations["hu"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("hu", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/id.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                // 8
  TAPi18n.translations["id"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                     // 12
  TAPi18n.translations["id"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["id"][namespace], {"subscribed_posts":"Postingan yang Terlanggan","subscribe_to_thread":"Berlangganan komentar thread ini","unsubscribe_from_thread":"Berhenti berlangganan dari komentar thread ini"});
TAPi18n._registerServerTranslator("id", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/it.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                // 8
  TAPi18n.translations["it"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                     // 12
  TAPi18n.translations["it"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["it"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("it", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ja.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                // 8
  TAPi18n.translations["ja"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                     // 12
  TAPi18n.translations["ja"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("ja", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/kk.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                // 8
  TAPi18n.translations["kk"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                     // 12
  TAPi18n.translations["kk"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("kk", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ko.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                // 8
  TAPi18n.translations["ko"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                     // 12
  TAPi18n.translations["ko"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["ko"][namespace], {"subscribed_posts":"구독 게시물","subscribe_to_thread":"댓글 구독하기","unsubscribe_from_thread":"댓글 구독취소"});
TAPi18n._registerServerTranslator("ko", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/nl.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                // 8
  TAPi18n.translations["nl"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                     // 12
  TAPi18n.translations["nl"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("nl", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/pl.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                // 8
  TAPi18n.translations["pl"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                     // 12
  TAPi18n.translations["pl"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["pl"][namespace], {"subscribed_posts":"Posty które subskrybujesz","subscribe_to_thread":"Subskrybuj","unsubscribe_from_thread":"Nie subskrybuj"});
TAPi18n._registerServerTranslator("pl", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/pt-BR.i18n. //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                             // 8
  TAPi18n.translations["pt-BR"] = {};                                                          // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                  // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                               // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"subscribed_posts":"Postagens inscritas","subscribe_to_thread":"Inscreva-se aos comentários","unsubscribe_from_thread":"Desinscreva-se dos comentários"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                         // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ro.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                // 8
  TAPi18n.translations["ro"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                     // 12
  TAPi18n.translations["ro"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("ro", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/ru.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                // 8
  TAPi18n.translations["ru"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                     // 12
  TAPi18n.translations["ru"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("ru", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/sl.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                // 8
  TAPi18n.translations["sl"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                     // 12
  TAPi18n.translations["sl"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["sl"][namespace], {"subscribed_posts":"Naročnine na Objave","subscribe_to_thread":"Naročite se na komentarje","unsubscribe_from_thread":"Odjavite se od komentarjev"});
TAPi18n._registerServerTranslator("sl", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/sv.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                // 8
  TAPi18n.translations["sv"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                     // 12
  TAPi18n.translations["sv"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["sv"][namespace], {"subscribed_posts":"Bevakade inlägg","subscribe_to_thread":"Prenumerera på kommentarstråd","unsubscribe_from_thread":"Avprenumerera på kommentarstråd"});
TAPi18n._registerServerTranslator("sv", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/th.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                // 8
  TAPi18n.translations["th"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                     // 12
  TAPi18n.translations["th"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("th", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/tr.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                // 8
  TAPi18n.translations["tr"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                     // 12
  TAPi18n.translations["tr"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["tr"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("tr", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/vi.i18n.js  //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                // 8
  TAPi18n.translations["vi"] = {};                                                             // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                     // 12
  TAPi18n.translations["vi"][namespace] = {};                                                  // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                           // 16
TAPi18n._registerServerTranslator("vi", namespace);                                            // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/telescope_subscribe-to-posts/packages/telescope_subscribe-to-postsi18n/zh-CN.i18n. //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var _ = Package.underscore._,                                                                  // 1
    package_name = "telescope:subscribe-to-posts",                                             // 2
    namespace = "telescope:subscribe-to-posts";                                                // 3
                                                                                               // 4
if (package_name != "project") {                                                               // 5
    namespace = TAPi18n.packages[package_name].namespace;                                      // 6
}                                                                                              // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                             // 8
  TAPi18n.translations["zh-CN"] = {};                                                          // 9
}                                                                                              // 10
                                                                                               // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                  // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                               // 13
}                                                                                              // 14
                                                                                               // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                        // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                         // 17
                                                                                               // 18
/////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:subscribe-to-posts'] = {
  subscribeItem: subscribeItem,
  unsubscribeItem: unsubscribeItem
};

})();

//# sourceMappingURL=telescope_subscribe-to-posts.js.map
