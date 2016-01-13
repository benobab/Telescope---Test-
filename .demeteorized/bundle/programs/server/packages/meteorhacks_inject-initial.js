(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var RoutePolicy = Package.routepolicy.RoutePolicy;
var EJSON = Package.ejson.EJSON;
var _ = Package.underscore._;

/* Package-scope variables */
var Inject, id;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/meteorhacks_inject-initial/packages/meteorhacks_inject-initial.js                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
(function () {                                                                                              // 1
                                                                                                            // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                   //     // 4
// packages/meteorhacks:inject-initial/lib/inject-server.js                                          //     // 5
//                                                                                                   //     // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                     //     // 8
var escapeReplaceString = function(str) {                                                            // 1   // 9
  /*                                                                                                 // 2   // 10
   * When using string.replace(str, newSubStr), the dollar sign ("$") is                             // 3   // 11
   * considered a special character in newSubStr, and needs to be escaped                            // 4   // 12
   * as "$$".  We have to do this twice, for escaping the newSubStr in                               // 5   // 13
   * this function, and for the resulting string which is passed back.                               // 6   // 14
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace // 7   // 15
   */                                                                                                // 8   // 16
   return str.replace(/\$/g, '$$$$');                                                                // 9   // 17
}                                                                                                    // 10  // 18
                                                                                                     // 11  // 19
Inject = {                                                                                           // 12  // 20
  // stores in a script type=application/ejson tag, accessed with Injected.obj('id')                 // 13  // 21
  obj: function(id, data, res) {                                                                     // 14  // 22
    this._checkForObjOrFunction(data,                                                                // 15  // 23
      'Inject.obj(id, data [,res]) expects `data` to be an Object or Function');                     // 16  // 24
                                                                                                     // 17  // 25
    if (res) {                                                                                       // 18  // 26
      this._resAssign(res, 'objList', id, data);                                                     // 19  // 27
    } else {                                                                                         // 20  // 28
      this.objList[id] = data;                                                                       // 21  // 29
    }                                                                                                // 22  // 30
  },                                                                                                 // 23  // 31
  objList: {},                                                                                       // 24  // 32
                                                                                                     // 25  // 33
  // Inserts a META called `id`, whose `content` can be accessed with Injected.meta()                // 26  // 34
  meta: function(id, data, res) {                                                                    // 27  // 35
    this._checkForTextOrFunction(data,                                                               // 28  // 36
      'Inject.meta(id, data [,res]) expects `data` to be an String or Function');                    // 29  // 37
                                                                                                     // 30  // 38
    if (res) {                                                                                       // 31  // 39
      this._resAssign(res, 'metaList', id, data);                                                    // 32  // 40
    } else {                                                                                         // 33  // 41
      this.metaList[id] = data;                                                                      // 34  // 42
    }                                                                                                // 35  // 43
  },                                                                                                 // 36  // 44
  metaList: {},                                                                                      // 37  // 45
                                                                                                     // 38  // 46
  rawHead: function(id, textOrFunc, res) {                                                           // 39  // 47
    this._checkForTextOrFunction(textOrFunc,                                                         // 40  // 48
      'Inject.rawHead(id, content [,res]) expects `content` to be an String or Function');           // 41  // 49
                                                                                                     // 42  // 50
    if (res) {                                                                                       // 43  // 51
      this._resAssign(res, 'rawHeads', id, textOrFunc);                                              // 44  // 52
    } else {                                                                                         // 45  // 53
      this.rawHeads[id] = textOrFunc;                                                                // 46  // 54
    }                                                                                                // 47  // 55
  },                                                                                                 // 48  // 56
  rawHeads: {},                                                                                      // 49  // 57
                                                                                                     // 50  // 58
  rawBody: function(id, textOrFunc, res) {                                                           // 51  // 59
    this._checkForTextOrFunction(textOrFunc,                                                         // 52  // 60
      'Inject.rawBody(id, content [,res]) expects `content` to be an String or Function');           // 53  // 61
                                                                                                     // 54  // 62
    if (res) {                                                                                       // 55  // 63
      this._resAssign(res, 'rawBodies', id, textOrFunc);                                             // 56  // 64
    } else {                                                                                         // 57  // 65
      this.rawBodies[id] = textOrFunc;                                                               // 58  // 66
    }                                                                                                // 59  // 67
  },                                                                                                 // 60  // 68
  rawBodies: {},                                                                                     // 61  // 69
                                                                                                     // 62  // 70
  // The callback receives the entire HTML page and must return a modified version                   // 63  // 71
  rawModHtml: function(id, func) {                                                                   // 64  // 72
    if (!_.isFunction(func)) {                                                                       // 65  // 73
      var message = 'Inject func id "' + id + '" should be a function, not ' + typeof(func);         // 66  // 74
      throw new Error(message);                                                                      // 67  // 75
    }                                                                                                // 68  // 76
                                                                                                     // 69  // 77
    this.rawModHtmlFuncs[id] = func;                                                                 // 70  // 78
  },                                                                                                 // 71  // 79
  rawModHtmlFuncs: {},                                                                               // 72  // 80
                                                                                                     // 73  // 81
  _injectObjects: function(html, res) {                                                              // 74  // 82
    var objs = _.extend({}, Inject.objList, res.Inject && res.Inject.objList);                       // 75  // 83
    if (_.isEmpty(objs)) {                                                                           // 76  // 84
      return html;                                                                                   // 77  // 85
    }                                                                                                // 78  // 86
                                                                                                     // 79  // 87
    var obj, injectHtml = '';                                                                        // 80  // 88
    for (id in objs) {                                                                               // 81  // 89
      obj = _.isFunction(objs[id]) ? objs[id](res) : objs[id];                                       // 82  // 90
      injectHtml += "  <script id='" + id.replace("'", '&apos;')                                     // 83  // 91
        + "' type='application/ejson'>" + EJSON.stringify(obj)                                       // 84  // 92
        + "</script>\n";                                                                             // 85  // 93
    }                                                                                                // 86  // 94
                                                                                                     // 87  // 95
    return html.replace('<head>', '<head>\n' + escapeReplaceString(injectHtml));                     // 88  // 96
  },                                                                                                 // 89  // 97
                                                                                                     // 90  // 98
  _injectMeta: function(html, res) {                                                                 // 91  // 99
    var metas = _.extend({}, Inject.metaList, res.Inject && res.Inject.metaList);                    // 92  // 100
    if (_.isEmpty(metas))                                                                            // 93  // 101
      return html;                                                                                   // 94  // 102
                                                                                                     // 95  // 103
    var injectHtml = '';                                                                             // 96  // 104
    for (id in metas) {                                                                              // 97  // 105
      var meta = this._evalToText(metas[id], res, html);                                             // 98  // 106
      injectHtml += "  <meta id='" + id.replace("'", '&apos;')                                       // 99  // 107
        + "' content='" + meta.replace("'", '&apos;') + "'>\n", res;                                 // 100
    }                                                                                                // 101
                                                                                                     // 102
    return html.replace('<head>', '<head>\n' + escapeReplaceString(injectHtml));                     // 103
  },                                                                                                 // 104
                                                                                                     // 105
  _injectHeads: function(html, res) {                                                                // 106
    var heads = _.extend({}, Inject.rawHeads, res.Inject && res.Inject.rawHeads);                    // 107
    if (_.isEmpty(heads))                                                                            // 108
      return html;                                                                                   // 109
                                                                                                     // 110
    var injectHtml = '';                                                                             // 111
    for (id in heads) {                                                                              // 112
      var head = this._evalToText(heads[id], res, html);                                             // 113
      injectHtml += head + '\n';                                                                     // 114
    }                                                                                                // 115
                                                                                                     // 116
    return html.replace('<head>', '<head>\n' + escapeReplaceString(injectHtml));                     // 117
  },                                                                                                 // 118
                                                                                                     // 119
  _injectBodies: function(html, res) {                                                               // 120
    var bodies = _.extend({}, Inject.rawBodies, res.Inject && res.Inject.rawBodies);                 // 121
    if (_.isEmpty(bodies))                                                                           // 122
      return html;                                                                                   // 123
                                                                                                     // 124
    var injectHtml = '';                                                                             // 125
    for (id in bodies) {                                                                             // 126
      var body = this._evalToText(bodies[id], res, html);                                            // 127
      injectHtml += body + '\n';                                                                     // 128
    }                                                                                                // 129
                                                                                                     // 130
    return html.replace('<body>', '<body>\n' + escapeReplaceString(injectHtml));                     // 131
  },                                                                                                 // 132
                                                                                                     // 133
  // ensure object exists and store there                                                            // 134
  _resAssign: function(res, key, id, value) {                                                        // 135
    if (!res.Inject)                                                                                 // 136
      res.Inject = {};                                                                               // 137
    if (!res.Inject[key])                                                                            // 138
      res.Inject[key] = {};                                                                          // 139
    res.Inject[key][id] = value;                                                                     // 140
  },                                                                                                 // 141
                                                                                                     // 142
  _checkForTextOrFunction: function (arg, message) {                                                 // 143
    if(!(_.isString(arg) || _.isFunction(arg))) {                                                    // 144
      throw new Error(message);                                                                      // 145
    }                                                                                                // 146
  },                                                                                                 // 147
                                                                                                     // 148
  _checkForObjOrFunction: function (arg, message) {                                                  // 149
    if(!(_.isObject(arg) || _.isFunction(arg))) {                                                    // 150
      throw new Error(message);                                                                      // 151
    }                                                                                                // 152
  },                                                                                                 // 153
                                                                                                     // 154
  // we don't handle errors here. Let them to handle in a higher level                               // 155
  _evalToText: function(textOrFunc, res, html) {                                                     // 156
    if(_.isFunction(textOrFunc)) {                                                                   // 157
      return textOrFunc(res, html);                                                                  // 158
    } else {                                                                                         // 159
      return textOrFunc;                                                                             // 160
    }                                                                                                // 161
  }                                                                                                  // 162
};                                                                                                   // 163
                                                                                                     // 164
Inject.rawModHtml('injectHeads', Inject._injectHeads.bind(Inject));                                  // 165
Inject.rawModHtml('injectMeta', Inject._injectMeta.bind(Inject));                                    // 166
Inject.rawModHtml('injectBodies', Inject._injectBodies.bind(Inject));                                // 167
Inject.rawModHtml('injectObjects', Inject._injectObjects.bind(Inject));                              // 168
                                                                                                     // 169
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 178
                                                                                                            // 179
}).call(this);                                                                                              // 180
                                                                                                            // 181
                                                                                                            // 182
                                                                                                            // 183
                                                                                                            // 184
                                                                                                            // 185
                                                                                                            // 186
(function () {                                                                                              // 187
                                                                                                            // 188
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 189
//                                                                                                   //     // 190
// packages/meteorhacks:inject-initial/lib/inject-core.js                                            //     // 191
//                                                                                                   //     // 192
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 193
                                                                                                     //     // 194
// Hijack core node API and attach data to the response dynamically                                  // 1   // 195
// We are simply using this hack because, there is no way to alter                                   // 2   // 196
// Meteor's html content on the server side                                                          // 3   // 197
                                                                                                     // 4   // 198
var http = Npm.require('http');                                                                      // 5   // 199
                                                                                                     // 6   // 200
var originalWrite = http.OutgoingMessage.prototype.write;                                            // 7   // 201
http.OutgoingMessage.prototype.write = function(chunk, encoding) {                                   // 8   // 202
  //prevent hijacking other http requests                                                            // 9   // 203
  if(!this.iInjected &&                                                                              // 10  // 204
    encoding === undefined && /^<!DOCTYPE html>/.test(chunk)) {                                      // 11  // 205
    chunk = chunk.toString();                                                                        // 12  // 206
                                                                                                     // 13  // 207
    for (id in Inject.rawModHtmlFuncs) {                                                             // 14  // 208
      chunk = Inject.rawModHtmlFuncs[id](chunk, this);                                               // 15  // 209
      if (!_.isString(chunk)) {                                                                      // 16  // 210
        throw new Error('Inject func id "' + id + '" must return HTML, not '                         // 17  // 211
          + typeof(chunk) + '\n' + JSON.stringify(chunk, null, 2));                                  // 18  // 212
      }                                                                                              // 19  // 213
    }                                                                                                // 20  // 214
                                                                                                     // 21  // 215
    this.iInjected = true;                                                                           // 22  // 216
  }                                                                                                  // 23  // 217
                                                                                                     // 24  // 218
  originalWrite.call(this, chunk, encoding);                                                         // 25  // 219
};                                                                                                   // 26  // 220
                                                                                                     // 27  // 221
//meteor algorithm to check if this is a meteor serving http request or not                          // 28  // 222
Inject.appUrl = function(url) {                                                                      // 29  // 223
  if (url === '/favicon.ico' || url === '/robots.txt')                                               // 30  // 224
    return false;                                                                                    // 31  // 225
                                                                                                     // 32  // 226
  // NOTE: app.manifest is not a web standard like favicon.ico and                                   // 33  // 227
  // robots.txt. It is a file id we have chosen to use for HTML5                                     // 34  // 228
  // appcache URLs. It is included here to prevent using an appcache                                 // 35  // 229
  // then removing it from poisoning an app permanently. Eventually,                                 // 36  // 230
  // once we have server side routing, this won't be needed as                                       // 37  // 231
  // unknown URLs with return a 404 automatically.                                                   // 38  // 232
  if (url === '/app.manifest')                                                                       // 39  // 233
    return false;                                                                                    // 40  // 234
                                                                                                     // 41  // 235
  // Avoid serving app HTML for declared routes such as /sockjs/.                                    // 42  // 236
  if (typeof(RoutePolicy) != 'undefined' && RoutePolicy.classify(url))                               // 43  // 237
    return false;                                                                                    // 44  // 238
                                                                                                     // 45  // 239
  // we currently return app HTML on all URLs by default                                             // 46  // 240
  return true;                                                                                       // 47  // 241
};                                                                                                   // 48  // 242
                                                                                                     // 49  // 243
///////////////////////////////////////////////////////////////////////////////////////////////////////     // 244
                                                                                                            // 245
}).call(this);                                                                                              // 246
                                                                                                            // 247
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteorhacks:inject-initial'] = {
  Inject: Inject
};

})();

//# sourceMappingURL=meteorhacks_inject-initial.js.map
