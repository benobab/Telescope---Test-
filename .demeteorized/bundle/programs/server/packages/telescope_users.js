(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var Settings = Package['telescope:settings'].Settings;
var i18n = Package['telescope:i18n'].i18n;
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
var __, Users, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/package-i18n.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
TAPi18n.packages["telescope:users"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};     // 1
                                                                                                                      // 2
// define package's translation function (proxy to the i18next)                                                       // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                      // 4
                                                                                                                      // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/namespace.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Telescope Users namespace                                                                                          //
 * @namespace Users                                                                                                   //
 */                                                                                                                   //
Users = Meteor.users;                                                                                                 // 5
                                                                                                                      //
Users.getUser = function (userOrUserId) {                                                                             // 7
  if (typeof userOrUserId === "undefined") {                                                                          // 8
    if (!Meteor.user()) {                                                                                             // 9
      throw new Error();                                                                                              // 10
    } else {                                                                                                          //
      return Meteor.user();                                                                                           // 12
    }                                                                                                                 //
  } else if (typeof userOrUserId === "string") {                                                                      //
    return Meteor.users.findOne(userOrUserId);                                                                        // 15
  } else {                                                                                                            //
    return userOrUserId;                                                                                              // 17
  }                                                                                                                   //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/roles.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Telescope roles                                                                                                    //
 * @namespace Users.is                                                                                                //
 */                                                                                                                   //
Users.is = {};                                                                                                        // 5
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user is an admin                                                                                        //
 * @param {Object|string} userOrUserId - The user or their userId                                                     //
 */                                                                                                                   //
Users.is.admin = function (userOrUserId) {                                                                            // 11
  try {                                                                                                               // 12
    var user = Users.getUser(userOrUserId);                                                                           // 13
    return !!user && !!user.isAdmin;                                                                                  // 14
  } catch (e) {                                                                                                       //
    return false; // user not logged in                                                                               // 16
  }                                                                                                                   //
};                                                                                                                    //
Users.is.adminById = Users.is.admin;                                                                                  // 19
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user owns a document                                                                                    //
 * @param {Object|string} userOrUserId - The user or their userId                                                     //
 * @param {Object} document - The document to check (post, comment, user object, etc.)                                //
 */                                                                                                                   //
Users.is.owner = function (userOrUserId, document) {                                                                  // 26
  try {                                                                                                               // 27
    var user = Users.getUser(userOrUserId);                                                                           // 28
    if (!!document.userId) {                                                                                          // 29
      // case 1: document is a post or a comment, use userId to check                                                 //
      return user._id === document.userId;                                                                            // 31
    } else {                                                                                                          //
      // case 2: document is a user, use _id to check                                                                 //
      return user._id === document._id;                                                                               // 34
    }                                                                                                                 //
  } catch (e) {                                                                                                       //
    return false; // user not logged in                                                                               // 37
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
Users.is.ownerById = Users.is.owner;                                                                                  // 41
                                                                                                                      //
Users.is.invited = function (userOrUserId) {                                                                          // 43
  try {                                                                                                               // 44
    var user = Users.getUser(userOrUserId);                                                                           // 45
    return Users.is.admin(user) || user.telescope.isInvited;                                                          // 46
  } catch (e) {                                                                                                       //
    return false; // user not logged in                                                                               // 48
  }                                                                                                                   //
};                                                                                                                    //
Users.is.invitedById = Users.is.invited;                                                                              // 51
                                                                                                                      //
Meteor.users.helpers({                                                                                                // 53
  // conflicts with user.isAdmin property                                                                             //
  // isAdmin: function () {                                                                                           //
  //   return Users.is.admin(this);                                                                                   //
  // },                                                                                                               //
  isOwner: function (document) {                                                                                      // 58
    return Users.is.owner(this, document);                                                                            // 59
  },                                                                                                                  //
  isInvited: function () {                                                                                            // 61
    return Users.is.invited(this);                                                                                    // 62
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/config.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// //////////////////////////////////                                                                                 //
// // AccountsTemplates configuration                                                                                 //
// //////////////////////////////////                                                                                 //
                                                                                                                      //
AccountsTemplates.configure({                                                                                         // 5
    defaultLayout: 'layout',                                                                                          // 6
    defaultLayoutRegions: {},                                                                                         // 7
    defaultContentRegion: 'main',                                                                                     // 8
    enablePasswordChange: true,                                                                                       // 9
    showForgotPasswordLink: true,                                                                                     // 10
    confirmPassword: false,                                                                                           // 11
    overrideLoginErrors: true,                                                                                        // 12
    lowercaseUsername: true,                                                                                          // 13
                                                                                                                      //
    negativeFeedback: false,                                                                                          // 15
    positiveFeedback: false,                                                                                          // 16
    negativeValidation: true,                                                                                         // 17
    positiveValidation: true                                                                                          // 18
});                                                                                                                   //
                                                                                                                      //
AccountsTemplates.configureRoute('signIn', {                                                                          // 21
    name: 'signIn',                                                                                                   // 22
    path: '/sign-in'                                                                                                  // 23
});                                                                                                                   //
AccountsTemplates.configureRoute('signUp', {                                                                          // 25
    name: 'signUp',                                                                                                   // 26
    path: '/register'                                                                                                 // 27
});                                                                                                                   //
AccountsTemplates.configureRoute('changePwd');                                                                        // 29
AccountsTemplates.configureRoute('forgotPwd');                                                                        // 30
AccountsTemplates.configureRoute('resetPwd');                                                                         // 31
AccountsTemplates.configureRoute('enrollAccount');                                                                    // 32
AccountsTemplates.configureRoute('verifyEmail');                                                                      // 33
                                                                                                                      //
// /* global                                                                                                          //
//     AccountsTemplates: false,                                                                                      //
//     Settings: false                                                                                                //
// */                                                                                                                 //
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 41
    Meteor.startup(function () {                                                                                      // 42
        Accounts.emailTemplates.siteName = Settings.get('title');                                                     // 43
        Accounts.emailTemplates.from = Settings.get('defaultEmail');                                                  // 44
    });                                                                                                               //
}                                                                                                                     //
                                                                                                                      //
//Fields                                                                                                              //
AccountsTemplates.addField({                                                                                          // 49
    _id: 'username',                                                                                                  // 50
    type: 'text',                                                                                                     // 51
    displayName: 'username',                                                                                          // 52
    required: true,                                                                                                   // 53
    minLength: 3,                                                                                                     // 54
    errStr: 'error.minChar'                                                                                           // 55
});                                                                                                                   //
                                                                                                                      //
AccountsTemplates.removeField('email');                                                                               // 58
AccountsTemplates.addField({                                                                                          // 59
    _id: 'email',                                                                                                     // 60
    type: 'email',                                                                                                    // 61
    required: true,                                                                                                   // 62
    re: /.+@(.+){2,}\.(.+){2,}/,                                                                                      // 63
    errStr: 'error.accounts.Invalid email'                                                                            // 64
});                                                                                                                   //
                                                                                                                      //
AccountsTemplates.removeField('password');                                                                            // 67
AccountsTemplates.addField({                                                                                          // 68
    _id: 'password',                                                                                                  // 69
    type: 'password',                                                                                                 // 70
    required: true,                                                                                                   // 71
    minLength: 8,                                                                                                     // 72
    errStr: 'error.minChar'                                                                                           // 73
});                                                                                                                   //
                                                                                                                      //
AccountsTemplates.addField({                                                                                          // 76
    _id: 'username_and_email',                                                                                        // 77
    type: 'text',                                                                                                     // 78
    required: true,                                                                                                   // 79
    displayName: 'usernameOrEmail',                                                                                   // 80
    placeholder: 'usernameOrEmail'                                                                                    // 81
});                                                                                                                   //
                                                                                                                      //
// hack to get signOut route not considered among previous paths                                                      //
if (Meteor.isClient) {                                                                                                // 85
    Meteor.startup(function () {                                                                                      // 86
        AccountsTemplates.knownRoutes.push('/sign-out');                                                              // 87
    });                                                                                                               //
}                                                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/permissions.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// note: using collection helpers here is probably a bad idea,                                                        //
// because they'll throw an error when the user is undefined                                                          //
                                                                                                                      //
/**                                                                                                                   //
 * Telescope permissions                                                                                              //
 * @namespace Users.can                                                                                               //
 */                                                                                                                   //
Users.can = {};                                                                                                       // 8
                                                                                                                      //
/**                                                                                                                   //
 * Permissions checks.  Return true if all is well.                                                                   //
 * @param {Object} user - Meteor.user()                                                                               //
 */                                                                                                                   //
Users.can.view = function (user) {                                                                                    // 14
  if (Settings.get('requireViewInvite', false)) {                                                                     // 15
                                                                                                                      //
    if (Meteor.isClient) {                                                                                            // 17
      // on client only, default to the current user                                                                  //
      user = typeof user === 'undefined' ? Meteor.user() : user;                                                      // 19
    }                                                                                                                 //
                                                                                                                      //
    return !!user && (Users.is.admin(user) || Users.is.invited(user));                                                // 22
  }                                                                                                                   //
  return true;                                                                                                        // 24
};                                                                                                                    //
Users.helpers({ canView: function () {                                                                                // 26
    return Users.can.view(this);                                                                                      // 26
  } });                                                                                                               //
                                                                                                                      //
Users.can.viewById = function (userId) {                                                                              // 29
  // if an invite is required to view, run permission check, else return true                                         //
  if (Settings.get('requireViewInvite', false)) {                                                                     // 31
    return !!userId ? Users.can.view(Meteor.users.findOne(userId)) : false;                                           // 32
  }                                                                                                                   //
  return true;                                                                                                        // 34
};                                                                                                                    //
Users.helpers({ canViewById: function () {                                                                            // 36
    return Users.can.viewById(this);                                                                                  // 36
  } });                                                                                                               //
                                                                                                                      //
Users.can.viewPendingPosts = function (user) {                                                                        // 38
  user = typeof user === 'undefined' ? Meteor.user() : user;                                                          // 39
  return Users.is.admin(user);                                                                                        // 40
};                                                                                                                    //
                                                                                                                      //
Users.can.viewPendingPost = function (user, post) {                                                                   // 43
  return Users.is.owner(user, post) || Users.can.viewPendingPosts(user);                                              // 44
};                                                                                                                    //
                                                                                                                      //
Users.can.viewRejectedPosts = function (user) {                                                                       // 47
  user = typeof user === 'undefined' ? Meteor.user() : user;                                                          // 48
  return Users.is.admin(user);                                                                                        // 49
};                                                                                                                    //
                                                                                                                      //
Users.can.viewRejectedPost = function (user, post) {                                                                  // 52
  return Users.is.owner(user, post) || Users.can.viewRejectedPosts(user);                                             // 53
};                                                                                                                    //
                                                                                                                      //
Users.can.post = function (user, returnError) {                                                                       // 56
  user = typeof user === 'undefined' ? Meteor.user() : user;                                                          // 57
                                                                                                                      //
  if (!user) {                                                                                                        // 59
    return returnError ? "no_account" : false;                                                                        // 60
  } else if (Users.is.admin(user)) {                                                                                  //
    return true;                                                                                                      // 62
  } else if (Settings.get('requirePostInvite')) {                                                                     //
    if (user.telescope.isInvited) {                                                                                   // 64
      return true;                                                                                                    // 65
    } else {                                                                                                          //
      return false;                                                                                                   // 67
    }                                                                                                                 //
  } else {                                                                                                            //
    return true;                                                                                                      // 70
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ canPost: function () {                                                                                // 73
    return Users.can.post(this);                                                                                      // 73
  } });                                                                                                               //
                                                                                                                      //
Users.can.comment = function (user, returnError) {                                                                    // 75
  return Users.can.post(user, returnError);                                                                           // 76
};                                                                                                                    //
Users.helpers({ canComment: function () {                                                                             // 78
    return Users.can.comment(this);                                                                                   // 78
  } });                                                                                                               //
                                                                                                                      //
Users.can.vote = function (user, returnError) {                                                                       // 80
  return Users.can.post(user, returnError);                                                                           // 81
};                                                                                                                    //
Users.helpers({ canVote: function () {                                                                                // 83
    return Users.can.vote(this);                                                                                      // 83
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user can edit a document                                                                                //
 * @param {Object} user - The user performing the action                                                              //
 * @param {Object} document - The document being edited                                                               //
 */                                                                                                                   //
Users.can.edit = function (user, document) {                                                                          // 90
  user = typeof user === 'undefined' ? Meteor.user() : user;                                                          // 91
                                                                                                                      //
  if (!user || !document) {                                                                                           // 93
    return false;                                                                                                     // 94
  }                                                                                                                   //
                                                                                                                      //
  var adminCheck = Users.is.admin(user);                                                                              // 97
  var ownerCheck = Users.is.owner(user, document);                                                                    // 98
                                                                                                                      //
  return adminCheck || ownerCheck;                                                                                    // 100
};                                                                                                                    //
Users.helpers({ canEdit: function (document) {                                                                        // 102
    return Users.can.edit(this, document);                                                                            // 102
  } });                                                                                                               //
                                                                                                                      //
Users.can.editById = function (userId, document) {                                                                    // 104
  var user = Meteor.users.findOne(userId);                                                                            // 105
  return Users.can.edit(user, document);                                                                              // 106
};                                                                                                                    //
Users.helpers({ canEditById: function (document) {                                                                    // 108
    return Users.can.editById(this, document);                                                                        // 108
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user can submit a field                                                                                 //
 * @param {Object} user - The user performing the action                                                              //
 * @param {Object} field - The field being edited or inserted                                                         //
 */                                                                                                                   //
Users.can.submitField = function (user, field) {                                                                      // 115
                                                                                                                      //
  if (!field.editableBy || !user) {                                                                                   // 117
    return false;                                                                                                     // 118
  }                                                                                                                   //
                                                                                                                      //
  var adminCheck = _.contains(field.editableBy, "admin") && Users.is.admin(user); // is the field editable by admins?
  var memberCheck = _.contains(field.editableBy, "member"); // is the field editable by regular users?                // 122
                                                                                                                      //
  return adminCheck || memberCheck;                                                                                   // 124
};                                                                                                                    //
Users.helpers({ canSubmitField: function (field) {                                                                    // 127
    return Users.can.submitField(this, field);                                                                        // 127
  } });                                                                                                               //
                                                                                                                      //
/** @function                                                                                                         //
 * Check if a user can edit a field – for now, identical to Users.can.submitField                                     //
 * @param {Object} user - The user performing the action                                                              //
 * @param {Object} field - The field being edited or inserted                                                         //
 */                                                                                                                   //
Users.can.editField = Users.can.submitField;                                                                          // 134
                                                                                                                      //
Users.can.invite = function (user) {                                                                                  // 136
  return Users.is.invited(user) || Users.is.admin(user);                                                              // 137
};                                                                                                                    //
Users.helpers({ canInvite: function () {                                                                              // 139
    return Users.can.invite(this);                                                                                    // 139
  } });                                                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/users.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   //
 * Vote schema                                                                                                        //
 * @type {SimpleSchema}                                                                                               //
 */                                                                                                                   //
Telescope.schemas.votes = new SimpleSchema({                                                                          // 5
  itemId: {                                                                                                           // 6
    type: String                                                                                                      // 7
  },                                                                                                                  //
  power: {                                                                                                            // 9
    type: Number,                                                                                                     // 10
    optional: true                                                                                                    // 11
  },                                                                                                                  //
  votedAt: {                                                                                                          // 13
    type: Date,                                                                                                       // 14
    optional: true                                                                                                    // 15
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * User Data schema                                                                                                   //
 * @type {SimpleSchema}                                                                                               //
 */                                                                                                                   //
Telescope.schemas.userData = new SimpleSchema({                                                                       // 23
  /**                                                                                                                 //
    Bio (Markdown version)                                                                                            //
  */                                                                                                                  //
  bio: {                                                                                                              // 27
    type: String,                                                                                                     // 28
    optional: true,                                                                                                   // 29
    editableBy: ["member", "admin"],                                                                                  // 30
    autoform: {                                                                                                       // 31
      rows: 5                                                                                                         // 32
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    Total comment count                                                                                               //
  */                                                                                                                  //
  commentCount: {                                                                                                     // 38
    type: Number,                                                                                                     // 39
    "public": true,                                                                                                   // 40
    optional: true                                                                                                    // 41
  },                                                                                                                  //
  /**                                                                                                                 //
    The name displayed throughout the app. Can contain spaces and special characters, doesn't need to be unique       //
  */                                                                                                                  //
  displayName: {                                                                                                      // 46
    type: String,                                                                                                     // 47
    optional: true,                                                                                                   // 48
    "public": true,                                                                                                   // 49
    profile: true,                                                                                                    // 50
    editableBy: ["member", "admin"]                                                                                   // 51
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing comment downvotes                                                                             //
  */                                                                                                                  //
  downvotedComments: {                                                                                                // 56
    type: [Telescope.schemas.votes],                                                                                  // 57
    "public": true,                                                                                                   // 58
    optional: true                                                                                                    // 59
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing posts downvotes                                                                               //
  */                                                                                                                  //
  downvotedPosts: {                                                                                                   // 64
    type: [Telescope.schemas.votes],                                                                                  // 65
    "public": true,                                                                                                   // 66
    optional: true                                                                                                    // 67
  },                                                                                                                  //
  /**                                                                                                                 //
    The user's email. Modifiable.                                                                                     //
  */                                                                                                                  //
  email: {                                                                                                            // 72
    type: String,                                                                                                     // 73
    optional: true,                                                                                                   // 74
    regEx: SimpleSchema.RegEx.Email,                                                                                  // 75
    required: true,                                                                                                   // 76
    editableBy: ["member", "admin"]                                                                                   // 77
    // unique: true // note: find a way to fix duplicate accounts before enabling this                                //
  },                                                                                                                  //
  /**                                                                                                                 //
    A hash of the email, used for Gravatar // TODO: change this when email changes                                    //
  */                                                                                                                  //
  emailHash: {                                                                                                        // 83
    type: String,                                                                                                     // 84
    "public": true,                                                                                                   // 85
    optional: true                                                                                                    // 86
  },                                                                                                                  //
  /**                                                                                                                 //
    The HTML version of the bio field                                                                                 //
  */                                                                                                                  //
  htmlBio: {                                                                                                          // 91
    type: String,                                                                                                     // 92
    "public": true,                                                                                                   // 93
    profile: true,                                                                                                    // 94
    optional: true,                                                                                                   // 95
    autoform: {                                                                                                       // 96
      omit: true                                                                                                      // 97
    },                                                                                                                //
    template: "user_profile_bio"                                                                                      // 99
  },                                                                                                                  //
  /**                                                                                                                 //
    The user's karma                                                                                                  //
  */                                                                                                                  //
  karma: {                                                                                                            // 104
    type: Number,                                                                                                     // 105
    decimal: true,                                                                                                    // 106
    "public": true,                                                                                                   // 107
    optional: true                                                                                                    // 108
  },                                                                                                                  //
  /**                                                                                                                 //
    Total post count                                                                                                  //
  */                                                                                                                  //
  postCount: {                                                                                                        // 113
    type: Number,                                                                                                     // 114
    "public": true,                                                                                                   // 115
    optional: true                                                                                                    // 116
  },                                                                                                                  //
  /**                                                                                                                 //
    A blackbox modifiable object to store the user's settings                                                         //
  */                                                                                                                  //
  settings: {                                                                                                         // 121
    type: Object,                                                                                                     // 122
    optional: true,                                                                                                   // 123
    editableBy: ["member", "admin"],                                                                                  // 124
    blackbox: true,                                                                                                   // 125
    autoform: {                                                                                                       // 126
      omit: true                                                                                                      // 127
    }                                                                                                                 //
  },                                                                                                                  //
  /**                                                                                                                 //
    The user's profile URL slug // TODO: change this when displayName changes                                         //
  */                                                                                                                  //
  slug: {                                                                                                             // 133
    type: String,                                                                                                     // 134
    "public": true,                                                                                                   // 135
    optional: true                                                                                                    // 136
  },                                                                                                                  //
  /**                                                                                                                 //
    The user's Twitter username                                                                                       //
  */                                                                                                                  //
  twitterUsername: {                                                                                                  // 141
    type: String,                                                                                                     // 142
    optional: true,                                                                                                   // 143
    "public": true,                                                                                                   // 144
    profile: true,                                                                                                    // 145
    editableBy: ["member", "admin"],                                                                                  // 146
    template: "user_profile_twitter"                                                                                  // 147
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing comments upvotes                                                                              //
  */                                                                                                                  //
  upvotedComments: {                                                                                                  // 152
    type: [Telescope.schemas.votes],                                                                                  // 153
    "public": true,                                                                                                   // 154
    optional: true                                                                                                    // 155
  },                                                                                                                  //
  /**                                                                                                                 //
    An array containing posts upvotes                                                                                 //
  */                                                                                                                  //
  upvotedPosts: {                                                                                                     // 160
    type: [Telescope.schemas.votes],                                                                                  // 161
    "public": true,                                                                                                   // 162
    optional: true                                                                                                    // 163
  },                                                                                                                  //
  /**                                                                                                                 //
    A link to the user's homepage                                                                                     //
  */                                                                                                                  //
  website: {                                                                                                          // 168
    type: String,                                                                                                     // 169
    regEx: SimpleSchema.RegEx.Url,                                                                                    // 170
    "public": true,                                                                                                   // 171
    profile: true,                                                                                                    // 172
    optional: true,                                                                                                   // 173
    editableBy: ["member", "admin"]                                                                                   // 174
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Users schema                                                                                                       //
 * @type {SimpleSchema}                                                                                               //
 */                                                                                                                   //
Users.schema = new SimpleSchema({                                                                                     // 182
  _id: {                                                                                                              // 183
    type: String,                                                                                                     // 184
    "public": true,                                                                                                   // 185
    optional: true                                                                                                    // 186
  },                                                                                                                  //
  username: {                                                                                                         // 188
    type: String,                                                                                                     // 189
    // regEx: /^[a-z0-9A-Z_]{3,15}$/,                                                                                 //
    "public": true,                                                                                                   // 191
    optional: true                                                                                                    // 192
  },                                                                                                                  //
  emails: {                                                                                                           // 194
    type: [Object],                                                                                                   // 195
    optional: true                                                                                                    // 196
  },                                                                                                                  //
  "emails.$.address": {                                                                                               // 198
    type: String,                                                                                                     // 199
    regEx: SimpleSchema.RegEx.Email,                                                                                  // 200
    optional: true                                                                                                    // 201
  },                                                                                                                  //
  "emails.$.verified": {                                                                                              // 203
    type: Boolean,                                                                                                    // 204
    optional: true                                                                                                    // 205
  },                                                                                                                  //
  createdAt: {                                                                                                        // 207
    type: Date,                                                                                                       // 208
    "public": true,                                                                                                   // 209
    optional: true                                                                                                    // 210
  },                                                                                                                  //
  isAdmin: {                                                                                                          // 212
    type: Boolean,                                                                                                    // 213
    optional: true,                                                                                                   // 214
    editableBy: ["admin"],                                                                                            // 215
    autoform: {                                                                                                       // 216
      omit: true                                                                                                      // 217
    }                                                                                                                 //
  },                                                                                                                  //
  profile: {                                                                                                          // 220
    type: Object,                                                                                                     // 221
    optional: true,                                                                                                   // 222
    blackbox: true                                                                                                    // 223
  },                                                                                                                  //
  telescope: { // telescope-specific data                                                                             // 225
    type: Telescope.schemas.userData,                                                                                 // 226
    optional: true                                                                                                    // 227
  },                                                                                                                  //
  services: {                                                                                                         // 229
    type: Object,                                                                                                     // 230
    optional: true,                                                                                                   // 231
    blackbox: true                                                                                                    // 232
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 236
  Users.internationalize();                                                                                           // 237
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Attach schema to Meteor.users collection                                                                           //
 */                                                                                                                   //
Users.attachSchema(Users.schema);                                                                                     // 243
                                                                                                                      //
/**                                                                                                                   //
 * Users collection permissions                                                                                       //
 */                                                                                                                   //
                                                                                                                      //
Users.allow({                                                                                                         // 249
  update: _.partial(Telescope.allowCheck, Meteor.users),                                                              // 250
  remove: _.partial(Telescope.allowCheck, Meteor.users)                                                               // 251
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/avatars.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Avatar.setOptions({                                                                                                   // 1
  fallbackType: 'initials',                                                                                           // 2
  emailHashProperty: 'telescope.emailHash'                                                                            // 3
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/callbacks.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
//////////////////////////////////////////////////////                                                                //
// Collection Hooks                                 //                                                                //
//////////////////////////////////////////////////////                                                                //
                                                                                                                      //
/**                                                                                                                   //
 * Generate HTML body from Markdown on user bio insert                                                                //
 */                                                                                                                   //
Users.after.insert(function (userId, user) {                                                                          // 8
                                                                                                                      //
  // run create user async callbacks                                                                                  //
  Telescope.callbacks.runAsync("onCreateUserAsync", user);                                                            // 11
                                                                                                                      //
  // check if all required fields have been filled in. If so, run profile completion callbacks                        //
  if (Users.hasCompletedProfile(user)) {                                                                              // 14
    Telescope.callbacks.runAsync("profileCompletedAsync", user);                                                      // 15
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Generate HTML body from Markdown when user bio is updated                                                          //
 */                                                                                                                   //
Users.before.update(function (userId, doc, fieldNames, modifier) {                                                    // 23
  // if bio is being modified, update htmlBio too                                                                     //
  if (Meteor.isServer && modifier.$set && modifier.$set["telescope.bio"]) {                                           // 25
    modifier.$set["telescope.htmlBio"] = Telescope.utils.sanitize(marked(modifier.$set["telescope.bio"]));            // 26
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Disallow $rename                                                                                                   //
 */                                                                                                                   //
Users.before.update(function (userId, doc, fieldNames, modifier) {                                                    // 33
  if (!!modifier.$rename) {                                                                                           // 34
    throw new Meteor.Error("illegal $rename operator detected!");                                                     // 35
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * If user.telescope.email has changed, check for existing emails and change user.emails and email hash if needed     //
 */                                                                                                                   //
if (Meteor.isServer) {                                                                                                // 42
  Users.before.update(function (userId, doc, fieldNames, modifier) {                                                  // 43
                                                                                                                      //
    var user = doc;                                                                                                   // 45
                                                                                                                      //
    // if email is being modified, update user.emails too                                                             //
    if (Meteor.isServer && modifier.$set && modifier.$set["telescope.email"]) {                                       // 48
                                                                                                                      //
      var newEmail = modifier.$set["telescope.email"];                                                                // 50
                                                                                                                      //
      // check for existing emails and throw error if necessary                                                       //
      var userWithSameEmail = Users.findByEmail(newEmail);                                                            // 53
      if (userWithSameEmail && userWithSameEmail._id !== doc._id) {                                                   // 54
        throw new Meteor.Error("email_taken2", i18n.t("this_email_is_already_taken") + " (" + newEmail + ")");        // 55
      }                                                                                                               //
                                                                                                                      //
      // if user.emails exists, change it too                                                                         //
      if (!!user.emails) {                                                                                            // 59
        user.emails[0].address = newEmail;                                                                            // 60
        modifier.$set.emails = user.emails;                                                                           // 61
      }                                                                                                               //
                                                                                                                      //
      // update email hash                                                                                            //
      modifier.$set["telescope.emailHash"] = Gravatar.hash(newEmail);                                                 // 65
    }                                                                                                                 //
  });                                                                                                                 //
}                                                                                                                     //
                                                                                                                      //
//////////////////////////////////////////////////////                                                                //
// Callbacks                                        //                                                                //
//////////////////////////////////////////////////////                                                                //
                                                                                                                      //
/**                                                                                                                   //
 * Set up user object on creation                                                                                     //
 * @param {Object} user – the user object being iterated on and returned                                              //
 * @param {Object} options – user options                                                                             //
 */                                                                                                                   //
function setupUser(user, options) {                                                                                   // 80
  // ------------------------------ Properties ------------------------------ //                                      //
  var userProperties = {                                                                                              // 82
    profile: options.profile || {},                                                                                   // 83
    telescope: {                                                                                                      // 84
      karma: 0,                                                                                                       // 85
      isInvited: false,                                                                                               // 86
      postCount: 0,                                                                                                   // 87
      commentCount: 0,                                                                                                // 88
      invitedCount: 0,                                                                                                // 89
      upvotedPosts: [],                                                                                               // 90
      downvotedPosts: [],                                                                                             // 91
      upvotedComments: [],                                                                                            // 92
      downvotedComments: []                                                                                           // 93
    }                                                                                                                 //
  };                                                                                                                  //
  user = _.extend(user, userProperties);                                                                              // 96
                                                                                                                      //
  // look in a few places for the user email                                                                          //
  if (options.email) {                                                                                                // 99
    user.telescope.email = options.email;                                                                             // 100
  } else if (user.services.facebook && user.services.facebook.email) {                                                //
    user.telescope.email = user.services.facebook.email;                                                              // 102
  }                                                                                                                   //
                                                                                                                      //
  // generate email hash                                                                                              //
  if (!!user.telescope.email) {                                                                                       // 106
    user.telescope.emailHash = Gravatar.hash(user.telescope.email);                                                   // 107
  }                                                                                                                   //
                                                                                                                      //
  // look in a few places for the displayName                                                                         //
  if (user.profile.username) {                                                                                        // 111
    user.telescope.displayName = user.profile.username;                                                               // 112
  } else if (user.profile.name) {                                                                                     //
    user.telescope.displayName = user.profile.name;                                                                   // 114
  } else {                                                                                                            //
    user.telescope.displayName = user.username;                                                                       // 116
  }                                                                                                                   //
                                                                                                                      //
  // create slug from display name                                                                                    //
  user.telescope.slug = Telescope.utils.slugify(user.telescope.displayName);                                          // 120
                                                                                                                      //
  // if this is not a dummy account, and is the first user ever, make them an admin                                   //
  user.isAdmin = !user.profile.isDummy && Meteor.users.find({ 'profile.isDummy': { $ne: true } }).count() === 0 ? true : false;
                                                                                                                      //
  Events.track('new user', { username: user.username, email: user.telescope.email });                                 // 125
                                                                                                                      //
  return user;                                                                                                        // 127
}                                                                                                                     //
Telescope.callbacks.add("onCreateUser", setupUser);                                                                   // 129
                                                                                                                      //
function hasCompletedProfile(user) {                                                                                  // 132
  return Users.hasCompletedProfile(user);                                                                             // 133
}                                                                                                                     //
Telescope.callbacks.add("profileCompletedChecks", hasCompletedProfile);                                               // 135
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/modules.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
Telescope.modules.add("profileDisplay", [{                                                                            // 2
  template: 'user_info',                                                                                              // 4
  order: 1                                                                                                            // 5
}, {                                                                                                                  //
  template: 'user_posts',                                                                                             // 8
  order: 2                                                                                                            // 9
}, {                                                                                                                  //
  template: 'user_upvoted_posts',                                                                                     // 12
  order: 3                                                                                                            // 13
}, {                                                                                                                  //
  template: 'user_downvoted_posts',                                                                                   // 16
  order: 5                                                                                                            // 17
}, {                                                                                                                  //
  template: 'user_comments',                                                                                          // 20
  order: 5                                                                                                            // 21
}]);                                                                                                                  //
                                                                                                                      //
Telescope.modules.add("profileEdit", [{                                                                               // 25
  template: 'user_account',                                                                                           // 27
  order: 1                                                                                                            // 28
}]);                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/helpers.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
////////////////////                                                                                                  //
//  User Getters  //                                                                                                  //
////////////////////                                                                                                  //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's username (unique, no special characters or spaces)                                                    //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getUserName = function (user) {                                                                                 // 9
  try {                                                                                                               // 10
    if (user.username) return user.username;                                                                          // 11
    if (user && user.services && user.services.twitter && user.services.twitter.screenName) return user.services.twitter.screenName;
  } catch (error) {                                                                                                   //
    console.log(error);                                                                                               // 17
    return null;                                                                                                      // 18
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ getUserName: function () {                                                                            // 21
    return Users.getUserName(this);                                                                                   // 21
  } });                                                                                                               //
Users.getUserNameById = function (userId) {                                                                           // 22
  return Users.getUserName(Meteor.users.findOne(userId));                                                             // 22
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's display name (not unique, can take special characters and spaces)                                     //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getDisplayName = function (user) {                                                                              // 28
  if (typeof user === "undefined") {                                                                                  // 29
    return "";                                                                                                        // 30
  } else {                                                                                                            //
    return user.telescope && user.telescope.displayName ? user.telescope.displayName : Users.getUserName(user);       // 32
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ getDisplayName: function () {                                                                         // 35
    return Users.getDisplayName(this);                                                                                // 35
  } });                                                                                                               //
Users.getDisplayNameById = function (userId) {                                                                        // 36
  return Users.getDisplayName(Meteor.users.findOne(userId));                                                          // 36
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's profile URL                                                                                           //
 * @param {Object} user (note: we only actually need either the _id or slug properties)                               //
 * @param {Boolean} isAbsolute                                                                                        //
 */                                                                                                                   //
Users.getProfileUrl = function (user, isAbsolute) {                                                                   // 43
  if (typeof user === "undefined") {                                                                                  // 44
    return "";                                                                                                        // 45
  }                                                                                                                   //
  var isAbsolute = typeof isAbsolute === "undefined" ? false : isAbsolute; // default to false                        // 47
  var prefix = isAbsolute ? Telescope.utils.getSiteUrl().slice(0, -1) : "";                                           // 48
  return prefix + FlowRouter.path("userProfile", { _idOrSlug: user.telescope && user.telescope.slug || user._id });   // 49
};                                                                                                                    //
Users.helpers({ getProfileUrl: function (isAbsolute) {                                                                // 51
    return Users.getProfileUrl(this, isAbsolute);                                                                     // 51
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's Twitter name                                                                                          //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getTwitterName = function (user) {                                                                              // 57
  // return twitter name provided by user, or else the one used for twitter login                                     //
  if (typeof user !== "undefined") {                                                                                  // 59
    if (Telescope.utils.checkNested(user, 'profile', 'twitter')) {                                                    // 60
      return user.profile.twitter;                                                                                    // 61
    } else if (Telescope.utils.checkNested(user, 'services', 'twitter', 'screenName')) {                              //
      return user.services.twitter.screenName;                                                                        // 63
    }                                                                                                                 //
  }                                                                                                                   //
  return null;                                                                                                        // 66
};                                                                                                                    //
Users.helpers({ getTwitterName: function () {                                                                         // 68
    return Users.getTwitterName(this);                                                                                // 68
  } });                                                                                                               //
Users.getTwitterNameById = function (userId) {                                                                        // 69
  return Users.getTwitterName(Meteor.users.findOne(userId));                                                          // 69
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's GitHub name                                                                                           //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getGitHubName = function (user) {                                                                               // 75
  // return twitter name provided by user, or else the one used for twitter login                                     //
  if (Telescope.utils.checkNested(user, 'profile', 'github')) {                                                       // 77
    return user.profile.github;                                                                                       // 78
  } else if (Telescope.utils.checkNested(user, 'services', 'github', 'screenName')) {                                 //
    // TODO: double-check this with GitHub login                                                                      //
    return user.services.github.screenName;                                                                           // 80
  }                                                                                                                   //
  return null;                                                                                                        // 82
};                                                                                                                    //
Users.helpers({ getGitHubName: function () {                                                                          // 84
    return Users.getGitHubName(this);                                                                                 // 84
  } });                                                                                                               //
Users.getGitHubNameById = function (userId) {                                                                         // 85
  return Users.getGitHubName(Meteor.users.findOne(userId));                                                           // 85
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's email                                                                                                 //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getEmail = function (user) {                                                                                    // 91
  if (user.telescope && user.telescope.email) {                                                                       // 92
    return user.telescope.email;                                                                                      // 93
  } else {                                                                                                            //
    return null;                                                                                                      // 95
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ getEmail: function () {                                                                               // 98
    return Users.getEmail(this);                                                                                      // 98
  } });                                                                                                               //
Users.getEmailById = function (userId) {                                                                              // 99
  return Users.getEmail(Meteor.users.findOne(userId));                                                                // 99
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user's email hash                                                                                            //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.getEmailHash = function (user) {                                                                                // 105
  // has to be this way to work with Gravatar                                                                         //
  return Gravatar.hash(Users.getEmail(user));                                                                         // 107
};                                                                                                                    //
Users.helpers({ getEmailHash: function () {                                                                           // 109
    return Users.getEmailHash(this);                                                                                  // 109
  } });                                                                                                               //
Users.getEmailHashById = function (userId) {                                                                          // 110
  return Users.getEmailHash(Meteor.users.findOne(userId));                                                            // 110
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user's profile is complete                                                                              //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.userProfileComplete = function (user) {                                                                         // 116
  for (var i = 0; i < Telescope.callbacks.profileCompletedChecks.length; i++) {                                       // 117
    if (!Telescope.callbacks.profileCompletedChecks[i](user)) {                                                       // 118
      return false;                                                                                                   // 119
    }                                                                                                                 //
  }                                                                                                                   //
  return true;                                                                                                        // 122
};                                                                                                                    //
Users.helpers({ userProfileComplete: function () {                                                                    // 124
    return Users.userProfileComplete(this);                                                                           // 124
  } });                                                                                                               //
Users.userProfileCompleteById = function (userId) {                                                                   // 125
  return Users.userProfileComplete(Meteor.users.findOne(userId));                                                     // 125
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Get a user setting                                                                                                 //
 * @param {Object} user                                                                                               //
 * @param {String} settingName                                                                                        //
 * @param {Object} defaultValue                                                                                       //
 */                                                                                                                   //
Users.getSetting = function (user, settingName, defaultValue) {                                                       // 133
  user = user || Meteor.user();                                                                                       // 134
  defaultValue = defaultValue || null;                                                                                // 135
                                                                                                                      //
  // all settings should be in the user.telescope namespace, so add "telescope." if needed                            //
  settingName = settingName.slice(0, 10) === "telescope." ? settingName : "telescope." + settingName;                 // 138
                                                                                                                      //
  if (user.telescope) {                                                                                               // 140
    var settingValue = this.getProperty(user, settingName);                                                           // 141
    return settingValue === null ? defaultValue : settingValue;                                                       // 142
  } else {                                                                                                            //
    return defaultValue;                                                                                              // 144
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ getSetting: function (settingName, defaultValue) {                                                    // 147
    return Users.getSetting(this, settingName, defaultValue);                                                         // 147
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Set a user setting                                                                                                 //
 * @param {Object} user                                                                                               //
 * @param {String} settingName                                                                                        //
 * @param {Object} defaultValue                                                                                       //
 */                                                                                                                   //
Users.setSetting = function (user, settingName, value) {                                                              // 155
  if (user) {                                                                                                         // 156
                                                                                                                      //
    // all settings should be in the user.telescope namespace, so add "telescope." if needed                          //
    var field = settingName.slice(0, 10) === "telescope." ? settingName : "telescope." + settingName;                 // 159
                                                                                                                      //
    var modifier = { $set: {} };                                                                                      // 161
    modifier.$set[field] = value;                                                                                     // 162
    Users.update(user._id, modifier);                                                                                 // 163
  }                                                                                                                   //
};                                                                                                                    //
Users.helpers({ setSetting: function () {                                                                             // 167
    return Users.setSetting(this);                                                                                    // 167
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user has upvoted a post                                                                                 //
 * @param {Object} user                                                                                               //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Users.hasUpvoted = function (user, post) {                                                                            // 174
  return user && _.include(post.upvoters, user._id);                                                                  // 175
};                                                                                                                    //
Users.helpers({ hasUpvoted: function (post) {                                                                         // 177
    return Users.hasUpvoted(this, post);                                                                              // 177
  } });                                                                                                               //
                                                                                                                      //
/**                                                                                                                   //
 * Check if a user has downvoted a post                                                                               //
 * @param {Object} user                                                                                               //
 * @param {Object} post                                                                                               //
 */                                                                                                                   //
Users.hasDownvoted = function (user, post) {                                                                          // 184
  return user && _.include(post.downvoters, user._id);                                                                // 185
};                                                                                                                    //
Users.helpers({ hasDownvoted: function (post) {                                                                       // 187
    return Users.hasDownvoted(this, post);                                                                            // 187
  } });                                                                                                               //
                                                                                                                      //
///////////////////                                                                                                   //
// Other Helpers //                                                                                                   //
///////////////////                                                                                                   //
                                                                                                                      //
Users.findLast = function (user, collection) {                                                                        // 193
  return collection.findOne({ userId: user._id }, { sort: { createdAt: -1 } });                                       // 194
};                                                                                                                    //
                                                                                                                      //
Users.timeSinceLast = function (user, collection) {                                                                   // 197
  var now = new Date().getTime();                                                                                     // 198
  var last = this.findLast(user, collection);                                                                         // 199
  if (!last) return 999; // if this is the user's first post or comment ever, stop here                               // 200
  return Math.abs(Math.floor((now - last.createdAt) / 1000));                                                         // 202
};                                                                                                                    //
                                                                                                                      //
Users.numberOfItemsInPast24Hours = function (user, collection) {                                                      // 205
  var mNow = moment();                                                                                                // 206
  var items = collection.find({                                                                                       // 207
    userId: user._id,                                                                                                 // 208
    createdAt: {                                                                                                      // 209
      $gte: mNow.subtract(24, 'hours').toDate()                                                                       // 210
    }                                                                                                                 //
  });                                                                                                                 //
  return items.count();                                                                                               // 213
};                                                                                                                    //
                                                                                                                      //
Users.getProperty = function (object, property) {                                                                     // 216
  // recursive function to get nested properties                                                                      //
  var array = property.split('.');                                                                                    // 218
  if (array.length > 1) {                                                                                             // 219
    var parent = array.shift();                                                                                       // 220
    // if our property is not at this level, call function again one level deeper if we can go deeper, else return null
    return typeof object[parent] === "undefined" ? null : this.getProperty(object[parent], array.join('.'));          // 222
  } else {                                                                                                            //
    // else return property                                                                                           //
    return object[array[0]];                                                                                          // 225
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
Users.updateAdmin = function (userId, admin) {                                                                        // 229
  Users.update(userId, { $set: { isAdmin: admin } });                                                                 // 230
};                                                                                                                    //
                                                                                                                      //
Users.adminUsers = function (options) {                                                                               // 233
  return this.find({ isAdmin: true }, options).fetch();                                                               // 234
};                                                                                                                    //
                                                                                                                      //
Users.getCurrentUserEmail = function () {                                                                             // 237
  return Meteor.user() ? Users.getEmail(Meteor.user()) : '';                                                          // 238
};                                                                                                                    //
                                                                                                                      //
Users.findByEmail = function (email) {                                                                                // 241
  return Meteor.users.findOne({ "telescope.email": email });                                                          // 242
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * @method Users.getRequiredFields                                                                                    //
 * Get a list of all fields required for a profile to be complete.                                                    //
 */                                                                                                                   //
Users.getRequiredFields = function () {                                                                               // 250
  var schema = Users.simpleSchema()._schema;                                                                          // 251
  var fields = _.filter(_.keys(schema), function (fieldName) {                                                        // 252
    var field = schema[fieldName];                                                                                    // 253
    return !!field.required;                                                                                          // 254
  });                                                                                                                 //
  return fields;                                                                                                      // 256
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Check if the user has completed their profile.                                                                     //
 * @param {Object} user                                                                                               //
 */                                                                                                                   //
Users.hasCompletedProfile = function (user) {                                                                         // 263
  return _.every(Users.getRequiredFields(), function (fieldName) {                                                    // 264
    return !!Telescope.getNestedProperty(user, fieldName);                                                            // 265
  });                                                                                                                 //
};                                                                                                                    //
Users.helpers({ hasCompletedProfile: function () {                                                                    // 268
    return Users.hasCompletedProfile(this);                                                                           // 268
  } });                                                                                                               //
Users.hasCompletedProfileById = function (userId) {                                                                   // 269
  return Users.hasCompletedProfile(Meteor.users.findOne(userId));                                                     // 269
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/menus.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Telescope.modules.add("secondaryNav", [{                                                                              // 1
  template: 'user_menu',                                                                                              // 3
  order: 10                                                                                                           // 4
}]);                                                                                                                  //
                                                                                                                      //
Telescope.modules.add("mobileNav", [{                                                                                 // 8
  template: 'user_menu',                                                                                              // 10
  order: 20                                                                                                           // 11
}]);                                                                                                                  //
                                                                                                                      //
var userMenuItems = [{                                                                                                // 15
  route: function () {                                                                                                // 17
    var user = Meteor.user();                                                                                         // 18
    return FlowRouter.path('userProfile', { _idOrSlug: user && user.telescope && user.telescope.slug });              // 19
  },                                                                                                                  //
  label: 'profile'                                                                                                    // 21
  // description: 'view_your_profile'                                                                                 //
}, {                                                                                                                  //
  route: function () {                                                                                                // 25
    var user = Meteor.user();                                                                                         // 26
    return FlowRouter.path('userEdit', { _idOrSlug: user && user.telescope && user.telescope.slug });                 // 27
  },                                                                                                                  //
  label: 'edit_account'                                                                                               // 29
  // description: 'edit_your_profile'                                                                                 //
}, {                                                                                                                  //
  route: 'adminSettings',                                                                                             // 33
  label: 'settings',                                                                                                  // 34
  // description: 'settings',                                                                                         //
  adminOnly: true                                                                                                     // 36
}, {                                                                                                                  //
  route: 'signOut',                                                                                                   // 39
  label: 'sign_out'                                                                                                   // 40
  // description: 'sign_out'                                                                                          //
}];                                                                                                                   //
                                                                                                                      //
Telescope.menuItems.add("userMenu", Telescope.menuItems.internationalize(userMenuItems));                             // 45
                                                                                                                      //
// array containing items in the admin menu                                                                           //
Telescope.menuItems.add("adminMenu", [{                                                                               // 48
  route: 'adminUsers',                                                                                                // 50
  label: "users",                                                                                                     // 51
  description: "users_dashboard"                                                                                      // 52
}]);                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/pubsub.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
////////////////////////////////////                                                                                  //
// Publications and Subscriptions //                                                                                  //
////////////////////////////////////                                                                                  //
                                                                                                                      //
/**                                                                                                                   //
 * Users pub/sub configs and methods                                                                                  //
 * @namespace Users.pubsub                                                                                            //
 */                                                                                                                   //
Users.pubsub = {};                                                                                                    // 9
                                                                                                                      //
/**                                                                                                                   //
 * Default user object fields in publication                                                                          //
 * @type {Object}                                                                                                     //
 */                                                                                                                   //
                                                                                                                      //
var publicFields = Users.simpleSchema().getPublicFields();                                                            // 16
                                                                                                                      //
// add public fields as specified in schema                                                                           //
Users.pubsub.publicProperties = _.object(publicFields, _.map(publicFields, function () {                              // 19
  return true;                                                                                                        // 19
}));                                                                                                                  //
                                                                                                                      //
// add a few more fields                                                                                              //
Users.pubsub.publicProperties = _.extend(Users.pubsub.publicProperties, {                                             // 22
  'services.twitter.profile_image_url': true,                                                                         // 23
  'services.twitter.profile_image_url_https': true,                                                                   // 24
  'services.facebook.id': true,                                                                                       // 25
  'services.twitter.screenName': true                                                                                 // 26
});                                                                                                                   //
                                                                                                                      //
/**                                                                                                                   //
 * Options for your own user account (for security reasons, block certain properties)                                 //
 * @type {Object}                                                                                                     //
 */                                                                                                                   //
Users.pubsub.hiddenProperties = {                                                                                     // 33
  'services.password.bcrypt': false                                                                                   // 34
};                                                                                                                    //
                                                                                                                      //
/**                                                                                                                   //
 * Minimum required properties to display avatars and display names                                                   //
 * @type {Object}                                                                                                     //
 */                                                                                                                   //
Users.pubsub.avatarProperties = {                                                                                     // 41
  _id: true,                                                                                                          // 42
  'telescope.emailHash': true,                                                                                        // 43
  'telescope.slug': true,                                                                                             // 44
  'telescope.displayName': true,                                                                                      // 45
  username: true,                                                                                                     // 46
  'profile.username': true,                                                                                           // 47
  'profile.github': true,                                                                                             // 48
  'profile.twitter': true,                                                                                            // 49
  'services.twitter.profile_image_url': true,                                                                         // 50
  'services.twitter.profile_image_url_https': true,                                                                   // 51
  'services.facebook.id': true,                                                                                       // 52
  'services.twitter.screenName': true,                                                                                // 53
  'services.github.screenName': true };                                                                               // 54
                                                                                                                      //
// note: to work around nested fields subscription bug, we'll publish                                                 //
// all public user properties at all times for now                                                                    //
// see https://github.com/meteor/meteor/issues/998                                                                    //
                                                                                                                      //
// Github is not really used, but there are some mentions to it in the code                                           //
Users.pubsub.avatarProperties = Users.pubsub.publicProperties;                                                        // 61
                                                                                                                      //
/**                                                                                                                   //
 * Build Users subscription with filter, sort, and limit args.                                                        //
 * @param {String} filterBy                                                                                           //
 * @param {String} sortBy                                                                                             //
 * @param {Number} limit                                                                                              //
 */                                                                                                                   //
Users.pubsub.getSubParams = function (filterBy, sortBy, limit) {                                                      // 69
  var find = {},                                                                                                      // 70
      sort = { createdAt: -1 };                                                                                       //
                                                                                                                      //
  switch (filterBy) {                                                                                                 // 73
    case 'invited':                                                                                                   // 74
      // consider admins as invited                                                                                   //
      find = { $or: [{ isInvited: true }, { isAdmin: true }] };                                                       // 76
      break;                                                                                                          // 77
    case 'uninvited':                                                                                                 // 77
      find = { $and: [{ isInvited: false }, { isAdmin: false }] };                                                    // 79
      break;                                                                                                          // 80
    case 'admin':                                                                                                     // 80
      find = { isAdmin: true };                                                                                       // 82
      break;                                                                                                          // 83
  }                                                                                                                   // 83
                                                                                                                      //
  switch (sortBy) {                                                                                                   // 86
    case 'username':                                                                                                  // 87
      sort = { username: 1 };                                                                                         // 88
      break;                                                                                                          // 89
    case 'karma':                                                                                                     // 89
      sort = { karma: -1 };                                                                                           // 91
      break;                                                                                                          // 92
    case 'postCount':                                                                                                 // 92
      sort = { postCount: -1 };                                                                                       // 94
      break;                                                                                                          // 95
    case 'commentCount':                                                                                              // 96
      sort = { commentCount: -1 };                                                                                    // 97
      break;                                                                                                          // 98
    case 'invitedCount':                                                                                              // 98
      sort = { invitedCount: -1 };                                                                                    // 100
  }                                                                                                                   // 100
  return {                                                                                                            // 102
    find: find,                                                                                                       // 103
    options: { sort: sort, limit: limit }                                                                             // 104
  };                                                                                                                  //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/methods.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var completeUserProfile = function (modifier, userId, user) {                                                         // 1
                                                                                                                      //
  Users.update(userId, modifier);                                                                                     // 3
                                                                                                                      //
  Telescope.callbacks.runAsync("profileCompletedAsync", Users.findOne(userId));                                       // 5
                                                                                                                      //
  return Users.findOne(userId);                                                                                       // 7
};                                                                                                                    //
                                                                                                                      //
Meteor.methods({                                                                                                      // 11
  completeUserProfile: function (modifier, userId) {                                                                  // 12
                                                                                                                      //
    check(modifier, Match.OneOf({ $set: Object }, { $unset: Object }, { $set: Object, $unset: Object }));             // 14
    check(userId, String);                                                                                            // 15
                                                                                                                      //
    var currentUser = Meteor.user(),                                                                                  // 17
        user = Users.findOne(userId),                                                                                 //
        schema = Users.simpleSchema()._schema;                                                                        //
                                                                                                                      //
    // ------------------------------ Checks ------------------------------ //                                        //
                                                                                                                      //
    // check that user can edit document                                                                              //
    if (!user || !Users.can.edit(currentUser, user)) {                                                                // 24
      throw new Meteor.Error(601, i18n.t('sorry_you_cannot_edit_this_user'));                                         // 25
    }                                                                                                                 //
                                                                                                                      //
    // if an $unset modifier is present, it means one or more of the fields is missing                                //
    if (modifier.$unset) {                                                                                            // 29
      throw new Meteor.Error(601, i18n.t('all_fields_are_required'));                                                 // 30
    }                                                                                                                 //
                                                                                                                      //
    // check for existing emails and throw error if necessary                                                         //
    // NOTE: redundant with collection hook, but better to throw the error here to avoid wiping out the form          //
    if (modifier.$set && modifier.$set["telescope.email"]) {                                                          // 35
      var email = modifier.$set["telescope.email"];                                                                   // 36
      if (Users.findByEmail(email)) {                                                                                 // 37
        throw new Meteor.Error("email_taken1", i18n.t("this_email_is_already_taken") + " (" + email + ")");           // 38
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    // go over each field and throw an error if it's not editable                                                     //
    // loop over each operation ($set, $unset, etc.)                                                                  //
    _.each(modifier, function (operation) {                                                                           // 45
      // loop over each property being operated on                                                                    //
      _.keys(operation).forEach(function (fieldName) {                                                                // 47
        var field = schema[fieldName];                                                                                // 48
        if (!Users.can.editField(user, field, user)) {                                                                // 49
          throw new Meteor.Error("disallowed_property", i18n.t('disallowed_property_detected') + ": " + fieldName);   // 50
        }                                                                                                             //
      });                                                                                                             //
    });                                                                                                               //
                                                                                                                      //
    completeUserProfile(modifier, userId, user);                                                                      // 56
  },                                                                                                                  //
                                                                                                                      //
  removeUser: function (userId, removePosts) {                                                                        // 59
                                                                                                                      //
    if (Users.is.adminById(this.userId)) {                                                                            // 61
                                                                                                                      //
      removePosts = typeof removePosts === "undefined" ? false : removePosts;                                         // 63
                                                                                                                      //
      Meteor.users.remove(userId);                                                                                    // 65
                                                                                                                      //
      if (removePosts) {                                                                                              // 67
        var deletedPosts = Posts.remove({ userId: userId });                                                          // 68
        var deletedComments = Comments.remove({ userId: userId });                                                    // 69
        return "Deleted " + deletedPosts + " posts and " + deletedComments + " comments";                             // 70
      } else {                                                                                                        //
        // not sure if anything should be done in that scenario yet                                                   //
        // Posts.update({userId: userId}, {$set: {author: "\[deleted\]"}}, {multi: true});                            //
        // Comments.update({userId: userId}, {$set: {author: "\[deleted\]"}}, {multi: true});                         //
      }                                                                                                               //
    }                                                                                                                 //
  }                                                                                                                   //
                                                                                                                      //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/routes.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Telescope.adminRoutes.route('/users', {                                                                               // 1
  name: "adminUsers",                                                                                                 // 2
  action: function (params, queryParams) {                                                                            // 3
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "users_dashboard" });                                // 4
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/users/:_idOrSlug', {                                                                               // 8
  name: "userProfile",                                                                                                // 9
  action: function (params, queryParams) {                                                                            // 10
    BlazeLayout.render("layout", { main: "user_controller", userTemplate: "user_profile" });                          // 11
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/users/:_idOrSlug/edit', {                                                                          // 15
  name: "userEdit",                                                                                                   // 16
  action: function (params, queryParams) {                                                                            // 17
    BlazeLayout.render("layout", { main: "user_controller", userTemplate: "user_edit" });                             // 18
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/account', {                                                                                        // 22
  name: "userAccountShortcut",                                                                                        // 23
  triggersEnter: [function (context, redirect) {                                                                      // 24
    redirect("userEdit", { _idOrSlug: Meteor.userId() });                                                             // 25
  }]                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/sign-out', {                                                                                       // 29
  name: "signOut",                                                                                                    // 30
  triggersEnter: [function (context, redirect) {                                                                      // 31
    AccountsTemplates.logout();                                                                                       // 32
    Messages.flash(i18n.t("you_have_been_logged_out"));                                                               // 33
  }]                                                                                                                  //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/server/publications.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// accept either an ID or a slug                                                                                      //
Meteor.publish('singleUser', function (idOrSlug) {                                                                    // 2
  var findById = Meteor.users.findOne(idOrSlug);                                                                      // 3
  var findBySlug = Meteor.users.findOne({ "telescope.slug": idOrSlug });                                              // 4
  var user = typeof findById !== 'undefined' ? findById : findBySlug;                                                 // 5
  var options = Users.is.adminById(this.userId) ? {} : { fields: Users.pubsub.publicProperties };                     // 6
  if (user) {                                                                                                         // 7
    return Meteor.users.find({ _id: user._id }, options);                                                             // 8
  }                                                                                                                   //
  return [];                                                                                                          // 10
});                                                                                                                   //
                                                                                                                      //
Meteor.publish('userPosts', function (terms) {                                                                        // 13
                                                                                                                      //
  terms.userId = this.userId; // add userId to terms                                                                  // 15
                                                                                                                      //
  var parameters = Posts.parameters.get(terms);                                                                       // 17
  var posts = Posts.find(parameters.find, parameters.options);                                                        // 18
  return posts;                                                                                                       // 19
});                                                                                                                   //
                                                                                                                      //
Meteor.publish('userUpvotedPosts', function (terms) {                                                                 // 22
                                                                                                                      //
  terms.userId = this.userId; // add userId to terms                                                                  // 24
                                                                                                                      //
  var parameters = Posts.parameters.get(terms);                                                                       // 26
  var posts = Posts.find(parameters.find, parameters.options);                                                        // 27
  return posts;                                                                                                       // 28
});                                                                                                                   //
                                                                                                                      //
Meteor.publish('userDownvotedPosts', function (terms) {                                                               // 31
                                                                                                                      //
  terms.userId = this.userId; // add userId to terms                                                                  // 33
                                                                                                                      //
  var parameters = Posts.parameters.get(terms);                                                                       // 35
  var posts = Posts.find(parameters.find, parameters.options);                                                        // 36
  return posts;                                                                                                       // 37
});                                                                                                                   //
                                                                                                                      //
// Publish the current user                                                                                           //
                                                                                                                      //
Meteor.publish('currentUser', function () {                                                                           // 42
  var user = Meteor.users.find({ _id: this.userId }, { fields: Users.pubsub.hiddenProperties });                      // 43
  return user;                                                                                                        // 44
});                                                                                                                   //
                                                                                                                      //
// publish all users for admins to make autocomplete work                                                             //
// TODO: find a better way                                                                                            //
                                                                                                                      //
Meteor.publish('allUsersAdmin', function () {                                                                         // 50
  var selector = Settings.get('requirePostInvite') ? { isInvited: true } : {}; // only users that can post            // 51
  if (Users.is.adminById(this.userId)) {                                                                              // 52
    return Meteor.users.find(selector, { fields: Users.pubsub.avatarProperties });                                    // 53
  }                                                                                                                   //
  return [];                                                                                                          // 55
});                                                                                                                   //
                                                                                                                      //
// Publish all users to reactive-table (if admin)                                                                     //
// Limit, filter, and sort handled by reactive-table.                                                                 //
// https://github.com/aslagle/reactive-table#server-side-pagination-and-filtering-beta                                //
                                                                                                                      //
ReactiveTable.publish("all-users", function () {                                                                      // 62
  if (Users.is.adminById(this.userId)) {                                                                              // 63
    return Meteor.users;                                                                                              // 64
  } else {                                                                                                            //
    return [];                                                                                                        // 66
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/server/create_user.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Accounts.onCreateUser(function (options, user) {                                                                      // 1
  user = Telescope.callbacks.run("onCreateUser", user, options);                                                      // 2
  return user;                                                                                                        // 3
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/ar.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                       // 8
  TAPi18n.translations["ar"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                            // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["ar"][namespace], {"bio":"السيرة الذاتية","email":"البريد اﻻلكتروني","please_complete_your_profile_below_before_continuing":"شكرا  لاستكمال ملفك الشخصي قبل المتابعة.","account":"حساب","username":"اسم المستخدم","display_name":"اﻻسم الحقيقي","password":"كلمة المرور","change_password":"تبديل كلمة المرور","old_password":"كلمة المرور القديمة","new_password":"كلمة المرور الجديدة","email_notifications":"إشعارات بالبريد الإلكتروني","new_posts":"مشاركة جديدة","comments_on_my_posts":"تعليقات على مشاركاتي","replies_to_my_comments":"اجابة تعليقاتي","comments":"تعليقات","forgot_password":"نسيت كلمة المرور؟","profile_updated":"تحديث الملف الشخصي","please_fill_in_your_email_below_to_finish_signing_up":"تفضل بأدخل بريدك الالكتروني لإنهاء إنشاء الحساب","invite":"قم بدعوة","uninvite":"الغاء الدعوة","make_admin":"عين مشرف","unadmin":"الغي مشرف","delete_user":"احذف مستخدم","are_you_sure_you_want_to_delete":"هل انت متاكد من الحذف؟ ","reset_password":"اعادة كلمة المرور","password_reset_link_sent":"قد تم ارسال رابط ﻻسترجاع كلمة المرور","name":"اﻻسم","posts":"المشاركات","comments_":"التعليقات","karma":"Karma","is_invited":"هل هو مدعو؟","is_admin":"هل هو مشرف؟","delete":"حذف","member_since":"عضو منذ","edit_profile":"تغيير الملف الشخصي","sign_in":"دخول","sign_in_":"دخول","sign_up_":"استحدث حساب","dont_have_an_account":"ﻻ تمتلك حساب؟","already_have_an_account":"تمتلك حساب؟","sign_up":"استحدث حساب","postedAt":"ارسل على","please_fill_in_all_fields":"يتوجب مل كل الخانات","invite_":"دعوة ","left":" باقي","invite_none_left":"دعوات (0 متبقي)","all":"الكل","invited":"مدعو","uninvited":"غير مدعو","filter_by":"فرز ب","sort_by":"ترتيب حسب"});
TAPi18n._registerServerTranslator("ar", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/bg.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                       // 8
  TAPi18n.translations["bg"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                            // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["bg"][namespace], {"bio":"Биография","email":"Емайл","please_complete_your_profile_below_before_continuing":"Моля попълнете вашия профил по-долу, преди да продължите.","account":"Акаунт","username":"Потребителско име","display_name":"Прякор","password":"Парола","change_password":"Променете парола?","old_password":"Стара парола","new_password":"Нова парола","email_notifications":"Емайл известия","new_posts":"Нови Публикации","comments_on_my_posts":"Коментари на мои публикации","replies_to_my_comments":"Отговори на мои коментари","comments":"коментари","forgot_password":"Забравена Парола?","profile_updated":"Профила е обновен","please_fill_in_your_email_below_to_finish_signing_up":"Моля попълнете емайл адреса си за да завършите регистрацията.","invite":"Покана","uninvite":"Отмяна на покана","make_admin":"Направи администратор","unadmin":"Премахване на администраторски права","delete_user":"Изтриване на потребител","are_you_sure_you_want_to_delete":"Сигурни ли сте, че искате да изтриете ","reset_password":"Нулиране на парола","password_reset_link_sent":"Линка за нулиране на паролата ви е изпратен!","name":"Име","posts":"Публикации","comments_":"Коментари","karma":"Карма","is_invited":"Е поканен?","is_admin":"Е Администратор?","delete":"Изтриване","member_since":"Потребител от","edit_profile":"Промяна на профила","sign_in":"Влезте","sign_in_":"Влезте!","sign_up_":"Регистрирайте се!","dont_have_an_account":"Нямате Акаунт?","already_have_an_account":"Вече имате акаунт?","downvotedAt":"Не харесано на","sign_up":"Регистрирай се","postedAt":"Публикувано на","please_fill_in_all_fields":"Моля попълнете всички полета","upvotedAt":"Харесано на","invite_":"Покани ","left":" остава","invite_none_left":"Покана (none left)","all":"Всичко","invited":"Поканен","uninvited":"Поканата е отхвърлена","filter_by":"Филтрирай по ","sort_by":"Сортирай по ","you_have_been_logged_out":"Бяхте отписан от системата.","delete_users_posts_comments_as_well":"Да се изтрият ли също публикациите и коментарите на потребителя?","commentedAt":"Коментирано на"});
TAPi18n._registerServerTranslator("bg", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/cs.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                       // 8
  TAPi18n.translations["cs"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                            // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["cs"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Pro dokončení registrace prosím vyplňte zbývající informace níže.","bio":"Bio","displayName":"Jméno","email":"E-mail","twitterUsername":"Twitter Username","website":"Web","htmlBio":"Bio","user_profile_saved":"Uživatelský profil uložen","this_email_is_already_taken":"Tento e-mail je již v databázi","all_fields_are_required":"Všechna pole","please_complete_your_profile_below_before_continuing":"Než budete pokračovat, vyplňte prosím váš profil.","account":"Můj účet","username":"Uživatelské jméno","display_name":"Zobrazované jméno","city":"Město","twitter_username":"Twitter Username","github_username":"Github Username","site_url":"URL webu","password":"Heslo","change_password":"Změnit Heslo?","old_password":"Staré heslo","new_password":"Nové heslo","email_notifications":"E-mailové notifikace","new_users":"Noví uživatelé","new_posts":"Nové p","comments_on_my_posts":"Komentáře k mým příspěvkům","replies_to_my_comments":"Odpovědi na mé komentáře","comments":"Komentářů","forgot_password":"Zapomněli jste heslo?","profile_updated":"Profil byl aktualizován","please_fill_in_your_email_below_to_finish_signing_up":"Pro dokončení registrace, prosím, vyplňte svůj e-mail níže.","invite":"Pozvat","uninvite":"Zrušit pozvánku","make_admin":"Nastavit jako admina","unadmin":"Odebrat admina","delete_user":"Smazat uživatele","are_you_sure_you_want_to_delete":"Jste si jistí, že chcete smazat","reset_password":"Resetovat heslo","password_reset_link_sent":"Odkaz pro resetování hesla byl odeslán!","name":"Jméno","posts":"Příspěvky","comments_":"KOmentáře","karma":"Karma","is_invited":"Je pozváný/pozvaná?","is_admin":"Je adminem?","delete":"Smazat","member_since":"Členem od","edit_profile":"Upravit profil","sign_in":"Přihlásit","sign_in_":"Přihlašte se!","sign_up_":"Zaregistrujte se!","dont_have_an_account":"Ještě nemáte účet?","already_have_an_account":"Již učet máte?","downvotedAt":"Hlas odebrán v","sign_up":"Registrace","postedAt":"Přidáno","please_fill_in_all_fields":"Vyplňte prosím všechna pole","upvotedAt":"Hlas přidán v","invite_":"Pozvat","left":"zbývající","invite_none_left":"Pozvat (žádná pozvánka již nezbývá)","all":"Vše","invited":"Pozvaných","uninvited":"Zrušené pozvánky","filter_by":"Filtrovat podle","sort_by":"Řadit podle"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/da.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                       // 8
  TAPi18n.translations["da"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                            // 12
  TAPi18n.translations["da"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["da"][namespace], {"displayName":"Navn","twitterUsername":"Twitter Brugernavn","website":"Hjemmeside","account":"Konto","username":"Brugernavn","change_password":"Skift adgangskode?","old_password":"Gammel adgangskode","new_password":"Ny adgangskode","new_users":"Nye brugere","comments":"Kommentarer","profile_updated":"Profil opdateret","invite":"Inviter","uninvite":"Annullere invitationen","delete_user":"Slet bruger","are_you_sure_you_want_to_delete":"Er du sikker på at du vil slette","reset_password":"Nulstil adgangskode","name":"Navn","comments_":"Kommentarer","karma":"Karma","delete":"Slet","edit_profile":"Rediger profil","sign_in":"Log ind","sign_in_":"Log ind!","sign_up_":"Tilmeld!","all":"Alle","invited":"Inviteret","sort_by":"Sorter efter"});
TAPi18n._registerServerTranslator("da", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/de.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                       // 8
  TAPi18n.translations["de"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                            // 12
  TAPi18n.translations["de"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["de"][namespace], {"bio":"Bio","email":"Email","please_complete_your_profile_below_before_continuing":"Bitte füllen Dein Profil vollständig aus bevor du fortfährst.","account":"Konto","username":"Benutzername","display_name":"Angezeigter Name","password":"Passwort","change_password":"Passwort ändern?","old_password":"Altes Passwort","new_password":"Neues Passwort","email_notifications":"Email-Benachrichtigung","new_posts":"Neue Links","comments_on_my_posts":"Kommentare zu meinen Links","replies_to_my_comments":"Antworten auf meine Kommentare","comments":"Kommentare","forgot_password":"Passwort vergessen?","profile_updated":"Profil aktualisiert","please_fill_in_your_email_below_to_finish_signing_up":"Bitte trage Deine Email-Adresse ein um die Registrierung abzuschließen.","invite":"Einladen","uninvite":"Ausladen","make_admin":"Zum Admin ernennen","unadmin":"Als Admin entfernen","delete_user":"Benutzer löschen","are_you_sure_you_want_to_delete":"Bist du Dir sicher, dass du folgendes löschen willst: ","reset_password":"Passwort zurücksetzen","password_reset_link_sent":"Ein Link zum zurücksetzen des Passworts wurde versendet!","name":"Name","posts":"Links","comments_":"Kommentare","karma":"Karma","is_invited":"Wurde eingeladen?","is_admin":"Ist Admin?","delete":"Löschen","member_since":"Mitglied seit","edit_profile":"Profil bearbeiten","sign_in":"Einloggen","sign_in_":"Einloggen!","sign_up_":"Registrieren!","dont_have_an_account":"Du hast noch kein Konto?","already_have_an_account":"Du hast bereits ein Konto?","sign_up":"Registrieren","please_fill_in_all_fields":"Bitte fülle alle Felder aus","invite_":"Einladung(en) ","left":" übrig","invite_none_left":"Einladungen (keine übrig)","all":"Alle","invited":"Eingeladen","uninvited":"Nicht eingeladen","filter_by":"Filtern nach","sort_by":"Sortieren nach"});
TAPi18n._registerServerTranslator("de", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/el.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                       // 8
  TAPi18n.translations["el"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                            // 12
  TAPi18n.translations["el"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["el"][namespace], {"bio":"Βιογραφία","email":"Email","please_complete_your_profile_below_before_continuing":"Παρακαλώ συμπληρώστε το προφίλ σας πριν συνεχισετε.","account":"Λογαριασμός","username":"Ονομα χρήστη","display_name":"Παρατσούκλι","password":"κωδικός","change_password":"Αλλαγή κωδικού?","old_password":"Παλιός κωδικός","new_password":"Νέος κωδικός","email_notifications":"Ειδοποιήσεις μέσω Email","new_posts":"Νέες δημοσιεύσεις","comments_on_my_posts":"Σχόλια στις δημοσιέυσεις μου","replies_to_my_comments":"Απαντήσεις στα σχόλια μου","comments":"Σχόλια","forgot_password":"Ξέχασες τον κωδικό σου;","profile_updated":"Το προφίλ ενημερώθηκε","please_fill_in_your_email_below_to_finish_signing_up":"Παρακαλώ συμπλήρωσε το email για να ολοκληρώσεις την εγγραφή σου.","invite":"Προσκληση","uninvite":"Διαγραφή πρόσκλησης","make_admin":"Δικαίωμα διαχειριστή","unadmin":"Διαγραφή δικαίωματος διαχειριστή","delete_user":"Διαγραφή χρήστη","are_you_sure_you_want_to_delete":"Είσαι σίγουρος για την διαγραφή","reset_password":"Επαναφορά κωδικού","password_reset_link_sent":"Στείλαμε σύνδεσμο επαναφοράς κωδικου στο email!","name":"Όνομα","posts":"Δημοσιεύσεις","comments_":"Σχόλια","karma":"Karma","is_invited":"Έχει προσκληση?","is_admin":"Είναι διαχειριστής?","delete":"Διαγραφή","member_since":"Μέλος από","edit_profile":"Επεξεργασία Προφίλ","sign_in":"Σύνδεση","sign_in_":"Σύνδεση!","sign_up_":"Εγγραφή!","dont_have_an_account":"Δεν έχεις λογαριασμό;","already_have_an_account":"Έχεις ήδη λογαριασμό;","sign_up":"Εγγραφλη","postedAt":"Δημοσιεύθηκε στις","please_fill_in_all_fields":"Παρακαλώ συμπληρώστε τα πεδία","invite_":"Πρόσκληση ","left":" αριστερά","invite_none_left":"Πρόσκληση (κανένας αριστερά)","all":"Όλους","invited":"Αυτούς που έχουν πρόσκληση","uninvited":"Αυτούς που ΔΕΝ έχουν πρόσκληση","filter_by":"Δείξε ","sort_by":"Ταξινόμηση"});
TAPi18n._registerServerTranslator("el", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/en.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
// integrate the fallback language translations                                                                       // 8
translations = {};                                                                                                    // 9
translations[namespace] = {"please_fill_in_missing_information_to_finish_signing_up":"Please fill in missing information below to finish signing up.","bio":"Bio","displayName":"Name","email":"Email","twitterUsername":"Twitter Username","website":"Website","htmlBio":"Bio","user_profile_saved":"User profile saved","this_email_is_already_taken":"This email is already taken","all_fields_are_required":"All fields are required","please_complete_your_profile_below_before_continuing":"Please complete your profile below before continuing.","account":"Account","username":"Username","display_name":"Display Name","city":"City","twitter_username":"Twitter Username","github_username":"GitHub Username","site_url":"Site URL","password":"Password","change_password":"Change Password?","old_password":"Old Password","new_password":"New Password","email_notifications":"Email Notifications","new_users":"New users","new_posts":"New Posts","comments_on_my_posts":"Comments on my posts","replies_to_my_comments":"Replies to my comments","comments":"Comments","forgot_password":"Forgot password?","profile_updated":"Profile updated","please_fill_in_your_email_below_to_finish_signing_up":"Please fill in your email below to finish the registration.","invite":"Invite","uninvite":"Uninvite","make_admin":"Make admin","unadmin":"Unadmin","delete_user":"Delete User","are_you_sure_you_want_to_delete":"Are you sure you want to delete ","reset_password":"Reset Password","password_reset_link_sent":"Password reset link sent!","name":"Name","posts":"Posts","comments_":"Comments","karma":"Karma","is_invited":"Is Invited?","is_admin":"Is Admin?","delete":"Delete","member_since":"Member since","edit_profile":"Edit profile","sign_in":"Sign In","sign_in_":"Sign in!","sign_up_":"Register!","dont_have_an_account":"Don't have an account?","already_have_an_account":"Already have an account?","downvotedAt":"Downvoted at","sign_up":"Register","postedAt":"Posted at","please_fill_in_all_fields":"Please fill in all fields","upvotedAt":"Upvoted at","invite_":"Invite ","left":" left","invite_none_left":"Invite (none left)","all":"All","invited":"Invited","uninvited":"Uninvited","filter_by":"Filter by","sort_by":"Sort by","you_have_been_logged_out":"You have been logged out","delete_users_posts_comments_as_well":"Delete user's posts and comments as well?","commentedAt":"Commented at"};
TAPi18n._loadLangFileObject("en", translations);                                                                      // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                   // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/es.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                       // 8
  TAPi18n.translations["es"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                            // 12
  TAPi18n.translations["es"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["es"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Por favor, complete la información que falta a continuación para terminar el registro.","bio":"Bio","displayName":"Nombre","email":"Email","twitterUsername":"Nombre De Usuario De Twitter","website":"Sitio web","htmlBio":"Biografía","user_profile_saved":"Perfil de usuario guardado","this_email_is_already_taken":"Este correo electrónico ya existe","all_fields_are_required":"Todos los campos son obligatorios","please_complete_your_profile_below_before_continuing":"Por favor complete su perfil antes de seguir.","account":"Cuenta","username":"Nombre de usuario","display_name":"Nombre","city":"Ciudad","twitter_username":"Nombre De Usuario De Twitter","github_username":"Nombre De Usuario De Github","site_url":"URL del sitio web","password":"Contraseña","change_password":"Cambiar de contraseña","old_password":"Contraseña Anterior","new_password":"Contraseña Nueva ","email_notifications":"Notificaciones por Email","new_users":"Nuevos usuarios","new_posts":"Nuevo Post","comments_on_my_posts":"Comentarios en mis posts","replies_to_my_comments":"Respuestas a mis comentarios","comments":"comentarios","forgot_password":"Olvidaste tu contraseña?","profile_updated":"Perfil actualizado","please_fill_in_your_email_below_to_finish_signing_up":"Por favor, introduzca su email a continuación para terminar el registro.","invite":"Invitar","uninvite":"Cancelar la invitación","make_admin":"Hacer admin","unadmin":"Borrar de admin","delete_user":"Borrar usuario","are_you_sure_you_want_to_delete":"¿Está seguro de que desea eliminar?","reset_password":"Restablecer contraseña","password_reset_link_sent":"Enlace de restablecimiento de contraseña enviado a su email.","name":"Nombre","posts":"Posts","comments_":"Comentarios","karma":"Karma","is_invited":"¿Esta invitado?","is_admin":"¿Es admin?","delete":"Borrar","member_since":"Miembro desde","edit_profile":"Modificar el perfil","sign_in":"Entrar","sign_in_":"Entrar!","sign_up_":"Registrarse!","dont_have_an_account":"¿No tiene cuenta de usuario?","already_have_an_account":"¿Ya tiene cuenta?","sign_up":"Registrarse","postedAt":"Publicado el","please_fill_in_all_fields":"Por favor, llena todos los campos","invite_":"Invitación ","left":" restante","invite_none_left":"Invitación (no queda)","all":"Todos","invited":"Invitados","uninvited":"No invitado","filter_by":"Filtrar por","sort_by":"Ordenar por"});
TAPi18n._registerServerTranslator("es", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/et.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                       // 8
  TAPi18n.translations["et"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                            // 12
  TAPi18n.translations["et"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["et"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Palun täitke puuduvad andmed allpool, et lõpetada registreerimine.","bio":"Bio","displayName":"Nimi","email":"Email","twitterUsername":"Twitteri kasutajanimi","website":"Veebisait","htmlBio":"Bio","user_profile_saved":"Kasutaja profiili salvestatud","this_email_is_already_taken":"See email on juba võetud","all_fields_are_required":"Kõik väljad on kohustuslikud","please_complete_your_profile_below_before_continuing":"Palun täitke allpool oma profiili enne jätkamist.","account":"Konto","username":"Kasutajanimi","display_name":"Kuvatav Nimi","city":"Linn","twitter_username":"Twitter kasutajanimi","github_username":"Github kasutajanimi","site_url":"Saidi URL","password":"Salasõna","change_password":"Muuda salasõna?","old_password":"Vana Salasõna","new_password":"Uus Salasõna","email_notifications":"Emaili teated","new_users":"Uued kasutajad","new_posts":"Uued Postitused","comments_on_my_posts":"Kommentaarid minu postitustele","replies_to_my_comments":"Vastused minu kommentaaridele","comments":"Kommentaarid","forgot_password":"Unustasid salasõna?","profile_updated":"Profiil uuendatud","please_fill_in_your_email_below_to_finish_signing_up":"Palun sisestage email, et lõpetada registreerimine.","invite":"Kutsu","uninvite":"Ära kutsu","make_admin":"Tee admin","unadmin":"Eemalda admin","delete_user":"Kasutaja kustutamine","are_you_sure_you_want_to_delete":"Oled sa kindel, et soovid kustutada","reset_password":"Uuenda Salasõna","password_reset_link_sent":"Parooli uuendamise link saadetud!","name":"Nimi","posts":"Postitused","comments_":"Kommentaarid","karma":"Karma","is_invited":"On kutsutud?","is_admin":"On admin?","delete":"Kustuta","member_since":"Liige alates","edit_profile":"Muuda profiili","sign_in":"Logi sisse","sign_in_":"Logi sisse!","sign_up_":"Registreeri!","dont_have_an_account":"Ei ole kontot?","already_have_an_account":"On juba konto?","downvotedAt":"Downvoted Kell","sign_up":"Registreeri","postedAt":"Postitatud","please_fill_in_all_fields":"Palun täitke kõik väljad","upvotedAt":"Upvoted Kell","invite_":"Kutsu","left":"jäänud","invite_none_left":"Kutsu (ühtegi pole jäänud)","all":"Kõik","invited":"Kutsutud","uninvited":"Kutsumata","filter_by":"Filtreeri","sort_by":"Sorteeri"});
TAPi18n._registerServerTranslator("et", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/fr.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                       // 8
  TAPi18n.translations["fr"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                            // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["fr"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Veuillez remplir les informations manquantes pour compléter votre inscription.","bio":"Bio","displayName":"Nom affiché","email":"Adresse mail","twitterUsername":"Identifiant Twitter","website":"Site Web","htmlBio":"Bio","user_profile_saved":"Profil utilisateur sauvegardé","this_email_is_already_taken":"Cet e-mail est déjà utilisé","all_fields_are_required":"Tous les champs sont requis","please_complete_your_profile_below_before_continuing":"Merci de compléter votre profil avant de continuer.","account":"Compte","username":"Nom d'utilisateur","display_name":"Nom affiché","city":"Ville","twitter_username":"Nom d'utilisateur Twitter","github_username":"Nom d'utilisateur GitHub","site_url":"Url du site","password":"Mot de passe","change_password":"Changer le mot de passe","old_password":"Ancien mot de passe","new_password":"Nouveau mot de passe","email_notifications":"Notifications par mail","new_users":"Nouveaux utilisateurs","new_posts":"Nouveau post","comments_on_my_posts":"Commentaires sur mes posts","replies_to_my_comments":"Reponses à mes commentaires","comments":"Commentaires","forgot_password":"Mot de passe oublié ?","profile_updated":"Profil mis à jour","please_fill_in_your_email_below_to_finish_signing_up":"Merci de saisir votre email pour finir la création de votre compte","invite":"Inviter","uninvite":"Annuler l'invitation","make_admin":"Rendre admin","unadmin":"Supprimer les droits d'admin","delete_user":"Supprimer l'utilisateur","are_you_sure_you_want_to_delete":"Etes-vous sûr de vouloir supprimer ?","reset_password":"Réinitialiser le mot de passe","password_reset_link_sent":"Un lien pour réinitialiser votre mot de passe a été envoyé !","name":"Nom","posts":"Posts","comments_":"Commentaires","karma":"Karma","is_invited":"Est-il invité ?","is_admin":"Est-il administrateur ?","delete":"Supprimer","member_since":"Membre depuis","edit_profile":"Modifier le profil","sign_in":"Connexion","sign_in_":"Connexion","sign_up_":"Créer un compte.","dont_have_an_account":"Pas de compte ?","already_have_an_account":"Déjà un compte ?","downvotedAt":"Downvoté le","sign_up":"Créer un compte","postedAt":"Posté le","please_fill_in_all_fields":"Vous devez remplir tous les champs.","upvotedAt":"Upvoté le","invite_":"Invitation ","left":" restante","invite_none_left":"Invitation (aucune restante)","all":"Tout(e)s","invited":"Invité(e)","uninvited":"Pas invité(e)","filter_by":"Filtrer par","sort_by":"Trier par"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/hu.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                       // 8
  TAPi18n.translations["hu"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                            // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                  // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/id.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                       // 8
  TAPi18n.translations["id"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                            // 12
  TAPi18n.translations["id"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["id"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Silahkan mengisi kolom kosong yang tersisa untuk menyelesaikan pendaftaran.","bio":"Bio","displayName":"Nama","email":"Email","twitterUsername":"Username Twitter","website":"Situs web","htmlBio":"Biografi","user_profile_saved":"Profil pengguna telah tersimpan","this_email_is_already_taken":"Email ini sudah terpakai","all_fields_are_required":"Semua kolom wajib diisi","please_complete_your_profile_below_before_continuing":"Lengkapi profil Anda di bawah ini sebelum melanjutkan.","account":"Akun","username":"Nama pengguna","display_name":"Nama Tampilan","city":"Kota","twitter_username":"Username Twitter","github_username":"Username GitHub","site_url":"URL Situs","password":"Kata sandi","change_password":"Ganti kata sandi?","old_password":"Kata Sandi Lama","new_password":"Kata Sandi Baru","email_notifications":"Notifikasi Email","new_users":"Pengguna baru","new_posts":"Postingan Baru","comments_on_my_posts":"Komentar pada postingan saya","replies_to_my_comments":"Balasan untuk komentar saya","comments":"Komentar","forgot_password":"Lupa kata sandi?","profile_updated":"Profil telah diperbarui","please_fill_in_your_email_below_to_finish_signing_up":"Silahkan isi email Anda untuk menyelesaikan pendaftaran.","invite":"Undang","uninvite":"Non undangan","make_admin":"Jadikan Admin","unadmin":"Non Admin","delete_user":"Hapus Pengguna","are_you_sure_you_want_to_delete":"Apakah Anda yakin ingin menghapus","reset_password":"Reset Password","password_reset_link_sent":"Link ulang kata sandi yang dikirim!","name":"Nama","posts":"Postingan","comments_":"Komentar","karma":"Karma","is_invited":"Apakah Diundang?","is_admin":"Apakah Admin?","delete":"Hapus","member_since":"Anggota sejak","edit_profile":"Mengedit profil","sign_in":"Masuk","sign_in_":"Masuk!","sign_up_":"Daftar!","dont_have_an_account":"Tidak memiliki akun?","already_have_an_account":"Sudah memiliki akun?","downvotedAt":"Ditenggelamkan pada","sign_up":"Daftar","postedAt":"Diposting Pada","please_fill_in_all_fields":"Silahkan isi semua kolom","upvotedAt":"Tersundul pada","invite_":"Undang","left":"tersisa","invite_none_left":"Undang (tidak tersisa)","all":"Semua","invited":"Diundang","uninvited":"Hapus undangan","filter_by":"Filter dengan","sort_by":"Sortir dengan"});
TAPi18n._registerServerTranslator("id", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/it.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                       // 8
  TAPi18n.translations["it"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                            // 12
  TAPi18n.translations["it"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["it"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Per favore aggiungi le informazioni mancanti per completare l'iscrizione.","bio":"Biografia","displayName":"Nome","email":"Email","twitterUsername":"Nome Utente Twitter","website":"Sito web","htmlBio":"Biografia","user_profile_saved":"Profilo utente salvato","this_email_is_already_taken":"Questo indirizzo email è già utilizzato","all_fields_are_required":"Tutti i campi sono obbligatori","please_complete_your_profile_below_before_continuing":"Per favore completa il tuo profilo qua sotto prima di proseguire.","account":"Account","username":"Nome Utente","display_name":"Nome Visualizzato","city":"Città","twitter_username":"Nome Utente Twitter","github_username":"Nome Utente GitHub","site_url":"URL del Sito","password":"Password","change_password":"Cambio Password?","old_password":"Vecchia Password","new_password":"Nuova Password","email_notifications":"Notifiche via Email","new_users":"Nuovi utenti","new_posts":"Nuovi Post","comments_on_my_posts":"Commenti ai miei post","replies_to_my_comments":"Risposte ai miei commenti","comments":"Commenti","forgot_password":"Password dimenticata?","profile_updated":"Profilo aggiornato","please_fill_in_your_email_below_to_finish_signing_up":"Per favore inserisci la tua email per completare la registrazione.","invite":"Invita","uninvite":"Annulla Invito","make_admin":"Rendi amministratore","unadmin":"Annulla amministratore","delete_user":"Elimina Utente","are_you_sure_you_want_to_delete":"Sei sicuro di voler eliminare ","reset_password":"Reimposta Password","password_reset_link_sent":"Link per reimpostare la password inviato!","name":"Nome","posts":"Post","comments_":"Commenti","karma":"Karma","is_invited":"È Invitato?","is_admin":"È Amministratore?","delete":"Elimina","member_since":"Membro dal","edit_profile":"Modifica profilo","sign_in":"Accedi","sign_in_":"Accedi!","sign_up_":"Registrati!","dont_have_an_account":"Non hai un account?","already_have_an_account":"Hai già un account?","sign_up":"Registrati","postedAt":"Inviato il","please_fill_in_all_fields":"Per favore compila tutti i campi","upvotedAt":"Consigliato il","invite_":"Invita ","left":" rimasti","invite_none_left":"Invita (nessuno rimasto)","all":"Tutti","invited":"Invitati","uninvited":"Inviti Annullati","filter_by":"Filtra per","sort_by":"Ordina per"});
TAPi18n._registerServerTranslator("it", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/ja.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                       // 8
  TAPi18n.translations["ja"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                            // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                  // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/kk.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                       // 8
  TAPi18n.translations["kk"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                            // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                  // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/ko.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                       // 8
  TAPi18n.translations["ko"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                            // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["ko"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"아래 정보를 입력해주세요.","bio":"소개","displayName":"이름","email":"이메일","twitterUsername":"트위터 아이디","website":"웹사이트","htmlBio":"소개","user_profile_saved":"프로필이 저장되었습니다.","this_email_is_already_taken":"이 이메일은 이미 등록되어있습니다","please_complete_your_profile_below_before_continuing":"아래 정보를 입력해주세요.","account":"계정","username":"닉네임","city":"도시","twitter_username":"트위터 아이디","github_username":"GitHub 아이디","site_url":"사이트 URL","password":"비밀번호","change_password":"암호 변경?","old_password":"기존 비밀번호","new_password":"새 비밀번호","email_notifications":"이메일 알림","comments_on_my_posts":"내 게시물 댓글","comments":"댓글","forgot_password":"비밀번호를 잊으셨나요?","please_fill_in_your_email_below_to_finish_signing_up":"아래 이메일을 입력해주세요.","invite":"초대","uninvite":"초대취소","make_admin":"관리자 권한 주기","unadmin":"관리자 권한 뺏기","delete_user":"유저 삭제","are_you_sure_you_want_to_delete":"확실히 삭제 하시겠습니까?","reset_password":"비밀번호 재설정","password_reset_link_sent":"비밀번호 재설정 링크가 전송되었습니다!","name":"이름","posts":"게시물","comments_":"댓글","karma":"카르마","delete":"삭제","edit_profile":"프로필 편집","sign_in":"로그인","sign_in_":"로그인!","sign_up_":"회원가입!","dont_have_an_account":"계정이 없으십니까?","already_have_an_account":"이미 계정이 있습니까?","sign_up":"회원가입","please_fill_in_all_fields":"모든 항목을 입력해주세요.","invited":"초대됨"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/nl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                       // 8
  TAPi18n.translations["nl"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                            // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["nl"][namespace], {"bio":"Bio","email":"Email","please_complete_your_profile_below_before_continuing":"Maak eerst je profiel af alvorens verder te gaan.","account":"Account","username":"Gebruikersnaam","display_name":"Weergave naam","twitter_username":"Twitter gebruikersnaam","github_username":"GitHub gebruikersnaam","site_url":"Website URL","password":"Wachtwoord","change_password":"Wachtwoord veranderen?","old_password":"Oud wachtwoord","new_password":"Nieuw wachtwoord","email_notifications":"Email Notificaties","new_users":"Nieuwe gebruikers","new_posts":"Nieuwe artikelen","comments_on_my_posts":"Reacties op mijn artikelen","replies_to_my_comments":"Antwoorden op mijn reacties","comments":"Reacties","forgot_password":"Wachtwoord vergeten?","profile_updated":"Profiel bijgewerkt","please_fill_in_your_email_below_to_finish_signing_up":"Vul je email in om de registratie af te ronden.","invite":"Uitnodigen","uninvite":"Uitnodiging intrekken","make_admin":"Beheerder maken","unadmin":"Beheer rechten ontnemen","delete_user":"Gberuiker verwijderen","are_you_sure_you_want_to_delete":"Verwijder ","reset_password":"Reset wachtwoord","password_reset_link_sent":"Wacthwoord reset link verstuurd!","name":"Naam","posts":"Artikelen","comments_":"Reacties","karma":"Karma","is_invited":"Is uitgenodigd?","is_admin":"Is beheerder?","delete":"Verwijder","member_since":"Lid sinds","edit_profile":"Bewerk profiel","sign_in":"Inloggen","sign_in_":"Inloggen!","sign_up_":"Registreren!","dont_have_an_account":"Geen account?","already_have_an_account":"Heb je al een account?","sign_up":"Registreren","postedAt":"Ingestuurd","please_fill_in_all_fields":"Alle velden invullen a.u.b.","invite_":"Uitnodiging sturen aan ","left":" resterend","invite_none_left":"Invite (geen resterend)","all":"Alles","invited":"Uitgenodigd","uninvited":"Uitnoding ongedaan gemaakt","filter_by":"Filteren","sort_by":"Sorteer"});
TAPi18n._registerServerTranslator("nl", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/pl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                       // 8
  TAPi18n.translations["pl"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                            // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["pl"][namespace], {"bio":"Bio","email":"Email","please_complete_your_profile_below_before_continuing":"Uzupełnij profil.","account":"Konto","username":"Nick","display_name":"Nazwa wyświetlana","twitter_username":"Twitter","github_username":"GitHub","site_url":"Strona WWW","password":"Hasło","change_password":"Zmienić hasło?","old_password":"Stare hasło","new_password":"Nowe hasło","email_notifications":"Notyfikacje email","new_users":"Nowi użytkownicy","new_posts":"Nowe posty","comments_on_my_posts":"Komentarze do moich postów","replies_to_my_comments":"Odpowiedzi na moje komentarze","comments":"Comments","forgot_password":"Zapomniałeś hasło?","profile_updated":"Profil został zaktualizowany","please_fill_in_your_email_below_to_finish_signing_up":"Uzupełnij email.","invite":"Zaproś","uninvite":"Wyproś","make_admin":"Mianuj admina","unadmin":"Zdejmij admina","delete_user":"Usuń użytkownika","are_you_sure_you_want_to_delete":"Jesteś pewny, że chcesz usunąć ","reset_password":"Resetuj hasło","password_reset_link_sent":"Link z nowym hasłem został wysłany!","name":"Imię","posts":"Posty","comments_":"Komentarze","karma":"Karma","is_invited":"Czy jest zaproszony?","is_admin":"Czy jest adminem?","delete":"Usuń","member_since":"Zarejestrowany od","edit_profile":"Edytuj profil","sign_in":"Zaloguj","sign_in_":"Zaloguj!","sign_up_":"Zarejestruj!","dont_have_an_account":"Nie masz konta?","already_have_an_account":"Masz już konto?","sign_up":"Zarejestruj","postedAt":"Dodany","please_fill_in_all_fields":"Uzupełnij pola","invite_":"Zaproś ","left":" left","invite_none_left":"Zaproszenia (brak)","all":"Wszyscy","invited":"Zaproszeni","uninvited":"Niezaproszeni","filter_by":"Filtruj po","sort_by":"Sortuj po"});
TAPi18n._registerServerTranslator("pl", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/pt-BR.i18n.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                    // 8
  TAPi18n.translations["pt-BR"] = {};                                                                                 // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                         // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                      // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"bio":"Bio","email":"Email","please_complete_your_profile_below_before_continuing":"Por favor, complete seu perfil abaixo antes de continuar.","account":"Conta","username":"Nome de usuário","display_name":"Nome de exibição","twitter_username":"Twitter","github_username":"GitHub","site_url":"URL do Site","password":"Senha","change_password":"Mudar Senha?","old_password":"Senha Antiga","new_password":"Nova Senha","email_notifications":"Notificações por Email","new_users":"Novos usuários","new_posts":"Novas Postagens","comments_on_my_posts":"Comentários em minhas postagens","replies_to_my_comments":"Respostas aos meus comentários","comments":"Comentários","forgot_password":"Esqueceu sua senha?","profile_updated":"Perfil atualizado","please_fill_in_your_email_below_to_finish_signing_up":"Por favor, preencha seu email abaixo para finalizar o registro.","invite":"Convite","uninvite":"Desconvidar","make_admin":"Tornar admin","unadmin":"Retirar do admin","delete_user":"Deletar Usuário","are_you_sure_you_want_to_delete":"Está certo de que deseja deletar ","reset_password":"Resetar Senhar","password_reset_link_sent":"Link de reset de senha enviado!","name":"Nome","posts":"Postagens","comments_":"Comentários","karma":"Carma","is_invited":"Foi Convidado?","is_admin":"É Admin?","delete":"Deletar","member_since":"Membro desde","edit_profile":"Editar perfil","sign_in":"Entrar","sign_in_":"Entrar!","sign_up_":"Registrar!","dont_have_an_account":"Não possui uma conta?","already_have_an_account":"Já possui uma conta?","sign_up":"Registrar","postedAt":"Postado em","please_fill_in_all_fields":"Por favor, preencha todos os campos","invite_":"Convidar ","left":" restantes","invite_none_left":"Convidar (nenhum restante)","all":"Todos","invited":"Convidado","uninvited":"Desconvidado","filter_by":"Filtrar por","sort_by":"Distribuir por"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                                // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/ro.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                       // 8
  TAPi18n.translations["ro"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                            // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["ro"][namespace], {"bio":"Despre tine","email":"Email","please_complete_your_profile_below_before_continuing":"Te rugăm să completezi toate datele înainte de a trece mai departe.","account":"Profil","username":"Nume utilizator","display_name":"Nume afișat public","password":"Parola","change_password":"Schimbă parola?","old_password":"Parola veche","new_password":"Parola nouă","email_notifications":"Notificări prin email","new_posts":"Postări noi","comments_on_my_posts":"Comentarii la postările mele","replies_to_my_comments":"Răspunsuri la postările mele","comments":"Comentarii","forgot_password":"Ați uitat parola?","profile_updated":"Profilul a fost actualizat","please_fill_in_your_email_below_to_finish_signing_up":"Vă rugăm treceți adresa de email pentru a finaliza înregistrarea.","invite":"Invație","uninvite":"Retrage invitația","make_admin":"Promovează ca administrator","unadmin":"Retrage dreptul de administrator","delete_user":"Șterge utilizator","are_you_sure_you_want_to_delete":"Ești sigur că vrei să ștergi următoarele: ","reset_password":"Resetează parola","password_reset_link_sent":"Un link pentru resetarea parolei tocmai a fost trimis!","name":"Nume","posts":"Postări","comments_":"Comentarii","karma":"Karma","is_invited":"Este invitat?","is_admin":"Este administrator?","delete":"Șterge","member_since":"Vechime","edit_profile":"Editează profilul","sign_in":"Logare","sign_in_":"Logare!","sign_up_":"Înregistrare!","dont_have_an_account":"Nu ești înregistrat?","already_have_an_account":"Ești deja înregistrat?","sign_up":"Înregistrează-te","please_fill_in_all_fields":"Te rugăm să completezi toate câmpurile necesare.","invite_":"Invitați(i) ","left":" rămase","invite_none_left":"Număr de invitații epuizat","all":"Toți","invited":"cei invitați","uninvited":"cei neinvitați","filter_by":"Filtreză după","sort_by":"Sorteză după"});
TAPi18n._registerServerTranslator("ro", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/ru.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                       // 8
  TAPi18n.translations["ru"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                            // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["ru"][namespace], {"bio":"Обо мне","email":"Email","please_complete_your_profile_below_before_continuing":"Заполните ваш профиль перед тем, как продолжить.","account":"Аккаунт","username":"Имя пользователя","display_name":"Показать имя","twitter_username":"Имя в Twitter","github_username":"Имя в GitHub","site_url":"URL сайта","password":"Пароль","change_password":"Сменить пароль?","old_password":"Старый пароль","new_password":"Новый пароль","email_notifications":"Email оповещение","new_users":"Новые пользователи","new_posts":"Новые посты","comments_on_my_posts":"Комментариев под моими постами","replies_to_my_comments":"Ответов на мои комментарии","comments":"Комментарии","forgot_password":"Забыли пароль?","profile_updated":"Профиль обновлён","please_fill_in_your_email_below_to_finish_signing_up":"Пожалуйста, укажите ваш email ниже для окончания регистрации.","invite":"Инвайт","uninvite":"Отменить инвайт","make_admin":"Сделать админом","unadmin":"Отметить админа","delete_user":"Удалить пользователя","are_you_sure_you_want_to_delete":"Уверены, что хотите удалить ","reset_password":"Сбросить пароль","password_reset_link_sent":"Ссылка для сброса пароля отправлена!","name":"Имя","posts":"Посты","comments_":"Комментарии","karma":"Карма","is_invited":"Приглашён?","is_admin":"Админ?","delete":"Удалить","member_since":"Является членом с","edit_profile":"Редактировать профиль","sign_in":"Войти","sign_in_":"Войти!","sign_up_":"Зарегистрироваться!","dont_have_an_account":"Нет аккаунта?","already_have_an_account":"Уже есть аккаунт?","sign_up":"Зарегистрироваться","postedAt":"Опубликован","please_fill_in_all_fields":"Заполните все поля","invite_":"Пригласить ","left":" покинул(а)","invite_none_left":"Пригласить (не осталось)","all":"Все","invited":"Приглашённые","uninvited":"Неприглашённые","filter_by":"Фильтровать по","sort_by":"Сортировать по"});
TAPi18n._registerServerTranslator("ru", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/sl.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                       // 8
  TAPi18n.translations["sl"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                            // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["sl"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Prosimo, izpolnite manjkajoče podatke, da končate prijavo.","bio":"Bio","displayName":"Ime","email":"E-naslov","twitterUsername":"Twitter ime","website":"Spletna stran","htmlBio":"Bio","user_profile_saved":"Uporabniški profil shranjen","this_email_is_already_taken":"Ta email je že zaseden","all_fields_are_required":"Vsa polja so obvezna","please_complete_your_profile_below_before_continuing":"Prosimo, izpolnite svoj profil pred nadaljevanjem.","account":"Račun","username":"Uporabniško ime","display_name":"Prikazno ime","city":"Kraj","twitter_username":"Twitter uporabnik","github_username":"GitHub ime","site_url":"URL Spletne Strani","password":"Geslo","change_password":"Spremeni geslo?","old_password":"Staro Geslo","new_password":"Novo Geslo","email_notifications":"E-poštna obvestila","new_users":"Novi uporabniki","new_posts":"Nove objave","comments_on_my_posts":"Komentarji na moje objave","replies_to_my_comments":"Odgovori na moje komentarje","comments":"Komentarjev","forgot_password":"Ste pozabili geslo?","profile_updated":"Profil posodobljen","please_fill_in_your_email_below_to_finish_signing_up":"Prosimo, izpolnite vašo e-pošto, da končate registracijo.","invite":"Povabite","uninvite":"Prekliči povabilo","make_admin":"Spremeni v skrbnika","unadmin":"Odstrani status Skrbnika","delete_user":"Izbriši uporabnika","are_you_sure_you_want_to_delete":"Ali ste prepričani, da želite izbrisati","reset_password":"Ponastavitev gesla","password_reset_link_sent":"Povezava za ponastavitev gesla je bila poslana!","name":"Ime","posts":"Objave","comments_":"Komentarjev","karma":"Karma","is_invited":"Je povabljen?","is_admin":"Je Admin?","delete":"Izbriši","member_since":"Član od","edit_profile":"Uredi profil","sign_in":"Prijava","sign_in_":"Prijava!","sign_up_":"Registrirajte se!","dont_have_an_account":"Še nimate računa?","already_have_an_account":"Že imate račun?","downvotedAt":"Glasovano Proti Ob","sign_up":"Registrirajte se","postedAt":"Objavljeno","please_fill_in_all_fields":"Prosimo, izpolnite vsa polja","upvotedAt":"Izglasovano Ob","invite_":"Povabite","left":"levo","invite_none_left":"Vabila (nič preostalih)","all":"Vsi","invited":"Povabljen","uninvited":"Nepovabljen","filter_by":"Filtriraj po","sort_by":"Razvrsti po"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/sv.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                       // 8
  TAPi18n.translations["sv"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                            // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["sv"][namespace], {"please_fill_in_missing_information_to_finish_signing_up":"Vänligen fyll i avsaknade fält nedan för att bli medlem.","bio":"Biografi","displayName":"Namn","email":"E-post","twitterUsername":"Twitter-konto","website":"Webbplats","htmlBio":"Bio","user_profile_saved":"Användarprofil sparad","this_email_is_already_taken":"E-postadressen är redan taget","all_fields_are_required":"Alla fält är obligatoriska","please_complete_your_profile_below_before_continuing":"Vänligen fyll i din profil innan du fortsätter.","account":"Profil","username":"Användarnamn","display_name":"Visningsnamn","city":"Stad","twitter_username":"Twitter-konto","github_username":"GitHub-konto","site_url":"Hemside-adress","password":"Lösenord","change_password":"Byta lösenord?","old_password":"Gammalt lösenord","new_password":"Nytt lösenord","email_notifications":"E-post-notifikationer","new_users":"Nya användare","new_posts":"Nya inlägg","comments_on_my_posts":"Kommentarer på mina inlägg","replies_to_my_comments":"Svar på mina kommentarer","comments":"Kommentarer","forgot_password":"Glömt lösenord?","profile_updated":"Profil uppdaterad","please_fill_in_your_email_below_to_finish_signing_up":"Vänligen fyll i din E-post för att bli medlem.","invite":"Bjud in","uninvite":"Avbryt inbjudning","make_admin":"Gör till admin","unadmin":"Gör inte till admin","delete_user":"Ta bort användare","are_you_sure_you_want_to_delete":"Är du säker att du vill ta bort ","reset_password":"Återställ lösenord","password_reset_link_sent":"Återställningslänk skickad!","name":"Namn","posts":"Inlägg","comments_":"Kommentarer","karma":"Karma","is_invited":"Är inbjuden?","is_admin":"Är admin?","delete":"Ta bort","member_since":"Medlem sen","edit_profile":"Redigera profil","sign_in":"Logga in","sign_in_":"Logga in!","sign_up_":"Bli Medlem!","dont_have_an_account":"Har du inget konto?","already_have_an_account":"Har du redan ett konto?","downvotedAt":"Nedröstad","sign_up":"Bli Medlem","postedAt":"Tillagd","please_fill_in_all_fields":"Vänligen fyll i samtliga fält","upvotedAt":"Uppröstad","invite_":"Bjud in ","left":" kvar","invite_none_left":"Inbjudningar (inga kvar)","all":"Alla","invited":"Inbjuden","uninvited":"Oinbjuden","filter_by":"Filtrera på","sort_by":"Sortera på"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/th.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                       // 8
  TAPi18n.translations["th"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                            // 12
  TAPi18n.translations["th"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["th"][namespace], {"comments_":"ความเห็น","postedAt":"โพสต์เมื่อ"});                    // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/tr.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                       // 8
  TAPi18n.translations["tr"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                            // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["tr"][namespace], {"bio":"Bio","email":"Eposta","user_profile_saved":"Kullanıcı profili kaydedildi.","this_email_is_already_taken":"Bu e-posta başka bir hesapta kullanılıyor.","all_fields_are_required":"Tüm alanlar zorunludur.","please_complete_your_profile_below_before_continuing":"Lütfen devam etmeden önce aşağıdaki profilinizi tamamlayınız","account":"Hesap","username":"Kullanıcı adı","display_name":"Görülen isim","city":"Şehir","twitter_username":"Twitter Kullanıcı adı","github_username":"GitHub Kullanıcı Adı","site_url":"Site ","password":"şifre","change_password":"şifreyi değiştir?","old_password":"Eski şifre","new_password":"Yeni şifre","email_notifications":"e-posta bildirimi","new_users":"Yeni kullanıcılar","new_posts":"Yeni paylaşımlar","comments_on_my_posts":"Paylaşımımdaki yorumlar","replies_to_my_comments":"Yorumlarıma cevaplar","comments":"Yorumlar","forgot_password":"Şifreyi unuttunuz mu?","profile_updated":"Profil güncellendi","please_fill_in_your_email_below_to_finish_signing_up":"Lütfen kaydınızı tamamlamak için aşağıya e-posta adresinizi giriniz","invite":"Davet et","uninvite":"Daveti geri al","make_admin":"Admin yap","unadmin":"Adminliği kaldır","delete_user":"Kullanıcıyı sil","are_you_sure_you_want_to_delete":"Silmek istediğinize emin misiniz?","reset_password":"Şifreyi sıfırla","password_reset_link_sent":"Şifre sıfırlama bağlantısı gönderildi!","name":"İsim","posts":"Paylaşımlar","karma":"Karma","is_invited":"Davet edildi mi?","is_admin":"Admin mi?","delete":"Sil","member_since":"Üyelik başlangıcı","edit_profile":"Profili değiştir","sign_in":"Giriş yap","sign_in_":"Giriş yap!","sign_up_":"Kayıt ol!","dont_have_an_account":"Hesabınız yok mu?","already_have_an_account":"Hesabınız var mı?","sign_up":"Kayıt ol","please_fill_in_all_fields":"Lütfen bütün alanları doldurunuz","left":" kalan","invite_none_left":"Davet et (hiç kalmadı)","all":"Hepsi","invited":"Davet edildi","uninvited":"Davet edilmedi","filter_by":"Filtreleme kıstası","sort_by":"Sıralama kıstası"});
TAPi18n._registerServerTranslator("tr", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/vi.i18n.js                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                       // 8
  TAPi18n.translations["vi"] = {};                                                                                    // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                            // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                         // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["vi"][namespace], {"bio":"Bio","email":"Email","please_complete_your_profile_below_before_continuing":"Xin điền thông tin hồ sơ của bạn để tiếp tục.","account":"Tài khoản","username":"Tên đăng nhập","display_name":"Tên xuất hiện","twitter_username":"Tài khoản Twitter","github_username":"Tài khoản GitHub","site_url":"Địa chỉ website","password":"Mật khẩu","change_password":"Thay đổi mật khẩu?","old_password":"Mật khẩu cũ","new_password":"Mật khẩu mới","email_notifications":"Email thông báo","new_users":"Người dùng mới","new_posts":"Bài mới","comments_on_my_posts":"Bình luận trên bài của tôi","replies_to_my_comments":"Trả lời ý kiến của tôi","comments":"ý kiến","forgot_password":"Quyên mật khẩu?","profile_updated":"Cập nhật hồ sơ","please_fill_in_your_email_below_to_finish_signing_up":"Xin nhập email của bạn dưới đây để hoàn thành việc đăng ký.","invite":"Mời","uninvite":"Không mời","make_admin":"Thiết lập Admin","unadmin":"Ngắt Admin","delete_user":"Xóa người dùng","are_you_sure_you_want_to_delete":"Bạn có chắc muốn xóa?","reset_password":"Thiết lập lại mật khẩu","password_reset_link_sent":"Mật khẩu đã được gửi!","name":"Tên","posts":"Bài","comments_":"Ý kiến","karma":"Karma","is_invited":"Được mời?","is_admin":"Admin?","delete":"Xóa","member_since":"Thành viên từ","edit_profile":"Sửa hồ sơ","sign_in":"Đăng nhập","sign_in_":"Đăng nhập!","sign_up_":"Đăng ký!","dont_have_an_account":"Bạn không có tài khoản?","already_have_an_account":"Bạn đã có tài khoản?","sign_up":"Đăng ký","postedAt":"Đăng lúc","please_fill_in_all_fields":"Nhập thông tin","invite_":"Mời ","left":" left","invite_none_left":"Invite (none left)","all":"Tất cả","invited":"Mời","uninvited":"Không mời","filter_by":"Lọc theo","sort_by":"Sắp xếp theo"});
TAPi18n._registerServerTranslator("vi", namespace);                                                                   // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/packages/telescope_usersi18n/zh-CN.i18n.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _ = Package.underscore._,                                                                                         // 1
    package_name = "telescope:users",                                                                                 // 2
    namespace = "telescope:users";                                                                                    // 3
                                                                                                                      // 4
if (package_name != "project") {                                                                                      // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                             // 6
}                                                                                                                     // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                    // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                 // 9
}                                                                                                                     // 10
                                                                                                                      // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                         // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                      // 13
}                                                                                                                     // 14
                                                                                                                      // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"bio":"小传","email":"Email","please_complete_your_profile_below_before_continuing":"在继续之前请填写相关资料.","account":"帐号","username":"用户名","display_name":"昵称","password":"密码","change_password":"修改密码?","old_password":"旧密码","new_password":"新密码","email_notifications":"邮箱提醒","new_posts":"最新主题","comments_on_my_posts":"评论我的主题时","replies_to_my_comments":"回复我的回复时","comments":"评论数","forgot_password":"忘记密码?","profile_updated":"更新资料","please_fill_in_your_email_below_to_finish_signing_up":"请填写你的电子邮件完成注册.","invite":"邀请","uninvite":"未激活","make_admin":"设置为管理员","unadmin":"取消管理资格","delete_user":"删除用户","are_you_sure_you_want_to_delete":"你确定要删除用户吗 ","reset_password":"重置密码","password_reset_link_sent":"密码重置链接已发送","name":"名字","posts":"帖子数","comments_":"评论数","karma":"Karma","is_invited":"邀请用户?","is_admin":"管理员?","delete":"删除","member_since":"加入至今","edit_profile":"修改个人资料","sign_in":"登录","sign_in_":"登录!","sign_up_":"注册!","dont_have_an_account":"还没有帐号?","already_have_an_account":"已有帐号?","sign_up":"注册","please_fill_in_all_fields":"请填写完整","invite_":"邀请 ","left":" restante","invite_none_left":"Invite (none left)","all":"全部","invited":"邀请","uninvited":"未被邀请","filter_by":"过滤","sort_by":"排序"});
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                                // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:users'] = {
  Users: Users
};

})();

//# sourceMappingURL=telescope_users.js.map
