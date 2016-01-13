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
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
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
var Posts, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/namespace.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * The global namespace/collection for Posts.                                                                         //
 * @namespace Posts                                                                                                   //
 */                                                                                                                   //
Posts = new Mongo.Collection("posts");                                                                                // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/config.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Posts config namespace                                                                                             //
 * @type {Object}                                                                                                     //
 */                                                                                                                   //
Posts.config = {};                                                                                                    // 5
                                                                                                                      //
/**                                                                                                                   //
 * Post Statuses                                                                                                      //
 */                                                                                                                   //
Posts.config.postStatuses = [{                                                                                        // 11
  value: 1,                                                                                                           // 13
  label: function () {                                                                                                // 14
    return i18n.t('pending');                                                                                         // 14
  }                                                                                                                   //
}, {                                                                                                                  //
  value: 2,                                                                                                           // 17
  label: function () {                                                                                                // 18
    return i18n.t('approved');                                                                                        // 18
  }                                                                                                                   //
}, {                                                                                                                  //
  value: 3,                                                                                                           // 21
  label: function () {                                                                                                // 22
    return i18n.t('rejected');                                                                                        // 22
  }                                                                                                                   //
}, {                                                                                                                  //
  value: 4,                                                                                                           // 25
  label: function () {                                                                                                // 26
    return i18n.t('spam');                                                                                            // 26
  }                                                                                                                   //
}, {                                                                                                                  //
  value: 5,                                                                                                           // 29
  label: function () {                                                                                                // 30
    return i18n.t('deleted');                                                                                         // 30
  }                                                                                                                   //
}];                                                                                                                   //
                                                                                                                      //
Posts.config.STATUS_PENDING = 1;                                                                                      // 34
Posts.config.STATUS_APPROVED = 2;                                                                                     // 35
Posts.config.STATUS_REJECTED = 3;                                                                                     // 36
Posts.config.STATUS_SPAM = 4;                                                                                         // 37
Posts.config.STATUS_DELETED = 5;                                                                                      // 38
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/posts.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Posts schema                                                                                                       //
 * @type {SimpleSchema}                                                                                               //
 */                                                                                                                   //
Posts.schema = new SimpleSchema({                                                                                     // 5
  /**                                                                                                                 //
    ID                                                                                                                //
  */                                                                                                                  //
  _id: {                                                                                                              // 9
    type: String,                                                                                                     // 10
    optional: true                                                                                                    // 11
  },                                                                                                                  //
  /**                                                                                                                 //
    Timetstamp of post creation                                                                                       //
  */                                                                                                                  //
  createdAt: {                                                                                                        // 16
    type: Date,                                                                                                       // 17
    optional: true                                                                                                    // 18
  },                                                                                                                  //
  /**                                                                                                                 //
    Timestamp of post first appearing on the site (i.e. being approved)                                               //
  */                                                                                                                  //
  postedAt: {                                                                                                         // 23
    type: Date,                                                                                                       // 24
    optional: true,                                                                                                   // 25
    editableBy: ["admin"],                                                                                            // 26
    autoform: {                                                                                                       // 27
      group: 'admin',                                                                                                 // 28
      type: "bootstrap-datetimepicker"                                                                                // 29
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    URL                                                                                                               //
  */                                                                                                                  //
  url: {                                                                                                              // 35
    type: String,                                                                                                     // 36
    optional: true,                                                                                                   // 37
    max: 500,                                                                                                         // 38
    editableBy: ["member", "admin"],                                                                                  // 39
    autoform: {                                                                                                       // 40
      type: "bootstrap-url",                                                                                          // 41
      order: 10                                                                                                       // 42
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    Title                                                                                                             //
  */                                                                                                                  //
  title: {                                                                                                            // 48
    type: String,                                                                                                     // 49
    optional: false,                                                                                                  // 50
    max: 500,                                                                                                         // 51
    editableBy: ["member", "admin"],                                                                                  // 52
    autoform: {                                                                                                       // 53
      order: 20                                                                                                       // 54
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    Slug                                                                                                              //
  */                                                                                                                  //
  slug: {                                                                                                             // 60
    type: String,                                                                                                     // 61
    optional: true                                                                                                    // 62
  },                                                                                                                  //
  /**                                                                                                                 //
    Post body (markdown)                                                                                              //
  */                                                                                                                  //
  body: {                                                                                                             // 67
    type: String,                                                                                                     // 68
    optional: true,                                                                                                   // 69
    max: 3000,                                                                                                        // 70
    editableBy: ["member", "admin"],                                                                                  // 71
    autoform: {                                                                                                       // 72
      rows: 5,                                                                                                        // 73
      order: 30                                                                                                       // 74
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    HTML version of the post body                                                                                     //
  */                                                                                                                  //
  htmlBody: {                                                                                                         // 80
    type: String,                                                                                                     // 81
    optional: true                                                                                                    // 82
  },                                                                                                                  //
  /**                                                                                                                 //
    Count of how many times the post's page was viewed                                                                //
  */                                                                                                                  //
  viewCount: {                                                                                                        // 87
    type: Number,                                                                                                     // 88
    optional: true                                                                                                    // 89
  },                                                                                                                  //
  /**                                                                                                                 //
    Count of the post's comments                                                                                      //
  */                                                                                                                  //
  commentCount: {                                                                                                     // 94
    type: Number,                                                                                                     // 95
    optional: true                                                                                                    // 96
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing the `_id`s of commenters                                                                      //
  */                                                                                                                  //
  commenters: {                                                                                                       // 101
    type: [String],                                                                                                   // 102
    optional: true                                                                                                    // 103
  },                                                                                                                  //
  /**                                                                                                                 //
    Timestamp of the last comment                                                                                     //
  */                                                                                                                  //
  lastCommentedAt: {                                                                                                  // 108
    type: Date,                                                                                                       // 109
    optional: true                                                                                                    // 110
  },                                                                                                                  //
  /**                                                                                                                 //
    Count of how many times the post's link was clicked                                                               //
  */                                                                                                                  //
  clickCount: {                                                                                                       // 115
    type: Number,                                                                                                     // 116
    optional: true                                                                                                    // 117
  },                                                                                                                  //
  /**                                                                                                                 //
    The post's base score (not factoring in the post's age)                                                           //
  */                                                                                                                  //
  baseScore: {                                                                                                        // 122
    type: Number,                                                                                                     // 123
    decimal: true,                                                                                                    // 124
    optional: true                                                                                                    // 125
  },                                                                                                                  //
  /**                                                                                                                 //
    How many upvotes the post has received                                                                            //
  */                                                                                                                  //
  upvotes: {                                                                                                          // 130
    type: Number,                                                                                                     // 131
    optional: true                                                                                                    // 132
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing the `_id`s of the post's upvoters                                                             //
  */                                                                                                                  //
  upvoters: {                                                                                                         // 137
    type: [String],                                                                                                   // 138
    optional: true                                                                                                    // 139
  },                                                                                                                  //
  /**                                                                                                                 //
    How many downvotes the post has received                                                                          //
  */                                                                                                                  //
  downvotes: {                                                                                                        // 144
    type: Number,                                                                                                     // 145
    optional: true                                                                                                    // 146
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing the `_id`s of the post's downvoters                                                           //
  */                                                                                                                  //
  downvoters: {                                                                                                       // 151
    type: [String],                                                                                                   // 152
    optional: true                                                                                                    // 153
  },                                                                                                                  //
  /**                                                                                                                 //
    The post's current score (factoring in age)                                                                       //
  */                                                                                                                  //
  score: {                                                                                                            // 158
    type: Number,                                                                                                     // 159
    decimal: true,                                                                                                    // 160
    optional: true                                                                                                    // 161
  },                                                                                                                  //
  /**                                                                                                                 //
    The post's status. One of pending (`1`), approved (`2`), or deleted (`3`)                                         //
  */                                                                                                                  //
  status: {                                                                                                           // 166
    type: Number,                                                                                                     // 167
    optional: true,                                                                                                   // 168
    editableBy: ["admin"],                                                                                            // 169
    autoValue: function () {                                                                                          // 170
      // only provide a default value                                                                                 //
      // 1) this is an insert operation                                                                               //
      // 2) status field is not set in the document being inserted                                                    //
      var user = Meteor.users.findOne(this.userId);                                                                   // 174
      if (this.isInsert && !this.isSet) return Posts.getDefaultStatus(user);                                          // 175
    },                                                                                                                //
    autoform: {                                                                                                       // 178
      noselect: true,                                                                                                 // 179
      options: Posts.config.postStatuses,                                                                             // 180
      group: 'admin'                                                                                                  // 181
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    Whether the post is sticky (pinned to the top of posts lists)                                                     //
  */                                                                                                                  //
  sticky: {                                                                                                           // 187
    type: Boolean,                                                                                                    // 188
    optional: true,                                                                                                   // 189
    defaultValue: false,                                                                                              // 190
    editableBy: ["admin"],                                                                                            // 191
    autoform: {                                                                                                       // 192
      group: 'admin',                                                                                                 // 193
      leftLabel: "Sticky"                                                                                             // 194
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    Whether the post is inactive. Inactive posts see their score recalculated less often                              //
  */                                                                                                                  //
  inactive: {                                                                                                         // 200
    type: Boolean,                                                                                                    // 201
    optional: true                                                                                                    // 202
  },                                                                                                                  //
  /**                                                                                                                 //
    The post author's name                                                                                            //
  */                                                                                                                  //
  author: {                                                                                                           // 207
    type: String,                                                                                                     // 208
    optional: true                                                                                                    // 209
  },                                                                                                                  //
  /**                                                                                                                 //
    The post author's `_id`.                                                                                          //
  */                                                                                                                  //
  userId: {                                                                                                           // 214
    type: String,                                                                                                     // 215
    optional: true,                                                                                                   // 216
    // regEx: SimpleSchema.RegEx.Id,                                                                                  //
    editableBy: ["admin"],                                                                                            // 218
    autoform: {                                                                                                       // 219
      group: 'admin',                                                                                                 // 220
      options: function () {                                                                                          // 221
        return Meteor.users.find().map(function (user) {                                                              // 222
          return {                                                                                                    // 223
            value: user._id,                                                                                          // 224
            label: Users.getDisplayName(user)                                                                         // 225
          };                                                                                                          //
        });                                                                                                           //
      }                                                                                                               //
    }                                                                                                                 //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
// schema transforms                                                                                                  //
Meteor.startup(function () {                                                                                          // 234
  // needs to happen after every fields were added                                                                    //
  Posts.internationalize();                                                                                           // 236
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Attach schema to Posts collection                                                                                  //
 */                                                                                                                   //
Posts.attachSchema(Posts.schema);                                                                                     // 242
                                                                                                                      //
Posts.allow({                                                                                                         // 244
  update: _.partial(Telescope.allowCheck, Posts),                                                                     // 245
  remove: _.partial(Telescope.allowCheck, Posts)                                                                      // 246
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/parameters.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Parameter callbacks let you add parameters to subscriptions                                                        //
 * @namespace Posts.parameters                                                                                        //
 */                                                                                                                   //
Posts.parameters = {};                                                                                                // 5
                                                                                                                      //
/**                                                                                                                   //
 * Takes a set of terms, and translates them into a `parameter` object containing the appropriate find                //
 * and options arguments for the subscriptions's Posts.find()                                                         //
 * @param {Object} terms                                                                                              //
 */                                                                                                                   //
Posts.parameters.get = function (terms) {                                                                             // 12
                                                                                                                      //
  // add this to ensure all post publications pass audit-arguments-check                                              //
  check(terms, Match.Any);                                                                                            // 15
                                                                                                                      //
  // console.log(terms)                                                                                               //
                                                                                                                      //
  // note: using jquery's extend() with "deep" parameter set to true instead of shallow _.extend()                    //
  // see: http://api.jquery.com/jQuery.extend/                                                                        //
                                                                                                                      //
  // initialize parameters by extending baseParameters object, to avoid passing it by reference                       //
  var parameters = Telescope.utils.deepExtend(true, {}, Posts.views.baseParameters);                                  // 23
                                                                                                                      //
  // iterate over postsParameters callbacks                                                                           //
  parameters = Telescope.callbacks.run("postsParameters", parameters, terms);                                         // 26
                                                                                                                      //
  // if sort options are not provided, default to "top" sort                                                          //
  if (_.isEmpty(parameters.options.sort)) {                                                                           // 29
    parameters.options.sort = { sticky: -1, score: -1 };                                                              // 30
  }                                                                                                                   //
                                                                                                                      //
  // extend sort to sort posts by _id to break ties                                                                   //
  // NOTE: always do this last to avoid _id sort overriding another sort                                              //
  parameters = Telescope.utils.deepExtend(true, parameters, { options: { sort: { _id: -1 } } });                      // 35
                                                                                                                      //
  // console.log(parameters);                                                                                         //
                                                                                                                      //
  return parameters;                                                                                                  // 39
};                                                                                                                    //
                                                                                                                      //
// Parameter callbacks                                                                                                //
                                                                                                                      //
// View Parameter                                                                                                     //
// Add a "view" property to terms which can be used to filter posts.                                                  //
function addViewParameter(parameters, terms) {                                                                        // 46
                                                                                                                      //
  // if view is not defined, default to "top"                                                                         //
  var view = !!terms.view ? Telescope.utils.dashToCamel(terms.view) : 'top';                                          // 49
                                                                                                                      //
  // get query parameters according to current view                                                                   //
  if (typeof Posts.views[view] !== 'undefined') parameters = Telescope.utils.deepExtend(true, parameters, Posts.views[view](terms));
                                                                                                                      //
  return parameters;                                                                                                  // 55
}                                                                                                                     //
Telescope.callbacks.add("postsParameters", addViewParameter);                                                         // 57
                                                                                                                      //
// View Parameter                                                                                                     //
// Add "after" and "before" properties to terms which can be used to limit posts in time.                             //
function addTimeParameter(parameters, terms) {                                                                        // 61
                                                                                                                      //
  if (typeof parameters.find.postedAt === "undefined") {                                                              // 63
                                                                                                                      //
    var postedAt = {};                                                                                                // 65
                                                                                                                      //
    if (terms.after) {                                                                                                // 67
      postedAt.$gte = moment(terms.after, "YYYY-MM-DD").startOf('day').toDate();                                      // 68
    }                                                                                                                 //
                                                                                                                      //
    if (terms.before) {                                                                                               // 71
      postedAt.$lt = moment(terms.before, "YYYY-MM-DD").endOf('day').toDate();                                        // 72
    }                                                                                                                 //
                                                                                                                      //
    if (!_.isEmpty(postedAt)) {                                                                                       // 75
      parameters.find.postedAt = postedAt;                                                                            // 76
    }                                                                                                                 //
  }                                                                                                                   //
                                                                                                                      //
  return parameters;                                                                                                  // 81
}                                                                                                                     //
Telescope.callbacks.add("postsParameters", addTimeParameter);                                                         // 83
                                                                                                                      //
// limit the number of items that can be requested at once                                                            //
function limitPosts(parameters, terms) {                                                                              // 86
  var maxLimit = 200;                                                                                                 // 87
  // if a limit was provided with the terms, add it too (note: limit=0 means "no limit")                              //
  if (typeof terms.limit !== 'undefined') {                                                                           // 89
    _.extend(parameters.options, { limit: parseInt(terms.limit) });                                                   // 90
  }                                                                                                                   //
                                                                                                                      //
  // limit to "maxLimit" items at most when limit is undefined, equal to 0, or superior to maxLimit                   //
  if (!parameters.options.limit || parameters.options.limit === 0 || parameters.options.limit > maxLimit) {           // 94
    parameters.options.limit = maxLimit;                                                                              // 95
  }                                                                                                                   //
  return parameters;                                                                                                  // 97
}                                                                                                                     //
Telescope.callbacks.add("postsParameters", limitPosts);                                                               // 99
                                                                                                                      //
// hide future scheduled posts unless "showFuture" is set to true or postedAt is already defined                      //
function hideFuturePosts(parameters, terms) {                                                                         // 102
                                                                                                                      //
  // var now = new Date();                                                                                            //
  var inOneHour = moment().add(1, "hour").toDate();                                                                   // 105
                                                                                                                      //
  if (!parameters.showFuture) {                                                                                       // 107
                                                                                                                      //
    if (!!parameters.find.postedAt) {                                                                                 // 109
                                                                                                                      //
      if (!!parameters.find.postedAt.$lt) {                                                                           // 111
                                                                                                                      //
        // if postedAt.$lt is defined, use it or current date plus one hour, whichever is earlier in time             //
        var lt = parameters.find.postedAt.$lt;                                                                        // 114
        parameters.find.postedAt.$lt = lt < inOneHour ? lt : inOneHour;                                               // 115
      } else {                                                                                                        //
                                                                                                                      //
        // if postedAt.$lt doesn't exist, use current date plus one hour                                              //
        parameters.find.postedAt.$lt = inOneHour;                                                                     // 120
      }                                                                                                               //
    } else {                                                                                                          //
                                                                                                                      //
      // if postedAt doesn't exist at all, set it to {$lt: now plus one hour}                                         //
      parameters.find.postedAt = { $lt: inOneHour };                                                                  // 127
    }                                                                                                                 //
  }                                                                                                                   //
                                                                                                                      //
  return parameters;                                                                                                  // 133
}                                                                                                                     //
Telescope.callbacks.add("postsParameters", hideFuturePosts);                                                          // 135
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/views.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Post views are filters used for subscribing to and viewing posts                                                   //
 * @namespace Posts.views                                                                                             //
 */                                                                                                                   //
Posts.views = {};                                                                                                     // 5
                                                                                                                      //
/**                                                                                                                   //
 * Add a post view                                                                                                    //
 * @param {string} viewName - The name of the view                                                                    //
 * @param {function} [viewFunction] - The function used to calculate query terms. Takes terms and baseParameters arguments
 */                                                                                                                   //
Posts.views.add = function (viewName, viewFunction) {                                                                 // 12
  Posts.views[viewName] = viewFunction;                                                                               // 13
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Base parameters that will be common to all other view unless specific properties are overwritten                   //
 */                                                                                                                   //
Posts.views.baseParameters = {                                                                                        // 19
  find: {                                                                                                             // 20
    status: Posts.config.STATUS_APPROVED                                                                              // 21
  },                                                                                                                  //
  options: {                                                                                                          // 23
    limit: 10                                                                                                         // 24
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Top view                                                                                                           //
 */                                                                                                                   //
Posts.views.add("top", function (terms) {                                                                             // 31
  return {                                                                                                            // 32
    options: { sort: { sticky: -1, score: -1 } }                                                                      // 33
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * New view                                                                                                           //
 */                                                                                                                   //
Posts.views.add("new", function (terms) {                                                                             // 40
  return {                                                                                                            // 41
    options: { sort: { sticky: -1, postedAt: -1 } }                                                                   // 42
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Best view                                                                                                          //
 */                                                                                                                   //
Posts.views.add("best", function (terms) {                                                                            // 49
  return {                                                                                                            // 50
    options: { sort: { sticky: -1, baseScore: -1 } }                                                                  // 51
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Pending view                                                                                                       //
 */                                                                                                                   //
Posts.views.add("pending", function (terms) {                                                                         // 58
  return {                                                                                                            // 59
    find: {                                                                                                           // 60
      status: Posts.config.STATUS_PENDING                                                                             // 61
    },                                                                                                                //
    options: { sort: { createdAt: -1 } },                                                                             // 63
    showFuture: true                                                                                                  // 64
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Rejected view                                                                                                      //
 */                                                                                                                   //
Posts.views.add("rejected", function (terms) {                                                                        // 71
  return {                                                                                                            // 72
    find: {                                                                                                           // 73
      status: Posts.config.STATUS_REJECTED                                                                            // 74
    },                                                                                                                //
    options: { sort: { createdAt: -1 } },                                                                             // 76
    showFuture: true                                                                                                  // 77
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Scheduled view                                                                                                     //
 */                                                                                                                   //
Posts.views.add("scheduled", function (terms) {                                                                       // 84
  return {                                                                                                            // 85
    find: { postedAt: { $gte: new Date() } },                                                                         // 86
    options: { sort: { postedAt: -1 } },                                                                              // 87
    showFuture: true                                                                                                  // 88
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * User posts view                                                                                                    //
 */                                                                                                                   //
Posts.views.add("userPosts", function (terms) {                                                                       // 95
  return {                                                                                                            // 96
    find: { userId: terms.userId },                                                                                   // 97
    options: { limit: 5, sort: { postedAt: -1 } }                                                                     // 98
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * User upvoted posts view                                                                                            //
 */                                                                                                                   //
Posts.views.add("userUpvotedPosts", function (terms) {                                                                // 105
  var user = Meteor.users.findOne(terms.userId);                                                                      // 106
  var postsIds = _.pluck(user.telescope.upvotedPosts, "itemId");                                                      // 107
  return {                                                                                                            // 108
    find: { _id: { $in: postsIds }, userId: { $ne: terms.userId } }, // exclude own posts                             // 109
    options: { limit: 5, sort: { postedAt: -1 } }                                                                     // 110
  };                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * User downvoted posts view                                                                                          //
 */                                                                                                                   //
Posts.views.add("userDownvotedPosts", function (terms) {                                                              // 117
  var user = Meteor.users.findOne(terms.userId);                                                                      // 118
  var postsIds = _.pluck(user.telescope.downvotedPosts, "itemId");                                                    // 119
  // TODO: sort based on votedAt timestamp and not postedAt, if possible                                              //
  return {                                                                                                            // 121
    find: { _id: { $in: postsIds } },                                                                                 // 122
    options: { limit: 5, sort: { postedAt: -1 } }                                                                     // 123
  };                                                                                                                  //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/helpers.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
//////////////////                                                                                                    //
// Link Helpers //                                                                                                    //
//////////////////                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Return a post's link if it has one, else return its post page URL                                                  //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.getLink = function (post, isAbsolute) {                                                                         // 9
  return !!post.url ? Telescope.utils.getOutgoingUrl(post.url) : this.getPageUrl(post, isAbsolute);                   // 10
};                                                                                                                    //
Posts.helpers({ getLink: function (isAbsolute) {                                                                      // 12
    return Posts.getLink(this, isAbsolute);                                                                           // 12
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Depending on the settings, return either a post's URL link (if it has one) or its page URL.                        //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.getShareableLink = function (post) {                                                                            // 18
  return Settings.get("outsideLinksPointTo", "link") === "link" ? Posts.getLink(post) : Posts.getPageUrl(post, true);
};                                                                                                                    //
Posts.helpers({ getShareableLink: function () {                                                                       // 21
    return Posts.getShareableLink(this);                                                                              // 21
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Whether a post's link should open in a new tab or not                                                              //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.getLinkTarget = function (post) {                                                                               // 27
  return !!post.url ? "_blank" : "";                                                                                  // 28
};                                                                                                                    //
Posts.helpers({ getLinkTarget: function () {                                                                          // 30
    return Posts.getLinkTarget(this);                                                                                 // 30
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Get URL of a post page.                                                                                            //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.getPageUrl = function (post, isAbsolute) {                                                                      // 36
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                        // 37
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                           // 38
  return prefix + FlowRouter.path("postPage", post);                                                                  // 39
};                                                                                                                    //
Posts.helpers({ getPageUrl: function (isAbsolute) {                                                                   // 41
    return Posts.getPageUrl(this, isAbsolute);                                                                        // 41
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Get post edit page URL.                                                                                            //
 * @param {String} id                                                                                                 //
 */                                                                                                                   //
Posts.getEditUrl = function (post, isAbsolute) {                                                                      // 47
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                        // 48
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                           // 49
  return prefix + FlowRouter.path("postEdit", post);                                                                  // 50
};                                                                                                                    //
Posts.helpers({ getEditUrl: function (isAbsolute) {                                                                   // 52
    return Posts.getEditUrl(this, isAbsolute);                                                                        // 52
  } });                                                                                                               //
                                                                                                                      //
///////////////////                                                                                                   //
// Other Helpers //                                                                                                   //
///////////////////                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Get a post author's name                                                                                           //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.getAuthorName = function (post) {                                                                               // 62
  var user = Meteor.users.findOne(post.userId);                                                                       // 63
  if (user) {                                                                                                         // 64
    return user.getDisplayName();                                                                                     // 65
  } else {                                                                                                            //
    return post.author;                                                                                               // 67
  }                                                                                                                   //
};                                                                                                                    //
Posts.helpers({ getAuthorName: function () {                                                                          // 70
    return Posts.getAuthorName(this);                                                                                 // 70
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Get default status for new posts.                                                                                  //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Posts.getDefaultStatus = function (user) {                                                                            // 76
  var hasAdminRights = typeof user === 'undefined' ? false : Users.is.admin(user);                                    // 77
  if (hasAdminRights || !Settings.get('requirePostsApproval', false)) {                                               // 78
    // if user is admin, or else post approval is not required                                                        //
    return Posts.config.STATUS_APPROVED;                                                                              // 80
  } else {                                                                                                            //
    // else                                                                                                           //
    return Posts.config.STATUS_PENDING;                                                                               // 83
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a post is approved                                                                                        //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.isApproved = function (post) {                                                                                  // 91
  return post.status === Posts.config.STATUS_APPROVED;                                                                // 92
};                                                                                                                    //
Posts.helpers({ isApproved: function () {                                                                             // 94
    return Posts.isApproved(this);                                                                                    // 94
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Check to see if post URL is unique.                                                                                //
 * We need the current user so we know who to upvote the existing post as.                                            //
 * @param {String} url                                                                                                //
 */                                                                                                                   //
Posts.checkForSameUrl = function (url) {                                                                              // 101
                                                                                                                      //
  // check that there are no previous posts with the same link in the past 6 months                                   //
  var sixMonthsAgo = moment().subtract(6, 'months').toDate();                                                         // 104
  var postWithSameLink = Posts.findOne({ url: url, postedAt: { $gte: sixMonthsAgo } });                               // 105
                                                                                                                      //
  if (typeof postWithSameLink !== 'undefined') {                                                                      // 107
    throw new Meteor.Error('603', i18n.t('this_link_has_already_been_posted'), postWithSameLink._id);                 // 108
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * When on a post page, return the current post                                                                       //
 */                                                                                                                   //
Posts.current = function () {                                                                                         // 115
  return Posts.findOne(FlowRouter.getParam("_id"));                                                                   // 116
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Check to see if a post is a link to a video                                                                        //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Posts.isVideo = function (post) {                                                                                     // 123
  return post.media && post.media.type === "video";                                                                   // 124
};                                                                                                                    //
Posts.helpers({ isVideo: function () {                                                                                // 126
    return Posts.isVideo(this);                                                                                       // 126
  } });                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/modules.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Telescope.modules.add("postsListTop", {                                                                               // 1
  template: "views_menu",                                                                                             // 2
  order: 1                                                                                                            // 3
});                                                                                                                   //
                                                                                                                      //
Telescope.modules.add("postComponents", [{                                                                            // 6
  template: 'post_rank',                                                                                              // 8
  order: 1                                                                                                            // 9
}, {                                                                                                                  //
  template: 'post_vote',                                                                                              // 12
  order: 10                                                                                                           // 13
}, {                                                                                                                  //
  template: 'post_content',                                                                                           // 16
  order: 20                                                                                                           // 17
}, {                                                                                                                  //
  template: 'post_avatars',                                                                                           // 20
  order: 30                                                                                                           // 21
}, {                                                                                                                  //
  template: 'post_discuss',                                                                                           // 24
  order: 40                                                                                                           // 25
}, {                                                                                                                  //
  template: 'post_actions',                                                                                           // 28
  order: 50                                                                                                           // 29
}]);                                                                                                                  //
                                                                                                                      //
Telescope.modules.add("postHeading", [{                                                                               // 33
  template: 'post_title',                                                                                             // 35
  order: 10                                                                                                           // 36
}, {                                                                                                                  //
  template: 'post_domain',                                                                                            // 39
  order: 20                                                                                                           // 40
}]);                                                                                                                  //
                                                                                                                      //
Telescope.modules.add("postMeta", [{                                                                                  // 44
  template: 'post_author',                                                                                            // 46
  order: 10                                                                                                           // 47
}, {                                                                                                                  //
  template: 'post_info',                                                                                              // 50
  order: 20                                                                                                           // 51
}, {                                                                                                                  //
  template: 'post_comments_link',                                                                                     // 54
  order: 30                                                                                                           // 55
}, {                                                                                                                  //
  template: 'post_admin',                                                                                             // 58
  order: 50                                                                                                           // 59
}]);                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/callbacks.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
//////////////////////////////////////////////////////                                                                //
// Collection Hooks                                 //                                                                //
//////////////////////////////////////////////////////                                                                //
                                                                                                                      //
/**                                                                                                                   //
 * Generate HTML body from Markdown on post insert                                                                    //
 */                                                                                                                   //
Posts.before.insert(function (userId, doc) {                                                                          // 9
  if (!!doc.body) doc.htmlBody = Telescope.utils.sanitize(marked(doc.body));                                          // 10
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Generate HTML body from Markdown when post body is updated                                                         //
 */                                                                                                                   //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                    // 17
  // if body is being modified or $unset, update htmlBody too                                                         //
  if (Meteor.isServer && modifier.$set && modifier.$set.body) {                                                       // 19
    modifier.$set.htmlBody = Telescope.utils.sanitize(marked(modifier.$set.body));                                    // 20
  }                                                                                                                   //
  if (Meteor.isServer && modifier.$unset && typeof modifier.$unset.body !== "undefined") {                            // 22
    modifier.$unset.htmlBody = "";                                                                                    // 23
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Generate slug when post title is updated                                                                           //
 */                                                                                                                   //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                    // 30
  // if title is being modified, update slug too                                                                      //
  if (Meteor.isServer && modifier.$set && modifier.$set.title) {                                                      // 32
    modifier.$set.slug = Telescope.utils.slugify(modifier.$set.title);                                                // 33
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Disallow $rename                                                                                                   //
 */                                                                                                                   //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                    // 40
  if (!!modifier.$rename) {                                                                                           // 41
    throw new Meteor.Error("illegal $rename operator detected!");                                                     // 42
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
//////////////////////////////////////////////////////                                                                //
// Callbacks                                        //                                                                //
//////////////////////////////////////////////////////                                                                //
                                                                                                                      //
/**                                                                                                                   //
 * Increment the user's post count and upvote the post                                                                //
 */                                                                                                                   //
function afterPostSubmitOperations(post) {                                                                            // 53
  var userId = post.userId;                                                                                           // 54
  Meteor.users.update({ _id: userId }, { $inc: { "telescope.postCount": 1 } });                                       // 55
  return post;                                                                                                        // 56
}                                                                                                                     //
Telescope.callbacks.add("postSubmitAsync", afterPostSubmitOperations);                                                // 58
                                                                                                                      //
function upvoteOwnPost(post) {                                                                                        // 60
  var postAuthor = Meteor.users.findOne(post.userId);                                                                 // 61
  Telescope.upvoteItem(Posts, post._id, postAuthor);                                                                  // 62
  return post;                                                                                                        // 63
}                                                                                                                     //
Telescope.callbacks.add("postSubmitAsync", upvoteOwnPost);                                                            // 65
                                                                                                                      //
function setPostedAt(post) {                                                                                          // 67
  if (post.isApproved() && !post.postedAt) {                                                                          // 68
    Posts.update(post._id, { $set: { postedAt: new Date() } });                                                       // 69
  }                                                                                                                   //
}                                                                                                                     //
Telescope.callbacks.add("postEditAsync", setPostedAt);                                                                // 72
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/methods.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 *                                                                                                                    //
 * Post Methods                                                                                                       //
 *                                                                                                                    //
 */                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Insert a post in the database (note: optional post properties not listed here)                                     //
 * @param {Object} post - the post being inserted                                                                     //
 * @param {string} post.userId - the id of the user the post belongs to                                               //
 * @param {string} post.title - the post's title                                                                      //
 */                                                                                                                   //
Posts.submit = function (post) {                                                                                      // 13
                                                                                                                      //
  var userId = post.userId,                                                                                           // 15
      // at this stage, a userId is expected                                                                          //
  user = Users.findOne(userId);                                                                                       // 16
                                                                                                                      //
  // ------------------------------ Checks ------------------------------ //                                          //
                                                                                                                      //
  // check that a title was provided                                                                                  //
  if (!post.title) throw new Meteor.Error(602, i18n.t('please_fill_in_a_title'));                                     // 21
                                                                                                                      //
  // check that there are no posts with the same URL                                                                  //
  if (!!post.url) Posts.checkForSameUrl(post.url, user);                                                              // 25
                                                                                                                      //
  // ------------------------------ Properties ------------------------------ //                                      //
                                                                                                                      //
  var defaultProperties = {                                                                                           // 30
    createdAt: new Date(),                                                                                            // 31
    author: Users.getDisplayNameById(userId),                                                                         // 32
    upvotes: 0,                                                                                                       // 33
    downvotes: 0,                                                                                                     // 34
    commentCount: 0,                                                                                                  // 35
    clickCount: 0,                                                                                                    // 36
    viewCount: 0,                                                                                                     // 37
    baseScore: 0,                                                                                                     // 38
    score: 0,                                                                                                         // 39
    inactive: false,                                                                                                  // 40
    sticky: false,                                                                                                    // 41
    status: Posts.getDefaultStatus()                                                                                  // 42
  };                                                                                                                  //
                                                                                                                      //
  post = _.extend(defaultProperties, post);                                                                           // 45
                                                                                                                      //
  // if post is approved but doesn't have a postedAt date, give it a default date                                     //
  // note: pending posts get their postedAt date only once theyre approved                                            //
  if (post.status === Posts.config.STATUS_APPROVED && !post.postedAt) post.postedAt = new Date();                     // 49
                                                                                                                      //
  // clean up post title                                                                                              //
  post.title = Telescope.utils.cleanUp(post.title);                                                                   // 53
                                                                                                                      //
  // generate slug                                                                                                    //
  post.slug = Telescope.utils.slugify(post.title);                                                                    // 56
                                                                                                                      //
  // ------------------------------ Callbacks ------------------------------ //                                       //
                                                                                                                      //
  // run all post submit server callbacks on post object successively                                                 //
  post = Telescope.callbacks.run("postSubmit", post);                                                                 // 61
                                                                                                                      //
  // -------------------------------- Insert ------------------------------- //                                       //
                                                                                                                      //
  post._id = Posts.insert(post);                                                                                      // 65
                                                                                                                      //
  // --------------------- Server-Side Async Callbacks --------------------- //                                       //
                                                                                                                      //
  // note: query for post to get fresh document with collection-hooks effects applied                                 //
  Telescope.callbacks.runAsync("postSubmitAsync", Posts.findOne(post._id));                                           // 70
                                                                                                                      //
  return post;                                                                                                        // 72
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Edit a post in the database                                                                                        //
 * @param {string} postId – the ID of the post being edited                                                           //
 * @param {Object} modifier – the modifier object                                                                     //
 * @param {Object} post - the current post object                                                                     //
 */                                                                                                                   //
Posts.edit = function (postId, modifier, post) {                                                                      // 81
                                                                                                                      //
  if (typeof post === "undefined") {                                                                                  // 83
    post = Posts.findOne(postId);                                                                                     // 84
  }                                                                                                                   //
                                                                                                                      //
  // ------------------------------ Callbacks ------------------------------ //                                       //
                                                                                                                      //
  modifier = Telescope.callbacks.run("postEdit", modifier, post);                                                     // 89
                                                                                                                      //
  // ------------------------------ Update ------------------------------ //                                          //
                                                                                                                      //
  Posts.update(postId, modifier);                                                                                     // 93
                                                                                                                      //
  // ------------------------------ Callbacks ------------------------------ //                                       //
                                                                                                                      //
  Telescope.callbacks.runAsync("postEditAsync", Posts.findOne(postId), post);                                         // 97
                                                                                                                      //
  // ------------------------------ After Update ------------------------------ //                                    //
  return Posts.findOne(postId);                                                                                       // 100
};                                                                                                                    //
                                                                                                                      //
// ------------------------------------------------------------------------------------------- //                     //
// ----------------------------------------- Methods ----------------------------------------- //                     //
// ------------------------------------------------------------------------------------------- //                     //
                                                                                                                      //
var postViews = [];                                                                                                   // 107
                                                                                                                      //
Meteor.methods({                                                                                                      // 109
                                                                                                                      //
  /**                                                                                                                 //
   * Meteor method for submitting a post from the client                                                              //
   * @memberof Posts                                                                                                  //
   * @param {Object} post - the post being inserted                                                                   //
   */                                                                                                                 //
  submitPost: function (post) {                                                                                       // 116
                                                                                                                      //
    check(post, Posts.simpleSchema());                                                                                // 118
                                                                                                                      //
    // required properties:                                                                                           //
    // title                                                                                                          //
                                                                                                                      //
    // optional properties                                                                                            //
    // URL                                                                                                            //
    // body                                                                                                           //
    // categories                                                                                                     //
    // thumbnailUrl                                                                                                   //
                                                                                                                      //
    // NOTE: the current user and the post author user might be two different users!                                  //
    var user = Meteor.user(),                                                                                         // 130
        hasAdminRights = Users.is.admin(user),                                                                        //
        schema = Posts.simpleSchema()._schema;                                                                        //
                                                                                                                      //
    // ------------------------------ Checks ------------------------------ //                                        //
                                                                                                                      //
    // check that user can post                                                                                       //
    if (!user || !Users.can.post(user)) throw new Meteor.Error(601, i18n.t('you_need_to_login_or_be_invited_to_post_new_stories'));
                                                                                                                      //
    // --------------------------- Rate Limiting -------------------------- //                                        //
                                                                                                                      //
    if (!hasAdminRights) {                                                                                            // 142
                                                                                                                      //
      var timeSinceLastPost = Users.timeSinceLast(user, Posts),                                                       // 144
          numberOfPostsInPast24Hours = Users.numberOfItemsInPast24Hours(user, Posts),                                 //
          postInterval = Math.abs(parseInt(Settings.get('postInterval', 30))),                                        //
          maxPostsPer24Hours = Math.abs(parseInt(Settings.get('maxPostsPerDay', 30)));                                //
                                                                                                                      //
      // check that user waits more than X seconds between posts                                                      //
      if (timeSinceLastPost < postInterval) throw new Meteor.Error(604, i18n.t('please_wait') + (postInterval - timeSinceLastPost) + i18n.t('seconds_before_posting_again'));
                                                                                                                      //
      // check that the user doesn't post more than Y posts per day                                                   //
      if (numberOfPostsInPast24Hours > maxPostsPer24Hours) throw new Meteor.Error(605, i18n.t('sorry_you_cannot_submit_more_than') + maxPostsPer24Hours + i18n.t('posts_per_day'));
    }                                                                                                                 //
                                                                                                                      //
    // ------------------------------ Properties ------------------------------ //                                    //
                                                                                                                      //
    // admin-only properties                                                                                          //
    // status                                                                                                         //
    // postedAt                                                                                                       //
    // userId                                                                                                         //
    // sticky (default to false)                                                                                      //
                                                                                                                      //
    // go over each schema field and throw an error if it's not editable                                              //
    _.keys(post).forEach(function (fieldName) {                                                                       // 168
                                                                                                                      //
      var field = schema[fieldName];                                                                                  // 170
      if (!Users.can.submitField(user, field)) {                                                                      // 171
        throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);     // 172
      }                                                                                                               //
    });                                                                                                               //
                                                                                                                      //
    // if no post status has been set, set it now                                                                     //
    if (!post.status) {                                                                                               // 178
      post.status = Posts.getDefaultStatus(user);                                                                     // 179
    }                                                                                                                 //
                                                                                                                      //
    // if no userId has been set, default to current user id                                                          //
    if (!post.userId) {                                                                                               // 183
      post.userId = user._id;                                                                                         // 184
    }                                                                                                                 //
                                                                                                                      //
    return Posts.submit(post);                                                                                        // 187
  },                                                                                                                  //
                                                                                                                      //
  /**                                                                                                                 //
   * Meteor method for editing a post from the client                                                                 //
   * @memberof Posts                                                                                                  //
   * @param {Object} modifier - the update modifier                                                                   //
   * @param {Object} postId - the id of the post being updated                                                        //
   */                                                                                                                 //
  editPost: function (modifier, postId) {                                                                             // 196
                                                                                                                      //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know               //
    check(modifier, Match.OneOf({ $set: Posts.simpleSchema() }, { $unset: Object }, { $set: Posts.simpleSchema(), $unset: Object }));
    check(postId, String);                                                                                            // 200
                                                                                                                      //
    var user = Meteor.user(),                                                                                         // 202
        post = Posts.findOne(postId),                                                                                 //
        schema = Posts.simpleSchema()._schema;                                                                        //
                                                                                                                      //
    // ------------------------------ Checks ------------------------------ //                                        //
                                                                                                                      //
    // check that user can edit document                                                                              //
    if (!user || !Users.can.edit(user, post)) {                                                                       // 209
      throw new Meteor.Error(601, i18n.t('sorry_you_cannot_edit_this_post'));                                         // 210
    }                                                                                                                 //
                                                                                                                      //
    // go over each field and throw an error if it's not editable                                                     //
    // loop over each operation ($set, $unset, etc.)                                                                  //
    _.each(modifier, function (operation) {                                                                           // 215
      // loop over each property being operated on                                                                    //
      _.keys(operation).forEach(function (fieldName) {                                                                // 217
                                                                                                                      //
        var field = schema[fieldName];                                                                                // 219
        if (!Users.can.editField(user, field, post)) {                                                                // 220
          throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);   // 221
        }                                                                                                             //
      });                                                                                                             //
    });                                                                                                               //
                                                                                                                      //
    return Posts.edit(postId, modifier, post);                                                                        // 227
  },                                                                                                                  //
                                                                                                                      //
  setPostedAt: function (post, customPostedAt) {                                                                      // 231
                                                                                                                      //
    // this method is not actually used?                                                                              //
                                                                                                                      //
    check(post, Posts.simpleSchema());                                                                                // 235
    check(customPostedAt, Date);                                                                                      // 236
                                                                                                                      //
    var postedAt = new Date(); // default to current date and time                                                    // 238
                                                                                                                      //
    if (Users.is.admin(Meteor.user()) && typeof customPostedAt !== 'undefined') // if user is admin and a custom datetime has been set
      postedAt = customPostedAt;                                                                                      // 241
                                                                                                                      //
    Posts.update(post._id, { $set: { postedAt: postedAt } });                                                         // 243
  },                                                                                                                  //
                                                                                                                      //
  approvePost: function (postId) {                                                                                    // 246
                                                                                                                      //
    check(postId, String);                                                                                            // 248
                                                                                                                      //
    var post = Posts.findOne(postId);                                                                                 // 250
    var now = new Date();                                                                                             // 251
                                                                                                                      //
    if (Users.is.admin(Meteor.user())) {                                                                              // 253
                                                                                                                      //
      var set = { status: Posts.config.STATUS_APPROVED };                                                             // 255
                                                                                                                      //
      if (!post.postedAt) {                                                                                           // 257
        set.postedAt = now;                                                                                           // 258
      }                                                                                                               //
                                                                                                                      //
      Posts.update(post._id, { $set: set });                                                                          // 261
                                                                                                                      //
      Telescope.callbacks.runAsync("postApproveAsync", post);                                                         // 263
    } else {                                                                                                          //
      Messages.flash('You need to be an admin to do that.', "error");                                                 // 266
    }                                                                                                                 //
  },                                                                                                                  //
                                                                                                                      //
  rejectPost: function (postId) {                                                                                     // 270
                                                                                                                      //
    check(postId, String);                                                                                            // 272
    var post = Posts.findOne(postId);                                                                                 // 273
                                                                                                                      //
    if (Users.is.admin(Meteor.user())) {                                                                              // 275
                                                                                                                      //
      Posts.update(post._id, { $set: { status: Posts.config.STATUS_REJECTED } });                                     // 277
                                                                                                                      //
      Telescope.callbacks.runAsync("postRejectAsync", post);                                                          // 279
    } else {                                                                                                          //
      Messages.flash('You need to be an admin to do that.', "error");                                                 // 282
    }                                                                                                                 //
  },                                                                                                                  //
                                                                                                                      //
  increasePostViews: function (postId, sessionId) {                                                                   // 286
                                                                                                                      //
    check(postId, String);                                                                                            // 288
    check(sessionId, Match.Any);                                                                                      // 289
                                                                                                                      //
    this.unblock();                                                                                                   // 291
                                                                                                                      //
    // only let users increment a post's view counter once per session                                                //
    var view = { _id: postId, userId: this.userId, sessionId: sessionId };                                            // 294
                                                                                                                      //
    if (_.where(postViews, view).length === 0) {                                                                      // 296
      postViews.push(view);                                                                                           // 297
      Posts.update(postId, { $inc: { viewCount: 1 } });                                                               // 298
    }                                                                                                                 //
  },                                                                                                                  //
                                                                                                                      //
  deletePostById: function (postId) {                                                                                 // 302
                                                                                                                      //
    check(postId, String);                                                                                            // 304
                                                                                                                      //
    // remove post comments                                                                                           //
    // if(!this.isSimulation) {                                                                                       //
    //   Comments.remove({post: postId});                                                                             //
    // }                                                                                                              //
    // NOTE: actually, keep comments after all                                                                        //
                                                                                                                      //
    var post = Posts.findOne({ _id: postId });                                                                        // 312
                                                                                                                      //
    if (!Meteor.userId() || !Users.can.editById(Meteor.userId(), post)) throw new Meteor.Error(606, 'You need permission to edit or delete a post');
                                                                                                                      //
    // decrement post count                                                                                           //
    Users.update({ _id: post.userId }, { $inc: { "telescope.postCount": -1 } });                                      // 317
                                                                                                                      //
    // delete post                                                                                                    //
    Posts.remove(postId);                                                                                             // 320
                                                                                                                      //
    Telescope.callbacks.runAsync("postDeleteAsync", post);                                                            // 322
  },                                                                                                                  //
                                                                                                                      //
  checkForDuplicates: function (url) {                                                                                // 326
    Posts.checkForSameUrl(url);                                                                                       // 327
  }                                                                                                                   //
                                                                                                                      //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/transitions.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Posts.addStateTransition("status", [                                                                               //
//   {                                                                                                                //
//     name: "approve",                                                                                               //
//     from: "*",                                                                                                     //
//     to: Posts.config.STATUS_APPROVED,                                                                              //
//     callback: function (oldPost, newPost) {                                                                        //
//       Telescope.callbacks.runAsync("postApproveAsync", newPost, oldPost);                                          //
//     }                                                                                                              //
//   },                                                                                                               //
//   {                                                                                                                //
//     name: "unapprove",                                                                                             //
//     from: Posts.config.STATUS_APPROVED,                                                                            //
//     to: "*",                                                                                                       //
//     callback: function (oldPost, newPost) {                                                                        //
//       Telescope.callbacks.runAsync("postUnapproveAsync", newPost, oldPost);                                        //
//     }                                                                                                              //
//   },                                                                                                               //
//   {                                                                                                                //
//     name: "makePending",                                                                                           //
//     from: "*",                                                                                                     //
//     to: Posts.config.STATUS_PENDING,                                                                               //
//     callback: function (oldPost, newPost) {                                                                        //
//       Telescope.callbacks.runAsync("postMakePendingAsync", newPost, oldPost);                                      //
//     }                                                                                                              //
//   },                                                                                                               //
//   {                                                                                                                //
//     name: "reject",                                                                                                //
//     from: "*",                                                                                                     //
//     to: Posts.config.STATUS_REJECTED,                                                                              //
//     callback: function (oldPost, newPost) {                                                                        //
//       Telescope.callbacks.runAsync("postRejectAsync", newPost, oldPost);                                           //
//     }                                                                                                              //
//   }                                                                                                                //
// ]);                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/menus.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Posts.getRoute = function () {                                                                                        // 1
  FlowRouter.watchPathChange();                                                                                       // 2
  var viewName = this.name;                                                                                           // 3
  var currentQuery = _.clone(FlowRouter.current().queryParams);                                                       // 4
  var defaultView = Settings.get("defaultView", "top");                                                               // 5
  var newQuery;                                                                                                       // 6
                                                                                                                      //
  if (viewName === defaultView) {                                                                                     // 8
    // for the default view, just remove the "view" parameter altogether                                              //
    delete currentQuery.view;                                                                                         // 10
    newQuery = currentQuery;                                                                                          // 11
  } else {                                                                                                            //
    newQuery = _.extend(currentQuery, { view: viewName });                                                            // 13
  }                                                                                                                   //
                                                                                                                      //
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);                                      // 16
};                                                                                                                    //
                                                                                                                      //
// array containing items in the views menu                                                                           //
var viewsMenuItems = [{                                                                                               // 20
  route: Posts.getRoute,                                                                                              // 22
  name: 'top',                                                                                                        // 23
  label: 'top',                                                                                                       // 24
  description: 'most_popular_posts'                                                                                   // 25
}, {                                                                                                                  //
  route: Posts.getRoute,                                                                                              // 28
  name: 'new',                                                                                                        // 29
  label: 'new',                                                                                                       // 30
  description: 'newest_posts'                                                                                         // 31
}, {                                                                                                                  //
  route: Posts.getRoute,                                                                                              // 34
  name: 'best',                                                                                                       // 35
  label: 'best',                                                                                                      // 36
  description: 'highest_ranked_posts_ever'                                                                            // 37
}, {                                                                                                                  //
  route: Posts.getRoute,                                                                                              // 40
  name: 'pending',                                                                                                    // 41
  label: 'pending',                                                                                                   // 42
  description: 'posts_awaiting_moderation',                                                                           // 43
  adminOnly: true                                                                                                     // 44
}, {                                                                                                                  //
  route: Posts.getRoute,                                                                                              // 47
  name: 'rejected',                                                                                                   // 48
  label: 'rejected',                                                                                                  // 49
  description: 'rejected_posts',                                                                                      // 50
  adminOnly: true                                                                                                     // 51
}, {                                                                                                                  //
  route: Posts.getRoute,                                                                                              // 54
  name: 'scheduled',                                                                                                  // 55
  label: 'scheduled',                                                                                                 // 56
  description: 'future_scheduled_posts',                                                                              // 57
  adminOnly: true                                                                                                     // 58
}];                                                                                                                   //
                                                                                                                      //
Telescope.menuItems.add("viewsMenu", viewsMenuItems);                                                                 // 62
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/routes.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
FlowRouter.route('/', {                                                                                               // 1
  name: "postsDefault",                                                                                               // 2
  action: function (params, queryParams) {                                                                            // 3
    BlazeLayout.render("layout", { main: "main_posts_list" });                                                        // 4
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/posts/:_id/edit', {                                                                                // 8
  name: "postEdit",                                                                                                   // 9
  action: function (params, queryParams) {                                                                            // 10
    BlazeLayout.render("layout", { main: "post_edit" });                                                              // 11
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/posts/:_id/:slug?', {                                                                              // 15
  name: "postPage",                                                                                                   // 16
  action: function (params, queryParams) {                                                                            // 17
    BlazeLayout.render("layout", { main: "post_page" });                                                              // 18
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
var trackRouteEntry = function (context) {                                                                            // 22
  var sessionId = Meteor.default_connection && Meteor.default_connection._lastSessionId ? Meteor.default_connection._lastSessionId : null;
  Meteor.call('increasePostViews', context.params._id, sessionId);                                                    // 24
};                                                                                                                    //
                                                                                                                      //
FlowRouter.route('/submit', {                                                                                         // 27
  name: "postSubmit",                                                                                                 // 28
  action: function (params, queryParams) {                                                                            // 29
    BlazeLayout.render("layout", { main: "post_submit" });                                                            // 30
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/server/publications.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Posts._ensureIndex({ "status": 1, "postedAt": 1 });                                                                   // 1
                                                                                                                      //
// Publish a list of posts                                                                                            //
                                                                                                                      //
Meteor.publish('postsList', function (terms) {                                                                        // 5
                                                                                                                      //
  terms.userId = this.userId; // add userId to terms                                                                  // 7
                                                                                                                      //
  if (Users.can.viewById(this.userId)) {                                                                              // 9
    var parameters = Posts.parameters.get(terms),                                                                     // 10
        posts = Posts.find(parameters.find, parameters.options);                                                      //
                                                                                                                      //
    return posts;                                                                                                     // 13
  }                                                                                                                   //
  return [];                                                                                                          // 15
});                                                                                                                   //
                                                                                                                      //
// Publish all the users that have posted the currently displayed list of posts                                       //
// plus the commenters for each post                                                                                  //
                                                                                                                      //
Meteor.publish('postsListUsers', function (terms) {                                                                   // 21
                                                                                                                      //
  terms.userId = this.userId; // add userId to terms                                                                  // 23
                                                                                                                      //
  if (Users.can.viewById(this.userId)) {                                                                              // 25
    var parameters = Posts.parameters.get(terms),                                                                     // 26
        posts = Posts.find(parameters.find, parameters.options),                                                      //
        userIds = _.pluck(posts.fetch(), 'userId');                                                                   //
                                                                                                                      //
    // for each post, add first four commenter's userIds to userIds array                                             //
    posts.forEach(function (post) {                                                                                   // 31
      userIds = userIds.concat(_.first(post.commenters, 4));                                                          // 32
    });                                                                                                               //
                                                                                                                      //
    userIds = _.unique(userIds);                                                                                      // 35
                                                                                                                      //
    return Meteor.users.find({ _id: { $in: userIds } }, { fields: Users.pubsub.avatarProperties, multi: true });      // 37
  }                                                                                                                   //
  return [];                                                                                                          // 39
});                                                                                                                   //
                                                                                                                      //
// Publish a single post                                                                                              //
                                                                                                                      //
Meteor.publish('singlePost', function (postId) {                                                                      // 44
                                                                                                                      //
  check(postId, String);                                                                                              // 46
                                                                                                                      //
  if (Users.can.viewById(this.userId)) {                                                                              // 48
    return Posts.find(postId);                                                                                        // 49
  }                                                                                                                   //
  return [];                                                                                                          // 51
});                                                                                                                   //
                                                                                                                      //
// Publish author of the current post, authors of its comments, and upvoters of the post                              //
                                                                                                                      //
Meteor.publish('postUsers', function (postId) {                                                                       // 56
                                                                                                                      //
  check(postId, String);                                                                                              // 58
                                                                                                                      //
  if (Users.can.viewById(this.userId)) {                                                                              // 60
    // publish post author and post commenters                                                                        //
    var post = Posts.findOne(postId);                                                                                 // 62
    var users = [];                                                                                                   // 63
                                                                                                                      //
    if (post) {                                                                                                       // 65
                                                                                                                      //
      users.push(post.userId); // publish post author's ID                                                            // 67
                                                                                                                      //
      // get IDs from all commenters on the post                                                                      //
      var comments = Comments.find({ postId: post._id }).fetch();                                                     // 70
      if (comments.length) {                                                                                          // 71
        users = users.concat(_.pluck(comments, "userId"));                                                            // 72
      }                                                                                                               //
                                                                                                                      //
      // publish upvoters                                                                                             //
      if (post.upvoters && post.upvoters.length) {                                                                    // 76
        users = users.concat(post.upvoters);                                                                          // 77
      }                                                                                                               //
                                                                                                                      //
      // publish downvoters                                                                                           //
      if (post.downvoters && post.downvoters.length) {                                                                // 81
        users = users.concat(post.downvoters);                                                                        // 82
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    // remove any duplicate IDs                                                                                       //
    users = _.unique(users);                                                                                          // 88
                                                                                                                      //
    return Meteor.users.find({ _id: { $in: users } }, { fields: Users.pubsub.publicProperties });                     // 90
  }                                                                                                                   //
  return [];                                                                                                          // 92
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/lib/server/fastrender.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var getDays = function (daysCount) {                                                                                  // 1
  var daysArray = [];                                                                                                 // 2
  // var days = this.days;                                                                                            //
  for (var i = 0; i < daysCount; i++) {                                                                               // 4
    daysArray.push({                                                                                                  // 5
      date: moment().subtract(i, 'days').startOf('day').toDate(),                                                     // 6
      index: i                                                                                                        // 7
    });                                                                                                               //
  }                                                                                                                   //
  return daysArray;                                                                                                   // 10
};                                                                                                                    //
                                                                                                                      //
Posts.fastRenderSubscribe = function (params) {                                                                       // 13
                                                                                                                      //
  var fr = this;                                                                                                      // 15
                                                                                                                      //
  // generate cat array                                                                                               //
  var categories = [];                                                                                                // 18
  var index = 0;                                                                                                      // 19
  while (!!params.query["cat[" + index + "]"]) {                                                                      // 20
    categories.push(params.query["cat[" + index + "]"]);                                                              // 21
    delete params.query["cat[" + index + "]"];                                                                        // 22
    index++;                                                                                                          // 23
  }                                                                                                                   //
                                                                                                                      //
  if (categories.length) {                                                                                            // 26
    params.query.cat = categories;                                                                                    // 27
  }                                                                                                                   //
                                                                                                                      //
  if (!params.query.limit) {                                                                                          // 30
    params.query.limit = Settings.get('postsPerPage', 10);                                                            // 31
  }                                                                                                                   //
                                                                                                                      //
  // special case for daily view                                                                                      //
  if (params.query.view === "daily") {                                                                                // 35
                                                                                                                      //
    var daysCount = params.days ? params.days : 5;                                                                    // 37
    var days = getDays(daysCount);                                                                                    // 38
                                                                                                                      //
    days.forEach(function (day) {                                                                                     // 40
                                                                                                                      //
      var subscriptionTerms = {                                                                                       // 42
        view: "top",                                                                                                  // 43
        date: day.date,                                                                                               // 44
        after: moment(day.date).format("YYYY-MM-DD"),                                                                 // 45
        before: moment(day.date).format("YYYY-MM-DD")                                                                 // 46
      };                                                                                                              //
                                                                                                                      //
      fr.subscribe('postsList', subscriptionTerms);                                                                   // 49
      fr.subscribe('postsListUsers', subscriptionTerms);                                                              // 50
    });                                                                                                               //
  } else {                                                                                                            //
                                                                                                                      //
    fr.subscribe('postsList', params.query);                                                                          // 57
    fr.subscribe('postsListUsers', params.query);                                                                     // 58
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 63
                                                                                                                      //
  FastRender.route("/", Posts.fastRenderSubscribe);                                                                   // 65
                                                                                                                      //
  FastRender.route("/posts/:_id/:slug?", function (params) {                                                          // 67
    var postId = params._id;                                                                                          // 68
    this.subscribe('singlePost', postId);                                                                             // 69
    this.subscribe('postUsers', postId);                                                                              // 70
    this.subscribe('commentsList', { view: 'postComments', postId: postId });                                         // 71
  });                                                                                                                 //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/ar.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                                 // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                                // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                       // 11
  TAPi18n.translations["ar"] = {};                                                                                    // 12
}                                                                                                                     // 13
                                                                                                                      // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                            // 15
  TAPi18n.translations["ar"][namespace] = {};                                                                         // 16
}                                                                                                                     // 17
                                                                                                                      // 18
_.extend(TAPi18n.translations["ar"][namespace], {"this_link_has_already_been_posted":"هذا الرابط موجود","sorry_you_cannot_submit_more_than":"ﻻ يمكنك اضافة اكثر من ","posts_per_day":"--","please_fill_in_a_title":"قم باضافة عنوان","seconds_before_posting_again":" ثواني قبل نشر مشاركة جديدة.","upvoted":"مصوت لهذه","posted_date":"تاريخ التقديم","posted_time":"توقيت التقديم","createdAt":"كتب على ","url":"رابط","body":"وصف","htmlBody":"Texte HTML","viewCount":"عدد المشاهدات","commentCount":"تعليقات","commenters":"معلقون","lastCommentedAt":"اخر تعليق على","clickCount":"عدد النقرات","baseScore":"النقاط الأساسية","upvotes":"تصويت مع","upvoters":"الموصوتون مع","downvotes":"تصويت ضد","downvoters":"الموصوتون ضد","score":"النتيجة","status":"status","sticky":"Mis en avant","inactive":"غير نشط","author":"كاتب","userId":"مستخدم","sorry_we_couldnt_find_any_posts":"ﻻ توجد اي مشاركة","your_post_has_been_deleted":"مشاركتك قد تم حذفها.","created":"استحدث","suggest_title":"اقترح عنوان","short_url":"رابط قصير","category":"مجموعة,","inactive_":"غير نشط؟","sticky_":"Mis en avant ?","submission_date":"تاريخ اﻻرسال","submission_time":"توقيت اﻻرسال","date":"تاريخ","submission":"ارسال","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"مﻻحظة:مشاركتك قيد المعاينة","user":"مستخدم","status_":"حاﻻت","approved":"مقبول","rejected":"مرفوض","delete_post":"احذف المشاركة","thanks_your_post_is_awaiting_approval":"شكرا, مشاركتك قيد العاينة","sorry_couldnt_find_a_title":"ﻻ يمكننا ايجاد عنوان واحد","please_fill_in_an_url_first":"يجب عليك كتابة الرابط","share":"شارك","discuss":"ناقش","upvote_":"صوت","votes":"اعدد الصوات","basescore":"النتيجة المبدئية","clicks":"نقرات","views":"مشاهدات","comment":"تعليق","point":"نقطة","points":"نقاط"});
TAPi18n._registerServerTranslator("ar", namespace);                                                                   // 20
                                                                                                                      // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/bg.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                            // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                       // 9
  TAPi18n.translations["bg"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                            // 13
  TAPi18n.translations["bg"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["bg"][namespace], {"this_link_has_already_been_posted":"Тази връзка вече е публикувана","sorry_you_cannot_submit_more_than":"Съжаляваме, неможете да предадете повече от ","posts_per_day":" публикации на ден","please_fill_in_a_title":"Моля въведете заглавие","seconds_before_posting_again":" секунди преди да публикувате отново","upvoted":"Харесан","posted_date":"Дата на публикуване","posted_time":"Време на публикуване","url":"URL","body":"тяло","score":"резултат","status":"статус","sticky":"Закачи","inactive":"неактивена","your_post_has_been_deleted":"Публикацията ви е изтритa.","created":"Създаден","suggest_title":"Предложи заглавие","short_url":"кратко URL","category":"Категория","inactive_":"Неактивен?","sticky_":"Закачи?","submission_date":"Дата на подаване","submission_time":"Време на подаване","date":"Дата","submission":"Подаване","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Забележка: тази публикация все още е висяща, така че няма дата на подаване.","user":"Потребител","status_":"Статус","approved":"Одобрен","rejected":"Отхвърлен","delete_post":"Изтрий публикацията","thanks_your_post_is_awaiting_approval":"Благодаря,  публикацията ви чака одобрение.","sorry_couldnt_find_a_title":"За съжаление, не можах да намеря заглавие...","please_fill_in_an_url_first":"Моля попълни URL първо!","share":"Сподели","discuss":"Обсъждане","upvote_":"Upvote","votes":"гласували","basescore":"Основен резултат","clicks":"Кликания","views":"Видяна","comment":"коментар","point":"точка","points":"точки"});
TAPi18n._registerServerTranslator("bg", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/cs.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                       // 9
  TAPi18n.translations["cs"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                            // 13
  TAPi18n.translations["cs"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["cs"][namespace], {"this_link_has_already_been_posted":"Tento odkaz byl již jednou vložen","sorry_you_cannot_submit_more_than":"Je nám líto, nelze vložit více než","posts_per_day":"příspěvků za den","please_fill_in_a_title":"Prosím, vyplňte název příspěvku","seconds_before_posting_again":"sekund před dalším vložením","upvoted":"Hlasováno +1","posted_date":"Datum vložení","posted_time":"Čas vložení","createdAt":"Vytvořeno","url":"URL","body":"Obsah","htmlBody":"HTML obsah","viewCount":"Počet shlédnutí","commentCount":"Počet komentářů","commenters":"Komentujících","lastCommentedAt":"Poslední komentář přidán v","clickCount":"Počet kliknutí","baseScore":"Skóre","upvotes":"Počet hlasů +1","upvoters":"Počet hlasujících +1","downvotes":"Počet hlasů -1","downvoters":"Počet hlasujících -1","score":"skóre","status":"status","sticky":"Připnout (zvýraznit)","inactive":"neaktivní","author":"autor","userId":"Uživatel","sorry_we_couldnt_find_any_posts":"Je nám líto, ale nenašli jsme žádné příspěvky.","your_post_has_been_deleted":"Váš příspěvek byl smazán.","created":"Vytvořeno","suggest_title":"Navrhněte název","short_url":"Krátká adresa URL","category":"Kategorie","inactive_":"Neaktivní?","sticky_":"Připnutý (zvýrazněný)?","submission_date":"Datum vložení","submission_time":"Čas vložení","date":"Datum","submission":"Vložení","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Poznámka: tento příspěvek stále čeká na schválení, takže zatím nemá čas vložení.","user":"Uživatel","status_":"Status","approved":"Schválený","rejected":"Zamítnutý","delete_post":"Smazaný příspěvek","thanks_your_post_is_awaiting_approval":"Děkujeme, váš příspěvek nyní čeká na schválení.","sorry_couldnt_find_a_title":"Omlouváme se, ale nemůžeme najít název...","please_fill_in_an_url_first":"Vyplňte, prosím, nejdříve URL (adresu webu)!","share":"Sdílet","discuss":"Diskutovat","upvote_":"Přidat hlas","votes":"hlasů","basescore":"Skóre","clicks":"kliknutí","views":"shlédnutí","comment":"komentář","point":"bod","points":"bodů"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/da.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                                   // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                       // 9
  TAPi18n.translations["da"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                            // 13
  TAPi18n.translations["da"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["da"][namespace], {"share":"Del","clicks":"klik","views":"visninger","comment":"kommentar","point":"point","points":"point"});
TAPi18n._registerServerTranslator("da", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/de.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                       // 9
  TAPi18n.translations["de"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                            // 13
  TAPi18n.translations["de"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["de"][namespace], {"this_link_has_already_been_posted":"Dieser Link wurde bereits gepostet","sorry_you_cannot_submit_more_than":"Es tut uns leid, Du kannst nicht mehr als ","posts_per_day":" Links pro Tag eintragen","please_fill_in_a_title":"Bitte fülle den Titel aus","url":"URL","body":"Beschreibung","score":"Punkte","status":"status","sticky":"Angeheftet","inactive":"inaktiv","your_post_has_been_deleted":"Dein Link wurde gelöscht.","created":"Erstellt","suggest_title":"Titelvorschlag","short_url":"Kurz-URL","category":"Kategorie","inactive_":"Inaktiv?","sticky_":"Anheften?","submission_date":"Eintragsdatum","submission_time":"Eintragszeit","date":"Datum","submission":"Eintragung","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Hinweis: Dieser Beitrag wartet noch auf Freischaltung, daher gibt es noch kein Datum und keine Uhrzeit.","user":"Benutzer","status_":"Status","approved":"Genehmigt","rejected":"Abgelehnt","delete_post":"Link löschen","thanks_your_post_is_awaiting_approval":"Vielen Dank, Dein Beitrag wartet auf Freischaltung.","sorry_couldnt_find_a_title":"Du hast vergessen einen Titel anzugeben...","please_fill_in_an_url_first":"Du musst eine URL/einen Link angeben!","share":"Teilen","discuss":"Kommentare","upvote_":"Abstimmen","votes":"Stimmen","basescore":"Punktebasis","clicks":"klicks","views":"views","comment":"Kommentar","point":"Punkt","points":"Punkte"});
TAPi18n._registerServerTranslator("de", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/el.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                       // 9
  TAPi18n.translations["el"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                            // 13
  TAPi18n.translations["el"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["el"][namespace], {"this_link_has_already_been_posted":"Αυτός ο σύνδεσμος υπάρχει ήδη","sorry_you_cannot_submit_more_than":"Δεν μπορείς να υποβάλεις περισσότερα από ","posts_per_day":" σχόλια την ημέρα","please_fill_in_a_title":"Παρακαλώ συμπληρώστε τον τίτλο","seconds_before_posting_again":" δευτερόλεπτα πριν ξανα δημοσιεύσετε","upvoted":"Υπερψηφισμένο","posted_date":"Ημερομηνία δημοσίευσης","posted_time":"Ωρα δημοσίευσης","createdAt":"Δημιουργήθηκε στις","url":"URL","body":"Κείμενο","htmlBody":"HTML κείμενο","viewCount":"Πλήθος προβολών","commentCount":"Πλήθος σχολίων","commenters":"Σχολιαστές","lastCommentedAt":"Τελευταίο σχόλιο στις","clickCount":"Πλήθος κλικ","baseScore":"Βασικό σκορ","upvotes":"Υπερψηφισμοί","upvoters":"Υπερψηφιστές","downvotes":"Καταψηφισμοί","downvoters":"Καταψηφιστές","score":"σκορ","status":"κατάσταση","sticky":"Προτεινόμενο","inactive":"ανενεργό","author":"Δημιουργός","userId":"Χρήστης","sorry_we_couldnt_find_any_posts":"Μας συγχωρείτε, δεν βρήκαμε καμιά δημοσίευση.","your_post_has_been_deleted":"Η δημοσίευση σου έχει διαγραφεί.","created":"Δημιουργήθηκε","suggest_title":"Πρότεινε ενα τίτλο","short_url":"Short URL","category":"Κατηγορία","inactive_":"Ανενεργό?","sticky_":"Προτεινόμενο?","submission_date":"Ημερομηνία Υποβολής","submission_time":"Ώρα Υποβολής","date":"Ημερομηνία","submission":"Υποβολή","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Note: this post is still pending so it has no submission timestamp yet.","user":"Χρήστης","status_":"Κατάσταση","approved":"Εγκρίθηκε","rejected":"Απορρίφθηκε","delete_post":"Διαγραφή δημοσίευσης","thanks_your_post_is_awaiting_approval":"Ευχαριστούμε, η δημοσίευση αναμένει εγκριση.","sorry_couldnt_find_a_title":"Συγγνώμη, ο τίτλος δεν βρέθηκε ","please_fill_in_an_url_first":"Παρακαλώ συμπληρώστε το URL πρώτα!","share":"Μοιράσου","discuss":"Συζύτησε","upvote_":"Μου αρέσει","votes":"Ψήφοι","basescore":"Βασικό Σκορ","clicks":"κλικ","views":"προβολές","comment":"σχόλιο","point":"πόντος","points":"πόντους"});
TAPi18n._registerServerTranslator("el", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/en.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
// integrate the fallback language translations                                                                       // 8
translations = {};                                                                                                    // 9
translations[namespace] = {"this_link_has_already_been_posted":"This link has already been posted","sorry_you_cannot_submit_more_than":"Sorry, you cannot submit more than ","posts_per_day":" posts per day","please_fill_in_a_title":"Please fill in a title","seconds_before_posting_again":" seconds before posting again","upvoted":"Upvoted","posted_date":"Posted Date","posted_time":"Posted Time","createdAt":"Created At","url":"URL","body":"Body","htmlBody":"HTML Body","viewCount":"View Count","commentCount":"Comment Count","commenters":"Commenters","lastCommentedAt":"Last Commented At","clickCount":"Click Count","baseScore":"Base Score","upvotes":"Upvotes","upvoters":"Upvoters","downvotes":"Downvotes","downvoters":"Downvoters","score":"score","status":"status","sticky":"Sticky","inactive":"inactive","author":"Author","userId":"User","sorry_we_couldnt_find_any_posts":"Sorry, we couldn't find any posts.","your_post_has_been_deleted":"Your post has been deleted.","created":"Created","suggest_title":"Suggest title","short_url":"Short URL","category":"Category","inactive_":"Inactive?","sticky_":"Sticky?","submission_date":"Submission Date","submission_time":"Submission Time","date":"Date","submission":"Submission","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Note: this post is still pending so it has no submission timestamp yet.","user":"User","status_":"Status","approved":"Approved","rejected":"Rejected","delete_post":"Delete Post","thanks_your_post_is_awaiting_approval":"Thanks, your post is awaiting approval.","sorry_couldnt_find_a_title":"Sorry, couldn't find a title...","please_fill_in_an_url_first":"Please fill in an URL first!","share":"Share","discuss":"Discuss","upvote_":"Upvote","votes":"votes","basescore":"baseScore","clicks":"clicks","views":"views","comment":"comment","point":"point","points":"points"};
TAPi18n._loadLangFileObject("en", translations);                                                                      // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                   // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/es.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                        // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                       // 9
  TAPi18n.translations["es"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                            // 13
  TAPi18n.translations["es"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["es"][namespace], {"this_link_has_already_been_posted":"Este enlace ya ha sido publicado","sorry_you_cannot_submit_more_than":"Lo sentimos, usted no puede enviar más de ","posts_per_day":" posts por día","please_fill_in_a_title":"Por favor, agrega un título","seconds_before_posting_again":"segundos antes de postear de nuevo","upvoted":"Voto a favor","posted_date":"Fecha de publicación","posted_time":"Tiempo de publicación","createdAt":"Creado el","url":"URL","body":"Descripción","commentCount":"Número de comentarios","commenters":"Comentadores","lastCommentedAt":"Último comentario el","clickCount":"Número de clics","baseScore":"Puntuación","upvotes":"Votos Positivos","upvoters":"Votaron positivo","downvotes":"Votos Negativos","downvoters":"Votaron negativo","score":"puntuación","status":"Estado","sticky":"Destacado","inactive":"inactivo","author":"Autor","userId":"Usuario","sorry_we_couldnt_find_any_posts":"Lo sentimos, no hemos encontrado ningún post.","your_post_has_been_deleted":"Tu post ha sido borrado.","created":"Creado","suggest_title":"Proponer un titulo","short_url":"URL Corta","category":"Categoría","inactive_":"Inactivo?","sticky_":"Destacado?","submission_date":"Fecha de entrega","submission_time":"Hora de entrega","date":"Fecha","submission":"Entrega","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Nota : Este post esta en proceso de validación entonces no tiene fecha de entrega todavía.","user":"Usuario","status_":"Estado","approved":"Aprobado","rejected":"Rechazado","delete_post":"Eliminar post","thanks_your_post_is_awaiting_approval":"Gracias, su post esta esperando validación.","sorry_couldnt_find_a_title":"Lo sentimos, no se pudo encontrar un título ...","please_fill_in_an_url_first":"Tienes que introducir una URL.","share":"Compartir","discuss":"Comentar","upvote_":"Votar postivo","votes":"votos","basescore":"baseScore","clicks":"clicks","views":"visitas","comment":"comentario","point":"punto","points":"puntos"});
TAPi18n._registerServerTranslator("es", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/et.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                       // 9
  TAPi18n.translations["et"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                            // 13
  TAPi18n.translations["et"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["et"][namespace], {"this_link_has_already_been_posted":"See link on juba postitatud","sorry_you_cannot_submit_more_than":"Vabandame, aga te ei saa esitada rohkem kui","posts_per_day":" postitust päevas","please_fill_in_a_title":"Palun sisesta pealkiri","seconds_before_posting_again":" sekundit enne postitamist uuesti","upvoted":"Upvoted","posted_date":"Postitamise Kuupäev","posted_time":"Postitamise Aeg","createdAt":"Loodud","url":"URL","body":"Sisu","htmlBody":"HTML Sisu","viewCount":"Vaadatud","commentCount":"Kommenteeritud","commenters":"Kommenteerijad","lastCommentedAt":"Viimati Kommenteeris","clickCount":"Klikkide Arv","baseScore":"Skoor","upvotes":"Upvotes","upvoters":"Upvoters","downvotes":"Downvotes","downvoters":"Downvoters","score":"skoor","status":"staatus","sticky":"Kleepuv","inactive":"passiivne","author":"Autor","userId":"Kasutaja","sorry_we_couldnt_find_any_posts":"Vabandame, me ei suutnud leida ühtegi postitust.","your_post_has_been_deleted":"Postitus on kustutatud.","created":"Loodud","suggest_title":"Soovita pealkirja","short_url":"Lühike URL","category":"Kategooria","inactive_":"Passiivne?","sticky_":"Kleepuv?","submission_date":"Saatmise Kuupäev","submission_time":"Saatmise Aeg","date":"Kuupäev","submission":"Saatmine","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Märkus: see postitus on veel ootel, seetõttu ei ole sellel aega märgitud.","user":"Kasutaja","status_":"Staatus","approved":"Kinnitatud","rejected":"Tagasi Lükatud","delete_post":"Kustuta Postitus","thanks_your_post_is_awaiting_approval":"Täname, sinu postitus ootab kinnitust.","sorry_couldnt_find_a_title":"Vabandame, ei suutnud leida pealkirja...","please_fill_in_an_url_first":"Palun täitke URL!","share":"Jaga","discuss":"Aruta","upvote_":"Upvote","votes":"hääli","basescore":"baseScore","clicks":"klikke","views":"vaatamisi","comment":"kommentaar","point":"punkt","points":"punkte"});
TAPi18n._registerServerTranslator("et", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/fr.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                       // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                       // 9
  TAPi18n.translations["fr"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                            // 13
  TAPi18n.translations["fr"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["fr"][namespace], {"this_link_has_already_been_posted":"Ce lien a déjà été posté","sorry_you_cannot_submit_more_than":"Désolé, vous ne pouvez pas créer plus de ","posts_per_day":" posts par jour","please_fill_in_a_title":"Veuillez saisir un titre","seconds_before_posting_again":" secondes avant de poster à nouveau","upvoted":"Upvoté","posted_date":"Posté le","posted_time":"Posté a","createdAt":"Créé le","url":"URL","body":"Description","htmlBody":"Texte HTML","viewCount":"Nombre de vues","commentCount":"Nombre de commentaires","commenters":"commentateurs","lastCommentedAt":"Dernier commentaire le","clickCount":"Nombre de clics","baseScore":"Score de base","upvotes":"Upvotes","upvoters":"Upvoteurs","downvotes":"Downvotes","downvoters":"Downvoteurs","score":"score","status":"statut","sticky":"Epinglé","inactive":"inactif","author":"Auteur","userId":"Utilisateur","sorry_we_couldnt_find_any_posts":"Aucun post n'a été trouvé","your_post_has_been_deleted":"Votre post a été supprimé.","created":"Crée","suggest_title":"Suggérer un titre","short_url":"URL Courte","category":"Catégorie","inactive_":"Inactif ? ","sticky_":"Epinglé ? ","submission_date":"Date de soumission","submission_time":"Heure de soumission","date":"Date","submission":"Soumission","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Note : ce post est en cours de validation, il n'a pas encore de timestamp.","user":"Utilisateur","status_":"Statut ","approved":"Approuvé","rejected":"Rejeté","delete_post":"Supprimer le post","thanks_your_post_is_awaiting_approval":"Merci, votre post est en cours de validation.","sorry_couldnt_find_a_title":"Désolé, impossible de trouver un titre...","please_fill_in_an_url_first":"Vous devez saisir une URL.","share":"Partager","discuss":"Discuter","upvote_":"Voter","votes":"votes","basescore":"Score de base","clicks":"clics","views":"vues","comment":"commentaire","point":"point","points":"points"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/hu.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                       // 9
  TAPi18n.translations["hu"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                            // 13
  TAPi18n.translations["hu"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                  // 17
TAPi18n._registerServerTranslator("hu", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/id.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                                    // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                       // 9
  TAPi18n.translations["id"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                            // 13
  TAPi18n.translations["id"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["id"][namespace], {"this_link_has_already_been_posted":"Link ini telah diposting","sorry_you_cannot_submit_more_than":"Maaf, Anda tidak dapat mengirimkan lebih dari","posts_per_day":"posting per hari","please_fill_in_a_title":"Silahkan isi judul","seconds_before_posting_again":"detik sebelum posting lagi","upvoted":"Tersundul","posted_date":"Diposting Tanggal","posted_time":"Diposting Sewaktu","createdAt":"Dibuat Pada","url":"URL","body":"Konten","htmlBody":"Konten HTML","viewCount":"Jumlah Pembaca","commentCount":"Jumlah Komentar","commenters":"Komentator","lastCommentedAt":"Terakhir Dikomentari Pada","clickCount":"Jumlah Klik ","baseScore":"Basis Skor","upvotes":"Sundulan","upvoters":"Penyundul","downvotes":"Penenggelaman","downvoters":"Penenggelam","score":"skor","status":"status","sticky":"Sticky","inactive":"non-aktif","author":"Pemposting","userId":"Pengguna","sorry_we_couldnt_find_any_posts":"Maaf, kami tidak dapat menemukan posting apapun.","your_post_has_been_deleted":"Postingan Anda telah dihapus.","created":"Dibuat","suggest_title":"Saran judul","short_url":"Short URL","category":"Kategori","inactive_":"Tidak aktif?","sticky_":"Sticky?","submission_date":"Tanggal Pengiriman Postingan","submission_time":"Waktu Pengiriman Postingan","date":"Tanggal","submission":"Pengiriman","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Catatan: postingan ini masih tertunda sehingga masih belum memiliki catatan waktu pengiriman postingan.","user":"Pengguna","status_":"Status","approved":"Disetujui","rejected":"Ditolak","delete_post":"Hapus Postingan","thanks_your_post_is_awaiting_approval":"Terima kasih, Postingan Anda sedang menunggu persetujuan.","sorry_couldnt_find_a_title":"Maaf, tidak bisa menemukan judul ...","please_fill_in_an_url_first":"Silahkan isi URL terlebih dahulu!","share":"Bagikan","discuss":"Diskusikan","upvote_":"Sundul","votes":"pilihan","basescore":"basisSkor","clicks":"klik","views":"dilihat","comment":"komentar","point":"poin","points":"poin"});
TAPi18n._registerServerTranslator("id", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/it.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                       // 9
  TAPi18n.translations["it"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                            // 13
  TAPi18n.translations["it"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["it"][namespace], {"this_link_has_already_been_posted":"Questo link è già stato postato","sorry_you_cannot_submit_more_than":"Ci spiace, non puoi inviare più di ","posts_per_day":" post al giorno","please_fill_in_a_title":"Per favore inserisci un titolo","seconds_before_posting_again":" secondi prima di poter fare un altro post","upvoted":"Consigliati","posted_date":"Data di Pubblicazione","posted_time":"Ora di Pubblicazione","createdAt":"Creato il","url":"URL","body":"Corpo","htmlBody":"Corpo HTML","viewCount":"Numero Visualizzazioni","commentCount":"Numero commenti","commenters":"Commentatori","lastCommentedAt":"Ultimo Commento il","clickCount":"Numero Click","baseScore":"Punteggio Base","upvoters":"Promotori","score":"punteggio","status":"stato","sticky":"Persistente","inactive":"inattivo","author":"Autore","userId":"Utente","sorry_we_couldnt_find_any_posts":"Ci spiace, non abbiamo trovato post.","your_post_has_been_deleted":"Il tuo post è stato rimosso.","created":"Creato","suggest_title":"Titolo Suggerito","short_url":"URL breve","category":"Categoria","inactive_":"Inattivo?","sticky_":"Persistente?","submission_date":"Data di Invio","submission_time":"Ora di Invio","date":"Data","submission":"Invio","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Nota: questo post è ancora in attesa quindi non ha ancora una data di invio.","user":"Utente","status_":"Stato","approved":"Approvato","rejected":"Rifiutato","delete_post":"Elimina Post","thanks_your_post_is_awaiting_approval":"Grazie, il tuo post è in attesa di approvazione.","sorry_couldnt_find_a_title":"Ci spiace, non riusciamo a trovare un titolo...","please_fill_in_an_url_first":"Per favore fornisci prima lo URL!","share":"Condividi","discuss":"Discuti","upvote_":"Consiglia","votes":"voti","basescore":"punteggioBase","clicks":"click","views":"visualizzazioni","comment":"commento","point":"punto","points":"punti"});
TAPi18n._registerServerTranslator("it", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/ja.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                                   // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                       // 9
  TAPi18n.translations["ja"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                            // 13
  TAPi18n.translations["ja"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                  // 17
TAPi18n._registerServerTranslator("ja", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/kk.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                       // 9
  TAPi18n.translations["kk"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                            // 13
  TAPi18n.translations["kk"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                  // 17
TAPi18n._registerServerTranslator("kk", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/ko.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                     // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                       // 9
  TAPi18n.translations["ko"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                            // 13
  TAPi18n.translations["ko"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["ko"][namespace], {"this_link_has_already_been_posted":"이 링크는 이미 게시되어 있습니다","please_fill_in_a_title":"제목을 입력해주세요","seconds_before_posting_again":"초동안 기다려주세요.","posted_date":"작성일","posted_time":"작성시간","url":"주소 (URL)","body":"내용","viewCount":"조회수","commentCount":"댓글수","commenters":"댓글쓴이","score":"점수","sticky":"공지","author":"글쓴이","userId":"유저","your_post_has_been_deleted":"당신의 댓글이 삭제되었습니다.","sticky_":"공지?","submission_date":"게시일","submission_time":"게시시간","user":"유저","approved":"승인됨","rejected":"거부됨","delete_post":"게시물 삭제","please_fill_in_an_url_first":"주소(URL)을 먼저 입력해주세요!","share":"공유","comment":"댓글","point":"추천","points":"추천"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/nl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                       // 9
  TAPi18n.translations["nl"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                            // 13
  TAPi18n.translations["nl"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["nl"][namespace], {"this_link_has_already_been_posted":"Dit adres is al een keer ingestuurd.","sorry_you_cannot_submit_more_than":"Sorry, je kunt niet meer dan ","posts_per_day":" artikelen per dag plaatsen","please_fill_in_a_title":"Vul een titel in","seconds_before_posting_again":" voor het opnieuw kunnen plaatsen.","upvoted":"Omhoog gestemd","posted_date":"Datum plaatsing","posted_time":"Tijd plaatsing","createdAt":"Geschreven","url":"URL","body":"Beschrijving","htmlBody":"HTML Body","viewCount":"Weergaven","commentCount":"Reacties","commenters":"Reageerders","lastCommentedAt":"Laatste reactie","clickCount":"Aantal klikken","baseScore":"Basis score","upvotes":"Omhoog stemmen","upvoters":"Omhoog stemmers","downvotes":"Stemmen omlaag","downvoters":"Omlaag stemmers","score":"score","status":"status","sticky":"Vastgezet","inactive":"inactief","author":"Auteur","userId":"Gebruiker","sorry_we_couldnt_find_any_posts":"Sorry, geen artikelen gevonden.","your_post_has_been_deleted":"Jouw artikel is verwijderd.","created":"Ingestuurd","suggest_title":"Titel suggestie","short_url":"Korte URL","category":"Categorie","inactive_":"Inactief?","sticky_":"Vastgezet?","submission_date":"Datum van insturen","submission_time":"Tijd van insturen","date":"Datum","submission":"Inzending","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Let op: dit bericht wacht nog op goedkeuring en heeft daardoor nog geen datum van inzending.","user":"Gberuiker","status_":"Status","approved":"Goedgekeurd","rejected":"Afgewezen","delete_post":"Verwijder artikel","thanks_your_post_is_awaiting_approval":"Bedankt, je bericht wacht op goedkeuring.","sorry_couldnt_find_a_title":"Sorry, kon geen titel vinden..","please_fill_in_an_url_first":"Vul eerst een URL in!","share":"Delen","discuss":"Discusieer","upvote_":"Omhoog","votes":"stemmen","basescore":"basisScore","clicks":"klikken","views":"weergaven","comment":"reactie","point":"punt","points":"punten"});
TAPi18n._registerServerTranslator("nl", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/pl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                                  // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                       // 9
  TAPi18n.translations["pl"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                            // 13
  TAPi18n.translations["pl"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["pl"][namespace], {"this_link_has_already_been_posted":"Ten link już istnieje","sorry_you_cannot_submit_more_than":"Nie możesz dodawać więcej niż ","posts_per_day":" postów na dzień","please_fill_in_a_title":"Wypełnij tytuł","seconds_before_posting_again":" sekund zanim znowu będziesz mógł napisać","upvoted":"minus","posted_date":"Data","posted_time":"Godzina","createdAt":"Utworzony","url":"URL","body":"Body","htmlBody":"Treść HTML","viewCount":"Liczba odświeżeń","commentCount":"Liczba komentarzy","commenters":"Komentujący","lastCommentedAt":"Ostatnio komentował","clickCount":"Liczba kliknięć","baseScore":"Bazowy wynik","upvotes":"Pozytywne","upvoters":"Głosujący pozytywnie","downvotes":"Negatywne","downvoters":"Głosujący negatywnie","score":"wynik","status":"status","sticky":"Przyklejony","inactive":"nieaktywny","author":"Autor","userId":"Użytkownik","sorry_we_couldnt_find_any_posts":"Przepraszamy, ale w tej chwili nie ma tutaj żadnych postów.","your_post_has_been_deleted":"Twój post został usunięty.","created":"Utworzone","suggest_title":"Zasugeruj tytuł","short_url":"Krótki URL","category":"Kategoria","inactive_":"Nieaktywny?","sticky_":"Przyklejony?","submission_date":"Data utworzenia","submission_time":"Godzina utworzenia","date":"Data","submission":"Wpis","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Ten post ciągle czeka na zatwierdzenie.","user":"Użytkownik","status_":"Status","approved":"Zaakceptowany","rejected":"Odrzucony","delete_post":"Usuń post","thanks_your_post_is_awaiting_approval":"Twój post czeka na zatwierdzenie.","sorry_couldnt_find_a_title":"Podaj tytuł...","please_fill_in_an_url_first":"Podaj URL","share":"Udostępnij","discuss":"Komentuj","upvote_":"Plus","votes":"głosy","basescore":"wynik bazowy","clicks":"kliknięcia","views":"wyświetlenia","comment":"komentarz","point":"punkt","points":"punktów"});
TAPi18n._registerServerTranslator("pl", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/pt-BR.i18n.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                                     // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                    // 9
  TAPi18n.translations["pt-BR"] = {};                                                                                 // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                         // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                      // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {"this_link_has_already_been_posted":"Este link já foi publicado","sorry_you_cannot_submit_more_than":"Desculpe, você não pode submeter mais do que ","posts_per_day":" postagens por dia","please_fill_in_a_title":"Por favor preencha um título","seconds_before_posting_again":" segundos antes de postar novamente","upvoted":"Votado","posted_date":"Data da Postagem","posted_time":"Hora da da Postagem","createdAt":"Criado em","url":"URL","body":"Corpo","htmlBody":"Corpo HTML","viewCount":"Ver Contagem","commentCount":"Contagem de Comentários","commenters":"Comentaristas","lastCommentedAt":"Comentado por último em","clickCount":"Contagem de cliques","baseScore":"Classificação Básica","upvotes":"Votos Positivos","upvoters":"Votadores Positivos","downvotes":"Votos Negativos","downvoters":"Votadores Negativos","score":"classificação","status":"estado","sticky":"Fixo","inactive":"inativo","author":"Autor","userId":"Usuário","sorry_we_couldnt_find_any_posts":"Desculpe, não conseguimos encontrar nenhuma postagem.","your_post_has_been_deleted":"Sua postagem foi deletada.","created":"Criado","suggest_title":"Sugerir título","short_url":"URL curta","category":"Categoria","inactive_":"Inativo?","sticky_":"Fixo?","submission_date":"Data de Submissão","submission_time":"Hora de Submissão","date":"Data","submission":"Submissão","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Nota: esta postagem continua pendente e não possui data de submissão ainda.","user":"Usuário","status_":"Estado","approved":"Aprovada","rejected":"Rejeitada","delete_post":"Deletar Postagem","thanks_your_post_is_awaiting_approval":"Obrigado, sua postagem está aguardando aprovação.","sorry_couldnt_find_a_title":"Desculpe, não encontramos um título...","please_fill_in_an_url_first":"Por favor, inclua a URL antes!","share":"Compartilhar","discuss":"Discutir","upvote_":"Votar","votes":"votos","basescore":"classificaçaoBase","clicks":"cliques","views":"visualizações","comment":"comentário","point":"ponto","points":"pontos"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                                // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/ro.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                       // 9
  TAPi18n.translations["ro"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                            // 13
  TAPi18n.translations["ro"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["ro"][namespace], {"this_link_has_already_been_posted":"Acest link a fost deja publicat","sorry_you_cannot_submit_more_than":"Ne pare rău insă nu poți publica mai mult de ","posts_per_day":" postări pe zi","please_fill_in_a_title":"Te rugăm să alegi un titlu","seconds_before_posting_again":" secunde până să poți publica iar","upvoted":"Votat","posted_date":"Data Postării","posted_time":"Ora Postării","url":"URL","body":"Descriere","score":"Punctaj","status":"Status","sticky":"Actual","inactive":"Inactiv","your_post_has_been_deleted":"Postarea ta a fost ștersă.","created":"Creat","suggest_title":"Propune un titlu","short_url":"Prescurtare-URL","category":"Categorie","inactive_":"Inactiv?","sticky_":"Arhivează?","submission_date":"Data înregistrării","submission_time":"Ora înregistrării","date":"Data","submission":"Înregistrare","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Informare: Această contribuție este încă în curs de aprobare, de aceea nu există o dată și o oră de înregistrare.","user":"Utilizator","status_":"Status","approved":"Aprobat","rejected":"Respins","delete_post":"Șterge postarea","thanks_your_post_is_awaiting_approval":"Mulțumim, postarea ta este în curs de verificare.","sorry_couldnt_find_a_title":"Ai uitat oare să specifici un titlu?","please_fill_in_an_url_first":"Trebuie să specifici un URL/Link!","share":"Share","discuss":"Comentarii","upvote_":"Votează","votes":"Voturi","basescore":"Scor de bază","clicks":"Click-uri","views":"Afișări","comment":"Comentariu","point":"Punct","points":"Puncte"});
TAPi18n._registerServerTranslator("ro", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/ru.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                       // 9
  TAPi18n.translations["ru"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                            // 13
  TAPi18n.translations["ru"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["ru"][namespace], {"this_link_has_already_been_posted":"Эта ссылка уже была опубликована","sorry_you_cannot_submit_more_than":"Извините, вы не можете отправлять больше, чем ","posts_per_day":" постов за день","please_fill_in_a_title":"Заполните заголовок","seconds_before_posting_again":" секунд перед новым постом","upvoted":"За","posted_date":"Дата поста","posted_time":"Время поста","createdAt":"Создан","url":"URL","body":"Body","htmlBody":"HTML Body","viewCount":"Просмотров","commentCount":"Комментариве","commenters":"Комментаторов","lastCommentedAt":"Последний комментарий","clickCount":"Кликов","baseScore":"Базовый счёт","upvotes":"Голосов За","upvoters":"Поддержали","downvotes":"Голосов Против","downvoters":"Выступили против","score":"очки","status":"статус","sticky":"В закладки","inactive":"неактивно","author":"Автор","userId":"Пользователь","your_post_has_been_deleted":"Ваш пост удалён.","created":"Создан","suggest_title":"Предложите название","short_url":"Короткий URL","category":"Категория","inactive_":"Сделать неактивным?","sticky_":"С закладкой?","submission_date":"Дата отправки на утверждение","submission_time":"Время отправки на утверждение","date":"Дата","submission":"Утверждение","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Заметка: этот пост находится на рассмотрении, поэтому время утверждения не указано.","user":"Пользователь","status_":"Статус","approved":"Утверждён","rejected":"Отклонён","delete_post":"Удалить пост","thanks_your_post_is_awaiting_approval":"Спасибо, пост ожидает утверждения.","sorry_couldnt_find_a_title":"Извините, не смог найти название...","please_fill_in_an_url_first":"Вначале укажите URL!","share":"Поделится","discuss":"Обсудить","upvote_":"Проголосовать за","votes":"голосов","basescore":"базовые очки","clicks":"кликов","views":"просмотров","comment":"комментарий","point":"бал","points":"баллов"});
TAPi18n._registerServerTranslator("ru", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/sl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                       // 9
  TAPi18n.translations["sl"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                            // 13
  TAPi18n.translations["sl"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["sl"][namespace], {"this_link_has_already_been_posted":"Ta povezava je bila že objavljena","sorry_you_cannot_submit_more_than":"Žal, ne morete oddati več kot","posts_per_day":" objav na dan","please_fill_in_a_title":"Prosimo, izpolnite naslov","seconds_before_posting_again":"sekund pred ponovno objavo","upvoted":"Izglasovanih","posted_date":"Datum Objave","posted_time":"Čas Objave","createdAt":"Ustvarjeno","url":"URL","body":"Telo","htmlBody":"HTML Telo","viewCount":"Število Ogledov","commentCount":"Število Komentarjev","commenters":"Komentatorji","lastCommentedAt":"Nazadnje Komentirano Ob","clickCount":"Število Klikov","baseScore":"Osnovno Število Točk","upvotes":"Glasov Za","upvoters":"Glasovalcev Za","downvotes":"Glasov Proti","downvoters":"Glasovalcev Proti","score":"število točk","status":"Status","sticky":"Zalepi","inactive":"neaktivni","author":"Avtor","userId":"Uporabnik","sorry_we_couldnt_find_any_posts":"Žal, nismo našli nobene objave.","your_post_has_been_deleted":"Vaša objava je bila izbrisana.","created":"Ustvarjeno","suggest_title":"Predlagajte naslov","short_url":"Kratek URL","category":"Kategorija","inactive_":"Neaktivni?","sticky_":"Zalepi?","submission_date":"Datum Oddaje","submission_time":"Čas Oddaje","date":"Datum","submission":"Oddaja","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Opomba: ta objava še čaka na potrditev, tako da še nima določenega datuma.","user":"Uporabnik","status_":"Status","approved":"Odobreno","rejected":"Zavrnjeno","delete_post":"Izbriši Objavo","thanks_your_post_is_awaiting_approval":"Hvala, vaša objava čaka na potrditev.","sorry_couldnt_find_a_title":"Žal ni bilo mogoče najti naslova...","please_fill_in_an_url_first":"Prosimo, najprej izpolnite URL!","share":"Deli","discuss":"Razpravljajte","upvote_":"Glasuj Za","votes":"glasov","basescore":"številoTočk","clicks":"klikov","views":"ogledov","comment":"komentiraj","point":"točka","points":"točk"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/sv.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                       // 9
  TAPi18n.translations["sv"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                            // 13
  TAPi18n.translations["sv"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["sv"][namespace], {"this_link_has_already_been_posted":"Denna länk har redan lagts till","sorry_you_cannot_submit_more_than":"Tyvärr får du inte skapa mer än ","posts_per_day":" inlägg per dag","please_fill_in_a_title":"Vänligen fyll i en titel","seconds_before_posting_again":" sekunder innan nästa inlägg","upvoted":"Uppröstad","posted_date":"Publicerat datum","posted_time":"Publicerad tid","createdAt":"Skapad","url":"URL","body":"Innehåll","htmlBody":"HTML-kropp","viewCount":"Antal visningar","commentCount":"Antal kommentarer","commenters":"Kommentatorer","lastCommentedAt":"Senast kommenterad","clickCount":"Antal klick","baseScore":"Baspoäng","upvotes":"Uppröstningar","upvoters":"Uppröstare","downvotes":"Nedröstningar","downvoters":"Nedröstare","score":"poäng","status":"status","sticky":"Permanent","inactive":"inaktiv","author":"Skapad av","userId":"Användare","sorry_we_couldnt_find_any_posts":"Tyvärr kunde vi inte hitta några inlägg.","your_post_has_been_deleted":"Ditt inlägg har tagits bort.","created":"Skapad","suggest_title":"Föreslå titel","short_url":"Kort URL","category":"Kategori","inactive_":"Inaktiv?","sticky_":"Permanent?","submission_date":"Inläggsdatum","submission_time":"Inläggstid","date":"Datum","submission":"Inlägg","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"OBS: detta inlägg väntar på godkännande, så den har inget inläggsdatum än.","user":"Användare","status_":"Status","approved":"Godkänd","rejected":"Avslaget","delete_post":"Ta Bort Inlägg","thanks_your_post_is_awaiting_approval":"Tack, ditt inlägg väntar på godkännande.","sorry_couldnt_find_a_title":"Tyvärr kunde vi inte någon titel...","please_fill_in_an_url_first":"Vänligen fyll i en adress först!","share":"Dela","discuss":"Diskutera","upvote_":"Upprösta","votes":"röster","basescore":"baspoäng","clicks":"klick","views":"visningar","comment":"kommentera","point":"poäng","points":"poäng"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/th.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                                       // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                       // 9
  TAPi18n.translations["th"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                            // 13
  TAPi18n.translations["th"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["th"][namespace], {"createdAt":"สร้างเมื่อ","url":"URL"});                              // 17
TAPi18n._registerServerTranslator("th", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/tr.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                       // 9
  TAPi18n.translations["tr"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                            // 13
  TAPi18n.translations["tr"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["tr"][namespace], {"this_link_has_already_been_posted":"Bu bağlantı daha önce paylaşılmıştı","sorry_you_cannot_submit_more_than":"Özür dileriz, bu sayıdan daha fazla paylaşamazsınız: ","posts_per_day":" paylaşım / gün","please_fill_in_a_title":"Lütfen bir başlık girin","seconds_before_posting_again":" saniye daha beklemeniz lazım tekrar paylaşım yapmadan önce","upvoted":"Yukarı oylandı","posted_date":"Paylaşım Tarihi","posted_time":"Paylaşım Zamanı","url":"URL","body":"Metin","baseScore":"temel skor","score":"skor","status":"Durum","sticky":"Yapışkan","inactive":"etkin değil","your_post_has_been_deleted":"Paylaşımınız silindi","created":"Oluşturuldu","suggest_title":"Başlık öner","category":"Kategori","inactive_":"Etkin değil?","sticky_":"Yapışkan?","submission_date":"Yayın tarihi","submission_time":"Yayın zamanı","date":"Tarih","submission":"Yayın","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Bu paylaşım hala onay bekliyor, bu nedenle henüz yayın tarihi yok","user":"Kullanıcı","approved":"Onaylandı","rejected":"Reddedildi","delete_post":"Paylaşımı sil","thanks_your_post_is_awaiting_approval":"Teşekkürler, paylaşımınız onay bekliyor","sorry_couldnt_find_a_title":"Özür dileriz, bir başlık bulamadık","please_fill_in_an_url_first":"Lütfen önce bir URL giriniz","share":"Paylaş","discuss":"Yorum yap","upvote_":"Beğen","votes":"oylar","clicks":"tıklamalar","comment":"yorum","point":"nokta","points":"noktalar"});
TAPi18n._registerServerTranslator("tr", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/vi.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                       // 9
  TAPi18n.translations["vi"] = {};                                                                                    // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                            // 13
  TAPi18n.translations["vi"][namespace] = {};                                                                         // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["vi"][namespace], {"this_link_has_already_been_posted":"Đường dẫn này đã được đăng","sorry_you_cannot_submit_more_than":"Xin lỗi, bạn không thể đăng nhiều hơn ","posts_per_day":" bài mỗi ngày","please_fill_in_a_title":"xin nhập tiêu đề","seconds_before_posting_again":" một vài giây để đăng lại","upvoted":"Thích","posted_date":"Ngày đăng","posted_time":"Giờ đăng","createdAt":"Tạo lúc","url":"URL","body":"Nội dung","htmlBody":"HTML Body","viewCount":"Số lần xem","commentCount":"Số lần bình luận","commenters":"Bình luận","lastCommentedAt":"Bình luận lúc","clickCount":"Click Count","baseScore":"Base Score","upvotes":"Upvotes","upvoters":"Upvoters","downvotes":"Downvotes","downvoters":"Downvoters","score":"điểm","status":"trạng thái","sticky":"Sticky","inactive":"inactive","author":"Author","userId":"User","sorry_we_couldnt_find_any_posts":"Xin lỗi, thông tin không được tìm thấy.","your_post_has_been_deleted":"Bài của bạn đã được xóa.","created":"Tạo","suggest_title":"Gợi ý tiêu đề","short_url":"URL ngắn","category":"Loại","inactive_":"Ngừng kích hoạt?","sticky_":"Sticky?","submission_date":"Ngày đăng","submission_time":"Giờ đăng","date":"Ngày","submission":"Đăng","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Lưu ý: bài này đang đợi xét duyệt nên chưa có thời gian đăng bài.","user":"Người dùng","status_":"Trạng thái","approved":"Đồng ý","rejected":"Từ chối","delete_post":"Xóa bài","thanks_your_post_is_awaiting_approval":"Cảm ơn, bài của bạn đang đợi phê duyệt.","sorry_couldnt_find_a_title":"Xin lỗi, không có tiêu đề...","please_fill_in_an_url_first":"Làm ơn nhập địa chỉ website!","share":"Chia sẻ","discuss":"Bình luận","upvote_":"Thích","votes":"phiếu","basescore":"baseScore","clicks":"clicks","views":"xem","comment":"ý kiến","point":"điểm","points":"điểm"});
TAPi18n._registerServerTranslator("vi", namespace);                                                                   // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_posts/packages/telescope_postsi18n/zh-CN.i18n.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "project",                                                                                         // 2
    namespace = "project";                                                                                            // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                                        // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                    // 9
  TAPi18n.translations["zh-CN"] = {};                                                                                 // 10
}                                                                                                                     // 11
                                                                                                                      // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                         // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                      // 14
}                                                                                                                     // 15
                                                                                                                      // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {"this_link_has_already_been_posted":"这个链接已发布","sorry_you_cannot_submit_more_than":"对不起, 内容不能超过","posts_per_day":" 评价每日发帖","please_fill_in_a_title":"请填写标题","seconds_before_posting_again":"秒前发布","upvoted":"最多投票","posted_date":"发布日期","posted_time":"发布时间","url":"链接地址","body":"内容","score":"得分","status":"状态","sticky":"置顶","inactive":"不活跃","your_post_has_been_deleted":"你的帖子已经被删除","created":"创建","suggest_title":"显示标题","short_url":"短网址","category":"分类","inactive_":"Inactive?","sticky_":"置顶?","submission_date":"提交日期","submission_time":"提交时间","date":"日期","submission":"提交","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"这篇文章没有进行审核.","user":"用户","status_":"专题","approved":"审核","rejected":"拒接","delete_post":"删除帖子","thanks_your_post_is_awaiting_approval":"感谢, 你的帖子正在等待批准.","sorry_couldnt_find_a_title":"抱歉找不相关话题","please_fill_in_an_url_first":"请在第一栏填写链接","share":"分享","discuss":"讨论","upvote_":"顶","votes":"得票","basescore":"基础得分","clicks":"点击","views":"views","comment":"评论","point":"点击","points":"点击数"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                                // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:posts'] = {
  Posts: Posts
};

})();

//# sourceMappingURL=telescope_posts.js.map
