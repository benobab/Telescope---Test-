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
var Feeds, fetchFeeds, translations;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/lib/feeds.js                                                 //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
Feeds = new Mongo.Collection('feeds');                                                          // 1
                                                                                                //
Feeds.schema = new SimpleSchema({                                                               // 3
  url: {                                                                                        // 4
    type: String,                                                                               // 5
    regEx: SimpleSchema.RegEx.Url,                                                              // 6
    editableBy: ["admin"]                                                                       // 7
  },                                                                                            //
  userId: {                                                                                     // 9
    type: String,                                                                               // 10
    label: 'feedUser',                                                                          // 11
    editableBy: ["admin"],                                                                      // 12
    autoform: {                                                                                 // 13
      instructions: 'Posts will be assigned to this user.',                                     // 14
      options: function () {                                                                    // 15
        var users = Meteor.users.find().map(function (user) {                                   // 16
          return {                                                                              // 17
            value: user._id,                                                                    // 18
            label: Users.getDisplayName(user)                                                   // 19
          };                                                                                    //
        });                                                                                     //
        return users;                                                                           // 22
      }                                                                                         //
    }                                                                                           //
  },                                                                                            //
  categories: {                                                                                 // 26
    type: [String],                                                                             // 27
    label: 'categories',                                                                        // 28
    optional: true,                                                                             // 29
    editableBy: ["admin"],                                                                      // 30
    autoform: {                                                                                 // 31
      instructions: 'Posts will be assigned to this category.',                                 // 32
      noselect: true,                                                                           // 33
      editable: true,                                                                           // 34
      options: function () {                                                                    // 35
        var categories = Categories.find().map(function (category) {                            // 36
          return {                                                                              // 37
            value: category._id,                                                                // 38
            label: category.name                                                                // 39
          };                                                                                    //
        });                                                                                     //
        return categories;                                                                      // 42
      }                                                                                         //
    }                                                                                           //
  }                                                                                             //
});                                                                                             //
                                                                                                //
Meteor.startup(function () {                                                                    // 48
  Feeds.internationalize();                                                                     // 49
});                                                                                             //
                                                                                                //
Feeds.attachSchema(Feeds.schema);                                                               // 52
                                                                                                //
// used to keep track of which feed a post was imported from                                    //
var feedIdProperty = {                                                                          // 55
  fieldName: 'feedId',                                                                          // 56
  fieldSchema: {                                                                                // 57
    type: String,                                                                               // 58
    label: 'feedId',                                                                            // 59
    optional: true,                                                                             // 60
    autoform: {                                                                                 // 61
      omit: true                                                                                // 62
    }                                                                                           //
  }                                                                                             //
};                                                                                              //
Posts.addField(feedIdProperty);                                                                 // 66
                                                                                                //
// the RSS ID of the post in its original feed                                                  //
var feedItemIdProperty = {                                                                      // 69
  fieldName: 'feedItemId',                                                                      // 70
  fieldSchema: {                                                                                // 71
    type: String,                                                                               // 72
    label: 'feedItemId',                                                                        // 73
    optional: true,                                                                             // 74
    autoform: {                                                                                 // 75
      omit: true                                                                                // 76
    }                                                                                           //
  }                                                                                             //
};                                                                                              //
Posts.addField(feedItemIdProperty);                                                             // 80
                                                                                                //
Meteor.startup(function () {                                                                    // 82
  Feeds.allow({                                                                                 // 83
    insert: Users.is.adminById,                                                                 // 84
    update: Users.is.adminById,                                                                 // 85
    remove: Users.is.adminById                                                                  // 86
  });                                                                                           //
                                                                                                //
  Meteor.methods({                                                                              // 89
    insertFeed: function (feedUrl) {                                                            // 90
      check(feedUrl, Feeds.schema);                                                             // 91
                                                                                                //
      if (Feeds.findOne({ url: feedUrl.url })) throw new Meteor.Error('already-exists', i18n.t('feed_already_exists'));
                                                                                                //
      if (!Meteor.user() || !Users.is.admin(Meteor.user())) throw new Meteor.Error('login-required', i18n.t('you_need_to_login_and_be_an_admin_to_add_a_new_feed'));
                                                                                                //
      return Feeds.insert(feedUrl);                                                             // 99
    }                                                                                           //
  });                                                                                           //
});                                                                                             //
                                                                                                //
Telescope.menuItems.add("adminMenu", {                                                          // 104
  route: "adminFeeds",                                                                          // 105
  label: "feeds",                                                                               // 106
  description: "import_new_posts_from_feeds"                                                    // 107
});                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/lib/routes.js                                                //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
Telescope.adminRoutes.route('/feeds', {                                                         // 1
  name: "adminFeeds",                                                                           // 2
  action: function (params, queryParams) {                                                      // 3
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "feeds" });                    // 4
  }                                                                                             //
});                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/lib/server/fetch_feeds.js                                    //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var toMarkdown = Npm.require('to-markdown').toMarkdown;                                         // 1
var he = Npm.require('he');                                                                     // 2
var FeedParser = Npm.require('feedparser');                                                     // 3
var Readable = Npm.require('stream').Readable;                                                  // 4
var iconv = Npm.require('iconv-lite');                                                          // 5
                                                                                                //
var getFirstAdminUser = function () {                                                           // 7
  return Users.adminUsers({ sort: { createdAt: 1 }, limit: 1 })[0];                             // 8
};                                                                                              //
                                                                                                //
var normalizeEncoding = function (contentBuffer) {                                              // 11
  // got from https://github.com/szwacz/sputnik/                                                //
  var encoding;                                                                                 // 13
  var content = contentBuffer.toString();                                                       // 14
                                                                                                //
  var xmlDeclaration = content.match(/^<\?xml .*\?>/);                                          // 16
  if (xmlDeclaration) {                                                                         // 17
    var encodingDeclaration = xmlDeclaration[0].match(/encoding=("|').*?("|')/);                // 18
    if (encodingDeclaration) {                                                                  // 19
      encoding = encodingDeclaration[0].substring(10, encodingDeclaration[0].length - 1);       // 20
    }                                                                                           //
  }                                                                                             //
                                                                                                //
  if (encoding && encoding.toLowerCase() !== 'utf-8') {                                         // 24
    try {                                                                                       // 25
      content = iconv.decode(contentBuffer, encoding);                                          // 26
    } catch (err) {                                                                             //
      // detected encoding is not supported, leave it as it is                                  //
    }                                                                                           //
  }                                                                                             //
                                                                                                //
  return content;                                                                               // 32
};                                                                                              //
                                                                                                //
var feedHandler = {                                                                             // 35
  getStream: function (content) {                                                               // 36
    var stream = new Readable();                                                                // 37
    stream.push(content);                                                                       // 38
    stream.push(null);                                                                          // 39
                                                                                                //
    return stream;                                                                              // 41
  },                                                                                            //
                                                                                                //
  getItemCategories: function (item, feedCategories) {                                          // 44
                                                                                                //
    var itemCategories = [];                                                                    // 46
                                                                                                //
    // loop over RSS categories for the current item if it has any                              //
    if (item.categories && item.categories.length > 0) {                                        // 49
      item.categories.forEach(function (name) {                                                 // 50
                                                                                                //
        // if the RSS category corresponds to a Telescope cateogry, add it                      //
        var category = Categories.findOne({ name: name }, { fields: { _id: 1 } });              // 53
        if (category) {                                                                         // 54
          itemCategories.push(category._id);                                                    // 55
        }                                                                                       //
      });                                                                                       //
    }                                                                                           //
                                                                                                //
    // add predefined feed categories if there are any and remove any duplicates                //
    if (!!feedCategories) {                                                                     // 62
      itemCategories = _.uniq(itemCategories.concat(feedCategories));                           // 63
    }                                                                                           //
                                                                                                //
    return itemCategories;                                                                      // 66
  },                                                                                            //
                                                                                                //
  handle: function (contentBuffer, userId, feedCategories, feedId) {                            // 69
    var content = normalizeEncoding(contentBuffer);                                             // 70
    var stream = this.getStream(content),                                                       // 71
        feedParser = new FeedParser(),                                                          //
        newItemsCount = 0,                                                                      //
        self = this;                                                                            //
                                                                                                //
    stream.pipe(feedParser);                                                                    // 76
                                                                                                //
    feedParser.on('meta', Meteor.bindEnvironment(function (meta) {                              // 78
      Telescope.log('// Parsing RSS feed: ' + meta.title);                                      // 79
    }));                                                                                        //
                                                                                                //
    feedParser.on('error', Meteor.bindEnvironment(function (error) {                            // 82
      Telescope.log(error);                                                                     // 83
    }));                                                                                        //
                                                                                                //
    feedParser.on('readable', Meteor.bindEnvironment(function () {                              // 86
      var s = this,                                                                             // 87
          item;                                                                                 //
                                                                                                //
      while (item = s.read()) {                                                                 // 89
        // if item has no guid, use the URL to give it one                                      //
        if (!item.guid) {                                                                       // 91
          item.guid = item.link;                                                                // 92
        }                                                                                       //
                                                                                                //
        // check if post already exists                                                         //
        if (!!Posts.findOne({ feedItemId: item.guid })) {                                       // 96
          Telescope.log('// Feed item already imported');                                       // 97
          continue;                                                                             // 98
        }                                                                                       //
                                                                                                //
        newItemsCount++;                                                                        // 101
                                                                                                //
        var post = {                                                                            // 103
          title: he.decode(item.title),                                                         // 104
          url: item.link,                                                                       // 105
          feedId: feedId,                                                                       // 106
          feedItemId: item.guid,                                                                // 107
          userId: userId,                                                                       // 108
          categories: self.getItemCategories(item, feedCategories)                              // 109
        };                                                                                      //
                                                                                                //
        if (item.description) post.body = toMarkdown(he.decode(item.description));              // 112
                                                                                                //
        // console.log(item)                                                                    //
                                                                                                //
        // if RSS item link is a 301 or 302 redirect, follow the redirect                       //
        var get = HTTP.get(item.link, { followRedirects: false });                              // 118
        if (!!get.statusCode && (get.statusCode === 301 || get.statusCode === 302) && !!get.headers && !!get.headers.location) {
          post.url = get.headers.location;                                                      // 121
        }                                                                                       //
                                                                                                //
        // if RSS item has a date, use it                                                       //
        if (item.pubdate) post.postedAt = moment(item.pubdate).toDate();                        // 125
                                                                                                //
        try {                                                                                   // 128
          Posts.submit(post);                                                                   // 129
        } catch (error) {                                                                       //
          // catch errors so they don't stop the loop                                           //
          Telescope.log(error);                                                                 // 132
        }                                                                                       //
      }                                                                                         //
                                                                                                //
      // Telescope.log('// Found ' + newItemsCount + ' new feed items');                        //
    }, function () {                                                                            //
      Telescope.log('Failed to bind environment');                                              // 138
    }, feedParser));                                                                            //
  }                                                                                             //
};                                                                                              //
                                                                                                //
fetchFeeds = function () {                                                                      // 143
  var contentBuffer;                                                                            // 144
                                                                                                //
  Feeds.find().forEach(function (feed) {                                                        // 146
                                                                                                //
    // if feed doesn't specify a user, default to admin                                         //
    var userId = !!feed.userId ? feed.userId : getFirstAdminUser()._id;                         // 149
    var feedCategories = feed.categories;                                                       // 150
    var feedId = feed._id;                                                                      // 151
                                                                                                //
    try {                                                                                       // 153
      contentBuffer = HTTP.get(feed.url, { responseType: 'buffer' }).content;                   // 154
      feedHandler.handle(contentBuffer, userId, feedCategories, feedId);                        // 155
    } catch (error) {                                                                           //
      console.log(error);                                                                       // 157
      return true; // just go to next feed URL                                                  // 158
    }                                                                                           //
  });                                                                                           //
};                                                                                              //
                                                                                                //
Meteor.methods({                                                                                // 163
  fetchFeeds: function () {                                                                     // 164
    fetchFeeds();                                                                               // 165
  },                                                                                            //
  testEntities: function (text) {                                                               // 167
    console.log(he.decode(text));                                                               // 168
  },                                                                                            //
  testToMarkdown: function (text) {                                                             // 170
    console.log(toMarkdown(text));                                                              // 171
  }                                                                                             //
});                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/lib/server/cron.js                                           //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
SyncedCron.options = {                                                                          // 1
  log: false,                                                                                   // 2
  collectionName: 'cronHistory',                                                                // 3
  utc: false,                                                                                   // 4
  collectionTTL: 172800                                                                         // 5
};                                                                                              //
                                                                                                //
var addJob = function () {                                                                      // 8
  SyncedCron.add({                                                                              // 9
    name: 'Post by RSS feed',                                                                   // 10
    schedule: function (parser) {                                                               // 11
      return parser.text('every 30 minutes');                                                   // 12
    },                                                                                          //
    job: function () {                                                                          // 14
      if (Feeds.find().count()) {                                                               // 15
        fetchFeeds();                                                                           // 16
      }                                                                                         //
    }                                                                                           //
  });                                                                                           //
};                                                                                              //
                                                                                                //
Meteor.startup(function () {                                                                    // 22
  addJob();                                                                                     // 23
});                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/lib/server/publications.js                                   //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
Meteor.publish('feeds', function () {                                                           // 1
  if (Users.is.adminById(this.userId)) {                                                        // 2
    return Feeds.find();                                                                        // 3
  }                                                                                             //
  return [];                                                                                    // 5
});                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ar.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                           // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                          // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                 // 11
  TAPi18n.translations["ar"] = {};                                                              // 12
}                                                                                               // 13
                                                                                                // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                      // 15
  TAPi18n.translations["ar"][namespace] = {};                                                   // 16
}                                                                                               // 17
                                                                                                // 18
_.extend(TAPi18n.translations["ar"][namespace], {});                                            // 19
TAPi18n._registerServerTranslator("ar", namespace);                                             // 20
                                                                                                // 21
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/bg.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                      // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                 // 9
  TAPi18n.translations["bg"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                      // 13
  TAPi18n.translations["bg"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["bg"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("bg", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/cs.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                           // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                 // 9
  TAPi18n.translations["cs"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                      // 13
  TAPi18n.translations["cs"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["cs"][namespace], {"feed_already_exists":"Feed s toutu URL již existuje.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Pro přidání nového feedu musíte být přihlášený administrátor.","import_new_posts_from_feeds":"Importovat nové příspěvky z feedů."});
TAPi18n._registerServerTranslator("cs", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/da.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                             // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                 // 9
  TAPi18n.translations["da"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                      // 13
  TAPi18n.translations["da"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["da"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("da", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/de.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                           // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                 // 9
  TAPi18n.translations["de"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                      // 13
  TAPi18n.translations["de"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["de"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("de", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/el.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                           // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                 // 9
  TAPi18n.translations["el"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                      // 13
  TAPi18n.translations["el"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["el"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("el", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/en.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
// integrate the fallback language translations                                                 // 8
translations = {};                                                                              // 9
translations[namespace] = {"feeds":"Feeds","feed_already_exists":"A feed with the same URL already exists.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"You need to log in and be an admin to add a new feed.","import_new_posts_from_feeds":"Import new posts from feeds."};
TAPi18n._loadLangFileObject("en", translations);                                                // 11
TAPi18n._registerServerTranslator("en", namespace);                                             // 12
                                                                                                // 13
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/es.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                  // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                 // 9
  TAPi18n.translations["es"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                      // 13
  TAPi18n.translations["es"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["es"][namespace], {"feed_already_exists":"Un feed con la misma URL ya existe.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Tienes que iniciar sesión y ser un administrador para agregar un nuevo feed.","import_new_posts_from_feeds":"Importar nuevos posts desde los feeds."});
TAPi18n._registerServerTranslator("es", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/et.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                           // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                 // 9
  TAPi18n.translations["et"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                      // 13
  TAPi18n.translations["et"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["et"][namespace], {"feed_already_exists":"Feed sama URLiga on juba olemas.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Sa pead sisse logima ja olema admin, et lisada uus feed.","import_new_posts_from_feeds":"Import uusi postitusi feedist."});
TAPi18n._registerServerTranslator("et", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/fr.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                 // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                 // 9
  TAPi18n.translations["fr"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                      // 13
  TAPi18n.translations["fr"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["fr"][namespace], {"feed_already_exists":"Un flux avec la même URL existe déjà.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Vous devez vous connecter et être un administrateur pour ajouter un nouveau flux.","import_new_posts_from_feeds":"Importez de nouveaux posts à partir de flux."});
TAPi18n._registerServerTranslator("fr", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/hu.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                         // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                 // 9
  TAPi18n.translations["hu"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                      // 13
  TAPi18n.translations["hu"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["hu"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("hu", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/id.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                              // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                 // 9
  TAPi18n.translations["id"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                      // 13
  TAPi18n.translations["id"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["id"][namespace], {"feed_already_exists":"Sebuah newsfeed dengan URL yang sama sudah ada.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Anda harus login dan menjadi admin untuk menambahkan newsfeed baru.","import_new_posts_from_feeds":"Impor postingan baru dari newsfeed."});
TAPi18n._registerServerTranslator("id", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/it.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                         // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                 // 9
  TAPi18n.translations["it"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                      // 13
  TAPi18n.translations["it"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["it"][namespace], {"feed_already_exists":"Un feed con lo stesso URL esiste già.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Devi accedere ed essere un amministratore per aggiungere un nuovo feed.","import_new_posts_from_feeds":"Importa nuovi post dai feed."});
TAPi18n._registerServerTranslator("it", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ja.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                             // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                 // 9
  TAPi18n.translations["ja"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                      // 13
  TAPi18n.translations["ja"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("ja", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/kk.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                        // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                 // 9
  TAPi18n.translations["kk"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                      // 13
  TAPi18n.translations["kk"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["kk"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("kk", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ko.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                               // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                 // 9
  TAPi18n.translations["ko"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                      // 13
  TAPi18n.translations["ko"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["ko"][namespace], {"feed_already_exists":"같은 게시물(URL)이 존재합니다."});
TAPi18n._registerServerTranslator("ko", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/nl.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                         // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                 // 9
  TAPi18n.translations["nl"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                      // 13
  TAPi18n.translations["nl"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["nl"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("nl", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/pl.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                            // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                 // 9
  TAPi18n.translations["pl"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                      // 13
  TAPi18n.translations["pl"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["pl"][namespace], {"feed_already_exists":"Kanał z tym samym URL już istnieje.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Musisz się zalogować jako admin aby dodawać nowe kanały.","import_new_posts_from_feeds":"Zaimportuj nowe posty z kanałów."});
TAPi18n._registerServerTranslator("pl", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/pt-BR.i18n.js            //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];               // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                              // 9
  TAPi18n.translations["pt-BR"] = {};                                                           // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                   // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {"feed_already_exists":"Um feed com a mesma URL já existe.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Você precisa se logar e ser um admin para adicionar um novo feed.","import_new_posts_from_feeds":"Importar novas postagens dos feeds."});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                          // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ro.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                          // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                 // 9
  TAPi18n.translations["ro"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                      // 13
  TAPi18n.translations["ro"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["ro"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("ro", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/ru.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                          // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                 // 9
  TAPi18n.translations["ru"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                      // 13
  TAPi18n.translations["ru"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["ru"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("ru", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/sl.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                    // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                 // 9
  TAPi18n.translations["sl"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                      // 13
  TAPi18n.translations["sl"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["sl"][namespace], {"feed_already_exists":"Pregled objav z istim URL že obstaja.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Morate se prijaviti in biti admin, da dodate nov pregled objav.","import_new_posts_from_feeds":"Uvozi nove objave iz pregleda objav."});
TAPi18n._registerServerTranslator("sl", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/sv.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                          // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                 // 9
  TAPi18n.translations["sv"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                      // 13
  TAPi18n.translations["sv"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["sv"][namespace], {"feed_already_exists":"Ett flöde med samma webbaddress finns redan.","you_need_to_login_and_be_an_admin_to_add_a_new_feed":"Du måste logga in och vara en admin för att lägga till en ny ström.","import_new_posts_from_feeds":"Importera nya inlägg från flöden."});
TAPi18n._registerServerTranslator("sv", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/th.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                 // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                 // 9
  TAPi18n.translations["th"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                      // 13
  TAPi18n.translations["th"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["th"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("th", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/tr.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                           // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                 // 9
  TAPi18n.translations["tr"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                      // 13
  TAPi18n.translations["tr"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["tr"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("tr", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/vi.i18n.js               //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                    // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                 // 9
  TAPi18n.translations["vi"] = {};                                                              // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                      // 13
  TAPi18n.translations["vi"][namespace] = {};                                                   // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["vi"][namespace], {});                                            // 17
TAPi18n._registerServerTranslator("vi", namespace);                                             // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/telescope_post-by-feed/packages/telescope_post-by-feedi18n/zh-CN.i18n.js            //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
var _ = Package.underscore._,                                                                   // 1
    package_name = "project",                                                                   // 2
    namespace = "project";                                                                      // 3
                                                                                                // 4
if (package_name != "project") {                                                                // 5
    namespace = TAPi18n.packages[package_name].namespace;                                       // 6
}                                                                                               // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                  // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                              // 9
  TAPi18n.translations["zh-CN"] = {};                                                           // 10
}                                                                                               // 11
                                                                                                // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                   // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                // 14
}                                                                                               // 15
                                                                                                // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {});                                         // 17
TAPi18n._registerServerTranslator("zh-CN", namespace);                                          // 18
                                                                                                // 19
//////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:post-by-feed'] = {
  Feeds: Feeds
};

})();

//# sourceMappingURL=telescope_post-by-feed.js.map
