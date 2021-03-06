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
var __, deleteDummyContent, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/package-i18n.js                                                     //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
TAPi18n.packages["telescope:getting-started"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                          // 2
// define package's translation function (proxy to the i18next)                                           // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                          // 4
                                                                                                          // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/lib/getting_started.js                                              //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
Users.addField({                                                                                          // 1
  fieldName: 'telescope.isDummy',                                                                         // 2
  fieldSchema: {                                                                                          // 3
    type: Boolean,                                                                                        // 4
    optional: true,                                                                                       // 5
    autoform: {                                                                                           // 6
      omit: true                                                                                          // 7
    }                                                                                                     //
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
Posts.addField({                                                                                          // 12
  fieldName: 'dummySlug',                                                                                 // 13
  fieldSchema: {                                                                                          // 14
    type: String,                                                                                         // 15
    optional: true,                                                                                       // 16
    autoform: {                                                                                           // 17
      omit: true                                                                                          // 18
    }                                                                                                     //
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
Posts.addField({                                                                                          // 23
  fieldName: 'isDummy',                                                                                   // 24
  fieldSchema: {                                                                                          // 25
    type: Boolean,                                                                                        // 26
    optional: true,                                                                                       // 27
    autoform: {                                                                                           // 28
      omit: true                                                                                          // 29
    }                                                                                                     //
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
Comments.addField({                                                                                       // 34
  fieldName: 'isDummy',                                                                                   // 35
  fieldSchema: {                                                                                          // 36
    type: Boolean,                                                                                        // 37
    optional: true,                                                                                       // 38
    autoform: {                                                                                           // 39
      omit: true                                                                                          // 40
    }                                                                                                     //
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
/**                                                                                                       //
 * Copy over profile.isDummy to telescope.isDummy on user creation                                        //
 * @param {Object} user – the user object being iterated on and returned                                  //
 * @param {Object} options – user options                                                                 //
 */                                                                                                       //
function copyDummyProperty(user, options) {                                                               // 50
  if (typeof user.profile.isDummy !== "undefined") {                                                      // 51
    user.telescope.isDummy = user.profile.isDummy;                                                        // 52
  }                                                                                                       //
  return user;                                                                                            // 54
}                                                                                                         //
Telescope.callbacks.add("onCreateUser", copyDummyProperty);                                               // 56
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/lib/server/dummy_content.js                                         //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var toTitleCase = function (str) {                                                                        // 1
  return str.replace(/\w\S*/g, function (txt) {                                                           // 2
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();                                     // 2
  });                                                                                                     //
};                                                                                                        //
                                                                                                          //
var createPost = function (slug, postedAt, username, thumbnail) {                                         // 5
  var post = {                                                                                            // 6
    postedAt: postedAt,                                                                                   // 7
    body: Assets.getText("content/" + slug + ".md"),                                                      // 8
    title: toTitleCase(slug.replace(/_/g, ' ')),                                                          // 9
    dummySlug: slug,                                                                                      // 10
    isDummy: true,                                                                                        // 11
    userId: Meteor.users.findOne({ username: username })._id                                              // 12
  };                                                                                                      //
                                                                                                          //
  if (typeof thumbnail !== "undefined") post.thumbnailUrl = "/packages/telescope_getting-started/content/images/" + thumbnail;
                                                                                                          //
  Posts.submit(post);                                                                                     // 18
};                                                                                                        //
                                                                                                          //
var createComment = function (slug, username, body, parentBody) {                                         // 21
                                                                                                          //
  var comment = {                                                                                         // 23
    postId: Posts.findOne({ dummySlug: slug })._id,                                                       // 24
    userId: Meteor.users.findOne({ username: username })._id,                                             // 25
    body: body,                                                                                           // 26
    isDummy: true,                                                                                        // 27
    disableNotifications: true                                                                            // 28
  };                                                                                                      //
  var parentComment = Comments.findOne({ body: parentBody });                                             // 30
  if (parentComment) comment.parentCommentId = parentComment._id;                                         // 31
                                                                                                          //
  Comments.submit(comment);                                                                               // 34
};                                                                                                        //
                                                                                                          //
var createDummyUsers = function () {                                                                      // 37
  Accounts.createUser({                                                                                   // 38
    username: 'Bruce',                                                                                    // 39
    email: 'dummyuser1@telescopeapp.org',                                                                 // 40
    profile: {                                                                                            // 41
      isDummy: true                                                                                       // 42
    }                                                                                                     //
  });                                                                                                     //
  Accounts.createUser({                                                                                   // 45
    username: 'Arnold',                                                                                   // 46
    email: 'dummyuser2@telescopeapp.org',                                                                 // 47
    profile: {                                                                                            // 48
      isDummy: true                                                                                       // 49
    }                                                                                                     //
  });                                                                                                     //
  Accounts.createUser({                                                                                   // 52
    username: 'Julia',                                                                                    // 53
    email: 'dummyuser3@telescopeapp.org',                                                                 // 54
    profile: {                                                                                            // 55
      isDummy: true                                                                                       // 56
    }                                                                                                     //
  });                                                                                                     //
};                                                                                                        //
                                                                                                          //
var createDummyPosts = function () {                                                                      // 61
                                                                                                          //
  createPost("read_this_first", moment().toDate(), "Bruce", "telescope.png");                             // 63
                                                                                                          //
  createPost("deploying_telescope", moment().subtract(10, 'minutes').toDate(), "Arnold");                 // 65
                                                                                                          //
  createPost("customizing_telescope", moment().subtract(3, 'hours').toDate(), "Julia");                   // 67
                                                                                                          //
  createPost("getting_help", moment().subtract(1, 'days').toDate(), "Bruce", "stackoverflow.png");        // 69
                                                                                                          //
  createPost("removing_getting_started_posts", moment().subtract(2, 'days').toDate(), "Julia");           // 71
};                                                                                                        //
                                                                                                          //
var createDummyComments = function () {                                                                   // 75
                                                                                                          //
  createComment("read_this_first", "Bruce", "What an awesome app!");                                      // 77
                                                                                                          //
  createComment("deploying_telescope", "Arnold", "Deploy to da choppah!");                                // 79
  createComment("deploying_telescope", "Julia", "Do you really need to say this all the time?", "Deploy to da choppah!");
                                                                                                          //
  createComment("customizing_telescope", "Julia", "This is really cool!");                                // 82
                                                                                                          //
  createComment("removing_getting_started_posts", "Bruce", "Yippee ki-yay!");                             // 84
  createComment("removing_getting_started_posts", "Arnold", "I'll be back.", "Yippee ki-yay!");           // 85
};                                                                                                        //
                                                                                                          //
deleteDummyContent = function () {                                                                        // 89
  Meteor.users.remove({ 'profile.isDummy': true });                                                       // 90
  Posts.remove({ isDummy: true });                                                                        // 91
  Comments.remove({ isDummy: true });                                                                     // 92
};                                                                                                        //
                                                                                                          //
Meteor.methods({                                                                                          // 95
  addGettingStartedContent: function () {                                                                 // 96
    if (Users.is.admin(Meteor.user())) {                                                                  // 97
      createDummyUsers();                                                                                 // 98
      createDummyPosts();                                                                                 // 99
      createDummyComments();                                                                              // 100
    }                                                                                                     //
  },                                                                                                      //
  removeGettingStartedContent: function () {                                                              // 103
    if (Users.is.admin(Meteor.user())) deleteDummyContent();                                              // 104
  }                                                                                                       //
});                                                                                                       //
                                                                                                          //
Meteor.startup(function () {                                                                              // 109
  // insert dummy content only if createDummyContent hasn't happened and there aren't any posts in the db
  if (!Events.findOne({ name: 'createDummyContent' }) && !Posts.find().count()) {                         // 111
    createDummyUsers();                                                                                   // 112
    createDummyPosts();                                                                                   // 113
    createDummyComments();                                                                                // 114
    Events.log({ name: 'createDummyContent', unique: true, important: true });                            // 115
  }                                                                                                       //
});                                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ar.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                           // 8
  TAPi18n.translations["ar"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                // 12
  TAPi18n.translations["ar"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/bg.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                           // 8
  TAPi18n.translations["bg"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                // 12
  TAPi18n.translations["bg"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/cs.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                           // 8
  TAPi18n.translations["cs"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                // 12
  TAPi18n.translations["cs"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["cs"][namespace], {"what_an_awesome_app":"Jaká skvělá aplikace!"});         // 16
TAPi18n._registerServerTranslator("cs", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/da.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                           // 8
  TAPi18n.translations["da"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                // 12
  TAPi18n.translations["da"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("da", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/de.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                           // 8
  TAPi18n.translations["de"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                // 12
  TAPi18n.translations["de"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["de"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("de", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/el.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                           // 8
  TAPi18n.translations["el"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                // 12
  TAPi18n.translations["el"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("el", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/en.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
// integrate the fallback language translations                                                           // 8
translations = {};                                                                                        // 9
translations[namespace] = {"what_an_awesome_app":"What an awesome app!"};                                 // 10
TAPi18n._loadLangFileObject("en", translations);                                                          // 11
TAPi18n._registerServerTranslator("en", namespace);                                                       // 12
                                                                                                          // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/es.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                           // 8
  TAPi18n.translations["es"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                // 12
  TAPi18n.translations["es"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["es"][namespace], {"what_an_awesome_app":"¡Que App tan genial!"});          // 16
TAPi18n._registerServerTranslator("es", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/et.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                           // 8
  TAPi18n.translations["et"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                // 12
  TAPi18n.translations["et"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["et"][namespace], {"what_an_awesome_app":"Mis vinge app!"});                // 16
TAPi18n._registerServerTranslator("et", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/fr.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                           // 8
  TAPi18n.translations["fr"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                // 12
  TAPi18n.translations["fr"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["fr"][namespace], {"what_an_awesome_app":"Super app!"});                    // 16
TAPi18n._registerServerTranslator("fr", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/hu.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                           // 8
  TAPi18n.translations["hu"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                // 12
  TAPi18n.translations["hu"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/id.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                           // 8
  TAPi18n.translations["id"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                // 12
  TAPi18n.translations["id"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["id"][namespace], {"what_an_awesome_app":"Aplikasi keren!"});               // 16
TAPi18n._registerServerTranslator("id", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/it.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                           // 8
  TAPi18n.translations["it"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                // 12
  TAPi18n.translations["it"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["it"][namespace], {"what_an_awesome_app":"Che applicazione stupenda!"});    // 16
TAPi18n._registerServerTranslator("it", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ja.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                           // 8
  TAPi18n.translations["ja"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                // 12
  TAPi18n.translations["ja"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/kk.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                           // 8
  TAPi18n.translations["kk"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                // 12
  TAPi18n.translations["kk"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ko.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                           // 8
  TAPi18n.translations["ko"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                // 12
  TAPi18n.translations["ko"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["ko"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("ko", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/nl.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                           // 8
  TAPi18n.translations["nl"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                // 12
  TAPi18n.translations["nl"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/pl.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                           // 8
  TAPi18n.translations["pl"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                // 12
  TAPi18n.translations["pl"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["pl"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("pl", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/pt-BR.i18n.js                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                        // 8
  TAPi18n.translations["pt-BR"] = {};                                                                     // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                             // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                          // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {});                                                   // 16
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                    // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ro.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                           // 8
  TAPi18n.translations["ro"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                // 12
  TAPi18n.translations["ro"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/ru.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                           // 8
  TAPi18n.translations["ru"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                // 12
  TAPi18n.translations["ru"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/sl.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                           // 8
  TAPi18n.translations["sl"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                // 12
  TAPi18n.translations["sl"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["sl"][namespace], {"what_an_awesome_app":"Kak carski app!"});               // 16
TAPi18n._registerServerTranslator("sl", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/sv.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                           // 8
  TAPi18n.translations["sv"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                // 12
  TAPi18n.translations["sv"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["sv"][namespace], {"what_an_awesome_app":"Vilken fantastisk app!"});        // 16
TAPi18n._registerServerTranslator("sv", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/th.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                           // 8
  TAPi18n.translations["th"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                // 12
  TAPi18n.translations["th"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("th", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/tr.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                           // 8
  TAPi18n.translations["tr"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                // 12
  TAPi18n.translations["tr"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["tr"][namespace], {"what_an_awesome_app":"Ne harika bir uygulama!"});       // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/vi.i18n.js                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                           // 8
  TAPi18n.translations["vi"] = {};                                                                        // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                // 12
  TAPi18n.translations["vi"][namespace] = {};                                                             // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                      // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                       // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/telescope_getting-started/packages/telescope_getting-startedi18n/zh-CN.i18n.js                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _ = Package.underscore._,                                                                             // 1
    package_name = "telescope:getting-started",                                                           // 2
    namespace = "telescope:getting-started";                                                              // 3
                                                                                                          // 4
if (package_name != "project") {                                                                          // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                 // 6
}                                                                                                         // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                        // 8
  TAPi18n.translations["zh-CN"] = {};                                                                     // 9
}                                                                                                         // 10
                                                                                                          // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                             // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                          // 13
}                                                                                                         // 14
                                                                                                          // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                                   // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                    // 17
                                                                                                          // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:getting-started'] = {};

})();

//# sourceMappingURL=telescope_getting-started.js.map
