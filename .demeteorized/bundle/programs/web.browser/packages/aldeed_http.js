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
var _ = Package.underscore._;
var HTTP = Package.http.HTTP;

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
// packages/aldeed:http/http-extras-client.js                                      //     // 97
//                                                                                 //     // 98
/////////////////////////////////////////////////////////////////////////////////////     // 99
                                                                                   //     // 100
HTTP.call = function(method, url, options, callback) {                             // 1   // 101
                                                                                   // 2   // 102
  ////////// Process arguments //////////                                          // 3   // 103
                                                                                   // 4   // 104
  if (! callback && typeof options === "function") {                               // 5   // 105
    // support (method, url, callback) argument list                               // 6   // 106
    callback = options;                                                            // 7   // 107
    options = null;                                                                // 8   // 108
  }                                                                                // 9   // 109
                                                                                   // 10  // 110
  options = options || {};                                                         // 11  // 111
                                                                                   // 12  // 112
  if (typeof callback !== "function")                                              // 13  // 113
    throw new Error(                                                               // 14  // 114
      "Can't make a blocking HTTP call from the client; callback required.");      // 15  // 115
                                                                                   // 16  // 116
  method = (method || "").toUpperCase();                                           // 17  // 117
                                                                                   // 18  // 118
  var headers = {};                                                                // 19  // 119
                                                                                   // 20  // 120
  var content = options.content;                                                   // 21  // 121
  if (options.data) {                                                              // 22  // 122
    content = JSON.stringify(options.data);                                        // 23  // 123
    headers['Content-Type'] = 'application/json';                                  // 24  // 124
  }                                                                                // 25  // 125
                                                                                   // 26  // 126
  var params_for_url, params_for_body;                                             // 27  // 127
  if (content || method === "GET" || method === "HEAD")                            // 28  // 128
    params_for_url = options.params;                                               // 29  // 129
  else                                                                             // 30  // 130
    params_for_body = options.params;                                              // 31  // 131
                                                                                   // 32  // 132
  var query_match = /^(.*?)(\?.*)?$/.exec(url);                                    // 33  // 133
  url = buildUrl(query_match[1], query_match[2],                                   // 34  // 134
                 options.query, params_for_url);                                   // 35  // 135
                                                                                   // 36  // 136
  if (options.followRedirects === false)                                           // 37  // 137
    throw new Error("Option followRedirects:false not supported on client.");      // 38  // 138
                                                                                   // 39  // 139
  var username, password;                                                          // 40  // 140
  if (options.auth) {                                                              // 41  // 141
    var colonLoc = options.auth.indexOf(':');                                      // 42  // 142
    if (colonLoc < 0)                                                              // 43  // 143
      throw new Error('auth option should be of the form "username:password"');    // 44  // 144
    username = options.auth.substring(0, colonLoc);                                // 45  // 145
    password = options.auth.substring(colonLoc+1);                                 // 46  // 146
  }                                                                                // 47  // 147
                                                                                   // 48  // 148
  if (params_for_body) {                                                           // 49  // 149
    content = encodeParams(params_for_body);                                       // 50  // 150
  }                                                                                // 51  // 151
                                                                                   // 52  // 152
  _.extend(headers, options.headers || {});                                        // 53  // 153
                                                                                   // 54  // 154
  ////////// Callback wrapping //////////                                          // 55  // 155
                                                                                   // 56  // 156
  // wrap callback to add a 'response' property on an error, in case               // 57  // 157
  // we have both (http 4xx/5xx error, which has a response payload)               // 58  // 158
  callback = (function(callback) {                                                 // 59  // 159
    return function(error, response) {                                             // 60  // 160
      if (error && response)                                                       // 61  // 161
        error.response = response;                                                 // 62  // 162
      callback(error, response);                                                   // 63  // 163
    };                                                                             // 64  // 164
  })(callback);                                                                    // 65  // 165
                                                                                   // 66  // 166
  // safety belt: only call the callback once.                                     // 67  // 167
  callback = _.once(callback);                                                     // 68  // 168
                                                                                   // 69  // 169
                                                                                   // 70  // 170
  ////////// Kickoff! //////////                                                   // 71  // 171
                                                                                   // 72  // 172
  // from this point on, errors are because of something remote, not               // 73  // 173
  // something we should check in advance. Turn exceptions into error              // 74  // 174
  // results.                                                                      // 75  // 175
  try {                                                                            // 76  // 176
    // setup XHR object                                                            // 77  // 177
    var xhr;                                                                       // 78  // 178
    if (typeof XMLHttpRequest !== "undefined")                                     // 79  // 179
      xhr = new XMLHttpRequest();                                                  // 80  // 180
    else if (typeof ActiveXObject !== "undefined")                                 // 81  // 181
      xhr = new ActiveXObject("Microsoft.XMLHttp"); // IE6                         // 82  // 182
    else                                                                           // 83  // 183
      throw new Error("Can't create XMLHttpRequest"); // ???                       // 84  // 184
                                                                                   // 85  // 185
    xhr.open(method, url, true, username, password);                               // 86  // 186
                                                                                   // 87  // 187
    // support custom "ejson-binary" response type                                 // 88  // 188
    // and all browser-supported types                                             // 89  // 189
    var convertToBinary;                                                           // 90  // 190
    if (options.responseType === "ejson-binary") {                                 // 91  // 191
      xhr.responseType = "arraybuffer";                                            // 92  // 192
      convertToBinary = true;                                                      // 93  // 193
    } else {                                                                       // 94  // 194
      xhr.responseType = options.responseType;                                     // 95  // 195
    }                                                                              // 96  // 196
                                                                                   // 97  // 197
    for (var k in headers)                                                         // 98  // 198
      xhr.setRequestHeader(k, headers[k]);                                         // 99  // 199
                                                                                   // 100
                                                                                   // 101
    // setup timeout                                                               // 102
    var timed_out = false;                                                         // 103
    var timer;                                                                     // 104
    if (options.timeout) {                                                         // 105
      timer = Meteor.setTimeout(function() {                                       // 106
        timed_out = true;                                                          // 107
        xhr.abort();                                                               // 108
      }, options.timeout);                                                         // 109
    };                                                                             // 110
                                                                                   // 111
    // callback on complete                                                        // 112
    xhr.onreadystatechange = function(evt) {                                       // 113
      if (xhr.readyState === 4) { // COMPLETE                                      // 114
        if (timer)                                                                 // 115
          Meteor.clearTimeout(timer);                                              // 116
                                                                                   // 117
        if (timed_out) {                                                           // 118
          callback(new Error("timeout"));                                          // 119
        } else if (! xhr.status) {                                                 // 120
          // no HTTP response                                                      // 121
          callback(new Error("network"));                                          // 122
        } else {                                                                   // 123
                                                                                   // 124
          var response = {};                                                       // 125
          response.statusCode = xhr.status;                                        // 126
                                                                                   // 127
          var body = xhr.response || xhr.responseText;                             // 128
                                                                                   // 129
          // Some browsers don't yet support "json" responseType,                  // 130
          // but we can replicate it                                               // 131
          if (options.responseType === "json" && typeof body === "string") {       // 132
            try {                                                                  // 133
              body = JSON.parse(body);                                             // 134
            } catch (err) {                                                        // 135
              body = null;                                                         // 136
            }                                                                      // 137
          }                                                                        // 138
                                                                                   // 139
          // Add support for a custom responseType: "ejson-binary"                 // 140
          if (convertToBinary && typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && body instanceof ArrayBuffer) {
            var view = new Uint8Array(body);                                       // 142
            var len = body.byteLength;                                             // 143
            var binaryBody = EJSON.newBinary(len);                                 // 144
            for (var i = 0; i < len; i++) {                                        // 145
              binaryBody[i] = view[i];                                             // 146
            }                                                                      // 147
            body = binaryBody;                                                     // 148
          }                                                                        // 149
                                                                                   // 150
          response.content = body;                                                 // 151
                                                                                   // 152
          response.headers = {};                                                   // 153
          var header_str = xhr.getAllResponseHeaders();                            // 154
                                                                                   // 155
          // https://github.com/meteor/meteor/issues/553                           // 156
          //                                                                       // 157
          // In Firefox there is a weird issue, sometimes                          // 158
          // getAllResponseHeaders returns the empty string, but                   // 159
          // getResponseHeader returns correct results. Possibly this              // 160
          // issue:                                                                // 161
          // https://bugzilla.mozilla.org/show_bug.cgi?id=608735                   // 162
          //                                                                       // 163
          // If this happens we can't get a full list of headers, but              // 164
          // at least get content-type so our JSON decoding happens                // 165
          // correctly. In theory, we could try and rescue more header             // 166
          // values with a list of common headers, but content-type is             // 167
          // the only vital one for now.                                           // 168
          if ("" === header_str && xhr.getResponseHeader("content-type"))          // 169
            header_str =                                                           // 170
            "content-type: " + xhr.getResponseHeader("content-type");              // 171
                                                                                   // 172
          var headers_raw = header_str.split(/\r?\n/);                             // 173
          _.each(headers_raw, function (h) {                                       // 174
            var m = /^(.*?):(?:\s+)(.*)$/.exec(h);                                 // 175
            if (m && m.length === 3)                                               // 176
              response.headers[m[1].toLowerCase()] = m[2];                         // 177
          });                                                                      // 178
                                                                                   // 179
          populateData(response);                                                  // 180
                                                                                   // 181
          var error = null;                                                        // 182
          if (response.statusCode >= 400)                                          // 183
            error = makeErrorByStatus(response.statusCode, response.content);      // 184
                                                                                   // 185
          callback(error, response);                                               // 186
        }                                                                          // 187
      }                                                                            // 188
    };                                                                             // 189
                                                                                   // 190
    // send it on its way                                                          // 191
    xhr.send(content);                                                             // 192
                                                                                   // 193
  } catch (err) {                                                                  // 194
    callback(err);                                                                 // 195
  }                                                                                // 196
                                                                                   // 197
};                                                                                 // 198
                                                                                   // 199
/////////////////////////////////////////////////////////////////////////////////////     // 300
                                                                                          // 301
}).call(this);                                                                            // 302
                                                                                          // 303
////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['aldeed:http'] = {};

})();
