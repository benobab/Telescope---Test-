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
var Date = Package['es5-shim'].Date;
var parseInt = Package['es5-shim'].parseInt;
var ECMAScript = Package.ecmascript.ECMAScript;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var npmLoadScript, DocHead;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/kadira_dochead/package.browserify.js                                                         //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
npmLoadScript = require('load-script');                                                                  // 1
                                                                                                         // 2
},{"load-script":2}],2:[function(require,module,exports){                                                //
                                                                                                         // 1
module.exports = function load (src, opts, cb) {                                                         // 2
  var head = document.head || document.getElementsByTagName('head')[0]                                   // 3
  var script = document.createElement('script')                                                          // 4
                                                                                                         // 5
  if (typeof opts === 'function') {                                                                      // 6
    cb = opts                                                                                            // 7
    opts = {}                                                                                            // 8
  }                                                                                                      // 9
                                                                                                         // 10
  opts = opts || {}                                                                                      // 11
  cb = cb || function() {}                                                                               // 12
                                                                                                         // 13
  script.type = opts.type || 'text/javascript'                                                           // 14
  script.charset = opts.charset || 'utf8';                                                               // 15
  script.async = 'async' in opts ? !!opts.async : true                                                   // 16
  script.src = src                                                                                       // 17
                                                                                                         // 18
  if (opts.attrs) {                                                                                      // 19
    setAttributes(script, opts.attrs)                                                                    // 20
  }                                                                                                      // 21
                                                                                                         // 22
  if (opts.text) {                                                                                       // 23
    script.text = '' + opts.text                                                                         // 24
  }                                                                                                      // 25
                                                                                                         // 26
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd                                                    // 27
  onend(script, cb)                                                                                      // 28
                                                                                                         // 29
  // some good legacy browsers (firefox) fail the 'in' detection above                                   // 30
  // so as a fallback we always set onload                                                               // 31
  // old IE will ignore this and new IE will set onload                                                  // 32
  if (!script.onload) {                                                                                  // 33
    stdOnEnd(script, cb);                                                                                // 34
  }                                                                                                      // 35
                                                                                                         // 36
  head.appendChild(script)                                                                               // 37
}                                                                                                        // 38
                                                                                                         // 39
function setAttributes(script, attrs) {                                                                  // 40
  for (var attr in attrs) {                                                                              // 41
    script.setAttribute(attr, attrs[attr]);                                                              // 42
  }                                                                                                      // 43
}                                                                                                        // 44
                                                                                                         // 45
function stdOnEnd (script, cb) {                                                                         // 46
  script.onload = function () {                                                                          // 47
    this.onerror = this.onload = null                                                                    // 48
    cb(null, script)                                                                                     // 49
  }                                                                                                      // 50
  script.onerror = function () {                                                                         // 51
    // this.onload = null here is necessary                                                              // 52
    // because even IE9 works not like others                                                            // 53
    this.onerror = this.onload = null                                                                    // 54
    cb(new Error('Failed to load ' + this.src), script)                                                  // 55
  }                                                                                                      // 56
}                                                                                                        // 57
                                                                                                         // 58
function ieOnEnd (script, cb) {                                                                          // 59
  script.onreadystatechange = function () {                                                              // 60
    if (this.readyState != 'complete' && this.readyState != 'loaded') return                             // 61
    this.onreadystatechange = null                                                                       // 62
    cb(null, script) // there is no way to catch loading errors in IE8                                   // 63
  }                                                                                                      // 64
}                                                                                                        // 65
                                                                                                         // 66
},{}]},{},[1])                                                                                           //
//# sourceMappingURL=/packages/kadira_dochead/package.browserify.js                                      //
                                                                                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/kadira_dochead/lib/both.js                                                                   //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var FlowRouter = null;                                                                                   // 1
if (Package['kadira:flow-router-ssr']) {                                                                 // 2
  FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;                                             // 3
}                                                                                                        //
                                                                                                         //
DocHead = {                                                                                              // 6
  currentTitle: null,                                                                                    // 7
  setTitle: function (title) {                                                                           // 8
    if (Meteor.isClient) {                                                                               // 9
      document.title = title;                                                                            // 10
    } else {                                                                                             //
      this.currentTitle = title;                                                                         // 12
      var titleHtml = '<title>' + title + '</title>';                                                    // 13
      this._addToHead(titleHtml);                                                                        // 14
    }                                                                                                    //
  },                                                                                                     //
  addMeta: function (info) {                                                                             // 17
    this._addTag(info, 'meta');                                                                          // 18
  },                                                                                                     //
  addLink: function (info) {                                                                             // 20
    this._addTag(info, 'link');                                                                          // 21
  },                                                                                                     //
  getTitle: function () {                                                                                // 23
    if (Meteor.isClient) {                                                                               // 24
      return document.title;                                                                             // 25
    }                                                                                                    //
    return this.currentTitle;                                                                            // 27
  },                                                                                                     //
  addLdJsonScript: function (jsonObj) {                                                                  // 29
    var strObj = JSON.stringify(jsonObj);                                                                // 30
    this._addLdJsonScript(strObj);                                                                       // 31
  },                                                                                                     //
  loadScript: function (url, options, callback) {                                                        // 33
    if (Meteor.isClient) {                                                                               // 34
      npmLoadScript(url, options, callback);                                                             // 35
    }                                                                                                    //
  },                                                                                                     //
  _addTag: function (info, tag) {                                                                        // 38
    var meta = this._buildTag(info, tag);                                                                // 39
    if (Meteor.isClient) {                                                                               // 40
      document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', meta);                    // 41
    } else {                                                                                             //
      this._addToHead(meta);                                                                             // 43
    }                                                                                                    //
  },                                                                                                     //
  _addToHead: function (html) {                                                                          // 46
    // only work there is kadira:flow-router-ssr                                                         //
    if (!FlowRouter) {                                                                                   // 48
      return;                                                                                            // 49
    }                                                                                                    //
    var ssrContext = FlowRouter.ssrContext.get();                                                        // 51
    if (ssrContext) {                                                                                    // 52
      ssrContext.addToHead(html);                                                                        // 53
    }                                                                                                    //
  },                                                                                                     //
  _buildTag: function (metaInfo, type) {                                                                 // 56
    var props = "";                                                                                      // 57
    for (var key in babelHelpers.sanitizeForInObject(metaInfo)) {                                        // 58
      props += key + '="' + metaInfo[key] + '" ';                                                        // 59
    }                                                                                                    //
    props += 'dochead="1"';                                                                              // 61
    var meta = '<' + type + ' ' + props + '/>';                                                          // 62
    return meta;                                                                                         // 63
  },                                                                                                     //
  _addLdJsonScript: function (stringifiedObject) {                                                       // 65
    var scriptTag = '<script type="application/ld+json" dochead="1">' + stringifiedObject + '</script>';
    if (Meteor.isClient) {                                                                               // 67
      document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', scriptTag);               // 68
    } else {                                                                                             //
      this._addToHead(scriptTag);                                                                        // 70
    }                                                                                                    //
  },                                                                                                     //
  removeDocHeadAddedTags: function () {                                                                  // 73
    if (Meteor.isClient) {                                                                               // 74
      var elements = document.querySelectorAll('[dochead="1"]');                                         // 75
      // Elements is not an array. It's an iterator and es5-shim                                         //
      // does not add .forEach method to it                                                              //
      // That's why we need to use a for-in loop                                                         //
      for (var key in babelHelpers.sanitizeForInObject(elements)) {                                      // 79
        var element = elements[key];                                                                     // 80
        if (element.parentNode) {                                                                        // 81
          element.parentNode.removeChild(element);                                                       // 82
        }                                                                                                //
      }                                                                                                  //
    }                                                                                                    //
  }                                                                                                      //
};                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/kadira_dochead/lib/flow_router.js                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
if (Package['kadira:flow-router-ssr']) {                                                                 // 1
  var FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;                                         // 2
  // remove added tags when changing routes                                                              //
  FlowRouter.triggers.enter(function () {                                                                // 4
    Meteor.startup(DocHead.removeDocHeadAddedTags);                                                      // 5
  });                                                                                                    //
}                                                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:dochead'] = {
  DocHead: DocHead
};

})();
