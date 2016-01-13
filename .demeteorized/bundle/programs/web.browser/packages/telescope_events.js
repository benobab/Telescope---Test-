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
var Events, mixpanelId, goSquaredId, clickyId, clicky_site_ids, googleAnalyticsId;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_events/lib/events.js                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Events = new Mongo.Collection('events');                                                                            // 1
                                                                                                                    //
Events.schema = new SimpleSchema({                                                                                  // 3
  createdAt: {                                                                                                      // 4
    type: Date                                                                                                      // 5
  },                                                                                                                //
  name: {                                                                                                           // 7
    type: String                                                                                                    // 8
  },                                                                                                                //
  description: {                                                                                                    // 10
    type: String,                                                                                                   // 11
    optional: true                                                                                                  // 12
  },                                                                                                                //
  unique: {                                                                                                         // 14
    type: Boolean,                                                                                                  // 15
    optional: true                                                                                                  // 16
  },                                                                                                                //
  important: { // marking an event as important means it should never be erased                                     // 18
    type: Boolean,                                                                                                  // 19
    optional: true                                                                                                  // 20
  },                                                                                                                //
  properties: {                                                                                                     // 22
    type: Object,                                                                                                   // 23
    optional: true,                                                                                                 // 24
    blackbox: true                                                                                                  // 25
  }                                                                                                                 //
});                                                                                                                 //
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 29
  // needs to happen after every fields are added                                                                   //
  Events.internationalize();                                                                                        // 31
});                                                                                                                 //
                                                                                                                    //
Events.attachSchema(Events.schema);                                                                                 // 34
                                                                                                                    //
if (Meteor.isServer) {                                                                                              // 36
  Events.log = function (event) {                                                                                   // 37
                                                                                                                    //
    // if event is supposed to be unique, check if it has already been logged                                       //
    if (!!event.unique && !!Events.findOne({ name: event.name })) {                                                 // 40
      return;                                                                                                       // 41
    }                                                                                                               //
                                                                                                                    //
    event.createdAt = new Date();                                                                                   // 44
                                                                                                                    //
    Events.insert(event);                                                                                           // 46
  };                                                                                                                //
}                                                                                                                   //
                                                                                                                    //
Events.track = function (event, properties) {                                                                       // 51
  // console.log('trackevent: ', event, properties);                                                                //
  properties = properties || {};                                                                                    // 53
  //TODO                                                                                                            //
  // add event to an Events collection for logging and buffering purposes                                           //
  if (Meteor.isClient) {                                                                                            // 56
    if (typeof mixpanel !== 'undefined' && typeof mixpanel.track !== 'undefined') {                                 // 57
      mixpanel.track(event, properties);                                                                            // 58
    }                                                                                                               //
    if (typeof GoSquared !== 'undefined' && typeof GoSquared.DefaultTracker !== 'undefined') {                      // 60
      GoSquared.DefaultTracker.TrackEvent(event, JSON.stringify(properties));                                       // 61
    }                                                                                                               //
  }                                                                                                                 //
};                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/telescope_events/lib/client/analytics.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Events.analyticsInit = function () {                                                                                // 1
                                                                                                                    //
  // Mixpanel                                                                                                       //
  if (mixpanelId = Settings.get("mixpanelId")) {                                                                    // 4
    (function (c, a) {                                                                                              // 5
      window.mixpanel = a;                                                                                          // 6
      var b, d, h, e;                                                                                               // 7
      b = c.createElement("script");                                                                                // 8
      b.type = "text/javascript";                                                                                   // 9
      b.async = !0;                                                                                                 // 10
      b.src = ("https:" === c.location.protocol ? "https:" : "http:") + '//cdn.mxpnl.com/libs/mixpanel-2.1.min.js';
      d = c.getElementsByTagName("script")[0];                                                                      // 12
      d.parentNode.insertBefore(b, d);                                                                              // 13
      a._i = [];                                                                                                    // 14
      a.init = function (b, c, f) {                                                                                 // 15
        function d(a, b) {                                                                                          // 16
          var c = b.split(".");                                                                                     // 17
          2 == c.length && (a = a[c[0]], b = c[1]);                                                                 // 18
          a[b] = function () {                                                                                      // 19
            a.push([b].concat(Array.prototype.slice.call(arguments, 0)));                                           // 20
          };                                                                                                        //
        }                                                                                                           //
        var g = a;                                                                                                  // 23
        "undefined" !== typeof f ? g = a[f] = [] : f = "mixpanel";                                                  // 24
        g.people = g.people || [];                                                                                  // 25
        h = "disable track track_pageview track_links track_forms register register_once unregister identify name_tag set_config people.identify people.set people.increment".split(" ");
        for (e = 0; e < h.length; e++) d(g, h[e]);                                                                  // 27
        a._i.push([b, c, f]);                                                                                       // 28
      };                                                                                                            //
      a.__SV = 1.1;                                                                                                 // 30
    })(document, window.mixpanel || []);                                                                            //
    mixpanel.init(mixpanelId);                                                                                      // 32
  }                                                                                                                 //
                                                                                                                    //
  // GoSquared                                                                                                      //
  if (goSquaredId = Settings.get("goSquaredId")) {                                                                  // 36
    window.GoSquared = {};                                                                                          // 37
    GoSquared.acct = goSquaredId;                                                                                   // 38
    window._gstc_lt = +new Date();                                                                                  // 39
    var d = document,                                                                                               // 40
        g = d.createElement("script");                                                                              //
    g.type = "text/javascript";                                                                                     // 41
    g.src = "//d1l6p2sc9645hc.cloudfront.net/tracker.js";                                                           // 42
    var s = d.getElementsByTagName("script")[0];                                                                    // 43
    s.parentNode.insertBefore(g, s);                                                                                // 44
  }                                                                                                                 //
                                                                                                                    //
  // Clicky                                                                                                         //
  if (clickyId = Settings.get("clickyId")) {                                                                        // 48
    clicky_site_ids = [];                                                                                           // 49
    clicky_site_ids.push(clickyId);                                                                                 // 50
    (function () {                                                                                                  // 51
      var s = document.createElement('script');                                                                     // 52
      s.type = 'text/javascript';                                                                                   // 53
      s.async = true;                                                                                               // 54
      s.src = '//static.getclicky.com/js';                                                                          // 55
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);        // 56
    })();                                                                                                           //
  }                                                                                                                 //
                                                                                                                    //
  // Google Analytics                                                                                               //
  if (googleAnalyticsId = Settings.get("googleAnalyticsId")) {                                                      // 61
                                                                                                                    //
    (function (i, s, o, g, r, a, m) {                                                                               // 63
      i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {                                                   // 63
        (i[r].q = i[r].q || []).push(arguments);                                                                    // 64
      }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');                                //
                                                                                                                    //
    var cookieDomain = document.domain === "localhost" ? "none" : "auto";                                           // 68
                                                                                                                    //
    window.ga('create', googleAnalyticsId, cookieDomain);                                                           // 70
  }                                                                                                                 //
                                                                                                                    //
  // trigger first request once analytics are initialized                                                           //
  Events.analyticsRequest();                                                                                        // 75
};                                                                                                                  //
                                                                                                                    //
Events.analyticsRequest = function () {                                                                             // 79
                                                                                                                    //
  // Google Analytics                                                                                               //
  if (typeof window.ga !== 'undefined') {                                                                           // 82
    window.ga('send', 'pageview', {                                                                                 // 83
      'page': FlowRouter.current().path                                                                             // 84
    });                                                                                                             //
  }                                                                                                                 //
                                                                                                                    //
  // Mixpanel                                                                                                       //
  if (typeof mixpanel !== 'undefined' && typeof mixpanel.people !== 'undefined') {                                  // 89
    if (Meteor.user()) {                                                                                            // 90
      var currentUserEmail = Users.getCurrentUserEmail();                                                           // 91
      mixpanel.people.identify(currentUserEmail);                                                                   // 92
      mixpanel.people.set({                                                                                         // 93
        'username': Users.getDisplayName(Meteor.user()),                                                            // 94
        '$last_login': new Date(),                                                                                  // 95
        '$created': moment(Meteor.user().createdAt)._d,                                                             // 96
        '$email': currentUserEmail                                                                                  // 97
      });                                                                                                           //
      mixpanel.register({                                                                                           // 99
        'username': Users.getDisplayName(Meteor.user()),                                                            // 100
        'createdAt': moment(Meteor.user().createdAt)._d,                                                            // 101
        'email': currentUserEmail                                                                                   // 102
      });                                                                                                           //
      mixpanel.name_tag(currentUserEmail);                                                                          // 104
    }                                                                                                               //
  }                                                                                                                 //
                                                                                                                    //
  // GoSquared                                                                                                      //
  if (typeof GoSquared !== 'undefined' && typeof GoSquared.DefaultTracker !== 'undefined') {                        // 109
    GoSquared.DefaultTracker.TrackView(FlowRouter.current().path, FlowRouter.current().route.name);                 // 110
  }                                                                                                                 //
                                                                                                                    //
  // Clicky                                                                                                         //
  if (typeof clicky !== 'undefined') {                                                                              // 114
    clicky.log(encodeURIComponent(FlowRouter.current().path), FlowRouter.current().route.name, "pageview");         // 115
  }                                                                                                                 //
};                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:events'] = {
  Events: Events
};

})();
