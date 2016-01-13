(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var juice = Package['sacha:juice'].juice;
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
var Handlebars, translations;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/lib/server/email.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * Telescope Email namespace                                                                                         //
 * @namespace Email                                                                                                  //
 */                                                                                                                  //
Telescope.email = {};                                                                                                // 5
                                                                                                                     //
var htmlToText = Npm.require('html-to-text');                                                                        // 7
                                                                                                                     //
// for template "foo", check if "custom_foo" exists. If it does, use it instead                                      //
Telescope.email.getTemplate = function (templateName) {                                                              // 10
                                                                                                                     //
  var template = templateName;                                                                                       // 12
                                                                                                                     //
  // go through prefixes and keep the last one (if any) that points to a valid template                              //
  Telescope.config.customPrefixes.forEach(function (prefix) {                                                        // 15
    if (typeof Handlebars.templates[prefix + templateName] === 'function') {                                         // 16
      template = prefix + templateName;                                                                              // 17
    }                                                                                                                //
  });                                                                                                                //
                                                                                                                     //
  return Handlebars.templates[template];                                                                             // 21
};                                                                                                                   //
                                                                                                                     //
Telescope.email.buildTemplate = function (htmlContent) {                                                             // 25
                                                                                                                     //
  var emailProperties = {                                                                                            // 27
    secondaryColor: Settings.get('secondaryColor', '#444444'),                                                       // 28
    accentColor: Settings.get('accentColor', '#DD3416'),                                                             // 29
    siteName: Settings.get('title'),                                                                                 // 30
    tagline: Settings.get('tagline'),                                                                                // 31
    siteUrl: Telescope.utils.getSiteUrl(),                                                                           // 32
    body: htmlContent,                                                                                               // 33
    unsubscribe: '',                                                                                                 // 34
    accountLink: Telescope.utils.getSiteUrl() + 'account',                                                           // 35
    footer: Settings.get('emailFooter'),                                                                             // 36
    logoUrl: Settings.get('logoUrl'),                                                                                // 37
    logoHeight: Settings.get('logoHeight'),                                                                          // 38
    logoWidth: Settings.get('logoWidth')                                                                             // 39
  };                                                                                                                 //
                                                                                                                     //
  var emailHTML = Telescope.email.getTemplate("emailWrapper")(emailProperties);                                      // 42
                                                                                                                     //
  var inlinedHTML = juice(emailHTML);                                                                                // 44
                                                                                                                     //
  var doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">';
                                                                                                                     //
  return doctype + inlinedHTML;                                                                                      // 48
};                                                                                                                   //
                                                                                                                     //
Telescope.email.send = function (to, subject, html, text) {                                                          // 51
                                                                                                                     //
  // TODO: limit who can send emails                                                                                 //
  // TODO: fix this error: Error: getaddrinfo ENOTFOUND                                                              //
                                                                                                                     //
  var from = Settings.get('defaultEmail', 'noreply@example.com');                                                    // 56
  var siteName = Settings.get('title', 'Telescope');                                                                 // 57
  subject = '[' + siteName + '] ' + subject;                                                                         // 58
                                                                                                                     //
  if (typeof text === 'undefined') {                                                                                 // 60
    // Auto-generate text version if it doesn't exist. Has bugs, but should be good enough.                          //
    var text = htmlToText.fromString(html, {                                                                         // 62
      wordwrap: 130                                                                                                  // 63
    });                                                                                                              //
  }                                                                                                                  //
                                                                                                                     //
  console.log('//////// sending email…');                                                                            // 67
  console.log('from: ' + from);                                                                                      // 68
  console.log('to: ' + to);                                                                                          // 69
  console.log('subject: ' + subject);                                                                                // 70
  // console.log('html: '+html);                                                                                     //
  // console.log('text: '+text);                                                                                     //
                                                                                                                     //
  var email = {                                                                                                      // 74
    from: from,                                                                                                      // 75
    to: to,                                                                                                          // 76
    subject: subject,                                                                                                // 77
    text: text,                                                                                                      // 78
    html: html                                                                                                       // 79
  };                                                                                                                 //
                                                                                                                     //
  Email.send(email);                                                                                                 // 82
                                                                                                                     //
  return email;                                                                                                      // 84
};                                                                                                                   //
                                                                                                                     //
Telescope.email.buildAndSend = function (to, subject, template, properties) {                                        // 87
  var html = Telescope.email.buildTemplate(Telescope.email.getTemplate(template)(properties));                       // 88
  return Telescope.email.send(to, subject, html);                                                                    // 89
};                                                                                                                   //
                                                                                                                     //
Meteor.methods({                                                                                                     // 92
  testEmail: function () {                                                                                           // 93
    if (Users.is.adminById(this.userId)) {                                                                           // 94
      var email = Telescope.email.buildAndSend(Settings.get('defaultEmail'), 'Telescope email test', 'emailTest', { date: new Date() });
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
function adminUserCreationNotification(user) {                                                                       // 100
  // send notifications to admins                                                                                    //
  var admins = Users.adminUsers();                                                                                   // 102
  admins.forEach(function (admin) {                                                                                  // 103
    if (Users.getSetting(admin, "notifications.users", false)) {                                                     // 104
      var emailProperties = {                                                                                        // 105
        profileUrl: Users.getProfileUrl(user, true),                                                                 // 106
        username: Users.getUserName(user)                                                                            // 107
      };                                                                                                             //
      var html = Telescope.email.getTemplate('emailNewUser')(emailProperties);                                       // 109
      Telescope.email.send(Users.getEmail(admin), 'New user account: ' + Users.getUserName(user), Telescope.email.buildTemplate(html));
    }                                                                                                                //
  });                                                                                                                //
  return user;                                                                                                       // 113
}                                                                                                                    //
Telescope.callbacks.add("onCreateUser", adminUserCreationNotification);                                              // 115
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/lib/server/templates/handlebars.emailInvite.js                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">\n<a href=\"{{profileUrl}}\">{{invitedBy}}</a>\ninvited you to join {{communityName}}\n</span><br><br>\n\n{{#if newUser}}\n<a href=\"{{actionLink}}\">Join {{communityName}}</a>\n{{else}}\n<a href=\"{{actionLink}}\">Sign in to {{communityName}}</a>\n{{/if}}\n<br><br>\n");Handlebars.templates["emailInvite"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailInvite"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/lib/server/templates/handlebars.emailTest.js                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<span class=\"heading\">This is just a test</span><br><br>\n\nSent at {{date}}.<br><br>");Handlebars.templates["emailTest"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailTest"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/lib/server/templates/handlebars.emailWrapper.js                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Handlebars = Handlebars || {};Handlebars.templates = Handlebars.templates || {} ;var template = OriginalHandlebars.compile("<html lang=\"en\">\n<head>\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta name=\"viewport\" content=\"initial-scale=1.0\">    <!-- So that mobile webkit will display zoomed in -->\n    <meta name=\"format-detection\" content=\"telephone=no\"> <!-- disable auto telephone linking in iOS -->\n\n    <title>{{siteName}}</title>\n    <style type=\"text/css\">\n\n        /* Resets: see reset.css for details */\n        .ReadMsgBody { width: 100%; background-color: #ebebeb;}\n        .ExternalClass {width: 100%; background-color: #ebebeb;}\n        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}\n        body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}\n        body {margin:0; padding:0;}\n        table {border-spacing:0;}\n        table td {border-collapse:collapse;}\n        .yshortcuts a {border-bottom: none !important;}\n\n\n        /* Constrain email width for small screens */\n        @media screen and (max-width: 600px) {\n            table[class=\"container\"] {\n                width: 95% !important;\n            }\n            .main-container{\n              font-size: 14px !important;\n            }\n        }\n\n        /* Give content more room on mobile */\n        @media screen and (max-width: 480px) {\n            td[class=\"container-padding\"] {\n                padding-left: 12px !important;\n                padding-right: 12px !important;\n            }\n        }\n        a{\n          color: {{accentColor}};\n          font-weight: bold;\n          text-decoration: none;\n        }\n        .wrapper{\n          padding: 20px 0;\n        }\n        .container{\n          border-radius: 3px;\n        }\n        .heading-container{\n          background: {{secondaryColor}};\n          padding: 15px;\n          text-align: center;\n          border-radius: 3px 3px 0px 0px;\n        }\n        .heading-container, .logo{\n          text-align: center;\n          color: white;\n          font-family: Helvetica, sans-serif;\n          font-weight: bold;\n          font-size: 20px;\n        }\n        .main-container{\n          line-height: 1.7;\n          background: white;\n          padding: 0 30px;\n          font-size: 15px;\n          font-family: Helvetica, sans-serif;\n          color: #555;\n        }\n        .heading{\n          font-weight: bold;\n          font-size: 18px;\n          line-height: 1.5;\n          margin: 0;\n        }\n        .footer-container{\n          background: #ddd;\n          font-family: Helvetica, sans-serif;\n          padding: 30px;\n          color: #777;\n          border-radius: 0px 0px 3px 3px;\n          font-size: 13px;\n        }\n        .post-body, .comment-body{\n          border-top: 1px solid #ddd;\n          border-bottom: 1px solid #ddd;\n          padding: 10px 0;\n        }\n    </style>\n</head>\n<body style=\"margin:0; padding:10px 0;\" bgcolor=\"#ebebeb\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\">\n\n<br>\n\n<!-- 100% wrapper (grey background) -->\n<table border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#ebebeb\">\n  <tr>\n    <td class=\"wrapper\" align=\"center\" valign=\"top\" bgcolor=\"#ebebeb\" style=\"background-color: #ebebeb;\">\n\n      <!-- 600px container (white background) -->\n      <table border=\"0\" width=\"600\" cellpadding=\"0\" cellspacing=\"0\" class=\"container\" bgcolor=\"#ffffff\">\n        <tr>\n          <td class=\"heading-container\">\n            <a href=\"{{siteUrl}}\">\n              {{#if logoUrl}}\n                <img class=\"logo\" src=\"{{logoUrl}}\" height=\"{{logoHeight}}\" width=\"{{logoWidth}}\" alt=\"{{siteName}}\"/>\n              {{else}}\n                {{siteName}}\n              {{/if}}\n            </a>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"main-container container-padding\" bgcolor=\"#ffffff\">\n            <br>\n\n            {{{body}}}\n\n          </td>\n        </tr>\n        <tr>\n          <td class=\"footer-container\">\n            <a href=\"{{accountLink}}\">Change your notifications settings</a><br/><br/>\n            {{{footer}}}\n          </td>\n        </tr>\n      </table>\n      <!--/600px container -->\n\n    </td>\n  </tr>\n</table>\n<!--/100% wrapper-->\n<br>\n<br>\n</body>\n</html>\n");Handlebars.templates["emailWrapper"] = function (data, partials) { partials = (partials || {});return template(data || {}, { helpers: OriginalHandlebars.helpers,partials: partials,name: "emailWrapper"});};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/ar.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                                                // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                               // 10
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                      // 11
  TAPi18n.translations["ar"] = {};                                                                                   // 12
}                                                                                                                    // 13
                                                                                                                     // 14
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                           // 15
  TAPi18n.translations["ar"][namespace] = {};                                                                        // 16
}                                                                                                                    // 17
                                                                                                                     // 18
_.extend(TAPi18n.translations["ar"][namespace], {"start_posting":"قم باضافة جديدة"});                                // 19
TAPi18n._registerServerTranslator("ar", namespace);                                                                  // 20
                                                                                                                     // 21
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/bg.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                                           // 8
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                      // 9
  TAPi18n.translations["bg"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                           // 13
  TAPi18n.translations["bg"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["bg"][namespace], {"start_posting":"Започнете да публикувате."});                      // 17
TAPi18n._registerServerTranslator("bg", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/cs.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                      // 9
  TAPi18n.translations["cs"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                           // 13
  TAPi18n.translations["cs"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["cs"][namespace], {"you_ve_just_been_invited":"Právě jste byli pozváni.","start_posting":"Začněte vkládat příspěvky!"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/da.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                                  // 8
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                      // 9
  TAPi18n.translations["da"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                           // 13
  TAPi18n.translations["da"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["da"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("da", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/de.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                      // 9
  TAPi18n.translations["de"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                           // 13
  TAPi18n.translations["de"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["de"][namespace], {"start_posting":"Fang an Links einzutragen."});                     // 17
TAPi18n._registerServerTranslator("de", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/el.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                      // 9
  TAPi18n.translations["el"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                           // 13
  TAPi18n.translations["el"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["el"][namespace], {"start_posting":"Ξεκινήστε να δημοσιεύετε."});                      // 17
TAPi18n._registerServerTranslator("el", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/en.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
// integrate the fallback language translations                                                                      // 8
translations = {};                                                                                                   // 9
translations[namespace] = {"you_ve_just_been_invited":"You've just been invited.","start_posting":"Start posting!"};
TAPi18n._loadLangFileObject("en", translations);                                                                     // 11
TAPi18n._registerServerTranslator("en", namespace);                                                                  // 12
                                                                                                                     // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/es.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                       // 8
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                      // 9
  TAPi18n.translations["es"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                           // 13
  TAPi18n.translations["es"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["es"][namespace], {"you_ve_just_been_invited":"Has sido invitado.","start_posting":"¡Empezar a publicar!"});
TAPi18n._registerServerTranslator("es", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/et.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                      // 9
  TAPi18n.translations["et"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                           // 13
  TAPi18n.translations["et"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["et"][namespace], {"you_ve_just_been_invited":"Sa oled kutsutud.","start_posting":"Alusta postitamist!"});
TAPi18n._registerServerTranslator("et", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/fr.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                      // 8
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                      // 9
  TAPi18n.translations["fr"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                           // 13
  TAPi18n.translations["fr"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["fr"][namespace], {"you_ve_just_been_invited":"Vous venez d'être invité.","start_posting":"Commencer à poster."});
TAPi18n._registerServerTranslator("fr", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/hu.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                      // 9
  TAPi18n.translations["hu"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                           // 13
  TAPi18n.translations["hu"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("hu", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/id.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                                   // 8
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                      // 9
  TAPi18n.translations["id"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                           // 13
  TAPi18n.translations["id"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["id"][namespace], {"you_ve_just_been_invited":"Anda baru saja diundang.","start_posting":"Mulai posting!"});
TAPi18n._registerServerTranslator("id", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/it.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                      // 9
  TAPi18n.translations["it"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                           // 13
  TAPi18n.translations["it"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["it"][namespace], {"you_ve_just_been_invited":"Sei appena stato invitato.","start_posting":"Inizia a postare."});
TAPi18n._registerServerTranslator("it", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/ja.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                                                  // 8
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                      // 9
  TAPi18n.translations["ja"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                           // 13
  TAPi18n.translations["ja"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("ja", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/kk.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                                             // 8
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                      // 9
  TAPi18n.translations["kk"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                           // 13
  TAPi18n.translations["kk"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("kk", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/ko.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                                                    // 8
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                      // 9
  TAPi18n.translations["ko"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                           // 13
  TAPi18n.translations["ko"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["ko"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("ko", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/nl.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                              // 8
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                      // 9
  TAPi18n.translations["nl"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                           // 13
  TAPi18n.translations["nl"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["nl"][namespace], {"start_posting":"Begin met plaatsen."});                            // 17
TAPi18n._registerServerTranslator("nl", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/pl.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                                                 // 8
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                      // 9
  TAPi18n.translations["pl"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                           // 13
  TAPi18n.translations["pl"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["pl"][namespace], {"start_posting":"Zacznij pisać."});                                 // 17
TAPi18n._registerServerTranslator("pl", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/pt-BR.i18n.js                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];                                    // 8
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                   // 9
  TAPi18n.translations["pt-BR"] = {};                                                                                // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                        // 13
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                     // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["pt-BR"][namespace], {"start_posting":"Comece a postar."});                            // 17
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                               // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/ro.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                      // 9
  TAPi18n.translations["ro"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                           // 13
  TAPi18n.translations["ro"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["ro"][namespace], {"start_posting":"Poți începe să publici."});                        // 17
TAPi18n._registerServerTranslator("ro", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/ru.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                      // 9
  TAPi18n.translations["ru"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                           // 13
  TAPi18n.translations["ru"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["ru"][namespace], {"start_posting":"Начать пост."});                                   // 17
TAPi18n._registerServerTranslator("ru", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/sl.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                      // 9
  TAPi18n.translations["sl"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                           // 13
  TAPi18n.translations["sl"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["sl"][namespace], {"you_ve_just_been_invited":"Pravkar ste bili povabljeni.","start_posting":"Začnite objavljati!"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/sv.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                                               // 8
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                      // 9
  TAPi18n.translations["sv"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                           // 13
  TAPi18n.translations["sv"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["sv"][namespace], {"you_ve_just_been_invited":"Du har just blivit inbjuden.","start_posting":"Börja skapa inlägg!"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/th.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                                                      // 8
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                      // 9
  TAPi18n.translations["th"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                           // 13
  TAPi18n.translations["th"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["th"][namespace], {});                                                                 // 17
TAPi18n._registerServerTranslator("th", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/tr.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                                // 8
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                      // 9
  TAPi18n.translations["tr"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                           // 13
  TAPi18n.translations["tr"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["tr"][namespace], {"you_ve_just_been_invited":"Davet edildin.","start_posting":"Paylaşıma başlayın!"});
TAPi18n._registerServerTranslator("tr", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/vi.i18n.js                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                         // 8
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                      // 9
  TAPi18n.translations["vi"] = {};                                                                                   // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                           // 13
  TAPi18n.translations["vi"][namespace] = {};                                                                        // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["vi"][namespace], {"start_posting":"Bắt đầu đăng bài."});                              // 17
TAPi18n._registerServerTranslator("vi", namespace);                                                                  // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_email/packages/telescope_emaili18n/zh-CN.i18n.js                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "project",                                                                                        // 2
    namespace = "project";                                                                                           // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                                       // 8
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                   // 9
  TAPi18n.translations["zh-CN"] = {};                                                                                // 10
}                                                                                                                    // 11
                                                                                                                     // 12
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                        // 13
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                     // 14
}                                                                                                                    // 15
                                                                                                                     // 16
_.extend(TAPi18n.translations["zh-CN"][namespace], {"start_posting":"开始发布."});                                       // 17
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                               // 18
                                                                                                                     // 19
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:email'] = {};

})();

//# sourceMappingURL=telescope_email.js.map
