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
var __, Invites, translations;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/package-i18n.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
TAPi18n.packages["telescope:invites"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                    // 2
// define package's translation function (proxy to the i18next)                                                     // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                    // 4
                                                                                                                    // 5
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/lib/invites.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var InviteSchema = new SimpleSchema({                                                                               // 1
  _id: {                                                                                                            // 2
    type: String,                                                                                                   // 3
    optional: true                                                                                                  // 4
  },                                                                                                                //
  invitingUserId: {                                                                                                 // 6
    type: String,                                                                                                   // 7
    optional: true                                                                                                  // 8
  },                                                                                                                //
  invitedUserEmail: {                                                                                               // 10
    type: String,                                                                                                   // 11
    regEx: SimpleSchema.RegEx.Email                                                                                 // 12
  },                                                                                                                //
  accepted: {                                                                                                       // 14
    type: Boolean,                                                                                                  // 15
    optional: true                                                                                                  // 16
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Invites = new Meteor.Collection("invites");                                                                         // 20
Invites.attachSchema(InviteSchema);                                                                                 // 21
                                                                                                                    //
Users.addField([                                                                                                    // 23
/**                                                                                                                 //
  A count of the user's remaining invites                                                                           //
*/                                                                                                                  //
{                                                                                                                   // 27
  fieldName: "telescope.inviteCount",                                                                               // 28
  fieldSchema: {                                                                                                    // 29
    type: Number,                                                                                                   // 30
    optional: true                                                                                                  // 31
  }                                                                                                                 //
},                                                                                                                  //
/**                                                                                                                 //
  A count of how many users have been invited by the user                                                           //
*/                                                                                                                  //
{                                                                                                                   // 37
  fieldName: "telescope.invitedCount",                                                                              // 38
  fieldSchema: {                                                                                                    // 39
    type: Number,                                                                                                   // 40
    optional: true                                                                                                  // 41
  }                                                                                                                 //
},                                                                                                                  //
/**                                                                                                                 //
  Whether the user is invited or not                                                                                //
*/                                                                                                                  //
{                                                                                                                   // 47
  fieldName: "telescope.isInvited",                                                                                 // 48
  fieldSchema: {                                                                                                    // 49
    type: Boolean,                                                                                                  // 50
    "public": true,                                                                                                 // 51
    optional: true,                                                                                                 // 52
    editableBy: ["admin"],                                                                                          // 53
    autoform: {                                                                                                     // 54
      omit: true                                                                                                    // 55
    }                                                                                                               //
  }                                                                                                                 //
},                                                                                                                  //
/**                                                                                                                 //
  The _id of the user who invited the current user                                                                  //
*/                                                                                                                  //
{                                                                                                                   // 62
  fieldName: "telescope.invitedBy",                                                                                 // 63
  fieldSchema: {                                                                                                    // 64
    type: String,                                                                                                   // 65
    optional: true,                                                                                                 // 66
    autoform: {                                                                                                     // 67
      omit: true                                                                                                    // 68
    }                                                                                                               //
  }                                                                                                                 //
},                                                                                                                  //
/**                                                                                                                 //
  The name of the user who invited the current user                                                                 //
*/                                                                                                                  //
{                                                                                                                   // 75
  fieldName: "telescope.invitedByName",                                                                             // 76
  fieldSchema: {                                                                                                    // 77
    type: String,                                                                                                   // 78
    optional: true,                                                                                                 // 79
    autoform: {                                                                                                     // 80
      omit: true                                                                                                    // 81
    }                                                                                                               //
  }                                                                                                                 //
}]);                                                                                                                //
                                                                                                                    //
// invites are managed through Meteor method                                                                        //
                                                                                                                    //
Invites.deny({                                                                                                      // 89
  insert: function () {                                                                                             // 90
    return true;                                                                                                    // 90
  },                                                                                                                //
  update: function () {                                                                                             // 91
    return true;                                                                                                    // 91
  },                                                                                                                //
  remove: function () {                                                                                             // 92
    return true;                                                                                                    // 92
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Telescope.modules.add("profileEdit", {                                                                              // 95
  template: 'user_invites',                                                                                         // 96
  order: 2                                                                                                          // 97
});                                                                                                                 //
                                                                                                                    //
function setStartingInvites(user) {                                                                                 // 100
  // give new users a few invites (default to 3)                                                                    //
  user.telescope.inviteCount = Settings.get('startInvitesCount', 3);                                                // 102
  return user;                                                                                                      // 103
}                                                                                                                   //
Telescope.callbacks.add("onCreateUser", setStartingInvites);                                                        // 105
                                                                                                                    //
// on profile completion, check if the new user has been invited                                                    //
// if so set her status accordingly and update invitation info                                                      //
function checkIfInvited(user) {                                                                                     // 109
                                                                                                                    //
  var invite = Invites.findOne({ invitedUserEmail: Users.getEmail(user) });                                         // 111
                                                                                                                    //
  if (invite) {                                                                                                     // 113
                                                                                                                    //
    var invitedBy = Meteor.users.findOne({ _id: invite.invitingUserId });                                           // 115
                                                                                                                    //
    Users.update(user._id, { $set: {                                                                                // 117
        "telescope.isInvited": true,                                                                                // 118
        "telescope.invitedBy": invitedBy._id,                                                                       // 119
        "telescope.invitedByName": Users.getDisplayName(invitedBy)                                                  // 120
      } });                                                                                                         //
                                                                                                                    //
    Invites.update(invite._id, { $set: {                                                                            // 123
        accepted: true                                                                                              // 124
      } });                                                                                                         //
  }                                                                                                                 //
}                                                                                                                   //
Telescope.callbacks.add("profileCompletedAsync", checkIfInvited);                                                   // 129
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/lib/server/invites.js                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.methods({                                                                                                    // 1
                                                                                                                    //
  inviteUser: function (invitation) {                                                                               // 3
                                                                                                                    //
    check(invitation, Match.Any);                                                                                   // 5
                                                                                                                    //
    // invite user returns the following hash                                                                       //
    // { newUser : true|false }                                                                                     //
    // newUser is true if the person being invited is not on the site yet                                           //
                                                                                                                    //
    // invitation can either contain userId or an email address :                                                   //
    // { invitedUserEmail : 'bob@gmail.com' } or { userId : 'user-id' }                                             //
                                                                                                                    //
    check(invitation, Match.OneOf({ invitedUserEmail: String }, { userId: String }));                               // 14
                                                                                                                    //
    var user = invitation.invitedUserEmail ? Meteor.users.findOne({ emails: { $elemMatch: { address: invitation.invitedUserEmail } } }) : Meteor.users.findOne({ _id: invitation.userId });
                                                                                                                    //
    var userEmail = invitation.invitedUserEmail ? invitation.invitedUserEmail : Users.getEmail(user);               // 23
    var currentUser = Meteor.user();                                                                                // 24
    var currentUserIsAdmin = Users.is.admin(currentUser);                                                           // 25
    var currentUserCanInvite = currentUserIsAdmin || currentUser.telescope.inviteCount > 0 && Users.can.invite(currentUser);
                                                                                                                    //
    // check if the person is already invited                                                                       //
    if (user && Users.is.invited(user)) {                                                                           // 29
      throw new Meteor.Error(403, "This person is already invited.");                                               // 30
    } else {                                                                                                        //
      if (!currentUserCanInvite) {                                                                                  // 32
        throw new Meteor.Error(701, "You can't invite this user, sorry.");                                          // 33
      }                                                                                                             //
                                                                                                                    //
      // don't allow duplicate multiple invite for the same person                                                  //
      var existingInvite = Invites.findOne({ invitedUserEmail: userEmail });                                        // 37
                                                                                                                    //
      if (existingInvite) {                                                                                         // 39
        throw new Meteor.Error(403, "Somebody has already invited this person.");                                   // 40
      }                                                                                                             //
                                                                                                                    //
      // create an invite                                                                                           //
      // consider invite accepted if the invited person has an account already                                      //
      Invites.insert({                                                                                              // 45
        invitingUserId: Meteor.userId(),                                                                            // 46
        invitedUserEmail: userEmail,                                                                                // 47
        accepted: typeof user !== "undefined"                                                                       // 48
      });                                                                                                           //
                                                                                                                    //
      // update invinting user                                                                                      //
      Meteor.users.update(Meteor.userId(), { $inc: { "telescope.inviteCount": -1, "telescope.invitedCount": 1 } });
                                                                                                                    //
      if (user) {                                                                                                   // 54
        // update invited user                                                                                      //
        Meteor.users.update(user._id, {                                                                             // 56
          $set: {                                                                                                   // 57
            "telescope.isInvited": true,                                                                            // 58
            "telescope.invitedBy": Meteor.userId(),                                                                 // 59
            "telescope.invitedByName": Users.getDisplayName(currentUser)                                            // 60
          }                                                                                                         //
        });                                                                                                         //
      }                                                                                                             //
                                                                                                                    //
      var communityName = Settings.get('title', 'Telescope'),                                                       // 65
          emailSubject = 'You are invited to try ' + communityName,                                                 //
          emailProperties = {                                                                                       //
        newUser: typeof user === 'undefined',                                                                       // 68
        communityName: communityName,                                                                               // 69
        actionLink: user ? Telescope.utils.getSigninUrl() : Telescope.utils.getSignupUrl(),                         // 70
        invitedBy: Users.getDisplayName(currentUser),                                                               // 71
        profileUrl: Users.getProfileUrl(currentUser)                                                                // 72
      };                                                                                                            //
                                                                                                                    //
      Meteor.setTimeout(function () {                                                                               // 75
        Telescope.email.buildAndSend(userEmail, emailSubject, 'emailInvite', emailProperties);                      // 76
      }, 1);                                                                                                        //
    }                                                                                                               //
                                                                                                                    //
    return {                                                                                                        // 81
      newUser: typeof user === 'undefined'                                                                          // 82
    };                                                                                                              //
  },                                                                                                                //
  unInviteUser: function (userId) {                                                                                 // 85
    Meteor.users.update(userId, { $set: { "telescope.isInvited": false } });                                        // 86
  }                                                                                                                 //
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/lib/server/publications.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.publish('invites', function (userId) {                                                                       // 1
  var invites = Invites.find({ invitingUserId: userId });                                                           // 2
  return this.userId === userId || Users.is.adminById(this.userId) ? invites : [];                                  // 3
});                                                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/ar.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                     // 8
  TAPi18n.translations["ar"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                          // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["ar"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("ar", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/bg.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                     // 8
  TAPi18n.translations["bg"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                          // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["bg"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/cs.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                     // 8
  TAPi18n.translations["cs"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                          // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["cs"][namespace], {"translation_key":"Proměnná překladu"});                           // 16
TAPi18n._registerServerTranslator("cs", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/da.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                     // 8
  TAPi18n.translations["da"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                          // 12
  TAPi18n.translations["da"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["da"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("da", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/de.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                     // 8
  TAPi18n.translations["de"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                          // 12
  TAPi18n.translations["de"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["de"][namespace], {"translation_key":"translation string"});                          // 16
TAPi18n._registerServerTranslator("de", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/el.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                     // 8
  TAPi18n.translations["el"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                          // 12
  TAPi18n.translations["el"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["el"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("el", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/en.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
// integrate the fallback language translations                                                                     // 8
translations = {};                                                                                                  // 9
translations[namespace] = {"translation_key":"translation string"};                                                 // 10
TAPi18n._loadLangFileObject("en", translations);                                                                    // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                 // 12
                                                                                                                    // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/es.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                     // 8
  TAPi18n.translations["es"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                          // 12
  TAPi18n.translations["es"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["es"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("es", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/et.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                     // 8
  TAPi18n.translations["et"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                          // 12
  TAPi18n.translations["et"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["et"][namespace], {"translation_key":"tõlkimise string"});                            // 16
TAPi18n._registerServerTranslator("et", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/fr.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                     // 8
  TAPi18n.translations["fr"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                          // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["fr"][namespace], {"translation_key":"traduire une chaîne de caractères"});           // 16
TAPi18n._registerServerTranslator("fr", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/hu.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                     // 8
  TAPi18n.translations["hu"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                          // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/id.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                     // 8
  TAPi18n.translations["id"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                          // 12
  TAPi18n.translations["id"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["id"][namespace], {"translation_key":"translation string"});                          // 16
TAPi18n._registerServerTranslator("id", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/it.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                     // 8
  TAPi18n.translations["it"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                          // 12
  TAPi18n.translations["it"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["it"][namespace], {"translation_key":"translation string"});                          // 16
TAPi18n._registerServerTranslator("it", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/ja.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                     // 8
  TAPi18n.translations["ja"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                          // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/kk.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                     // 8
  TAPi18n.translations["kk"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                          // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["kk"][namespace], {"translation_key":"аударма текст"});                               // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/ko.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                     // 8
  TAPi18n.translations["ko"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                          // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["ko"][namespace], {"translation_key":"번역 문자열"});                                      // 16
TAPi18n._registerServerTranslator("ko", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/nl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                     // 8
  TAPi18n.translations["nl"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                          // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["nl"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("nl", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/pl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                     // 8
  TAPi18n.translations["pl"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                          // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["pl"][namespace], {"translation_key":"translation string"});                          // 16
TAPi18n._registerServerTranslator("pl", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/pt-BR.i18n.js                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                  // 8
  TAPi18n.translations["pt-BR"] = {};                                                                               // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                       // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                    // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"translation_key":"chave de tradução"});                        // 16
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                              // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/ro.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                     // 8
  TAPi18n.translations["ro"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                          // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["ro"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/ru.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                     // 8
  TAPi18n.translations["ru"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                          // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["ru"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("ru", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/sl.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                     // 8
  TAPi18n.translations["sl"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                          // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["sl"][namespace], {"translation_key":"preveden niz"});                                // 16
TAPi18n._registerServerTranslator("sl", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/sv.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                     // 8
  TAPi18n.translations["sv"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                          // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["sv"][namespace], {"translation_key":"översättningstext"});                           // 16
TAPi18n._registerServerTranslator("sv", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/th.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                     // 8
  TAPi18n.translations["th"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                          // 12
  TAPi18n.translations["th"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["th"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/tr.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                     // 8
  TAPi18n.translations["tr"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                          // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["tr"][namespace], {"translation_key":"çeviri dizesi"});                               // 16
TAPi18n._registerServerTranslator("tr", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/vi.i18n.js                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                     // 8
  TAPi18n.translations["vi"] = {};                                                                                  // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                          // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                       // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["vi"][namespace], {});                                                                // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                                 // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/packages/telescope_invitesi18n/zh-CN.i18n.js                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _ = Package.underscore._,                                                                                       // 1
    package_name = "telescope:invites",                                                                             // 2
    namespace = "telescope:invites";                                                                                // 3
                                                                                                                    // 4
if (package_name != "project") {                                                                                    // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                           // 6
}                                                                                                                   // 7
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                  // 8
  TAPi18n.translations["zh-CN"] = {};                                                                               // 9
}                                                                                                                   // 10
                                                                                                                    // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                       // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                    // 13
}                                                                                                                   // 14
                                                                                                                    // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"translation_key":"translation string"});                       // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                              // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:invites'] = {
  Invites: Invites
};

})();

//# sourceMappingURL=telescope_invites.js.map
