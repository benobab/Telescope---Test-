(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;

/* Package-scope variables */
var makeErrorByStatus, encodeParams, encodeString, buildUrl, populateData;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/aldeed_http/packages/aldeed_http.js                                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
(function () {                                                                            // 1
                                                                                          // 2
/////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                 //     // 4
// packages/aldeed:http/http-extras-common.js                                      //     // 5
//                                                                                 //     // 6
/////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                   //     // 8
makeErrorByStatus = function(statusCode, content) {                                // 1   // 9
  var MAX_LENGTH = 500; // if you change this, also change the appropriate test    // 2   // 10
                                                                                   // 3   // 11
  var truncate = function(str, length) {                                           // 4   // 12
    return str.length > length ? str.slice(0, length) + '...' : str;               // 5   // 13
  };                                                                               // 6   // 14
                                                                                   // 7   // 15
  var message = "failed [" + statusCode + "]";                                     // 8   // 16
  if (content) {                                                                   // 9   // 17
    try {                                                                          // 10  // 18
      message += " " + truncate(content.replace(/\n/g, " "), MAX_LENGTH);          // 11  // 19
    }                                                                              // 12  // 20
    catch (error) {                                                                // 13  // 21
      message += " Response is not of type String ";                               // 14  // 22
    }                                                                              // 15  // 23
  }                                                                                // 16  // 24
                                                                                   // 17  // 25
  return new Error(message);                                                       // 18  // 26
};                                                                                 // 19  // 27
                                                                                   // 20  // 28
encodeParams = function(params) {                                                  // 21  // 29
  var buf = [];                                                                    // 22  // 30
  _.each(params, function(value, key) {                                            // 23  // 31
    if (buf.length)                                                                // 24  // 32
      buf.push('&');                                                               // 25  // 33
    buf.push(encodeString(key), '=', encodeString(value));                         // 26  // 34
  });                                                                              // 27  // 35
  return buf.join('').replace(/%20/g, '+');                                        // 28  // 36
};                                                                                 // 29  // 37
                                                                                   // 30  // 38
encodeString = function(str) {                                                     // 31  // 39
  return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A"); // 32  // 40
};                                                                                 // 33  // 41
                                                                                   // 34  // 42
buildUrl = function(before_qmark, from_qmark, opt_query, opt_params) {             // 35  // 43
  var url_without_query = before_qmark;                                            // 36  // 44
  var query = from_qmark ? from_qmark.slice(1) : null;                             // 37  // 45
                                                                                   // 38  // 46
  if (typeof opt_query === "string")                                               // 39  // 47
    query = String(opt_query);                                                     // 40  // 48
                                                                                   // 41  // 49
  if (opt_params) {                                                                // 42  // 50
    query = query || "";                                                           // 43  // 51
    var prms = encodeParams(opt_params);                                           // 44  // 52
    if (query && prms)                                                             // 45  // 53
      query += '&';                                                                // 46  // 54
    query += prms;                                                                 // 47  // 55
  }                                                                                // 48  // 56
                                                                                   // 49  // 57
  var url = url_without_query;                                                     // 50  // 58
  if (query !== null)                                                              // 51  // 59
    url += ("?"+query);                                                            // 52  // 60
                                                                                   // 53  // 61
  return url;                                                                      // 54  // 62
};                                                                                 // 55  // 63
                                                                                   // 56  // 64
// Fill in `response.data` if the content-type is JSON.                            // 57  // 65
populateData = function(response) {                                                // 58  // 66
  // Read Content-Type header, up to a ';' if there is one.                        // 59  // 67
  // A typical header might be "application/json; charset=utf-8"                   // 60  // 68
  // or just "application/json".                                                   // 61  // 69
  var contentType = (response.headers['content-type'] || ';').split(';')[0];       // 62  // 70
                                                                                   // 63  // 71
  // Only try to parse data as JSON if server sets correct content type.           // 64  // 72
  if (_.include(['application/json', 'text/javascript'], contentType)) {           // 65  // 73
    try {                                                                          // 66  // 74
      response.data = JSON.parse(response.content);                                // 67  // 75
    } catch (err) {                                                                // 68  // 76
      response.data = null;                                                        // 69  // 77
    }                                                                              // 70  // 78
  } else {                                                                         // 71  // 79
    response.data = null;                                                          // 72  // 80
  }                                                                                // 73  // 81
};                                                                                 // 74  // 82
                                                                                   // 75  // 83
/////////////////////////////////////////////////////////////////////////////////////     // 84
                                                                                          // 85
}).call(this);                                                                            // 86
                                                                                          // 87
                                                                                          // 88
                                                                                          // 89
                                                                                          // 90
                                                                                          // 91
                                                                                          // 92
(function () {                                                                            // 93
                                                                                          // 94
/////////////////////////////////////////////////////////////////////////////////////     // 95
//                                                                                 //     // 96
// packages/aldeed:http/http-extras-server.js                                      //     // 97
//                                                                                 //     // 98
/////////////////////////////////////////////////////////////////////////////////////     // 99
                                                                                   //     // 100
var request = Npm.require('request');                                              // 1   // 101
var url_util = Npm.require('url');                                                 // 2   // 102
                                                                                   // 3   // 103
// _call always runs asynchronously; HTTP.call, defined below,                     // 4   // 104
// wraps _call and runs synchronously when no callback is provided.                // 5   // 105
var _call = function(method, url, options, callback) {                             // 6   // 106
                                                                                   // 7   // 107
  ////////// Process arguments //////////                                          // 8   // 108
                                                                                   // 9   // 109
  if (! callback && typeof options === "function") {                               // 10  // 110
    // support (method, url, callback) argument list                               // 11  // 111
    callback = options;                                                            // 12  // 112
    options = null;                                                                // 13  // 113
  }                                                                                // 14  // 114
                                                                                   // 15  // 115
  options = options || {};                                                         // 16  // 116
                                                                                   // 17  // 117
  method = (method || "").toUpperCase();                                           // 18  // 118
                                                                                   // 19  // 119
  if (! /^https?:\/\//.test(url))                                                  // 20  // 120
    throw new Error("url must be absolute and start with http:// or https://");    // 21  // 121
                                                                                   // 22  // 122
  var url_parts = url_util.parse(url);                                             // 23  // 123
                                                                                   // 24  // 124
  var headers = {};                                                                // 25  // 125
                                                                                   // 26  // 126
  var content = options.content;                                                   // 27  // 127
  if (options.data) {                                                              // 28  // 128
    content = JSON.stringify(options.data);                                        // 29  // 129
    headers['Content-Type'] = 'application/json';                                  // 30  // 130
  }                                                                                // 31  // 131
                                                                                   // 32  // 132
  var responseType = options.responseType || "string";                             // 33  // 133
  var encoding = _.isUndefined(options._encoding) ? "utf8" : options._encoding;    // 34  // 134
                                                                                   // 35  // 135
  // If responseType requires getting a Buffer back, override encoding             // 36  // 136
  // to null, which tells request to return a Buffer                               // 37  // 137
  if (_.contains(["arraybuffer", "buffer", "ejson-binary"], responseType)) {       // 38  // 138
    encoding = null;                                                               // 39  // 139
  }                                                                                // 40  // 140
                                                                                   // 41  // 141
  var params_for_url, params_for_body;                                             // 42  // 142
  if (content || method === "GET" || method === "HEAD")                            // 43  // 143
    params_for_url = options.params;                                               // 44  // 144
  else                                                                             // 45  // 145
    params_for_body = options.params;                                              // 46  // 146
                                                                                   // 47  // 147
  var new_url = buildUrl(                                                          // 48  // 148
    url_parts.protocol + "//" + url_parts.host + url_parts.pathname,               // 49  // 149
    url_parts.search, options.query, params_for_url);                              // 50  // 150
                                                                                   // 51  // 151
  if (options.auth) {                                                              // 52  // 152
    if (options.auth.indexOf(':') < 0)                                             // 53  // 153
      throw new Error('auth option should be of the form "username:password"');    // 54  // 154
    headers['Authorization'] = "Basic "+                                           // 55  // 155
      (new Buffer(options.auth, "ascii")).toString("base64");                      // 56  // 156
  }                                                                                // 57  // 157
                                                                                   // 58  // 158
  if (params_for_body) {                                                           // 59  // 159
    content = encodeParams(params_for_body);                                       // 60  // 160
    headers['Content-Type'] = "application/x-www-form-urlencoded";                 // 61  // 161
  }                                                                                // 62  // 162
                                                                                   // 63  // 163
  _.extend(headers, options.headers || {});                                        // 64  // 164
                                                                                   // 65  // 165
  // wrap callback to add a 'response' property on an error, in case               // 66  // 166
  // we have both (http 4xx/5xx error, which has a response payload)               // 67  // 167
  callback = (function(callback) {                                                 // 68  // 168
    return function(error, response) {                                             // 69  // 169
      if (error && response)                                                       // 70  // 170
        error.response = response;                                                 // 71  // 171
      callback(error, response);                                                   // 72  // 172
    };                                                                             // 73  // 173
  })(callback);                                                                    // 74  // 174
                                                                                   // 75  // 175
  // safety belt: only call the callback once.                                     // 76  // 176
  callback = _.once(callback);                                                     // 77  // 177
                                                                                   // 78  // 178
                                                                                   // 79  // 179
  ////////// Kickoff! //////////                                                   // 80  // 180
                                                                                   // 81  // 181
  var req_options = {                                                              // 82  // 182
    url: new_url,                                                                  // 83  // 183
    method: method,                                                                // 84  // 184
    encoding: encoding,                                                            // 85  // 185
    jar: false,                                                                    // 86  // 186
    timeout: options.timeout,                                                      // 87  // 187
    body: content,                                                                 // 88  // 188
    followRedirect: options.followRedirects,                                       // 89  // 189
    headers: headers                                                               // 90  // 190
  };                                                                               // 91  // 191
                                                                                   // 92  // 192
  request(req_options, function(error, res, body) {                                // 93  // 193
    var response = null;                                                           // 94  // 194
                                                                                   // 95  // 195
    if (! error) {                                                                 // 96  // 196
                                                                                   // 97  // 197
      response = {};                                                               // 98  // 198
      response.statusCode = res.statusCode;                                        // 99  // 199
                                                                                   // 100
      // Convert body into requested type                                          // 101
      switch (responseType) {                                                      // 102
        case "arraybuffer":                                                        // 103
          var len = body.length;                                                   // 104
          var ab = new ArrayBuffer(len);                                           // 105
          var view = new Uint8Array(ab);                                           // 106
          for (var i = 0; i < len; i++) {                                          // 107
            view[i] = body[i];                                                     // 108
          }                                                                        // 109
          body = ab;                                                               // 110
          break;                                                                   // 111
        case "ejson-binary":                                                       // 112
          var len = body.length;                                                   // 113
          var binary = EJSON.newBinary(len);                                       // 114
          for (var i = 0; i < len; i++) {                                          // 115
            binary[i] = body[i];                                                   // 116
          }                                                                        // 117
          body = binary;                                                           // 118
          break;                                                                   // 119
        case "json":                                                               // 120
          if (typeof body === "string") {                                          // 121
            try {                                                                  // 122
              body = JSON.parse(body);                                             // 123
            } catch (err) {                                                        // 124
              // leave it as a string                                              // 125
            }                                                                      // 126
          }                                                                        // 127
          break;                                                                   // 128
      }                                                                            // 129
                                                                                   // 130
                                                                                   // 131
      response.content = body;                                                     // 132
      response.headers = res.headers;                                              // 133
                                                                                   // 134
      populateData(response);                                                      // 135
                                                                                   // 136
      if (response.statusCode >= 400)                                              // 137
        error = makeErrorByStatus(response.statusCode, response.content);          // 138
    }                                                                              // 139
                                                                                   // 140
    callback(error, response);                                                     // 141
                                                                                   // 142
  });                                                                              // 143
};                                                                                 // 144
                                                                                   // 145
HTTP.call = Meteor.wrapAsync(_call);                                               // 146
                                                                                   // 147
                                                                                   // 148
/////////////////////////////////////////////////////////////////////////////////////     // 249
                                                                                          // 250
}).call(this);                                                                            // 251
                                                                                          // 252
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:http'] = {};

})();

//# sourceMappingURL=aldeed_http.js.map
