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
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var Counts;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/tmeasday_publish-counts/packages/tmeasday_publish-counts.js                  //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
(function () {                                                                           // 1
                                                                                         // 2
/////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                 //    // 4
// packages/tmeasday:publish-counts/client/publish-counts.js                       //    // 5
//                                                                                 //    // 6
/////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                   //    // 8
Counts = new Mongo.Collection('counts');                                           // 1  // 9
                                                                                   // 2  // 10
Counts.get = function countsGet (name) {                                           // 3  // 11
  var count = this.findOne(name);                                                  // 4  // 12
  return count && count.count || 0;                                                // 5  // 13
};                                                                                 // 6  // 14
                                                                                   // 7  // 15
Counts.has = function countsHas (name) {                                           // 8  // 16
  return !!this.findOne(name);                                                     // 9  // 17
}                                                                                  // 10
                                                                                   // 11
if (Package.templating) {                                                          // 12
  Package.templating.Template.registerHelper('getPublishedCount', function(name) { // 13
    return Counts.get(name);                                                       // 14
  });                                                                              // 15
}                                                                                  // 16
                                                                                   // 17
/////////////////////////////////////////////////////////////////////////////////////    // 26
                                                                                         // 27
}).call(this);                                                                           // 28
                                                                                         // 29
///////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tmeasday:publish-counts'] = {
  Counts: Counts
};

})();
