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
var Settings = Package['telescope:settings'].Settings;
var i18n = Package['telescope:i18n'].i18n;
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
var __, registerI18nTemplate, registerTemplate, non_package_templates, Users, translations;

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
// define the package's templates registrar                                                                           // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:users");                                           // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                      // 8
// Record the list of templates prior to package load                                                                 // 9
var _ = Package.underscore._;                                                                                         // 10
non_package_templates = _.keys(Template);                                                                             // 11
                                                                                                                      // 12
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
// packages/telescope_users/lib/client/templates/account/template.user_account.js                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_account");                                                                                 // 2
Template["user_account"] = new Template("Template.user_account", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "grid-small grid-module dialog user-edit"                                                                // 6
  }, "\n\n  ", Blaze._TemplateWith(function() {                                                                       // 7
    return {                                                                                                          // 8
      collection: Spacebars.call("Meteor.users"),                                                                     // 9
      doc: Spacebars.call(view.lookup("user")),                                                                       // 10
      id: Spacebars.call("editUserForm"),                                                                             // 11
      template: Spacebars.call("bootstrap3-horizontal"),                                                              // 12
      "input-col-class": Spacebars.call("controls"),                                                                  // 13
      type: Spacebars.call("update"),                                                                                 // 14
      fields: Spacebars.call(view.lookup("userFields"))                                                               // 15
    };                                                                                                                // 16
  }, function() {                                                                                                     // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                       // 18
  }), "\n\n  ", Blaze.If(function() {                                                                                 // 19
    return Spacebars.call(view.lookup("isUsingPassword"));                                                            // 20
  }, function() {                                                                                                     // 21
    return [ "\n    ", HTML.A({                                                                                       // 22
      href: function() {                                                                                              // 23
        return Spacebars.mustache(view.lookup("pathFor"), "atChangePwd");                                             // 24
      }                                                                                                               // 25
    }, Blaze.View("lookup:_", function() {                                                                            // 26
      return Spacebars.mustache(view.lookup("_"), "change_password");                                                 // 27
    })), "\n  " ];                                                                                                    // 28
  }), "\n  ");                                                                                                        // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/account/user_account.js                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_account.helpers({                                                                                       // 1
  user: function () {                                                                                                 // 2
    return this;                                                                                                      // 3
  },                                                                                                                  //
  userFields: function () {                                                                                           // 5
    var fields = Meteor.users.simpleSchema().getEditableFields(Meteor.user());                                        // 6
    return fields;                                                                                                    // 7
  },                                                                                                                  //
  isUsingPassword: function () {                                                                                      // 9
    return this.services && !!this.services.password;                                                                 // 10
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
AutoForm.hooks({                                                                                                      // 15
  editUserForm: {                                                                                                     // 16
                                                                                                                      //
    onSuccess: function (operation, result) {                                                                         // 18
      this.template.$('button[type=submit]').removeClass('loading');                                                  // 19
      Messages.flash(i18n.t("user_profile_saved"), 'success');                                                        // 20
      Messages.clearSeen();                                                                                           // 21
    },                                                                                                                //
                                                                                                                      //
    onError: function (operation, error) {                                                                            // 24
      this.template.$('button[type=submit]').removeClass('loading');                                                  // 25
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined     // 26
      Messages.clearSeen();                                                                                           // 27
    }                                                                                                                 //
                                                                                                                      //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/account/template.user_password.js                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_password");                                                                                // 2
Template["user_password"] = new Template("Template.user_password", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("isUsingPassword"));                                                            // 6
  }, function() {                                                                                                     // 7
    return [ "\n    ", HTML.DIV({                                                                                     // 8
      "class": "grid-small grid-module dialog user-password"                                                          // 9
    }, "\n      ", Blaze._TemplateWith(function() {                                                                   // 10
      return {                                                                                                        // 11
        state: Spacebars.call("changePwd")                                                                            // 12
      };                                                                                                              // 13
    }, function() {                                                                                                   // 14
      return Spacebars.include(view.lookupTemplate("atForm"));                                                        // 15
    }), "\n    "), "\n  " ];                                                                                          // 16
  });                                                                                                                 // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/account/user_password.js                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_password.helpers({                                                                                      // 1
  isUsingPassword: function () {                                                                                      // 2
    return !!this.services.password;                                                                                  // 3
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users-dashboard.js                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_dashboard");                                                                              // 2
Template["users_dashboard"] = new Template("Template.users_dashboard", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h2 class="users-dashboard-heading">All Users</h2>\n  '), HTML.DIV({                             // 5
    "class": "users-dashboard"                                                                                        // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                                                       // 7
    return {                                                                                                          // 8
      settings: Spacebars.call(view.lookup("settings"))                                                               // 9
    };                                                                                                                // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(view.lookupTemplate("reactiveTable"));                                                   // 12
  }), "\n  ") ];                                                                                                      // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/users-dashboard.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.users_dashboard.helpers({                                                                                    // 1
  settings: function () {                                                                                             // 2
    return {                                                                                                          // 3
      collection: 'all-users',                                                                                        // 4
      rowsPerPage: 20,                                                                                                // 5
      showFilter: true,                                                                                               // 6
      fields: [{ key: 'avatar', label: '', tmpl: Template.users_list_avatar, sortable: false }, { key: 'createdAt', label: 'Member Since', tmpl: Template.users_list_created_at, sort: 'descending' }, { key: 'isAdmin', label: 'Admin', fn: function (val) {
          return val ? 'Yes' : 'No';                                                                                  // 10
        } }, { key: 'username', label: 'Username', tmpl: Template.users_list_username }, { key: 'telescope.displayName', label: 'Display Name', tmpl: Template.users_list_display_name }, { key: 'telescope.email', label: 'Email', tmpl: Template.users_list_email }, { key: 'telescope.postCount', label: 'Posts' }, { key: 'telescope.commentCount', label: 'Comments' }, { key: 'telescope.karma', label: 'Karma', fn: function (val) {
          return Math.round(100 * val) / 100;                                                                         // 16
        } }, { key: 'telescope.inviteCount', label: 'Invites' }, { key: 'telescope.isInvited', label: 'Invited', fn: function (val) {
          return val ? 'Yes' : 'No';                                                                                  // 18
        } }, { key: 'actions', label: 'Actions', tmpl: Template.users_list_actions, sortable: false }]                //
    };                                                                                                                //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_actions.js                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_actions");                                                                           // 2
Template["users_list_actions"] = new Template("Template.users_list_actions", (function() {                            // 3
  var view = this;                                                                                                    // 4
  return HTML.UL("\n    ", HTML.LI("\n      ", Blaze.If(function() {                                                  // 5
    return Spacebars.call(view.lookup("isInvited"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n        ", HTML.A({                                                                                   // 8
      "class": "uninvite-link",                                                                                       // 9
      href: "#"                                                                                                       // 10
    }, Blaze.View("lookup:_", function() {                                                                            // 11
      return Spacebars.mustache(view.lookup("_"), "uninvite");                                                        // 12
    })), "\n      " ];                                                                                                // 13
  }, function() {                                                                                                     // 14
    return [ "\n        ", HTML.A({                                                                                   // 15
      href: "#",                                                                                                      // 16
      "class": "invite-link"                                                                                          // 17
    }, Blaze.View("lookup:_", function() {                                                                            // 18
      return Spacebars.mustache(view.lookup("_"), "invite");                                                          // 19
    })), "\n      " ];                                                                                                // 20
  }), "\n    "), "\n    ", HTML.LI("\n      ", Blaze.If(function() {                                                  // 21
    return Spacebars.call(view.lookup("userIsAdmin"));                                                                // 22
  }, function() {                                                                                                     // 23
    return [ "\n        ", HTML.A({                                                                                   // 24
      "class": "unadmin-link",                                                                                        // 25
      href: "#"                                                                                                       // 26
    }, Blaze.View("lookup:_", function() {                                                                            // 27
      return Spacebars.mustache(view.lookup("_"), "unadmin");                                                         // 28
    })), "\n      " ];                                                                                                // 29
  }, function() {                                                                                                     // 30
    return [ "\n        ", HTML.A({                                                                                   // 31
      href: "#",                                                                                                      // 32
      "class": "admin-link"                                                                                           // 33
    }, Blaze.View("lookup:_", function() {                                                                            // 34
      return Spacebars.mustache(view.lookup("_"), "make_admin");                                                      // 35
    })), "\n      " ];                                                                                                // 36
  }), "\n    "), "\n    ", HTML.LI("\n      ", HTML.A({                                                               // 37
    "class": "delete-link",                                                                                           // 38
    href: "#"                                                                                                         // 39
  }, Blaze.View("lookup:_", function() {                                                                              // 40
    return Spacebars.mustache(view.lookup("_"), "delete_user");                                                       // 41
  })), "\n    "), "\n  ");                                                                                            // 42
}));                                                                                                                  // 43
                                                                                                                      // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/users_list_actions.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.users_list_actions.helpers({                                                                                 // 1
  isInvited: function () {                                                                                            // 2
    return this.telescope.isInvited;                                                                                  // 3
  },                                                                                                                  //
  userIsAdmin: function () {                                                                                          // 5
    return Users.is.admin(this);                                                                                      // 6
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Template.users_list_actions.events({                                                                                  // 10
  'click .invite-link': function (e) {                                                                                // 11
    e.preventDefault();                                                                                               // 12
    Meteor.users.update(this._id, { $set: { "telescope.isInvited": true } });                                         // 13
  },                                                                                                                  //
  'click .uninvite-link': function (e) {                                                                              // 16
    e.preventDefault();                                                                                               // 17
    Meteor.users.update(this._id, { $set: { "telescope.isInvited": false } });                                        // 18
  },                                                                                                                  //
  'click .admin-link': function (e) {                                                                                 // 20
    e.preventDefault();                                                                                               // 21
    Users.updateAdmin(this._id, true);                                                                                // 22
  },                                                                                                                  //
  'click .unadmin-link': function (e) {                                                                               // 24
    e.preventDefault();                                                                                               // 25
    Users.updateAdmin(this._id, false);                                                                               // 26
  },                                                                                                                  //
  'click .delete-link': function (e) {                                                                                // 28
    e.preventDefault();                                                                                               // 29
    if (confirm(i18n.t("are_you_sure_you_want_to_delete") + Users.getDisplayName(this) + "?")) {                      // 30
      if (confirm(i18n.t("delete_users_posts_comments_as_well"))) {                                                   // 31
        Meteor.call("removeUser", this._id, true, function (error, result) {                                          // 32
          if (result) {                                                                                               // 33
            Messages.flash(result);                                                                                   // 34
          }                                                                                                           //
        });                                                                                                           //
      } else {                                                                                                        //
        Meteor.call("removeUser", this._id, false, function (error, result) {                                         // 38
          if (result) {                                                                                               // 39
            Messages.flash(result);                                                                                   // 40
          }                                                                                                           //
        });                                                                                                           //
      }                                                                                                               //
    }                                                                                                                 //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_avatar.js                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_avatar");                                                                            // 2
Template["users_list_avatar"] = new Template("Template.users_list_avatar", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("."));                                      // 7
    }                                                                                                                 // 8
  }, Blaze._TemplateWith(function() {                                                                                 // 9
    return {                                                                                                          // 10
      user: Spacebars.call(view.lookup(".")),                                                                         // 11
      shape: Spacebars.call("circle")                                                                                 // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return Spacebars.include(view.lookupTemplate("avatar"));                                                          // 15
  }));                                                                                                                // 16
}));                                                                                                                  // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_created_at.js                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_created_at");                                                                        // 2
Template["users_list_created_at"] = new Template("Template.users_list_created_at", (function() {                      // 3
  var view = this;                                                                                                    // 4
  return [ HTML.DIV({                                                                                                 // 5
    "class": "date"                                                                                                   // 6
  }, Blaze.View("lookup:formatDate", function() {                                                                     // 7
    return Spacebars.mustache(view.lookup("formatDate"), view.lookup("createdAt"), "LL");                             // 8
  })), "\n  ", HTML.DIV({                                                                                             // 9
    "class": "time-ago"                                                                                               // 10
  }, Blaze.View("lookup:timeAgo", function() {                                                                        // 11
    return Spacebars.mustache(view.lookup("timeAgo"), view.lookup("createdAt"));                                      // 12
  })) ];                                                                                                              // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_email.js                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_email");                                                                             // 2
Template["users_list_email"] = new Template("Template.users_list_email", (function() {                                // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return [ "mailto:", Spacebars.mustache(Spacebars.dot(view.lookup("telescope"), "email")) ];                     // 7
    }                                                                                                                 // 8
  }, Blaze.View("lookup:telescope.email", function() {                                                                // 9
    return Spacebars.mustache(Spacebars.dot(view.lookup("telescope"), "email"));                                      // 10
  }));                                                                                                                // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_username.js                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_username");                                                                          // 2
Template["users_list_username"] = new Template("Template.users_list_username", (function() {                          // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("."));                                      // 7
    }                                                                                                                 // 8
  }, Blaze.View("lookup:getUsername", function() {                                                                    // 9
    return Spacebars.mustache(view.lookup("getUsername"), view.lookup("."));                                          // 10
  }));                                                                                                                // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/dashboard/template.users_list_display_name.js                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users_list_display_name");                                                                      // 2
Template["users_list_display_name"] = new Template("Template.users_list_display_name", (function() {                  // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("getProfileUrl"), view.lookup("."));                                      // 7
    }                                                                                                                 // 8
  }, Blaze.View("lookup:getDisplayName", function() {                                                                 // 9
    return Spacebars.mustache(view.lookup("getDisplayName"), view.lookup("."));                                       // 10
  }));                                                                                                                // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_comments.js                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_comments");                                                                                // 2
Template["user_comments"] = new Template("Template.user_comments", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "user-profile-comments grid grid-module"                                                                 // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {                                                            // 7
    return Spacebars.mustache(view.lookup("_"), "comments");                                                          // 8
  })), "\n    ", Blaze._TemplateWith(function() {                                                                     // 9
    return Spacebars.call(view.lookup("arguments"));                                                                  // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(view.lookupTemplate("commentsListController"));                                          // 12
  }), "\n  ");                                                                                                        // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/user_comments.js                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_comments.helpers({                                                                                      // 1
  arguments: function () {                                                                                            // 2
    var user = this;                                                                                                  // 3
    return {                                                                                                          // 4
      template: "comments_list_compact",                                                                              // 5
      options: {                                                                                                      // 6
        currentUser: user,                                                                                            // 7
        fieldLabel: i18n.t("commentedAt"),                                                                            // 8
        fieldValue: function (comment) {                                                                              // 9
          return moment(comment.createdAt).format("MM/DD/YYYY, HH:mm");                                               // 10
        }                                                                                                             //
      },                                                                                                              //
      terms: {                                                                                                        // 13
        view: 'userComments',                                                                                         // 14
        userId: user._id,                                                                                             // 15
        limit: 5,                                                                                                     // 16
        enableCache: false,                                                                                           // 17
        subscribeToUsers: false                                                                                       // 18
      }                                                                                                               //
    };                                                                                                                //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_downvoted_posts.js                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_downvoted_posts");                                                                         // 2
Template["user_downvoted_posts"] = new Template("Template.user_downvoted_posts", (function() {                        // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.dataMustache(view.lookup("getSetting"), "enableDownvotes");                                      // 6
  }, function() {                                                                                                     // 7
    return [ "\n    ", HTML.DIV({                                                                                     // 8
      "class": "user-profile-votes grid grid-module"                                                                  // 9
    }, "\n      ", HTML.H3(Blaze.View("lookup:_", function() {                                                        // 10
      return Spacebars.mustache(view.lookup("_"), "downvoted_posts");                                                 // 11
    })), "\n      ", Blaze._TemplateWith(function() {                                                                 // 12
      return Spacebars.call(view.lookup("arguments"));                                                                // 13
    }, function() {                                                                                                   // 14
      return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                         // 15
    }), "\n    "), "\n  " ];                                                                                          // 16
  });                                                                                                                 // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/user_downvoted_posts.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_downvoted_posts.helpers({                                                                               // 1
  arguments: function () {                                                                                            // 2
    var user = this;                                                                                                  // 3
    return {                                                                                                          // 4
      template: "posts_list_compact",                                                                                 // 5
      options: {                                                                                                      // 6
        currentUser: user,                                                                                            // 7
        fieldLabel: i18n.t("downvotedAt"),                                                                            // 8
        fieldValue: function (post) {                                                                                 // 9
          var user = this.currentUser;                                                                                // 10
          var vote = _.findWhere(user.telescope.downvotedPosts, { itemId: post._id });                                // 11
          return moment(vote.votedAt).format("MM/DD/YYYY, HH:mm");                                                    // 12
        }                                                                                                             //
      },                                                                                                              //
      terms: {                                                                                                        // 15
        view: 'userDownvotedPosts',                                                                                   // 16
        userId: user._id,                                                                                             // 17
        limit: 5,                                                                                                     // 18
        enableCache: false,                                                                                           // 19
        subscribeToUsers: false                                                                                       // 20
      }                                                                                                               //
    };                                                                                                                //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_info.js                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_info");                                                                                    // 2
Template["user_info"] = new Template("Template.user_info", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "user-profile grid grid-module"                                                                          // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    "class": "user-profile-avatar"                                                                                    // 8
  }, Blaze._TemplateWith(function() {                                                                                 // 9
    return {                                                                                                          // 10
      user: Spacebars.call(view.lookup(".")),                                                                         // 11
      size: Spacebars.call("large"),                                                                                  // 12
      shape: Spacebars.call("circle")                                                                                 // 13
    };                                                                                                                // 14
  }, function() {                                                                                                     // 15
    return Spacebars.include(view.lookupTemplate("avatar"));                                                          // 16
  })), "\n    ", HTML.TABLE({                                                                                         // 17
    "class": "user-info"                                                                                              // 18
  }, "\n      ", Blaze.If(function() {                                                                                // 19
    return Spacebars.call(view.lookup("isAdmin"));                                                                    // 20
  }, function() {                                                                                                     // 21
    return [ "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:_", function() {                        // 22
      return Spacebars.mustache(view.lookup("_"), "id");                                                              // 23
    }), ": "), "\n          ", HTML.TD(Blaze.View("lookup:_id", function() {                                          // 24
      return Spacebars.mustache(view.lookup("_id"));                                                                  // 25
    })), "\n        "), "\n      " ];                                                                                 // 26
  }), "\n      ", Blaze.Each(function() {                                                                             // 27
    return Spacebars.call(view.lookup("publicProfileFields"));                                                        // 28
  }, function() {                                                                                                     // 29
    return [ "\n        ", HTML.TR("\n          ", HTML.TD(Blaze.View("lookup:label", function() {                    // 30
      return Spacebars.mustache(view.lookup("label"));                                                                // 31
    })), "\n          ", HTML.TD("\n            ", Blaze.If(function() {                                              // 32
      return Spacebars.call(view.lookup("template"));                                                                 // 33
    }, function() {                                                                                                   // 34
      return [ "\n              ", Blaze._TemplateWith(function() {                                                   // 35
        return {                                                                                                      // 36
          template: Spacebars.call(view.lookup("template")),                                                          // 37
          data: Spacebars.call(view.lookup("value"))                                                                  // 38
        };                                                                                                            // 39
      }, function() {                                                                                                 // 40
        return Spacebars.include(function() {                                                                         // 41
          return Spacebars.call(Template.__dynamic);                                                                  // 42
        });                                                                                                           // 43
      }), "\n            " ];                                                                                         // 44
    }, function() {                                                                                                   // 45
      return [ "\n              ", Blaze.View("lookup:value", function() {                                            // 46
        return Spacebars.mustache(view.lookup("value"));                                                              // 47
      }), "\n            " ];                                                                                         // 48
    }), "\n          "), "\n        "), "\n      " ];                                                                 // 49
  }), "\n    "), "\n    ", Blaze.If(function() {                                                                      // 50
    return Spacebars.call(view.lookup("canEditProfile"));                                                             // 51
  }, function() {                                                                                                     // 52
    return [ "\n      ", HTML.A({                                                                                     // 53
      "class": "edit-profile-button button btn btn-primary inline",                                                   // 54
      href: function() {                                                                                              // 55
        return Spacebars.mustache(view.lookup("pathFor"), "userEdit", Spacebars.kw({                                  // 56
          _idOrSlug: Spacebars.dot(view.lookup("."), "telescope", "slug")                                             // 57
        }));                                                                                                          // 58
      }                                                                                                               // 59
    }, Blaze.View("lookup:_", function() {                                                                            // 60
      return Spacebars.mustache(view.lookup("_"), "edit_profile");                                                    // 61
    })), "\n    " ];                                                                                                  // 62
  }), "\n    ", Blaze.If(function() {                                                                                 // 63
    return Spacebars.call(view.lookup("canInvite"));                                                                  // 64
  }, function() {                                                                                                     // 65
    return [ "\n      ", Blaze.If(function() {                                                                        // 66
      return Spacebars.call(view.lookup("isAdmin"));                                                                  // 67
    }, function() {                                                                                                   // 68
      return [ "\n        ", HTML.A({                                                                                 // 69
        "class": "button btn btn-primary inline invite-link",                                                         // 70
        href: "#"                                                                                                     // 71
      }, Blaze.View("lookup:_", function() {                                                                          // 72
        return Spacebars.mustache(view.lookup("_"), "invite");                                                        // 73
      })), "\n      " ];                                                                                              // 74
    }, function() {                                                                                                   // 75
      return [ "\n        ", Blaze.If(function() {                                                                    // 76
        return Spacebars.call(view.lookup("inviteCount"));                                                            // 77
      }, function() {                                                                                                 // 78
        return [ "\n          ", HTML.A({                                                                             // 79
          "class": "button btn btn-primary inline invite-link",                                                       // 80
          href: "#"                                                                                                   // 81
        }, Blaze.View("lookup:_", function() {                                                                        // 82
          return Spacebars.mustache(view.lookup("_"), "invite");                                                      // 83
        }), " (", Blaze.View("lookup:inviteCount", function() {                                                       // 84
          return Spacebars.mustache(view.lookup("inviteCount"));                                                      // 85
        }), " ", Blaze.View("lookup:_", function() {                                                                  // 86
          return Spacebars.mustache(view.lookup("_"), "left");                                                        // 87
        }), ")"), "\n        " ];                                                                                     // 88
      }, function() {                                                                                                 // 89
        return [ "\n          ", HTML.A({                                                                             // 90
          "class": "button btn inline disabled",                                                                      // 91
          href: "#"                                                                                                   // 92
        }, Blaze.View("lookup:_", function() {                                                                        // 93
          return Spacebars.mustache(view.lookup("_"), "invite_none_left");                                            // 94
        })), "\n        " ];                                                                                          // 95
      }), "\n      " ];                                                                                               // 96
    }), "\n    " ];                                                                                                   // 97
  }), "\n  ");                                                                                                        // 98
}));                                                                                                                  // 99
                                                                                                                      // 100
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/user_info.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_info.helpers({                                                                                          // 1
  canEditProfile: function () {                                                                                       // 2
    var currentUser = Meteor.user();                                                                                  // 3
    return currentUser && (this._id === currentUser._id || Users.is.admin(currentUser));                              // 4
  },                                                                                                                  //
  createdAtFormatted: function () {                                                                                   // 6
    return this.createdAt;                                                                                            // 7
  },                                                                                                                  //
  canInvite: function () {                                                                                            // 9
    // if the user is logged in, the target user hasn't been invited yet, invites are enabled, and user is not viewing their own profile
    return Meteor.user() && Meteor.user()._id !== this._id && !Users.is.invited(this) && Telescope.utils.invitesEnabled() && Users.can.invite(Meteor.user());
  },                                                                                                                  //
  inviteCount: function () {                                                                                          // 13
    return Meteor.user().telescope.inviteCount;                                                                       // 14
  },                                                                                                                  //
  getTwitterName: function () {                                                                                       // 16
    return Users.getTwitterName(this);                                                                                // 17
  },                                                                                                                  //
  getGitHubName: function () {                                                                                        // 19
    return Users.getGitHubName(this);                                                                                 // 20
  },                                                                                                                  //
  publicProfileFields: function () {                                                                                  // 22
    var user = this;                                                                                                  // 23
    var schema = Users.simpleSchema();                                                                                // 24
    var publicData = _.compact(_.map(schema.getProfileFields(), function (fieldName) {                                // 25
      if (Telescope.getNestedProperty(user, fieldName)) {                                                             // 26
        var field = schema._schema[fieldName];                                                                        // 27
        var item = {                                                                                                  // 28
          label: !!field.label ? field.label : i18n.t(fieldName.replace("telescope.", "")),                           // 29
          value: Telescope.getNestedProperty(user, fieldName)                                                         // 30
        };                                                                                                            //
        if (!!field.template) {                                                                                       // 32
          item.template = field.template;                                                                             // 33
        }                                                                                                             //
        return item;                                                                                                  // 35
      }                                                                                                               //
    }));                                                                                                              //
    return publicData;                                                                                                // 38
  },                                                                                                                  //
  isUsingPassword: function () {                                                                                      // 40
    return !!this.services.password;                                                                                  // 41
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Template.user_info.events({                                                                                           // 45
  'click .invite-link': function (e, instance) {                                                                      // 46
    var user = this;                                                                                                  // 47
    Meteor.call('inviteUser', { userId: user._id }, function (error, success) {                                       // 48
      if (error) {                                                                                                    // 49
        Messages.flash(error, "error");                                                                               // 50
        Messages.clearSeen();                                                                                         // 51
      } else {                                                                                                        //
        Messages.flash('Thanks, user has been invited.', "success");                                                  // 53
        Messages.clearSeen();                                                                                         // 54
      }                                                                                                               //
    });                                                                                                               //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_posts.js                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_posts");                                                                                   // 2
Template["user_posts"] = new Template("Template.user_posts", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "user-profile-posts grid grid-module"                                                                    // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {                                                            // 7
    return Spacebars.mustache(view.lookup("_"), "submitted_posts");                                                   // 8
  })), "\n    ", Blaze._TemplateWith(function() {                                                                     // 9
    return Spacebars.call(view.lookup("arguments"));                                                                  // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                           // 12
  }), "\n  ");                                                                                                        // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/user_posts.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_posts.helpers({                                                                                         // 1
  arguments: function () {                                                                                            // 2
    var user = this;                                                                                                  // 3
    return {                                                                                                          // 4
      template: "posts_list_compact",                                                                                 // 5
      options: {                                                                                                      // 6
        currentUser: user,                                                                                            // 7
        fieldLabel: i18n.t("postedAt"),                                                                               // 8
        fieldValue: function (post) {                                                                                 // 9
          return moment(post.postedAt).format("MM/DD/YYYY, HH:mm");                                                   // 10
        }                                                                                                             //
      },                                                                                                              //
      terms: {                                                                                                        // 13
        view: 'userPosts',                                                                                            // 14
        userId: user._id,                                                                                             // 15
        limit: 5,                                                                                                     // 16
        enableCache: false,                                                                                           // 17
        subscribeToUsers: false                                                                                       // 18
      }                                                                                                               //
    };                                                                                                                //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_upvoted_posts.js                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_upvoted_posts");                                                                           // 2
Template["user_upvoted_posts"] = new Template("Template.user_upvoted_posts", (function() {                            // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "user-profile-votes grid grid-module"                                                                    // 6
  }, "\n    ", HTML.H3(Blaze.View("lookup:_", function() {                                                            // 7
    return Spacebars.mustache(view.lookup("_"), "upvoted_posts");                                                     // 8
  })), "\n    ", Blaze._TemplateWith(function() {                                                                     // 9
    return Spacebars.call(view.lookup("arguments"));                                                                  // 10
  }, function() {                                                                                                     // 11
    return Spacebars.include(view.lookupTemplate("posts_list_controller"));                                           // 12
  }), "\n  ");                                                                                                        // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/user_upvoted_posts.js                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_upvoted_posts.helpers({                                                                                 // 1
  arguments: function () {                                                                                            // 2
    var user = this;                                                                                                  // 3
    return {                                                                                                          // 4
      template: "posts_list_compact",                                                                                 // 5
      options: {                                                                                                      // 6
        currentUser: user,                                                                                            // 7
        fieldLabel: i18n.t("upvotedAt"),                                                                              // 8
        fieldValue: function (post) {                                                                                 // 9
          var user = this.currentUser;                                                                                // 10
          var vote = _.findWhere(user.telescope.upvotedPosts, { itemId: post._id });                                  // 11
          return moment(vote.votedAt).format("MM/DD/YYYY, HH:mm");                                                    // 12
        }                                                                                                             //
      },                                                                                                              //
      terms: {                                                                                                        // 15
        view: 'userUpvotedPosts',                                                                                     // 16
        userId: user._id,                                                                                             // 17
        limit: 5,                                                                                                     // 18
        enableCache: false,                                                                                           // 19
        subscribeToUsers: false                                                                                       // 20
      }                                                                                                               //
    };                                                                                                                //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_profile_bio.js                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_profile_bio");                                                                             // 2
Template["user_profile_bio"] = new Template("Template.user_profile_bio", (function() {                                // 3
  var view = this;                                                                                                    // 4
  return Blaze.View("lookup:.", function() {                                                                          // 5
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup(".")));                                                   // 6
  });                                                                                                                 // 7
}));                                                                                                                  // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/profile/template.user_profile_twitter.js                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_profile_twitter");                                                                         // 2
Template["user_profile_twitter"] = new Template("Template.user_profile_twitter", (function() {                        // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return [ "http://twitter.com/", Spacebars.mustache(view.lookup(".")) ];                                         // 7
    },                                                                                                                // 8
    target: "_blank"                                                                                                  // 9
  }, Blaze.View("lookup:.", function() {                                                                              // 10
    return Spacebars.mustache(view.lookup("."));                                                                      // 11
  }));                                                                                                                // 12
}));                                                                                                                  // 13
                                                                                                                      // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/template.sign_out.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("sign_out");                                                                                     // 2
Template["sign_out"] = new Template("Template.sign_out", (function() {                                                // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "grid-small grid-block dialog"                                                                           // 6
  }, "\n    ", HTML.P(Blaze.View("lookup:_", function() {                                                             // 7
    return Spacebars.mustache(view.lookup("_"), "you_ve_been_signed_out");                                            // 8
  })), "\n  ");                                                                                                       // 9
}));                                                                                                                  // 10
                                                                                                                      // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/template.user_edit.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_edit");                                                                                    // 2
Template["user_edit"] = new Template("Template.user_edit", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return Spacebars.With(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("user"));                                                                       // 6
  }, function() {                                                                                                     // 7
    return [ "\n    ", Blaze.If(function() {                                                                          // 8
      return Spacebars.dataMustache(view.lookup("canEdit"), view.lookup("."));                                        // 9
    }, function() {                                                                                                   // 10
      return [ "\n      ", Blaze._TemplateWith(function() {                                                           // 11
        return {                                                                                                      // 12
          zone: Spacebars.call("profileEdit"),                                                                        // 13
          moduleData: Spacebars.call(view.lookup("."))                                                                // 14
        };                                                                                                            // 15
      }, function() {                                                                                                 // 16
        return Spacebars.include(view.lookupTemplate("modules"));                                                     // 17
      }), "\n    " ];                                                                                                 // 18
    }, function() {                                                                                                   // 19
      return [ "\n      ", Spacebars.include(view.lookupTemplate("no_rights")), "\n    " ];                           // 20
    }), "\n  " ];                                                                                                     // 21
  });                                                                                                                 // 22
}));                                                                                                                  // 23
                                                                                                                      // 24
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/template.user_complete.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_complete");                                                                                // 2
Template["user_complete"] = new Template("Template.user_complete", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "grid-small grid-block dialog user-edit"                                                                 // 6
  }, "\n    ", HTML.DIV({                                                                                             // 7
    "class": "finish-signup-message"                                                                                  // 8
  }, "\n      ", Blaze.View("lookup:_", function() {                                                                  // 9
    return Spacebars.mustache(view.lookup("_"), "please_fill_in_missing_information_to_finish_signing_up");           // 10
  }), "\n    "), "\n    ", Blaze._TemplateWith(function() {                                                           // 11
    return {                                                                                                          // 12
      collection: Spacebars.call("Meteor.users"),                                                                     // 13
      doc: Spacebars.call(view.lookup("user")),                                                                       // 14
      id: Spacebars.call("completeUserForm"),                                                                         // 15
      template: Spacebars.call("bootstrap3-horizontal"),                                                              // 16
      "input-col-class": Spacebars.call("controls"),                                                                  // 17
      type: Spacebars.call("method-update"),                                                                          // 18
      meteormethod: Spacebars.call("completeUserProfile"),                                                            // 19
      fields: Spacebars.call(view.lookup("requiredFields"))                                                           // 20
    };                                                                                                                // 21
  }, function() {                                                                                                     // 22
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                       // 23
  }), "\n  ");                                                                                                        // 24
}));                                                                                                                  // 25
                                                                                                                      // 26
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/user_complete.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
AutoForm.hooks({                                                                                                      // 1
  completeUserForm: {                                                                                                 // 2
    onError: function (operation, error) {                                                                            // 3
      this.template.$('button[type=submit]').removeClass('loading');                                                  // 4
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined     // 5
      Messages.clearSeen();                                                                                           // 6
    }                                                                                                                 //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Template.user_complete.helpers({                                                                                      // 11
  user: function () {                                                                                                 // 12
    return Meteor.user();                                                                                             // 13
  },                                                                                                                  //
  requiredFields: function () {                                                                                       // 15
    // return fields that are required by the schema but haven't been filled out yet                                  //
    var schema = Users.simpleSchema()._schema;                                                                        // 17
    var requiredFields = _.filter(_.keys(schema), function (fieldName) {                                              // 18
      var field = schema[fieldName];                                                                                  // 19
      return !!field.required && !Telescope.getNestedProperty(Meteor.user(), fieldName);                              // 20
    });                                                                                                               //
    return requiredFields;                                                                                            // 22
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
// TODO: handle error case when user validates form with blank fields                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/template.user_item.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_item");                                                                                    // 2
Template["user_item"] = new Template("Template.user_item", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.TR({                                                                                                    // 5
    "class": "user"                                                                                                   // 6
  }, "\n	", HTML.TD({                                                                                                 // 7
    "aria-hidden": "true"                                                                                             // 8
  }, Blaze._TemplateWith(function() {                                                                                 // 9
    return {                                                                                                          // 10
      user: Spacebars.call(view.lookup(".")),                                                                         // 11
      shape: Spacebars.call("circle")                                                                                 // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return Spacebars.include(view.lookupTemplate("avatar"));                                                          // 15
  })), "\n	", HTML.TD("\n		", HTML.A({                                                                                // 16
    href: function() {                                                                                                // 17
      return Spacebars.mustache(view.lookup("getProfileUrl"));                                                        // 18
    }                                                                                                                 // 19
  }, Blaze.View("lookup:getDisplayName", function() {                                                                 // 20
    return Spacebars.mustache(view.lookup("getDisplayName"), view.lookup("."));                                       // 21
  })), "\n		", HTML.Raw("<br>"), "\n		", HTML.A({                                                                     // 22
    href: function() {                                                                                                // 23
      return [ "mailto:", Spacebars.mustache(view.lookup("getEmail")) ];                                              // 24
    }                                                                                                                 // 25
  }, Blaze.View("lookup:getEmail", function() {                                                                       // 26
    return Spacebars.mustache(view.lookup("getEmail"));                                                               // 27
  })), "\n	"), "\n	", HTML.TD(Blaze.View("lookup:createdAtFormatted", function() {                                    // 28
    return Spacebars.mustache(view.lookup("createdAtFormatted"));                                                     // 29
  })), "\n	", HTML.TD(Blaze.View("lookup:postCount", function() {                                                     // 30
    return Spacebars.mustache(view.lookup("postCount"));                                                              // 31
  })), "\n	", HTML.TD(Blaze.View("lookup:commentCount", function() {                                                  // 32
    return Spacebars.mustache(view.lookup("commentCount"));                                                           // 33
  })), "\n	", HTML.TD(Blaze.View("lookup:getKarma", function() {                                                      // 34
    return Spacebars.mustache(view.lookup("getKarma"));                                                               // 35
  })), "\n	", HTML.TD("\n		", Blaze.If(function() {                                                                   // 36
    return Spacebars.call(view.lookup("invites"));                                                                    // 37
  }, function() {                                                                                                     // 38
    return [ "\n		", HTML.H4(Blaze.View("lookup:_", function() {                                                      // 39
      return Spacebars.mustache(view.lookup("_"), "invited");                                                         // 40
    }), " ", Blaze.View("lookup:invitedCount", function() {                                                           // 41
      return Spacebars.mustache(view.lookup("invitedCount"));                                                         // 42
    }), " ", Blaze.View("lookup:_", function() {                                                                      // 43
      return Spacebars.mustache(view.lookup("_"), "users");                                                           // 44
    }), ":"), "\n		", HTML.UL("\n			", Blaze.Each(function() {                                                        // 45
      return Spacebars.call(view.lookup("invites"));                                                                  // 46
    }, function() {                                                                                                   // 47
      return [ "\n				", HTML.LI(HTML.A({                                                                             // 48
        href: function() {                                                                                            // 49
          return Spacebars.mustache(view.lookup("getInvitedUserProfileUrl"));                                         // 50
        }                                                                                                             // 51
      }, Blaze.View("lookup:invitedName", function() {                                                                // 52
        return Spacebars.mustache(view.lookup("invitedName"));                                                        // 53
      }))), "\n			" ];                                                                                                // 54
    }), "\n		"), "\n		" ];                                                                                            // 55
  }), "\n		", HTML.P("(", Blaze.View("lookup:inviteCount", function() {                                               // 56
    return Spacebars.mustache(view.lookup("inviteCount"));                                                            // 57
  }), " ", Blaze.View("lookup:_", function() {                                                                        // 58
    return Spacebars.mustache(view.lookup("_"), "invites_left");                                                      // 59
  }), ")"), "\n	"), "\n	", HTML.TD(Blaze.If(function() {                                                              // 60
    return Spacebars.call(view.lookup("isInvited"));                                                                  // 61
  }, function() {                                                                                                     // 62
    return HTML.I({                                                                                                   // 63
      "class": "icon-check"                                                                                           // 64
    });                                                                                                               // 65
  })), "\n	", HTML.TD(Blaze.If(function() {                                                                           // 66
    return Spacebars.call(view.lookup("userIsAdmin"));                                                                // 67
  }, function() {                                                                                                     // 68
    return HTML.I({                                                                                                   // 69
      "class": "icon-check"                                                                                           // 70
    });                                                                                                               // 71
  })), "\n	", HTML.TD("\n		", HTML.UL("\n			", HTML.LI(Blaze.If(function() {                                          // 72
    return Spacebars.call(view.lookup("isInvited"));                                                                  // 73
  }, function() {                                                                                                     // 74
    return HTML.A({                                                                                                   // 75
      "class": "uninvite-link",                                                                                       // 76
      href: "#"                                                                                                       // 77
    }, Blaze.View("lookup:_", function() {                                                                            // 78
      return Spacebars.mustache(view.lookup("_"), "uninvite");                                                        // 79
    }));                                                                                                              // 80
  }, function() {                                                                                                     // 81
    return HTML.A({                                                                                                   // 82
      href: "#",                                                                                                      // 83
      "class": "invite-link"                                                                                          // 84
    }, Blaze.View("lookup:_", function() {                                                                            // 85
      return Spacebars.mustache(view.lookup("_"), "invite");                                                          // 86
    }));                                                                                                              // 87
  })), "\n			", HTML.LI(Blaze.If(function() {                                                                         // 88
    return Spacebars.call(view.lookup("userIsAdmin"));                                                                // 89
  }, function() {                                                                                                     // 90
    return HTML.A({                                                                                                   // 91
      "class": "unadmin-link",                                                                                        // 92
      href: "#"                                                                                                       // 93
    }, Blaze.View("lookup:_", function() {                                                                            // 94
      return Spacebars.mustache(view.lookup("_"), "unadmin");                                                         // 95
    }));                                                                                                              // 96
  }, function() {                                                                                                     // 97
    return HTML.A({                                                                                                   // 98
      href: "#",                                                                                                      // 99
      "class": "admin-link"                                                                                           // 100
    }, Blaze.View("lookup:_", function() {                                                                            // 101
      return Spacebars.mustache(view.lookup("_"), "make_admin");                                                      // 102
    }));                                                                                                              // 103
  })), "\n			", HTML.LI(HTML.A({                                                                                      // 104
    "class": "delete-link",                                                                                           // 105
    href: "#"                                                                                                         // 106
  }, Blaze.View("lookup:_", function() {                                                                              // 107
    return Spacebars.mustache(view.lookup("_"), "delete_user");                                                       // 108
  }))), "\n		"), "\n	"), "\n");                                                                                       // 109
}));                                                                                                                  // 110
                                                                                                                      // 111
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/user_item.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_item.helpers({                                                                                          // 1
  createdAtFormatted: function () {                                                                                   // 2
    return this.createdAt ? moment(this.createdAt).fromNow() : '–';                                                   // 3
  },                                                                                                                  //
  getEmail: function () {                                                                                             // 5
    return Users.getEmail(this);                                                                                      // 6
  },                                                                                                                  //
  posts: function () {                                                                                                // 8
    return Posts.find({ 'userId': this._id });                                                                        // 9
  },                                                                                                                  //
  comments: function () {                                                                                             // 11
    return Comments.find({ 'userId': this._id });                                                                     // 12
  },                                                                                                                  //
  userIsAdmin: function () {                                                                                          // 14
    return Users.is.admin(this);                                                                                      // 15
  },                                                                                                                  //
  getProfileUrl: function () {                                                                                        // 17
    return Users.getProfileUrl(this);                                                                                 // 18
  },                                                                                                                  //
  getKarma: function () {                                                                                             // 20
    return Math.round(100 * this.karma) / 100;                                                                        // 21
  },                                                                                                                  //
  getInvitedUserProfileUrl: function () {                                                                             // 23
    var user = Meteor.users.findOne(this.invitedId);                                                                  // 24
    return Users.getProfileUrl(user);                                                                                 // 25
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Template.user_item.events({                                                                                           // 29
  'click .invite-link': function (e, instance) {                                                                      // 30
    e.preventDefault();                                                                                               // 31
    Meteor.call('inviteUser', { userId: instance.data._id });                                                         // 32
  },                                                                                                                  //
  'click .uninvite-link': function (e, instance) {                                                                    // 34
    e.preventDefault();                                                                                               // 35
    Meteor.users.update(instance.data._id, {                                                                          // 36
      $set: {                                                                                                         // 37
        isInvited: false                                                                                              // 38
      }                                                                                                               //
    });                                                                                                               //
  },                                                                                                                  //
  'click .admin-link': function (e, instance) {                                                                       // 42
    e.preventDefault();                                                                                               // 43
    Users.updateAdmin(instance.data._id, true);                                                                       // 44
  },                                                                                                                  //
  'click .unadmin-link': function (e, instance) {                                                                     // 46
    e.preventDefault();                                                                                               // 47
    Users.updateAdmin(instance.data._id, false);                                                                      // 48
  },                                                                                                                  //
  'click .delete-link': function (e, instance) {                                                                      // 50
    e.preventDefault();                                                                                               // 51
    if (confirm(i18n.t("are_you_sure_you_want_to_delete") + Users.getDisplayName(instance.data) + "?")) Meteor.users.remove(instance.data._id);
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/template.user_profile.js                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_profile");                                                                                 // 2
Template["user_profile"] = new Template("Template.user_profile", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return Spacebars.With(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("user"));                                                                       // 6
  }, function() {                                                                                                     // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                               // 8
      return {                                                                                                        // 9
        zone: Spacebars.call("profileDisplay"),                                                                       // 10
        moduleData: Spacebars.call(view.lookup("."))                                                                  // 11
      };                                                                                                              // 12
    }, function() {                                                                                                   // 13
      return Spacebars.include(view.lookupTemplate("modules"));                                                       // 14
    }), "\n	" ];                                                                                                      // 15
  });                                                                                                                 // 16
}));                                                                                                                  // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/user_profile.js                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_profile.onCreated(function () {                                                                         // 1
  var user = this.data.user;                                                                                          // 2
  Telescope.SEO.setTitle(user.getDisplayName());                                                                      // 3
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/nav/template.user_menu.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_menu");                                                                                    // 2
Template["user_menu"] = new Template("Template.user_menu", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": function() {                                                                                             // 6
      return [ "user-menu-wrapper ", Spacebars.mustache(view.lookup("moduleClass")) ];                                // 7
    }                                                                                                                 // 8
  }, "\n    ", Blaze.If(function() {                                                                                  // 9
    return Spacebars.call(view.lookup("isLoggedIn"));                                                                 // 10
  }, function() {                                                                                                     // 11
    return [ "\n      ", Blaze._TemplateWith(function() {                                                             // 12
      return {                                                                                                        // 13
        menuName: Spacebars.call("user"),                                                                             // 14
        menuLabelTemplate: Spacebars.call("user_menu_label"),                                                         // 15
        menuItems: Spacebars.call(view.lookup("menuItems")),                                                          // 16
        menuType: Spacebars.call(view.lookup("menuType")),                                                            // 17
        expandLevel: Spacebars.call(0)                                                                                // 18
      };                                                                                                              // 19
    }, function() {                                                                                                   // 20
      return Spacebars.include(view.lookupTemplate("menuComponent"));                                                 // 21
    }), "\n    " ];                                                                                                   // 22
  }, function() {                                                                                                     // 23
    return [ "\n      ", HTML.DIV({                                                                                   // 24
      "class": "signin-signup"                                                                                        // 25
    }, "\n        ", HTML.A({                                                                                         // 26
      "class": "account-link sign-up",                                                                                // 27
      href: function() {                                                                                              // 28
        return Spacebars.mustache(view.lookup("pathFor"), "signUp");                                                  // 29
      }                                                                                                               // 30
    }, Blaze.View("lookup:_", function() {                                                                            // 31
      return Spacebars.mustache(view.lookup("_"), "sign_up");                                                         // 32
    })), "\n        ", HTML.A({                                                                                       // 33
      "class": "account-link sign-in",                                                                                // 34
      href: function() {                                                                                              // 35
        return Spacebars.mustache(view.lookup("pathFor"), "signIn");                                                  // 36
      }                                                                                                               // 37
    }, Blaze.View("lookup:_", function() {                                                                            // 38
      return Spacebars.mustache(view.lookup("_"), "sign_in");                                                         // 39
    })), "\n      "), "\n    " ];                                                                                     // 40
  }), "\n  ");                                                                                                        // 41
}));                                                                                                                  // 42
                                                                                                                      // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/nav/user_menu.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_menu.helpers({                                                                                          // 1
  user: function () {                                                                                                 // 2
    return Meteor.user();                                                                                             // 3
  },                                                                                                                  //
  menuItems: function () {                                                                                            // 5
    var viewableItems = _.reject(Telescope.menuItems.get("userMenu"), function (item) {                               // 6
      return item.adminOnly && !Users.is.admin(Meteor.user());                                                        // 7
    });                                                                                                               //
                                                                                                                      //
    // viewableItems = viewableItems.map(function (item) {                                                            //
    //   item.parentId = "userMenuRoot";                                                                              //
    //   return item;                                                                                                 //
    // });                                                                                                            //
                                                                                                                      //
    // viewableItems.push({                                                                                           //
    //   id: "userMenuRoot",                                                                                          //
    //   template: "user_menu_label"                                                                                  //
    // });                                                                                                            //
    // console.log(viewableItems);                                                                                    //
                                                                                                                      //
    return viewableItems;                                                                                             // 21
  },                                                                                                                  //
  menuType: function () {                                                                                             // 23
    if (this.zone === "mobileNav") {                                                                                  // 24
      return 'collapsible';                                                                                           // 25
    } else if (Settings.get('navLayout', 'top-nav') === 'top-nav') {                                                  //
      return 'dropdown';                                                                                              // 27
    } else {                                                                                                          //
      return 'collapsible';                                                                                           // 29
    }                                                                                                                 //
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/nav/template.user_menu_label.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_menu_label");                                                                              // 2
Template["user_menu_label"] = new Template("Template.user_menu_label", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    "class": "menu-label js-menu-toggle",                                                                             // 6
    href: "#"                                                                                                         // 7
  }, "\n    ", HTML.SPAN({                                                                                            // 8
    "class": "menu-label-text user-menu-label"                                                                        // 9
  }, "\n      ", Blaze._TemplateWith(function() {                                                                     // 10
    return {                                                                                                          // 11
      userId: Spacebars.call(Spacebars.dot(view.lookup("user"), "_id")),                                              // 12
      shape: Spacebars.call("circle")                                                                                 // 13
    };                                                                                                                // 14
  }, function() {                                                                                                     // 15
    return Spacebars.include(view.lookupTemplate("avatar"));                                                          // 16
  }), " \n      ", HTML.SPAN({                                                                                        // 17
    "class": "user-menu-username"                                                                                     // 18
  }, Blaze.View("lookup:user.getDisplayName", function() {                                                            // 19
    return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "getDisplayName"));                                  // 20
  })), "\n    "), "\n    ", HTML.SPAN({                                                                               // 21
    "class": "menu-items-toggle"                                                                                      // 22
  }, "\n      ", Spacebars.include(view.lookupTemplate("menuIconExpand")), "\n      ", Spacebars.include(view.lookupTemplate("menuIconCollapse")), "\n    "), "\n  ");
}));                                                                                                                  // 24
                                                                                                                      // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/nav/user_menu_label.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_menu_label.helpers({                                                                                    // 1
  user: function () {                                                                                                 // 2
    return Meteor.user();                                                                                             // 3
  }                                                                                                                   //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/user_controller/template.user_controller.js                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("user_controller");                                                                              // 2
Template["user_controller"] = new Template("Template.user_controller", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return Blaze._TemplateWith(function() {                                                                             // 5
    return {                                                                                                          // 6
      ready: Spacebars.call(view.templateInstance().subscriptionsReady())                                             // 7
    };                                                                                                                // 8
  }, function() {                                                                                                     // 9
    return Spacebars.include(view.lookupTemplate("loader"), function() {                                              // 10
      return [ "\n    ", Blaze._TemplateWith(function() {                                                             // 11
        return {                                                                                                      // 12
          template: Spacebars.call(view.lookup("userTemplate")),                                                      // 13
          data: Spacebars.call(view.lookup("data"))                                                                   // 14
        };                                                                                                            // 15
      }, function() {                                                                                                 // 16
        return Spacebars.include(function() {                                                                         // 17
          return Spacebars.call(Template.__dynamic);                                                                  // 18
        });                                                                                                           // 19
      }), "\n  " ];                                                                                                   // 20
    });                                                                                                               // 21
  });                                                                                                                 // 22
}));                                                                                                                  // 23
                                                                                                                      // 24
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/telescope_users/lib/client/templates/user_controller/user_controller.js                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.user_controller.onCreated(function () {                                                                      // 1
  var template = this;                                                                                                // 2
  template.subscribe('singleUser', FlowRouter.getParam("_idOrSlug"));                                                 // 3
});                                                                                                                   //
                                                                                                                      //
Template.user_controller.helpers({                                                                                    // 6
  data: function () {                                                                                                 // 7
                                                                                                                      //
    var idOrSlug = FlowRouter.getParam("_idOrSlug");                                                                  // 9
    var findById = Meteor.users.findOne(idOrSlug);                                                                    // 10
    var findBySlug = Meteor.users.findOne({ "telescope.slug": idOrSlug });                                            // 11
                                                                                                                      //
    return { user: findById || findBySlug };                                                                          // 13
  }                                                                                                                   //
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
var package_templates = _.difference(_.keys(Template), non_package_templates);                                        // 8
                                                                                                                      // 9
for (var i = 0; i < package_templates.length; i++) {                                                                  // 10
  var package_template = package_templates[i];                                                                        // 11
                                                                                                                      // 12
  registerI18nTemplate(package_template);                                                                             // 13
}                                                                                                                     // 14
                                                                                                                      // 15
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 12
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
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
                                                                                                                      // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:users'] = {
  Users: Users
};

})();
