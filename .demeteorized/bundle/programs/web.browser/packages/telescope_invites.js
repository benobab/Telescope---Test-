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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package['telescope:lib']._;
var Template = Package.templating.Template;
var Telescope = Package['telescope:lib'].Telescope;
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
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Mongo = Package.mongo.Mongo;
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
var HTML = Package.htmljs.HTML;
var WebApp = Package.webapp.WebApp;
var DDP = Package['ddp-client'].DDP;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var Reload = Package.reload.Reload;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var __, registerI18nTemplate, registerTemplate, non_package_templates, Invites, translations;

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
// define the package's templates registrar                                                                         // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:invites");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                    // 8
// Record the list of templates prior to package load                                                               // 9
var _ = Package.underscore._;                                                                                       // 10
non_package_templates = _.keys(Template);                                                                           // 11
                                                                                                                    // 12
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
// packages/telescope_invites/lib/client/templates/template.user_invites.js                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("user_invites");                                                                               // 2
Template["user_invites"] = new Template("Template.user_invites", (function() {                                      // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    "class": "grid-small grid-block dialog admin"                                                                   // 6
  }, HTML.Raw("\n    <h3>Invites</h3>\n    \n    "), Blaze.If(function() {                                          // 7
    return Spacebars.call(view.lookup("canCurrentUserInvite"));                                                     // 8
  }, function() {                                                                                                   // 9
    return [ "\n      ", Blaze._TemplateWith(function() {                                                           // 10
      return {                                                                                                      // 11
        schema: Spacebars.call(view.lookup("invitesSchema")),                                                       // 12
        id: Spacebars.call("inviteForm"),                                                                           // 13
        "class": Spacebars.call("form-block"),                                                                      // 14
        type: Spacebars.call("method"),                                                                             // 15
        meteormethod: Spacebars.call("inviteUser")                                                                  // 16
      };                                                                                                            // 17
    }, function() {                                                                                                 // 18
      return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                        // 19
        return [ "\n        ", HTML.H3("Invite someone"), "\n        ", HTML.DIV({                                  // 20
          "class": "control-group"                                                                                  // 21
        }, "\n          ", HTML.LABEL("Email"), "\n          ", HTML.DIV({                                          // 22
          "class": "controls"                                                                                       // 23
        }, "\n            ", Blaze._TemplateWith(function() {                                                       // 24
          return {                                                                                                  // 25
            name: Spacebars.call("invitedUserEmail")                                                                // 26
          };                                                                                                        // 27
        }, function() {                                                                                             // 28
          return Spacebars.include(view.lookupTemplate("afFieldInput"));                                            // 29
        }), "\n          "), "\n        "), "\n        ", HTML.DIV({                                                // 30
          "class": "form-actions"                                                                                   // 31
        }, "\n          ", Blaze.If(function() {                                                                    // 32
          return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                             // 33
            name: "invitedUserEmail"                                                                                // 34
          }));                                                                                                      // 35
        }, function() {                                                                                             // 36
          return "\n            This is not a valid email\n          ";                                             // 37
        }), "\n          ", HTML.INPUT({                                                                            // 38
          type: "submit",                                                                                           // 39
          "class": "button btn btn-primary",                                                                        // 40
          value: "Invite"                                                                                           // 41
        }), "\n        "), "\n      " ];                                                                            // 42
      });                                                                                                           // 43
    }), "\n    " ];                                                                                                 // 44
  }), "\n\n    ", HTML.TABLE("\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", HTML.TD("Email"), "\n          ", HTML.TD("Accepted"), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n          ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("invites"));                                                                  // 46
  }, function() {                                                                                                   // 47
    return [ "\n          ", HTML.TR("\n            ", HTML.TD(Blaze.View("lookup:invitedUserEmail", function() {   // 48
      return Spacebars.mustache(view.lookup("invitedUserEmail"));                                                   // 49
    })), "\n            ", HTML.TD(Blaze.If(function() {                                                            // 50
      return Spacebars.call(view.lookup("accepted"));                                                               // 51
    }, function() {                                                                                                 // 52
      return Blaze.View("lookup:icon", function() {                                                                 // 53
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "voted"));                                 // 54
      });                                                                                                           // 55
    })), "\n          "), "\n          " ];                                                                         // 56
  }), "\n      "), "\n    "), "\n\n  ");                                                                            // 57
}));                                                                                                                // 58
                                                                                                                    // 59
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_invites/lib/client/templates/user_invites.js                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Template.user_invites.created = function () {                                                                       // 1
                                                                                                                    //
  var user = this.data;                                                                                             // 3
  var instance = this;                                                                                              // 4
                                                                                                                    //
  instance.invites = new ReactiveVar({});                                                                           // 6
                                                                                                                    //
  Meteor.autorun(function () {                                                                                      // 8
    Telescope.subsManager.subscribe('invites', user._id);                                                           // 9
    var invites = Invites.find({ invitingUserId: user._id });                                                       // 10
    instance.invites.set(invites);                                                                                  // 11
  });                                                                                                               //
};                                                                                                                  //
                                                                                                                    //
Template.user_invites.helpers({                                                                                     // 15
  canCurrentUserInvite: function () {                                                                               // 16
    var currentUser = Meteor.user();                                                                                // 17
    return currentUser && (Users.is.admin(currentUser) || currentUser.telescope.inviteCount > 0 && Users.can.invite(currentUser));
  },                                                                                                                //
  invitesLeft: function () {                                                                                        // 20
    var currentUser = Meteor.user();                                                                                // 21
    return currentUser && !Users.is.admin(currentUser) ? currentUser.telescope.inviteCount - currentUser.telescope.invitedCount : 0;
  },                                                                                                                //
  invitesSchema: function () {                                                                                      // 24
    // expose schema for Invites (used by AutoForm)                                                                 //
    return Invites.simpleSchema();                                                                                  // 26
  },                                                                                                                //
  invites: function () {                                                                                            // 28
    return Template.instance().invites.get();                                                                       // 29
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
var scrollUp = function () {                                                                                        // 33
  Deps.afterFlush(function () {                                                                                     // 34
    var element = $('.grid > .error');                                                                              // 35
    $('html, body').animate({ scrollTop: element.offset().top });                                                   // 36
  });                                                                                                               //
};                                                                                                                  //
                                                                                                                    //
AutoForm.hooks({                                                                                                    // 40
  inviteForm: {                                                                                                     // 41
    onSuccess: function (operation, result) {                                                                       // 42
      Messages.clearSeen();                                                                                         // 43
                                                                                                                    //
      if (result && result.newUser) {                                                                               // 45
        Messages.flash('An invite has been sent out. Thank you!', "success");                                       // 46
      } else {                                                                                                      //
        Messages.flash('Thank you!', "info");                                                                       // 48
      }                                                                                                             //
      scrollUp();                                                                                                   // 50
    },                                                                                                              //
                                                                                                                    //
    onError: function (operation, error) {                                                                          // 53
      Messages.clearSeen();                                                                                         // 54
                                                                                                                    //
      if (error && error.reason) {                                                                                  // 56
        Messages.flash(error.reason, "error");                                                                      // 57
        scrollUp();                                                                                                 // 58
      }                                                                                                             //
    }                                                                                                               //
  }                                                                                                                 //
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
var package_templates = _.difference(_.keys(Template), non_package_templates);                                      // 8
                                                                                                                    // 9
for (var i = 0; i < package_templates.length; i++) {                                                                // 10
  var package_template = package_templates[i];                                                                      // 11
                                                                                                                    // 12
  registerI18nTemplate(package_template);                                                                           // 13
}                                                                                                                   // 14
                                                                                                                    // 15
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 12
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
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
                                                                                                                    // 8
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:invites'] = {
  Invites: Invites
};

})();
