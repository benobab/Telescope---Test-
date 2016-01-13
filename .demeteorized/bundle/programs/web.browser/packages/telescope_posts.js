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
var i18n = Package['telescope:i18n'].i18n;
var Settings = Package['telescope:settings'].Settings;
var Users = Package['telescope:users'].Users;
var Comments = Package['telescope:comments'].Comments;
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
var Posts, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/namespace.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * The global namespace/collection for Posts.                                                                          //
 * @namespace Posts                                                                                                    //
 */                                                                                                                    //
Posts = new Mongo.Collection("posts");                                                                                 // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/config.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Posts config namespace                                                                                              //
 * @type {Object}                                                                                                      //
 */                                                                                                                    //
Posts.config = {};                                                                                                     // 5
                                                                                                                       //
/**                                                                                                                    //
 * Post Statuses                                                                                                       //
 */                                                                                                                    //
Posts.config.postStatuses = [{                                                                                         // 11
  value: 1,                                                                                                            // 13
  label: function () {                                                                                                 // 14
    return i18n.t('pending');                                                                                          // 14
  }                                                                                                                    //
}, {                                                                                                                   //
  value: 2,                                                                                                            // 17
  label: function () {                                                                                                 // 18
    return i18n.t('approved');                                                                                         // 18
  }                                                                                                                    //
}, {                                                                                                                   //
  value: 3,                                                                                                            // 21
  label: function () {                                                                                                 // 22
    return i18n.t('rejected');                                                                                         // 22
  }                                                                                                                    //
}, {                                                                                                                   //
  value: 4,                                                                                                            // 25
  label: function () {                                                                                                 // 26
    return i18n.t('spam');                                                                                             // 26
  }                                                                                                                    //
}, {                                                                                                                   //
  value: 5,                                                                                                            // 29
  label: function () {                                                                                                 // 30
    return i18n.t('deleted');                                                                                          // 30
  }                                                                                                                    //
}];                                                                                                                    //
                                                                                                                       //
Posts.config.STATUS_PENDING = 1;                                                                                       // 34
Posts.config.STATUS_APPROVED = 2;                                                                                      // 35
Posts.config.STATUS_REJECTED = 3;                                                                                      // 36
Posts.config.STATUS_SPAM = 4;                                                                                          // 37
Posts.config.STATUS_DELETED = 5;                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/posts.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Posts schema                                                                                                        //
 * @type {SimpleSchema}                                                                                                //
 */                                                                                                                    //
Posts.schema = new SimpleSchema({                                                                                      // 5
  /**                                                                                                                  //
    ID                                                                                                                 //
  */                                                                                                                   //
  _id: {                                                                                                               // 9
    type: String,                                                                                                      // 10
    optional: true                                                                                                     // 11
  },                                                                                                                   //
  /**                                                                                                                  //
    Timetstamp of post creation                                                                                        //
  */                                                                                                                   //
  createdAt: {                                                                                                         // 16
    type: Date,                                                                                                        // 17
    optional: true                                                                                                     // 18
  },                                                                                                                   //
  /**                                                                                                                  //
    Timestamp of post first appearing on the site (i.e. being approved)                                                //
  */                                                                                                                   //
  postedAt: {                                                                                                          // 23
    type: Date,                                                                                                        // 24
    optional: true,                                                                                                    // 25
    editableBy: ["admin"],                                                                                             // 26
    autoform: {                                                                                                        // 27
      group: 'admin',                                                                                                  // 28
      type: "bootstrap-datetimepicker"                                                                                 // 29
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    URL                                                                                                                //
  */                                                                                                                   //
  url: {                                                                                                               // 35
    type: String,                                                                                                      // 36
    optional: true,                                                                                                    // 37
    max: 500,                                                                                                          // 38
    editableBy: ["member", "admin"],                                                                                   // 39
    autoform: {                                                                                                        // 40
      type: "bootstrap-url",                                                                                           // 41
      order: 10                                                                                                        // 42
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    Title                                                                                                              //
  */                                                                                                                   //
  title: {                                                                                                             // 48
    type: String,                                                                                                      // 49
    optional: false,                                                                                                   // 50
    max: 500,                                                                                                          // 51
    editableBy: ["member", "admin"],                                                                                   // 52
    autoform: {                                                                                                        // 53
      order: 20                                                                                                        // 54
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    Slug                                                                                                               //
  */                                                                                                                   //
  slug: {                                                                                                              // 60
    type: String,                                                                                                      // 61
    optional: true                                                                                                     // 62
  },                                                                                                                   //
  /**                                                                                                                  //
    Post body (markdown)                                                                                               //
  */                                                                                                                   //
  body: {                                                                                                              // 67
    type: String,                                                                                                      // 68
    optional: true,                                                                                                    // 69
    max: 3000,                                                                                                         // 70
    editableBy: ["member", "admin"],                                                                                   // 71
    autoform: {                                                                                                        // 72
      rows: 5,                                                                                                         // 73
      order: 30                                                                                                        // 74
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    HTML version of the post body                                                                                      //
  */                                                                                                                   //
  htmlBody: {                                                                                                          // 80
    type: String,                                                                                                      // 81
    optional: true                                                                                                     // 82
  },                                                                                                                   //
  /**                                                                                                                  //
    Count of how many times the post's page was viewed                                                                 //
  */                                                                                                                   //
  viewCount: {                                                                                                         // 87
    type: Number,                                                                                                      // 88
    optional: true                                                                                                     // 89
  },                                                                                                                   //
  /**                                                                                                                  //
    Count of the post's comments                                                                                       //
  */                                                                                                                   //
  commentCount: {                                                                                                      // 94
    type: Number,                                                                                                      // 95
    optional: true                                                                                                     // 96
  },                                                                                                                   //
  /**                                                                                                                  //
    An array containing the `_id`s of commenters                                                                       //
  */                                                                                                                   //
  commenters: {                                                                                                        // 101
    type: [String],                                                                                                    // 102
    optional: true                                                                                                     // 103
  },                                                                                                                   //
  /**                                                                                                                  //
    Timestamp of the last comment                                                                                      //
  */                                                                                                                   //
  lastCommentedAt: {                                                                                                   // 108
    type: Date,                                                                                                        // 109
    optional: true                                                                                                     // 110
  },                                                                                                                   //
  /**                                                                                                                  //
    Count of how many times the post's link was clicked                                                                //
  */                                                                                                                   //
  clickCount: {                                                                                                        // 115
    type: Number,                                                                                                      // 116
    optional: true                                                                                                     // 117
  },                                                                                                                   //
  /**                                                                                                                  //
    The post's base score (not factoring in the post's age)                                                            //
  */                                                                                                                   //
  baseScore: {                                                                                                         // 122
    type: Number,                                                                                                      // 123
    decimal: true,                                                                                                     // 124
    optional: true                                                                                                     // 125
  },                                                                                                                   //
  /**                                                                                                                  //
    How many upvotes the post has received                                                                             //
  */                                                                                                                   //
  upvotes: {                                                                                                           // 130
    type: Number,                                                                                                      // 131
    optional: true                                                                                                     // 132
  },                                                                                                                   //
  /**                                                                                                                  //
    An array containing the `_id`s of the post's upvoters                                                              //
  */                                                                                                                   //
  upvoters: {                                                                                                          // 137
    type: [String],                                                                                                    // 138
    optional: true                                                                                                     // 139
  },                                                                                                                   //
  /**                                                                                                                  //
    How many downvotes the post has received                                                                           //
  */                                                                                                                   //
  downvotes: {                                                                                                         // 144
    type: Number,                                                                                                      // 145
    optional: true                                                                                                     // 146
  },                                                                                                                   //
  /**                                                                                                                  //
    An array containing the `_id`s of the post's downvoters                                                            //
  */                                                                                                                   //
  downvoters: {                                                                                                        // 151
    type: [String],                                                                                                    // 152
    optional: true                                                                                                     // 153
  },                                                                                                                   //
  /**                                                                                                                  //
    The post's current score (factoring in age)                                                                        //
  */                                                                                                                   //
  score: {                                                                                                             // 158
    type: Number,                                                                                                      // 159
    decimal: true,                                                                                                     // 160
    optional: true                                                                                                     // 161
  },                                                                                                                   //
  /**                                                                                                                  //
    The post's status. One of pending (`1`), approved (`2`), or deleted (`3`)                                          //
  */                                                                                                                   //
  status: {                                                                                                            // 166
    type: Number,                                                                                                      // 167
    optional: true,                                                                                                    // 168
    editableBy: ["admin"],                                                                                             // 169
    autoValue: function () {                                                                                           // 170
      // only provide a default value                                                                                  //
      // 1) this is an insert operation                                                                                //
      // 2) status field is not set in the document being inserted                                                     //
      var user = Meteor.users.findOne(this.userId);                                                                    // 174
      if (this.isInsert && !this.isSet) return Posts.getDefaultStatus(user);                                           // 175
    },                                                                                                                 //
    autoform: {                                                                                                        // 178
      noselect: true,                                                                                                  // 179
      options: Posts.config.postStatuses,                                                                              // 180
      group: 'admin'                                                                                                   // 181
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    Whether the post is sticky (pinned to the top of posts lists)                                                      //
  */                                                                                                                   //
  sticky: {                                                                                                            // 187
    type: Boolean,                                                                                                     // 188
    optional: true,                                                                                                    // 189
    defaultValue: false,                                                                                               // 190
    editableBy: ["admin"],                                                                                             // 191
    autoform: {                                                                                                        // 192
      group: 'admin',                                                                                                  // 193
      leftLabel: "Sticky"                                                                                              // 194
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    Whether the post is inactive. Inactive posts see their score recalculated less often                               //
  */                                                                                                                   //
  inactive: {                                                                                                          // 200
    type: Boolean,                                                                                                     // 201
    optional: true                                                                                                     // 202
  },                                                                                                                   //
  /**                                                                                                                  //
    The post author's name                                                                                             //
  */                                                                                                                   //
  author: {                                                                                                            // 207
    type: String,                                                                                                      // 208
    optional: true                                                                                                     // 209
  },                                                                                                                   //
  /**                                                                                                                  //
    The post author's `_id`.                                                                                           //
  */                                                                                                                   //
  userId: {                                                                                                            // 214
    type: String,                                                                                                      // 215
    optional: true,                                                                                                    // 216
    // regEx: SimpleSchema.RegEx.Id,                                                                                   //
    editableBy: ["admin"],                                                                                             // 218
    autoform: {                                                                                                        // 219
      group: 'admin',                                                                                                  // 220
      options: function () {                                                                                           // 221
        return Meteor.users.find().map(function (user) {                                                               // 222
          return {                                                                                                     // 223
            value: user._id,                                                                                           // 224
            label: Users.getDisplayName(user)                                                                          // 225
          };                                                                                                           //
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
// schema transforms                                                                                                   //
Meteor.startup(function () {                                                                                           // 234
  // needs to happen after every fields were added                                                                     //
  Posts.internationalize();                                                                                            // 236
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Attach schema to Posts collection                                                                                   //
 */                                                                                                                    //
Posts.attachSchema(Posts.schema);                                                                                      // 242
                                                                                                                       //
Posts.allow({                                                                                                          // 244
  update: _.partial(Telescope.allowCheck, Posts),                                                                      // 245
  remove: _.partial(Telescope.allowCheck, Posts)                                                                       // 246
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/parameters.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Parameter callbacks let you add parameters to subscriptions                                                         //
 * @namespace Posts.parameters                                                                                         //
 */                                                                                                                    //
Posts.parameters = {};                                                                                                 // 5
                                                                                                                       //
/**                                                                                                                    //
 * Takes a set of terms, and translates them into a `parameter` object containing the appropriate find                 //
 * and options arguments for the subscriptions's Posts.find()                                                          //
 * @param {Object} terms                                                                                               //
 */                                                                                                                    //
Posts.parameters.get = function (terms) {                                                                              // 12
                                                                                                                       //
  // add this to ensure all post publications pass audit-arguments-check                                               //
  check(terms, Match.Any);                                                                                             // 15
                                                                                                                       //
  // console.log(terms)                                                                                                //
                                                                                                                       //
  // note: using jquery's extend() with "deep" parameter set to true instead of shallow _.extend()                     //
  // see: http://api.jquery.com/jQuery.extend/                                                                         //
                                                                                                                       //
  // initialize parameters by extending baseParameters object, to avoid passing it by reference                        //
  var parameters = Telescope.utils.deepExtend(true, {}, Posts.views.baseParameters);                                   // 23
                                                                                                                       //
  // iterate over postsParameters callbacks                                                                            //
  parameters = Telescope.callbacks.run("postsParameters", parameters, terms);                                          // 26
                                                                                                                       //
  // if sort options are not provided, default to "top" sort                                                           //
  if (_.isEmpty(parameters.options.sort)) {                                                                            // 29
    parameters.options.sort = { sticky: -1, score: -1 };                                                               // 30
  }                                                                                                                    //
                                                                                                                       //
  // extend sort to sort posts by _id to break ties                                                                    //
  // NOTE: always do this last to avoid _id sort overriding another sort                                               //
  parameters = Telescope.utils.deepExtend(true, parameters, { options: { sort: { _id: -1 } } });                       // 35
                                                                                                                       //
  // console.log(parameters);                                                                                          //
                                                                                                                       //
  return parameters;                                                                                                   // 39
};                                                                                                                     //
                                                                                                                       //
// Parameter callbacks                                                                                                 //
                                                                                                                       //
// View Parameter                                                                                                      //
// Add a "view" property to terms which can be used to filter posts.                                                   //
function addViewParameter(parameters, terms) {                                                                         // 46
                                                                                                                       //
  // if view is not defined, default to "top"                                                                          //
  var view = !!terms.view ? Telescope.utils.dashToCamel(terms.view) : 'top';                                           // 49
                                                                                                                       //
  // get query parameters according to current view                                                                    //
  if (typeof Posts.views[view] !== 'undefined') parameters = Telescope.utils.deepExtend(true, parameters, Posts.views[view](terms));
                                                                                                                       //
  return parameters;                                                                                                   // 55
}                                                                                                                      //
Telescope.callbacks.add("postsParameters", addViewParameter);                                                          // 57
                                                                                                                       //
// View Parameter                                                                                                      //
// Add "after" and "before" properties to terms which can be used to limit posts in time.                              //
function addTimeParameter(parameters, terms) {                                                                         // 61
                                                                                                                       //
  if (typeof parameters.find.postedAt === "undefined") {                                                               // 63
                                                                                                                       //
    var postedAt = {};                                                                                                 // 65
                                                                                                                       //
    if (terms.after) {                                                                                                 // 67
      postedAt.$gte = moment(terms.after, "YYYY-MM-DD").startOf('day').toDate();                                       // 68
    }                                                                                                                  //
                                                                                                                       //
    if (terms.before) {                                                                                                // 71
      postedAt.$lt = moment(terms.before, "YYYY-MM-DD").endOf('day').toDate();                                         // 72
    }                                                                                                                  //
                                                                                                                       //
    if (!_.isEmpty(postedAt)) {                                                                                        // 75
      parameters.find.postedAt = postedAt;                                                                             // 76
    }                                                                                                                  //
  }                                                                                                                    //
                                                                                                                       //
  return parameters;                                                                                                   // 81
}                                                                                                                      //
Telescope.callbacks.add("postsParameters", addTimeParameter);                                                          // 83
                                                                                                                       //
// limit the number of items that can be requested at once                                                             //
function limitPosts(parameters, terms) {                                                                               // 86
  var maxLimit = 200;                                                                                                  // 87
  // if a limit was provided with the terms, add it too (note: limit=0 means "no limit")                               //
  if (typeof terms.limit !== 'undefined') {                                                                            // 89
    _.extend(parameters.options, { limit: parseInt(terms.limit) });                                                    // 90
  }                                                                                                                    //
                                                                                                                       //
  // limit to "maxLimit" items at most when limit is undefined, equal to 0, or superior to maxLimit                    //
  if (!parameters.options.limit || parameters.options.limit === 0 || parameters.options.limit > maxLimit) {            // 94
    parameters.options.limit = maxLimit;                                                                               // 95
  }                                                                                                                    //
  return parameters;                                                                                                   // 97
}                                                                                                                      //
Telescope.callbacks.add("postsParameters", limitPosts);                                                                // 99
                                                                                                                       //
// hide future scheduled posts unless "showFuture" is set to true or postedAt is already defined                       //
function hideFuturePosts(parameters, terms) {                                                                          // 102
                                                                                                                       //
  // var now = new Date();                                                                                             //
  var inOneHour = moment().add(1, "hour").toDate();                                                                    // 105
                                                                                                                       //
  if (!parameters.showFuture) {                                                                                        // 107
                                                                                                                       //
    if (!!parameters.find.postedAt) {                                                                                  // 109
                                                                                                                       //
      if (!!parameters.find.postedAt.$lt) {                                                                            // 111
                                                                                                                       //
        // if postedAt.$lt is defined, use it or current date plus one hour, whichever is earlier in time              //
        var lt = parameters.find.postedAt.$lt;                                                                         // 114
        parameters.find.postedAt.$lt = lt < inOneHour ? lt : inOneHour;                                                // 115
      } else {                                                                                                         //
                                                                                                                       //
        // if postedAt.$lt doesn't exist, use current date plus one hour                                               //
        parameters.find.postedAt.$lt = inOneHour;                                                                      // 120
      }                                                                                                                //
    } else {                                                                                                           //
                                                                                                                       //
      // if postedAt doesn't exist at all, set it to {$lt: now plus one hour}                                          //
      parameters.find.postedAt = { $lt: inOneHour };                                                                   // 127
    }                                                                                                                  //
  }                                                                                                                    //
                                                                                                                       //
  return parameters;                                                                                                   // 133
}                                                                                                                      //
Telescope.callbacks.add("postsParameters", hideFuturePosts);                                                           // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/views.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Post views are filters used for subscribing to and viewing posts                                                    //
 * @namespace Posts.views                                                                                              //
 */                                                                                                                    //
Posts.views = {};                                                                                                      // 5
                                                                                                                       //
/**                                                                                                                    //
 * Add a post view                                                                                                     //
 * @param {string} viewName - The name of the view                                                                     //
 * @param {function} [viewFunction] - The function used to calculate query terms. Takes terms and baseParameters arguments
 */                                                                                                                    //
Posts.views.add = function (viewName, viewFunction) {                                                                  // 12
  Posts.views[viewName] = viewFunction;                                                                                // 13
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Base parameters that will be common to all other view unless specific properties are overwritten                    //
 */                                                                                                                    //
Posts.views.baseParameters = {                                                                                         // 19
  find: {                                                                                                              // 20
    status: Posts.config.STATUS_APPROVED                                                                               // 21
  },                                                                                                                   //
  options: {                                                                                                           // 23
    limit: 10                                                                                                          // 24
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Top view                                                                                                            //
 */                                                                                                                    //
Posts.views.add("top", function (terms) {                                                                              // 31
  return {                                                                                                             // 32
    options: { sort: { sticky: -1, score: -1 } }                                                                       // 33
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * New view                                                                                                            //
 */                                                                                                                    //
Posts.views.add("new", function (terms) {                                                                              // 40
  return {                                                                                                             // 41
    options: { sort: { sticky: -1, postedAt: -1 } }                                                                    // 42
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Best view                                                                                                           //
 */                                                                                                                    //
Posts.views.add("best", function (terms) {                                                                             // 49
  return {                                                                                                             // 50
    options: { sort: { sticky: -1, baseScore: -1 } }                                                                   // 51
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Pending view                                                                                                        //
 */                                                                                                                    //
Posts.views.add("pending", function (terms) {                                                                          // 58
  return {                                                                                                             // 59
    find: {                                                                                                            // 60
      status: Posts.config.STATUS_PENDING                                                                              // 61
    },                                                                                                                 //
    options: { sort: { createdAt: -1 } },                                                                              // 63
    showFuture: true                                                                                                   // 64
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Rejected view                                                                                                       //
 */                                                                                                                    //
Posts.views.add("rejected", function (terms) {                                                                         // 71
  return {                                                                                                             // 72
    find: {                                                                                                            // 73
      status: Posts.config.STATUS_REJECTED                                                                             // 74
    },                                                                                                                 //
    options: { sort: { createdAt: -1 } },                                                                              // 76
    showFuture: true                                                                                                   // 77
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Scheduled view                                                                                                      //
 */                                                                                                                    //
Posts.views.add("scheduled", function (terms) {                                                                        // 84
  return {                                                                                                             // 85
    find: { postedAt: { $gte: new Date() } },                                                                          // 86
    options: { sort: { postedAt: -1 } },                                                                               // 87
    showFuture: true                                                                                                   // 88
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * User posts view                                                                                                     //
 */                                                                                                                    //
Posts.views.add("userPosts", function (terms) {                                                                        // 95
  return {                                                                                                             // 96
    find: { userId: terms.userId },                                                                                    // 97
    options: { limit: 5, sort: { postedAt: -1 } }                                                                      // 98
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * User upvoted posts view                                                                                             //
 */                                                                                                                    //
Posts.views.add("userUpvotedPosts", function (terms) {                                                                 // 105
  var user = Meteor.users.findOne(terms.userId);                                                                       // 106
  var postsIds = _.pluck(user.telescope.upvotedPosts, "itemId");                                                       // 107
  return {                                                                                                             // 108
    find: { _id: { $in: postsIds }, userId: { $ne: terms.userId } }, // exclude own posts                              // 109
    options: { limit: 5, sort: { postedAt: -1 } }                                                                      // 110
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * User downvoted posts view                                                                                           //
 */                                                                                                                    //
Posts.views.add("userDownvotedPosts", function (terms) {                                                               // 117
  var user = Meteor.users.findOne(terms.userId);                                                                       // 118
  var postsIds = _.pluck(user.telescope.downvotedPosts, "itemId");                                                     // 119
  // TODO: sort based on votedAt timestamp and not postedAt, if possible                                               //
  return {                                                                                                             // 121
    find: { _id: { $in: postsIds } },                                                                                  // 122
    options: { limit: 5, sort: { postedAt: -1 } }                                                                      // 123
  };                                                                                                                   //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/helpers.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//////////////////                                                                                                     //
// Link Helpers //                                                                                                     //
//////////////////                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Return a post's link if it has one, else return its post page URL                                                   //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.getLink = function (post, isAbsolute) {                                                                          // 9
  return !!post.url ? Telescope.utils.getOutgoingUrl(post.url) : this.getPageUrl(post, isAbsolute);                    // 10
};                                                                                                                     //
Posts.helpers({ getLink: function (isAbsolute) {                                                                       // 12
    return Posts.getLink(this, isAbsolute);                                                                            // 12
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Depending on the settings, return either a post's URL link (if it has one) or its page URL.                         //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.getShareableLink = function (post) {                                                                             // 18
  return Settings.get("outsideLinksPointTo", "link") === "link" ? Posts.getLink(post) : Posts.getPageUrl(post, true);  // 19
};                                                                                                                     //
Posts.helpers({ getShareableLink: function () {                                                                        // 21
    return Posts.getShareableLink(this);                                                                               // 21
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Whether a post's link should open in a new tab or not                                                               //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.getLinkTarget = function (post) {                                                                                // 27
  return !!post.url ? "_blank" : "";                                                                                   // 28
};                                                                                                                     //
Posts.helpers({ getLinkTarget: function () {                                                                           // 30
    return Posts.getLinkTarget(this);                                                                                  // 30
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Get URL of a post page.                                                                                             //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.getPageUrl = function (post, isAbsolute) {                                                                       // 36
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                         // 37
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                            // 38
  return prefix + FlowRouter.path("postPage", post);                                                                   // 39
};                                                                                                                     //
Posts.helpers({ getPageUrl: function (isAbsolute) {                                                                    // 41
    return Posts.getPageUrl(this, isAbsolute);                                                                         // 41
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Get post edit page URL.                                                                                             //
 * @param {String} id                                                                                                  //
 */                                                                                                                    //
Posts.getEditUrl = function (post, isAbsolute) {                                                                       // 47
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                         // 48
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                            // 49
  return prefix + FlowRouter.path("postEdit", post);                                                                   // 50
};                                                                                                                     //
Posts.helpers({ getEditUrl: function (isAbsolute) {                                                                    // 52
    return Posts.getEditUrl(this, isAbsolute);                                                                         // 52
  } });                                                                                                                //
                                                                                                                       //
///////////////////                                                                                                    //
// Other Helpers //                                                                                                    //
///////////////////                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Get a post author's name                                                                                            //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.getAuthorName = function (post) {                                                                                // 62
  var user = Meteor.users.findOne(post.userId);                                                                        // 63
  if (user) {                                                                                                          // 64
    return user.getDisplayName();                                                                                      // 65
  } else {                                                                                                             //
    return post.author;                                                                                                // 67
  }                                                                                                                    //
};                                                                                                                     //
Posts.helpers({ getAuthorName: function () {                                                                           // 70
    return Posts.getAuthorName(this);                                                                                  // 70
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Get default status for new posts.                                                                                   //
 * @param {Object} user                                                                                                //
 */                                                                                                                    //
Posts.getDefaultStatus = function (user) {                                                                             // 76
  var hasAdminRights = typeof user === 'undefined' ? false : Users.is.admin(user);                                     // 77
  if (hasAdminRights || !Settings.get('requirePostsApproval', false)) {                                                // 78
    // if user is admin, or else post approval is not required                                                         //
    return Posts.config.STATUS_APPROVED;                                                                               // 80
  } else {                                                                                                             //
    // else                                                                                                            //
    return Posts.config.STATUS_PENDING;                                                                                // 83
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Check if a post is approved                                                                                         //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.isApproved = function (post) {                                                                                   // 91
  return post.status === Posts.config.STATUS_APPROVED;                                                                 // 92
};                                                                                                                     //
Posts.helpers({ isApproved: function () {                                                                              // 94
    return Posts.isApproved(this);                                                                                     // 94
  } });                                                                                                                //
                                                                                                                       //
/**                                                                                                                    //
 * Check to see if post URL is unique.                                                                                 //
 * We need the current user so we know who to upvote the existing post as.                                             //
 * @param {String} url                                                                                                 //
 */                                                                                                                    //
Posts.checkForSameUrl = function (url) {                                                                               // 101
                                                                                                                       //
  // check that there are no previous posts with the same link in the past 6 months                                    //
  var sixMonthsAgo = moment().subtract(6, 'months').toDate();                                                          // 104
  var postWithSameLink = Posts.findOne({ url: url, postedAt: { $gte: sixMonthsAgo } });                                // 105
                                                                                                                       //
  if (typeof postWithSameLink !== 'undefined') {                                                                       // 107
    throw new Meteor.Error('603', i18n.t('this_link_has_already_been_posted'), postWithSameLink._id);                  // 108
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * When on a post page, return the current post                                                                        //
 */                                                                                                                    //
Posts.current = function () {                                                                                          // 115
  return Posts.findOne(FlowRouter.getParam("_id"));                                                                    // 116
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Check to see if a post is a link to a video                                                                         //
 * @param {Object} post                                                                                                //
 */                                                                                                                    //
Posts.isVideo = function (post) {                                                                                      // 123
  return post.media && post.media.type === "video";                                                                    // 124
};                                                                                                                     //
Posts.helpers({ isVideo: function () {                                                                                 // 126
    return Posts.isVideo(this);                                                                                        // 126
  } });                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/modules.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Telescope.modules.add("postsListTop", {                                                                                // 1
  template: "views_menu",                                                                                              // 2
  order: 1                                                                                                             // 3
});                                                                                                                    //
                                                                                                                       //
Telescope.modules.add("postComponents", [{                                                                             // 6
  template: 'post_rank',                                                                                               // 8
  order: 1                                                                                                             // 9
}, {                                                                                                                   //
  template: 'post_vote',                                                                                               // 12
  order: 10                                                                                                            // 13
}, {                                                                                                                   //
  template: 'post_content',                                                                                            // 16
  order: 20                                                                                                            // 17
}, {                                                                                                                   //
  template: 'post_avatars',                                                                                            // 20
  order: 30                                                                                                            // 21
}, {                                                                                                                   //
  template: 'post_discuss',                                                                                            // 24
  order: 40                                                                                                            // 25
}, {                                                                                                                   //
  template: 'post_actions',                                                                                            // 28
  order: 50                                                                                                            // 29
}]);                                                                                                                   //
                                                                                                                       //
Telescope.modules.add("postHeading", [{                                                                                // 33
  template: 'post_title',                                                                                              // 35
  order: 10                                                                                                            // 36
}, {                                                                                                                   //
  template: 'post_domain',                                                                                             // 39
  order: 20                                                                                                            // 40
}]);                                                                                                                   //
                                                                                                                       //
Telescope.modules.add("postMeta", [{                                                                                   // 44
  template: 'post_author',                                                                                             // 46
  order: 10                                                                                                            // 47
}, {                                                                                                                   //
  template: 'post_info',                                                                                               // 50
  order: 20                                                                                                            // 51
}, {                                                                                                                   //
  template: 'post_comments_link',                                                                                      // 54
  order: 30                                                                                                            // 55
}, {                                                                                                                   //
  template: 'post_admin',                                                                                              // 58
  order: 50                                                                                                            // 59
}]);                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/callbacks.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
//////////////////////////////////////////////////////                                                                 //
// Collection Hooks                                 //                                                                 //
//////////////////////////////////////////////////////                                                                 //
                                                                                                                       //
/**                                                                                                                    //
 * Generate HTML body from Markdown on post insert                                                                     //
 */                                                                                                                    //
Posts.before.insert(function (userId, doc) {                                                                           // 9
  if (!!doc.body) doc.htmlBody = Telescope.utils.sanitize(marked(doc.body));                                           // 10
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Generate HTML body from Markdown when post body is updated                                                          //
 */                                                                                                                    //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                     // 17
  // if body is being modified or $unset, update htmlBody too                                                          //
  if (Meteor.isServer && modifier.$set && modifier.$set.body) {                                                        // 19
    modifier.$set.htmlBody = Telescope.utils.sanitize(marked(modifier.$set.body));                                     // 20
  }                                                                                                                    //
  if (Meteor.isServer && modifier.$unset && typeof modifier.$unset.body !== "undefined") {                             // 22
    modifier.$unset.htmlBody = "";                                                                                     // 23
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Generate slug when post title is updated                                                                            //
 */                                                                                                                    //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                     // 30
  // if title is being modified, update slug too                                                                       //
  if (Meteor.isServer && modifier.$set && modifier.$set.title) {                                                       // 32
    modifier.$set.slug = Telescope.utils.slugify(modifier.$set.title);                                                 // 33
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Disallow $rename                                                                                                    //
 */                                                                                                                    //
Posts.before.update(function (userId, doc, fieldNames, modifier) {                                                     // 40
  if (!!modifier.$rename) {                                                                                            // 41
    throw new Meteor.Error("illegal $rename operator detected!");                                                      // 42
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
//////////////////////////////////////////////////////                                                                 //
// Callbacks                                        //                                                                 //
//////////////////////////////////////////////////////                                                                 //
                                                                                                                       //
/**                                                                                                                    //
 * Increment the user's post count and upvote the post                                                                 //
 */                                                                                                                    //
function afterPostSubmitOperations(post) {                                                                             // 53
  var userId = post.userId;                                                                                            // 54
  Meteor.users.update({ _id: userId }, { $inc: { "telescope.postCount": 1 } });                                        // 55
  return post;                                                                                                         // 56
}                                                                                                                      //
Telescope.callbacks.add("postSubmitAsync", afterPostSubmitOperations);                                                 // 58
                                                                                                                       //
function upvoteOwnPost(post) {                                                                                         // 60
  var postAuthor = Meteor.users.findOne(post.userId);                                                                  // 61
  Telescope.upvoteItem(Posts, post._id, postAuthor);                                                                   // 62
  return post;                                                                                                         // 63
}                                                                                                                      //
Telescope.callbacks.add("postSubmitAsync", upvoteOwnPost);                                                             // 65
                                                                                                                       //
function setPostedAt(post) {                                                                                           // 67
  if (post.isApproved() && !post.postedAt) {                                                                           // 68
    Posts.update(post._id, { $set: { postedAt: new Date() } });                                                        // 69
  }                                                                                                                    //
}                                                                                                                      //
Telescope.callbacks.add("postEditAsync", setPostedAt);                                                                 // 72
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/methods.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 *                                                                                                                     //
 * Post Methods                                                                                                        //
 *                                                                                                                     //
 */                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Insert a post in the database (note: optional post properties not listed here)                                      //
 * @param {Object} post - the post being inserted                                                                      //
 * @param {string} post.userId - the id of the user the post belongs to                                                //
 * @param {string} post.title - the post's title                                                                       //
 */                                                                                                                    //
Posts.submit = function (post) {                                                                                       // 13
                                                                                                                       //
  var userId = post.userId,                                                                                            // 15
      // at this stage, a userId is expected                                                                           //
  user = Users.findOne(userId);                                                                                        // 16
                                                                                                                       //
  // ------------------------------ Checks ------------------------------ //                                           //
                                                                                                                       //
  // check that a title was provided                                                                                   //
  if (!post.title) throw new Meteor.Error(602, i18n.t('please_fill_in_a_title'));                                      // 21
                                                                                                                       //
  // check that there are no posts with the same URL                                                                   //
  if (!!post.url) Posts.checkForSameUrl(post.url, user);                                                               // 25
                                                                                                                       //
  // ------------------------------ Properties ------------------------------ //                                       //
                                                                                                                       //
  var defaultProperties = {                                                                                            // 30
    createdAt: new Date(),                                                                                             // 31
    author: Users.getDisplayNameById(userId),                                                                          // 32
    upvotes: 0,                                                                                                        // 33
    downvotes: 0,                                                                                                      // 34
    commentCount: 0,                                                                                                   // 35
    clickCount: 0,                                                                                                     // 36
    viewCount: 0,                                                                                                      // 37
    baseScore: 0,                                                                                                      // 38
    score: 0,                                                                                                          // 39
    inactive: false,                                                                                                   // 40
    sticky: false,                                                                                                     // 41
    status: Posts.getDefaultStatus()                                                                                   // 42
  };                                                                                                                   //
                                                                                                                       //
  post = _.extend(defaultProperties, post);                                                                            // 45
                                                                                                                       //
  // if post is approved but doesn't have a postedAt date, give it a default date                                      //
  // note: pending posts get their postedAt date only once theyre approved                                             //
  if (post.status === Posts.config.STATUS_APPROVED && !post.postedAt) post.postedAt = new Date();                      // 49
                                                                                                                       //
  // clean up post title                                                                                               //
  post.title = Telescope.utils.cleanUp(post.title);                                                                    // 53
                                                                                                                       //
  // generate slug                                                                                                     //
  post.slug = Telescope.utils.slugify(post.title);                                                                     // 56
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all post submit server callbacks on post object successively                                                  //
  post = Telescope.callbacks.run("postSubmit", post);                                                                  // 61
                                                                                                                       //
  // -------------------------------- Insert ------------------------------- //                                        //
                                                                                                                       //
  post._id = Posts.insert(post);                                                                                       // 65
                                                                                                                       //
  // --------------------- Server-Side Async Callbacks --------------------- //                                        //
                                                                                                                       //
  // note: query for post to get fresh document with collection-hooks effects applied                                  //
  Telescope.callbacks.runAsync("postSubmitAsync", Posts.findOne(post._id));                                            // 70
                                                                                                                       //
  return post;                                                                                                         // 72
};                                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Edit a post in the database                                                                                         //
 * @param {string} postId – the ID of the post being edited                                                            //
 * @param {Object} modifier – the modifier object                                                                      //
 * @param {Object} post - the current post object                                                                      //
 */                                                                                                                    //
Posts.edit = function (postId, modifier, post) {                                                                       // 81
                                                                                                                       //
  if (typeof post === "undefined") {                                                                                   // 83
    post = Posts.findOne(postId);                                                                                      // 84
  }                                                                                                                    //
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  modifier = Telescope.callbacks.run("postEdit", modifier, post);                                                      // 89
                                                                                                                       //
  // ------------------------------ Update ------------------------------ //                                           //
                                                                                                                       //
  Posts.update(postId, modifier);                                                                                      // 93
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  Telescope.callbacks.runAsync("postEditAsync", Posts.findOne(postId), post);                                          // 97
                                                                                                                       //
  // ------------------------------ After Update ------------------------------ //                                     //
  return Posts.findOne(postId);                                                                                        // 100
};                                                                                                                     //
                                                                                                                       //
// ------------------------------------------------------------------------------------------- //                      //
// ----------------------------------------- Methods ----------------------------------------- //                      //
// ------------------------------------------------------------------------------------------- //                      //
                                                                                                                       //
var postViews = [];                                                                                                    // 107
                                                                                                                       //
Meteor.methods({                                                                                                       // 109
                                                                                                                       //
  /**                                                                                                                  //
   * Meteor method for submitting a post from the client                                                               //
   * @memberof Posts                                                                                                   //
   * @param {Object} post - the post being inserted                                                                    //
   */                                                                                                                  //
  submitPost: function (post) {                                                                                        // 116
                                                                                                                       //
    check(post, Posts.simpleSchema());                                                                                 // 118
                                                                                                                       //
    // required properties:                                                                                            //
    // title                                                                                                           //
                                                                                                                       //
    // optional properties                                                                                             //
    // URL                                                                                                             //
    // body                                                                                                            //
    // categories                                                                                                      //
    // thumbnailUrl                                                                                                    //
                                                                                                                       //
    // NOTE: the current user and the post author user might be two different users!                                   //
    var user = Meteor.user(),                                                                                          // 130
        hasAdminRights = Users.is.admin(user),                                                                         //
        schema = Posts.simpleSchema()._schema;                                                                         //
                                                                                                                       //
    // ------------------------------ Checks ------------------------------ //                                         //
                                                                                                                       //
    // check that user can post                                                                                        //
    if (!user || !Users.can.post(user)) throw new Meteor.Error(601, i18n.t('you_need_to_login_or_be_invited_to_post_new_stories'));
                                                                                                                       //
    // --------------------------- Rate Limiting -------------------------- //                                         //
                                                                                                                       //
    if (!hasAdminRights) {                                                                                             // 142
                                                                                                                       //
      var timeSinceLastPost = Users.timeSinceLast(user, Posts),                                                        // 144
          numberOfPostsInPast24Hours = Users.numberOfItemsInPast24Hours(user, Posts),                                  //
          postInterval = Math.abs(parseInt(Settings.get('postInterval', 30))),                                         //
          maxPostsPer24Hours = Math.abs(parseInt(Settings.get('maxPostsPerDay', 30)));                                 //
                                                                                                                       //
      // check that user waits more than X seconds between posts                                                       //
      if (timeSinceLastPost < postInterval) throw new Meteor.Error(604, i18n.t('please_wait') + (postInterval - timeSinceLastPost) + i18n.t('seconds_before_posting_again'));
                                                                                                                       //
      // check that the user doesn't post more than Y posts per day                                                    //
      if (numberOfPostsInPast24Hours > maxPostsPer24Hours) throw new Meteor.Error(605, i18n.t('sorry_you_cannot_submit_more_than') + maxPostsPer24Hours + i18n.t('posts_per_day'));
    }                                                                                                                  //
                                                                                                                       //
    // ------------------------------ Properties ------------------------------ //                                     //
                                                                                                                       //
    // admin-only properties                                                                                           //
    // status                                                                                                          //
    // postedAt                                                                                                        //
    // userId                                                                                                          //
    // sticky (default to false)                                                                                       //
                                                                                                                       //
    // go over each schema field and throw an error if it's not editable                                               //
    _.keys(post).forEach(function (fieldName) {                                                                        // 168
                                                                                                                       //
      var field = schema[fieldName];                                                                                   // 170
      if (!Users.can.submitField(user, field)) {                                                                       // 171
        throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);      // 172
      }                                                                                                                //
    });                                                                                                                //
                                                                                                                       //
    // if no post status has been set, set it now                                                                      //
    if (!post.status) {                                                                                                // 178
      post.status = Posts.getDefaultStatus(user);                                                                      // 179
    }                                                                                                                  //
                                                                                                                       //
    // if no userId has been set, default to current user id                                                           //
    if (!post.userId) {                                                                                                // 183
      post.userId = user._id;                                                                                          // 184
    }                                                                                                                  //
                                                                                                                       //
    return Posts.submit(post);                                                                                         // 187
  },                                                                                                                   //
                                                                                                                       //
  /**                                                                                                                  //
   * Meteor method for editing a post from the client                                                                  //
   * @memberof Posts                                                                                                   //
   * @param {Object} modifier - the update modifier                                                                    //
   * @param {Object} postId - the id of the post being updated                                                         //
   */                                                                                                                  //
  editPost: function (modifier, postId) {                                                                              // 196
                                                                                                                       //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know                //
    check(modifier, Match.OneOf({ $set: Posts.simpleSchema() }, { $unset: Object }, { $set: Posts.simpleSchema(), $unset: Object }));
    check(postId, String);                                                                                             // 200
                                                                                                                       //
    var user = Meteor.user(),                                                                                          // 202
        post = Posts.findOne(postId),                                                                                  //
        schema = Posts.simpleSchema()._schema;                                                                         //
                                                                                                                       //
    // ------------------------------ Checks ------------------------------ //                                         //
                                                                                                                       //
    // check that user can edit document                                                                               //
    if (!user || !Users.can.edit(user, post)) {                                                                        // 209
      throw new Meteor.Error(601, i18n.t('sorry_you_cannot_edit_this_post'));                                          // 210
    }                                                                                                                  //
                                                                                                                       //
    // go over each field and throw an error if it's not editable                                                      //
    // loop over each operation ($set, $unset, etc.)                                                                   //
    _.each(modifier, function (operation) {                                                                            // 215
      // loop over each property being operated on                                                                     //
      _.keys(operation).forEach(function (fieldName) {                                                                 // 217
                                                                                                                       //
        var field = schema[fieldName];                                                                                 // 219
        if (!Users.can.editField(user, field, post)) {                                                                 // 220
          throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);    // 221
        }                                                                                                              //
      });                                                                                                              //
    });                                                                                                                //
                                                                                                                       //
    return Posts.edit(postId, modifier, post);                                                                         // 227
  },                                                                                                                   //
                                                                                                                       //
  setPostedAt: function (post, customPostedAt) {                                                                       // 231
                                                                                                                       //
    // this method is not actually used?                                                                               //
                                                                                                                       //
    check(post, Posts.simpleSchema());                                                                                 // 235
    check(customPostedAt, Date);                                                                                       // 236
                                                                                                                       //
    var postedAt = new Date(); // default to current date and time                                                     // 238
                                                                                                                       //
    if (Users.is.admin(Meteor.user()) && typeof customPostedAt !== 'undefined') // if user is admin and a custom datetime has been set
      postedAt = customPostedAt;                                                                                       // 241
                                                                                                                       //
    Posts.update(post._id, { $set: { postedAt: postedAt } });                                                          // 243
  },                                                                                                                   //
                                                                                                                       //
  approvePost: function (postId) {                                                                                     // 246
                                                                                                                       //
    check(postId, String);                                                                                             // 248
                                                                                                                       //
    var post = Posts.findOne(postId);                                                                                  // 250
    var now = new Date();                                                                                              // 251
                                                                                                                       //
    if (Users.is.admin(Meteor.user())) {                                                                               // 253
                                                                                                                       //
      var set = { status: Posts.config.STATUS_APPROVED };                                                              // 255
                                                                                                                       //
      if (!post.postedAt) {                                                                                            // 257
        set.postedAt = now;                                                                                            // 258
      }                                                                                                                //
                                                                                                                       //
      Posts.update(post._id, { $set: set });                                                                           // 261
                                                                                                                       //
      Telescope.callbacks.runAsync("postApproveAsync", post);                                                          // 263
    } else {                                                                                                           //
      Messages.flash('You need to be an admin to do that.', "error");                                                  // 266
    }                                                                                                                  //
  },                                                                                                                   //
                                                                                                                       //
  rejectPost: function (postId) {                                                                                      // 270
                                                                                                                       //
    check(postId, String);                                                                                             // 272
    var post = Posts.findOne(postId);                                                                                  // 273
                                                                                                                       //
    if (Users.is.admin(Meteor.user())) {                                                                               // 275
                                                                                                                       //
      Posts.update(post._id, { $set: { status: Posts.config.STATUS_REJECTED } });                                      // 277
                                                                                                                       //
      Telescope.callbacks.runAsync("postRejectAsync", post);                                                           // 279
    } else {                                                                                                           //
      Messages.flash('You need to be an admin to do that.', "error");                                                  // 282
    }                                                                                                                  //
  },                                                                                                                   //
                                                                                                                       //
  increasePostViews: function (postId, sessionId) {                                                                    // 286
                                                                                                                       //
    check(postId, String);                                                                                             // 288
    check(sessionId, Match.Any);                                                                                       // 289
                                                                                                                       //
    this.unblock();                                                                                                    // 291
                                                                                                                       //
    // only let users increment a post's view counter once per session                                                 //
    var view = { _id: postId, userId: this.userId, sessionId: sessionId };                                             // 294
                                                                                                                       //
    if (_.where(postViews, view).length === 0) {                                                                       // 296
      postViews.push(view);                                                                                            // 297
      Posts.update(postId, { $inc: { viewCount: 1 } });                                                                // 298
    }                                                                                                                  //
  },                                                                                                                   //
                                                                                                                       //
  deletePostById: function (postId) {                                                                                  // 302
                                                                                                                       //
    check(postId, String);                                                                                             // 304
                                                                                                                       //
    // remove post comments                                                                                            //
    // if(!this.isSimulation) {                                                                                        //
    //   Comments.remove({post: postId});                                                                              //
    // }                                                                                                               //
    // NOTE: actually, keep comments after all                                                                         //
                                                                                                                       //
    var post = Posts.findOne({ _id: postId });                                                                         // 312
                                                                                                                       //
    if (!Meteor.userId() || !Users.can.editById(Meteor.userId(), post)) throw new Meteor.Error(606, 'You need permission to edit or delete a post');
                                                                                                                       //
    // decrement post count                                                                                            //
    Users.update({ _id: post.userId }, { $inc: { "telescope.postCount": -1 } });                                       // 317
                                                                                                                       //
    // delete post                                                                                                     //
    Posts.remove(postId);                                                                                              // 320
                                                                                                                       //
    Telescope.callbacks.runAsync("postDeleteAsync", post);                                                             // 322
  },                                                                                                                   //
                                                                                                                       //
  checkForDuplicates: function (url) {                                                                                 // 326
    Posts.checkForSameUrl(url);                                                                                        // 327
  }                                                                                                                    //
                                                                                                                       //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/transitions.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Posts.addStateTransition("status", [                                                                                //
//   {                                                                                                                 //
//     name: "approve",                                                                                                //
//     from: "*",                                                                                                      //
//     to: Posts.config.STATUS_APPROVED,                                                                               //
//     callback: function (oldPost, newPost) {                                                                         //
//       Telescope.callbacks.runAsync("postApproveAsync", newPost, oldPost);                                           //
//     }                                                                                                               //
//   },                                                                                                                //
//   {                                                                                                                 //
//     name: "unapprove",                                                                                              //
//     from: Posts.config.STATUS_APPROVED,                                                                             //
//     to: "*",                                                                                                        //
//     callback: function (oldPost, newPost) {                                                                         //
//       Telescope.callbacks.runAsync("postUnapproveAsync", newPost, oldPost);                                         //
//     }                                                                                                               //
//   },                                                                                                                //
//   {                                                                                                                 //
//     name: "makePending",                                                                                            //
//     from: "*",                                                                                                      //
//     to: Posts.config.STATUS_PENDING,                                                                                //
//     callback: function (oldPost, newPost) {                                                                         //
//       Telescope.callbacks.runAsync("postMakePendingAsync", newPost, oldPost);                                       //
//     }                                                                                                               //
//   },                                                                                                                //
//   {                                                                                                                 //
//     name: "reject",                                                                                                 //
//     from: "*",                                                                                                      //
//     to: Posts.config.STATUS_REJECTED,                                                                               //
//     callback: function (oldPost, newPost) {                                                                         //
//       Telescope.callbacks.runAsync("postRejectAsync", newPost, oldPost);                                            //
//     }                                                                                                               //
//   }                                                                                                                 //
// ]);                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/menus.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Posts.getRoute = function () {                                                                                         // 1
  FlowRouter.watchPathChange();                                                                                        // 2
  var viewName = this.name;                                                                                            // 3
  var currentQuery = _.clone(FlowRouter.current().queryParams);                                                        // 4
  var defaultView = Settings.get("defaultView", "top");                                                                // 5
  var newQuery;                                                                                                        // 6
                                                                                                                       //
  if (viewName === defaultView) {                                                                                      // 8
    // for the default view, just remove the "view" parameter altogether                                               //
    delete currentQuery.view;                                                                                          // 10
    newQuery = currentQuery;                                                                                           // 11
  } else {                                                                                                             //
    newQuery = _.extend(currentQuery, { view: viewName });                                                             // 13
  }                                                                                                                    //
                                                                                                                       //
  return FlowRouter.path("postsDefault", FlowRouter.current().params, newQuery);                                       // 16
};                                                                                                                     //
                                                                                                                       //
// array containing items in the views menu                                                                            //
var viewsMenuItems = [{                                                                                                // 20
  route: Posts.getRoute,                                                                                               // 22
  name: 'top',                                                                                                         // 23
  label: 'top',                                                                                                        // 24
  description: 'most_popular_posts'                                                                                    // 25
}, {                                                                                                                   //
  route: Posts.getRoute,                                                                                               // 28
  name: 'new',                                                                                                         // 29
  label: 'new',                                                                                                        // 30
  description: 'newest_posts'                                                                                          // 31
}, {                                                                                                                   //
  route: Posts.getRoute,                                                                                               // 34
  name: 'best',                                                                                                        // 35
  label: 'best',                                                                                                       // 36
  description: 'highest_ranked_posts_ever'                                                                             // 37
}, {                                                                                                                   //
  route: Posts.getRoute,                                                                                               // 40
  name: 'pending',                                                                                                     // 41
  label: 'pending',                                                                                                    // 42
  description: 'posts_awaiting_moderation',                                                                            // 43
  adminOnly: true                                                                                                      // 44
}, {                                                                                                                   //
  route: Posts.getRoute,                                                                                               // 47
  name: 'rejected',                                                                                                    // 48
  label: 'rejected',                                                                                                   // 49
  description: 'rejected_posts',                                                                                       // 50
  adminOnly: true                                                                                                      // 51
}, {                                                                                                                   //
  route: Posts.getRoute,                                                                                               // 54
  name: 'scheduled',                                                                                                   // 55
  label: 'scheduled',                                                                                                  // 56
  description: 'future_scheduled_posts',                                                                               // 57
  adminOnly: true                                                                                                      // 58
}];                                                                                                                    //
                                                                                                                       //
Telescope.menuItems.add("viewsMenu", viewsMenuItems);                                                                  // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/routes.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/', {                                                                                                // 1
  name: "postsDefault",                                                                                                // 2
  action: function (params, queryParams) {                                                                             // 3
    BlazeLayout.render("layout", { main: "main_posts_list" });                                                         // 4
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/posts/:_id/edit', {                                                                                 // 8
  name: "postEdit",                                                                                                    // 9
  action: function (params, queryParams) {                                                                             // 10
    BlazeLayout.render("layout", { main: "post_edit" });                                                               // 11
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/posts/:_id/:slug?', {                                                                               // 15
  name: "postPage",                                                                                                    // 16
  action: function (params, queryParams) {                                                                             // 17
    BlazeLayout.render("layout", { main: "post_page" });                                                               // 18
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
var trackRouteEntry = function (context) {                                                                             // 22
  var sessionId = Meteor.default_connection && Meteor.default_connection._lastSessionId ? Meteor.default_connection._lastSessionId : null;
  Meteor.call('increasePostViews', context.params._id, sessionId);                                                     // 24
};                                                                                                                     //
                                                                                                                       //
FlowRouter.route('/submit', {                                                                                          // 27
  name: "postSubmit",                                                                                                  // 28
  action: function (params, queryParams) {                                                                             // 29
    BlazeLayout.render("layout", { main: "post_submit" });                                                             // 30
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.after_post_item.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("after_post_item");                                                                               // 2
Template["after_post_item"] = new Template("Template.after_post_item", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return "";                                                                                                           // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.before_post_item.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("before_post_item");                                                                              // 2
Template["before_post_item"] = new Template("Template.before_post_item", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return "";                                                                                                           // 5
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_actions.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_actions");                                                                                  // 2
Template["post_actions"] = new Template("Template.post_actions", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-actions ", Spacebars.mustache(view.lookup("moduleClass")) ];                                      // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    "class": "toggle-actions-link mobile-only",                                                                        // 10
    href: "#"                                                                                                          // 11
  }, "\n      ", Blaze.View("lookup:icon", function() {                                                                // 12
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "more", "icon-circle"));                          // 13
  }), "\n    "), "\n  ");                                                                                              // 14
}));                                                                                                                   // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_actions.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_actions.events({                                                                                         // 1
  'click .toggle-actions-link': function (e) {                                                                         // 2
    e.preventDefault();                                                                                                // 3
    var $post = $(e.target).parents('.post');                                                                          // 4
    var h = $post.height();                                                                                            // 5
    if ($post.hasClass('show-actions')) {                                                                              // 6
      $post.height('auto');                                                                                            // 7
      $post.removeClass('show-actions');                                                                               // 8
    } else {                                                                                                           //
      $post.height(h + 'px');                                                                                          // 10
      $post.addClass('show-actions');                                                                                  // 11
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_admin.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_admin");                                                                                    // 2
Template["post_admin"] = new Template("Template.post_admin", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ Spacebars.mustache(view.lookup("moduleClass")), " post-admin" ];                                        // 7
    },                                                                                                                 // 8
    "aria-live": "off"                                                                                                 // 9
  }, "\n\n    ", Blaze.If(function() {                                                                                 // 10
    return Spacebars.call(view.lookup("isAdmin"));                                                                     // 11
  }, function() {                                                                                                      // 12
    return [ "\n\n      ", HTML.DIV({                                                                                  // 13
      "class": "post-admin-stats"                                                                                      // 14
    }, "\n        ", HTML.SPAN({                                                                                       // 15
      title: function() {                                                                                              // 16
        return Spacebars.mustache(view.lookup("_"), "score");                                                          // 17
      }                                                                                                                // 18
    }, Blaze.View("lookup:icon", function() {                                                                          // 19
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "score"));                                      // 20
    }), " ", Blaze.View("lookup:shortScore", function() {                                                              // 21
      return Spacebars.mustache(view.lookup("shortScore"));                                                            // 22
    }), " ", HTML.SPAN({                                                                                               // 23
      "class": "sr-only"                                                                                               // 24
    }, Blaze.View("lookup:_", function() {                                                                             // 25
      return Spacebars.mustache(view.lookup("_"), "score");                                                            // 26
    }))), "\n        ", HTML.SPAN({                                                                                    // 27
      title: function() {                                                                                              // 28
        return Spacebars.mustache(view.lookup("_"), "clicks");                                                         // 29
      }                                                                                                                // 30
    }, Blaze.View("lookup:icon", function() {                                                                          // 31
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "clicks"));                                     // 32
    }), " ", Blaze.View("lookup:clickCount", function() {                                                              // 33
      return Spacebars.mustache(view.lookup("clickCount"));                                                            // 34
    }), " ", HTML.SPAN({                                                                                               // 35
      "class": "sr-only"                                                                                               // 36
    }, Blaze.View("lookup:_", function() {                                                                             // 37
      return Spacebars.mustache(view.lookup("_"), "clicks");                                                           // 38
    }))), "\n        ", HTML.SPAN({                                                                                    // 39
      title: function() {                                                                                              // 40
        return Spacebars.mustache(view.lookup("_"), "views");                                                          // 41
      }                                                                                                                // 42
    }, Blaze.View("lookup:icon", function() {                                                                          // 43
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "views"));                                      // 44
    }), " ", Blaze.View("lookup:viewCount", function() {                                                               // 45
      return Spacebars.mustache(view.lookup("viewCount"));                                                             // 46
    }), " ", HTML.SPAN({                                                                                               // 47
      "class": "sr-only"                                                                                               // 48
    }, Blaze.View("lookup:_", function() {                                                                             // 49
      return Spacebars.mustache(view.lookup("_"), "views");                                                            // 50
    }))), "\n      "), "\n\n      ", HTML.DIV({                                                                        // 51
      "class": "post-admin-actions"                                                                                    // 52
    }, "\n        ", HTML.A({                                                                                          // 53
      href: function() {                                                                                               // 54
        return Spacebars.mustache(view.lookup("pathFor"), "postEdit", Spacebars.kw({                                   // 55
          _id: view.lookup("_id")                                                                                      // 56
        }));                                                                                                           // 57
      },                                                                                                               // 58
      "class": "edit-link",                                                                                            // 59
      title: function() {                                                                                              // 60
        return Spacebars.mustache(view.lookup("_"), "edit");                                                           // 61
      }                                                                                                                // 62
    }, Blaze.View("lookup:icon", function() {                                                                          // 63
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "edit"));                                       // 64
    }), " ", HTML.SPAN({                                                                                               // 65
      "class": "sr-only"                                                                                               // 66
    }, Blaze.View("lookup:_", function() {                                                                             // 67
      return Spacebars.mustache(view.lookup("_"), "edit");                                                             // 68
    }))), "\n        ", Blaze.If(function() {                                                                          // 69
      return Spacebars.call(view.lookup("showApprove"));                                                               // 70
    }, function() {                                                                                                    // 71
      return [ "\n          ", HTML.A({                                                                                // 72
        href: "#",                                                                                                     // 73
        "class": "approve-link",                                                                                       // 74
        title: function() {                                                                                            // 75
          return Spacebars.mustache(view.lookup("_"), "approve");                                                      // 76
        }                                                                                                              // 77
      }, Blaze.View("lookup:icon", function() {                                                                        // 78
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "approve"));                                  // 79
      }), " ", HTML.SPAN({                                                                                             // 80
        "class": "sr-only"                                                                                             // 81
      }, Blaze.View("lookup:_", function() {                                                                           // 82
        return Spacebars.mustache(view.lookup("_"), "approve");                                                        // 83
      }))), "\n        " ];                                                                                            // 84
    }), "\n        ", Blaze.If(function() {                                                                            // 85
      return Spacebars.call(view.lookup("showReject"));                                                                // 86
    }, function() {                                                                                                    // 87
      return [ "\n          ", HTML.A({                                                                                // 88
        href: "#",                                                                                                     // 89
        "class": "reject-link",                                                                                        // 90
        title: function() {                                                                                            // 91
          return Spacebars.mustache(view.lookup("_"), "reject");                                                       // 92
        }                                                                                                              // 93
      }, Blaze.View("lookup:icon", function() {                                                                        // 94
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "reject"));                                   // 95
      }), " ", HTML.SPAN({                                                                                             // 96
        "class": "sr-only"                                                                                             // 97
      }, Blaze.View("lookup:_", function() {                                                                           // 98
        return Spacebars.mustache(view.lookup("_"), "reject");                                                         // 99
      }))), "\n        " ];                                                                                            // 100
    }), "\n        ", HTML.A({                                                                                         // 101
      href: "#",                                                                                                       // 102
      "class": "delete-link",                                                                                          // 103
      title: function() {                                                                                              // 104
        return Spacebars.mustache(view.lookup("_"), "delete");                                                         // 105
      }                                                                                                                // 106
    }, Blaze.View("lookup:icon", function() {                                                                          // 107
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "delete"));                                     // 108
    }), " ", HTML.SPAN({                                                                                               // 109
      "class": "sr-only"                                                                                               // 110
    }, Blaze.View("lookup:_", function() {                                                                             // 111
      return Spacebars.mustache(view.lookup("_"), "delete");                                                           // 112
    }))), "\n      "), "\n\n    " ];                                                                                   // 113
  }, function() {                                                                                                      // 114
    return [ "\n\n      ", Blaze.If(function() {                                                                       // 115
      return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));                                         // 116
    }, function() {                                                                                                    // 117
      return [ "\n        ", HTML.DIV({                                                                                // 118
        "class": "post-admin-actions"                                                                                  // 119
      }, "\n          ", HTML.A({                                                                                      // 120
        href: function() {                                                                                             // 121
          return Spacebars.mustache(view.lookup("pathFor"), "postEdit", Spacebars.kw({                                 // 122
            _id: view.lookup("_id")                                                                                    // 123
          }));                                                                                                         // 124
        },                                                                                                             // 125
        "class": "edit-link",                                                                                          // 126
        title: function() {                                                                                            // 127
          return Spacebars.mustache(view.lookup("_"), "edit");                                                         // 128
        }                                                                                                              // 129
      }, Blaze.View("lookup:icon", function() {                                                                        // 130
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "edit"));                                     // 131
      }), " ", HTML.SPAN({                                                                                             // 132
        "class": "sr-only"                                                                                             // 133
      }, Blaze.View("lookup:_", function() {                                                                           // 134
        return Spacebars.mustache(view.lookup("_"), "edit");                                                           // 135
      }))), "\n          ", HTML.A({                                                                                   // 136
        href: "#",                                                                                                     // 137
        "class": "delete-link",                                                                                        // 138
        title: function() {                                                                                            // 139
          return Spacebars.mustache(view.lookup("_"), "delete");                                                       // 140
        }                                                                                                              // 141
      }, Blaze.View("lookup:icon", function() {                                                                        // 142
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "delete"));                                   // 143
      }), " ", HTML.SPAN({                                                                                             // 144
        "class": "sr-only"                                                                                             // 145
      }, Blaze.View("lookup:_", function() {                                                                           // 146
        return Spacebars.mustache(view.lookup("_"), "delete");                                                         // 147
      }))), "\n        "), "\n      " ];                                                                               // 148
    }), "\n\n    " ];                                                                                                  // 149
  }), "\n  \n  ");                                                                                                     // 150
}));                                                                                                                   // 151
                                                                                                                       // 152
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_admin.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_admin.helpers({                                                                                          // 1
  showApprove: function () {                                                                                           // 2
    return !!Settings.get('requirePostsApproval') && (this.status === Posts.config.STATUS_PENDING || this.status === Posts.config.STATUS_REJECTED);
  },                                                                                                                   //
  showReject: function () {                                                                                            // 5
    return !!Settings.get('requirePostsApproval') && (this.status === Posts.config.STATUS_PENDING || this.status === Posts.config.STATUS_APPROVED);
  },                                                                                                                   //
  shortScore: function () {                                                                                            // 8
    return Math.floor(this.score * 100) / 100;                                                                         // 9
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.post_admin.events({                                                                                           // 13
  'click .approve-link': function (e) {                                                                                // 14
    Meteor.call('approvePost', this._id);                                                                              // 15
    e.preventDefault();                                                                                                // 16
  },                                                                                                                   //
  'click .reject-link': function (e) {                                                                                 // 18
    Meteor.call('rejectPost', this._id);                                                                               // 19
    e.preventDefault();                                                                                                // 20
  },                                                                                                                   //
  'click .delete-link': function (e) {                                                                                 // 22
    var post = this;                                                                                                   // 23
                                                                                                                       //
    e.preventDefault();                                                                                                // 25
                                                                                                                       //
    if (confirm("Delete “" + post.title + "”?")) {                                                                     // 27
      FlowRouter.go('postsDefault');                                                                                   // 28
      Meteor.call("deletePostById", post._id, function (error) {                                                       // 29
        if (error) {                                                                                                   // 30
          console.log(error);                                                                                          // 31
          Messages.flash(error.reason, 'error');                                                                       // 32
        } else {                                                                                                       //
          Messages.flash(i18n.t('your_post_has_been_deleted'), 'success');                                             // 34
        }                                                                                                              //
      });                                                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_author.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_author");                                                                                   // 2
Template["post_author"] = new Template("Template.post_author", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return Spacebars.mustache(view.lookup("moduleClass"));                                                           // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    "class": "post-author",                                                                                            // 10
    href: function() {                                                                                                 // 11
      return Spacebars.mustache(view.lookup("getProfileUrl"), Spacebars.dot(view.lookup("item"), "userId"));           // 12
    }                                                                                                                  // 13
  }, Blaze.View("lookup:displayName", function() {                                                                     // 14
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 15
  })), "\n  ");                                                                                                        // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_author.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_author.helpers({                                                                                         // 1
  displayName: function () {                                                                                           // 2
    var user = Meteor.users.findOne(this.userId);                                                                      // 3
    if (user) {                                                                                                        // 4
      return Users.getDisplayName(user);                                                                               // 5
    } else {                                                                                                           //
      return this.author;                                                                                              // 7
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_avatars.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_avatars");                                                                                  // 2
Template["post_avatars"] = new Template("Template.post_avatars", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-avatars ", Spacebars.mustache(view.lookup("moduleClass")) ];                                      // 7
    },                                                                                                                 // 8
    "aria-hidden": "true",                                                                                             // 9
    "aria-live": "off"                                                                                                 // 10
  }, "\n    ", HTML.A({                                                                                                // 11
    href: function() {                                                                                                 // 12
      return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("userId"));                                  // 13
    },                                                                                                                 // 14
    title: function() {                                                                                                // 15
      return Spacebars.mustache(view.lookup("getDisplayName"), view.lookup("userId"));                                 // 16
    },                                                                                                                 // 17
    "class": "avatar-link avatar-small author-avatar"                                                                  // 18
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 19
    return {                                                                                                           // 20
      userId: Spacebars.call(view.lookup("userId")),                                                                   // 21
      shape: Spacebars.call("circle")                                                                                  // 22
    };                                                                                                                 // 23
  }, function() {                                                                                                      // 24
    return Spacebars.include(view.lookupTemplate("avatar"));                                                           // 25
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                       // 26
    return Spacebars.call(view.lookup("commenters"));                                                                  // 27
  }, function() {                                                                                                      // 28
    return [ "\n      ", HTML.DIV({                                                                                    // 29
      "class": "post-commenters"                                                                                       // 30
    }, "\n      ", Blaze.Each(function() {                                                                             // 31
      return Spacebars.call(view.lookup("commenters"));                                                                // 32
    }, function() {                                                                                                    // 33
      return [ "\n        ", HTML.A({                                                                                  // 34
        href: function() {                                                                                             // 35
          return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("."));                                   // 36
        },                                                                                                             // 37
        title: function() {                                                                                            // 38
          return Spacebars.mustache(view.lookup("getDisplayName"), view.lookup("."));                                  // 39
        },                                                                                                             // 40
        "class": "avatar-link avatar-small commenter-avatar"                                                           // 41
      }, "\n          ", Blaze._TemplateWith(function() {                                                              // 42
        return {                                                                                                       // 43
          userId: Spacebars.call(view.lookup(".")),                                                                    // 44
          shape: Spacebars.call("circle")                                                                              // 45
        };                                                                                                             // 46
      }, function() {                                                                                                  // 47
        return Spacebars.include(view.lookupTemplate("avatar"));                                                       // 48
      }), "\n        "), "\n      " ];                                                                                 // 49
    }), "\n      "), "\n    " ];                                                                                       // 50
  }), "\n  ");                                                                                                         // 51
}));                                                                                                                   // 52
                                                                                                                       // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_avatars.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_avatars.helpers({                                                                                        // 1
  commenters: function () {                                                                                            // 2
    // remove post author ID from commenters to avoid showing author's avatar again                                    //
    // limit to 4 commenters in case there's more                                                                      //
    // TODO: show a "..." sign or something                                                                            //
    return _.first(_.without(this.commenters, this.userId), 4);                                                        // 6
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_comments_link.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_comments_link");                                                                            // 2
Template["post_comments_link"] = new Template("Template.post_comments_link", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return Spacebars.mustache(view.lookup("moduleClass"));                                                           // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    "class": "comments-link",                                                                                          // 10
    href: function() {                                                                                                 // 11
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getPageUrl"));                                        // 12
    }                                                                                                                  // 13
  }, "\n      ", HTML.SPAN({                                                                                           // 14
    "class": "comments-count"                                                                                          // 15
  }, Blaze.View("lookup:commentCount", function() {                                                                    // 16
    return Spacebars.mustache(view.lookup("commentCount"));                                                            // 17
  })), "\n      ", HTML.SPAN({                                                                                         // 18
    "class": "comments-action"                                                                                         // 19
  }, Blaze.View("lookup:_", function() {                                                                               // 20
    return Spacebars.mustache(view.lookup("_"), "comments_");                                                          // 21
  })), "\n    "), "\n  ");                                                                                             // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_content.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_content");                                                                                  // 2
Template["post_content"] = new Template("Template.post_content", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-content ", Spacebars.mustache(view.lookup("moduleClass")) ];                                      // 7
    }                                                                                                                  // 8
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 9
    return {                                                                                                           // 10
      zone: Spacebars.call("postThumbnail"),                                                                           // 11
      moduleData: Spacebars.call(view.lookup("."))                                                                     // 12
    };                                                                                                                 // 13
  }, function() {                                                                                                      // 14
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 15
  }), "\n    ", HTML.DIV({                                                                                             // 16
    "class": "post-info"                                                                                               // 17
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 18
    return {                                                                                                           // 19
      zone: Spacebars.call("postHeading"),                                                                             // 20
      zoneClass: Spacebars.call("post-heading"),                                                                       // 21
      moduleData: Spacebars.call(view.lookup("."))                                                                     // 22
    };                                                                                                                 // 23
  }, function() {                                                                                                      // 24
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 25
  }), "\n      ", Blaze._TemplateWith(function() {                                                                     // 26
    return {                                                                                                           // 27
      zone: Spacebars.call("postMeta"),                                                                                // 28
      zoneClass: Spacebars.call("post-meta"),                                                                          // 29
      moduleClass: Spacebars.call("post-meta-item"),                                                                   // 30
      moduleData: Spacebars.call(view.lookup("."))                                                                     // 31
    };                                                                                                                 // 32
  }, function() {                                                                                                      // 33
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 34
  }), "\n    "), "\n  ");                                                                                              // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_content.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_discuss.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_discuss");                                                                                  // 2
Template["post_discuss"] = new Template("Template.post_discuss", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-discuss ", Spacebars.mustache(view.lookup("moduleClass")) ];                                      // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    "class": "discuss-link go-to-comments action",                                                                     // 10
    href: function() {                                                                                                 // 11
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getPageUrl"));                                        // 12
    },                                                                                                                 // 13
    title: function() {                                                                                                // 14
      return Spacebars.mustache(view.lookup("_"), "discuss");                                                          // 15
    }                                                                                                                  // 16
  }, "\n      ", Blaze.View("lookup:icon", function() {                                                                // 17
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "comment"));                                      // 18
  }), "\n      ", HTML.SPAN({                                                                                          // 19
    "class": "action-count"                                                                                            // 20
  }, Blaze.View("lookup:commentCount", function() {                                                                    // 21
    return Spacebars.mustache(view.lookup("commentCount"));                                                            // 22
  })), "\n      ", HTML.SPAN({                                                                                         // 23
    "class": "sr-only"                                                                                                 // 24
  }, " ", Blaze.View("lookup:_", function() {                                                                          // 25
    return Spacebars.mustache(view.lookup("_"), "comments");                                                           // 26
  })), "\n    "), "\n  ");                                                                                             // 27
}));                                                                                                                   // 28
                                                                                                                       // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_domain.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_domain");                                                                                   // 2
Template["post_domain"] = new Template("Template.post_domain", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("url"));                                                                         // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.SPAN({                                                                                     // 8
      "class": function() {                                                                                            // 9
        return [ "post-domain ", Spacebars.mustache(view.lookup("moduleClass")) ];                                     // 10
      }                                                                                                                // 11
    }, Blaze.View("lookup:domain", function() {                                                                        // 12
      return Spacebars.mustache(view.lookup("domain"));                                                                // 13
    })), "\n  " ];                                                                                                     // 14
  });                                                                                                                  // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_domain.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_domain.helpers({                                                                                         // 1
  domain: function () {                                                                                                // 2
    var a = document.createElement('a');                                                                               // 3
    a.href = this.url;                                                                                                 // 4
    return a.hostname;                                                                                                 // 5
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_info.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_info");                                                                                     // 2
Template["post_info"] = new Template("Template.post_info", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return Spacebars.mustache(view.lookup("moduleClass"));                                                           // 7
    },                                                                                                                 // 8
    "aria-live": "off"                                                                                                 // 9
  }, "\n    ", HTML.SPAN({                                                                                             // 10
    "class": "points"                                                                                                  // 11
  }, Blaze.View("lookup:baseScore", function() {                                                                       // 12
    return Spacebars.mustache(view.lookup("baseScore"));                                                               // 13
  })), "\n    ", HTML.SPAN({                                                                                           // 14
    "class": "unit"                                                                                                    // 15
  }, Blaze.View("lookup:pointsUnitDisplayText", function() {                                                           // 16
    return Spacebars.mustache(view.lookup("pointsUnitDisplayText"));                                                   // 17
  })), "\n    ", Blaze.If(function() {                                                                                 // 18
    return Spacebars.call(view.lookup("postedAt"));                                                                    // 19
  }, function() {                                                                                                      // 20
    return HTML.SPAN({                                                                                                 // 21
      "class": "post-time"                                                                                             // 22
    }, Blaze.View("lookup:timeAgo", function() {                                                                       // 23
      return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("postedAt"));                                      // 24
    }));                                                                                                               // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_info.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_info.helpers({                                                                                           // 1
  pointsUnitDisplayText: function () {                                                                                 // 2
    return this.upvotes === 1 ? i18n.t('point') : i18n.t('points');                                                    // 3
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_rank.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_rank");                                                                                     // 2
Template["post_rank"] = new Template("Template.post_rank", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-rank ", Spacebars.mustache(view.lookup("moduleClass")) ];                                         // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.DIV({                                                                                              // 9
    "class": "post-rank-inner",                                                                                        // 10
    "aria-live": "off"                                                                                                 // 11
  }, "\n      ", HTML.SPAN(Blaze.View("lookup:oneBasedRank", function() {                                              // 12
    return Spacebars.mustache(view.lookup("oneBasedRank"));                                                            // 13
  })), "\n    "), "\n  ");                                                                                             // 14
}));                                                                                                                   // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_rank.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_rank.helpers({                                                                                           // 1
  oneBasedRank: function () {                                                                                          // 2
    if (typeof this.rank !== 'undefined') {                                                                            // 3
      return this.rank + 1;                                                                                            // 4
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_title.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_title");                                                                                    // 2
Template["post_title"] = new Template("Template.post_title", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.H3({                                                                                                     // 5
    "class": function() {                                                                                              // 6
      return [ "post-title ", Spacebars.mustache(view.lookup("moduleClass")) ];                                        // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.A({                                                                                                // 9
    href: function() {                                                                                                 // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getLink"));                                           // 11
    },                                                                                                                 // 12
    "class": "post-title",                                                                                             // 13
    target: function() {                                                                                               // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "getLinkTarget"));                                     // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:title", function() {                                                                           // 17
    return Spacebars.mustache(view.lookup("title"));                                                                   // 18
  })), "\n  ");                                                                                                        // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/template.post_vote.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_vote");                                                                                     // 2
Template["post_vote"] = new Template("Template.post_vote", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "post-vote ", Spacebars.mustache(view.lookup("moduleClass")) ];                                         // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.DIV({                                                                                              // 9
    "class": function() {                                                                                              // 10
      return [ "vote-actions ", Spacebars.mustache(view.lookup("actionsClass")) ];                                     // 11
    }                                                                                                                  // 12
  }, "\n      ", HTML.A({                                                                                              // 13
    "class": "vote-action upvote-link",                                                                                // 14
    href: "#",                                                                                                         // 15
    title: function() {                                                                                                // 16
      return Spacebars.mustache(view.lookup("_"), "upvote_");                                                          // 17
    }                                                                                                                  // 18
  }, "\n        ", Blaze.View("lookup:icon", function() {                                                              // 19
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "upvote"));                                       // 20
  }), "\n        ", HTML.SPAN({                                                                                        // 21
    "class": "sr-only"                                                                                                 // 22
  }, Blaze.View("lookup:_", function() {                                                                               // 23
    return Spacebars.mustache(view.lookup("_"), "upvote_");                                                            // 24
  })), "\n      "), "\n      ", Blaze.If(function() {                                                                  // 25
    return Spacebars.call(view.lookup("enableDownvotes"));                                                             // 26
  }, function() {                                                                                                      // 27
    return [ "\n        ", HTML.A({                                                                                    // 28
      "class": "vote-action downvote-link",                                                                            // 29
      href: "#",                                                                                                       // 30
      title: function() {                                                                                              // 31
        return Spacebars.mustache(view.lookup("_"), "downvote_");                                                      // 32
      }                                                                                                                // 33
    }, "\n          ", Blaze.View("lookup:icon", function() {                                                          // 34
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "downvote"));                                   // 35
    }), "\n          ", HTML.SPAN({                                                                                    // 36
      "class": "sr-only"                                                                                               // 37
    }, Blaze.View("lookup:_", function() {                                                                             // 38
      return Spacebars.mustache(view.lookup("_"), "downvote_");                                                        // 39
    })), "\n        "), "\n      " ];                                                                                  // 40
  }), "\n    "), "\n  ");                                                                                              // 41
}));                                                                                                                   // 42
                                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/modules/post_vote.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_vote.helpers({                                                                                           // 1
  enableDownvotes: function () {                                                                                       // 2
    return Settings.get("enableDownvotes", false);                                                                     // 3
  },                                                                                                                   //
  actionsClass: function () {                                                                                          // 5
    var user = Meteor.user();                                                                                          // 6
    var actionsClass = "";                                                                                             // 7
    if (!user) return false;                                                                                           // 8
    if (user.hasUpvoted(this)) {                                                                                       // 9
      actionsClass += " voted upvoted";                                                                                // 10
    }                                                                                                                  //
    if (user.hasDownvoted(this)) {                                                                                     // 12
      actionsClass += " voted downvoted";                                                                              // 13
    }                                                                                                                  //
    if (Settings.get("enableDownvotes", false)) {                                                                      // 15
      actionsClass += " downvotes-enabled";                                                                            // 16
    }                                                                                                                  //
    return actionsClass;                                                                                               // 18
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.post_vote.events({                                                                                            // 22
  'click .upvote-link': function (e) {                                                                                 // 23
    var post = this;                                                                                                   // 24
    var user = Meteor.user();                                                                                          // 25
    e.preventDefault();                                                                                                // 26
    if (!user) {                                                                                                       // 27
      FlowRouter.go('signIn');                                                                                         // 28
      Messages.flash(i18n.t("please_log_in_first"), "info");                                                           // 29
    } else if (user.hasUpvoted(post)) {                                                                                //
      Meteor.call('cancelUpvotePost', post._id, function () {                                                          // 31
        Events.track("post upvote cancelled", { '_id': post._id });                                                    // 32
      });                                                                                                              //
    } else {                                                                                                           //
      Meteor.call('upvotePost', post._id, function () {                                                                // 35
        Events.track("post upvoted", { '_id': post._id });                                                             // 36
      });                                                                                                              //
    }                                                                                                                  //
  },                                                                                                                   //
  'click .downvote-link': function (e) {                                                                               // 40
    var post = this;                                                                                                   // 41
    var user = Meteor.user();                                                                                          // 42
    e.preventDefault();                                                                                                // 43
    if (!user) {                                                                                                       // 44
      FlowRouter.go('atSignIn');                                                                                       // 45
      Messages.flash(i18n.t("please_log_in_first"), "info");                                                           // 46
    }                                                                                                                  //
    if (user.hasDownvoted(post)) {                                                                                     // 48
      Meteor.call('cancelDownvotePost', post._id, function () {                                                        // 49
        Events.track("post downvote cancelled", { '_id': post._id });                                                  // 50
      });                                                                                                              //
    } else {                                                                                                           //
      Meteor.call('downvotePost', post._id, function () {                                                              // 53
        Events.track("post downvoted", { '_id': post._id });                                                           // 54
      });                                                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.post_body.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_body");                                                                                     // 2
Template["post_body"] = new Template("Template.post_body", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "post-body markdown",                                                                                     // 6
    "aria-live": "polite"                                                                                              // 7
  }, Blaze.View("lookup:htmlBody", function() {                                                                        // 8
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));                                             // 9
  }));                                                                                                                 // 10
}));                                                                                                                   // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.post_edit.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_edit");                                                                                     // 2
Template["post_edit"] = new Template("Template.post_edit", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("ready"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      "class": "form-page post-edit"                                                                                   // 9
    }, "\n      ", Blaze._TemplateWith(function() {                                                                    // 10
      return {                                                                                                         // 11
        check: Spacebars.call("edit"),                                                                                 // 12
        doc: Spacebars.call(view.lookup("post")),                                                                      // 13
        message: Spacebars.call("sorry_you_cannot_edit_this_post")                                                     // 14
      };                                                                                                               // 15
    }, function() {                                                                                                    // 16
      return Spacebars.include(view.lookupTemplate("checker"), function() {                                            // 17
        return [ "\n        ", HTML.DIV({                                                                              // 18
          "class": "grid grid-module"                                                                                  // 19
        }, "\n          ", Blaze._TemplateWith(function() {                                                            // 20
          return {                                                                                                     // 21
            collection: Spacebars.call("Posts"),                                                                       // 22
            doc: Spacebars.call(view.lookup("post")),                                                                  // 23
            id: Spacebars.call("editPostForm"),                                                                        // 24
            template: Spacebars.call("bootstrap3-horizontal"),                                                         // 25
            "label-class": Spacebars.call("control-label"),                                                            // 26
            "input-col-class": Spacebars.call("controls"),                                                             // 27
            type: Spacebars.call("method-update"),                                                                     // 28
            meteormethod: Spacebars.call("editPost"),                                                                  // 29
            fields: Spacebars.call(view.lookup("postFields"))                                                          // 30
          };                                                                                                           // 31
        }, function() {                                                                                                // 32
          return Spacebars.include(view.lookupTemplate("quickForm"));                                                  // 33
        }), "\n        "), "\n      " ];                                                                               // 34
      });                                                                                                              // 35
    }), "\n    "), "\n  " ];                                                                                           // 36
  }, function() {                                                                                                      // 37
    return [ "\n    ", Spacebars.include(view.lookupTemplate("loading")), "\n  " ];                                    // 38
  });                                                                                                                  // 39
}));                                                                                                                   // 40
                                                                                                                       // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/post_edit.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_edit.onCreated(function () {                                                                             // 1
                                                                                                                       //
  var template = this;                                                                                                 // 3
                                                                                                                       //
  // initialize the reactive variables                                                                                 //
  template.ready = new ReactiveVar(false);                                                                             // 6
                                                                                                                       //
  var postSubscription = Telescope.subsManager.subscribe('singlePost', FlowRouter.getParam("_id"));                    // 8
                                                                                                                       //
  // Autorun 3: when subscription is ready, update the data helper's terms                                             //
  template.autorun(function () {                                                                                       // 11
                                                                                                                       //
    var subscriptionsReady = postSubscription.ready(); // ⚡ reactive ⚡                                                 // 13
                                                                                                                       //
    // if subscriptions are ready, set terms to subscriptionsTerms                                                     //
    if (subscriptionsReady) {                                                                                          // 16
      template.ready.set(true);                                                                                        // 17
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Template.post_edit.helpers({                                                                                           // 23
  ready: function () {                                                                                                 // 24
    return Template.instance().ready.get();                                                                            // 25
  },                                                                                                                   //
  post: function () {                                                                                                  // 27
    return Posts.findOne(FlowRouter.getParam("_id"));                                                                  // 28
  },                                                                                                                   //
  postFields: function () {                                                                                            // 30
    return Posts.simpleSchema().getEditableFields(Meteor.user());                                                      // 31
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
AutoForm.hooks({                                                                                                       // 35
  editPostForm: {                                                                                                      // 36
                                                                                                                       //
    before: {                                                                                                          // 38
      "method-update": function () {                                                                                   // 39
                                                                                                                       //
        var post = this.currentDoc;                                                                                    // 41
        var modifier = this.updateDoc;                                                                                 // 42
                                                                                                                       //
        // ------------------------------ Checks ------------------------------ //                                     //
                                                                                                                       //
        if (!Meteor.user()) {                                                                                          // 46
          Messages.flash(i18n.t('you_must_be_logged_in'), "");                                                         // 47
          return false;                                                                                                // 48
        }                                                                                                              //
                                                                                                                       //
        // ------------------------------ Callbacks ------------------------------ //                                  //
                                                                                                                       //
        modifier = Telescope.callbacks.run("postEditClient", modifier, post);                                          // 53
        return modifier;                                                                                               // 54
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    onSuccess: function (formType, post) {                                                                             // 58
      Events.track("edit post", { 'postId': post._id });                                                               // 59
      FlowRouter.go('postPage', post);                                                                                 // 60
    },                                                                                                                 //
                                                                                                                       //
    onError: function (formType, error) {                                                                              // 63
      console.log(error);                                                                                              // 64
      Messages.flash(error.reason.split('|')[0], "error"); // workaround because error.details returns undefined       // 65
      Messages.clearSeen();                                                                                            // 66
    }                                                                                                                  //
                                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.post_item.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_item");                                                                                     // 2
Template["post_item"] = new Template("Template.post_item", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      zone: Spacebars.call("postComponents"),                                                                          // 7
      zoneClass: Spacebars.call(view.lookup("postClass")),                                                             // 8
      moduleClass: Spacebars.call("post-module"),                                                                      // 9
      wrapperId: Spacebars.call(view.lookup("_id")),                                                                   // 10
      moduleData: Spacebars.call(view.lookup("post"))                                                                  // 11
    };                                                                                                                 // 12
  }, function() {                                                                                                      // 13
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 14
  });                                                                                                                  // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/post_item.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_item.helpers({                                                                                           // 1
  postClass: function () {                                                                                             // 2
    var post = this;                                                                                                   // 3
    var postClass = "post ";                                                                                           // 4
                                                                                                                       //
    postClass += "author-" + Telescope.utils.slugify(post.author) + " ";                                               // 6
                                                                                                                       //
    if (this.sticky) {                                                                                                 // 8
      postClass += "sticky ";                                                                                          // 9
    }                                                                                                                  //
    postClass = Telescope.callbacks.run("postClass", postClass, post);                                                 // 11
    return postClass;                                                                                                  // 12
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.post_page.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_page");                                                                                     // 2
Template["post_page"] = new Template("Template.post_page", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("ready"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("post"));                                                                      // 9
    }, function() {                                                                                                    // 10
      return [ "\n      ", Spacebars.With(function() {                                                                 // 11
        return Spacebars.call(view.lookup("post"));                                                                    // 12
      }, function() {                                                                                                  // 13
        return [ "\n        ", Blaze.If(function() {                                                                   // 14
          return Spacebars.call(view.lookup("canView"));                                                               // 15
        }, function() {                                                                                                // 16
          return [ "\n          ", Blaze.If(function() {                                                               // 17
            return Spacebars.call(view.lookup("isPending"));                                                           // 18
          }, function() {                                                                                              // 19
            return [ "\n            ", HTML.DIV({                                                                      // 20
              "class": "grid"                                                                                          // 21
            }, "\n              ", HTML.DIV({                                                                          // 22
              "class": "error pending-message module"                                                                  // 23
            }, "\n                ", Blaze.View("lookup:_", function() {                                               // 24
              return Spacebars.mustache(view.lookup("_"), "thanks_your_post_is_awaiting_approval");                    // 25
            }), "\n              "), "\n            "), "\n          " ];                                              // 26
          }), "\n          ", HTML.DIV({                                                                               // 27
            "class": "single-post grid"                                                                                // 28
          }, "\n            ", HTML.DIV({                                                                              // 29
            "class": "posts posts-list"                                                                                // 30
          }, "\n              ", Blaze._TemplateWith(function() {                                                      // 31
            return {                                                                                                   // 32
              post: Spacebars.call(view.lookup("."))                                                                   // 33
            };                                                                                                         // 34
          }, function() {                                                                                              // 35
            return Spacebars.include(view.lookupTemplate("post_item"));                                                // 36
          }), "\n            "), "\n            ", Blaze.If(function() {                                               // 37
            return Spacebars.call(view.lookup("body"));                                                                // 38
          }, function() {                                                                                              // 39
            return [ "\n              ", Spacebars.include(view.lookupTemplate("post_body")), "\n            " ];      // 40
          }), "\n            ", Spacebars.include(view.lookupTemplate("comment_submit")), "\n            ", Spacebars.include(view.lookupTemplate("comment_list")), "\n          "), "\n        " ];
        }, function() {                                                                                                // 42
          return [ "\n          ", Spacebars.include(view.lookupTemplate("no_rights")), "\n        " ];                // 43
        }), "\n      " ];                                                                                              // 44
      }), "\n    " ];                                                                                                  // 45
    }, function() {                                                                                                    // 46
      return [ "\n      ", Spacebars.include(view.lookupTemplate("not_found")), "\n    " ];                            // 47
    }), "\n  " ];                                                                                                      // 48
  }, function() {                                                                                                      // 49
    return [ "\n    ", HTML.DIV({                                                                                      // 50
      "class": "posts-loading"                                                                                         // 51
    }, Spacebars.include(view.lookupTemplate("loading"))), "\n  " ];                                                   // 52
  });                                                                                                                  // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/post_page.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var doSEOStuff = function (post) {                                                                                     // 1
                                                                                                                       //
  var link = { rel: "canonical", href: post.getPageUrl(true) };                                                        // 3
  DocHead.addLink(link);                                                                                               // 4
                                                                                                                       //
  // Set SEO properties                                                                                                //
                                                                                                                       //
  var seoProperties = { meta: {} };                                                                                    // 8
                                                                                                                       //
  // Set site name                                                                                                     //
  DocHead.addMeta({ property: "og:site_name", content: Settings.get("title") });                                       // 11
                                                                                                                       //
  // Set title                                                                                                         //
  Telescope.SEO.setTitle(post.title);                                                                                  // 14
                                                                                                                       //
  // Set description                                                                                                   //
  if (!!post.body) {                                                                                                   // 17
    var description = Telescope.utils.trimWords(post.body, 100);                                                       // 18
    Telescope.SEO.setDescription(description);                                                                         // 19
  }                                                                                                                    //
                                                                                                                       //
  // Set image                                                                                                         //
  if (!!post.thumbnailUrl) {                                                                                           // 23
    var image = Telescope.utils.addHttp(post.thumbnailUrl);                                                            // 24
    DocHead.addMeta({ property: "twitter:card", content: "summary_large_image" });                                     // 25
    Telescope.SEO.setImage(image);                                                                                     // 26
  }                                                                                                                    //
                                                                                                                       //
  // Set Twitter username                                                                                              //
  if (!!Settings.get("twitterAccount")) {                                                                              // 30
    DocHead.addMeta({ property: "twitter:site", content: Settings.get("twitterAccount") });                            // 31
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Template.post_page.onCreated(function () {                                                                             // 36
                                                                                                                       //
  var template = this;                                                                                                 // 38
  var postId = FlowRouter.getParam("_id");                                                                             // 39
                                                                                                                       //
  // initialize the reactive variables                                                                                 //
  template.ready = new ReactiveVar(false);                                                                             // 42
                                                                                                                       //
  var postSubscription = Telescope.subsManager.subscribe('singlePost', postId);                                        // 44
  var postUsersSubscription = Telescope.subsManager.subscribe('postUsers', postId);                                    // 45
  var commentSubscription = Telescope.subsManager.subscribe('commentsList', { view: 'postComments', postId: postId });
                                                                                                                       //
  // Autorun 3: when subscription is ready, update the data helper's terms                                             //
  template.autorun(function () {                                                                                       // 49
                                                                                                                       //
    var subscriptionsReady = postSubscription.ready(); // ⚡ reactive ⚡                                                 // 51
                                                                                                                       //
    // if subscriptions are ready, set terms to subscriptionsTerms and update SEO stuff                                //
    if (subscriptionsReady) {                                                                                          // 54
      template.ready.set(true);                                                                                        // 55
      var post = Posts.findOne(FlowRouter.getParam("_id"));                                                            // 56
      if (post) {                                                                                                      // 57
        doSEOStuff(post);                                                                                              // 58
      } else {                                                                                                         //
        DocHead.addMeta({                                                                                              // 60
          name: "name",                                                                                                // 61
          property: "prerender-status-code",                                                                           // 62
          content: "404"                                                                                               // 63
        });                                                                                                            //
        DocHead.addMeta({                                                                                              // 65
          name: "name",                                                                                                // 66
          property: "robots",                                                                                          // 67
          content: "noindex, nofollow"                                                                                 // 68
        });                                                                                                            //
      }                                                                                                                //
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Template.post_page.helpers({                                                                                           // 76
  ready: function () {                                                                                                 // 77
    return Template.instance().ready.get();                                                                            // 78
  },                                                                                                                   //
  post: function () {                                                                                                  // 80
    return Posts.findOne(FlowRouter.getParam("_id"));                                                                  // 81
  },                                                                                                                   //
  canView: function () {                                                                                               // 83
    var post = this;                                                                                                   // 84
    var user = Meteor.user();                                                                                          // 85
    if (post.status === Posts.config.STATUS_PENDING && !Users.can.viewPendingPost(user, post)) {                       // 86
      return false;                                                                                                    // 87
    } else if (post.status === Posts.config.STATUS_REJECTED && !Users.can.viewRejectedPost(user, post)) {              //
      return false;                                                                                                    // 89
    }                                                                                                                  //
    return true;                                                                                                       // 91
  },                                                                                                                   //
  isPending: function () {                                                                                             // 93
    return this.status === Posts.config.STATUS_PENDING;                                                                // 94
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.post_page.rendered = function () {                                                                            // 98
  $('body').scrollTop(0);                                                                                              // 99
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.post_submit.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("post_submit");                                                                                   // 2
Template["post_submit"] = new Template("Template.post_submit", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "form-page post-submit"                                                                                   // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": "grid grid-module"                                                                                        // 8
  }, "\n      ", Blaze._TemplateWith(function() {                                                                      // 9
    return {                                                                                                           // 10
      collection: Spacebars.call("Posts"),                                                                             // 11
      id: Spacebars.call("submitPostForm"),                                                                            // 12
      template: Spacebars.call("bootstrap3-horizontal"),                                                               // 13
      "input-col-class": Spacebars.call("controls"),                                                                   // 14
      type: Spacebars.call("method"),                                                                                  // 15
      meteormethod: Spacebars.call("submitPost"),                                                                      // 16
      fields: Spacebars.call(view.lookup("postFields"))                                                                // 17
    };                                                                                                                 // 18
  }, function() {                                                                                                      // 19
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                        // 20
  }), "\n    "), "\n  ");                                                                                              // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/post_submit.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.post_submit.onCreated(function () {                                                                           // 1
  Telescope.subsManager.subscribe('allUsersAdmin');                                                                    // 2
});                                                                                                                    //
                                                                                                                       //
Template.post_submit.helpers({                                                                                         // 5
  postFields: function () {                                                                                            // 6
    return Posts.simpleSchema().getEditableFields(Meteor.user());                                                      // 7
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
AutoForm.hooks({                                                                                                       // 11
  submitPostForm: {                                                                                                    // 12
                                                                                                                       //
    before: {                                                                                                          // 14
      method: function (doc) {                                                                                         // 15
                                                                                                                       //
        var post = doc;                                                                                                // 17
                                                                                                                       //
        this.template.$('button[type=submit]').addClass('loading');                                                    // 19
        this.template.$('input, textarea').not(":disabled").addClass("disabled").prop("disabled", true);               // 20
                                                                                                                       //
        // ------------------------------ Checks ------------------------------ //                                     //
                                                                                                                       //
        if (!Meteor.user()) {                                                                                          // 24
          Messages.flash(i18n.t('you_must_be_logged_in'), 'error');                                                    // 25
          return false;                                                                                                // 26
        }                                                                                                              //
                                                                                                                       //
        // ------------------------------ Callbacks ------------------------------ //                                  //
                                                                                                                       //
        // run all post submit client callbacks on properties object successively                                      //
        post = Telescope.callbacks.run("postSubmitClient", post);                                                      // 32
                                                                                                                       //
        return post;                                                                                                   // 34
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    onSuccess: function (operation, post) {                                                                            // 38
      Events.track("new post", { 'postId': post._id });                                                                // 39
      var template = this.template;                                                                                    // 40
      Telescope.subsManager.subscribe('singlePost', post._id, function () {                                            // 41
        template.$('button[type=submit]').removeClass('loading');                                                      // 42
        FlowRouter.go('postPage', post);                                                                               // 43
      });                                                                                                              //
    },                                                                                                                 //
                                                                                                                       //
    onError: function (operation, error) {                                                                             // 47
      this.template.$('button[type=submit]').removeClass('loading');                                                   // 48
      this.template.$('.disabled').removeClass("disabled").prop("disabled", false);                                    // 49
                                                                                                                       //
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined      // 51
      Messages.clearSeen();                                                                                            // 52
      // $(e.target).removeClass('disabled');                                                                          //
      if (error.error === "603") {                                                                                     // 54
        var dupePostId = error.reason.split('|')[1];                                                                   // 55
        FlowRouter.go('postPage', { slug: '_', _id: dupePostId });                                                     // 56
      }                                                                                                                //
    }                                                                                                                  //
                                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.views_menu.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("views_menu");                                                                                    // 2
Template["views_menu"] = new Template("Template.views_menu", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": function() {                                                                                              // 6
      return [ "views-menu-wrapper ", Spacebars.mustache(view.lookup("moduleClass")) ];                                // 7
    }                                                                                                                  // 8
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 9
    return {                                                                                                           // 10
      menuName: Spacebars.call("view"),                                                                                // 11
      menuLabel: Spacebars.call(view.lookup("menuLabel")),                                                             // 12
      menuItems: Spacebars.call(view.lookup("menuItems")),                                                             // 13
      menuType: Spacebars.call("list")                                                                                 // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(view.lookupTemplate("menuComponent"));                                                    // 17
  }), "\n  ");                                                                                                         // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/views_menu.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var getMenuItems = function () {                                                                                       // 1
  var defaultItems = Telescope.menuItems.get("viewsMenu");                                                             // 2
                                                                                                                       //
  // reject an item if the item is admin only and the current user is not an admin                                     //
  // or if views have been configured in the settings and the item is not part of them                                 //
  var viewableItems = _.reject(defaultItems, function (item) {                                                         // 6
    return item.adminOnly && !Users.is.admin(Meteor.user()) || !!Settings.get('postViews') && !_.contains(Settings.get('postViews'), item.name);
  });                                                                                                                  //
                                                                                                                       //
  viewableItems = _.map(viewableItems, function (item) {                                                               // 10
    item.itemClass = "view-" + item.name;                                                                              // 11
    return item;                                                                                                       // 12
  });                                                                                                                  //
                                                                                                                       //
  return viewableItems;                                                                                                // 15
};                                                                                                                     //
                                                                                                                       //
Template.views_menu.helpers({                                                                                          // 18
  menuLabel: function () {                                                                                             // 19
    return i18n.t("view");                                                                                             // 20
  },                                                                                                                   //
  menuItems: function () {                                                                                             // 22
    return getMenuItems();                                                                                             // 23
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/template.main_posts_list.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("main_posts_list");                                                                               // 2
Template["main_posts_list"] = new Template("Template.main_posts_list", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "main-posts-list"                                                                                         // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 7
    return {                                                                                                           // 8
      zone: Spacebars.call("postsListTop")                                                                             // 9
    };                                                                                                                 // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 12
  }), "\n    ", Blaze.If(function() {                                                                                  // 13
    return Spacebars.call(view.lookup("customTemplate"));                                                              // 14
  }, function() {                                                                                                      // 15
    return [ "\n      ", Blaze._TemplateWith(function() {                                                              // 16
      return {                                                                                                         // 17
        template: Spacebars.call(view.lookup("customTemplate")),                                                       // 18
        data: Spacebars.call(view.lookup("arguments"))                                                                 // 19
      };                                                                                                               // 20
    }, function() {                                                                                                    // 21
      return Spacebars.include(function() {                                                                            // 22
        return Spacebars.call(Template.__dynamic);                                                                     // 23
      });                                                                                                              // 24
    }), "\n    " ];                                                                                                    // 25
  }, function() {                                                                                                      // 26
    return [ "\n      ", Blaze._TemplateWith(function() {                                                              // 27
      return Spacebars.call(view.lookup("arguments"));                                                                 // 28
    }, function() {                                                                                                    // 29
      return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                          // 30
    }), "\n    " ];                                                                                                    // 31
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 32
    return {                                                                                                           // 33
      zone: Spacebars.call("postsListBottom")                                                                          // 34
    };                                                                                                                 // 35
  }, function() {                                                                                                      // 36
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 37
  }), "\n  ");                                                                                                         // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/main_posts_list.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.main_posts_list.helpers({                                                                                     // 1
  customTemplate: function () {                                                                                        // 2
    var currentView = FlowRouter.getQueryParam("view") || Settings.get("defaultView", "top");                          // 3
    var currentMenuItem = _.findWhere(Telescope.menuItems.viewsMenu, { name: currentView });                           // 4
    return currentMenuItem && currentMenuItem.viewTemplate;                                                            // 5
  },                                                                                                                   //
  arguments: function () {                                                                                             // 7
    FlowRouter.watchPathChange();                                                                                      // 8
    var terms = _.clone(FlowRouter.current().queryParams);                                                             // 9
    terms.enableCache = true;                                                                                          // 10
                                                                                                                       //
    // if user is logged in, add their id to terms                                                                     //
    if (Meteor.userId()) {                                                                                             // 13
      terms.userId = Meteor.userId();                                                                                  // 14
    }                                                                                                                  //
                                                                                                                       //
    if (!terms.view) {                                                                                                 // 17
      terms.view = Settings.get('defaultView', 'top');                                                                 // 18
    }                                                                                                                  //
                                                                                                                       //
    return {                                                                                                           // 21
      terms: terms,                                                                                                    // 22
      options: {                                                                                                       // 23
        loadMoreBehavior: Settings.get("loadMoreBehavior", "button")                                                   // 24
      }                                                                                                                //
    };                                                                                                                 //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/template.posts_list.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("posts_list");                                                                                    // 2
Template["posts_list"] = new Template("Template.posts_list", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "posts-wrapper grid"                                                                                      // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": function() {                                                                                              // 8
      return [ "posts list ", Spacebars.mustache(view.lookup("postsLayout")) ];                                        // 9
    },                                                                                                                 // 10
    "aria-live": "polite"                                                                                              // 11
  }, "\n      ", Blaze.Each(function() {                                                                               // 12
    return Spacebars.call(view.lookup("postsCursor"));                                                                 // 13
  }, function() {                                                                                                      // 14
    return [ "\n        ", Spacebars.include(view.lookupTemplate("before_post_item")), "\n        ", Blaze._TemplateWith(function() {
      return {                                                                                                         // 16
        post: Spacebars.call(view.lookup("."))                                                                         // 17
      };                                                                                                               // 18
    }, function() {                                                                                                    // 19
      return Spacebars.include(view.lookupTemplate("post_item"));                                                      // 20
    }), "\n        ", Spacebars.include(view.lookupTemplate("after_post_item")), "\n      " ];                         // 21
  }), "\n    "), "\n    ", Spacebars.include(view.lookupTemplate("postsLoadMore")), "\n  ");                           // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
Template.__checkName("postsListIncoming");                                                                             // 25
Template["postsListIncoming"] = new Template("Template.postsListIncoming", (function() {                               // 26
  var view = this;                                                                                                     // 27
  return Blaze.If(function() {                                                                                         // 28
    return Spacebars.call(view.lookup("count"));                                                                       // 29
  }, function() {                                                                                                      // 30
    return [ "\n    ", HTML.A({                                                                                        // 31
      "class": "more-button show-new grid-module",                                                                     // 32
      href: ""                                                                                                         // 33
    }, "\n      ", HTML.SPAN("\n        ", Blaze.View("lookup:_", function() {                                         // 34
      return Spacebars.mustache(view.lookup("_"), "view");                                                             // 35
    }), " ", Blaze.View("lookup:count", function() {                                                                   // 36
      return Spacebars.mustache(view.lookup("count"));                                                                 // 37
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 38
      return Spacebars.mustache(view.lookup("_"), "new");                                                              // 39
    }), " ", Blaze.View("lookup:pluralize", function() {                                                               // 40
      return Spacebars.mustache(view.lookup("pluralize"), view.lookup("count"), "post");                               // 41
    }), "\n      "), "\n    "), "\n  " ];                                                                              // 42
  });                                                                                                                  // 43
}));                                                                                                                   // 44
                                                                                                                       // 45
Template.__checkName("postsLoadMore");                                                                                 // 46
Template["postsLoadMore"] = new Template("Template.postsLoadMore", (function() {                                       // 47
  var view = this;                                                                                                     // 48
  return HTML.DIV({                                                                                                    // 49
    "class": "posts-load-more"                                                                                         // 50
  }, "\n    ", Blaze.If(function() {                                                                                   // 51
    return Spacebars.call(view.lookup("postsReady"));                                                                  // 52
  }, function() {                                                                                                      // 53
    return [ "\n      ", Blaze.If(function() {                                                                         // 54
      return Spacebars.call(view.lookup("hasPosts"));                                                                  // 55
    }, function() {                                                                                                    // 56
      return [ "\n        ", Blaze.If(function() {                                                                     // 57
        return Spacebars.call(view.lookup("showLoadMoreButton"));                                                      // 58
      }, function() {                                                                                                  // 59
        return [ "\n          ", HTML.A({                                                                              // 60
          "class": "more-button",                                                                                      // 61
          href: "#"                                                                                                    // 62
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 63
          return Spacebars.mustache(view.lookup("_"), "load_more");                                                    // 64
        }))), "\n        " ];                                                                                          // 65
      }), "\n        ", Blaze.If(function() {                                                                          // 66
        return Spacebars.call(view.lookup("showInfiniteScroll"));                                                      // 67
      }, function() {                                                                                                  // 68
        return [ "\n          ", HTML.DIV({                                                                            // 69
          "class": "posts-loading"                                                                                     // 70
        }, Spacebars.include(view.lookupTemplate("loading"))), "\n        " ];                                         // 71
      }), "\n      " ];                                                                                                // 72
    }, function() {                                                                                                    // 73
      return [ "\n        ", HTML.DIV({                                                                                // 74
        "class": "no-posts"                                                                                            // 75
      }, Blaze.View("lookup:_", function() {                                                                           // 76
        return Spacebars.mustache(view.lookup("_"), "sorry_we_couldnt_find_any_posts");                                // 77
      })), "\n      " ];                                                                                               // 78
    }), "\n    " ];                                                                                                    // 79
  }, function() {                                                                                                      // 80
    return [ "\n      ", HTML.DIV({                                                                                    // 81
      "class": "posts-loading"                                                                                         // 82
    }, Spacebars.include(view.lookupTemplate("loading"))), "\n    " ];                                                 // 83
  }), "\n  ");                                                                                                         // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/posts_list.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// ----------------------------------- Post List -----------------------------------//                                 //
                                                                                                                       //
Template.posts_list.created = function () {                                                                            // 3
  Session.set('listPopulatedAt', new Date());                                                                          // 4
};                                                                                                                     //
                                                                                                                       //
Template.posts_list.helpers({                                                                                          // 7
  postsLayout: function () {                                                                                           // 8
    return Settings.get('postsLayout', 'posts-list');                                                                  // 9
  },                                                                                                                   //
  description: function () {                                                                                           // 11
    var controller = Iron.controller();                                                                                // 12
    if (typeof controller.getDescription === 'function') return Iron.controller().getDescription();                    // 13
  },                                                                                                                   //
  postsCursor: function () {                                                                                           // 16
    if (this.postsCursor) {                                                                                            // 17
      // not sure why this should ever be undefined, but it can apparently                                             //
      var posts = this.postsCursor.map(function (post, index) {                                                        // 18
        post.rank = index;                                                                                             // 19
        return post;                                                                                                   // 20
      });                                                                                                              //
      return posts;                                                                                                    // 22
    } else {                                                                                                           //
      console.log('postsCursor not defined');                                                                          // 24
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
// ----------------------------------- Incoming -----------------------------------//                                  //
                                                                                                                       //
Template.postsListIncoming.events({                                                                                    // 31
  'click .show-new': function () {                                                                                     // 32
    Session.set('listPopulatedAt', new Date());                                                                        // 33
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
// ----------------------------------- Load More -----------------------------------//                                 //
                                                                                                                       //
Template.postsLoadMore.helpers({                                                                                       // 39
  postsReady: function () {                                                                                            // 40
    return this.postsReady;                                                                                            // 41
  },                                                                                                                   //
  showInfiniteScroll: function () {                                                                                    // 43
    if (this.controllerOptions && this.controllerOptions.loadMoreBehavior === "button") {                              // 44
      return false;                                                                                                    // 45
    } else {                                                                                                           //
      return this.hasMorePosts;                                                                                        // 47
    }                                                                                                                  //
  },                                                                                                                   //
  showLoadMoreButton: function () {                                                                                    // 50
    if (this.controllerOptions && this.controllerOptions.loadMoreBehavior === "scroll") {                              // 51
      return false;                                                                                                    // 52
    } else {                                                                                                           //
      return this.hasMorePosts;                                                                                        // 54
    }                                                                                                                  //
  },                                                                                                                   //
  hasPosts: function () {                                                                                              // 57
    return !!this.postsCursor.count();                                                                                 // 58
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.postsLoadMore.onCreated(function () {                                                                         // 62
                                                                                                                       //
  var context = Template.currentData();                                                                                // 64
                                                                                                                       //
  if (context.controllerOptions && context.controllerOptions.loadMoreBehavior === "scroll") {                          // 66
                                                                                                                       //
    $(window).scroll(function () {                                                                                     // 68
      if ($(window).scrollTop() + $(window).height() === $(document).height()) {                                       // 69
        context.loadMoreHandler(context.controllerInstance);                                                           // 70
      }                                                                                                                //
    });                                                                                                                //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.postsLoadMore.events({                                                                                        // 77
  'click .more-button': function (event) {                                                                             // 78
    event.preventDefault();                                                                                            // 79
    this.loadMoreHandler(this.controllerInstance);                                                                     // 80
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/template.posts_list_compact.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("posts_list_compact");                                                                            // 2
Template["posts_list_compact"] = new Template("Template.posts_list_compact", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD("Post"), "\n        ", HTML.TD(Blaze.View("lookup:fieldLabel", function() {
    return Spacebars.mustache(view.lookup("fieldLabel"));                                                              // 6
  })), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {                                                       // 7
    return Spacebars.call(view.lookup("postsCursor"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(HTML.A({                                                        // 10
      href: function() {                                                                                               // 11
        return Spacebars.mustache(view.lookup("pathFor"), "postPage", Spacebars.kw({                                   // 12
          _id: view.lookup("_id")                                                                                      // 13
        }));                                                                                                           // 14
      }                                                                                                                // 15
    }, Blaze.View("lookup:title", function() {                                                                         // 16
      return Spacebars.mustache(view.lookup("title"));                                                                 // 17
    }))), "\n        ", HTML.TD(Blaze.View("lookup:fieldValue", function() {                                           // 18
      return Spacebars.mustache(view.lookup("fieldValue"));                                                            // 19
    })), "\n      "), "\n    " ];                                                                                      // 20
  }), "\n    ", Blaze.If(function() {                                                                                  // 21
    return Spacebars.call(view.lookup("hasMorePosts"));                                                                // 22
  }, function() {                                                                                                      // 23
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({                                                               // 24
      colspan: "2"                                                                                                     // 25
    }, "\n          ", HTML.A({                                                                                        // 26
      "class": "downvoted-more more-button grid-module",                                                               // 27
      href: "#"                                                                                                        // 28
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 29
      return Spacebars.mustache(view.lookup("_"), "load_more");                                                        // 30
    }))), "\n        "), "\n      "), "\n    " ];                                                                      // 31
  }), "\n  ");                                                                                                         // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/posts_list_compact.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.posts_list_compact.helpers({                                                                                  // 1
  postsCursor: function () {                                                                                           // 2
    if (this.postsCursor) {                                                                                            // 3
      // not sure why this should ever be undefined, but it can apparently                                             //
      var posts = this.postsCursor.map(function (post, index) {                                                        // 4
        post.rank = index;                                                                                             // 5
        return post;                                                                                                   // 6
      });                                                                                                              //
      return posts;                                                                                                    // 8
    } else {                                                                                                           //
      console.log('postsCursor not defined');                                                                          // 10
    }                                                                                                                  //
  },                                                                                                                   //
  fieldLabel: function () {                                                                                            // 13
    return this.controllerOptions.fieldLabel;                                                                          // 14
  },                                                                                                                   //
  fieldValue: function () {                                                                                            // 16
    var controllerOptions = Template.parentData(3).data.controllerOptions;                                             // 17
    return controllerOptions.fieldValue(this);                                                                         // 18
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.posts_list_compact.events({                                                                                   // 22
  'click .more-button': function (event) {                                                                             // 23
    event.preventDefault();                                                                                            // 24
    if (this.controllerInstance) {                                                                                     // 25
      // controller is a template                                                                                      //
      this.loadMoreHandler(this.controllerInstance);                                                                   // 27
    } else {                                                                                                           //
      // controller is router                                                                                          //
      this.loadMoreHandler();                                                                                          // 30
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/template.posts_list_controller.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("posts_list_controller");                                                                         // 2
Template["posts_list_controller"] = new Template("Template.posts_list_controller", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      template: Spacebars.call(view.lookup("template")),                                                               // 7
      data: Spacebars.call(view.lookup("data"))                                                                        // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return Spacebars.include(function() {                                                                              // 11
      return Spacebars.call(Template.__dynamic);                                                                       // 12
    });                                                                                                                // 13
  });                                                                                                                  // 14
}));                                                                                                                   // 15
                                                                                                                       // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/lib/client/templates/posts_list/posts_list_controller.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// see https://www.discovermeteor.com/blog/template-level-subscriptions/                                               //
                                                                                                                       //
/*                                                                                                                     //
                                                                                                                       //
This template acts as the controller that sets and manages the reactive context                                        //
for the embedded postsList template. It receives its parameters from a "caller" template.                              //
                                                                                                                       //
The goal is to resubscribe when either one of the following events happens:                                            //
- The external data context passed to the template from its parent changes                                             //
- The template's own internal rLimit ReactiveVar changes                                                               //
                                                                                                                       //
In both cases, the template should resubscribe to the publication, and then once the subscription is ready             //
update the terms used by the template helper's Posts.find().                                                           //
                                                                                                                       //
*/                                                                                                                     //
                                                                                                                       //
Template.posts_list_controller.onCreated(function () {                                                                 // 17
                                                                                                                       //
  // 1. Initialization (*not* reactive!)                                                                               //
  var template = this;                                                                                                 // 20
  var terms = _.clone(template.data.terms);                                                                            // 21
  template.terms = terms;                                                                                              // 22
                                                                                                                       //
  // initialize the reactive variables                                                                                 //
  template.rTerms = new ReactiveVar(terms);                                                                            // 25
  template.rLimit = new ReactiveVar(Settings.get('postsPerPage', 10));                                                 // 26
  template.rReady = new ReactiveVar(false);                                                                            // 27
                                                                                                                       //
  // if caching is set to true, use Subs Manager. Else use template.subscribe. Default to false                        //
  var enableCache = typeof terms.enableCache === "undefined" ? false : terms.enableCache;                              // 30
  var subscriber = enableCache ? Telescope.subsManager : template;                                                     // 31
                                                                                                                       //
  // enable not subscribing to users on a per-controller basis                                                         //
  var subscribeToUsers = typeof terms.subscribeToUsers === "undefined" ? true : terms.subscribeToUsers;                // 34
                                                                                                                       //
  template.autorun(function () {                                                                                       // 36
                                                                                                                       //
    // set controller as not ready                                                                                     //
    template.rReady.set(false);                                                                                        // 39
                                                                                                                       //
    // depend on terms                                                                                                 //
    var newTerms = _.clone(Template.currentData().terms); // ⚡ reactive ⚡                                              // 42
                                                                                                                       //
    // depend on rLimit                                                                                                //
    var rLimit = template.rLimit.get(); // ⚡ reactive ⚡                                                                // 45
                                                                                                                       //
    // complete terms with rLimit                                                                                      //
    newTerms.limit = rLimit;                                                                                           // 48
                                                                                                                       //
    // subscribe to posts and (optionally) users                                                                       //
    var postsSubscription = subscriber.subscribe('postsList', newTerms);                                               // 51
    if (subscribeToUsers) {                                                                                            // 52
      var usersSubscription = subscriber.subscribe('postsListUsers', newTerms);                                        // 53
    }                                                                                                                  //
                                                                                                                       //
    // check if subscriptions are ready                                                                                //
    var subscriptionsReady;                                                                                            // 57
    if (subscribeToUsers) {                                                                                            // 58
      subscriptionsReady = postsSubscription.ready() && usersSubscription.ready(); // ⚡ reactive ⚡                     // 59
    } else {                                                                                                           //
        subscriptionsReady = postsSubscription.ready(); // ⚡ reactive ⚡                                                // 61
      }                                                                                                                //
                                                                                                                       //
    // console.log('// ------ autorun ------ //');                                                                     //
    // console.log("newTerms: ", newTerms);                                                                            //
    // console.log("rLimit: ", rLimit);                                                                                //
    // console.log("subscriptionsReady: ", subscriptionsReady);                                                        //
                                                                                                                       //
    // if subscriptions are ready, set terms to newTerms                                                               //
    if (subscriptionsReady) {                                                                                          // 70
      template.rTerms.set(newTerms);                                                                                   // 71
      template.rReady.set(true);                                                                                       // 72
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
// runs whenever the template's data context changes to reset rLimit                                                   //
Template.posts_list_controller.onDataChanged(function (data) {                                                         // 80
                                                                                                                       //
  var template = this;                                                                                                 // 82
  var oldTerms = template.terms;                                                                                       // 83
  var newTerms = data.terms;                                                                                           // 84
                                                                                                                       //
  // console.log("// ------ onDataChanged ------ //")                                                                  //
  // console.log("oldTerms: ", _.clone(oldTerms));                                                                     //
  // console.log("newTerms: ", _.clone(newTerms));                                                                     //
  // console.log("isEqual?: ", _.isEqual(newTerms, oldTerms));                                                         //
                                                                                                                       //
  // if terms have changed, we reset rLimit                                                                            //
  if (!_.isEqual(oldTerms, newTerms)) {                                                                                // 92
    template.terms = newTerms;                                                                                         // 93
    template.rLimit.set(Settings.get('postsPerPage', 10));                                                             // 94
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.posts_list_controller.helpers({                                                                               // 98
  template: function () {                                                                                              // 99
    return !!this.template ? this.template : "posts_list";                                                             // 100
  },                                                                                                                   //
  data: function () {                                                                                                  // 102
                                                                                                                       //
    var context = this;                                                                                                // 104
                                                                                                                       //
    var template = Template.instance();                                                                                // 106
                                                                                                                       //
    var terms = template.rTerms.get(); // ⚡ reactive ⚡                                                                 // 108
    var postsReady = template.rReady.get(); // ⚡ reactive ⚡                                                            // 109
                                                                                                                       //
    var parameters = Posts.parameters.get(terms);                                                                      // 111
    var postsCursor = Posts.find(parameters.find, parameters.options);                                                 // 112
                                                                                                                       //
    // if (debug) {                                                                                                    //
    //   console.log("// -------- data -------- //")                                                                   //
    //   console.log("terms: ", terms);                                                                                //
    // }                                                                                                               //
                                                                                                                       //
    var data = {                                                                                                       // 119
                                                                                                                       //
      // posts cursor                                                                                                  //
      postsCursor: postsCursor,                                                                                        // 122
                                                                                                                       //
      // posts subscription readiness, used to show spinner                                                            //
      postsReady: postsReady,                                                                                          // 125
                                                                                                                       //
      // whether to show the load more button or not                                                                   //
      hasMorePosts: postsCursor.count() >= terms.limit,                                                                // 128
                                                                                                                       //
      // what to do when user clicks "load more"                                                                       //
      loadMoreHandler: function (template) {                                                                           // 131
        // increase limit by 5 and update it                                                                           //
        var limit = template.rLimit.get();                                                                             // 133
        limit += Settings.get('postsPerPage', 10);                                                                     // 134
        template.rLimit.set(limit);                                                                                    // 135
      },                                                                                                               //
                                                                                                                       //
      // the current instance                                                                                          //
      controllerInstance: template,                                                                                    // 139
                                                                                                                       //
      controllerOptions: context.options // pass any options on to the template                                        // 141
                                                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    return data;                                                                                                       // 145
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/packages/telescope_postsi18n/ar.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/bg.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/cs.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/da.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/de.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/el.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/en.i18n.js                                                    //
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
translations[namespace] = {"this_link_has_already_been_posted":"This link has already been posted","sorry_you_cannot_submit_more_than":"Sorry, you cannot submit more than ","posts_per_day":" posts per day","please_fill_in_a_title":"Please fill in a title","seconds_before_posting_again":" seconds before posting again","upvoted":"Upvoted","posted_date":"Posted Date","posted_time":"Posted Time","createdAt":"Created At","url":"URL","body":"Body","htmlBody":"HTML Body","viewCount":"View Count","commentCount":"Comment Count","commenters":"Commenters","lastCommentedAt":"Last Commented At","clickCount":"Click Count","baseScore":"Base Score","upvotes":"Upvotes","upvoters":"Upvoters","downvotes":"Downvotes","downvoters":"Downvoters","score":"score","status":"status","sticky":"Sticky","inactive":"inactive","author":"Author","userId":"User","sorry_we_couldnt_find_any_posts":"Sorry, we couldn't find any posts.","your_post_has_been_deleted":"Your post has been deleted.","created":"Created","suggest_title":"Suggest title","short_url":"Short URL","category":"Category","inactive_":"Inactive?","sticky_":"Sticky?","submission_date":"Submission Date","submission_time":"Submission Time","date":"Date","submission":"Submission","note_this_post_is_still_pending_so_it_has_no_submission_timestamp_yet":"Note: this post is still pending so it has no submission timestamp yet.","user":"User","status_":"Status","approved":"Approved","rejected":"Rejected","delete_post":"Delete Post","thanks_your_post_is_awaiting_approval":"Thanks, your post is awaiting approval.","sorry_couldnt_find_a_title":"Sorry, couldn't find a title...","please_fill_in_an_url_first":"Please fill in an URL first!","share":"Share","discuss":"Discuss","upvote_":"Upvote","votes":"votes","basescore":"baseScore","clicks":"clicks","views":"views","comment":"comment","point":"point","points":"points"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_posts/packages/telescope_postsi18n/es.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/et.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/fr.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/hu.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/id.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/it.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/ja.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/kk.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/ko.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/nl.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/pl.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/pt-BR.i18n.js                                                 //
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
// packages/telescope_posts/packages/telescope_postsi18n/ro.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/ru.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/sl.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/sv.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/th.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/tr.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/vi.i18n.js                                                    //
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
// packages/telescope_posts/packages/telescope_postsi18n/zh-CN.i18n.js                                                 //
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
Package['telescope:posts'] = {
  Posts: Posts
};

})();
