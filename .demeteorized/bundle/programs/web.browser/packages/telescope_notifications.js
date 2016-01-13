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
var Herald = Package['kestanous:herald'].Herald;
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
var __, registerI18nTemplate, registerTemplate, non_package_templates, translations, Herald;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/herald.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// send emails every second when in dev environment                                                                  //
if (Meteor.absoluteUrl().indexOf('localhost') !== -1) Herald.settings.queueTimer = 1000;                             // 2
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 5
                                                                                                                     //
  Herald.collection.deny({                                                                                           // 7
    update: function () {                                                                                            // 8
      return !Users.can.editById;                                                                                    // 8
    },                                                                                                               //
    remove: function () {                                                                                            // 9
      return !Users.can.editById;                                                                                    // 9
    }                                                                                                                //
  });                                                                                                                //
                                                                                                                     //
  // disable all email notifications when "emailNotifications" is set to false                                       //
  Herald.settings.overrides.email = !Settings.get('emailNotifications', true);                                       // 13
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/helpers.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * Use user and post properties to populate post notifications objects.                                              //
 * @param {Object} post                                                                                              //
 */                                                                                                                  //
Posts.getNotificationProperties = function (post) {                                                                  // 5
  var postAuthor = Meteor.users.findOne(post.userId);                                                                // 6
  var properties = {                                                                                                 // 7
    postAuthorName: Posts.getAuthorName(post),                                                                       // 8
    postTitle: Telescope.utils.cleanUp(post.title),                                                                  // 9
    profileUrl: Users.getProfileUrl(postAuthor, true),                                                               // 10
    postUrl: Posts.getPageUrl(post, true),                                                                           // 11
    thumbnailUrl: post.thumbnailUrl,                                                                                 // 12
    linkUrl: !!post.url ? Telescope.utils.getOutgoingUrl(post.url) : Posts.getPageUrl(post, true)                    // 13
  };                                                                                                                 //
                                                                                                                     //
  if (post.url) properties.url = post.url;                                                                           // 16
                                                                                                                     //
  if (post.htmlBody) properties.htmlBody = post.htmlBody;                                                            // 19
                                                                                                                     //
  return properties;                                                                                                 // 22
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * Use comment, user, and post properties to populate comment notifications objects.                                 //
 * @param {Object} comment                                                                                           //
 */                                                                                                                  //
Comments.getNotificationProperties = function (comment, post) {                                                      // 29
  var commentAuthor = Meteor.users.findOne(comment.userId);                                                          // 30
  var properties = {                                                                                                 // 31
    profileUrl: commentAuthor && commentAuthor.getProfileUrl(true),                                                  // 32
    postUrl: Posts.getPageUrl(post, true),                                                                           // 33
    authorName: Comments.getAuthorName(comment),                                                                     // 34
    postTitle: post.title,                                                                                           // 35
    htmlBody: comment.htmlBody,                                                                                      // 36
    commentUrl: Comments.getPageUrl(comment, true)                                                                   // 37
  };                                                                                                                 //
  return properties;                                                                                                 // 39
};                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/custom_fields.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Settings.addField({                                                                                                  // 1
  fieldName: 'emailNotifications',                                                                                   // 2
  fieldSchema: {                                                                                                     // 3
    type: Boolean,                                                                                                   // 4
    optional: true,                                                                                                  // 5
    defaultValue: true,                                                                                              // 6
    autoform: {                                                                                                      // 7
      group: 'notifications',                                                                                        // 8
      instructions: 'Enable email notifications for new posts and new comments (requires restart).'                  // 9
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
// make it possible to disable notifications on a per-comment basis                                                  //
Comments.addField({                                                                                                  // 15
  fieldName: 'disableNotifications',                                                                                 // 17
  fieldSchema: {                                                                                                     // 18
    type: Boolean,                                                                                                   // 19
    optional: true,                                                                                                  // 20
    autoform: {                                                                                                      // 21
      omit: true                                                                                                     // 22
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
// Add notifications options to user profile settings                                                                //
Users.addField([{                                                                                                    // 29
  fieldName: 'telescope.notifications.users',                                                                        // 31
  fieldSchema: {                                                                                                     // 32
    label: 'New users',                                                                                              // 33
    type: Boolean,                                                                                                   // 34
    optional: true,                                                                                                  // 35
    defaultValue: false,                                                                                             // 36
    editableBy: ['admin'],                                                                                           // 37
    autoform: {                                                                                                      // 38
      group: 'Email Notifications'                                                                                   // 39
    }                                                                                                                //
  }                                                                                                                  //
}, {                                                                                                                 //
  fieldName: 'telescope.notifications.posts',                                                                        // 44
  fieldSchema: {                                                                                                     // 45
    label: 'New posts',                                                                                              // 46
    type: Boolean,                                                                                                   // 47
    optional: true,                                                                                                  // 48
    defaultValue: false,                                                                                             // 49
    editableBy: ['admin', 'member'],                                                                                 // 50
    autoform: {                                                                                                      // 51
      group: 'Email Notifications'                                                                                   // 52
    }                                                                                                                //
  }                                                                                                                  //
}, {                                                                                                                 //
  fieldName: 'telescope.notifications.comments',                                                                     // 57
  fieldSchema: {                                                                                                     // 58
    label: 'Comments on my posts',                                                                                   // 59
    type: Boolean,                                                                                                   // 60
    optional: true,                                                                                                  // 61
    defaultValue: true,                                                                                              // 62
    editableBy: ['admin', 'member'],                                                                                 // 63
    autoform: {                                                                                                      // 64
      group: 'Email Notifications'                                                                                   // 65
    }                                                                                                                //
  }                                                                                                                  //
}, {                                                                                                                 //
  fieldName: 'telescope.notifications.replies',                                                                      // 70
  fieldSchema: {                                                                                                     // 71
    label: 'Replies to my comments',                                                                                 // 72
    type: Boolean,                                                                                                   // 73
    optional: true,                                                                                                  // 74
    defaultValue: true,                                                                                              // 75
    editableBy: ['admin', 'member'],                                                                                 // 76
    autoform: {                                                                                                      // 77
      group: 'Email Notifications'                                                                                   // 78
    }                                                                                                                //
  }                                                                                                                  //
}]);                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/notifications.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var notifications = {                                                                                                // 1
                                                                                                                     //
  newPost: {                                                                                                         // 3
    properties: function () {                                                                                        // 4
      return Posts.getNotificationProperties(this.data.post);                                                        // 5
    },                                                                                                               //
    subject: function () {                                                                                           // 7
      return this.postAuthorName + ' has created a new post: ' + this.postTitle;                                     // 8
    },                                                                                                               //
    emailTemplate: "emailNewPost"                                                                                    // 10
  },                                                                                                                 //
                                                                                                                     //
  newPendingPost: {                                                                                                  // 13
    properties: function () {                                                                                        // 14
      return Posts.getNotificationProperties(this.data.post);                                                        // 15
    },                                                                                                               //
    subject: function () {                                                                                           // 17
      return this.postAuthorName + ' has a new post pending approval: ' + this.postTitle;                            // 18
    },                                                                                                               //
    emailTemplate: "emailNewPendingPost"                                                                             // 20
  },                                                                                                                 //
                                                                                                                     //
  postApproved: {                                                                                                    // 23
    properties: function () {                                                                                        // 24
      return Posts.getNotificationProperties(this.data.post);                                                        // 25
    },                                                                                                               //
    subject: function () {                                                                                           // 27
      return 'Your post “' + this.postTitle + '” has been approved';                                                 // 28
    },                                                                                                               //
    emailTemplate: "emailPostApproved",                                                                              // 30
    onsiteTemplate: "notification_post_approved"                                                                     // 31
  },                                                                                                                 //
                                                                                                                     //
  newComment: {                                                                                                      // 34
    properties: function () {                                                                                        // 35
      return Comments.getNotificationProperties(this.data.comment, this.data.post);                                  // 36
    },                                                                                                               //
    subject: function () {                                                                                           // 38
      return this.authorName + ' left a new comment on your post "' + this.postTitle + '"';                          // 39
    },                                                                                                               //
    emailTemplate: "emailNewComment",                                                                                // 41
    onsiteTemplate: "notification_new_comment"                                                                       // 42
  },                                                                                                                 //
                                                                                                                     //
  newReply: {                                                                                                        // 45
    properties: function () {                                                                                        // 46
      return Comments.getNotificationProperties(this.data.comment, this.data.post);                                  // 47
    },                                                                                                               //
    subject: function () {                                                                                           // 49
      return this.authorName + ' replied to your comment on "' + this.postTitle + '"';                               // 50
    },                                                                                                               //
    emailTemplate: "emailNewReply",                                                                                  // 52
    onsiteTemplate: "notification_new_reply"                                                                         // 53
  },                                                                                                                 //
                                                                                                                     //
  newCommentSubscribed: {                                                                                            // 56
    properties: function () {                                                                                        // 57
      return Comments.getNotificationProperties(this.data.comment, this.data.post);                                  // 58
    },                                                                                                               //
    subject: function () {                                                                                           // 60
      return this.authorName + ' left a new comment on "' + this.postTitle + '"';                                    // 61
    },                                                                                                               //
    emailTemplate: "notification_new_comment",                                                                       // 63
    onsite: "notification_new_comment"                                                                               // 64
  }                                                                                                                  //
                                                                                                                     //
};                                                                                                                   //
                                                                                                                     //
// set up couriers                                                                                                   //
_.each(notifications, function (notification, notificationName) {                                                    // 70
                                                                                                                     //
  var courier = {                                                                                                    // 72
    media: {                                                                                                         // 73
      email: {                                                                                                       // 74
        emailRunner: function (user) {                                                                               // 75
          var properties = notification.properties.call(this);                                                       // 76
          var subject = notification.subject.call(properties);                                                       // 77
          var html = Telescope.email.buildTemplate(Telescope.email.getTemplate(notification.emailTemplate)(properties));
          Telescope.email.send(Users.getEmail(user), subject, html);                                                 // 79
        }                                                                                                            //
      }                                                                                                              //
    }                                                                                                                //
  };                                                                                                                 //
                                                                                                                     //
  if (!!notification.onsiteTemplate) {                                                                               // 85
    courier.media.onsite = {};                                                                                       // 86
    courier.message = function () {                                                                                  // 87
      var properties = notification.properties.call(this);                                                           // 88
      return Blaze.toHTML(Blaze.With(properties, function () {                                                       // 89
        return Template[notification.onsiteTemplate];                                                                // 90
      }));                                                                                                           //
    };                                                                                                               //
  }                                                                                                                  //
                                                                                                                     //
  Herald.addCourier(notificationName, courier);                                                                      // 95
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/callbacks.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
// ------------------------------------------------------------------------------------------- //                    //
// -----------------------------------------  Posts ------------------------------------------ //                    //
// ------------------------------------------------------------------------------------------- //                    //
                                                                                                                     //
// add new post notification callback on post submit                                                                 //
function postSubmitNotification(post) {                                                                              // 6
                                                                                                                     //
  var adminIds = _.pluck(Users.adminUsers({ fields: { _id: 1 } }), '_id');                                           // 8
  var notifiedUserIds = _.pluck(Users.find({ 'telescope.notifications.posts': true }, { fields: { _id: 1 } }).fetch(), '_id');
  var notificationData = {                                                                                           // 10
    post: _.pick(post, '_id', 'userId', 'title', 'url')                                                              // 11
  };                                                                                                                 //
                                                                                                                     //
  // remove post author ID from arrays                                                                               //
  adminIds = _.without(adminIds, post.userId);                                                                       // 15
  notifiedUserIds = _.without(notifiedUserIds, post.userId);                                                         // 16
                                                                                                                     //
  if (post.status === Posts.config.STATUS_PENDING && !!adminIds.length) {                                            // 18
    // if post is pending, only notify admins                                                                        //
    Herald.createNotification(adminIds, { courier: 'newPendingPost', data: notificationData });                      // 20
  } else if (!!notifiedUserIds.length) {                                                                             //
    // if post is approved, notify everybody                                                                         //
    Herald.createNotification(notifiedUserIds, { courier: 'newPost', data: notificationData });                      // 23
  }                                                                                                                  //
}                                                                                                                    //
Telescope.callbacks.add("postSubmitAsync", postSubmitNotification);                                                  // 27
                                                                                                                     //
function postApprovedNotification(post) {                                                                            // 29
                                                                                                                     //
  var notificationData = {                                                                                           // 31
    post: _.pick(post, '_id', 'userId', 'title', 'url')                                                              // 32
  };                                                                                                                 //
                                                                                                                     //
  Herald.createNotification(post.userId, { courier: 'postApproved', data: notificationData });                       // 35
}                                                                                                                    //
Telescope.callbacks.add("postApproveAsync", postApprovedNotification);                                               // 37
                                                                                                                     //
// ------------------------------------------------------------------------------------------- //                    //
// ---------------------------------------- Comments ----------------------------------------- //                    //
// ------------------------------------------------------------------------------------------- //                    //
                                                                                                                     //
// add new comment notification callback on comment submit                                                           //
function commentSubmitNotifications(comment) {                                                                       // 44
                                                                                                                     //
  // note: dummy content has disableNotifications set to true                                                        //
  if (Meteor.isServer && !comment.disableNotifications) {                                                            // 47
                                                                                                                     //
    var post = Posts.findOne(comment.postId),                                                                        // 49
        postAuthor = Users.findOne(post.userId),                                                                     //
        userIdsNotified = [],                                                                                        //
        notificationData = {                                                                                         //
      comment: _.pick(comment, '_id', 'userId', 'author', 'htmlBody'),                                               // 53
      post: _.pick(post, '_id', 'userId', 'title', 'url')                                                            // 54
    };                                                                                                               //
                                                                                                                     //
    // 1. Notify author of post (if they have new comment notifications turned on)                                   //
    //    but do not notify author of post if they're the ones posting the comment                                   //
    if (Users.getSetting(postAuthor, "notifications.comments", true) && comment.userId !== postAuthor._id) {         // 60
      Herald.createNotification(post.userId, { courier: 'newComment', data: notificationData });                     // 61
      userIdsNotified.push(post.userId);                                                                             // 62
    }                                                                                                                //
                                                                                                                     //
    // 2. Notify author of comment being replied to                                                                  //
    if (!!comment.parentCommentId) {                                                                                 // 66
                                                                                                                     //
      var parentComment = Comments.findOne(comment.parentCommentId);                                                 // 68
                                                                                                                     //
      // do not notify author of parent comment if they're also post author or comment author                        //
      // (someone could be replying to their own comment)                                                            //
      if (parentComment.userId !== post.userId && parentComment.userId !== comment.userId) {                         // 72
                                                                                                                     //
        var parentCommentAuthor = Users.findOne(parentComment.userId);                                               // 74
                                                                                                                     //
        // do not notify parent comment author if they have reply notifications turned off                           //
        if (Users.getSetting(parentCommentAuthor, "notifications.replies", true)) {                                  // 77
                                                                                                                     //
          // add parent comment to notification data                                                                 //
          notificationData.parentComment = _.pick(parentComment, '_id', 'userId', 'author', 'htmlBody');             // 80
                                                                                                                     //
          Herald.createNotification(parentComment.userId, { courier: 'newReply', data: notificationData });          // 82
          userIdsNotified.push(parentComment.userId);                                                                // 83
        }                                                                                                            //
      }                                                                                                              //
    }                                                                                                                //
                                                                                                                     //
    // 3. Notify users subscribed to the thread                                                                      //
    // TODO: ideally this would be injected from the telescope-subscribe-to-posts package                            //
    if (!!post.subscribers) {                                                                                        // 91
                                                                                                                     //
      // remove userIds of users that have already been notified                                                     //
      // and of comment author (they could be replying in a thread they're subscribed to)                            //
      var subscriberIdsToNotify = _.difference(post.subscribers, userIdsNotified, [comment.userId]);                 // 95
      Herald.createNotification(subscriberIdsToNotify, { courier: 'newCommentSubscribed', data: notificationData });
                                                                                                                     //
      userIdsNotified = userIdsNotified.concat(subscriberIdsToNotify);                                               // 98
    }                                                                                                                //
  }                                                                                                                  //
}                                                                                                                    //
Telescope.callbacks.add("commentSubmitAsync", commentSubmitNotifications);                                           // 104
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/modules.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Telescope.modules.add("secondaryNav", {                                                                              // 1
  template: 'notifications_menu',                                                                                    // 2
  order: 20                                                                                                          // 3
});                                                                                                                  //
                                                                                                                     //
Telescope.modules.add("mobileNav", {                                                                                 // 6
  template: 'notifications_menu',                                                                                    // 7
  order: 20                                                                                                          // 8
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/routes.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
FlowRouter.route('/unsubscribe/:hash', {                                                                             // 1
  name: "unsubscribe",                                                                                               // 2
  action: function (params, queryParams) {                                                                           // 3
    Meteor.logout();                                                                                                 // 4
    BlazeLayout.render("layout", { main: "unsubscribe" });                                                           // 5
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/package-i18n.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
TAPi18n.packages["telescope:notifications"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                     // 2
// define package's translation function (proxy to the i18next)                                                      // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                     // 4
// define the package's templates registrar                                                                          // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:notifications");                                  // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                     // 8
// Record the list of templates prior to package load                                                                // 9
var _ = Package.underscore._;                                                                                        // 10
non_package_templates = _.keys(Template);                                                                            // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notification_item.js                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notification_item");                                                                           // 2
Template["notification_item"] = new Template("Template.notification_item", (function() {                             // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": function() {                                                                                            // 6
      return Blaze.If(function() {                                                                                   // 7
        return Spacebars.call(Spacebars.dot(view.lookup("item"), "data", "read"));                                   // 8
      }, function() {                                                                                                // 9
        return "read";                                                                                               // 10
      });                                                                                                            // 11
    }                                                                                                                // 12
  }, "\n    ", HTML.SPAN({                                                                                           // 13
    "class": "notification-timestamp"                                                                                // 14
  }, Blaze.View("lookup:timeAgo", function() {                                                                       // 15
    return Spacebars.mustache(view.lookup("timeAgo"), Spacebars.dot(view.lookup("item"), "data", "timestamp"));      // 16
  }), ":"), "\n    ", HTML.DIV({                                                                                     // 17
    "class": "notification-html"                                                                                     // 18
  }, "\n      ", Blaze.View("lookup:notificationHTML", function() {                                                  // 19
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("notificationHTML")));                                   // 20
  }), "\n    "), "\n  ");                                                                                            // 21
}));                                                                                                                 // 22
                                                                                                                     // 23
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/notification_item.js                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.notification_item.helpers({                                                                                 // 1
  properties: function () {                                                                                          // 2
    return this.data;                                                                                                // 3
  },                                                                                                                 //
  notificationHTML: function () {                                                                                    // 5
    return this.item.data.message();                                                                                 // 6
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
Template.notification_item.events({                                                                                  // 10
  'click .action-link': function (event, instance) {                                                                 // 11
    var notificationId = instance.data._id;                                                                          // 12
    Herald.collection.update({ _id: notificationId }, {                                                              // 13
      $set: {                                                                                                        // 16
        read: true                                                                                                   // 17
      }                                                                                                              //
    }, function (error, result) {                                                                                    //
      if (error) {                                                                                                   // 21
        console.log(error);                                                                                          // 22
      }                                                                                                              //
    });                                                                                                              //
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notifications_mark_as_read.js                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notifications_mark_as_read");                                                                  // 2
Template["notifications_mark_as_read"] = new Template("Template.notifications_mark_as_read", (function() {           // 3
  var view = this;                                                                                                   // 4
  return HTML.A({                                                                                                    // 5
    href: "#",                                                                                                       // 6
    "class": "button mark-as-read btn btn-primary"                                                                   // 7
  }, Blaze.View("lookup:_", function() {                                                                             // 8
    return Spacebars.mustache(view.lookup("_"), "mark_as_read");                                                     // 9
  }));                                                                                                               // 10
}));                                                                                                                 // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/notifications_mark_as_read.js                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.notifications_mark_as_read.events({                                                                         // 1
  'click .mark-as-read': function (e, t) {                                                                           // 2
    e.preventDefault();                                                                                              // 3
    t.$('li').parents('.dropdown').removeClass('dropdown-open');                                                     // 4
    Meteor.call('heraldMarkAllAsRead', function (error, result) {                                                    // 5
      error && console.log(error);                                                                                   // 7
    });                                                                                                              //
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notification_new_comment.js                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notification_new_comment");                                                                    // 2
Template["notification_new_comment"] = new Template("Template.notification_new_comment", (function() {               // 3
  var view = this;                                                                                                   // 4
  return HTML.P("\n    ", HTML.A({                                                                                   // 5
    href: function() {                                                                                               // 6
      return Spacebars.mustache(view.lookup("profileUrl"));                                                          // 7
    }                                                                                                                // 8
  }, Blaze.View("lookup:authorName", function() {                                                                    // 9
    return Spacebars.mustache(view.lookup("authorName"));                                                            // 10
  })), " \n    ", Blaze.View("lookup:_", function() {                                                                // 11
    return Spacebars.mustache(view.lookup("_"), "left_a_new_comment_on");                                            // 12
  }), "  \n    ", HTML.A({                                                                                           // 13
    href: function() {                                                                                               // 14
      return Spacebars.mustache(view.lookup("commentUrl"));                                                          // 15
    },                                                                                                               // 16
    "class": "action-link"                                                                                           // 17
  }, Blaze.View("lookup:postTitle", function() {                                                                     // 18
    return Spacebars.mustache(view.lookup("postTitle"));                                                             // 19
  })), "\n  ");                                                                                                      // 20
}));                                                                                                                 // 21
                                                                                                                     // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notification_new_reply.js                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notification_new_reply");                                                                      // 2
Template["notification_new_reply"] = new Template("Template.notification_new_reply", (function() {                   // 3
  var view = this;                                                                                                   // 4
  return HTML.P("\n    ", HTML.A({                                                                                   // 5
    href: function() {                                                                                               // 6
      return Spacebars.mustache(view.lookup("profileUrl"));                                                          // 7
    }                                                                                                                // 8
  }, Blaze.View("lookup:authorName", function() {                                                                    // 9
    return Spacebars.mustache(view.lookup("authorName"));                                                            // 10
  })), "\n    ", Blaze.View("lookup:_", function() {                                                                 // 11
    return Spacebars.mustache(view.lookup("_"), "has_replied_to_your_comment_on");                                   // 12
  }), " \n    ", HTML.A({                                                                                            // 13
    href: function() {                                                                                               // 14
      return Spacebars.mustache(view.lookup("commentUrl"));                                                          // 15
    },                                                                                                               // 16
    "class": "action-link"                                                                                           // 17
  }, Blaze.View("lookup:postTitle", function() {                                                                     // 18
    return Spacebars.mustache(view.lookup("postTitle"));                                                             // 19
  })), "\n  ");                                                                                                      // 20
}));                                                                                                                 // 21
                                                                                                                     // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notification_post_approved.js                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notification_post_approved");                                                                  // 2
Template["notification_post_approved"] = new Template("Template.notification_post_approved", (function() {           // 3
  var view = this;                                                                                                   // 4
  return HTML.P("\n    ", Blaze.View("lookup:_", function() {                                                        // 5
    return Spacebars.mustache(view.lookup("_"), "your_post");                                                        // 6
  }), " \n    ", HTML.A({                                                                                            // 7
    href: function() {                                                                                               // 8
      return Spacebars.mustache(view.lookup("postUrl"));                                                             // 9
    },                                                                                                               // 10
    "class": "action-link"                                                                                           // 11
  }, Blaze.View("lookup:postTitle", function() {                                                                     // 12
    return Spacebars.mustache(view.lookup("postTitle"));                                                             // 13
  })), "\n    ", Blaze.View("lookup:_", function() {                                                                 // 14
    return Spacebars.mustache(view.lookup("_"), "has_been_approved");                                                // 15
  }), " \n  ");                                                                                                      // 16
}));                                                                                                                 // 17
                                                                                                                     // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.notifications_menu.js                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("notifications_menu");                                                                          // 2
Template["notifications_menu"] = new Template("Template.notifications_menu", (function() {                           // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("isLoggedIn"));                                                                // 6
  }, function() {                                                                                                    // 7
    return [ "\n      ", HTML.DIV({                                                                                  // 8
      "class": function() {                                                                                          // 9
        return [ "notifications-menu-wrapper ", Spacebars.mustache(view.lookup("moduleClass")) ];                    // 10
      }                                                                                                              // 11
    }, "\n        ", Blaze._TemplateWith(function() {                                                                // 12
      return {                                                                                                       // 13
        menuName: Spacebars.call("notifications"),                                                                   // 14
        menuLabel: Spacebars.call(view.lookup("menuLabel")),                                                         // 15
        menuItems: Spacebars.call(view.lookup("menuItems")),                                                         // 16
        menuType: Spacebars.call(view.lookup("menuType")),                                                           // 17
        expandLevel: Spacebars.call(0)                                                                               // 18
      };                                                                                                             // 19
    }, function() {                                                                                                  // 20
      return Spacebars.include(view.lookupTemplate("menuComponent"));                                                // 21
    }), "\n      "), "\n    " ];                                                                                     // 22
  });                                                                                                                // 23
}));                                                                                                                 // 24
                                                                                                                     // 25
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/notifications_menu.js                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var getNotifications = function () {                                                                                 // 1
  return Herald.collection.find({ userId: Meteor.userId(), read: false }, { sort: { timestamp: -1 } }).fetch();      // 2
};                                                                                                                   //
                                                                                                                     //
Template.notifications_menu.helpers({                                                                                // 5
  hasNotifications: function () {                                                                                    // 6
    var notifications = getNotifications();                                                                          // 7
    return notifications.length;                                                                                     // 8
  },                                                                                                                 //
  menuLabel: function () {                                                                                           // 10
    var notificationsCount;                                                                                          // 11
    var notifications = getNotifications();                                                                          // 12
                                                                                                                     //
    if (notifications.length === 0) {                                                                                // 14
      notificationsCount = i18n.t('no_notifications');                                                               // 15
    } else if (notifications.length === 1) {                                                                         //
      notificationsCount = i18n.t('1_notification');                                                                 // 17
    } else {                                                                                                         //
      notificationsCount = notifications.length + ' ' + i18n.t('notifications');                                     // 19
    }                                                                                                                //
                                                                                                                     //
    return notificationsCount;                                                                                       // 22
  },                                                                                                                 //
  menuItems: function () {                                                                                           // 24
    var notifications = getNotifications();                                                                          // 25
    var markAllAsRead = [{                                                                                           // 26
      template: 'notifications_mark_as_read'                                                                         // 27
    }];                                                                                                              //
    var menuItems;                                                                                                   // 29
    if (notifications.length) {                                                                                      // 30
      menuItems = markAllAsRead.concat(_.map(notifications, function (notification) {                                // 31
        return {                                                                                                     // 32
          template: "notification_item",                                                                             // 33
          data: notification                                                                                         // 34
        };                                                                                                           //
      }));                                                                                                           //
    } else {                                                                                                         //
      menuItems = [];                                                                                                // 38
    }                                                                                                                //
    return menuItems;                                                                                                // 40
  },                                                                                                                 //
  menuType: function () {                                                                                            // 42
    if (this.zone === "mobileNav") {                                                                                 // 43
      return 'collapsible';                                                                                          // 44
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {                                                 //
      return 'dropdown';                                                                                             // 46
    } else {                                                                                                         //
      return 'collapsible';                                                                                          // 48
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/template.unsubscribe.js                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("unsubscribe");                                                                                 // 2
Template["unsubscribe"] = new Template("Template.unsubscribe", (function() {                                         // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": "grid-small grid-block dialog admin"                                                                    // 6
  }, "\n    ", HTML.P(Blaze.View("lookup:unsubscribed", function() {                                                 // 7
    return Spacebars.mustache(view.lookup("unsubscribed"));                                                          // 8
  })), "\n  ");                                                                                                      // 9
}));                                                                                                                 // 10
                                                                                                                     // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/client/templates/unsubscribe.js                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.unsubscribe.created = function () {                                                                         // 1
  var hash = FlowRouter.getParam("hash");                                                                            // 2
  Meteor.call('unsubscribeUser', hash, function (error, result) {                                                    // 3
    if (result) {                                                                                                    // 4
      Session.set('unsubscribedMessage', __('you_have_been_unsubscribed_from_all_notifications'));                   // 5
    } else {                                                                                                         //
      Session.set('unsubscribedMessage', __('user_not_found'));                                                      // 7
    }                                                                                                                //
  });                                                                                                                //
  Events.track('notificationsUnsubcribe', { hash: hash });                                                           // 10
};                                                                                                                   //
                                                                                                                     //
Template.unsubscribe.helpers({                                                                                       // 13
  unsubscribed: function () {                                                                                        // 14
    // we have to use a session variable because the string we want to display                                       //
    // depends on the return value of an asynchronous callback (unsubscribeUser)                                     //
    return Session.get('unsubscribedMessage');                                                                       // 17
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/ar.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                       // 8
                                                                                                                     // 9
for (var i = 0; i < package_templates.length; i++) {                                                                 // 10
  var package_template = package_templates[i];                                                                       // 11
                                                                                                                     // 12
  registerI18nTemplate(package_template);                                                                            // 13
}                                                                                                                    // 14
                                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/bg.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/cs.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/da.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/de.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/el.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/en.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
// integrate the fallback language translations                                                                      // 8
translations = {};                                                                                                   // 9
translations[namespace] = {"a_new_comment_on_your_post":"A new comment on your post","you_have_a_new_comment_by":"You have a new comment by ","on_your_post":" on your post","has_created_a_new_post":" has created a new post","someone_replied_to_your_comment_on":"Someone replied to your comment on","no_notifications":"No notifications","1_notification":"1 notification","notifications":"notifications","mark_all_as_read":"Mark all as read","left_a_new_comment_on":"left a new comment on","has_replied_to_your_comment_on":"has replied to your comment on","mark_as_read":"Mark as read","you_have_been_unsubscribed_from_all_notifications":"You have been unsubscribed from all notifications.","user_not_found":"User not found","notifications_fieldset":"Notifications","emailNotifications":"Email Notifications","your_post":"Your post","has_been_approved":"has been approved"};
TAPi18n._loadLangFileObject("en", translations);                                                                     // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/es.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/et.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/fr.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/hu.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/id.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/it.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/ja.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/kk.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/ko.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/nl.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/pl.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/pt-BR.i18n.js                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/ro.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/ru.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/sl.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/sv.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/th.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/tr.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/vi.i18n.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/packages/telescope_notificationsi18n/zh-CN.i18n.js                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:notifications",                                                                        // 2
    namespace = "telescope:notifications";                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:notifications'] = {
  Herald: Herald
};

})();
