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

/* Package-scope variables */
var Pages, translations;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/pages.js                                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Pages = new Mongo.Collection('pages');                                                        // 1
                                                                                              //
Telescope.subscriptions.preload('pages');                                                     // 3
                                                                                              //
Pages.schema = new SimpleSchema({                                                             // 5
  title: {                                                                                    // 6
    type: String                                                                              // 7
  },                                                                                          //
  slug: {                                                                                     // 9
    type: String,                                                                             // 10
    optional: true                                                                            // 11
  },                                                                                          //
  content: {                                                                                  // 13
    type: String,                                                                             // 14
    autoform: {                                                                               // 15
      rows: 10                                                                                // 16
    }                                                                                         //
  },                                                                                          //
  order: {                                                                                    // 19
    type: Number,                                                                             // 20
    optional: true                                                                            // 21
  }                                                                                           //
});                                                                                           //
                                                                                              //
Meteor.startup(function () {                                                                  // 25
  Pages.internationalize();                                                                   // 26
});                                                                                           //
                                                                                              //
Pages.attachSchema(Pages.schema);                                                             // 29
                                                                                              //
Pages.before.insert(function (userId, doc) {                                                  // 31
  // if no slug has been provided, generate one                                               //
  if (!doc.slug) doc.slug = Telescope.utils.slugify(doc.title);                               // 33
});                                                                                           //
                                                                                              //
Telescope.modules.add("primaryNav", {                                                         // 37
  template: "pages_menu",                                                                     // 38
  order: 5                                                                                    // 39
});                                                                                           //
                                                                                              //
Telescope.modules.add("mobileNav", {                                                          // 42
  template: 'pages_menu',                                                                     // 43
  order: 5                                                                                    // 44
});                                                                                           //
                                                                                              //
Meteor.startup(function () {                                                                  // 47
  Pages.allow({                                                                               // 48
    insert: Users.is.adminById,                                                               // 49
    update: Users.is.adminById,                                                               // 50
    remove: Users.is.adminById                                                                // 51
  });                                                                                         //
                                                                                              //
  Meteor.methods({                                                                            // 54
    insertPage: function (pageTitle, pageContent) {                                           // 55
      check(pageTitle, String);                                                               // 56
      check(pageContent, String);                                                             // 57
      return Feeds.insert({ title: pageTitle, content: pageContent });                        // 58
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
                                                                                              //
Telescope.menuItems.add("adminMenu", {                                                        // 63
  route: 'adminPages',                                                                        // 64
  label: "pages",                                                                             // 65
  description: "manage_static_pages"                                                          // 66
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/routes.js                                                     //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              //
Telescope.adminRoutes.route('/pages', {                                                       // 2
  name: "adminPages",                                                                         // 3
  action: function (params, queryParams) {                                                    // 4
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "pages" });                  // 5
  }                                                                                           //
});                                                                                           //
                                                                                              //
FlowRouter.route('/page/:slug', {                                                             // 9
  name: "page",                                                                               // 10
  action: function (params, queryParams) {                                                    // 11
    BlazeLayout.render("layout", { main: "page" });                                           // 12
  }                                                                                           //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/template.page.js                             //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("page");                                                                 // 2
Template["page"] = new Template("Template.page", (function() {                                // 3
  var view = this;                                                                            // 4
  return Spacebars.With(function() {                                                          // 5
    return Spacebars.call(view.lookup("page"));                                               // 6
  }, function() {                                                                             // 7
    return [ "\n    ", HTML.DIV({                                                             // 8
      "class": "page-container"                                                               // 9
    }, "\n      ", HTML.H2({                                                                  // 10
      "class": "page-title"                                                                   // 11
    }, Blaze.View("lookup:title", function() {                                                // 12
      return Spacebars.mustache(view.lookup("title"));                                        // 13
    })), "\n      ", HTML.DIV({                                                               // 14
      "class": "page-body markdown",                                                          // 15
      "aria-live": "polite"                                                                   // 16
    }, "\n        ", Spacebars.include(view.lookupTemplate("markdown"), function() {          // 17
      return Blaze.View("lookup:content", function() {                                        // 18
        return Spacebars.mustache(view.lookup("content"));                                    // 19
      });                                                                                     // 20
    }), "\n      "), "\n    "), "\n  " ];                                                     // 21
  });                                                                                         // 22
}));                                                                                          // 23
                                                                                              // 24
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/page.js                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Template.page.onCreated(function () {                                                         // 1
  Telescope.SEO.setTitle(Pages.findOne({ slug: FlowRouter.getParam("slug") }).title);         // 2
});                                                                                           //
                                                                                              //
Template.page.helpers({                                                                       // 5
  page: function () {                                                                         // 6
    return Pages.findOne({ slug: FlowRouter.getParam("slug") });                              // 7
  }                                                                                           //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/template.page_item.js                        //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("page_item");                                                            // 2
Template["page_item"] = new Template("Template.page_item", (function() {                      // 3
  var view = this;                                                                            // 4
  return HTML.DIV({                                                                           // 5
    "class": "form-module"                                                                    // 6
  }, "\n    ", Blaze._TemplateWith(function() {                                               // 7
    return {                                                                                  // 8
      collection: Spacebars.call("Pages"),                                                    // 9
      id: Spacebars.call(view.lookup("formId")),                                              // 10
      type: Spacebars.call("update"),                                                         // 11
      doc: Spacebars.call(view.lookup(".")),                                                  // 12
      "label-class": Spacebars.call("control-label"),                                         // 13
      "input-col-class": Spacebars.call("controls"),                                          // 14
      template: Spacebars.call("bootstrap-horizontal")                                        // 15
    };                                                                                        // 16
  }, function() {                                                                             // 17
    return Spacebars.include(view.lookupTemplate("quickForm"));                               // 18
  }), HTML.Raw('\n    <a href="#" class="delete-link">Delete</a>\n  '));                      // 19
}));                                                                                          // 20
                                                                                              // 21
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/page_item.js                                 //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Meteor.startup(function () {                                                                  // 1
  Template.page_item.helpers({                                                                // 2
    formId: function () {                                                                     // 3
      return 'updatePage-' + this._id;                                                        // 4
    }                                                                                         //
  });                                                                                         //
                                                                                              //
  Template.page_item.events({                                                                 // 8
    'click .delete-link': function (e, instance) {                                            // 9
      e.preventDefault();                                                                     // 10
      if (confirm("Delete page?")) {                                                          // 11
        Pages.remove(instance.data._id);                                                      // 12
      }                                                                                       //
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/template.pages.js                            //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("pages");                                                                // 2
Template["pages"] = new Template("Template.pages", (function() {                              // 3
  var view = this;                                                                            // 4
  return [ HTML.DIV({                                                                         // 5
    "class": "form-well add-page"                                                             // 6
  }, "\n    ", HTML.Raw("<h3>Add new page:</h3>"), "\n    ", Blaze._TemplateWith(function() {
    return {                                                                                  // 8
      collection: Spacebars.call("Pages"),                                                    // 9
      id: Spacebars.call("insertPageForm"),                                                   // 10
      type: Spacebars.call("insert"),                                                         // 11
      "label-class": Spacebars.call("control-label"),                                         // 12
      "input-col-class": Spacebars.call("controls"),                                          // 13
      template: Spacebars.call("bootstrap-horizontal")                                        // 14
    };                                                                                        // 15
  }, function() {                                                                             // 16
    return Spacebars.include(view.lookupTemplate("quickForm"));                               // 17
  }), "\n  "), "\n  ", Blaze.Each(function() {                                                // 18
    return Spacebars.call(view.lookup("pages"));                                              // 19
  }, function() {                                                                             // 20
    return [ "\n    ", Spacebars.include(view.lookupTemplate("page_item")), "\n  " ];         // 21
  }) ];                                                                                       // 22
}));                                                                                          // 23
                                                                                              // 24
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/pages.js                                     //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Meteor.startup(function () {                                                                  // 1
  Template.pages.helpers({                                                                    // 2
    pages: function () {                                                                      // 3
      return Pages.find({}, { sort: { order: 1 } });                                          // 4
    }                                                                                         //
  });                                                                                         //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/template.pages_menu.js                       //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
                                                                                              // 1
Template.__checkName("pages_menu");                                                           // 2
Template["pages_menu"] = new Template("Template.pages_menu", (function() {                    // 3
  var view = this;                                                                            // 4
  return Blaze.If(function() {                                                                // 5
    return Spacebars.call(view.lookup("hasPages"));                                           // 6
  }, function() {                                                                             // 7
    return [ "\n    ", HTML.DIV({                                                             // 8
      "class": function() {                                                                   // 9
        return [ "pages-menu ", Spacebars.mustache(view.lookup("moduleClass")) ];             // 10
      }                                                                                       // 11
    }, "\n      ", Blaze.Each(function() {                                                    // 12
      return Spacebars.call(view.lookup("pages"));                                            // 13
    }, function() {                                                                           // 14
      return [ "\n        ", HTML.DIV({                                                       // 15
        "class": "pages-menu-item"                                                            // 16
      }, "\n          ", HTML.A({                                                             // 17
        href: function() {                                                                    // 18
          return Spacebars.mustache(view.lookup("pathFor"), "page", Spacebars.kw({            // 19
            slug: Spacebars.dot(view.lookup("."), "slug")                                     // 20
          }));                                                                                // 21
        }                                                                                     // 22
      }, Blaze.View("lookup:title", function() {                                              // 23
        return Spacebars.mustache(view.lookup("title"));                                      // 24
      })), "\n        "), "\n      " ];                                                       // 25
    }), "\n    "), "\n  " ];                                                                  // 26
  });                                                                                         // 27
}));                                                                                          // 28
                                                                                              // 29
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/lib/client/templates/pages_menu.js                                //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
Template.pages_menu.helpers({                                                                 // 1
  hasPages: function () {                                                                     // 2
    return Pages.find().count();                                                              // 3
  },                                                                                          //
  pages: function () {                                                                        // 5
    return Pages.find();                                                                      // 6
  }                                                                                           //
});                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/ar.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ar"] = ["Arabic","العربية"];                                         // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                        // 10
                                                                                              // 11
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/bg.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["bg"] = ["Bulgarian","Български"];                                    // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/cs.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/da.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                           // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/de.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/el.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["el"] = ["Greek","Ελληνικά"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/en.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
// integrate the fallback language translations                                               // 8
translations = {};                                                                            // 9
translations[namespace] = {"pages":"Pages","manage_static_pages":"Manage static pages"};      // 10
TAPi18n._loadLangFileObject("en", translations);                                              // 11
                                                                                              // 12
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/es.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/et.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/fr.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                               // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/hu.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["hu"] = ["Hungarian","Magyar"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/id.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                            // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/it.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/ja.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ja"] = ["Japanese","日本語"];                                           // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/kk.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["kk"] = ["Kazakh","Қазақ тілі"];                                      // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/ko.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ko"] = ["Korean","한국어"];                                             // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/nl.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                       // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/pl.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["pl"] = ["Polish","Polski"];                                          // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/pt-BR.i18n.js                        //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["pt-BR"] = ["Portuguese (Brazil)","Português do Brasil"];             // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/ro.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ro"] = ["Romanian","Română"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/ru.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/sl.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["sl"] = ["Slovenian","slovenščina"];                                  // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/sv.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["sv"] = ["Swedish","Svenska"];                                        // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/th.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["th"] = ["Thai","ไทย"];                                               // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/tr.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                         // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/vi.i18n.js                           //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                  // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/telescope_pages/packages/telescope_pagesi18n/zh-CN.i18n.js                        //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
var _ = Package.underscore._,                                                                 // 1
    package_name = "project",                                                                 // 2
    namespace = "project";                                                                    // 3
                                                                                              // 4
if (package_name != "project") {                                                              // 5
    namespace = TAPi18n.packages[package_name].namespace;                                     // 6
}                                                                                             // 7
TAPi18n.languages_names["zh-CN"] = ["Chinese (China)","简体中文"];                                // 8
                                                                                              // 9
////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:pages'] = {
  Pages: Pages
};

})();
