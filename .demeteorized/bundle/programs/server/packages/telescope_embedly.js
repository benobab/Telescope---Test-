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
var __, getEmbedlyData, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/package-i18n.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope:embedly"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};    // 1
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
                                                                                                                       // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/lib/embedly.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Posts.addField([{                                                                                                      // 1
  fieldName: 'thumbnailUrl',                                                                                           // 3
  fieldSchema: {                                                                                                       // 4
    type: String,                                                                                                      // 5
    optional: true,                                                                                                    // 6
    editableBy: ["member", "admin"],                                                                                   // 7
    autoform: {                                                                                                        // 8
      type: 'bootstrap-postthumbnail',                                                                                 // 9
      order: 40                                                                                                        // 10
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'media',                                                                                                  // 15
  fieldSchema: {                                                                                                       // 16
    type: Object,                                                                                                      // 17
    optional: true,                                                                                                    // 18
    blackbox: true                                                                                                     // 19
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'sourceName',                                                                                             // 23
  fieldSchema: {                                                                                                       // 24
    type: String,                                                                                                      // 25
    optional: true                                                                                                     // 26
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'sourceUrl',                                                                                              // 30
  fieldSchema: {                                                                                                       // 31
    type: String,                                                                                                      // 32
    optional: true                                                                                                     // 33
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
Telescope.modules.add("postThumbnail", {                                                                               // 38
  template: 'post_thumbnail',                                                                                          // 39
  order: 15                                                                                                            // 40
});                                                                                                                    //
                                                                                                                       //
Settings.addField([{                                                                                                   // 43
  fieldName: 'embedlyKey',                                                                                             // 45
  fieldSchema: {                                                                                                       // 46
    type: String,                                                                                                      // 47
    optional: true,                                                                                                    // 48
    "private": true,                                                                                                   // 49
    autoform: {                                                                                                        // 50
      group: 'embedly',                                                                                                // 51
      "class": 'private-field'                                                                                         // 52
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'thumbnailWidth',                                                                                         // 57
  fieldSchema: {                                                                                                       // 58
    type: Number,                                                                                                      // 59
    optional: true,                                                                                                    // 60
    autoform: {                                                                                                        // 61
      group: 'embedly'                                                                                                 // 62
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'thumbnailHeight',                                                                                        // 67
  fieldSchema: {                                                                                                       // 68
    type: Number,                                                                                                      // 69
    optional: true,                                                                                                    // 70
    autoform: {                                                                                                        // 71
      group: 'embedly'                                                                                                 // 72
    }                                                                                                                  //
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
function addThumbnailClass(postClass, post) {                                                                          // 78
  var thumbnailClass = !!post.thumbnailUrl ? "has-thumbnail" : "no-thumbnail";                                         // 79
  return postClass + " " + thumbnailClass;                                                                             // 80
}                                                                                                                      //
// add callback that adds "has-thumbnail" or "no-thumbnail" CSS classes                                                //
Telescope.callbacks.add("postClass", addThumbnailClass);                                                               // 83
                                                                                                                       //
function checkIfPreviouslyPosted(data) {                                                                               // 85
  Meteor.call("checkForDuplicates", data.url, function (error, result) {                                               // 86
    if (error) {                                                                                                       // 87
      Messages.flash(error.reason + '. <a href="' + FlowRouter.path("postPage", { _id: error.details }) + '">' + i18n.t("go_to_post") + '</a>');
    }                                                                                                                  //
  });                                                                                                                  //
  return data;                                                                                                         // 91
}                                                                                                                      //
Telescope.callbacks.add("afterEmbedlyPrefill", checkIfPreviouslyPosted);                                               // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/lib/server/get_embedly_data.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
getEmbedlyData = function (url) {                                                                                      // 1
  var data = {};                                                                                                       // 2
  var extractBase = 'http://api.embed.ly/1/extract';                                                                   // 3
  var embedlyKey = Settings.get('embedlyKey');                                                                         // 4
  var thumbnailWidth = Settings.get('thumbnailWidth', 200);                                                            // 5
  var thumbnailHeight = Settings.get('thumbnailHeight', 125);                                                          // 6
                                                                                                                       //
  if (!embedlyKey) {                                                                                                   // 8
    // fail silently to still let the post be submitted as usual                                                       //
    console.log("Couldn't find an Embedly API key! Please add it to your Telescope settings or remove the Embedly module.");
    return null;                                                                                                       // 11
  }                                                                                                                    //
                                                                                                                       //
  try {                                                                                                                // 14
                                                                                                                       //
    var result = Meteor.http.get(extractBase, {                                                                        // 16
      params: {                                                                                                        // 17
        key: embedlyKey,                                                                                               // 18
        url: url,                                                                                                      // 19
        image_width: thumbnailWidth,                                                                                   // 20
        image_height: thumbnailHeight,                                                                                 // 21
        image_method: 'crop'                                                                                           // 22
      }                                                                                                                //
    });                                                                                                                //
                                                                                                                       //
    // console.log(result)                                                                                             //
                                                                                                                       //
    if (!!result.data.images && !!result.data.images.length) // there may not always be an image                       // 28
      result.data.thumbnailUrl = result.data.images[0].url.replace("http:", ""); // add thumbnailUrl as its own property and remove "http"
                                                                                                                       //
    if (result.data.authors && result.data.authors.length > 0) {                                                       // 31
      result.data.sourceName = result.data.authors[0].name;                                                            // 32
      result.data.sourceUrl = result.data.authors[0].url;                                                              // 33
    }                                                                                                                  //
                                                                                                                       //
    var embedlyData = _.pick(result.data, 'title', 'media', 'description', 'thumbnailUrl', 'sourceName', 'sourceUrl');
                                                                                                                       //
    return embedlyData;                                                                                                // 38
  } catch (error) {                                                                                                    //
    console.log(error);                                                                                                // 41
    // the first 13 characters of the Embedly errors are "failed [400] ", so remove them and parse the rest            //
    var errorObject = JSON.parse(error.message.substring(13));                                                         // 43
    throw new Meteor.Error(errorObject.error_code, errorObject.error_message);                                         // 44
    return null;                                                                                                       // 45
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
// For security reason, we make the media property non-modifiable by the client and                                    //
// we use a separate server-side API call to set it (and the thumbnail object if it hasn't already been set)           //
                                                                                                                       //
// Async variant that directly modifies the post object with update()                                                  //
function addMediaAfterSubmit(post) {                                                                                   // 53
  var set = {};                                                                                                        // 54
  if (post.url) {                                                                                                      // 55
    var data = getEmbedlyData(post.url);                                                                               // 56
    if (!!data) {                                                                                                      // 57
      // only add a thumbnailUrl if there isn't one already                                                            //
      if (!post.thumbnailUrl && !!data.thumbnailUrl) {                                                                 // 59
        set.thumbnailUrl = data.thumbnailUrl;                                                                          // 60
      }                                                                                                                //
      // add media if necessary                                                                                        //
      if (!!data.media.html) {                                                                                         // 63
        set.media = data.media;                                                                                        // 64
      }                                                                                                                //
      // add source name & url if they exist                                                                           //
      if (!!data.sourceName && !!data.sourceUrl) {                                                                     // 67
        set.sourceName = data.sourceName;                                                                              // 68
        set.sourceUrl = data.sourceUrl;                                                                                // 69
      }                                                                                                                //
    }                                                                                                                  //
    // make sure set object is not empty (Embedly call could have failed)                                              //
    if (!_.isEmpty(set)) {                                                                                             // 73
      Posts.update(post._id, { $set: set });                                                                           // 74
    }                                                                                                                  //
  }                                                                                                                    //
}                                                                                                                      //
Telescope.callbacks.add("postSubmitAsync", addMediaAfterSubmit);                                                       // 78
                                                                                                                       //
function updateMediaOnEdit(modifier, post) {                                                                           // 80
  var newUrl = modifier.$set.url;                                                                                      // 81
  if (newUrl && newUrl !== post.url) {                                                                                 // 82
    var data = getEmbedlyData(newUrl);                                                                                 // 83
    if (!!data) {                                                                                                      // 84
      if (!!data.media.html) {                                                                                         // 85
        modifier.$set.media = data.media;                                                                              // 86
      }                                                                                                                //
                                                                                                                       //
      // add source name & url if they exist                                                                           //
      if (!!data.sourceName && !!data.sourceUrl) {                                                                     // 90
        modifier.$set.sourceName = data.sourceName;                                                                    // 91
        modifier.$set.sourceUrl = data.sourceUrl;                                                                      // 92
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
  return modifier;                                                                                                     // 96
}                                                                                                                      //
Telescope.callbacks.add("postEdit", updateMediaOnEdit);                                                                // 98
                                                                                                                       //
var regenerateThumbnail = function (post) {                                                                            // 100
  delete post.thumbnailUrl;                                                                                            // 101
  delete post.media;                                                                                                   // 102
  delete post.sourceName;                                                                                              // 103
  delete post.sourceUrl;                                                                                               // 104
  addMediaAfterSubmit(post);                                                                                           // 105
};                                                                                                                     //
                                                                                                                       //
Meteor.methods({                                                                                                       // 108
  testGetEmbedlyData: function (url) {                                                                                 // 109
    check(url, String);                                                                                                // 110
    console.log(getEmbedlyData(url));                                                                                  // 111
  },                                                                                                                   //
  getEmbedlyData: function (url) {                                                                                     // 113
    check(url, String);                                                                                                // 114
    return getEmbedlyData(url);                                                                                        // 115
  },                                                                                                                   //
  embedlyKeyExists: function () {                                                                                      // 117
    return !!Settings.get('embedlyKey');                                                                               // 118
  },                                                                                                                   //
  regenerateThumbnail: function (post) {                                                                               // 120
    check(post, Posts.simpleSchema());                                                                                 // 121
    if (Users.can.edit(Meteor.user(), post)) {                                                                         // 122
      regenerateThumbnail(post);                                                                                       // 123
    }                                                                                                                  //
  },                                                                                                                   //
  regenerateAllThumbnails: function () {                                                                               // 126
    if (Users.is.admin(Meteor.user())) {                                                                               // 127
      var posts = Posts.find({ thumbnailUrl: { $exists: true } });                                                     // 128
      console.log("// regenerating thumbnails for " + posts.count() + " posts…");                                      // 129
      posts.forEach(function (post, index) {                                                                           // 130
        Meteor.setTimeout(function () {                                                                                // 131
          console.log(index + ". " + post.title);                                                                      // 132
          try {                                                                                                        // 133
            regenerateThumbnail(post);                                                                                 // 134
          } catch (error) {                                                                                            //
            console.log(error);                                                                                        // 136
          }                                                                                                            //
        }, index * 1000);                                                                                              //
      });                                                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ar.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                        // 8
  TAPi18n.translations["ar"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                             // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/bg.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                        // 8
  TAPi18n.translations["bg"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                             // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/cs.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                        // 8
  TAPi18n.translations["cs"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                             // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["cs"][namespace], {"thumbnail":"Náhled","thumbnailUrl":"Náhled","regenerate_thumbnail":"Přegenerovat náhled","clear_thumbnail":"Odstranit náhled","please_fill_in_embedly_key":"Vyplňte prosím svůj Embedly API klíč pro aktivaci náhledů.","please_ask_your_admin_to_fill_in_embedly_key":"Kontaktujte prosím administrátora webu pro vyplnění Embedly API klíče k aktivaci náhledů.","embedlyKey":"Embedly API klíč","thumbnailWidth":"Šířka náhledu","thumbnailHeight":"Výška náhledu"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/da.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                        // 8
  TAPi18n.translations["da"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                             // 12
  TAPi18n.translations["da"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("da", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/de.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                        // 8
  TAPi18n.translations["de"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                             // 12
  TAPi18n.translations["de"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["de"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("de", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/el.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                        // 8
  TAPi18n.translations["el"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                             // 12
  TAPi18n.translations["el"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("el", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/en.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"thumbnail":"Thumbnail","thumbnailUrl":"Thumbnail","regenerate_thumbnail":"Regenerate Thumbnail","clear_thumbnail":"Clear Thumbnail","please_fill_in_embedly_key":"Please fill in your Embedly API key to enable thumbnails.","please_ask_your_admin_to_fill_in_embedly_key":"Please ask your site admin to fill in an Embedly API key to enable thumbnails.","embedlyKey":"Embedly API Key","thumbnailWidth":"Thumbnail Width","thumbnailHeight":"Thumbnail Height"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                    // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/es.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                        // 8
  TAPi18n.translations["es"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                             // 12
  TAPi18n.translations["es"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["es"][namespace], {"thumbnail":"Miniatura","thumbnailUrl":"Miniatura","regenerate_thumbnail":"Regenerar Miniatura","clear_thumbnail":"Borrar Miniatura","please_fill_in_embedly_key":"Por favor, rellene con su clave de Embedly API para permitir miniaturas.","please_ask_your_admin_to_fill_in_embedly_key":"Por favor, pida al administrador del sitio que introduzca la clave de Embedly API para habilitar miniaturas.","embedlyKey":"Clave de Embedly API","thumbnailWidth":"Ancho de la Miniatura","thumbnailHeight":"Alto de la Miniatura"});
TAPi18n._registerServerTranslator("es", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/et.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                        // 8
  TAPi18n.translations["et"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                             // 12
  TAPi18n.translations["et"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["et"][namespace], {"thumbnail":"Pisipilt","thumbnailUrl":"Pisipilt","regenerate_thumbnail":"Uuenda Pisipilt","clear_thumbnail":"Kustuta Pisipilt","please_fill_in_embedly_key":"Palun sisesta Embedly API Key, et võimaldada pisipildid.","please_ask_your_admin_to_fill_in_embedly_key":"Palun küsige oma saidi adminnilt Embedly API Key, mis võimaldab pisipildid.","embedlyKey":"Embedly API Key","thumbnailWidth":"Pisipildi Laius","thumbnailHeight":"Pisipildi Kõrgus"});
TAPi18n._registerServerTranslator("et", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/fr.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                        // 8
  TAPi18n.translations["fr"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                             // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["fr"][namespace], {"thumbnail":"Aperçu","thumbnailUrl":"Aperçu","regenerate_thumbnail":"Regénérer l'aperçu","clear_thumbnail":"Effacer l'aperçu","please_fill_in_embedly_key":"Veuillez fournir une clé API Embedly pour activer les aperçus.","please_ask_your_admin_to_fill_in_embedly_key":"Veuillez demander à l'administrateur du site de fournir une clé d'API Embedly pour activer les aperçus.","embedlyKey":"Clé d'API Embedly","thumbnailWidth":"Largeur de l'aperçu","thumbnailHeight":"Hauteur de l'aperçu"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/hu.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                        // 8
  TAPi18n.translations["hu"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                             // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/id.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                        // 8
  TAPi18n.translations["id"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                             // 12
  TAPi18n.translations["id"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["id"][namespace], {"thumbnail":"Thumbnail","thumbnailUrl":"Thumbnail URL","regenerate_thumbnail":"Regenerasi Thumbnail","clear_thumbnail":"Hapus Thumbnail","please_fill_in_embedly_key":"Silahkan mengisi API Embedly key Anda untuk mengaktifkan thumbnail.","please_ask_your_admin_to_fill_in_embedly_key":"Silakan tanyakan admin situs Anda untuk mengisi API Embedly Key untuk mengaktifkan thumbnail.","embedlyKey":"Embedly API Key","thumbnailWidth":"Lebar Thumbnail","thumbnailHeight":"Tinggi Thumbnail"});
TAPi18n._registerServerTranslator("id", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/it.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                        // 8
  TAPi18n.translations["it"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                             // 12
  TAPi18n.translations["it"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["it"][namespace], {"thumbnail":"Anteprima","thumbnailUrl":"Anteprima","regenerate_thumbnail":"Rigenera Anteprima","clear_thumbnail":"Rimuovi Anteprima","please_fill_in_embedly_key":"Per favore fornisci il tuo codice per l'API di Embedly per abilitare le anteprime.","please_ask_your_admin_to_fill_in_embedly_key":"Per favore chiedi all'amministratore del sito di fornire il codice per l'API di Embedly per abilitare le anteprime.","embedlyKey":"Embedly API Key","thumbnailWidth":"Larghezza anteprima","thumbnailHeight":"Altezza Anteprima"});
TAPi18n._registerServerTranslator("it", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ja.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                        // 8
  TAPi18n.translations["ja"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                             // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/kk.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                        // 8
  TAPi18n.translations["kk"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                             // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ko.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                        // 8
  TAPi18n.translations["ko"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                             // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ko"][namespace], {"thumbnail":"미리보기","thumbnailUrl":"미리보기","regenerate_thumbnail":"미리보기 생성","clear_thumbnail":"미리보기 지우기","please_ask_your_admin_to_fill_in_embedly_key":"잠시만 기다려주세요.","thumbnailWidth":"미리보기 가로","thumbnailHeight":"미리보기 세로"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/nl.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                        // 8
  TAPi18n.translations["nl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                             // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/pl.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                        // 8
  TAPi18n.translations["pl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                             // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["pl"][namespace], {"thumbnail":"Miniatura","thumbnailUrl":"Miniatura","regenerate_thumbnail":"Przeładuj miniaturę","clear_thumbnail":"Usuń miniaturę","please_fill_in_embedly_key":"Podaj swój klucz API z Embedly aby włączyć miniatury obrazków."});
TAPi18n._registerServerTranslator("pl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/pt-BR.i18n.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                     // 8
  TAPi18n.translations["pt-BR"] = {};                                                                                  // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                          // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                       // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"thumbnail":"Thumbnail","thumbnailUrl":"Thumbnail","regenerate_thumbnail":"Regenerar Thumbnail","clear_thumbnail":"Limpar Thumbnail","please_fill_in_embedly_key":"Por fabor, coloque sua API Embedly para permitir thumbnails."});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                                 // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ro.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                        // 8
  TAPi18n.translations["ro"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                             // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/ru.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                        // 8
  TAPi18n.translations["ru"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                             // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/sl.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                        // 8
  TAPi18n.translations["sl"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                             // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["sl"][namespace], {"thumbnail":"Predogled","thumbnailUrl":"Predogled","regenerate_thumbnail":"Regeneriraj Predogled","clear_thumbnail":"Počisti Predogled","please_fill_in_embedly_key":"Prosimo, vpišite vaš Embedly API ključ, da omogočite predoglede.","please_ask_your_admin_to_fill_in_embedly_key":"Prosimo, predlagajte skrbniku vaše strani, da izpolni Embedly API ključ za omogočene predoglede.","embedlyKey":"Embedly API Ključ","thumbnailWidth":"Širina Predogleda","thumbnailHeight":"Višina Predogleda"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/sv.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                        // 8
  TAPi18n.translations["sv"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                             // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["sv"][namespace], {"thumbnail":"Miniatyrbild","thumbnailUrl":"Miniatyrbild","regenerate_thumbnail":"Skapa om miniatyrbild","clear_thumbnail":"Rensa miniatyrbild","please_fill_in_embedly_key":"Fyll i din Embedly API-nyckel för att göra det möjligt för miniatyrer.","please_ask_your_admin_to_fill_in_embedly_key":"Be din webbadministratör att fylla i en Embedly API-nyckel för att tillgängliggöra miniatyrbilder.","embedlyKey":"Em","thumbnailWidth":"Miniatyrbildsbredd","thumbnailHeight":"Miniatyrbildshöjd"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/th.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                        // 8
  TAPi18n.translations["th"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                             // 12
  TAPi18n.translations["th"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/tr.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                        // 8
  TAPi18n.translations["tr"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                             // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["tr"][namespace], {"thumbnail":"Görüntü"});                                              // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/vi.i18n.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                        // 8
  TAPi18n.translations["vi"] = {};                                                                                     // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                             // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                          // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                                   // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                                    // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_embedly/packages/telescope_embedlyi18n/zh-CN.i18n.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:embedly",                                                                                // 2
    namespace = "telescope:embedly";                                                                                   // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                     // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                  // 9
}                                                                                                                      // 10
                                                                                                                       // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                          // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                       // 13
}                                                                                                                      // 14
                                                                                                                       // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                                 // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:embedly'] = {};

})();

//# sourceMappingURL=telescope_embedly.js.map
