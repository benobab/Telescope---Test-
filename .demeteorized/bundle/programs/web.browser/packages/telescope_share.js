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

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_share/lib/share.js                                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Telescope.modules.add("postComponents", {                                                     // 1
  template: 'post_share',                                                                     // 2
  order: 25                                                                                   // 3
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_share/lib/client/template.post_share.js                                 //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("post_share");                                                           // 2
Template["post_share"] = new Template("Template.post_share", (function() {                    // 3
  var view = this;                                                                            // 4
  return HTML.DIV({                                                                           // 5
    "class": function() {                                                                     // 6
      return [ "post-share ", Spacebars.mustache(view.lookup("moduleClass")) ];               // 7
    }                                                                                         // 8
  }, "\n    ", HTML.A({                                                                       // 9
    href: "#",                                                                                // 10
    "class": "share-link action",                                                             // 11
    title: function() {                                                                       // 12
      return Spacebars.mustache(view.lookup("_"), "share");                                   // 13
    }                                                                                         // 14
  }, "\n      ", Blaze.View("lookup:icon", function() {                                       // 15
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "share"));               // 16
  }), "\n    "), "\n    ", HTML.DIV({                                                         // 17
    "class": "share-options hidden"                                                           // 18
  }, "\n      ", HTML.A({                                                                     // 19
    "class": "share-option-facebook",                                                         // 20
    href: function() {                                                                        // 21
      return [ "https://www.facebook.com/sharer/sharer.php?u=", Spacebars.mustache(Spacebars.dot(view.lookup("."), "getShareableLink")) ];
    },                                                                                        // 23
    target: "_blank"                                                                          // 24
  }, Blaze.View("lookup:icon", function() {                                                   // 25
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "facebook"));            // 26
  })), "\n      ", HTML.A({                                                                   // 27
    "class": "share-option-twitter",                                                          // 28
    href: function() {                                                                        // 29
      return [ "//twitter.com/intent/tweet?text=", Spacebars.mustache(view.lookup("encodedTitle")), "&url=", Spacebars.mustache(Spacebars.dot(view.lookup("."), "getShareableLink")), "&", Spacebars.mustache(view.lookup("viaTwitter")) ];
    },                                                                                        // 31
    target: "_blank"                                                                          // 32
  }, Blaze.View("lookup:icon", function() {                                                   // 33
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "twitter"));             // 34
  })), "\n      ", HTML.A({                                                                   // 35
    "class": "share-option-linkedin",                                                         // 36
    href: function() {                                                                        // 37
      return [ "//www.linkedin.com/shareArticle?mini=true&url=", Spacebars.mustache(Spacebars.dot(view.lookup("."), "getShareableLink")), HTML.CharRef({
        html: "&amp;",                                                                        // 39
        str: "&"                                                                              // 40
      }), "summary=", Spacebars.mustache(view.lookup("encodedTitle")) ];                      // 41
    },                                                                                        // 42
    target: "_blank"                                                                          // 43
  }, Blaze.View("lookup:icon", function() {                                                   // 44
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "linkedin"));            // 45
  })), "\n      ", HTML.A({                                                                   // 46
    "class": "share-option-google",                                                           // 47
    href: function() {                                                                        // 48
      return [ "https://plus.google.com/share?url=", Spacebars.mustache(Spacebars.dot(view.lookup("."), "getShareableLink")) ];
    },                                                                                        // 50
    target: "_blank"                                                                          // 51
  }, Blaze.View("lookup:icon", function() {                                                   // 52
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("icon"), "googleplus"));          // 53
  })), "\n    "), "\n  ");                                                                    // 54
}));                                                                                          // 55
                                                                                              // 56
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_share/lib/client/post_share.js                                          //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Meteor.startup(function () {                                                                  // 1
  Template.post_share.helpers({                                                               // 2
    encodedTitle: function () {                                                               // 3
      return encodeURIComponent(this.title);                                                  // 4
    },                                                                                        //
    sourceLink: function () {                                                                 // 6
      return !!this.url ? this.url : Posts.getPageUrl(this);                                  // 7
    },                                                                                        //
    viaTwitter: function () {                                                                 // 9
      return !!Settings.get('twitterAccount') ? 'via=' + Settings.get('twitterAccount') : '';
    }                                                                                         //
  });                                                                                         //
                                                                                              //
  Template.post_share.events({                                                                // 14
    'click .share-link': function (e) {                                                       // 15
      var $this = $(e.target).parents('.post-share').find('.share-link');                     // 16
      var $share = $this.parents('.post-share').find('.share-options');                       // 17
      e.preventDefault();                                                                     // 18
      $('.share-link').not($this).removeClass("active");                                      // 19
      $(".share-options").not($share).addClass("hidden");                                     // 20
      $this.toggleClass("active");                                                            // 21
      $share.toggleClass("hidden");                                                           // 22
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:share'] = {};

})();
