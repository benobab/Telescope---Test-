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
var Comments, translations;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/comments.js                                                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/**                                                                                                                 //
 * The global namespace for Comments.                                                                               //
 * @namespace Comments                                                                                              //
 */                                                                                                                 //
Comments = new Mongo.Collection("comments");                                                                        // 5
                                                                                                                    //
/**                                                                                                                 //
 * Comments schema                                                                                                  //
 * @type {SimpleSchema}                                                                                             //
 */                                                                                                                 //
Comments.schema = new SimpleSchema({                                                                                // 11
  /**                                                                                                               //
    ID                                                                                                              //
  */                                                                                                                //
  _id: {                                                                                                            // 15
    type: String,                                                                                                   // 16
    optional: true                                                                                                  // 17
  },                                                                                                                //
  /**                                                                                                               //
    The `_id` of the parent comment, if there is one                                                                //
  */                                                                                                                //
  parentCommentId: {                                                                                                // 22
    type: String,                                                                                                   // 23
    // regEx: SimpleSchema.RegEx.Id,                                                                                //
    max: 500,                                                                                                       // 25
    editableBy: ["member", "admin"],                                                                                // 26
    optional: true,                                                                                                 // 27
    autoform: {                                                                                                     // 28
      omit: true // never show this                                                                                 // 29
    }                                                                                                               //
  },                                                                                                                //
  /**                                                                                                               //
    The `_id` of the top-level parent comment, if there is one                                                      //
  */                                                                                                                //
  topLevelCommentId: {                                                                                              // 35
    type: String,                                                                                                   // 36
    // regEx: SimpleSchema.RegEx.Id,                                                                                //
    max: 500,                                                                                                       // 38
    editableBy: ["member", "admin"],                                                                                // 39
    optional: true,                                                                                                 // 40
    autoform: {                                                                                                     // 41
      omit: true // never show this                                                                                 // 42
    }                                                                                                               //
  },                                                                                                                //
  /**                                                                                                               //
    The timestamp of comment creation                                                                               //
  */                                                                                                                //
  createdAt: {                                                                                                      // 48
    type: Date,                                                                                                     // 49
    optional: true                                                                                                  // 50
  },                                                                                                                //
  /**                                                                                                               //
    The timestamp of the comment being posted. For now, comments are always created and posted at the same time     //
  */                                                                                                                //
  postedAt: {                                                                                                       // 55
    type: Date,                                                                                                     // 56
    optional: true                                                                                                  // 57
  },                                                                                                                //
  /**                                                                                                               //
    The comment body (Markdown)                                                                                     //
  */                                                                                                                //
  body: {                                                                                                           // 62
    type: String,                                                                                                   // 63
    max: 3000,                                                                                                      // 64
    editableBy: ["member", "admin"],                                                                                // 65
    autoform: {                                                                                                     // 66
      rows: 5,                                                                                                      // 67
      afFormGroup: {                                                                                                // 68
        'formgroup-class': 'hide-label'                                                                             // 69
      }                                                                                                             //
    }                                                                                                               //
  },                                                                                                                //
  /**                                                                                                               //
    The HTML version of the comment body                                                                            //
  */                                                                                                                //
  htmlBody: {                                                                                                       // 76
    type: String,                                                                                                   // 77
    optional: true                                                                                                  // 78
  },                                                                                                                //
  /**                                                                                                               //
    The comment's base score (doesn't factor in comment age)                                                        //
  */                                                                                                                //
  baseScore: {                                                                                                      // 83
    type: Number,                                                                                                   // 84
    decimal: true,                                                                                                  // 85
    optional: true                                                                                                  // 86
  },                                                                                                                //
  /**                                                                                                               //
    The comment's current score (factors in comment age)                                                            //
  */                                                                                                                //
  score: {                                                                                                          // 91
    type: Number,                                                                                                   // 92
    decimal: true,                                                                                                  // 93
    optional: true                                                                                                  // 94
  },                                                                                                                //
  /**                                                                                                               //
    The number of upvotes the comment has received                                                                  //
  */                                                                                                                //
  upvotes: {                                                                                                        // 99
    type: Number,                                                                                                   // 100
    optional: true                                                                                                  // 101
  },                                                                                                                //
  /**                                                                                                               //
    An array containing the `_id`s of upvoters                                                                      //
  */                                                                                                                //
  upvoters: {                                                                                                       // 106
    type: [String],                                                                                                 // 107
    optional: true                                                                                                  // 108
  },                                                                                                                //
  /**                                                                                                               //
    The number of downvotes the comment has received                                                                //
  */                                                                                                                //
  downvotes: {                                                                                                      // 113
    type: Number,                                                                                                   // 114
    optional: true                                                                                                  // 115
  },                                                                                                                //
  /**                                                                                                               //
    An array containing the `_id`s of downvoters                                                                    //
  */                                                                                                                //
  downvoters: {                                                                                                     // 120
    type: [String],                                                                                                 // 121
    optional: true                                                                                                  // 122
  },                                                                                                                //
  /**                                                                                                               //
    The comment author's name                                                                                       //
  */                                                                                                                //
  author: {                                                                                                         // 127
    type: String,                                                                                                   // 128
    optional: true                                                                                                  // 129
  },                                                                                                                //
  /**                                                                                                               //
    Whether the comment is inactive. Inactive comments' scores gets recalculated less often                         //
  */                                                                                                                //
  inactive: {                                                                                                       // 134
    type: Boolean,                                                                                                  // 135
    optional: true                                                                                                  // 136
  },                                                                                                                //
  /**                                                                                                               //
    The post's `_id`                                                                                                //
  */                                                                                                                //
  postId: {                                                                                                         // 141
    type: String,                                                                                                   // 142
    optional: true,                                                                                                 // 143
    // regEx: SimpleSchema.RegEx.Id,                                                                                //
    max: 500,                                                                                                       // 145
    editableBy: ["member", "admin"], // TODO: should users be able to set postId, but not modify it?                // 146
    autoform: {                                                                                                     // 147
      omit: true // never show this                                                                                 // 148
    }                                                                                                               //
  },                                                                                                                //
  /**                                                                                                               //
    The comment author's `_id`                                                                                      //
  */                                                                                                                //
  userId: {                                                                                                         // 154
    type: String,                                                                                                   // 155
    optional: true                                                                                                  // 156
  },                                                                                                                //
  /**                                                                                                               //
    Whether the comment is deleted. Delete comments' content doesn't appear on the site.                            //
  */                                                                                                                //
  isDeleted: {                                                                                                      // 161
    type: Boolean,                                                                                                  // 162
    optional: true                                                                                                  // 163
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 167
  // needs to happen after every fields are added                                                                   //
  Comments.internationalize();                                                                                      // 169
});                                                                                                                 //
                                                                                                                    //
Comments.attachSchema(Comments.schema);                                                                             // 172
                                                                                                                    //
Comments.allow({                                                                                                    // 174
  update: _.partial(Telescope.allowCheck, Comments),                                                                // 175
  remove: _.partial(Telescope.allowCheck, Comments)                                                                 // 176
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/methods.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    //
// ------------------------------------------------------------------------------------------- //                   //
// -------------------------------------- Submit Comment ------------------------------------- //                   //
// ------------------------------------------------------------------------------------------- //                   //
                                                                                                                    //
Comments.submit = function (comment) {                                                                              // 6
                                                                                                                    //
  var userId = comment.userId; // at this stage, a userId is expected                                               // 8
                                                                                                                    //
  // ------------------------------ Checks ------------------------------ //                                        //
                                                                                                                    //
  // Don't allow empty comments                                                                                     //
  if (!comment.body) throw new Meteor.Error(704, i18n.t('your_comment_is_empty'));                                  // 13
                                                                                                                    //
  // ------------------------------ Properties ------------------------------ //                                    //
                                                                                                                    //
  var defaultProperties = {                                                                                         // 18
    createdAt: new Date(),                                                                                          // 19
    postedAt: new Date(),                                                                                           // 20
    upvotes: 0,                                                                                                     // 21
    downvotes: 0,                                                                                                   // 22
    baseScore: 0,                                                                                                   // 23
    score: 0,                                                                                                       // 24
    author: Users.getDisplayNameById(userId)                                                                        // 25
  };                                                                                                                //
                                                                                                                    //
  comment = _.extend(defaultProperties, comment);                                                                   // 28
                                                                                                                    //
  // ------------------------------ Callbacks ------------------------------ //                                     //
                                                                                                                    //
  // run all post submit server callbacks on comment object successively                                            //
  comment = Telescope.callbacks.run("commentSubmit", comment);                                                      // 33
                                                                                                                    //
  // -------------------------------- Insert -------------------------------- //                                    //
                                                                                                                    //
  comment._id = Comments.insert(comment);                                                                           // 37
                                                                                                                    //
  // --------------------- Server-side Async Callbacks --------------------- //                                     //
                                                                                                                    //
  // run all post submit server callbacks on comment object successively                                            //
  // note: query for comment to get fresh document with collection-hooks effects applied                            //
  Telescope.callbacks.runAsync("commentSubmitAsync", Comments.findOne(comment._id));                                // 43
                                                                                                                    //
  return comment;                                                                                                   // 45
};                                                                                                                  //
                                                                                                                    //
Comments.edit = function (commentId, modifier, comment) {                                                           // 48
                                                                                                                    //
  // ------------------------------ Callbacks ------------------------------ //                                     //
                                                                                                                    //
  modifier = Telescope.callbacks.run("commentEdit", modifier, comment);                                             // 52
                                                                                                                    //
  // ------------------------------ Update ------------------------------ //                                        //
                                                                                                                    //
  Comments.update(commentId, modifier);                                                                             // 56
                                                                                                                    //
  // ------------------------------ Callbacks ------------------------------ //                                     //
                                                                                                                    //
  Telescope.callbacks.runAsync("commentEditAsync", Comments.findOne(commentId), comment);                           // 60
                                                                                                                    //
  // ------------------------------ After Update ------------------------------ //                                  //
  return Comments.findOne(commentId);                                                                               // 63
};                                                                                                                  //
                                                                                                                    //
// ------------------------------------------------------------------------------------------- //                   //
// ----------------------------------------- Methods ----------------------------------------- //                   //
// ------------------------------------------------------------------------------------------- //                   //
                                                                                                                    //
Meteor.methods({                                                                                                    // 70
  submitComment: function (comment) {                                                                               // 71
                                                                                                                    //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know             //
    check(comment, Comments.simpleSchema());                                                                        // 74
                                                                                                                    //
    // required properties:                                                                                         //
    // postId                                                                                                       //
    // body                                                                                                         //
                                                                                                                    //
    // optional properties:                                                                                         //
    // parentCommentId                                                                                              //
                                                                                                                    //
    var user = Meteor.user(),                                                                                       // 83
        hasAdminRights = Users.is.admin(user),                                                                      //
        schema = Comments.simpleSchema()._schema;                                                                   //
                                                                                                                    //
    // ------------------------------ Checks ------------------------------ //                                      //
                                                                                                                    //
    // check that user can comment                                                                                  //
    if (!user || !Users.can.comment(user)) throw new Meteor.Error(i18n.t('you_need_to_login_or_be_invited_to_post_new_comments'));
                                                                                                                    //
    // ------------------------------ Rate Limiting ------------------------------ //                               //
                                                                                                                    //
    if (!hasAdminRights) {                                                                                          // 95
                                                                                                                    //
      var timeSinceLastComment = Users.timeSinceLast(user, Comments),                                               // 97
          commentInterval = Math.abs(parseInt(Settings.get('commentInterval', 15)));                                //
                                                                                                                    //
      // check that user waits more than 15 seconds between comments                                                //
      if (timeSinceLastComment < commentInterval) throw new Meteor.Error(704, i18n.t('please_wait') + (commentInterval - timeSinceLastComment) + i18n.t('seconds_before_commenting_again'));
    }                                                                                                               //
                                                                                                                    //
    // ------------------------------ Properties ------------------------------ //                                  //
                                                                                                                    //
    // admin-only properties                                                                                        //
    // userId                                                                                                       //
                                                                                                                    //
    // clear restricted properties                                                                                  //
    _.keys(comment).forEach(function (fieldName) {                                                                  // 112
                                                                                                                    //
      var field = schema[fieldName];                                                                                // 114
      if (!Users.can.submitField(user, field)) {                                                                    // 115
        throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);   // 116
      }                                                                                                             //
    });                                                                                                             //
                                                                                                                    //
    // if no userId has been set, default to current user id                                                        //
    if (!comment.userId) {                                                                                          // 122
      comment.userId = user._id;                                                                                    // 123
    }                                                                                                               //
                                                                                                                    //
    return Comments.submit(comment);                                                                                // 126
  },                                                                                                                //
                                                                                                                    //
  editComment: function (modifier, commentId) {                                                                     // 129
                                                                                                                    //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know             //
    check(modifier, { $set: Comments.simpleSchema() });                                                             // 132
    check(commentId, String);                                                                                       // 133
                                                                                                                    //
    var user = Meteor.user(),                                                                                       // 135
        comment = Comments.findOne(commentId),                                                                      //
        schema = Comments.simpleSchema()._schema;                                                                   //
                                                                                                                    //
    // ------------------------------ Checks ------------------------------ //                                      //
                                                                                                                    //
    // check that user can edit                                                                                     //
    if (!user || !Users.can.edit(user, comment)) {                                                                  // 142
      throw new Meteor.Error(601, i18n.t('sorry_you_cannot_edit_this_comment'));                                    // 143
    }                                                                                                               //
                                                                                                                    //
    // go over each field and throw an error if it's not editable                                                   //
    // loop over each operation ($set, $unset, etc.)                                                                //
    _.each(modifier, function (operation) {                                                                         // 148
      // loop over each property being operated on                                                                  //
      _.keys(operation).forEach(function (fieldName) {                                                              // 150
                                                                                                                    //
        var field = schema[fieldName];                                                                              // 152
        if (!Users.can.editField(user, field, comment)) {                                                           // 153
          throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);
        }                                                                                                           //
      });                                                                                                           //
    });                                                                                                             //
                                                                                                                    //
    Comments.edit(commentId, modifier, comment);                                                                    // 160
  },                                                                                                                //
                                                                                                                    //
  deleteCommentById: function (commentId) {                                                                         // 163
                                                                                                                    //
    check(commentId, String);                                                                                       // 165
                                                                                                                    //
    var comment = Comments.findOne(commentId);                                                                      // 167
    var user = Meteor.user();                                                                                       // 168
                                                                                                                    //
    if (Users.can.edit(user, comment)) {                                                                            // 170
                                                                                                                    //
      // decrement post comment count and remove user ID from post                                                  //
      Posts.update(comment.postId, {                                                                                // 173
        $inc: { commentCount: -1 },                                                                                 // 174
        $pull: { commenters: comment.userId }                                                                       // 175
      });                                                                                                           //
                                                                                                                    //
      // decrement user comment count and remove comment ID from user                                               //
      Meteor.users.update({ _id: comment.userId }, {                                                                // 179
        $inc: { 'telescope.commentCount': -1 }                                                                      // 180
      });                                                                                                           //
                                                                                                                    //
      // note: should we also decrease user's comment karma ?                                                       //
      // We don't actually delete the comment to avoid losing all child comments.                                   //
      // Instead, we give it a special flag                                                                         //
      Comments.update({ _id: commentId }, { $set: {                                                                 // 186
          body: 'Deleted',                                                                                          // 187
          htmlBody: 'Deleted',                                                                                      // 188
          isDeleted: true                                                                                           // 189
        } });                                                                                                       //
    } else {                                                                                                        //
                                                                                                                    //
      Messages.flash("You don't have permission to delete this comment.", "error");                                 // 194
    }                                                                                                               //
  }                                                                                                                 //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/callbacks.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
//////////////////////////////////////////////////////                                                              //
// Collection Hooks                                 //                                                              //
//////////////////////////////////////////////////////                                                              //
                                                                                                                    //
Comments.before.insert(function (userId, doc) {                                                                     // 5
  // note: only actually sanitizes on the server                                                                    //
  doc.htmlBody = Telescope.utils.sanitize(marked(doc.body));                                                        // 7
});                                                                                                                 //
                                                                                                                    //
Comments.before.update(function (userId, doc, fieldNames, modifier) {                                               // 10
  // if body is being modified, update htmlBody too                                                                 //
  if (Meteor.isServer && modifier.$set && modifier.$set.body) {                                                     // 12
    modifier.$set = modifier.$set || {};                                                                            // 13
    modifier.$set.htmlBody = Telescope.utils.sanitize(marked(modifier.$set.body));                                  // 14
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
/**                                                                                                                 //
 * Disallow $rename                                                                                                 //
 */                                                                                                                 //
Comments.before.update(function (userId, doc, fieldNames, modifier) {                                               // 21
  if (!!modifier.$rename) {                                                                                         // 22
    throw new Meteor.Error("illegal $rename operator detected!");                                                   // 23
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
//////////////////////////////////////////////////////                                                              //
// Callbacks                                        //                                                              //
//////////////////////////////////////////////////////                                                              //
                                                                                                                    //
function afterCommentOperations(comment) {                                                                          // 31
                                                                                                                    //
  var userId = comment.userId;                                                                                      // 33
                                                                                                                    //
  // increment comment count                                                                                        //
  Meteor.users.update({ _id: userId }, {                                                                            // 36
    $inc: { 'telescope.commentCount': 1 }                                                                           // 37
  });                                                                                                               //
                                                                                                                    //
  // update post                                                                                                    //
  Posts.update(comment.postId, {                                                                                    // 41
    $inc: { commentCount: 1 },                                                                                      // 42
    $set: { lastCommentedAt: new Date() },                                                                          // 43
    $addToSet: { commenters: userId }                                                                               // 44
  });                                                                                                               //
                                                                                                                    //
  return comment;                                                                                                   // 47
}                                                                                                                   //
Telescope.callbacks.add("commentSubmitAsync", afterCommentOperations);                                              // 49
                                                                                                                    //
function upvoteOwnComment(comment) {                                                                                // 51
                                                                                                                    //
  var commentAuthor = Meteor.users.findOne(comment.userId);                                                         // 53
                                                                                                                    //
  // upvote comment                                                                                                 //
  Telescope.upvoteItem(Comments, comment, commentAuthor);                                                           // 56
                                                                                                                    //
  return comment;                                                                                                   // 58
}                                                                                                                   //
Telescope.callbacks.add("commentSubmitAsync", upvoteOwnComment);                                                    // 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/views.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/**                                                                                                                 //
 * Comment views are filters used for subscribing to and viewing comments                                           //
 * @namespace Comments.views                                                                                        //
 */                                                                                                                 //
Comments.views = {};                                                                                                // 5
                                                                                                                    //
/**                                                                                                                 //
 * Add a module to a comment view                                                                                   //
 * @param {string} viewName - The name of the view                                                                  //
 * @param {function} [viewFunction] - The function used to calculate query terms. Takes terms and baseParameters arguments
 */                                                                                                                 //
Comments.views.add = function (viewName, viewFunction) {                                                            // 12
  Comments.views[viewName] = viewFunction;                                                                          // 13
};                                                                                                                  //
                                                                                                                    //
// will be common to all other view unless specific properties are overwritten                                      //
Comments.views.baseParameters = {                                                                                   // 17
  options: {                                                                                                        // 18
    limit: 10                                                                                                       // 19
  }                                                                                                                 //
};                                                                                                                  //
                                                                                                                    //
Comments.views.add("postComments", function (terms) {                                                               // 23
  return {                                                                                                          // 24
    find: { postId: terms.postId },                                                                                 // 25
    options: { limit: 0, sort: { score: -1, postedAt: -1 } }                                                        // 26
  };                                                                                                                //
});                                                                                                                 //
                                                                                                                    //
Comments.views.add("userComments", function (terms) {                                                               // 30
  return {                                                                                                          // 31
    find: { userId: terms.userId },                                                                                 // 32
    options: { sort: { postedAt: -1 } }                                                                             // 33
  };                                                                                                                //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/parameters.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Comments.parameters = {};                                                                                           // 1
                                                                                                                    //
/**                                                                                                                 //
 * Gives an object containing the appropriate find                                                                  //
 * and options arguments for the subscriptions's Comments.find()                                                    //
 * @param {Object} terms                                                                                            //
 */                                                                                                                 //
Comments.parameters.get = function (terms) {                                                                        // 8
                                                                                                                    //
  // add this to ensure all post publications pass audit-arguments-check                                            //
  check(terms, Match.Any);                                                                                          // 11
                                                                                                                    //
  // console.log(terms)                                                                                             //
                                                                                                                    //
  // note: using jquery's extend() with "deep" parameter set to true instead of shallow _.extend()                  //
  // see: http://api.jquery.com/jQuery.extend/                                                                      //
                                                                                                                    //
  // initialize parameters by extending baseParameters object, to avoid passing it by reference                     //
  var parameters = Telescope.utils.deepExtend(true, {}, Comments.views.baseParameters);                             // 19
                                                                                                                    //
  // get query parameters according to current view                                                                 //
  if (typeof Comments.views[terms.view] !== 'undefined') parameters = Telescope.utils.deepExtend(true, parameters, Comments.views[terms.view](terms));
                                                                                                                    //
  // iterate over commentsParameters callbacks                                                                      //
  parameters = Telescope.callbacks.run("commentsParameters", parameters, terms);                                    // 26
                                                                                                                    //
  // console.log(parameters);                                                                                       //
                                                                                                                    //
  return parameters;                                                                                                // 30
};                                                                                                                  //
                                                                                                                    //
// limit the number of items that can be requested at once                                                          //
function limitComments(parameters, terms) {                                                                         // 34
  var maxLimit = 1000;                                                                                              // 35
  // if a limit was provided with the terms, add it too (note: limit=0 means "no limit")                            //
  if (typeof terms.limit !== 'undefined') {                                                                         // 37
    _.extend(parameters.options, { limit: parseInt(terms.limit) });                                                 // 38
  }                                                                                                                 //
                                                                                                                    //
  // limit to "maxLimit" items at most when limit is undefined, equal to 0, or superior to maxLimit                 //
  if (!parameters.options.limit || parameters.options.limit === 0 || parameters.options.limit > maxLimit) {         // 42
    parameters.options.limit = maxLimit;                                                                            // 43
  }                                                                                                                 //
  return parameters;                                                                                                // 45
}                                                                                                                   //
Telescope.callbacks.add("commentsParameters", limitComments);                                                       // 47
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/helpers.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
//////////////////                                                                                                  //
// Link Helpers //                                                                                                  //
//////////////////                                                                                                  //
                                                                                                                    //
/**                                                                                                                 //
 * Get URL of a comment page.                                                                                       //
 * @param {Object} comment                                                                                          //
 */                                                                                                                 //
Comments.getPageUrl = function (comment, isAbsolute) {                                                              // 9
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                      // 10
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                         // 11
  return prefix + FlowRouter.path("commentPage", comment);                                                          // 12
};                                                                                                                  //
Comments.helpers({ getPageUrl: function () {                                                                        // 14
    return Comments.getPageUrl(this);                                                                               // 14
  } });                                                                                                             //
                                                                                                                    //
///////////////////                                                                                                 //
// Other Helpers //                                                                                                 //
///////////////////                                                                                                 //
                                                                                                                    //
/**                                                                                                                 //
 * Get a comment author's name                                                                                      //
 * @param {Object} comment                                                                                          //
 */                                                                                                                 //
Comments.getAuthorName = function (comment) {                                                                       // 24
  var user = Meteor.users.findOne(comment.userId);                                                                  // 25
  if (user) {                                                                                                       // 26
    return user.getDisplayName();                                                                                   // 27
  } else {                                                                                                          //
    return comment.author;                                                                                          // 29
  }                                                                                                                 //
};                                                                                                                  //
Comments.helpers({ getAuthorName: function () {                                                                     // 32
    return Comments.getAuthorName(this);                                                                            // 32
  } });                                                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/routes.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
FlowRouter.route('/comments/:_id', {                                                                                // 1
  name: "commentPage",                                                                                              // 2
  action: function (params, queryParams) {                                                                          // 3
    BlazeLayout.render("layout", { main: "comment_controller", commentTemplate: "comment_reply" });                 // 4
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
FlowRouter.route('/comments/:_id/edit', {                                                                           // 8
  name: "commentEdit",                                                                                              // 9
  action: function (params, queryParams) {                                                                          // 10
    BlazeLayout.render("layout", { main: "comment_controller", commentTemplate: "comment_edit" });                  // 11
  }                                                                                                                 //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/lib/server/publications.js                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Comments._ensureIndex({ postId: 1 });                                                                               // 1
Comments._ensureIndex({ parentCommentId: 1 });                                                                      // 2
                                                                                                                    //
// Publish a list of comments                                                                                       //
                                                                                                                    //
Meteor.publish('commentsList', function (terms) {                                                                   // 6
  if (Users.can.viewById(this.userId)) {                                                                            // 7
    var parameters = Comments.parameters.get(terms);                                                                // 8
    var comments = Comments.find(parameters.find, parameters.options);                                              // 9
                                                                                                                    //
    // if there are comments, find out which posts were commented on                                                //
    var commentedPostIds = comments.count() ? _.pluck(comments.fetch(), 'postId') : [];                             // 12
    return [comments, Posts.find({ _id: { $in: commentedPostIds } })];                                              // 13
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
// Publish a single comment                                                                                         //
                                                                                                                    //
Meteor.publish('singleCommentAndChildren', function (commentId) {                                                   // 22
                                                                                                                    //
  check(commentId, String);                                                                                         // 24
                                                                                                                    //
  if (Users.can.viewById(this.userId)) {                                                                            // 26
    // publish both current comment and child comments                                                              //
    var commentIds = [commentId];                                                                                   // 28
    var childCommentIds = _.pluck(Comments.find({ parentCommentId: commentId }, { fields: { _id: 1 } }).fetch(), '_id');
    commentIds = commentIds.concat(childCommentIds);                                                                // 30
    return Comments.find({ _id: { $in: commentIds } }, { sort: { score: -1, postedAt: -1 } });                      // 31
  }                                                                                                                 //
  return [];                                                                                                        // 33
});                                                                                                                 //
                                                                                                                    //
// Publish the post related to the current comment                                                                  //
                                                                                                                    //
Meteor.publish('commentPost', function (commentId) {                                                                // 38
                                                                                                                    //
  check(commentId, String);                                                                                         // 40
                                                                                                                    //
  if (Users.can.viewById(this.userId)) {                                                                            // 42
    var comment = Comments.findOne(commentId);                                                                      // 43
    return Posts.find({ _id: comment && comment.postId });                                                          // 44
  }                                                                                                                 //
  return [];                                                                                                        // 46
});                                                                                                                 //
                                                                                                                    //
// Publish author of the current comment, and author of the post related to the current comment                     //
                                                                                                                    //
Meteor.publish('commentUsers', function (commentId) {                                                               // 51
                                                                                                                    //
  check(commentId, String);                                                                                         // 53
                                                                                                                    //
  var userIds = [];                                                                                                 // 55
                                                                                                                    //
  if (Users.can.viewById(this.userId)) {                                                                            // 57
                                                                                                                    //
    var comment = Comments.findOne(commentId);                                                                      // 59
                                                                                                                    //
    if (!!comment) {                                                                                                // 61
      userIds.push(comment.userId);                                                                                 // 62
                                                                                                                    //
      var post = Posts.findOne(comment.postId);                                                                     // 64
      if (!!post) {                                                                                                 // 65
        userIds.push(post.userId);                                                                                  // 66
      }                                                                                                             //
                                                                                                                    //
      return Meteor.users.find({ _id: { $in: userIds } }, { fields: Users.pubsub.publicProperties });               // 69
    }                                                                                                               //
  }                                                                                                                 //
                                                                                                                    //
  return [];                                                                                                        // 75
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/ar.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                               // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                              // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                     // 11
  TAPi18n.translations["ar"] = {};                                                                                  // 12
}                                                                                                                   // 13
                                                                                                                    // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                          // 15
  TAPi18n.translations["ar"][namespace] = {};                                                                       // 16
}                                                                                                                   // 17
                                                                                                                    // 18
_.extend(TAPi18n.translations["ar"][namespace], {"sorry_you_cannot_edit_this_comment":"ﻻ يمكنك تعديل هذا التعليق","your_comment_has_been_deleted":"قد تم حذف تعليقك","comment_":"تعليق","delete_comment":"احذف التعليق","add_comment":"اضف تعليق","upvote":"صوت مع","downvote":"صوت ضد","link":"رابط","edit":"تعديل","reply":"رد","no_comments":"ﻻ يوجد تعليق","please_sign_in_to_reply":"يتوجب الدخول ﻻضافة رد"});
TAPi18n._registerServerTranslator("ar", namespace);                                                                 // 20
                                                                                                                    // 21
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/bg.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                          // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                     // 9
  TAPi18n.translations["bg"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                          // 13
  TAPi18n.translations["bg"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["bg"][namespace], {"sorry_you_cannot_edit_this_comment":"Съжаляваме, неможете да променяте този коментар.","your_comment_has_been_deleted":"Вашият коментар беше изтрит.","comment_":"Коментар","delete_comment":"Изтриване на коментар","add_comment":"Добави коментар","upvote":"Харесвам","downvote":"Не харесвам","link":"връзка","edit":"редактирай","reply":"отговор","no_comments":"Няма коментари."});
TAPi18n._registerServerTranslator("bg", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/cs.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                     // 9
  TAPi18n.translations["cs"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                          // 13
  TAPi18n.translations["cs"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["cs"][namespace], {"sorry_you_cannot_edit_this_comment":"Je nám líto, tento komentář nemůžete editovat.","your_comment_has_been_deleted":"Váš komentář byl smazán.","comment_":"Komentář","delete_comment":"Odstranit komentář","add_comment":"Přidat komentář","upvote":"Přidat hlas","downvote":"Odebrat hlas","link":"odkaz","edit":"Upravit","reply":"Odpovědět","no_comments":"Zatím žádné komentáře","please_sign_in_to_reply":"Pro odpověď se prosím přihlašte"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/da.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                     // 9
  TAPi18n.translations["da"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                          // 13
  TAPi18n.translations["da"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["da"][namespace], {"add_comment":"Tilføj kommentar","link":"link","reply":"Svar"});   // 17
TAPi18n._registerServerTranslator("da", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/de.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                     // 9
  TAPi18n.translations["de"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                          // 13
  TAPi18n.translations["de"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["de"][namespace], {"sorry_you_cannot_edit_this_comment":"Sorry, Du kannst diesen Kommentar nicht bearbeiten.","your_comment_has_been_deleted":"Dein Kommentar wurde gelöscht.","comment_":"Kommentieren","delete_comment":"Kommentar löschen","add_comment":"Kommentar hinzufügen","upvote":"+1","downvote":"-1","link":"link","edit":"bearbeiten","reply":"antworten","no_comments":"Keine Kommentare."});
TAPi18n._registerServerTranslator("de", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/el.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                     // 9
  TAPi18n.translations["el"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                          // 13
  TAPi18n.translations["el"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["el"][namespace], {"sorry_you_cannot_edit_this_comment":"Συγγνώμη, δεν μπορείς να επεξεργαστείς συτό το σχόλιο.","your_comment_has_been_deleted":"Το σχόλιο σας έχει διαγραφεί.","comment_":"Σχόλιο","delete_comment":"Διαγραφή σχολίου","add_comment":"Νέο σχόλιο","upvote":"Υπερ","downvote":"Κατά","link":"Σύνδεσμος","edit":"Επεξεργασία","reply":"Απάντηση","no_comments":"Κανένα σχόλιο."});
TAPi18n._registerServerTranslator("el", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/en.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
// integrate the fallback language translations                                                                     // 8
translations = {};                                                                                                  // 9
translations[namespace] = {"sorry_you_cannot_edit_this_comment":"Sorry, you cannot edit this comment.","your_comment_has_been_deleted":"Your comment has been deleted.","comment_":"Comment","delete_comment":"Delete Comment","add_comment":"Add Comment","upvote":"upvote","downvote":"downvote","link":"link","edit":"Edit","reply":"Reply","no_comments":"No comments.","please_sign_in_to_reply":"Please sign in to reply"};
TAPi18n._loadLangFileObject("en", translations);                                                                    // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                 // 12
                                                                                                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/es.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                      // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                     // 9
  TAPi18n.translations["es"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                          // 13
  TAPi18n.translations["es"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["es"][namespace], {"sorry_you_cannot_edit_this_comment":"Lo sentimos, no puedes editar este comentario.","your_comment_has_been_deleted":"Tu comentario ha sido borrado.","comment_":"Comentar","delete_comment":"Borrar comentario","add_comment":"Agregar Comentario","upvote":"Voto Positivo","downvote":"Voto Negativo","link":"link","edit":"Editar","reply":"Responder","no_comments":"No hay comentarios.","please_sign_in_to_reply":"Por favor, inicia sesión primero."});
TAPi18n._registerServerTranslator("es", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/et.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                     // 9
  TAPi18n.translations["et"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                          // 13
  TAPi18n.translations["et"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["et"][namespace], {"sorry_you_cannot_edit_this_comment":"Vabandame, sa ei saa muuta seda kommentaari.","your_comment_has_been_deleted":"Teie kommentaar on kustutatud.","comment_":"Kommentaar","delete_comment":"Kustuta Kommentaar","add_comment":"Lisa Kommentaar","upvote":"upvote","downvote":"downvote","link":"link","edit":"Muuda","reply":"Vasta","no_comments":"Kommentaarid puuduvad.","please_sign_in_to_reply":"Palun logi sisse, et vastata"});
TAPi18n._registerServerTranslator("et", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/fr.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                     // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                     // 9
  TAPi18n.translations["fr"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                          // 13
  TAPi18n.translations["fr"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["fr"][namespace], {"sorry_you_cannot_edit_this_comment":"Désolé, vous ne pouvez pas modifier ce commentaire.","your_comment_has_been_deleted":"Votre commentaire a été supprimé.","comment_":"Commentaire","delete_comment":"Supprimer le commentaire","add_comment":"Ajouter un commentaire","upvote":"upvote","downvote":"downvote","link":"lien","edit":"Modifier","reply":"Répondre","no_comments":"Aucun commentaire.","please_sign_in_to_reply":"Connectez-vous pour répondre"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/hu.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                     // 9
  TAPi18n.translations["hu"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                          // 13
  TAPi18n.translations["hu"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["hu"][namespace], {"sorry_you_cannot_edit_this_comment":"Sajnálom, nem szerkesztheted ezt a hozzászólást.","your_comment_has_been_deleted":"A hozzászólás törlésre került.","comment_":"Hozzászólás","delete_comment":"Hozzászólás törlése","add_comment":"Szólj hozzá!","upvote":"upvote","downvote":"downvote","link":"link","edit":"Szerkesztés","reply":"Válasz","no_comments":"Nincs hozzászólás.","please_sign_in_to_reply":"Kérjük, jelentkezz be a válaszhoz"});
TAPi18n._registerServerTranslator("hu", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/id.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                                  // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                     // 9
  TAPi18n.translations["id"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                          // 13
  TAPi18n.translations["id"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["id"][namespace], {"sorry_you_cannot_edit_this_comment":"Maaf, Anda tidak dapat mengedit komentar ini.","your_comment_has_been_deleted":"Komentar anda telah dihapus.","comment_":"Komentar","delete_comment":"Hapus Komentar","add_comment":"Tambahkan komentar","upvote":"sundul","downvote":"tenggelamkan","link":"tautan","edit":"edit","reply":"balas","no_comments":"Tidak ada komentar.","please_sign_in_to_reply":"Silahkan login untuk membalas"});
TAPi18n._registerServerTranslator("id", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/it.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                     // 9
  TAPi18n.translations["it"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                          // 13
  TAPi18n.translations["it"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["it"][namespace], {"sorry_you_cannot_edit_this_comment":"Ci spiace, non puoi modificare questo commento.","your_comment_has_been_deleted":"Il tuo commento è stato rimosso.","comment_":"Commenta","delete_comment":"Elimina Commento","add_comment":"Aggiungi Commento","upvote":"consiglia","downvote":"sconsiglia","link":"link","edit":"Modifica","reply":"Rispondi","no_comments":"Nessun commento.","please_sign_in_to_reply":"Per favore accedi per rispondere"});
TAPi18n._registerServerTranslator("it", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/ja.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                     // 9
  TAPi18n.translations["ja"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                          // 13
  TAPi18n.translations["ja"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                // 17
TAPi18n._registerServerTranslator("ja", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/kk.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                            // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                     // 9
  TAPi18n.translations["kk"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                          // 13
  TAPi18n.translations["kk"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["kk"][namespace], {"sorry_you_cannot_edit_this_comment":"Кешіріңіз, сіз осы пікірді өңдеуіңізге рұқсат жоқ","your_comment_has_been_deleted":"Сіздің Пікіріңіз жойылған.","comment_":"Пікір","delete_comment":"Пікірді жою","add_comment":"Пікір қосу","upvote":"жоғары бағала","downvote":"төмен бағала","link":"сілтеме","edit":"Өңдеу","reply":"Жауап қайтару","no_comments":"Пікір жоқ.","please_sign_in_to_reply":"Жауап беру үшін кіріңіз."});
TAPi18n._registerServerTranslator("kk", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/ko.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                   // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                     // 9
  TAPi18n.translations["ko"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                          // 13
  TAPi18n.translations["ko"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["ko"][namespace], {"sorry_you_cannot_edit_this_comment":"죄송합니다. 이 댓글을 편집 할 수 없습니다.","your_comment_has_been_deleted":"댓글이 삭제되었습니다.","comment_":"댓글","delete_comment":"댓글 삭제","add_comment":"댓글 달기","upvote":"추천","downvote":"반대","link":"링크","edit":"편집","reply":"댓글","no_comments":"댓글 없음.","please_sign_in_to_reply":"댓글을 쓰시려면 로그인해주세요"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/nl.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                     // 9
  TAPi18n.translations["nl"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                          // 13
  TAPi18n.translations["nl"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["nl"][namespace], {"sorry_you_cannot_edit_this_comment":"Sorry, je kan deze reactie niet bewerken.","your_comment_has_been_deleted":"Jouw reactie is verwijderd.","comment_":"Reactie","delete_comment":"Verwijder reactie","add_comment":"Reactie toevoegen","upvote":"omhoog","downvote":"omlaag","link":"link","edit":"Bewerk","reply":"Reageer","no_comments":"Geen reacties.","please_sign_in_to_reply":"Login om te kunnen reageren."});
TAPi18n._registerServerTranslator("nl", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/pl.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                     // 9
  TAPi18n.translations["pl"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                          // 13
  TAPi18n.translations["pl"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["pl"][namespace], {"sorry_you_cannot_edit_this_comment":"Nie możesz edytować tego komentarza.","your_comment_has_been_deleted":"Twój komentarz został usunięty.","comment_":"Komentuj","delete_comment":"Usuń komentarz","add_comment":"Dodaj komentarz","upvote":"plus","downvote":"minus","link":"link","edit":"Edytuj","reply":"Odpowiedz","no_comments":"Brak komentarzy."});
TAPi18n._registerServerTranslator("pl", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/pt-BR.i18n.js                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                                   // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                  // 9
  TAPi18n.translations["pt-BR"] = {};                                                                               // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                       // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                    // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {"sorry_you_cannot_edit_this_comment":"Desculpe, você não pode editar este comentário.","your_comment_has_been_deleted":"Seu comentário foi deletado.","comment_":"Comentário","delete_comment":"Deletar Comentário","add_comment":"Adicionar Comentário","upvote":"+","downvote":"-","link":"link","edit":"Editar","reply":"Responder","no_comments":"Sem comentários.","please_sign_in_to_reply":"Por favor, registre-se para responder"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                              // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/ro.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                     // 9
  TAPi18n.translations["ro"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                          // 13
  TAPi18n.translations["ro"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["ro"][namespace], {"sorry_you_cannot_edit_this_comment":"Ne pare rău, nu poți edita aceast comentariu.","your_comment_has_been_deleted":"Comentariul tău a fost șters","comment_":"Comentare","delete_comment":"Sterge comentariu","add_comment":"Adaugă comentariu","upvote":"+1","downvote":"-1","link":"link","edit":"editează","reply":"răspunde","no_comments":"Nici un comentariu.","please_sign_in_to_reply":"Este nevoie să te autentifici pentru a răspunde"});
TAPi18n._registerServerTranslator("ro", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/ru.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                     // 9
  TAPi18n.translations["ru"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                          // 13
  TAPi18n.translations["ru"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["ru"][namespace], {"sorry_you_cannot_edit_this_comment":"Извините, вы не можете редактировать это.","your_comment_has_been_deleted":"Ваш комментарий удалили.","comment_":"Комментарий","delete_comment":"Удалить комментарий","add_comment":"Добавить комментарий","upvote":"за","downvote":"против","link":"ссылка","edit":"Редактировать","reply":"Ответить","no_comments":"Без комментариев."});
TAPi18n._registerServerTranslator("ru", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/sl.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                                        // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                     // 9
  TAPi18n.translations["sl"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                          // 13
  TAPi18n.translations["sl"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["sl"][namespace], {"sorry_you_cannot_edit_this_comment":"Žal, ne morete urejati tega komentarja.","your_comment_has_been_deleted":"Vaš komentar je bil izbrisan.","comment_":"Komentar","delete_comment":"Izbriši komentar","add_comment":"Komentiraj","upvote":"glas za","downvote":"glas proti","link":"povezava","edit":"Uredi","reply":"Odgovori","no_comments":"Ni komentarjev.","please_sign_in_to_reply":"Prosimo, prijavite se za odgovor"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/sv.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                     // 9
  TAPi18n.translations["sv"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                          // 13
  TAPi18n.translations["sv"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["sv"][namespace], {"sorry_you_cannot_edit_this_comment":"Tyvärr, du kan inte redigera denna kommentar.","your_comment_has_been_deleted":"Din kommentar har tagits bort.","comment_":"Kommentar","delete_comment":"Ta Bort Kommentar","add_comment":"Kommentera","upvote":"upprösta","downvote":"nedrösta","link":"länk","edit":"Redigera","reply":"Svara","no_comments":"Inga kommentarer.","please_sign_in_to_reply":"Vänligen logga in för att svara"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/th.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                                     // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                     // 9
  TAPi18n.translations["th"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                          // 13
  TAPi18n.translations["th"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["th"][namespace], {"comment_":"ความเห็น","delete_comment":"ลบความเห็น","add_comment":"เพิ่มความเห็น","link":"ลิงก์","edit":"แก้ไข","reply":"ตอบ","no_comments":"ไม่มีความเห็น"});
TAPi18n._registerServerTranslator("th", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/tr.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                     // 9
  TAPi18n.translations["tr"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                          // 13
  TAPi18n.translations["tr"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["tr"][namespace], {"sorry_you_cannot_edit_this_comment":"Özür dileriz, bu yorumu değiştiremezsiniz","your_comment_has_been_deleted":"Yorumunuz silindi","comment_":"Yorum","delete_comment":"Yorumu Sil","add_comment":"Yorum Ekle","upvote":"1","downvote":"-1","link":"bağlantı","edit":"Düzenle","reply":"Cevap","no_comments":"Yorum yok","please_sign_in_to_reply":"Cevap yazmak için lütfen giriş yapın."});
TAPi18n._registerServerTranslator("tr", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/vi.i18n.js                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                        // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                     // 9
  TAPi18n.translations["vi"] = {};                                                                                  // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                          // 13
  TAPi18n.translations["vi"][namespace] = {};                                                                       // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["vi"][namespace], {"sorry_you_cannot_edit_this_comment":"Xin lỗi, bạn không thể sửa ý kiến này.","your_comment_has_been_deleted":"Ý kiến của bạn đã được xóa.","comment_":"Ý kiến","delete_comment":"Xóa ý kiến","add_comment":"Thêm ý kiến","upvote":"Thích","downvote":"Không thích","link":"link","edit":"Sửa","reply":"Trả lời","no_comments":"Không ý kiến."});
TAPi18n._registerServerTranslator("vi", namespace);                                                                 // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_comments/packages/telescope_commentsi18n/zh-CN.i18n.js                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "project",                                                                                       // 2
    namespace = "project";                                                                                          // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                                      // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                  // 9
  TAPi18n.translations["zh-CN"] = {};                                                                               // 10
}                                                                                                                   // 11
                                                                                                                    // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                       // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                    // 14
}                                                                                                                   // 15
                                                                                                                    // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {"sorry_you_cannot_edit_this_comment":"对不起你不能编辑这个评论","your_comment_has_been_deleted":"你的评论已经被删除","comment_":"评论","delete_comment":"删除评论","add_comment":"评论","upvote":"顶","downvote":"踩","link":"链接","edit":"编辑","reply":"回复","no_comments":"暂时没有评论"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                              // 18
                                                                                                                    // 19
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:comments'] = {
  Comments: Comments
};

})();

//# sourceMappingURL=telescope_comments.js.map
