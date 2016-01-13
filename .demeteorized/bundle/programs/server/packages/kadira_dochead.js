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
var DocHead;

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


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['kadira:dochead'] = {
  DocHead: DocHead
};

})();

//# sourceMappingURL=kadira_dochead.js.map
