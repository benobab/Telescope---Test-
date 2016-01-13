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
var MailChimp = Package['miro:mailchimp'].MailChimp;
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
var __, registerI18nTemplate, registerTemplate, non_package_templates, Campaigns, translations, resetNewsletterSchedule;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/package-i18n.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
TAPi18n.packages["telescope:newsletter"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                       // 2
// define package's translation function (proxy to the i18next)                                                        // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                       // 4
// define the package's templates registrar                                                                            // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:newsletter");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                       // 8
// Record the list of templates prior to package load                                                                  // 9
var _ = Package.underscore._;                                                                                          // 10
non_package_templates = _.keys(Template);                                                                              // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/newsletter.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var campaignSchema = new SimpleSchema({                                                                                // 1
  _id: {                                                                                                               // 2
    type: String,                                                                                                      // 3
    optional: true                                                                                                     // 4
  },                                                                                                                   //
  createdAt: {                                                                                                         // 6
    type: Date,                                                                                                        // 7
    optional: true                                                                                                     // 8
  },                                                                                                                   //
  sentAt: {                                                                                                            // 10
    type: String,                                                                                                      // 11
    optional: true                                                                                                     // 12
  },                                                                                                                   //
  status: {                                                                                                            // 14
    type: String,                                                                                                      // 15
    optional: true                                                                                                     // 16
  },                                                                                                                   //
  posts: {                                                                                                             // 18
    type: [String],                                                                                                    // 19
    optional: true                                                                                                     // 20
  },                                                                                                                   //
  webHits: {                                                                                                           // 22
    type: Number,                                                                                                      // 23
    optional: true                                                                                                     // 24
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Campaigns = new Meteor.Collection("campaigns", {                                                                       // 28
  schema: campaignSchema                                                                                               // 29
});                                                                                                                    //
                                                                                                                       //
Posts.addField({                                                                                                       // 32
  fieldName: 'scheduledAt',                                                                                            // 33
  fieldSchema: {                                                                                                       // 34
    type: Date,                                                                                                        // 35
    optional: true,                                                                                                    // 36
    autoform: {                                                                                                        // 37
      omit: true                                                                                                       // 38
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Users.addField([{                                                                                                      // 43
  fieldName: 'telescope.newsletter.showBanner',                                                                        // 45
  fieldSchema: {                                                                                                       // 46
    label: 'Show banner',                                                                                              // 47
    type: Boolean,                                                                                                     // 48
    optional: true,                                                                                                    // 49
    editableBy: ['admin', 'member'],                                                                                   // 50
    autoform: {                                                                                                        // 51
      omit: true                                                                                                       // 52
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'telescope.newsletter.subscribeToNewsletter',                                                             // 57
  fieldSchema: {                                                                                                       // 58
    label: 'Subscribe to newsletter',                                                                                  // 59
    type: Boolean,                                                                                                     // 60
    optional: true,                                                                                                    // 61
    editableBy: ['admin', 'member'],                                                                                   // 62
    autoform: {                                                                                                        // 63
      omit: true                                                                                                       // 64
    }                                                                                                                  //
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
// Settings                                                                                                            //
                                                                                                                       //
Settings.addField([{                                                                                                   // 72
  fieldName: 'enableNewsletter',                                                                                       // 74
  fieldSchema: {                                                                                                       // 75
    type: Boolean,                                                                                                     // 76
    optional: true,                                                                                                    // 77
    autoform: {                                                                                                        // 78
      group: 'newsletter',                                                                                             // 79
      instructions: 'Enable newsletter (requires restart).'                                                            // 80
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'showBanner',                                                                                             // 85
  fieldSchema: {                                                                                                       // 86
    type: Boolean,                                                                                                     // 87
    optional: true,                                                                                                    // 88
    label: 'Newsletter banner',                                                                                        // 89
    autoform: {                                                                                                        // 90
      group: 'newsletter',                                                                                             // 91
      instructions: 'Show newsletter sign-up form on the front page.'                                                  // 92
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: "mailChimpAPIKey",                                                                                        // 97
  fieldSchema: {                                                                                                       // 98
    type: String,                                                                                                      // 99
    optional: true,                                                                                                    // 100
    'private': true,                                                                                                   // 101
    autoform: {                                                                                                        // 102
      group: "newsletter",                                                                                             // 103
      'class': "private-field"                                                                                         // 104
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'mailChimpListId',                                                                                        // 109
  fieldSchema: {                                                                                                       // 110
    type: String,                                                                                                      // 111
    optional: true,                                                                                                    // 112
    'private': true,                                                                                                   // 113
    autoform: {                                                                                                        // 114
      group: 'newsletter',                                                                                             // 115
      instructions: 'The ID of the list you want to send to.',                                                         // 116
      'class': "private-field"                                                                                         // 117
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'postsPerNewsletter',                                                                                     // 122
  fieldSchema: {                                                                                                       // 123
    type: Number,                                                                                                      // 124
    optional: true,                                                                                                    // 125
    autoform: {                                                                                                        // 126
      group: 'newsletter'                                                                                              // 127
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'newsletterFrequency',                                                                                    // 132
  fieldSchema: {                                                                                                       // 133
    type: [Number],                                                                                                    // 134
    optional: true,                                                                                                    // 135
    autoform: {                                                                                                        // 136
      group: 'newsletter',                                                                                             // 137
      instructions: 'Defaults to once a week on Monday. Changes require restarting your app to take effect.',          // 138
      noselect: true,                                                                                                  // 139
      options: [{                                                                                                      // 140
        value: 1,                                                                                                      // 142
        label: 'Sunday'                                                                                                // 143
      }, {                                                                                                             //
        value: 2,                                                                                                      // 146
        label: 'Monday'                                                                                                // 147
      }, {                                                                                                             //
        value: 3,                                                                                                      // 150
        label: 'Tuesday'                                                                                               // 151
      }, {                                                                                                             //
        value: 4,                                                                                                      // 154
        label: 'Wednesday'                                                                                             // 155
      }, {                                                                                                             //
        value: 5,                                                                                                      // 158
        label: 'Thursday'                                                                                              // 159
      }, {                                                                                                             //
        value: 6,                                                                                                      // 162
        label: 'Friday'                                                                                                // 163
      }, {                                                                                                             //
        value: 7,                                                                                                      // 166
        label: 'Saturday'                                                                                              // 167
      }]                                                                                                               //
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'newsletterTime',                                                                                         // 174
  fieldSchema: {                                                                                                       // 175
    type: String,                                                                                                      // 176
    optional: true,                                                                                                    // 177
    defaultValue: '00:00',                                                                                             // 178
    autoform: {                                                                                                        // 179
      group: 'newsletter',                                                                                             // 180
      instructions: 'Defaults to 00:00/12:00 AM. Time to send out newsletter if enabled.',                             // 181
      type: 'time'                                                                                                     // 182
    }                                                                                                                  //
  }                                                                                                                    //
}, {                                                                                                                   //
  fieldName: 'autoSubscribe',                                                                                          // 187
  fieldSchema: {                                                                                                       // 188
    type: Boolean,                                                                                                     // 189
    optional: true,                                                                                                    // 190
    autoform: {                                                                                                        // 191
      group: 'newsletter',                                                                                             // 192
      instructions: 'Automatically subscribe new users on sign-up.'                                                    // 193
    }                                                                                                                  //
  }                                                                                                                    //
}]);                                                                                                                   //
                                                                                                                       //
// create new "campaign" lens for all posts from the past X days that haven't been scheduled yet                       //
Posts.views.add("campaign", function (terms) {                                                                         // 200
  return {                                                                                                             // 201
    find: {                                                                                                            // 202
      scheduledAt: { $exists: false },                                                                                 // 203
      postedAt: {                                                                                                      // 204
        $gte: terms.after                                                                                              // 205
      }                                                                                                                //
    },                                                                                                                 //
    options: { sort: { baseScore: -1 } }                                                                               // 208
  };                                                                                                                   //
});                                                                                                                    //
                                                                                                                       //
Telescope.modules.add("contentTop", {                                                                                  // 212
  template: 'newsletter_banner',                                                                                       // 213
  order: 1,                                                                                                            // 214
  only: ["postsDefault"]                                                                                               // 215
});                                                                                                                    //
                                                                                                                       //
function subscribeUserOnProfileCompletion(user) {                                                                      // 218
  if (!!Settings.get('autoSubscribe') && !!Users.getEmail(user)) {                                                     // 219
    addToMailChimpList(user, false, function (error, result) {                                                         // 220
      console.log(error);                                                                                              // 221
      console.log(result);                                                                                             // 222
    });                                                                                                                //
  }                                                                                                                    //
  return user;                                                                                                         // 225
}                                                                                                                      //
Telescope.callbacks.add("profileCompletedAsync", subscribeUserOnProfileCompletion);                                    // 227
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/client/templates/template.newsletter_banner.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("newsletter_banner");                                                                             // 2
Template["newsletter_banner"] = new Template("Template.newsletter_banner", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "newsletter-banner-wrapper"                                                                               // 6
  }, "\n    ", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("showBanner"));                                                                  // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", HTML.DIV({                                                                                    // 10
      "class": "newsletter-banner banner"                                                                              // 11
    }, "\n        ", HTML.FORM("\n          ", HTML.H4({                                                               // 12
      "class": "newsletter-tagline"                                                                                    // 13
    }, Blaze.View("lookup:_", function() {                                                                             // 14
      return Spacebars.mustache(view.lookup("_"), "receive_the_best_of");                                              // 15
    }), " ", Blaze.View("lookup:siteName", function() {                                                                // 16
      return Spacebars.mustache(view.lookup("siteName"));                                                              // 17
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 18
      return Spacebars.mustache(view.lookup("_"), "right_in_your_inbox");                                              // 19
    })), "\n          ", Blaze.If(function() {                                                                         // 20
      return Spacebars.call(view.lookup("isNotConnected"));                                                            // 21
    }, function() {                                                                                                    // 22
      return [ "\n            ", HTML.INPUT({                                                                          // 23
        "class": "newsletter-email",                                                                                   // 24
        type: "email",                                                                                                 // 25
        placeholder: "Your Email"                                                                                      // 26
      }), "\n          " ];                                                                                            // 27
    }), "\n          ", HTML.BUTTON({                                                                                  // 28
      "class": "button newsletter-button btn btn-primary"                                                              // 29
    }, Blaze.View("lookup:_", function() {                                                                             // 30
      return Spacebars.mustache(view.lookup("_"), "get_newsletter");                                                   // 31
    }), HTML.SPAN({                                                                                                    // 32
      "class": "button-loader"                                                                                         // 33
    }, HTML.IMG({                                                                                                      // 34
      src: "/packages/telescope_core/public/img/loading.svg"                                                           // 35
    }))), "\n        "), "\n        ", HTML.H4({                                                                       // 36
      "class": "newsletter-subscribed"                                                                                 // 37
    }, Blaze.View("lookup:_", function() {                                                                             // 38
      return Spacebars.mustache(view.lookup("_"), "thanks_for_subscribing");                                           // 39
    })), "\n        ", HTML.A({                                                                                        // 40
      href: "#",                                                                                                       // 41
      "class": "newsletter-dismiss banner-dismiss"                                                                     // 42
    }, Blaze.View("lookup:icon", function() {                                                                          // 43
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "close"));                                      // 44
    })), "\n      "), "\n    " ];                                                                                      // 45
  }), "\n  ");                                                                                                         // 46
}));                                                                                                                   // 47
                                                                                                                       // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/lib/client/templates/newsletter_banner.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var confirmSubscription = function () {                                                                                // 1
  $('.newsletter-banner form').css('opacity', 0);                                                                      // 2
  $('.newsletter-banner .newsletter-subscribed').css('display', 'block').css('opacity', 1);                            // 3
  Meteor.setInterval(function () {                                                                                     // 4
    // required because otherwise banner disappears immediately after confirmation                                     //
    dismissBanner();                                                                                                   // 6
  }, 2000);                                                                                                            //
};                                                                                                                     //
                                                                                                                       //
var dismissBanner = function () {                                                                                      // 10
  $('.newsletter-banner').fadeOut('fast', function () {                                                                // 11
    if (Meteor.user()) {                                                                                               // 12
      // if user is connected, change setting in their account                                                         //
      Users.setSetting(Meteor.user(), 'newsletter.showBanner', false);                                                 // 14
    } else {                                                                                                           //
      // set cookie                                                                                                    //
      Cookie.set('showBanner', "no");                                                                                  // 17
    }                                                                                                                  //
  });                                                                                                                  //
};                                                                                                                     //
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 22
  Template.newsletter_banner.helpers({                                                                                 // 23
    siteName: function () {                                                                                            // 24
      return Settings.get('title');                                                                                    // 25
    },                                                                                                                 //
    isNotConnected: function () {                                                                                      // 27
      return !Meteor.user();                                                                                           // 28
    },                                                                                                                 //
    showBanner: function () {                                                                                          // 30
      // note: should not be reactive                                                                                  //
      if (Settings.get('showBanner', false) === false || !Users.can.view(Meteor.user()) || Cookie.get('showBanner') === "no" || Meteor.user() && Meteor.user().getSetting('newsletter.showBanner', true) === false || Meteor.user() && Meteor.user().getSetting('newsletter.subscribeToNewsletter', false) === true) {
        return false;                                                                                                  // 39
      } else {                                                                                                         //
        return true;                                                                                                   // 41
      }                                                                                                                //
    }                                                                                                                  //
  });                                                                                                                  //
                                                                                                                       //
  Template.newsletter_banner.events({                                                                                  // 46
    'click .newsletter-button': function (e) {                                                                         // 47
      e.preventDefault();                                                                                              // 48
      var $banner = $('.newsletter-banner');                                                                           // 49
      if (Meteor.user()) {                                                                                             // 50
        $banner.addClass('show-loader');                                                                               // 51
        Meteor.call('addCurrentUserToMailChimpList', function (error, result) {                                        // 52
          $banner.removeClass('show-loader');                                                                          // 53
          if (error) {                                                                                                 // 54
            console.log(error);                                                                                        // 55
            Messages.flash(error.message, "error");                                                                    // 56
          } else {                                                                                                     //
            console.log(result);                                                                                       // 58
            confirmSubscription();                                                                                     // 59
          }                                                                                                            //
        });                                                                                                            //
      } else {                                                                                                         //
        var email = $('.newsletter-email').val();                                                                      // 63
        if (!email) {                                                                                                  // 64
          alert('Please fill in your email.');                                                                         // 65
          return;                                                                                                      // 66
        }                                                                                                              //
        $banner.addClass('show-loader');                                                                               // 68
        Meteor.call('addEmailToMailChimpList', email, function (error, result) {                                       // 69
          $banner.removeClass('show-loader');                                                                          // 70
          if (error) {                                                                                                 // 71
            console.log(error);                                                                                        // 72
            Messages.flash(error.reason, "error");                                                                     // 73
          } else {                                                                                                     //
            Messages.clearSeen();                                                                                      // 75
            console.log(result);                                                                                       // 76
            confirmSubscription();                                                                                     // 77
          }                                                                                                            //
        });                                                                                                            //
      }                                                                                                                //
      // $('body').addClass('showing-lightbox');                                                                       //
      // $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');                                     //
    },                                                                                                                 //
    'click .newsletter-dismiss': function (e) {                                                                        // 84
      $('.newsletter-banner').fadeOut('fast');                                                                         // 85
      dismissBanner();                                                                                                 // 86
      e.preventDefault();                                                                                              // 87
    }                                                                                                                  //
  });                                                                                                                  //
});                                                                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ar.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                         // 8
                                                                                                                       // 9
for (var i = 0; i < package_templates.length; i++) {                                                                   // 10
  var package_template = package_templates[i];                                                                         // 11
                                                                                                                       // 12
  registerI18nTemplate(package_template);                                                                              // 13
}                                                                                                                      // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/bg.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/cs.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/da.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/de.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/el.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/en.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
// integrate the fallback language translations                                                                        // 8
translations = {};                                                                                                     // 9
translations[namespace] = {"receive_the_best_of":"Receive the best of","right_in_your_inbox":"right in your inbox.","get_newsletter":"Get Newsletter","thanks_for_subscribing":"Thanks for subscribing!","newsletter":"newsletter","showBanner":"Show Banner","mailChimpAPIKey":"MailChimp API Key","mailChimpListId":"MailChimp List ID","postsPerNewsletter":"Posts per Newsletter","newsletterFrequency":"Newsletter Frequency","newsletterTime":"Newsletter Time","enableNewsletter":"Enable Newsletter","autoSubscribe":"Auto Subscribe"};
TAPi18n._loadLangFileObject("en", translations);                                                                       // 11
                                                                                                                       // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/es.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/et.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/fr.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/hu.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/id.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/it.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ja.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/kk.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ko.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/nl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/pl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/pt-BR.i18n.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ro.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/ru.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/sl.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/sv.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/th.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/tr.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/vi.i18n.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/telescope_newsletter/packages/telescope_newsletteri18n/zh-CN.i18n.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _ = Package.underscore._,                                                                                          // 1
    package_name = "telescope:newsletter",                                                                             // 2
    namespace = "telescope:newsletter";                                                                                // 3
                                                                                                                       // 4
if (package_name != "project") {                                                                                       // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                              // 6
}                                                                                                                      // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:newsletter'] = {
  resetNewsletterSchedule: resetNewsletterSchedule
};

})();
