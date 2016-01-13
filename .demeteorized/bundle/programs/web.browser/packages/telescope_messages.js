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
var Messages;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/modules.js                                             //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Telescope.modules.add("contentTop", {                                                     // 1
  template: "messages",                                                                   // 2
  order: 1                                                                                // 3
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/client/messages.js                                     //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Messages = {                                                                              // 1
  // Local (client-only) collection                                                       //
  collection: new Meteor.Collection(null),                                                // 3
                                                                                          //
  flash: function (message, type) {                                                       // 5
    type = typeof type === 'undefined' ? 'error' : type;                                  // 6
    // Store errors in the local collection                                               //
    this.collection.insert({ message: message, type: type, seen: false, show: true });    // 8
  },                                                                                      //
                                                                                          //
  clearSeen: function () {                                                                // 11
    this.collection.update({ seen: true }, { $set: { show: false } }, { multi: true });   // 12
  }                                                                                       //
};                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/client/templates/template.messages.js                  //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("messages");                                                         // 2
Template["messages"] = new Template("Template.messages", (function() {                    // 3
  var view = this;                                                                        // 4
  return HTML.DIV({                                                                       // 5
    "class": "messages"                                                                   // 6
  }, "\n  	", Blaze.Each(function() {                                                     // 7
    return Spacebars.call(view.lookup("messages"));                                       // 8
  }, function() {                                                                         // 9
    return [ "\n  		", Spacebars.include(view.lookupTemplate("message_item")), "\n  	" ];
  }), "\n  ");                                                                            // 11
}));                                                                                      // 12
                                                                                          // 13
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/client/templates/messages.js                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Template.messages.helpers({                                                               // 1
  messages: function () {                                                                 // 2
    return Messages.collection.find({ show: true });                                      // 3
  }                                                                                       //
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/client/templates/template.message_item.js              //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("message_item");                                                     // 2
Template["message_item"] = new Template("Template.message_item", (function() {            // 3
  var view = this;                                                                        // 4
  return Blaze.If(function() {                                                            // 5
    return Spacebars.call(view.lookup("show"));                                           // 6
  }, function() {                                                                         // 7
    return [ "\n    ", HTML.DIV({                                                         // 8
      "class": "grid"                                                                     // 9
    }, "\n      ", HTML.DIV({                                                             // 10
      "class": function() {                                                               // 11
        return [ "error ", Spacebars.mustache(view.lookup("type")), "-message module" ];  // 12
      }                                                                                   // 13
    }, "\n        ", Blaze.View("lookup:message", function() {                            // 14
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));               // 15
    }), "\n      "), "\n    "), "\n  " ];                                                 // 16
  });                                                                                     // 17
}));                                                                                      // 18
                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/telescope_messages/lib/client/templates/message_item.js                       //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Template.message_item.onCreated(function () {                                             // 1
	var messageId = this.data._id;                                                           // 2
                                                                                          //
	Meteor.setTimeout(function () {                                                          // 4
		Messages.collection.update(messageId, { $set: { seen: true } });                        // 5
	}, 100);                                                                                 //
});                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:messages'] = {
  Messages: Messages
};

})();
