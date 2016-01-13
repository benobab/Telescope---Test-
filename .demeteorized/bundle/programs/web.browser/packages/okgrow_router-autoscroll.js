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
var Promise = Package.promise.Promise;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Reload = Package.reload.Reload;

/* Package-scope variables */
var hcp, HotCodePush, RouterAutoscroll;

(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/okgrow_router-autoscroll/client/hot-code-push.js                    //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
//named reactive-dict are persisted across hot code push                        // 1
hcp = new ReactiveDict("okgrow-hot-code-push");                                 // 2
                                                                                // 3
var fakeStartPromise = {                                                        // 4
  'then': function (actionFn) {                                                 // 5
    //debug("scheduled begin and end hook")                                     // 6
    hcp.set("has-hcp-hook", true);                                              // 7
    Reload._onMigrate(function () {                                             // 8
      try {                                                                     // 9
        actionFn()                                                              // 10
      } catch(ex) {;}                                                           // 11
      return [true];                                                            // 12
    });                                                                         // 13
    return fakeStartPromise;                                                    // 14
  }                                                                             // 15
};                                                                              // 16
                                                                                // 17
HotCodePush = {                                                                 // 18
  start: fakeStartPromise,                                                      // 19
  end: new Promise(function (resolve) {                                         // 20
    hcp.set("has-hcp-hook", true);                                              // 21
    window.addEventListener("load", function () {                               // 22
      //debug("detected window load")                                           // 23
      if( hcp.get("has-hcp-hook") ){                                            // 24
        //debug("HotCodePush.end promise resolving");                           // 25
        hcp.set("has-hcp-hook", undefined);                                     // 26
        resolve(true);                                                          // 27
      }                                                                         // 28
    });                                                                         // 29
  })                                                                            // 30
};                                                                              // 31
                                                                                // 32
function debug(msg) {                                                           // 33
  console.info(msg);                                                            // 34
}                                                                               // 35
                                                                                // 36
//////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
// packages/okgrow_router-autoscroll/client/router-autoscroll.js                //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////
                                                                                //
RouterAutoscroll = {                                                            // 1
  animationDuration: 200,                                                       // 2
};                                                                              // 3
                                                                                // 4
var backToPosition;                                                             // 5
// Saved positions will survive a hot code push                                 // 6
var scrollPositions = new ReactiveDict("okgrow-router-autoscroll");             // 7
                                                                                // 8
function saveScrollPosition () {                                                // 9
  scrollPositions.set(window.location.href, $(window).scrollTop());             // 10
};                                                                              // 11
                                                                                // 12
//TODO use history state so we don't litter                                     // 13
window.onpopstate = function () {                                               // 14
  backToPosition = scrollPositions.get(window.location.href);                   // 15
};                                                                              // 16
                                                                                // 17
// Scroll to the right place after changing routes. "The right place" is:       // 18
// 1. The previous position if we're returning via the back button              // 19
// 2. The element whose id is specified in the URL hash                         // 20
// 3. The top of page otherwise                                                 // 21
function getScrollToPosition () {                                               // 22
  if (backToPosition) {                                                         // 23
    var oldPosition = backToPosition;                                           // 24
    backToPosition = undefined;                                                 // 25
    return oldPosition;                                                         // 26
  }                                                                             // 27
                                                                                // 28
  var hash = window.location.hash;                                              // 29
  var $hash;                                                                    // 30
  try{                                                                          // 31
    //HTML5 allows all kinds of ids, so we can't whitelist characters, only     // 32
    //decide the hash doesn't represent a DOM id if we fail                     // 33
    $hash = $(hash);                                                            // 34
  } catch (ex) {                                                                // 35
    $hash = [];                                                                 // 36
  }                                                                             // 37
                                                                                // 38
  if(hash.indexOf('maintainScroll=1') > -1)                                     // 39
    return undefined;                                                           // 40
                                                                                // 41
  if ($hash.length)                                                             // 42
    return $hash.offset().top;                                                  // 43
                                                                                // 44
  return 0;                                                                     // 45
}                                                                               // 46
                                                                                // 47
//Do the scroll, after the DOM update so that the position can be correct       // 48
var scheduleScroll = function () {                                              // 49
  Tracker.afterFlush(function () {                                              // 50
    var position = getScrollToPosition();                                       // 51
    scrollTo(position);                                                         // 52
  });                                                                           // 53
};                                                                              // 54
                                                                                // 55
var flowScroll = function (newRoute) {                                          // 56
  if(newRoute.context.pathname.indexOf("#") == -1)                              // 57
    scrollTo(0);                                                                // 58
  else                                                                          // 59
    scheduleScroll();                                                           // 60
}                                                                               // 61
                                                                                // 62
function ironWhenReady (callFn) {                                               // 63
  return function () {                                                          // 64
    var self = this;                                                            // 65
    self.next();                                                                // 66
    // XXX in iron, why do we abort if not ready, shouldn't we try once ready?  // 67
    if (self.ready()) callFn();                                                 // 68
  }                                                                             // 69
}                                                                               // 70
                                                                                // 71
function scrollTo (position) {                                                  // 72
  $('body,html').animate({                                                      // 73
    scrollTop: position                                                         // 74
  }, RouterAutoscroll.animationDuration);                                       // 75
}                                                                               // 76
                                                                                // 77
if (Package['iron:router']) {                                                   // 78
  Package['iron:router'].Router.onRun(ironWhenReady(scheduleScroll));           // 79
  Package['iron:router'].Router.onStop(saveScrollPosition);                     // 80
}                                                                               // 81
                                                                                // 82
if (Package["kadira:flow-router"]) {                                            // 83
  Package["kadira:flow-router"].FlowRouter.triggers.enter([flowScroll]);        // 84
  Package["kadira:flow-router"].FlowRouter.triggers.exit([saveScrollPosition]);
}                                                                               // 86
                                                                                // 87
HotCodePush.start.then(function () {                                            // 88
  var currentScroll = $(window).scrollTop();                                    // 89
  scrollPositions.set("HotCodePushScrollPosition", currentScroll);              // 90
});                                                                             // 91
                                                                                // 92
HotCodePush.end.then(function () {                                              // 93
  backToPosition = scrollPositions.get("HotCodePushScrollPosition");            // 94
  if (backToPosition) {                                                         // 95
    scheduleScroll();                                                           // 96
  }                                                                             // 97
})                                                                              // 98
                                                                                // 99
RouterAutoscroll.scrollPositions = scrollPositions;                             // 100
                                                                                // 101
//////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['okgrow:router-autoscroll'] = {
  RouterAutoscroll: RouterAutoscroll
};

})();
