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
var WebApp = Package.webapp.WebApp;
var Log = Package.logging.Log;
var Tracker = Package.deps.Tracker;
var Deps = Package.deps.Deps;
var Session = Package.session.Session;
var DDP = Package['ddp-client'].DDP;
var Mongo = Package.mongo.Mongo;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Template = Package.templating.Template;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Random = Package.random.Random;
var EJSON = Package.ejson.EJSON;
var LaunchScreen = Package['launch-screen'].LaunchScreen;
var HTML = Package.htmljs.HTML;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/utilities_onsubscribed/lib/onsubscribed.js               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Template.prototype.onSubscribed = function(callback) {               // 1
  var template = this;                                               // 2
   template.onCreated(function() {                                   // 3
      var templateInstance = this;                                   // 4
      templateInstance.autorun(function(computation) {               // 5
         if (templateInstance.subscriptionsReady()) {                // 6
            callback.bind(templateInstance)();                       // 7
            computation.stop();                                      // 8
         }                                                           // 9
      });                                                            // 10
   });                                                               // 11
};                                                                   // 12
                                                                     // 13
Template.prototype.onDataChanged = function(callback) {              // 14
  var template = this;                                               // 15
  template.onCreated(function () {                                   // 16
    var templateInstance = this;                                     // 17
    templateInstance.autorun(function(computation) {                 // 18
      var newData = Template.currentData();                          // 19
        if (!computation.firstRun) {                                 // 20
          callback.bind(templateInstance)(newData);                  // 21
        }                                                            // 22
      });                                                            // 23
  });                                                                // 24
}                                                                    // 25
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['utilities:onsubscribed'] = {};

})();
