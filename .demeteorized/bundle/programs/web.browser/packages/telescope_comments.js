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
var Comments, findQueueContainer, $up, $down, $prev, $next, $queuedAncestors, $container, translations;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/comments.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * The global namespace for Comments.                                                                                  //
 * @namespace Comments                                                                                                 //
 */                                                                                                                    //
Comments = new Mongo.Collection("comments");                                                                           // 5
                                                                                                                       //
/**                                                                                                                    //
 * Comments schema                                                                                                     //
 * @type {SimpleSchema}                                                                                                //
 */                                                                                                                    //
Comments.schema = new SimpleSchema({                                                                                   // 11
  /**                                                                                                                  //
    ID                                                                                                                 //
  */                                                                                                                   //
  _id: {                                                                                                               // 15
    type: String,                                                                                                      // 16
    optional: true                                                                                                     // 17
  },                                                                                                                   //
  /**                                                                                                                  //
    The `_id` of the parent comment, if there is one                                                                   //
  */                                                                                                                   //
  parentCommentId: {                                                                                                   // 22
    type: String,                                                                                                      // 23
    // regEx: SimpleSchema.RegEx.Id,                                                                                   //
    max: 500,                                                                                                          // 25
    editableBy: ["member", "admin"],                                                                                   // 26
    optional: true,                                                                                                    // 27
    autoform: {                                                                                                        // 28
      omit: true // never show this                                                                                    // 29
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    The `_id` of the top-level parent comment, if there is one                                                         //
  */                                                                                                                   //
  topLevelCommentId: {                                                                                                 // 35
    type: String,                                                                                                      // 36
    // regEx: SimpleSchema.RegEx.Id,                                                                                   //
    max: 500,                                                                                                          // 38
    editableBy: ["member", "admin"],                                                                                   // 39
    optional: true,                                                                                                    // 40
    autoform: {                                                                                                        // 41
      omit: true // never show this                                                                                    // 42
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    The timestamp of comment creation                                                                                  //
  */                                                                                                                   //
  createdAt: {                                                                                                         // 48
    type: Date,                                                                                                        // 49
    optional: true                                                                                                     // 50
  },                                                                                                                   //
  /**                                                                                                                  //
    The timestamp of the comment being posted. For now, comments are always created and posted at the same time        //
  */                                                                                                                   //
  postedAt: {                                                                                                          // 55
    type: Date,                                                                                                        // 56
    optional: true                                                                                                     // 57
  },                                                                                                                   //
  /**                                                                                                                  //
    The comment body (Markdown)                                                                                        //
  */                                                                                                                   //
  body: {                                                                                                              // 62
    type: String,                                                                                                      // 63
    max: 3000,                                                                                                         // 64
    editableBy: ["member", "admin"],                                                                                   // 65
    autoform: {                                                                                                        // 66
      rows: 5,                                                                                                         // 67
      afFormGroup: {                                                                                                   // 68
        'formgroup-class': 'hide-label'                                                                                // 69
      }                                                                                                                //
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    The HTML version of the comment body                                                                               //
  */                                                                                                                   //
  htmlBody: {                                                                                                          // 76
    type: String,                                                                                                      // 77
    optional: true                                                                                                     // 78
  },                                                                                                                   //
  /**                                                                                                                  //
    The comment's base score (doesn't factor in comment age)                                                           //
  */                                                                                                                   //
  baseScore: {                                                                                                         // 83
    type: Number,                                                                                                      // 84
    decimal: true,                                                                                                     // 85
    optional: true                                                                                                     // 86
  },                                                                                                                   //
  /**                                                                                                                  //
    The comment's current score (factors in comment age)                                                               //
  */                                                                                                                   //
  score: {                                                                                                             // 91
    type: Number,                                                                                                      // 92
    decimal: true,                                                                                                     // 93
    optional: true                                                                                                     // 94
  },                                                                                                                   //
  /**                                                                                                                  //
    The number of upvotes the comment has received                                                                     //
  */                                                                                                                   //
  upvotes: {                                                                                                           // 99
    type: Number,                                                                                                      // 100
    optional: true                                                                                                     // 101
  },                                                                                                                   //
  /**                                                                                                                  //
    An array containing the `_id`s of upvoters                                                                         //
  */                                                                                                                   //
  upvoters: {                                                                                                          // 106
    type: [String],                                                                                                    // 107
    optional: true                                                                                                     // 108
  },                                                                                                                   //
  /**                                                                                                                  //
    The number of downvotes the comment has received                                                                   //
  */                                                                                                                   //
  downvotes: {                                                                                                         // 113
    type: Number,                                                                                                      // 114
    optional: true                                                                                                     // 115
  },                                                                                                                   //
  /**                                                                                                                  //
    An array containing the `_id`s of downvoters                                                                       //
  */                                                                                                                   //
  downvoters: {                                                                                                        // 120
    type: [String],                                                                                                    // 121
    optional: true                                                                                                     // 122
  },                                                                                                                   //
  /**                                                                                                                  //
    The comment author's name                                                                                          //
  */                                                                                                                   //
  author: {                                                                                                            // 127
    type: String,                                                                                                      // 128
    optional: true                                                                                                     // 129
  },                                                                                                                   //
  /**                                                                                                                  //
    Whether the comment is inactive. Inactive comments' scores gets recalculated less often                            //
  */                                                                                                                   //
  inactive: {                                                                                                          // 134
    type: Boolean,                                                                                                     // 135
    optional: true                                                                                                     // 136
  },                                                                                                                   //
  /**                                                                                                                  //
    The post's `_id`                                                                                                   //
  */                                                                                                                   //
  postId: {                                                                                                            // 141
    type: String,                                                                                                      // 142
    optional: true,                                                                                                    // 143
    // regEx: SimpleSchema.RegEx.Id,                                                                                   //
    max: 500,                                                                                                          // 145
    editableBy: ["member", "admin"], // TODO: should users be able to set postId, but not modify it?                   // 146
    autoform: {                                                                                                        // 147
      omit: true // never show this                                                                                    // 148
    }                                                                                                                  //
  },                                                                                                                   //
  /**                                                                                                                  //
    The comment author's `_id`                                                                                         //
  */                                                                                                                   //
  userId: {                                                                                                            // 154
    type: String,                                                                                                      // 155
    optional: true                                                                                                     // 156
  },                                                                                                                   //
  /**                                                                                                                  //
    Whether the comment is deleted. Delete comments' content doesn't appear on the site.                               //
  */                                                                                                                   //
  isDeleted: {                                                                                                         // 161
    type: Boolean,                                                                                                     // 162
    optional: true                                                                                                     // 163
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 167
  // needs to happen after every fields are added                                                                      //
  Comments.internationalize();                                                                                         // 169
});                                                                                                                    //
                                                                                                                       //
Comments.attachSchema(Comments.schema);                                                                                // 172
                                                                                                                       //
Comments.allow({                                                                                                       // 174
  update: _.partial(Telescope.allowCheck, Comments),                                                                   // 175
  remove: _.partial(Telescope.allowCheck, Comments)                                                                    // 176
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/methods.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
// ------------------------------------------------------------------------------------------- //                      //
// -------------------------------------- Submit Comment ------------------------------------- //                      //
// ------------------------------------------------------------------------------------------- //                      //
                                                                                                                       //
Comments.submit = function (comment) {                                                                                 // 6
                                                                                                                       //
  var userId = comment.userId; // at this stage, a userId is expected                                                  // 8
                                                                                                                       //
  // ------------------------------ Checks ------------------------------ //                                           //
                                                                                                                       //
  // Don't allow empty comments                                                                                        //
  if (!comment.body) throw new Meteor.Error(704, i18n.t('your_comment_is_empty'));                                     // 13
                                                                                                                       //
  // ------------------------------ Properties ------------------------------ //                                       //
                                                                                                                       //
  var defaultProperties = {                                                                                            // 18
    createdAt: new Date(),                                                                                             // 19
    postedAt: new Date(),                                                                                              // 20
    upvotes: 0,                                                                                                        // 21
    downvotes: 0,                                                                                                      // 22
    baseScore: 0,                                                                                                      // 23
    score: 0,                                                                                                          // 24
    author: Users.getDisplayNameById(userId)                                                                           // 25
  };                                                                                                                   //
                                                                                                                       //
  comment = _.extend(defaultProperties, comment);                                                                      // 28
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  // run all post submit server callbacks on comment object successively                                               //
  comment = Telescope.callbacks.run("commentSubmit", comment);                                                         // 33
                                                                                                                       //
  // -------------------------------- Insert -------------------------------- //                                       //
                                                                                                                       //
  comment._id = Comments.insert(comment);                                                                              // 37
                                                                                                                       //
  // --------------------- Server-side Async Callbacks --------------------- //                                        //
                                                                                                                       //
  // run all post submit server callbacks on comment object successively                                               //
  // note: query for comment to get fresh document with collection-hooks effects applied                               //
  Telescope.callbacks.runAsync("commentSubmitAsync", Comments.findOne(comment._id));                                   // 43
                                                                                                                       //
  return comment;                                                                                                      // 45
};                                                                                                                     //
                                                                                                                       //
Comments.edit = function (commentId, modifier, comment) {                                                              // 48
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  modifier = Telescope.callbacks.run("commentEdit", modifier, comment);                                                // 52
                                                                                                                       //
  // ------------------------------ Update ------------------------------ //                                           //
                                                                                                                       //
  Comments.update(commentId, modifier);                                                                                // 56
                                                                                                                       //
  // ------------------------------ Callbacks ------------------------------ //                                        //
                                                                                                                       //
  Telescope.callbacks.runAsync("commentEditAsync", Comments.findOne(commentId), comment);                              // 60
                                                                                                                       //
  // ------------------------------ After Update ------------------------------ //                                     //
  return Comments.findOne(commentId);                                                                                  // 63
};                                                                                                                     //
                                                                                                                       //
// ------------------------------------------------------------------------------------------- //                      //
// ----------------------------------------- Methods ----------------------------------------- //                      //
// ------------------------------------------------------------------------------------------- //                      //
                                                                                                                       //
Meteor.methods({                                                                                                       // 70
  submitComment: function (comment) {                                                                                  // 71
                                                                                                                       //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know                //
    check(comment, Comments.simpleSchema());                                                                           // 74
                                                                                                                       //
    // required properties:                                                                                            //
    // postId                                                                                                          //
    // body                                                                                                            //
                                                                                                                       //
    // optional properties:                                                                                            //
    // parentCommentId                                                                                                 //
                                                                                                                       //
    var user = Meteor.user(),                                                                                          // 83
        hasAdminRights = Users.is.admin(user),                                                                         //
        schema = Comments.simpleSchema()._schema;                                                                      //
                                                                                                                       //
    // ------------------------------ Checks ------------------------------ //                                         //
                                                                                                                       //
    // check that user can comment                                                                                     //
    if (!user || !Users.can.comment(user)) throw new Meteor.Error(i18n.t('you_need_to_login_or_be_invited_to_post_new_comments'));
                                                                                                                       //
    // ------------------------------ Rate Limiting ------------------------------ //                                  //
                                                                                                                       //
    if (!hasAdminRights) {                                                                                             // 95
                                                                                                                       //
      var timeSinceLastComment = Users.timeSinceLast(user, Comments),                                                  // 97
          commentInterval = Math.abs(parseInt(Settings.get('commentInterval', 15)));                                   //
                                                                                                                       //
      // check that user waits more than 15 seconds between comments                                                   //
      if (timeSinceLastComment < commentInterval) throw new Meteor.Error(704, i18n.t('please_wait') + (commentInterval - timeSinceLastComment) + i18n.t('seconds_before_commenting_again'));
    }                                                                                                                  //
                                                                                                                       //
    // ------------------------------ Properties ------------------------------ //                                     //
                                                                                                                       //
    // admin-only properties                                                                                           //
    // userId                                                                                                          //
                                                                                                                       //
    // clear restricted properties                                                                                     //
    _.keys(comment).forEach(function (fieldName) {                                                                     // 112
                                                                                                                       //
      var field = schema[fieldName];                                                                                   // 114
      if (!Users.can.submitField(user, field)) {                                                                       // 115
        throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);      // 116
      }                                                                                                                //
    });                                                                                                                //
                                                                                                                       //
    // if no userId has been set, default to current user id                                                           //
    if (!comment.userId) {                                                                                             // 122
      comment.userId = user._id;                                                                                       // 123
    }                                                                                                                  //
                                                                                                                       //
    return Comments.submit(comment);                                                                                   // 126
  },                                                                                                                   //
                                                                                                                       //
  editComment: function (modifier, commentId) {                                                                        // 129
                                                                                                                       //
    // checking might be redundant because SimpleSchema already enforces the schema, but you never know                //
    check(modifier, { $set: Comments.simpleSchema() });                                                                // 132
    check(commentId, String);                                                                                          // 133
                                                                                                                       //
    var user = Meteor.user(),                                                                                          // 135
        comment = Comments.findOne(commentId),                                                                         //
        schema = Comments.simpleSchema()._schema;                                                                      //
                                                                                                                       //
    // ------------------------------ Checks ------------------------------ //                                         //
                                                                                                                       //
    // check that user can edit                                                                                        //
    if (!user || !Users.can.edit(user, comment)) {                                                                     // 142
      throw new Meteor.Error(601, i18n.t('sorry_you_cannot_edit_this_comment'));                                       // 143
    }                                                                                                                  //
                                                                                                                       //
    // go over each field and throw an error if it's not editable                                                      //
    // loop over each operation ($set, $unset, etc.)                                                                   //
    _.each(modifier, function (operation) {                                                                            // 148
      // loop over each property being operated on                                                                     //
      _.keys(operation).forEach(function (fieldName) {                                                                 // 150
                                                                                                                       //
        var field = schema[fieldName];                                                                                 // 152
        if (!Users.can.editField(user, field, comment)) {                                                              // 153
          throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);    // 154
        }                                                                                                              //
      });                                                                                                              //
    });                                                                                                                //
                                                                                                                       //
    Comments.edit(commentId, modifier, comment);                                                                       // 160
  },                                                                                                                   //
                                                                                                                       //
  deleteCommentById: function (commentId) {                                                                            // 163
                                                                                                                       //
    check(commentId, String);                                                                                          // 165
                                                                                                                       //
    var comment = Comments.findOne(commentId);                                                                         // 167
    var user = Meteor.user();                                                                                          // 168
                                                                                                                       //
    if (Users.can.edit(user, comment)) {                                                                               // 170
                                                                                                                       //
      // decrement post comment count and remove user ID from post                                                     //
      Posts.update(comment.postId, {                                                                                   // 173
        $inc: { commentCount: -1 },                                                                                    // 174
        $pull: { commenters: comment.userId }                                                                          // 175
      });                                                                                                              //
                                                                                                                       //
      // decrement user comment count and remove comment ID from user                                                  //
      Meteor.users.update({ _id: comment.userId }, {                                                                   // 179
        $inc: { 'telescope.commentCount': -1 }                                                                         // 180
      });                                                                                                              //
                                                                                                                       //
      // note: should we also decrease user's comment karma ?                                                          //
      // We don't actually delete the comment to avoid losing all child comments.                                      //
      // Instead, we give it a special flag                                                                            //
      Comments.update({ _id: commentId }, { $set: {                                                                    // 186
          body: 'Deleted',                                                                                             // 187
          htmlBody: 'Deleted',                                                                                         // 188
          isDeleted: true                                                                                              // 189
        } });                                                                                                          //
    } else {                                                                                                           //
                                                                                                                       //
      Messages.flash("You don't have permission to delete this comment.", "error");                                    // 194
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/callbacks.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//////////////////////////////////////////////////////                                                                 //
// Collection Hooks                                 //                                                                 //
//////////////////////////////////////////////////////                                                                 //
                                                                                                                       //
Comments.before.insert(function (userId, doc) {                                                                        // 5
  // note: only actually sanitizes on the server                                                                       //
  doc.htmlBody = Telescope.utils.sanitize(marked(doc.body));                                                           // 7
});                                                                                                                    //
                                                                                                                       //
Comments.before.update(function (userId, doc, fieldNames, modifier) {                                                  // 10
  // if body is being modified, update htmlBody too                                                                    //
  if (Meteor.isServer && modifier.$set && modifier.$set.body) {                                                        // 12
    modifier.$set = modifier.$set || {};                                                                               // 13
    modifier.$set.htmlBody = Telescope.utils.sanitize(marked(modifier.$set.body));                                     // 14
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Disallow $rename                                                                                                    //
 */                                                                                                                    //
Comments.before.update(function (userId, doc, fieldNames, modifier) {                                                  // 21
  if (!!modifier.$rename) {                                                                                            // 22
    throw new Meteor.Error("illegal $rename operator detected!");                                                      // 23
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
//////////////////////////////////////////////////////                                                                 //
// Callbacks                                        //                                                                 //
//////////////////////////////////////////////////////                                                                 //
                                                                                                                       //
function afterCommentOperations(comment) {                                                                             // 31
                                                                                                                       //
  var userId = comment.userId;                                                                                         // 33
                                                                                                                       //
  // increment comment count                                                                                           //
  Meteor.users.update({ _id: userId }, {                                                                               // 36
    $inc: { 'telescope.commentCount': 1 }                                                                              // 37
  });                                                                                                                  //
                                                                                                                       //
  // update post                                                                                                       //
  Posts.update(comment.postId, {                                                                                       // 41
    $inc: { commentCount: 1 },                                                                                         // 42
    $set: { lastCommentedAt: new Date() },                                                                             // 43
    $addToSet: { commenters: userId }                                                                                  // 44
  });                                                                                                                  //
                                                                                                                       //
  return comment;                                                                                                      // 47
}                                                                                                                      //
Telescope.callbacks.add("commentSubmitAsync", afterCommentOperations);                                                 // 49
                                                                                                                       //
function upvoteOwnComment(comment) {                                                                                   // 51
                                                                                                                       //
  var commentAuthor = Meteor.users.findOne(comment.userId);                                                            // 53
                                                                                                                       //
  // upvote comment                                                                                                    //
  Telescope.upvoteItem(Comments, comment, commentAuthor);                                                              // 56
                                                                                                                       //
  return comment;                                                                                                      // 58
}                                                                                                                      //
Telescope.callbacks.add("commentSubmitAsync", upvoteOwnComment);                                                       // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/views.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    //
 * Comment views are filters used for subscribing to and viewing comments                                              //
 * @namespace Comments.views                                                                                           //
 */                                                                                                                    //
Comments.views = {};                                                                                                   // 5
                                                                                                                       //
/**                                                                                                                    //
 * Add a module to a comment view                                                                                      //
 * @param {string} viewName - The name of the view                                                                     //
 * @param {function} [viewFunction] - The function used to calculate query terms. Takes terms and baseParameters arguments
 */                                                                                                                    //
Comments.views.add = function (viewName, viewFunction) {                                                               // 12
  Comments.views[viewName] = viewFunction;                                                                             // 13
};                                                                                                                     //
                                                                                                                       //
// will be common to all other view unless specific properties are overwritten                                         //
Comments.views.baseParameters = {                                                                                      // 17
  options: {                                                                                                           // 18
    limit: 10                                                                                                          // 19
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Comments.views.add("postComments", function (terms) {                                                                  // 23
  return {                                                                                                             // 24
    find: { postId: terms.postId },                                                                                    // 25
    options: { limit: 0, sort: { score: -1, postedAt: -1 } }                                                           // 26
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
Comments.views.add("userComments", function (terms) {                                                                  // 30
  return {                                                                                                             // 31
    find: { userId: terms.userId },                                                                                    // 32
    options: { sort: { postedAt: -1 } }                                                                                // 33
  };                                                                                                                   //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/parameters.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Comments.parameters = {};                                                                                              // 1
                                                                                                                       //
/**                                                                                                                    //
 * Gives an object containing the appropriate find                                                                     //
 * and options arguments for the subscriptions's Comments.find()                                                       //
 * @param {Object} terms                                                                                               //
 */                                                                                                                    //
Comments.parameters.get = function (terms) {                                                                           // 8
                                                                                                                       //
  // add this to ensure all post publications pass audit-arguments-check                                               //
  check(terms, Match.Any);                                                                                             // 11
                                                                                                                       //
  // console.log(terms)                                                                                                //
                                                                                                                       //
  // note: using jquery's extend() with "deep" parameter set to true instead of shallow _.extend()                     //
  // see: http://api.jquery.com/jQuery.extend/                                                                         //
                                                                                                                       //
  // initialize parameters by extending baseParameters object, to avoid passing it by reference                        //
  var parameters = Telescope.utils.deepExtend(true, {}, Comments.views.baseParameters);                                // 19
                                                                                                                       //
  // get query parameters according to current view                                                                    //
  if (typeof Comments.views[terms.view] !== 'undefined') parameters = Telescope.utils.deepExtend(true, parameters, Comments.views[terms.view](terms));
                                                                                                                       //
  // iterate over commentsParameters callbacks                                                                         //
  parameters = Telescope.callbacks.run("commentsParameters", parameters, terms);                                       // 26
                                                                                                                       //
  // console.log(parameters);                                                                                          //
                                                                                                                       //
  return parameters;                                                                                                   // 30
};                                                                                                                     //
                                                                                                                       //
// limit the number of items that can be requested at once                                                             //
function limitComments(parameters, terms) {                                                                            // 34
  var maxLimit = 1000;                                                                                                 // 35
  // if a limit was provided with the terms, add it too (note: limit=0 means "no limit")                               //
  if (typeof terms.limit !== 'undefined') {                                                                            // 37
    _.extend(parameters.options, { limit: parseInt(terms.limit) });                                                    // 38
  }                                                                                                                    //
                                                                                                                       //
  // limit to "maxLimit" items at most when limit is undefined, equal to 0, or superior to maxLimit                    //
  if (!parameters.options.limit || parameters.options.limit === 0 || parameters.options.limit > maxLimit) {            // 42
    parameters.options.limit = maxLimit;                                                                               // 43
  }                                                                                                                    //
  return parameters;                                                                                                   // 45
}                                                                                                                      //
Telescope.callbacks.add("commentsParameters", limitComments);                                                          // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/helpers.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//////////////////                                                                                                     //
// Link Helpers //                                                                                                     //
//////////////////                                                                                                     //
                                                                                                                       //
/**                                                                                                                    //
 * Get URL of a comment page.                                                                                          //
 * @param {Object} comment                                                                                             //
 */                                                                                                                    //
Comments.getPageUrl = function (comment, isAbsolute) {                                                                 // 9
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                         // 10
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                            // 11
  return prefix + FlowRouter.path("commentPage", comment);                                                             // 12
};                                                                                                                     //
Comments.helpers({ getPageUrl: function () {                                                                           // 14
    return Comments.getPageUrl(this);                                                                                  // 14
  } });                                                                                                                //
                                                                                                                       //
///////////////////                                                                                                    //
// Other Helpers //                                                                                                    //
///////////////////                                                                                                    //
                                                                                                                       //
/**                                                                                                                    //
 * Get a comment author's name                                                                                         //
 * @param {Object} comment                                                                                             //
 */                                                                                                                    //
Comments.getAuthorName = function (comment) {                                                                          // 24
  var user = Meteor.users.findOne(comment.userId);                                                                     // 25
  if (user) {                                                                                                          // 26
    return user.getDisplayName();                                                                                      // 27
  } else {                                                                                                             //
    return comment.author;                                                                                             // 29
  }                                                                                                                    //
};                                                                                                                     //
Comments.helpers({ getAuthorName: function () {                                                                        // 32
    return Comments.getAuthorName(this);                                                                               // 32
  } });                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/routes.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/comments/:_id', {                                                                                   // 1
  name: "commentPage",                                                                                                 // 2
  action: function (params, queryParams) {                                                                             // 3
    BlazeLayout.render("layout", { main: "comment_controller", commentTemplate: "comment_reply" });                    // 4
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
FlowRouter.route('/comments/:_id/edit', {                                                                              // 8
  name: "commentEdit",                                                                                                 // 9
  action: function (params, queryParams) {                                                                             // 10
    BlazeLayout.render("layout", { main: "comment_controller", commentTemplate: "comment_edit" });                     // 11
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/template.comment_edit.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_edit");                                                                                  // 2
Template["comment_edit"] = new Template("Template.comment_edit", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "comment-edit"                                                                                            // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                        // 7
    return {                                                                                                           // 8
      check: Spacebars.call("edit"),                                                                                   // 9
      doc: Spacebars.call(view.lookup("comment")),                                                                     // 10
      message: Spacebars.call("sorry_you_cannot_edit_this_comment")                                                    // 11
    };                                                                                                                 // 12
  }, function() {                                                                                                      // 13
    return Spacebars.include(view.lookupTemplate("checker"), function() {                                              // 14
      return [ "\n\n      ", HTML.DIV({                                                                                // 15
        "class": "grid grid-module"                                                                                    // 16
      }, "\n        ", HTML.DIV({                                                                                      // 17
        "class": "comment-form"                                                                                        // 18
      }, "\n          ", Blaze._TemplateWith(function() {                                                              // 19
        return {                                                                                                       // 20
          collection: Spacebars.call("Comments"),                                                                      // 21
          doc: Spacebars.call(view.lookup("comment")),                                                                 // 22
          id: Spacebars.call("editCommentForm"),                                                                       // 23
          template: Spacebars.call("bootstrap3-horizontal"),                                                           // 24
          "label-class": Spacebars.call("control-label"),                                                              // 25
          "input-col-class": Spacebars.call("controls"),                                                               // 26
          type: Spacebars.call("method-update"),                                                                       // 27
          meteormethod: Spacebars.call("editComment"),                                                                 // 28
          fields: Spacebars.call(view.lookup("commentFields"))                                                         // 29
        };                                                                                                             // 30
      }, function() {                                                                                                  // 31
        return Spacebars.include(view.lookupTemplate("quickForm"));                                                    // 32
      }), "\n        "), "\n      "), "\n      \n      ", HTML.DIV({                                                   // 33
        "class": "grid grid-module"                                                                                    // 34
      }, "\n        ", HTML.A({                                                                                        // 35
        "class": "delete-link",                                                                                        // 36
        href: "/"                                                                                                      // 37
      }, Blaze.View("lookup:_", function() {                                                                           // 38
        return Spacebars.mustache(view.lookup("_"), "delete_comment");                                                 // 39
      })), "\n      "), "\n\n    " ];                                                                                  // 40
    });                                                                                                                // 41
  }), "\n  ");                                                                                                         // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_edit.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comment_edit.helpers({                                                                                        // 1
  commentFields: function () {                                                                                         // 2
    return Comments.simpleSchema().getEditableFields(Meteor.user());                                                   // 3
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
AutoForm.hooks({                                                                                                       // 7
  editCommentForm: {                                                                                                   // 8
                                                                                                                       //
    before: {                                                                                                          // 10
      "method-update": function () {                                                                                   // 11
                                                                                                                       //
        var comment = this.currentDoc;                                                                                 // 13
        var modifier = this.updateDoc;                                                                                 // 14
                                                                                                                       //
        // ------------------------------ Checks ------------------------------ //                                     //
                                                                                                                       //
        if (!Meteor.user()) {                                                                                          // 18
          Messages.flash(i18n.t('you_must_be_logged_in'), "");                                                         // 19
          return false;                                                                                                // 20
        }                                                                                                              //
                                                                                                                       //
        // ------------------------------ Callbacks ------------------------------ //                                  //
                                                                                                                       //
        // run all post edit client callbacks on modifier object successively                                          //
        modifier = Telescope.callbacks.run("commentEditClient", modifier, comment);                                    // 26
        return modifier;                                                                                               // 27
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    onSuccess: function (formType, comment) {                                                                          // 31
      // TODO: find out why comment is undefined here                                                                  //
      comment = this.currentDoc;                                                                                       // 33
      Events.track("edit comment", { 'commentId': comment._id });                                                      // 34
      FlowRouter.go("postPage", { _id: comment.postId });                                                              // 35
    },                                                                                                                 //
                                                                                                                       //
    onError: function (formType, error) {                                                                              // 38
      console.log(error);                                                                                              // 39
      Messages.flash(error.reason.split('|')[0], "error"); // workaround because error.details returns undefined       // 40
      Messages.clearSeen();                                                                                            // 41
    }                                                                                                                  //
                                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
// delete link                                                                                                         //
Template.comment_edit.events({                                                                                         // 48
  'click .delete-link': function (e) {                                                                                 // 49
    var comment = this.comment;                                                                                        // 50
                                                                                                                       //
    e.preventDefault();                                                                                                // 52
                                                                                                                       //
    if (confirm("Are you sure?")) {                                                                                    // 54
      FlowRouter.go("postsDefault");                                                                                   // 55
      Meteor.call("deleteCommentById", comment._id, function (error) {                                                 // 56
        if (error) {                                                                                                   // 57
          console.log(error);                                                                                          // 58
          Messages.flash(error.reason, 'error');                                                                       // 59
        } else {                                                                                                       //
          Messages.flash(i18n.t('your_comment_has_been_deleted'), 'success');                                          // 61
        }                                                                                                              //
      });                                                                                                              //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.comment_edit.onRendered(function () {                                                                         // 68
  var self = this;                                                                                                     // 69
  this.$("textarea").keydown(function (e) {                                                                            // 70
    if ((e.metaKey || e.ctrlKey) && e.keyCode == 13 || e.ctrlKey && e.keyCode == 13) {                                 // 71
      self.$('#editCommentForm').submit();                                                                             // 72
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/template.comment_submit.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_submit");                                                                                // 2
Template["comment_submit"] = new Template("Template.comment_submit", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("canComment"));                                                                  // 6
  }, function() {                                                                                                      // 7
    return [ "\n    ", HTML.DIV({                                                                                      // 8
      "class": "comment-form comment-new module"                                                                       // 9
    }, "\n      ", HTML.H4({                                                                                           // 10
      "class": "comment-new-heading"                                                                                   // 11
    }, Blaze.View("lookup:_", function() {                                                                             // 12
      return Spacebars.mustache(view.lookup("_"), "add_comment");                                                      // 13
    })), "\n      ", Blaze._TemplateWith(function() {                                                                  // 14
      return {                                                                                                         // 15
        collection: Spacebars.call("Comments"),                                                                        // 16
        id: Spacebars.call("submitCommentForm"),                                                                       // 17
        template: Spacebars.call("bootstrap3-horizontal"),                                                             // 18
        "input-col-class": Spacebars.call("controls"),                                                                 // 19
        type: Spacebars.call("method"),                                                                                // 20
        meteormethod: Spacebars.call("submitComment"),                                                                 // 21
        fields: Spacebars.call(view.lookup("commentFields")),                                                          // 22
        parentContext: Spacebars.call(view.lookup("."))                                                                // 23
      };                                                                                                               // 24
    }, function() {                                                                                                    // 25
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                      // 26
    }), "\n    "), "\n  " ];                                                                                           // 27
  }, function() {                                                                                                      // 28
    return [ "\n    ", Blaze.If(function() {                                                                           // 29
      return Spacebars.call(view.lookup("isLoggedIn"));                                                                // 30
    }, function() {                                                                                                    // 31
      return [ "\n      ", HTML.P({                                                                                    // 32
        "class": "cannot-comment-message"                                                                              // 33
      }, Blaze.View("lookup:_", function() {                                                                           // 34
        return Spacebars.mustache(view.lookup("_"), "sorry_you_do_not_have_the_rights_to_comments");                   // 35
      })), "\n    " ];                                                                                                 // 36
    }, function() {                                                                                                    // 37
      return [ "\n      ", HTML.P({                                                                                    // 38
        "class": "cannot-comment-message"                                                                              // 39
      }, HTML.A({                                                                                                      // 40
        href: function() {                                                                                             // 41
          return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                             // 42
            route: "signIn"                                                                                            // 43
          }));                                                                                                         // 44
        }                                                                                                              // 45
      }, Blaze.View("lookup:_", function() {                                                                           // 46
        return Spacebars.mustache(view.lookup("_"), "please_log_in_to_comment");                                       // 47
      }))), "\n    " ];                                                                                                // 48
    }), "\n  " ];                                                                                                      // 49
  });                                                                                                                  // 50
}));                                                                                                                   // 51
                                                                                                                       // 52
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_submit.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comment_submit.helpers({                                                                                      // 1
  commentFields: function () {                                                                                         // 2
    return Comments.simpleSchema().getEditableFields(Meteor.user());                                                   // 3
  },                                                                                                                   //
  isLoggedIn: function () {                                                                                            // 5
    return !!Meteor.user();                                                                                            // 6
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
AutoForm.hooks({                                                                                                       // 10
  submitCommentForm: {                                                                                                 // 11
                                                                                                                       //
    before: {                                                                                                          // 13
      method: function (doc) {                                                                                         // 14
                                                                                                                       //
        var comment = doc;                                                                                             // 16
                                                                                                                       //
        this.template.$('button[type=submit]').addClass('loading');                                                    // 18
        this.template.$('input, textarea').not(":disabled").addClass("disabled").prop("disabled", true);               // 19
                                                                                                                       //
        var parent = this.formAttributes.parentContext;                                                                // 21
                                                                                                                       //
        if (!!parent.comment) {                                                                                        // 23
          // child comment                                                                                             //
          var parentComment = parent.comment;                                                                          // 24
          comment.parentCommentId = parentComment._id;                                                                 // 25
          comment.postId = parentComment.postId;                                                                       // 26
                                                                                                                       //
          if (!parentComment.topLevelCommentId) {                                                                      // 28
            // root comment                                                                                            //
            comment.topLevelCommentId = parentComment._id;                                                             // 29
          } else {                                                                                                     //
            // nested comment                                                                                          //
            comment.topLevelCommentId = parentComment.topLevelCommentId;                                               // 31
          }                                                                                                            //
        } else {                                                                                                       //
          // root comment                                                                                              //
          var post = parent;                                                                                           // 34
          comment.postId = post._id;                                                                                   // 35
        }                                                                                                              //
                                                                                                                       //
        // ------------------------------ Checks ------------------------------ //                                     //
                                                                                                                       //
        if (!Meteor.user()) {                                                                                          // 40
          Messages.flash(i18n.t('you_must_be_logged_in'), 'error');                                                    // 41
          return false;                                                                                                // 42
        }                                                                                                              //
                                                                                                                       //
        // ------------------------------ Callbacks ------------------------------ //                                  //
                                                                                                                       //
        // run all comment submit client callbacks on properties object successively                                   //
        comment = Telescope.callbacks.run("commentSubmitClient", comment);                                             // 48
                                                                                                                       //
        return comment;                                                                                                // 50
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    onSuccess: function (operation, comment) {                                                                         // 54
      this.template.$('button[type=submit]').removeClass('loading');                                                   // 55
      this.template.$('.disabled').removeClass("disabled").prop("disabled", false);                                    // 56
      var post = Posts.findOne(comment.postId);                                                                        // 57
      Events.track("new comment", { 'commentId': comment._id });                                                       // 58
      FlowRouter.go('postPage', { _id: comment.postId, slug: post.slug });                                             // 59
      if (comment.status === Posts.config.STATUS_PENDING) {                                                            // 60
        Messages.flash(i18n.t('thanks_your_post_is_awaiting_approval'), 'success');                                    // 61
      }                                                                                                                //
    },                                                                                                                 //
                                                                                                                       //
    onError: function (operation, error) {                                                                             // 65
      this.template.$('button[type=submit]').removeClass('loading');                                                   // 66
      this.template.$('.disabled').removeClass("disabled").prop("disabled", false);                                    // 67
                                                                                                                       //
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined      // 69
      Messages.clearSeen();                                                                                            // 70
    }                                                                                                                  //
                                                                                                                       //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.comment_submit.onRendered(function () {                                                                       // 76
  var self = this;                                                                                                     // 77
  this.$("textarea").keydown(function (e) {                                                                            // 78
    if ((e.metaKey || e.ctrlKey) && e.keyCode == 13 || e.ctrlKey && e.keyCode == 13) {                                 // 79
      self.$('#submitCommentForm').submit();                                                                           // 80
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/template.comment_item.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_item");                                                                                  // 2
Template["comment_item"] = new Template("Template.comment_item", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    "class": function() {                                                                                              // 6
      return [ "comment module comment-displayed ", Spacebars.mustache(view.lookup("commentClass")) ];                 // 7
    },                                                                                                                 // 8
    id: function() {                                                                                                   // 9
      return Spacebars.mustache(view.lookup("_id"));                                                                   // 10
    }                                                                                                                  // 11
  }, "\n   ", HTML.DIV({                                                                                               // 12
    "class": "comment-body"                                                                                            // 13
  }, "\n      ", Blaze.If(function() {                                                                                 // 14
    return Spacebars.call(view.lookup("isDeleted"));                                                                   // 15
  }, function() {                                                                                                      // 16
    return [ "\n        ", HTML.DIV({                                                                                  // 17
      "class": "comment-deleted"                                                                                       // 18
    }, "This comment has been deleted."), "\n      " ];                                                                // 19
  }, function() {                                                                                                      // 20
    return [ "\n      ", HTML.DIV({                                                                                    // 21
      "class": "comment-content"                                                                                       // 22
    }, "\n        ", HTML.DIV({                                                                                        // 23
      "class": function() {                                                                                            // 24
        return [ "comment-actions comment-vote ", Blaze.If(function() {                                                // 25
          return Spacebars.call(view.lookup("upvoted"));                                                               // 26
        }, function() {                                                                                                // 27
          return "upvoted";                                                                                            // 28
        }, function() {                                                                                                // 29
          return "not-upvoted";                                                                                        // 30
        }), " ", Blaze.If(function() {                                                                                 // 31
          return Spacebars.call(view.lookup("downvoted"));                                                             // 32
        }, function() {                                                                                                // 33
          return "downvoted";                                                                                          // 34
        }, function() {                                                                                                // 35
          return "not-downvoted";                                                                                      // 36
        }) ];                                                                                                          // 37
      }                                                                                                                // 38
    }, "\n          ", HTML.A({                                                                                        // 39
      "class": "upvote",                                                                                               // 40
      href: "#"                                                                                                        // 41
    }, "\n            ", Blaze.View("lookup:icon", function() {                                                        // 42
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "upvote"));                                     // 43
    }), "\n            ", HTML.SPAN(Blaze.View("lookup:_", function() {                                                // 44
      return Spacebars.mustache(view.lookup("_"), "upvote");                                                           // 45
    })), "\n          "), "\n          ", HTML.A({                                                                     // 46
      "class": "downvote",                                                                                             // 47
      href: "#"                                                                                                        // 48
    }, "\n            ", Blaze.View("lookup:icon", function() {                                                        // 49
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "downvote"));                                   // 50
    }), "\n            ", HTML.SPAN(Blaze.View("lookup:_", function() {                                                // 51
      return Spacebars.mustache(view.lookup("_"), "downvote");                                                         // 52
    })), "\n          "), "\n        "), "\n        ", HTML.DIV({                                                      // 53
      "class": "comment-meta"                                                                                          // 54
    }, "\n          ", HTML.DIV({                                                                                      // 55
      "class": "user-avatar avatar-medium",                                                                            // 56
      "aria-hidden": "true",                                                                                           // 57
      "aria-live": "off"                                                                                               // 58
    }, Blaze._TemplateWith(function() {                                                                                // 59
      return {                                                                                                         // 60
        userId: Spacebars.call(view.lookup("userId")),                                                                 // 61
        shape: Spacebars.call("circle")                                                                                // 62
      };                                                                                                               // 63
    }, function() {                                                                                                    // 64
      return Spacebars.include(view.lookupTemplate("avatar"));                                                         // 65
    })), "\n          ", HTML.A({                                                                                      // 66
      "class": "comment-username",                                                                                     // 67
      href: function() {                                                                                               // 68
        return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("userId"));                                // 69
      }                                                                                                                // 70
    }, Blaze.View("lookup:authorName", function() {                                                                    // 71
      return Spacebars.mustache(view.lookup("authorName"));                                                            // 72
    })), "\n          ", HTML.A({                                                                                      // 73
      href: function() {                                                                                               // 74
        return Spacebars.mustache(view.lookup("pathFor"), "commentPage", Spacebars.kw({                                // 75
          _id: view.lookup("_id")                                                                                      // 76
        }));                                                                                                           // 77
      },                                                                                                               // 78
      "class": "comment-permalink comment-time"                                                                        // 79
    }, Blaze.View("lookup:timeAgo", function() {                                                                       // 80
      return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("ago"));                                           // 81
    }), ","), "\n          ", HTML.SPAN({                                                                              // 82
      "class": "points"                                                                                                // 83
    }, Blaze.View("lookup:upvotes", function() {                                                                       // 84
      return Spacebars.mustache(view.lookup("upvotes"));                                                               // 85
    })), " ", HTML.SPAN({                                                                                              // 86
      "class": "unit"                                                                                                  // 87
    }, Blaze.View("lookup:pointsUnitDisplayText", function() {                                                         // 88
      return Spacebars.mustache(view.lookup("pointsUnitDisplayText"));                                                 // 89
    }), "  "), "\n          ", Blaze.If(function() {                                                                   // 90
      return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));                                         // 91
    }, function() {                                                                                                    // 92
      return [ "\n            | ", HTML.A({                                                                            // 93
        "class": "edit-link",                                                                                          // 94
        href: function() {                                                                                             // 95
          return Spacebars.mustache(view.lookup("pathFor"), "commentEdit", Spacebars.kw({                              // 96
            _id: view.lookup("_id")                                                                                    // 97
          }));                                                                                                         // 98
        }                                                                                                              // 99
      }, Blaze.View("lookup:_", function() {                                                                           // 100
        return Spacebars.mustache(view.lookup("_"), "edit");                                                           // 101
      })), "\n          " ];                                                                                           // 102
    }), "\n          ", Blaze.If(function() {                                                                          // 103
      return Spacebars.call(view.lookup("isAdmin"));                                                                   // 104
    }, function() {                                                                                                    // 105
      return [ "\n            | ", HTML.SPAN(Blaze.View("lookup:full_date", function() {                               // 106
        return Spacebars.mustache(view.lookup("full_date"));                                                           // 107
      })), "\n          " ];                                                                                           // 108
    }), "\n        "), "\n        ", HTML.DIV({                                                                        // 109
      "class": "comment-main"                                                                                          // 110
    }, " \n          ", HTML.DIV({                                                                                     // 111
      "class": "comment-text markdown"                                                                                 // 112
    }, Blaze.View("lookup:htmlBody", function() {                                                                      // 113
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));                                           // 114
    })), "\n          ", HTML.A({                                                                                      // 115
      href: function() {                                                                                               // 116
        return Spacebars.mustache(view.lookup("pathFor"), "commentPage", Spacebars.kw({                                // 117
          _id: view.lookup("_id")                                                                                      // 118
        }));                                                                                                           // 119
      },                                                                                                               // 120
      "class": "comment-reply"                                                                                         // 121
    }, Blaze.View("lookup:_", function() {                                                                             // 122
      return Spacebars.mustache(view.lookup("_"), "reply");                                                            // 123
    })), "\n        "), "\n      "), "\n      " ];                                                                     // 124
  }), "\n      ", Blaze.If(function() {                                                                                // 125
    return Spacebars.call(view.lookup("showChildComments"));                                                           // 126
  }, function() {                                                                                                      // 127
    return [ "\n        ", HTML.UL({                                                                                   // 128
      "class": function() {                                                                                            // 129
        return [ "comment-children comment-list ", Spacebars.mustache(view.lookup("commentListClass")) ];              // 130
      }                                                                                                                // 131
    }, "\n        ", Blaze.Each(function() {                                                                           // 132
      return Spacebars.call(view.lookup("childComments"));                                                             // 133
    }, function() {                                                                                                    // 134
      return [ "\n          ", Spacebars.With(function() {                                                             // 135
        return Spacebars.call(view.lookup("."));                                                                       // 136
      }, function() {                                                                                                  // 137
        return [ "\n            ", Spacebars.include(view.lookupTemplate("comment_item")), "\n          " ];           // 138
      }), "\n        " ];                                                                                              // 139
    }), "\n        "), "\n      " ];                                                                                   // 140
  }), "\n    "), "\n  ");                                                                                              // 141
}));                                                                                                                   // 142
                                                                                                                       // 143
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_item.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
findQueueContainer = function ($comment) {                                                                             // 1
  // go up and down the DOM until we find either A) a queue container or B) an unqueued comment                        //
  $up = $comment.prevAll(".queue-container, .comment-displayed").first();                                              // 3
  $down = $comment.nextAll(".queue-container, .comment-displayed").first();                                            // 4
  $prev = $comment.prev();                                                                                             // 5
  $next = $comment.next();                                                                                             // 6
  $queuedAncestors = $comment.parents(".comment-queued");                                                              // 7
  if ($queuedAncestors.exists()) {                                                                                     // 8
    // console.log("----------- case 1: Queued Ancestor -----------");                                                 //
    // 1.                                                                                                              //
    // our comment has one or more queued ancestor, so we look for the root-most                                       //
    // ancestor's queue container                                                                                      //
    $container = $queuedAncestors.last().data("queue");                                                                // 13
  } else if ($prev.hasClass("queue-container")) {                                                                      //
    // console.log("----------- case 2: Queued Brother -----------");                                                  //
    // 2.                                                                                                              //
    // the comment just above is queued, so we use the same queue container as him                                     //
    $container = $prev.data("queue");                                                                                  // 18
  } else if ($prev.find(".comment").last().hasClass("comment-queued")) {                                               //
    // console.log("----------- case 3: Queued Cousin -----------");                                                   //
    // 3.                                                                                                              //
    // there are no queued comments going up on the same level,                                                        //
    // but the bottom-most child of the comment directly above is queued                                               //
    $container = $prev.find(".comment").last().data("queue");                                                          // 24
  } else if ($down.hasClass("queue-container")) {                                                                      //
    // console.log("----------- case 4: Queued Sister -----------");                                                   //
    // 3.                                                                                                              //
    // the comment just below is queued, so we use the same queue container as him                                     //
    $container = $next.data("queue");                                                                                  // 29
  } else if ($up.hasClass('comment-displayed') || !$up.exists()) {                                                     //
    // console.log("----------- case 5: No Queue -----------");                                                        //
    // 4.                                                                                                              //
    // we've found containers neither above or below, but                                                              //
    // A) we've hit a displayed comment or                                                                             //
    // B) we've haven't found any comments (i.e. we're at the beginning of the list)                                   //
    // so we put our queue container just before the comment                                                           //
    $container = $('<div class="queue-container"><ul></ul></div>').insertBefore($comment);                             // 37
    $container.click(function (e) {                                                                                    // 38
      e.preventDefault();                                                                                              // 39
      var links = $(this).find("a");                                                                                   // 40
      links.each(function () {                                                                                         // 41
        var target = $(this).attr("href");                                                                             // 42
        $(target).removeClass("comment-queued").addClass("comment-displayed");                                         // 43
        // add comment ID to global array to avoid queuing it again                                                    //
        window.openedComments.push(target.substr(1));                                                                  // 45
      });                                                                                                              //
      // Telescope.utils.scrollPageTo(links.first().attr("href"));                                                     //
      $(this).hide("slow").remove();                                                                                   // 48
    });                                                                                                                //
  }                                                                                                                    //
  // console.log("comment", $comment);                                                                                 //
  // console.log("up", $up);                                                                                           //
  // console.log("down", $down);                                                                                       //
  // console.log("queuedAncestors", $queuedAncestors);                                                                 //
  // console.log("container", $container);                                                                             //
  return $container;                                                                                                   // 56
};                                                                                                                     //
                                                                                                                       //
Template.comment_item.created = function () {                                                                          // 59
  // if comments are supposed to be queued, then queue this comment on create                                          //
  this.isQueued = window.queueComments;                                                                                // 61
  window.openedComments = [];                                                                                          // 62
};                                                                                                                     //
                                                                                                                       //
Template.comment_item.helpers({                                                                                        // 65
  commentClass: function () {                                                                                          // 66
    // if this comment was made by the post author                                                                     //
    if (Posts.findOne(this.postId).userId == this.userId) {                                                            // 68
      return 'author-comment';                                                                                         // 69
    }                                                                                                                  //
  },                                                                                                                   //
  full_date: function () {                                                                                             // 72
    return this.createdAt.toString();                                                                                  // 73
  },                                                                                                                   //
  commentListClass: function () {                                                                                      // 75
    return !!Comments.find({ parentCommentId: this._id }).count() ? "has-comments" : "no-comments";                    // 76
  },                                                                                                                   //
  childComments: function () {                                                                                         // 78
    // return only child comments                                                                                      //
    return Comments.find({ parentCommentId: this._id });                                                               // 80
  },                                                                                                                   //
  author: function () {                                                                                                // 82
    return Meteor.users.findOne(this.userId);                                                                          // 83
  },                                                                                                                   //
  authorName: function () {                                                                                            // 85
    var user = Meteor.users.findOne(this.userId);                                                                      // 86
    return Users.getDisplayName(user);                                                                                 // 87
  },                                                                                                                   //
  showChildComments: function () {                                                                                     // 89
    // TODO: fix this                                                                                                  //
    // return Session.get('showChildComments');                                                                        //
    return true;                                                                                                       // 92
  },                                                                                                                   //
  ago: function () {                                                                                                   // 94
    return this.createdAt;                                                                                             // 95
  },                                                                                                                   //
  upvoted: function () {                                                                                               // 97
    return Meteor.user() && _.include(this.upvoters, Meteor.user()._id);                                               // 98
  },                                                                                                                   //
  downvoted: function () {                                                                                             // 100
    return Meteor.user() && _.include(this.downvoters, Meteor.user()._id);                                             // 101
  },                                                                                                                   //
  pointsUnitDisplayText: function () {                                                                                 // 103
    return this.upvotes === 1 ? i18n.t('point') : i18n.t('points');                                                    // 104
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
var handleVoteClick = function (meteorMethodName, eventName, e, instance) {                                            // 108
  e.preventDefault();                                                                                                  // 109
  e.stopImmediatePropagation(); // needed to prevent the handler running multiple times in nested comments             // 110
  if (!Meteor.user()) {                                                                                                // 111
    FlowRouter.go("atSignIn");                                                                                         // 112
    Messages.flash(i18n.t('please_log_in_first'), 'info');                                                             // 113
  } else {                                                                                                             //
    Meteor.call(meteorMethodName, this._id, function (error, result) {                                                 // 115
      Events.track(eventName, {                                                                                        // 116
        'commentId': instance.data._id,                                                                                // 117
        'postId': instance.data.post,                                                                                  // 118
        'authorId': instance.data.userId                                                                               // 119
      });                                                                                                              //
    });                                                                                                                //
  }                                                                                                                    //
};                                                                                                                     //
                                                                                                                       //
Template.comment_item.events({                                                                                         // 125
  'click .not-upvoted .upvote': _.partial(handleVoteClick, 'upvoteComment', 'post upvoted'),                           // 126
  'click .upvoted .upvote': _.partial(handleVoteClick, 'cancelUpvoteComment', 'post upvote cancelled'),                // 127
  'click .not-downvoted .downvote': _.partial(handleVoteClick, 'downvoteComment', 'post downvoted'),                   // 128
  'click .downvoted .downvote': _.partial(handleVoteClick, 'cancelDownvoteComment', 'post downvote cancelled')         // 129
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/template.comment_list.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_list");                                                                                  // 2
Template["comment_list"] = new Template("Template.comment_list", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.UL({                                                                                                   // 5
    "class": function() {                                                                                              // 6
      return [ "comments comment-list ", Spacebars.mustache(view.lookup("commentListClass")) ];                        // 7
    },                                                                                                                 // 8
    "aria-live": "polite"                                                                                              // 9
  }, "\n    ", Blaze.Each(function() {                                                                                 // 10
    return Spacebars.call(view.lookup("childComments"));                                                               // 11
  }, function() {                                                                                                      // 12
    return [ "\n      ", Spacebars.include(view.lookupTemplate("comment_item")), "\n    " ];                           // 13
  }), "\n  "), "\n  ", Blaze._TemplateWith(function() {                                                                // 14
    return {                                                                                                           // 15
      zone: Spacebars.call("commentThreadBottom"),                                                                     // 16
      moduleData: Spacebars.call(view.lookup("."))                                                                     // 17
    };                                                                                                                 // 18
  }, function() {                                                                                                      // 19
    return Spacebars.include(view.lookupTemplate("modules"));                                                          // 20
  }) ];                                                                                                                // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_list.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comment_list.helpers({                                                                                        // 1
  commentListClass: function () {                                                                                      // 2
    var post = this;                                                                                                   // 3
    var comments = Comments.find({ postId: post._id, parentCommentId: null }, { sort: { score: -1, postedAt: -1 } });  // 4
    return !!comments.count() ? "has-comments" : "no-comments";                                                        // 5
  },                                                                                                                   //
  childComments: function () {                                                                                         // 7
    var post = this;                                                                                                   // 8
    var comments = Comments.find({ postId: post._id, parentCommentId: null }, { sort: { score: -1, postedAt: -1 } });  // 9
    return comments;                                                                                                   // 10
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.comment_list.rendered = function () {                                                                         // 14
  // once all comments have been rendered, activate comment queuing for future real-time comments                      //
  window.queueComments = true;                                                                                         // 16
};                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/template.comment_reply.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_reply");                                                                                 // 2
Template["comment_reply"] = new Template("Template.comment_reply", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "grid comment-page single-post"                                                                           // 6
  }, "\n    \n    ", Spacebars.With(function() {                                                                       // 7
    return Spacebars.call(view.lookup("post"));                                                                        // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.DIV({                                                                                    // 10
      "class": "posts posts-list"                                                                                      // 11
    }, "\n        ", Blaze._TemplateWith(function() {                                                                  // 12
      return {                                                                                                         // 13
        post: Spacebars.call(view.lookup("."))                                                                         // 14
      };                                                                                                               // 15
    }, function() {                                                                                                    // 16
      return Spacebars.include(view.lookupTemplate("post_item"));                                                      // 17
    }), "\n      "), "\n    " ];                                                                                       // 18
  }), "\n\n    ", Spacebars.With(function() {                                                                          // 19
    return Spacebars.call(view.lookup("comment"));                                                                     // 20
  }, function() {                                                                                                      // 21
    return [ "\n      ", HTML.UL({                                                                                     // 22
      "class": "selected-comment",                                                                                     // 23
      "aria-live": "polite"                                                                                            // 24
    }, "\n       ", Spacebars.include(view.lookupTemplate("comment_item")), "\n      "), "\n    " ];                   // 25
  }), "\n\n    ", Blaze.If(function() {                                                                                // 26
    return Spacebars.call(view.lookup("canComment"));                                                                  // 27
  }, function() {                                                                                                      // 28
    return [ "\n      ", Spacebars.include(view.lookupTemplate("comment_submit")), "\n    " ];                         // 29
  }), "\n\n    ", Blaze.If(function() {                                                                                // 30
    return Spacebars.call(view.lookup("isLoggedIn"));                                                                  // 31
  }, function() {                                                                                                      // 32
    return "\n    ";                                                                                                   // 33
  }, function() {                                                                                                      // 34
    return [ "\n      ", HTML.P(HTML.A({                                                                               // 35
      href: "/sign-in"                                                                                                 // 36
    }, Blaze.View("lookup:_", function() {                                                                             // 37
      return Spacebars.mustache(view.lookup("_"), "please_sign_in_to_reply");                                          // 38
    }))), "\n    " ];                                                                                                  // 39
  }), "\n  ");                                                                                                         // 40
}));                                                                                                                   // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_reply.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comment_reply.helpers({                                                                                       // 1
  post: function () {                                                                                                  // 2
    if (this.comment) {                                                                                                // 3
      var post = Posts.findOne(this.comment.postId);                                                                   // 4
      return post;                                                                                                     // 5
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comments_list/comments_list.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comments_list/template.comments_list_compact.js                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comments_list_compact");                                                                         // 2
Template["comments_list_compact"] = new Template("Template.comments_list_compact", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.TABLE("\n    ", HTML.THEAD("\n      ", HTML.TR("\n        ", HTML.TD(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "post");                                                               // 6
  })), "\n        ", HTML.TD(Blaze.View("lookup:_", function() {                                                       // 7
    return Spacebars.mustache(view.lookup("_"), "comment");                                                            // 8
  })), "\n        ", HTML.TD(Blaze.View("lookup:fieldLabel", function() {                                              // 9
    return Spacebars.mustache(view.lookup("fieldLabel"));                                                              // 10
  })), "\n      "), "\n    "), "\n    ", Blaze.Each(function() {                                                       // 11
    return Spacebars.call(view.lookup("commentsCursor"));                                                              // 12
  }, function() {                                                                                                      // 13
    return [ "\n      ", HTML.TR("\n        ", HTML.TD(HTML.A({                                                        // 14
      href: function() {                                                                                               // 15
        return [ Spacebars.mustache(view.lookup("pathFor"), "postPage", Spacebars.kw({                                 // 16
          _id: view.lookup("postId")                                                                                   // 17
        })), "/" ];                                                                                                    // 18
      }                                                                                                                // 19
    }, Blaze.View("lookup:postTitle", function() {                                                                     // 20
      return Spacebars.mustache(view.lookup("postTitle"));                                                             // 21
    }))), "\n        ", HTML.TD(Blaze.View("lookup:htmlBody", function() {                                             // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("htmlBody")));                                           // 23
    })), "\n        ", HTML.TD(Blaze.View("lookup:fieldValue", function() {                                            // 24
      return Spacebars.mustache(view.lookup("fieldValue"));                                                            // 25
    })), "\n      "), "\n    " ];                                                                                      // 26
  }), "\n    ", Blaze.If(function() {                                                                                  // 27
    return Spacebars.call(view.lookup("hasMoreComments"));                                                             // 28
  }, function() {                                                                                                      // 29
    return [ "\n      ", HTML.TR("\n        ", HTML.TD({                                                               // 30
      colspan: "2"                                                                                                     // 31
    }, "\n          ", HTML.A({                                                                                        // 32
      "class": "more-button grid-module",                                                                              // 33
      href: "#"                                                                                                        // 34
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 35
      return Spacebars.mustache(view.lookup("_"), "load_more");                                                        // 36
    }))), "\n        "), "\n      "), "\n    " ];                                                                      // 37
  }), "\n  ");                                                                                                         // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comments_list/comments_list_compact.js                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comments_list_compact.helpers({                                                                               // 1
  commentsCursor: function () {                                                                                        // 2
    if (this.commentsCursor) {                                                                                         // 3
      // not sure why this should ever be undefined, but it can apparently                                             //
      var comments = this.commentsCursor.map(function (comment, index) {                                               // 4
        comment.rank = index;                                                                                          // 5
        return comment;                                                                                                // 6
      });                                                                                                              //
      return comments;                                                                                                 // 8
    } else {                                                                                                           //
      console.log('commentsCursor not defined');                                                                       // 10
    }                                                                                                                  //
  },                                                                                                                   //
  postTitle: function () {                                                                                             // 13
    var post = Posts.findOne(this.postId);                                                                             // 14
    return !!post && post.title;                                                                                       // 15
  },                                                                                                                   //
  fieldLabel: function () {                                                                                            // 17
    return this.controllerOptions.fieldLabel;                                                                          // 18
  },                                                                                                                   //
  fieldValue: function () {                                                                                            // 20
    var controllerOptions = Template.parentData(3).data.controllerOptions;                                             // 21
    return controllerOptions.fieldValue(this);                                                                         // 22
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.comments_list_compact.events({                                                                                // 26
  'click .more-button': function (event) {                                                                             // 27
    event.preventDefault();                                                                                            // 28
    if (this.controllerInstance) {                                                                                     // 29
      // controller is a template                                                                                      //
      this.loadMoreHandler(this.controllerInstance);                                                                   // 31
    } else {                                                                                                           //
      // controller is router                                                                                          //
      this.loadMoreHandler();                                                                                          // 34
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comments_list/template.comments_list_controller.js                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("commentsListController");                                                                        // 2
Template["commentsListController"] = new Template("Template.commentsListController", (function() {                     // 3
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
// packages/telescope_comments/lib/client/templates/comments_list/comments_list_controller.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// see https://www.discovermeteor.com/blog/template-level-subscriptions/                                               //
                                                                                                                       //
/*                                                                                                                     //
                                                                                                                       //
This template acts as the controller that sets and manages the reactive context                                        //
for the embedded commentsList template. It receives its parameters from a "caller" template.                           //
                                                                                                                       //
*/                                                                                                                     //
                                                                                                                       //
Template.commentsListController.onCreated(function () {                                                                // 10
                                                                                                                       //
  // 1. Initialization (*not* reactive!)                                                                               //
  var instance = this;                                                                                                 // 13
                                                                                                                       //
  // initialize the reactive variables                                                                                 //
  instance.terms = new ReactiveVar(instance.data.terms);                                                               // 16
  instance.commentsLimit = new ReactiveVar(Settings.get('commentsPerPage', 5));                                        // 17
                                                                                                                       //
  // 2. Autorun                                                                                                        //
                                                                                                                       //
  // Autorun 1: when terms change, reset the limit                                                                     //
  instance.autorun(function () {                                                                                       // 22
    // add a dependency on data context to trigger the autorun                                                         //
    var terms = Template.currentData().terms; // ⚡ reactive ⚡                                                          // 24
    instance.commentsLimit.set(Settings.get('commentsPerPage', 5));                                                    // 25
  });                                                                                                                  //
                                                                                                                       //
  // Autorun 2: will re-run when limit or terms are changed                                                            //
  instance.autorun(function () {                                                                                       // 29
                                                                                                                       //
    // get terms from data context                                                                                     //
    var terms = Template.currentData().terms; // ⚡ reactive ⚡                                                          // 32
                                                                                                                       //
    // get limit from local template variable                                                                          //
    var commentsLimit = instance.commentsLimit.get(); // ⚡ reactive ⚡                                                  // 35
                                                                                                                       //
    // create new subscriptionTerms object using the new limit                                                         //
    var subscriptionTerms = _.extend(_.clone(terms), { limit: commentsLimit }); // extend terms with limit             // 38
                                                                                                                       //
    // use this new object to subscribe                                                                                //
    var commentsSubscription = instance.subscribe('commentsList', subscriptionTerms);                                  // 41
                                                                                                                       //
    var subscriptionsReady = instance.subscriptionsReady(); // ⚡ reactive ⚡                                            // 43
                                                                                                                       //
    // console.log('// ------ autorun running ------ //');                                                             //
    // console.log("terms: ", terms);                                                                                  //
    // console.log("limit: ", commentsLimit);                                                                          //
    // console.log("ready: ", subscriptionsReady);                                                                     //
    // Tracker.onInvalidate(console.trace.bind(console));                                                              //
                                                                                                                       //
    // if subscriptions are ready, set terms to subscriptionsTerms                                                     //
    if (subscriptionsReady) {                                                                                          // 52
      instance.terms.set(subscriptionTerms);                                                                           // 53
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
                                                                                                                       //
Template.commentsListController.helpers({                                                                              // 60
  template: function () {                                                                                              // 61
    return !!this.template ? this.template : "comments_list";                                                          // 62
  },                                                                                                                   //
  data: function () {                                                                                                  // 64
                                                                                                                       //
    var context = this;                                                                                                // 66
                                                                                                                       //
    var instance = Template.instance();                                                                                // 68
                                                                                                                       //
    var terms = instance.terms.get(); // ⚡ reactive ⚡                                                                  // 70
    var commentsReady = instance.subscriptionsReady(); // ⚡ reactive ⚡                                                 // 71
                                                                                                                       //
    var commentsLimit = terms.limit;                                                                                   // 73
    var parameters = Comments.parameters.get(terms);                                                                   // 74
    var commentsCursor = Comments.find(parameters.find, parameters.options);                                           // 75
                                                                                                                       //
    var data = {                                                                                                       // 77
                                                                                                                       //
      // comments cursor                                                                                               //
      commentsCursor: commentsCursor,                                                                                  // 80
                                                                                                                       //
      // comments subscription readiness, used to show spinner                                                         //
      commentsReady: commentsReady,                                                                                    // 83
                                                                                                                       //
      // whether to show the load more button or not                                                                   //
      hasMorecomments: commentsCursor.count() >= commentsLimit,                                                        // 86
                                                                                                                       //
      // what to do when user clicks "load more"                                                                       //
      loadMoreHandler: function (instance) {                                                                           // 89
        event.preventDefault();                                                                                        // 90
                                                                                                                       //
        // increase limit by 5 and update it                                                                           //
        var limit = instance.commentsLimit.get();                                                                      // 93
        limit += Settings.get('commentsPerPage', 5);                                                                   // 94
        instance.commentsLimit.set(limit);                                                                             // 95
      },                                                                                                               //
                                                                                                                       //
      // the current instance                                                                                          //
      controllerInstance: instance,                                                                                    // 100
                                                                                                                       //
      controllerOptions: context.options // pass any options on to the template                                        // 102
                                                                                                                       //
    };                                                                                                                 //
                                                                                                                       //
    // console.log(data)                                                                                               //
    return data;                                                                                                       // 107
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_controller/template.comment_controller.js                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("comment_controller");                                                                            // 2
Template["comment_controller"] = new Template("Template.comment_controller", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return {                                                                                                           // 6
      ready: Spacebars.call(view.templateInstance().subscriptionsReady())                                              // 7
    };                                                                                                                 // 8
  }, function() {                                                                                                      // 9
    return Spacebars.include(view.lookupTemplate("loader"), function() {                                               // 10
      return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 11
        return {                                                                                                       // 12
          template: Spacebars.call(view.lookup("commentTemplate")),                                                    // 13
          data: Spacebars.call(view.lookup("data"))                                                                    // 14
        };                                                                                                             // 15
      }, function() {                                                                                                  // 16
        return Spacebars.include(function() {                                                                          // 17
          return Spacebars.call(Template.__dynamic);                                                                   // 18
        });                                                                                                            // 19
      }), "\n  " ];                                                                                                    // 20
    });                                                                                                                // 21
  });                                                                                                                  // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/lib/client/templates/comment_controller/comment_controller.js                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.comment_controller.onCreated(function () {                                                                    // 1
                                                                                                                       //
  var template = this;                                                                                                 // 3
  var commentId = FlowRouter.getParam("_id");                                                                          // 4
                                                                                                                       //
  template.subscribe('singleCommentAndChildren', commentId);                                                           // 6
                                                                                                                       //
  if (FlowRouter.getRouteName() === "commentPage") {                                                                   // 8
    template.subscribe('commentUsers', commentId);                                                                     // 9
    template.subscribe('commentPost', commentId);                                                                      // 10
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.comment_controller.helpers({                                                                                  // 15
  data: function () {                                                                                                  // 16
    return { comment: Comments.findOne(FlowRouter.getParam("_id")) };                                                  // 17
  }                                                                                                                    //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/packages/telescope_commentsi18n/ar.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/bg.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/cs.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/da.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/de.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/el.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/en.i18n.js                                              //
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
translations[namespace] = {"sorry_you_cannot_edit_this_comment":"Sorry, you cannot edit this comment.","your_comment_has_been_deleted":"Your comment has been deleted.","comment_":"Comment","delete_comment":"Delete Comment","add_comment":"Add Comment","upvote":"upvote","downvote":"downvote","link":"link","edit":"Edit","reply":"Reply","no_comments":"No comments.","please_sign_in_to_reply":"Please sign in to reply"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_comments/packages/telescope_commentsi18n/es.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/et.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/fr.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/hu.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/id.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/it.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/ja.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/kk.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/ko.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/nl.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/pl.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/pt-BR.i18n.js                                           //
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
// packages/telescope_comments/packages/telescope_commentsi18n/ro.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/ru.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/sl.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/sv.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/th.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/tr.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/vi.i18n.js                                              //
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
// packages/telescope_comments/packages/telescope_commentsi18n/zh-CN.i18n.js                                           //
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
Package['telescope:comments'] = {
  Comments: Comments
};

})();
