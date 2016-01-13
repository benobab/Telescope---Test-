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
var __, getUnsubscribeLink, Handlebars, translations, Herald;

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
                                                                                                                     // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/notifications-server.js                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 1
  Herald.collection._ensureIndex({ userId: 1, "media.email.send": 1, "media.email.sent": 1 });                       // 2
});                                                                                                                  //
                                                                                                                     //
getUnsubscribeLink = function (user) {                                                                               // 5
  return Telescope.utils.getRouteUrl('unsubscribe', { hash: user.telescope.emailHash });                             // 6
};                                                                                                                   //
                                                                                                                     //
Meteor.methods({                                                                                                     // 9
  unsubscribeUser: function (hash) {                                                                                 // 10
    check(hash, String);                                                                                             // 11
    // TO-DO: currently, if you have somebody's email you can unsubscribe them                                       //
    // A user-specific salt should be added to the hashing method to prevent this                                    //
    var user = Meteor.users.findOne({ "telescope.emailHash": hash });                                                // 14
    if (user) {                                                                                                      // 15
      Meteor.users.update(user._id, {                                                                                // 16
        $set: {                                                                                                      // 17
          'profile.notifications.users': 0,                                                                          // 18
          'profile.notifications.posts': 0,                                                                          // 19
          'profile.notifications.comments': 0,                                                                       // 20
          'profile.notifications.replies': 0                                                                         // 21
        }                                                                                                            //
      });                                                                                                            //
      return true;                                                                                                   // 24
    }                                                                                                                //
    return false;                                                                                                    // 26
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/routes.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     //
// Notification email                                                                                                //
Picker.route('/email/notification/:id?', function (params, req, res, next) {                                         // 3
  var notification = Herald.collection.findOne(params.id);                                                           // 4
  var notificationContents = buildEmailNotification(notification);                                                   // 5
  res.end(notificationContents.html);                                                                                // 6
});                                                                                                                  //
                                                                                                                     //
// New user email                                                                                                    //
Picker.route('/email/new-user/:id?', function (params, req, res, next) {                                             // 10
  var html;                                                                                                          // 11
  var user = Meteor.users.findOne(params.id);                                                                        // 12
  var emailProperties = {                                                                                            // 13
    profileUrl: Users.getProfileUrl(user),                                                                           // 14
    username: Users.getUserName(user)                                                                                // 15
  };                                                                                                                 //
  html = Telescope.email.getTemplate('emailNewUser')(emailProperties);                                               // 17
  res.end(Telescope.email.buildTemplate(html));                                                                      // 18
});                                                                                                                  //
                                                                                                                     //
// New post email                                                                                                    //
Picker.route('/email/new-post/:id?', function (params, req, res, next) {                                             // 22
  var html;                                                                                                          // 23
  var post = Posts.findOne(params.id);                                                                               // 24
  if (!!post) {                                                                                                      // 25
    html = Telescope.email.getTemplate('emailNewPost')(Posts.getNotificationProperties(post));                       // 26
  } else {                                                                                                           //
    html = "<h3>No post found.</h3>";                                                                                // 28
  }                                                                                                                  //
  res.end(Telescope.email.buildTemplate(html));                                                                      // 30
});                                                                                                                  //
                                                                                                                     //
// Post approved                                                                                                     //
Picker.route('/email/post-approved/:id?', function (params, req, res, next) {                                        // 34
  var html;                                                                                                          // 35
  var post = Posts.findOne(params.id);                                                                               // 36
  if (!!post) {                                                                                                      // 37
    html = Telescope.email.getTemplate('emailPostApproved')(Posts.getNotificationProperties(post));                  // 38
  } else {                                                                                                           //
    html = "<h3>No post found.</h3>";                                                                                // 40
  }                                                                                                                  //
  res.end(Telescope.email.buildTemplate(html));                                                                      // 42
});                                                                                                                  //
                                                                                                                     //
// New comment email                                                                                                 //
Picker.route('/email/new-comment/:id?', function (params, req, res, next) {                                          // 46
  var html;                                                                                                          // 47
  var comment = Comments.findOne(params.id);                                                                         // 48
  var post = Posts.findOne(comment.postId);                                                                          // 49
  if (!!comment) {                                                                                                   // 50
    html = Telescope.email.getTemplate('emailNewComment')(Comments.getNotificationProperties(comment, post));        // 51
  } else {                                                                                                           //
    html = "<h3>No post found.</h3>";                                                                                // 53
  }                                                                                                                  //
  res.end(Telescope.email.buildTemplate(html));                                                                      // 55
});                                                                                                                  //
                                                                                                                     //
// New reply email                                                                                                   //
Picker.route('/email/new-comment/:id?', function (params, req, res, next) {                                          // 59
  var html;                                                                                                          // 60
  var comment = Comments.findOne(params.id);                                                                         // 61
  var post = Posts.findOne(comment.postId);                                                                          // 62
  if (!!comment) {                                                                                                   // 63
    html = Telescope.email.getTemplate('emailNewReply')(Comments.getNotificationProperties(comment, post));          // 64
  } else {                                                                                                           //
    html = "<h3>No post found.</h3>";                                                                                // 66
  }                                                                                                                  //
  res.end(Telescope.email.buildTemplate(html));                                                                      // 68
});                                                                                                                  //
                                                                                                                     //
// Account approved email                                                                                            //
Picker.route('/email/account-approved/:id?', function (params, req, res, next) {                                     // 72
  var user = Meteor.users.findOne(this.params.id);                                                                   // 73
  var emailProperties = {                                                                                            // 74
    profileUrl: Users.getProfileUrl(user),                                                                           // 75
    username: Users.getUserName(user),                                                                               // 76
    siteTitle: Settings.get('title'),                                                                                // 77
    siteUrl: Telescope.utils.getSiteUrl()                                                                            // 78
  };                                                                                                                 //
  var html = Handlebars.templates.emailAccountApproved(emailProperties);                                             // 80
  res.end(Telescope.email.buildTemplate(html));                                                                      // 81
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailAccountApproved.js                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">{{username}}, welcome to {{siteTitle}}!</span><br><br>\n\nYou've just been invited. <a href=\"{{siteUrl}}\">Start posting</a>.<br><br>");Handlebars.templates["emailAccountApproved"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailAccountApproved"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailNewComment.js                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\n<a href=\"{{profileUrl}}\">{{authorName}}</a>\nleft a new comment on \n<a href=\"{{postUrl}}\" class=\"action-link\">{{postTitle}}</a>:\n</span>\n<br/><br/>\n\n<div class=\"comment-body\">\n{{{htmlBody}}}\n</div>\n<br>\n\n<a href=\"{{commentUrl}}\" class=\"action-link\">Reply</a><br/><br/>");Handlebars.templates["emailNewComment"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewComment"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailNewPost.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\n<a href=\"{{profileUrl}}\">{{postAuthorName}}</a>\nhas created a new post:\n{{#if url}}\n  <a href=\"{{linkUrl}}\" class=\"action-link\">{{postTitle}}</a>\n{{else}}\n  {{postTitle}}\n{{/if}}\n</span><br><br>\n\n{{#if htmlBody}}\n  <div class=\"post-body\">\n  {{{htmlBody}}}\n  </div>\n  <br>\n{{/if}}\n\n<a href=\"{{postUrl}}\">Discuss</a><br><br>\n");Handlebars.templates["emailNewPost"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewPost"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailNewPendingPost.js                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\n<a href=\"{{profileUrl}}\">{{postAuthorName}}</a>\nhas a new post pending approval:\n{{#if url}}\n  <a href=\"{{linkUrl}}\" class=\"action-link\">{{postTitle}}}</a>\n{{else}}\n  {{postTitle}}}\n{{/if}}\n</span><br><br>\n\n{{#if htmlBody}}\n  <div class=\"post-body\">\n  {{{htmlBody}}}\n  </div>\n  <br>\n{{/if}}\n\n<a href=\"{{postUrl}}\">Go to post</a><br><br>\n");Handlebars.templates["emailNewPendingPost"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewPendingPost"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailPostApproved.js                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\nCongratulations, your post has been approved:\n</span>\n<br><br>\n<a href=\"{{postUrl}}\" class=\"action-link\">{{postTitle}}}</a>\n<br><br>");Handlebars.templates["emailPostApproved"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailPostApproved"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailNewReply.js                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\"><a href=\"{{profileUrl}}\">{{authorName}}</a>\nhas replied to your comment on\n<a href=\"{{postUrl}}\" class=\"action-link\">{{postTitle}}</a>:\n</span>\n<br/><br/>\n\n<div class=\"comment-body\">\n{{{htmlBody}}}\n</div>\n<br>\n\n<a href=\"{{commentUrl}}\" class=\"action-link\">Reply</a><br/><br/>");Handlebars.templates["emailNewReply"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewReply"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_notifications/lib/server/templates/handlebars.emailNewUser.js                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">A new user account has been created: <a href=\"{{profileUrl}}\">{{username}}</a></span><br><br>");Handlebars.templates["emailNewUser"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailNewUser"});};
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
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                      // 8
  TAPi18n.translations["ar"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                           // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ar"][namespace], {"a_new_comment_on_your_post":"تعليق جديد حول مشاركتك","you_have_a_new_comment_by":"لديك تعليق جديد من","on_your_post":" حول مشاركتك","has_created_a_new_post":" اضاف مشاركة جديدة","someone_replied_to_your_comment_on":"احدهم قام باضافة اجابة لتعليقك حول","no_notifications":"0 تعليقات","1_notification":"1 تعليق","notifications":"تعليقات","mark_all_as_read":"اجعلها مقرؤة","has_replied_to_your_comment_on":" قام باضافة تعليق حول","mark_as_read":"إجعلها مقروءة"});
TAPi18n._registerServerTranslator("ar", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                      // 8
  TAPi18n.translations["bg"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                           // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["bg"][namespace], {"a_new_comment_on_your_post":"Нов коментар на ваша публикация","you_have_a_new_comment_by":"Имате нов коментар от ","on_your_post":" на ваша публикация","has_created_a_new_post":" е създадена нова публикация","someone_replied_to_your_comment_on":"Някой отговори на коментара ви относно","no_notifications":"Няма известия","1_notification":"1 известие","notifications":"известия","mark_all_as_read":"Отбележи всичко като прочетено","has_replied_to_your_comment_on":" е отговорил на коментара ви за","mark_as_read":"Маркирай като прочетено"});
TAPi18n._registerServerTranslator("bg", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                      // 8
  TAPi18n.translations["cs"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                           // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["cs"][namespace], {"a_new_comment_on_your_post":"Nový komentář k vašemu příspěvku","you_have_a_new_comment_by":"Máte nový komentář od","on_your_post":" k vašemu příspěvku","has_created_a_new_post":"vytvořil nový příspěvek","someone_replied_to_your_comment_on":"Někdo odpověděl na váš komentář u","no_notifications":"Žádné notifikace","1_notification":"1 notifikace","notifications":"notifikace","mark_all_as_read":"Zznačit vše jako přečtené","left_a_new_comment_on":"Máte nový komentář u","has_replied_to_your_comment_on":"odpověděl na váš komentář u","mark_as_read":"Označit jako přečtené","you_have_been_unsubscribed_from_all_notifications":"Byl jste odhlášeni z odběru všech notifikací.","user_not_found":"Uživatel nebyl nalezen","notifications_fieldset":"Notifikace","emailNotifications":"E-mailové notifikace","your_post":"Váš příspěvek","has_been_approved":"byl schválen"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                      // 8
  TAPi18n.translations["da"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                           // 12
  TAPi18n.translations["da"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("da", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                      // 8
  TAPi18n.translations["de"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                           // 12
  TAPi18n.translations["de"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["de"][namespace], {"a_new_comment_on_your_post":"Ein neuer Kommentar zu Deinem Link","you_have_a_new_comment_by":"Du hast einen neuen Kommentar von ","on_your_post":" bei Deinem Link","has_created_a_new_post":" hat einen neuen Link erstellt","someone_replied_to_your_comment_on":"Jemand hat auf Deinen Kommentar geantwortet bei","no_notifications":"Keine Benachrichtigungen","1_notification":"1 Benachrichtigung","notifications":"Benachrichtigungen","mark_all_as_read":"Alle als gelesen markieren","has_replied_to_your_comment_on":" hat auf Deinen Kommentar geantwortet bei"});
TAPi18n._registerServerTranslator("de", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                      // 8
  TAPi18n.translations["el"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                           // 12
  TAPi18n.translations["el"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["el"][namespace], {"a_new_comment_on_your_post":"Νέο σχόλιο στη δημοσίευση σου","you_have_a_new_comment_by":"Νέο σχόλιο από","on_your_post":" στη δημοσίευση σου","has_created_a_new_post":" έκανε μια νέα δημοσίευση","someone_replied_to_your_comment_on":"Κάποιος απάντησε στο σχόλιό σου","no_notifications":"Καμία ειδοποίηση","1_notification":"1 ειδοποίηση","notifications":"ειδοποίησεις","mark_all_as_read":"Μάρκαρε τα όλα ότι τα διάβασες","has_replied_to_your_comment_on":" απάντησε στο σχόλιό σου","mark_as_read":"To διάβασα"});
TAPi18n._registerServerTranslator("el", namespace);                                                                  // 17
                                                                                                                     // 18
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
TAPi18n._registerServerTranslator("en", namespace);                                                                  // 12
                                                                                                                     // 13
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
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                      // 8
  TAPi18n.translations["es"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                           // 12
  TAPi18n.translations["es"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["es"][namespace], {"a_new_comment_on_your_post":"Un nuevo comentario en su post","you_have_a_new_comment_by":"Tiene un nuevo comentario de ","on_your_post":" en su post","has_created_a_new_post":" has creado un nuevo post","someone_replied_to_your_comment_on":"Alguien respondió a tu comentario en","no_notifications":"Ninguna notificación","1_notification":"1 notificación","notifications":"notificaciones","mark_all_as_read":"Marcar todas como leídas","left_a_new_comment_on":"ha dejado un nuevo comentario en","has_replied_to_your_comment_on":" ha respondido a su comentario sobre","mark_as_read":"Marcar como leído","you_have_been_unsubscribed_from_all_notifications":"Ha dado de baja de todas las notificaciones.","user_not_found":"Usuario no encontrado","notifications_fieldset":"Notificaciones","emailNotifications":"Notificaciones por Email","your_post":"Tu post","has_been_approved":"ha sido aprobado"});
TAPi18n._registerServerTranslator("es", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                      // 8
  TAPi18n.translations["et"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                           // 12
  TAPi18n.translations["et"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["et"][namespace], {"a_new_comment_on_your_post":"Uus kommentaar teie postitusele","you_have_a_new_comment_by":"Teile on uus kommentaari kasutajalt","on_your_post":"teie postitusele","has_created_a_new_post":"tegi uue postituse","someone_replied_to_your_comment_on":"Keegi on vastanud teie kommentaarile","no_notifications":"Pole teateid","1_notification":"1 teade","notifications":"teated","mark_all_as_read":"Märgi kõik loetuks","left_a_new_comment_on":"jäta uus kommentaar","has_replied_to_your_comment_on":"on vastanud teie kommentaarile","mark_as_read":"Märgi loetuks","you_have_been_unsubscribed_from_all_notifications":"Te olete välja lülitanud kõik teated.","user_not_found":"Kasutajat ei leitud","notifications_fieldset":"Teated","emailNotifications":"Emaili teated","your_post":"Sinu postitus","has_been_approved":"on heaks kiidetud"});
TAPi18n._registerServerTranslator("et", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                      // 8
  TAPi18n.translations["fr"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                           // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["fr"][namespace], {"a_new_comment_on_your_post":"Un nouveau commentaire sur votre post","you_have_a_new_comment_by":"Vous avez un nouveau commentaire de ","on_your_post":" sur votre post","has_created_a_new_post":" a créé un nouveau post","someone_replied_to_your_comment_on":"Quelqu'un à répondu à votre commentaire sur","no_notifications":"Aucune notification","1_notification":"1 notification","notifications":"notifications","mark_all_as_read":"Tout marquer comme lu","left_a_new_comment_on":"a laissé un nouveau commentaire sur","has_replied_to_your_comment_on":"a répondu à votre commentaire sur","mark_as_read":"Marquer comme lu","you_have_been_unsubscribed_from_all_notifications":"Vous avez été désabonné de toutes les notifications.","user_not_found":"Utilisateur non trouvé","notifications_fieldset":"Notifications","emailNotifications":"Notifications par Email","your_post":"Votre post","has_been_approved":"a été approuvé"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                      // 8
  TAPi18n.translations["hu"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                           // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                      // 8
  TAPi18n.translations["id"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                           // 12
  TAPi18n.translations["id"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["id"][namespace], {"a_new_comment_on_your_post":"Sebuah komentar baru pada postingan Anda","you_have_a_new_comment_by":"Anda memiliki komentar baru oleh","on_your_post":"pada posting Anda","has_created_a_new_post":"telah mengirimkan sebuah postingan baru","someone_replied_to_your_comment_on":"Seseorang membalas komentar Anda di","no_notifications":"Tidak ada notifikasi","1_notification":"1 notifikasi","notifications":"notifikasi","mark_all_as_read":"Tandai semua telah dibaca","left_a_new_comment_on":"mengirimkan komentar baru pada","has_replied_to_your_comment_on":"telah membalas komentar Anda di","mark_as_read":"Tandai telah dibaca","you_have_been_unsubscribed_from_all_notifications":"Anda telah berhenti berlangganan dari semua pemberitahuan.","user_not_found":"Pengguna tidak ditemukan","notifications_fieldset":"Notifikasi","emailNotifications":"Notifikasi Email","your_post":"Postingan Anda","has_been_approved":"telah disetujui"});
TAPi18n._registerServerTranslator("id", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                      // 8
  TAPi18n.translations["it"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                           // 12
  TAPi18n.translations["it"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["it"][namespace], {"a_new_comment_on_your_post":"Un nuovo commento sul tuo post","you_have_a_new_comment_by":"Hai un nuovo commento di ","on_your_post":" sul tuo post","has_created_a_new_post":" ha creato un nuovo post","someone_replied_to_your_comment_on":"Qualcuno ha risposto al tuo commento su","no_notifications":"Nessuna notifica","1_notification":"1 notifica","notifications":"notifiche","mark_all_as_read":"Segna tutto come letto","left_a_new_comment_on":"lasciato un nuovo commento su","has_replied_to_your_comment_on":" ha risposto al tuo commento su","mark_as_read":"Segna come letto","you_have_been_unsubscribed_from_all_notifications":"Sei stato rimosso da tutte le notifiche.","user_not_found":"Utente non trovato","notifications_fieldset":"Notifiche","emailNotifications":"Notifiche via Email","your_post":"Il tuo post","has_been_approved":"è stato approvato"});
TAPi18n._registerServerTranslator("it", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                      // 8
  TAPi18n.translations["ja"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                           // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                      // 8
  TAPi18n.translations["kk"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                           // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                      // 8
  TAPi18n.translations["ko"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                           // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ko"][namespace], {"a_new_comment_on_your_post":"회원님의 게시물에 새 댓글이 달렸어요.","you_have_a_new_comment_by":"새 댓글 by","has_created_a_new_post":"님이 새로운 글을 썼습니다","no_notifications":"알림 없음","1_notification":"1 알림","notifications":"알림","mark_all_as_read":"모두 읽음","left_a_new_comment_on":"님이 새 댓글을 쓰셨습니다","user_not_found":"유저를 찾지못함","notifications_fieldset":"알림","emailNotifications":"이메일 알림","your_post":"회원님의 게시물"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                      // 8
  TAPi18n.translations["nl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                           // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["nl"][namespace], {"a_new_comment_on_your_post":"Nieuwe reactie op je artikel","you_have_a_new_comment_by":"Nieuwe reactie van ","on_your_post":" op jouw artikel","has_created_a_new_post":" heeft een nieuw artikel geplaatst","someone_replied_to_your_comment_on":"Iemand heeft gereageerd op ","no_notifications":"Geen berichten","1_notification":"1 bericht","notifications":"notificaties","mark_all_as_read":"Markeer alles als gelezen","has_replied_to_your_comment_on":" heeft gereageerd op jouw reactie op ","mark_as_read":"Markeer als gelezen"});
TAPi18n._registerServerTranslator("nl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                      // 8
  TAPi18n.translations["pl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                           // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["pl"][namespace], {"a_new_comment_on_your_post":"Nowy komentarz","you_have_a_new_comment_by":"Pojawił się nowy komentarz ","on_your_post":" dla twojego posta","has_created_a_new_post":" utworzył nowy post","someone_replied_to_your_comment_on":"Ktoś odpowiedział na twój komentarz w","no_notifications":"Brak powiadomień","1_notification":"1 powiadomienie","notifications":"powiadomień","mark_all_as_read":"Oznacz wszystkie jako przeczytane","left_a_new_comment_on":"dodał nowy komentarz w","has_replied_to_your_comment_on":"odpowiedział na twój komentarz w","mark_as_read":"Oznacz jako przeczytane","you_have_been_unsubscribed_from_all_notifications":"Zostałeś wypisany ze wszystkich powiadomień.","user_not_found":"Użytkownik nie został odnaleziony","notifications_fieldset":"Powiadomienia","emailNotifications":"Powiadomienia Email","your_post":"Twój post","has_been_approved":"został zaakceptowany"});
TAPi18n._registerServerTranslator("pl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                   // 8
  TAPi18n.translations["pt-BR"] = {};                                                                                // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                        // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                     // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"a_new_comment_on_your_post":"Um novo comentário em sua postagem","you_have_a_new_comment_by":"Você possui um novo comentário por ","on_your_post":" em sua postagem","has_created_a_new_post":" criou uma nova postagem","someone_replied_to_your_comment_on":"Alguém respondeu ao seu comentário em","no_notifications":"Sem notificações","1_notification":"1 notificação","notifications":"notificações","mark_all_as_read":"Marcar todas como lidas","left_a_new_comment_on":"deixou um novo comentário em","has_replied_to_your_comment_on":"respondeu ao seu comentário em","mark_as_read":"Marcar como lido","you_have_been_unsubscribed_from_all_notifications":"Você se desinscreveu de todas as notificações.","user_not_found":"Usuário não encontrado","notifications_fieldset":"Notificações","emailNotifications":"Notificações por Email","your_post":"Sua postagem","has_been_approved":"foi aprovada"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                               // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                      // 8
  TAPi18n.translations["ro"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                           // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ro"][namespace], {"a_new_comment_on_your_post":"Un nou comentariu la postarea ta","you_have_a_new_comment_by":"Ai un nou comentariu de la ","on_your_post":" la postarea ta","has_created_a_new_post":" a publicat o nouă postare","someone_replied_to_your_comment_on":"Cineva a lăsat un comentariu la","no_notifications":"Nici o notificare","1_notification":"1 Notificare","notifications":"Notificări","mark_all_as_read":"Marchează toate ca citite","has_replied_to_your_comment_on":" a răspuns la comentariul tău la","mark_as_read":"Postări contra trend-ului"});
TAPi18n._registerServerTranslator("ro", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                      // 8
  TAPi18n.translations["ru"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                           // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ru"][namespace], {"a_new_comment_on_your_post":"Новый комментарий по вашему посту","you_have_a_new_comment_by":"У вас есть новый комментарий от ","on_your_post":" по вашему посту","has_created_a_new_post":" создал новый пост","someone_replied_to_your_comment_on":"Кто-то ответил на ваш комментарий","no_notifications":"Оповещений нет","1_notification":"1 оповещение","notifications":"оповещения","mark_all_as_read":"Отметить всё прочитанным","has_replied_to_your_comment_on":" ответил(а) на ваш комментарий по","mark_as_read":"Отметить прочитанным"});
TAPi18n._registerServerTranslator("ru", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                      // 8
  TAPi18n.translations["sl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                           // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["sl"][namespace], {"a_new_comment_on_your_post":"Nov komentar na vašo objavo","you_have_a_new_comment_by":"Imate nov komentar od ","on_your_post":"na vašo objavo","has_created_a_new_post":"je ustvaril / a  novo objavo","someone_replied_to_your_comment_on":"Nekdo je odgovoril na vaš komentar o","no_notifications":"Ni obvestil","1_notification":"1 obvestilo","notifications":"Obvestila","mark_all_as_read":"Označi vse kot prebrano","left_a_new_comment_on":"je pustil / a komentar o","has_replied_to_your_comment_on":"je odgovoril na vaš komentar o","mark_as_read":"Označi kot prebrano","you_have_been_unsubscribed_from_all_notifications":"Odjavljeni ste od vseh obvestil.","user_not_found":"Uporabnika ni bilo mogoče najti","notifications_fieldset":"Obvestila","emailNotifications":"E-poštna obvestila","your_post":"Vaša objava","has_been_approved":"je bil odobren"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                      // 8
  TAPi18n.translations["sv"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                           // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["sv"][namespace], {"a_new_comment_on_your_post":"En ny kommentar på ditt inlägg","you_have_a_new_comment_by":"Du har en ny kommentar från ","on_your_post":" på ditt inlägg","has_created_a_new_post":" har skapat ett nytt inlägg","someone_replied_to_your_comment_on":"Någon svarade på din kommentar gällande","no_notifications":"Inga notifikationer","1_notification":"En notifikation","notifications":"notifikationer","mark_all_as_read":"Markera alla som lästa","left_a_new_comment_on":"lämnade en ny kommentar på","has_replied_to_your_comment_on":" har svarat på din kommentar gällande","mark_as_read":"Markera som läst","you_have_been_unsubscribed_from_all_notifications":"Du har avregistrerat dig från alla notifikationer.","user_not_found":"Användaren hittades inte","notifications_fieldset":"Notifikationer","emailNotifications":"E","your_post":"Ditt inlägg","has_been_approved":"har godkänts"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                      // 8
  TAPi18n.translations["th"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                           // 12
  TAPi18n.translations["th"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                      // 8
  TAPi18n.translations["tr"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                           // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["tr"][namespace], {"a_new_comment_on_your_post":"Şu paylaşımınıza yeni bir yorum yapıldı: ","you_have_a_new_comment_by":"Şu kişiden yeni bir yorum aldınız: ","on_your_post":" paylaşımınızda","has_created_a_new_post":" yeni bir paylaşım yaptı","someone_replied_to_your_comment_on":"Birisi yorumunuza cevap verdi şu konu hakkında: ","no_notifications":"Bildirim yok","1_notification":"1 bildirim","notifications":"Bildirimler","mark_all_as_read":"Hepsini okunmuş olarak işaretle","has_replied_to_your_comment_on":" yorumunuza cevap verdi şu konu hakkında:","mark_as_read":"Okundu olarak işaretle"});
TAPi18n._registerServerTranslator("tr", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                      // 8
  TAPi18n.translations["vi"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                           // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["vi"][namespace], {"a_new_comment_on_your_post":"Có ý kiến mới trên bài của bạn","you_have_a_new_comment_by":"Bạn có ý kiến mới bởi ","on_your_post":" trên bài của bạn","has_created_a_new_post":" đã bạo bài mới","someone_replied_to_your_comment_on":"Có người trả lời ý kiến của bạn","no_notifications":"Không có thông báo","1_notification":"1 thông báo","notifications":"Thông báo","mark_all_as_read":"Đánh dấu đã đọc","has_replied_to_your_comment_on":" đã trả lời ý kiến của bạn","mark_as_read":"Đã đọc"});
TAPi18n._registerServerTranslator("vi", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                   // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                        // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                     // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"a_new_comment_on_your_post":"你发表的主题有新的评论","you_have_a_new_comment_by":"你有一个新的评论在 ","on_your_post":" 在你的帖子","has_created_a_new_post":" 发一个新帖","someone_replied_to_your_comment_on":"有人回复了你的评论","no_notifications":"无消息","1_notification":"1 个消息","notifications":"消息","mark_all_as_read":"标记所有","has_replied_to_your_comment_on":" 已经有人回复了你的评论"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                               // 17
                                                                                                                     // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:notifications'] = {
  Herald: Herald
};

})();

//# sourceMappingURL=telescope_notifications.js.map
