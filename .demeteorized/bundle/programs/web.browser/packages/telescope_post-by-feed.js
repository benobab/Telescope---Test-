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
var Feeds, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/feeds.js                                               //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Feeds = new Mongo.Collection('feeds');                                                        // 1
                                                                                              //
Feeds.schema = new SimpleSchema({                                                             // 3
  url: {                                                                                      // 4
    type: String,                                                                             // 5
    regEx: SimpleSchema.RegEx.Url,                                                            // 6
    editableBy: ["admin"]                                                                     // 7
  },                                                                                          //
  userId: {                                                                                   // 9
    type: String,                                                                             // 10
    label: 'feedUser',                                                                        // 11
    editableBy: ["admin"],                                                                    // 12
    autoform: {                                                                               // 13
      instructions: 'Posts will be assigned to this user.',                                   // 14
      options: function () {                                                                  // 15
        var users = Meteor.users.find().map(function (user) {                                 // 16
          return {                                                                            // 17
            value: user._id,                                                                  // 18
            label: Users.getDisplayName(user)                                                 // 19
          };                                                                                  //
        });                                                                                   //
        return users;                                                                         // 22
      }                                                                                       //
    }                                                                                         //
  },                                                                                          //
  categories: {                                                                               // 26
    type: [String],                                                                           // 27
    label: 'categories',                                                                      // 28
    optional: true,                                                                           // 29
    editableBy: ["admin"],                                                                    // 30
    autoform: {                                                                               // 31
      instructions: 'Posts will be assigned to this category.',                               // 32
      noselect: true,                                                                         // 33
      editable: true,                                                                         // 34
      options: function () {                                                                  // 35
        var categories = Categories.find().map(function (category) {                          // 36
          return {                                                                            // 37
            value: category._id,                                                              // 38
            label: category.name                                                              // 39
          };                                                                                  //
        });                                                                                   //
        return categories;                                                                    // 42
      }                                                                                       //
    }                                                                                         //
  }                                                                                           //
});                                                                                           //
                                                                                              //
Meteor.startup(function () {                                                                  // 48
  Feeds.internationalize();                                                                   // 49
});                                                                                           //
                                                                                              //
Feeds.attachSchema(Feeds.schema);                                                             // 52
                                                                                              //
// used to keep track of which feed a post was imported from                                  //
var feedIdProperty = {                                                                        // 55
  fieldName: 'feedId',                                                                        // 56
  fieldSchema: {                                                                              // 57
    type: String,                                                                             // 58
    label: 'feedId',                                                                          // 59
    optional: true,                                                                           // 60
    autoform: {                                                                               // 61
      omit: true                                                                              // 62
    }                                                                                         //
  }                                                                                           //
};                                                                                            //
Posts.addField(feedIdProperty);                                                               // 66
                                                                                              //
// the RSS ID of the post in its original feed                                                //
var feedItemIdProperty = {                                                                    // 69
  fieldName: 'feedItemId',                                                                    // 70
  fieldSchema: {                                                                              // 71
    type: String,                                                                             // 72
    label: 'feedItemId',                                                                      // 73
    optional: true,                                                                           // 74
    autoform: {                                                                               // 75
      omit: true                                                                              // 76
    }                                                                                         //
  }                                                                                           //
};                                                                                            //
Posts.addField(feedItemIdProperty);                                                           // 80
                                                                                              //
Meteor.startup(function () {                                                                  // 82
  Feeds.allow({                                                                               // 83
    insert: Users.is.adminById,                                                               // 84
    update: Users.is.adminById,                                                               // 85
    remove: Users.is.adminById                                                                // 86
  });                                                                                         //
                                                                                              //
  Meteor.methods({                                                                            // 89
    insertFeed: function (feedUrl) {                                                          // 90
      check(feedUrl, Feeds.schema);                                                           // 91
                                                                                              //
      if (Feeds.findOne({ url: feedUrl.url })) throw new Meteor.Error('already-exists', i18n.t('feed_already_exists'));
                                                                                              //
      if (!Meteor.user() || !Users.is.admin(Meteor.user())) throw new Meteor.Error('login-required', i18n.t('you_need_to_login_and_be_an_admin_to_add_a_new_feed'));
                                                                                              //
      return Feeds.insert(feedUrl);                                                           // 99
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
                                                                                              //
Telescope.menuItems.add("adminMenu", {                                                        // 104
  route: "adminFeeds",                                                                        // 105
  label: "feeds",                                                                             // 106
  description: "import_new_posts_from_feeds"                                                  // 107
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/routes.js                                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Telescope.adminRoutes.route('/feeds', {                                                       // 1
  name: "adminFeeds",                                                                         // 2
  action: function (params, queryParams) {                                                    // 3
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "feeds" });                  // 4
  }                                                                                           //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/client/templates/template.feeds.js                     //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("feeds");                                                                // 2
Template["feeds"] = new Template("Template.feeds", (function() {                              // 3
  var view = this;                                                                            // 4
  return [ HTML.DIV({                                                                         // 5
    "class": "form-well add-feed"                                                             // 6
  }, "\n    ", HTML.Raw("<h3>Add new feed:</h3>"), "\n    ", Blaze._TemplateWith(function() {
    return {                                                                                  // 8
      collection: Spacebars.call("Feeds"),                                                    // 9
      id: Spacebars.call("insertFeedForm"),                                                   // 10
      type: Spacebars.call("insert"),                                                         // 11
      "label-class": Spacebars.call("control-label"),                                         // 12
      "input-col-class": Spacebars.call("controls"),                                          // 13
      template: Spacebars.call("bootstrap3-horizontal")                                       // 14
    };                                                                                        // 15
  }, function() {                                                                             // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                               // 17
  }), "\n  "), "\n  ", Blaze._TemplateWith(function() {                                       // 18
    return {                                                                                  // 19
      ready: Spacebars.call(view.templateInstance().subscriptionsReady())                     // 20
    };                                                                                        // 21
  }, function() {                                                                             // 22
    return Spacebars.include(view.lookupTemplate("loader"), function() {                      // 23
      return [ "\n    ", Blaze.Each(function() {                                              // 24
        return Spacebars.call(view.lookup("feeds"));                                          // 25
      }, function() {                                                                         // 26
        return [ "\n      ", Spacebars.include(view.lookupTemplate("feed_item")), "\n    " ];
      }), "\n  " ];                                                                           // 28
    });                                                                                       // 29
  }) ];                                                                                       // 30
}));                                                                                          // 31
                                                                                              // 32
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/client/templates/feeds.js                              //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Template.feeds.onCreated(function () {                                                        // 1
  var template = this;                                                                        // 2
  template.subscribe('feeds');                                                                // 3
  template.subscribe('allUsersAdmin');                                                        // 4
});                                                                                           //
                                                                                              //
Template.feeds.helpers({                                                                      // 7
  feeds: function () {                                                                        // 8
    return Feeds.find({}, { sort: { url: 1 } });                                              // 9
  }                                                                                           //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/client/templates/template.feed_item.js                 //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("feed_item");                                                            // 2
Template["feed_item"] = new Template("Template.feed_item", (function() {                      // 3
  var view = this;                                                                            // 4
  return HTML.DIV({                                                                           // 5
    "class": "form-module"                                                                    // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                               // 7
    return {                                                                                  // 8
      collection: Spacebars.call("Feeds"),                                                    // 9
      id: Spacebars.call(view.lookup("formId")),                                              // 10
      type: Spacebars.call("update"),                                                         // 11
      doc: Spacebars.call(view.lookup(".")),                                                  // 12
      "label-class": Spacebars.call("control-label"),                                         // 13
      "input-col-class": Spacebars.call("controls"),                                          // 14
      template: Spacebars.call("bootstrap3-horizontal")                                       // 15
    };                                                                                        // 16
  }, function() {                                                                             // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                               // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                      // 19
}));                                                                                          // 20
                                                                                              // 21
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/lib/client/templates/feed_item.js                          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Meteor.startup(function () {                                                                  // 1
  Template.feed_item.helpers({                                                                // 2
    formId: function () {                                                                     // 3
      return 'updateFeed-' + this._id;                                                        // 4
    }                                                                                         //
  });                                                                                         //
                                                                                              //
  Template.feed_item.events({                                                                 // 8
    'click .delete-link': function (e, instance) {                                            // 9
      e.preventDefault();                                                                     // 10
      if (confirm("Delete feed?")) {                                                          // 11
        Feeds.remove(instance.data._id);                                                      // 12
      }                                                                                       //
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ar.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                         // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                        // 10
                                                                                              // 11
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/bg.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                    // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/cs.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/da.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                           // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/de.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/el.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/en.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
// integrate the fallback language translations                                               // 8
translations = {};                                                                            // 9
translations[namespace] = {"feeds":"Feeds","feed_already_exists":"A feed with the same URL already exists.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"You need to log in and be an admin to add a new feed.","import_new_posts_from_feeds":"Import new posts from feeds."};
TAPi18n._loadLangFileObject("en", translations);                                              // 11
                                                                                              // 12
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/es.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/et.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/fr.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                               // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/hu.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/id.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                            // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/it.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ja.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                           // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/kk.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                      // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ko.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                             // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/nl.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/pl.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                          // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/pt-BR.i18n.js          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];             // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ro.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ru.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/sl.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                  // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/sv.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/th.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                               // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/tr.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/vi.i18n.js             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                  // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/zh-CN.i18n.js          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:post-by-feed'] = {
  Feeds: Feeds
};

})();
