(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Herald = Package['kestanous:herald'].Herald;
var _ = Package.underscore._;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/kestanous_herald-email/packages/kestanous_herald-email.js                                        //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                     //    // 4
// packages/kestanous:herald-email/lib/notifications-email.js                                          //    // 5
//                                                                                                     //    // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                       //    // 8
var runner = {                                                                                         // 1  // 9
  name: 'email',                                                                                       // 2  // 10
  where: ['server']                                                                                    // 3  // 11
}                                                                                                      // 4  // 12
                                                                                                       // 5  // 13
runner.run = function (notification, user) {                                                           // 6  // 14
  this.emailRunner.call(notification, user);                                                           // 7  // 15
};                                                                                                     // 8  // 16
                                                                                                       // 9  // 17
runner.check = function () {                                                                           // 10
  if (!_.isFunction(this.emailRunner)) throw new Error('Herald-Email: emailRunner must be a function') // 11
};                                                                                                     // 12
                                                                                                       // 13
                                                                                                       // 14
Herald.addRunner(runner);                                                                              // 15
                                                                                                       // 16
// == TODO: emailSummery ==                                                                            // 17
// Herald.addRunner('emailSummery', function (notification, user) { /* noop */ });                     // 18
//                                                                                                     // 19
// Fire email summery based on some timer/date-time.                                                   // 20
// Will get all applicable notifications from user and summarize them.                                 // 21
                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////    // 31
                                                                                                             // 32
}).call(this);                                                                                               // 33
                                                                                                             // 34
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kestanous:herald-email'] = {};

})();

//# sourceMappingURL=kestanous_herald-email.js.map
