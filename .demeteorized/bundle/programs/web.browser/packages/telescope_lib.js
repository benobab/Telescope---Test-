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
var _ = Package.underscore._;
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
var Telescope, templates, getTemplate, getVotePower, _, themeSettings;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/core.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Kick off the global namespace for Telescope.                                                                    //
 * @namespace Telescope                                                                                            //
 */                                                                                                                //
                                                                                                                   //
Telescope = {};                                                                                                    // 6
                                                                                                                   //
Telescope.VERSION = '0.25.6';                                                                                      // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/utils.js                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * The global namespace for Telescope utils.                                                                       //
 * @namespace Telescope.utils                                                                                      //
 */                                                                                                                //
Telescope.utils = {};                                                                                              // 5
                                                                                                                   //
/**                                                                                                                //
 * Convert a camelCase string to dash-separated string                                                             //
 * @param {String} str                                                                                             //
 */                                                                                                                //
Telescope.utils.camelToDash = function (str) {                                                                     // 11
  return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();                             // 12
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Convert an underscore-separated string to dash-separated string                                                 //
 * @param {String} str                                                                                             //
 */                                                                                                                //
Telescope.utils.underscoreToDash = function (str) {                                                                // 19
  return str.replace('_', '-');                                                                                    // 20
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Convert a dash separated string to camelCase.                                                                   //
 * @param {String} str                                                                                             //
 */                                                                                                                //
Telescope.utils.dashToCamel = function (str) {                                                                     // 27
  return str.replace(/(\-[a-z])/g, function ($1) {                                                                 // 28
    return $1.toUpperCase().replace('-', '');                                                                      // 28
  });                                                                                                              //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Convert a string to camelCase and remove spaces.                                                                //
 * @param {String} str                                                                                             //
 */                                                                                                                //
Telescope.utils.camelCaseify = function (str) {                                                                    // 35
  str = this.dashToCamel(str.replace(' ', '-'));                                                                   // 36
  str = str.slice(0, 1).toLowerCase() + str.slice(1);                                                              // 37
  return str;                                                                                                      // 38
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Trim a sentence to a specified amount of words and append an ellipsis.                                          //
 * @param {String} s - Sentence to trim.                                                                           //
 * @param {Number} numWords - Number of words to trim sentence to.                                                 //
 */                                                                                                                //
Telescope.utils.trimWords = function (s, numWords) {                                                               // 46
                                                                                                                   //
  if (!s) return s;                                                                                                // 48
                                                                                                                   //
  var expString = s.split(/\s+/, numWords);                                                                        // 51
  if (expString.length >= numWords) return expString.join(" ") + "…";                                              // 52
  return s;                                                                                                        // 54
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Trim a block of HTML code to get a clean text excerpt                                                           //
 * @param {String} html - HTML to trim.                                                                            //
 */                                                                                                                //
Telescope.utils.trimHTML = function (html, numWords) {                                                             // 61
  var text = Telescope.utils.stripHTML(html);                                                                      // 62
  return Telescope.utils.trimWords(text, numWords);                                                                // 63
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Capitalize a string.                                                                                            //
 * @param {String} str                                                                                             //
 */                                                                                                                //
Telescope.utils.capitalise = function (str) {                                                                      // 70
  return str.charAt(0).toUpperCase() + str.slice(1);                                                               // 71
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.t = function (message) {                                                                           // 74
  var d = new Date();                                                                                              // 75
  console.log("### " + message + " rendered at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());    // 76
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.nl2br = function (str) {                                                                           // 79
  var breakTag = '<br />';                                                                                         // 80
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');                              // 81
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.scrollPageTo = function (selector) {                                                               // 84
  $('body').scrollTop($(selector).offset().top);                                                                   // 85
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.getDateRange = function (pageNumber) {                                                             // 88
  var now = moment(new Date());                                                                                    // 89
  var dayToDisplay = now.subtract(pageNumber - 1, 'days');                                                         // 90
  var range = {};                                                                                                  // 91
  range.start = dayToDisplay.startOf('day').valueOf();                                                             // 92
  range.end = dayToDisplay.endOf('day').valueOf();                                                                 // 93
  // console.log("after: ", dayToDisplay.startOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));                  //
  // console.log("before: ", dayToDisplay.endOf('day').format("dddd, MMMM Do YYYY, h:mm:ss a"));                   //
  return range;                                                                                                    // 96
};                                                                                                                 //
                                                                                                                   //
//////////////////////////                                                                                         //
// URL Helper Functions //                                                                                         //
//////////////////////////                                                                                         //
                                                                                                                   //
/**                                                                                                                //
 * Returns the user defined site URL or Meteor.absoluteUrl                                                         //
 */                                                                                                                //
Telescope.utils.getSiteUrl = function () {                                                                         // 106
  return Settings.get('siteUrl', Meteor.absoluteUrl());                                                            // 107
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * The global namespace for Telescope utils.                                                                       //
 * @param {String} url - the URL to redirect                                                                       //
 */                                                                                                                //
Telescope.utils.getOutgoingUrl = function (url) {                                                                  // 114
  return Telescope.utils.getSiteUrl() + "out?url=" + encodeURIComponent(url);                                      // 115
};                                                                                                                 //
                                                                                                                   //
// This function should only ever really be necessary server side                                                  //
// Client side using .path() is a better option since it's relative                                                //
// and shouldn't care about the siteUrl.                                                                           //
Telescope.utils.getRouteUrl = function (routeName, params, options) {                                              // 121
  options = options || {};                                                                                         // 122
  var route = FlowRouter.path(routeName, params || {}, options);                                                   // 123
  return route;                                                                                                    // 128
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.getSignupUrl = function () {                                                                       // 131
  return this.getRouteUrl('atSignUp');                                                                             // 132
};                                                                                                                 //
Telescope.utils.getSigninUrl = function () {                                                                       // 134
  return this.getRouteUrl('atSignIn');                                                                             // 135
};                                                                                                                 //
                                                                                                                   //
//TODO: fix this                                                                                                   //
Telescope.utils.getPostCommentUrl = function (postId, commentId) {                                                 // 139
  // get link to a comment on a post page                                                                          //
  return this.getRouteUrl('post_page_comment', {                                                                   // 141
    _id: postId,                                                                                                   // 142
    commentId: commentId                                                                                           // 143
  });                                                                                                              //
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.slugify = function (s) {                                                                           // 147
  var slug = getSlug(s, {                                                                                          // 148
    truncate: 60                                                                                                   // 149
  });                                                                                                              //
                                                                                                                   //
  // can't have posts with an "edit" slug                                                                          //
  if (slug === "edit") {                                                                                           // 153
    slug = "edit-1";                                                                                               // 154
  }                                                                                                                //
                                                                                                                   //
  return slug;                                                                                                     // 157
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.getUnusedSlug = function (collection, slug) {                                                      // 160
  var suffix = "";                                                                                                 // 161
  var index = 0;                                                                                                   // 162
                                                                                                                   //
  // test if slug is already in use                                                                                //
  while (!!collection.findOne({ slug: slug + suffix })) {                                                          // 165
    index++;                                                                                                       // 166
    suffix = "-" + index;                                                                                          // 167
  }                                                                                                                //
                                                                                                                   //
  return slug + suffix;                                                                                            // 170
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.getShortUrl = function (post) {                                                                    // 173
  return post.shortUrl || post.url;                                                                                // 174
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.getDomain = function (url) {                                                                       // 177
  var urlObject = Npm.require('url');                                                                              // 178
  return urlObject.parse(url).hostname.replace('www.', '');                                                        // 179
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.invitesEnabled = function () {                                                                     // 182
  return Settings.get("requireViewInvite") || Settings.get("requirePostInvite");                                   // 183
};                                                                                                                 //
                                                                                                                   //
// add http: if missing                                                                                            //
Telescope.utils.addHttp = function (url) {                                                                         // 187
  if (url.substring(0, 5) !== "http:" && url.substring(0, 6) !== "https:") {                                       // 188
    url = "http:" + url;                                                                                           // 189
  }                                                                                                                //
  return url;                                                                                                      // 191
};                                                                                                                 //
                                                                                                                   //
/////////////////////////////                                                                                      //
// String Helper Functions //                                                                                      //
/////////////////////////////                                                                                      //
                                                                                                                   //
Telescope.utils.cleanUp = function (s) {                                                                           // 198
  return this.stripHTML(s);                                                                                        // 199
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.sanitize = function (s) {                                                                          // 202
  // console.log('// before sanitization:')                                                                        //
  // console.log(s)                                                                                                //
  if (Meteor.isServer) {                                                                                           // 205
    s = sanitizeHtml(s, {                                                                                          // 206
      allowedTags: ['h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre', 'img']
    });                                                                                                            //
    // console.log('// after sanitization:')                                                                       //
    // console.log(s)                                                                                              //
  }                                                                                                                //
  return s;                                                                                                        // 217
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.stripHTML = function (s) {                                                                         // 220
  return s.replace(/<(?:.|\n)*?>/gm, '');                                                                          // 221
};                                                                                                                 //
                                                                                                                   //
Telescope.utils.stripMarkdown = function (s) {                                                                     // 224
  var htmlBody = marked(s);                                                                                        // 225
  return Telescope.utils.stripHTML(htmlBody);                                                                      // 226
};                                                                                                                 //
                                                                                                                   //
// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key                   //
Telescope.utils.checkNested = function (obj /*, level1, level2, ... levelN*/) {                                    // 230
  var args = Array.prototype.slice.call(arguments);                                                                // 231
  obj = args.shift();                                                                                              // 232
                                                                                                                   //
  for (var i = 0; i < args.length; i++) {                                                                          // 234
    if (!obj.hasOwnProperty(args[i])) {                                                                            // 235
      return false;                                                                                                // 236
    }                                                                                                              //
    obj = obj[args[i]];                                                                                            // 238
  }                                                                                                                //
  return true;                                                                                                     // 240
};                                                                                                                 //
                                                                                                                   //
Telescope.log = function (s) {                                                                                     // 243
  if (Settings.get('debug', false)) console.log(s);                                                                // 244
};                                                                                                                 //
                                                                                                                   //
// see http://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string       //
Telescope.getNestedProperty = function (obj, desc) {                                                               // 249
  var arr = desc.split(".");                                                                                       // 250
  while (arr.length && (obj = obj[arr.shift()]));                                                                  // 251
  return obj;                                                                                                      // 252
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/callbacks.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Callback hooks provide an easy way to add extra steps to common operations.                                     //
 * @namespace Telescope.callbacks                                                                                  //
 */                                                                                                                //
Telescope.callbacks = {};                                                                                          // 5
                                                                                                                   //
/**                                                                                                                //
 * Add a callback function to a hook                                                                               //
 * @param {String} hook - The name of the hook                                                                     //
 * @param {Function} callback - The callback function                                                              //
 */                                                                                                                //
Telescope.callbacks.add = function (hook, callback) {                                                              // 12
                                                                                                                   //
  // if callback array doesn't exist yet, initialize it                                                            //
  if (typeof Telescope.callbacks[hook] === "undefined") {                                                          // 15
    Telescope.callbacks[hook] = [];                                                                                // 16
  }                                                                                                                //
                                                                                                                   //
  Telescope.callbacks[hook].push(callback);                                                                        // 19
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Remove a callback from a hook                                                                                   //
 * @param {string} hook - The name of the hook                                                                     //
 * @param {string} functionName - The name of the function to remove                                               //
 */                                                                                                                //
Telescope.callbacks.remove = function (hookName, callbackName) {                                                   // 27
  Telescope.callbacks[hookName] = _.reject(Telescope.callbacks[hookName], function (callback) {                    // 28
    return callback.name === callbackName;                                                                         // 29
  });                                                                                                              //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Successively run all of a hook's callbacks on an item                                                           //
 * @param {String} hook - The name of the hook                                                                     //
 * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
 * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
 * @returns {Object} Returns the item after it's been through all the callbacks for this hook                      //
 */                                                                                                                //
Telescope.callbacks.run = function (hook, item, constant) {                                                        // 40
                                                                                                                   //
  var callbacks = Telescope.callbacks[hook];                                                                       // 42
                                                                                                                   //
  if (typeof callbacks !== "undefined" && !!callbacks.length) {                                                    // 44
    // if the hook exists, and contains callbacks to run                                                           //
                                                                                                                   //
    return callbacks.reduce(function (result, callback) {                                                          // 46
      // console.log(callback.name);                                                                               //
      return callback(result, constant);                                                                           // 48
    }, item);                                                                                                      //
  } else {                                                                                                         //
    // else, just return the item unchanged                                                                        //
    return item;                                                                                                   // 52
  }                                                                                                                //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Successively run all of a hook's callbacks on an item, in async mode (only works on server)                     //
 * @param {String} hook - The name of the hook                                                                     //
 * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
 * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
 */                                                                                                                //
Telescope.callbacks.runAsync = function (hook, item, constant) {                                                   // 62
                                                                                                                   //
  var callbacks = Telescope.callbacks[hook];                                                                       // 64
                                                                                                                   //
  if (Meteor.isServer && typeof callbacks !== "undefined" && !!callbacks.length) {                                 // 66
                                                                                                                   //
    // use defer to avoid holding up client                                                                        //
    Meteor.defer(function () {                                                                                     // 69
      // run all post submit server callbacks on post object successively                                          //
      callbacks.forEach(function (callback) {                                                                      // 71
        // console.log(callback.name);                                                                             //
        callback(item, constant);                                                                                  // 73
      });                                                                                                          //
    });                                                                                                            //
  } else {                                                                                                         //
    return item;                                                                                                   // 78
  }                                                                                                                //
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/collections.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Meteor Collections.                                                                                             //
 * @class Mongo.Collection                                                                                         //
 */                                                                                                                //
                                                                                                                   //
/**                                                                                                                //
 * Add an additional field (or an array of fields) to a schema.                                                    //
 * @param {Object|Object[]} field                                                                                  //
 */                                                                                                                //
Mongo.Collection.prototype.addField = function (fieldOrFieldArray) {                                               // 10
                                                                                                                   //
  var collection = this;                                                                                           // 12
  var fieldSchema = {};                                                                                            // 13
                                                                                                                   //
  var fieldArray = Array.isArray(fieldOrFieldArray) ? fieldOrFieldArray : [fieldOrFieldArray];                     // 15
                                                                                                                   //
  // loop over fields and add them to schema                                                                       //
  fieldArray.forEach(function (field) {                                                                            // 18
    fieldSchema[field.fieldName] = field.fieldSchema;                                                              // 19
  });                                                                                                              //
                                                                                                                   //
  // add field schema to collection schema                                                                         //
  collection.attachSchema(fieldSchema);                                                                            // 23
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Remove a field from a schema.                                                                                   //
 * @param {String} fieldName                                                                                       //
 */                                                                                                                //
Mongo.Collection.prototype.removeField = function (fieldName) {                                                    // 30
                                                                                                                   //
  var collection = this;                                                                                           // 32
  var schema = _.omit(collection.simpleSchema()._schema, fieldName);                                               // 33
                                                                                                                   //
  // add field schema to collection schema                                                                         //
  collection.attachSchema(schema, { replace: true });                                                              // 36
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Check if an operation is allowed                                                                                //
 * @param {Object} collection – the collection to which the document belongs                                       //
 * @param {string} userId – the userId of the user performing the operation                                        //
 * @param {Object} document – the document being modified                                                          //
 * @param {string[]} fieldNames – the names of the fields being modified                                           //
 * @param {Object} modifier – the modifier                                                                         //
 */                                                                                                                //
Telescope.allowCheck = function (collection, userId, document, fieldNames, modifier) {                             // 47
                                                                                                                   //
  var schema = collection.simpleSchema();                                                                          // 49
  var user = Meteor.users.findOne(userId);                                                                         // 50
  var allowedFields = schema.getEditableFields(user);                                                              // 51
  var fields = [];                                                                                                 // 52
                                                                                                                   //
  // fieldNames only contains top-level fields, so loop over modifier to get real list of fields                   //
  _.each(modifier, function (operation) {                                                                          // 55
    fields = fields.concat(_.keys(operation));                                                                     // 56
  });                                                                                                              //
                                                                                                                   //
  // allow update only if:                                                                                         //
  // 1. user has rights to edit the document                                                                       //
  // 2. there is no fields in fieldNames that are not also in allowedFields                                        //
  return Users.can.edit(userId, document) && _.difference(fields, allowedFields).length == 0;                      // 62
};                                                                                                                 //
                                                                                                                   //
// Note: using the prototype doesn't work in allow/deny for some reason                                            //
Meteor.Collection.prototype.allowCheck = function (userId, document, fieldNames, modifier) {                       // 67
  Telescope.allowCheck(this, userId, document, fieldNames, modifier);                                              // 68
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Global schemas object. Note: not reactive, won't be updated after initialization                                //
 * @namespace Telescope.schemas                                                                                    //
 */                                                                                                                //
Telescope.schemas = {};                                                                                            // 75
                                                                                                                   //
/**                                                                                                                //
 * @method SimpleSchema.getEditableFields                                                                          //
 * Get a list of all fields editable by a specific user for a given schema                                         //
 * @param {Object} user – the user for which to check field permissions                                            //
 */                                                                                                                //
SimpleSchema.prototype.getEditableFields = function (user) {                                                       // 82
  var schema = this._schema;                                                                                       // 83
  var fields = _.sortBy(_.filter(_.keys(schema), function (fieldName) {                                            // 84
    var field = schema[fieldName];                                                                                 // 85
    return Users.can.editField(user, field);                                                                       // 86
  }), function (fieldName) {                                                                                       //
    var field = schema[fieldName];                                                                                 // 88
    return field.autoform && field.autoform.order;                                                                 // 89
  });                                                                                                              //
  return fields;                                                                                                   // 91
};                                                                                                                 //
                                                                                                                   //
SimpleSchema.prototype.getPublicFields = function () {                                                             // 94
  var schema = this._schema;                                                                                       // 95
  var fields = _.filter(_.keys(schema), function (fieldName) {                                                     // 96
    var field = schema[fieldName];                                                                                 // 97
    return !!field["public"];                                                                                      // 98
  });                                                                                                              //
  return fields;                                                                                                   // 100
};                                                                                                                 //
                                                                                                                   //
SimpleSchema.prototype.getProfileFields = function () {                                                            // 103
  var schema = this._schema;                                                                                       // 104
  var fields = _.filter(_.keys(schema), function (fieldName) {                                                     // 105
    var field = schema[fieldName];                                                                                 // 106
    return !!field.profile;                                                                                        // 107
  });                                                                                                              //
  return fields;                                                                                                   // 109
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/modules.js                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Template modules let you insert templates in specific zones in the app's layout.                                //
 * @namespace Telescope.modules                                                                                    //
 */                                                                                                                //
                                                                                                                   //
Telescope.modules = {};                                                                                            // 6
                                                                                                                   //
/**                                                                                                                //
 * Add a module to a template zone                                                                                 //
 * @param {string} zone - The name of the zone                                                                     //
 * @param {Object|Object[]} module - The module object (or an array of modules)                                    //
 * @param {string} module.template - The template to include                                                       //
 * @param {number} module.order - The order of the template in the zone                                            //
 *                                                                                                                 //
 * @example                                                                                                        //
 * Telescope.modules.add("hero", {                                                                                 //
 *   template: "newsletterBanner",                                                                                 //
 *   order: 10,                                                                                                    //
 *   only: ["postsDefault"]                                                                                        //
 * });                                                                                                             //
 */                                                                                                                //
Telescope.modules.add = function (zone, module) {                                                                  // 22
                                                                                                                   //
  // if module zone array doesn't exist yet, initialize it                                                         //
  if (typeof Telescope.modules[zone] === "undefined") {                                                            // 25
    Telescope.modules[zone] = [];                                                                                  // 26
  }                                                                                                                //
                                                                                                                   //
  if (Array.isArray(module)) {                                                                                     // 29
                                                                                                                   //
    var modules = module; // we're dealing with an Array, so let's add an "s"                                      // 31
    modules.forEach(function (module) {                                                                            // 32
      Telescope.modules[zone].push(module);                                                                        // 33
    });                                                                                                            //
  } else {                                                                                                         //
                                                                                                                   //
    Telescope.modules[zone].push(module);                                                                          // 38
  }                                                                                                                //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Remove a module from a zone                                                                                     //
 * @param {string} zone - The name of the zone                                                                     //
 * @param {string} template - The name of the template to remove                                                   //
 */                                                                                                                //
Telescope.modules.remove = function (zone, template) {                                                             // 48
  Telescope.modules[zone] = _.reject(Telescope.modules[zone], function (module) {                                  // 49
    return module.template === template;                                                                           // 50
  });                                                                                                              //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Removes all modules from a zone                                                                                 //
 * @param {string} zone - The name of the zone                                                                     //
 */                                                                                                                //
Telescope.modules.removeAll = function (zone) {                                                                    // 58
  Telescope.modules[zone] = [];                                                                                    // 59
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Retrieve an array containing all modules for a zone                                                             //
 * @param {string} zone - The name of the zone                                                                     //
 * @returns {Object[]} Returns a sorted array of the zone's modules                                                //
 */                                                                                                                //
Telescope.modules.get = function (zone) {                                                                          // 67
  return _.sortBy(Telescope.modules[zone], "order");                                                               // 68
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Add a route to the list of routes a module should be displayed on                                               //
 * @param {string} zone - The name of the zone                                                                     //
 * @param {string} template - The name of the module                                                               //
 * @param {string} route - The name of the route on which to display the module                                    //
 */                                                                                                                //
Telescope.modules.addRoute = function (zone, template, route) {                                                    // 77
  _.findWhere(Telescope.modules[zone], { template: template }).only.push(route);                                   // 78
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/config.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Telescope configuration namespace                                                                               //
 * @namespace Telescope.config                                                                                     //
 */                                                                                                                //
Telescope.config = {};                                                                                             // 5
                                                                                                                   //
/**                                                                                                                //
* Subscriptions namespace                                                                                          //
* @namespace Telescope.subscriptions                                                                               //
*/                                                                                                                 //
Telescope.subscriptions = [];                                                                                      // 11
                                                                                                                   //
/**                                                                                                                //
 * Add a subscription to be preloaded                                                                              //
 * @param {string} subscription - The name of the subscription                                                     //
 */                                                                                                                //
Telescope.subscriptions.preload = function (subscription) {                                                        // 17
  Telescope.subscriptions.push(subscription);                                                                      // 18
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/templates.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Telescope.config.customPrefixes = [];                                                                              // 1
                                                                                                                   //
Telescope.config.addCustomPrefix = function (prefix) {                                                             // 3
  Telescope.config.customPrefixes.push(prefix);                                                                    // 4
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/deep.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// see https://gist.github.com/furf/3208381                                                                        //
                                                                                                                   //
_.mixin({                                                                                                          // 3
                                                                                                                   //
  // Get/set the value of a nested property                                                                        //
  deep: function (obj, key, value) {                                                                               // 6
                                                                                                                   //
    var keys = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.'),                       // 8
        root,                                                                                                      //
        i = 0,                                                                                                     //
        n = keys.length;                                                                                           //
                                                                                                                   //
    // Set deep value                                                                                              //
    if (arguments.length > 2) {                                                                                    // 14
                                                                                                                   //
      root = obj;                                                                                                  // 16
      n--;                                                                                                         // 17
                                                                                                                   //
      while (i < n) {                                                                                              // 19
        key = keys[i++];                                                                                           // 20
        obj = obj[key] = _.isObject(obj[key]) ? obj[key] : {};                                                     // 21
      }                                                                                                            //
                                                                                                                   //
      obj[keys[i]] = value;                                                                                        // 24
                                                                                                                   //
      value = root;                                                                                                // 26
                                                                                                                   //
      // Get deep value                                                                                            //
    } else {                                                                                                       //
        while ((obj = obj[keys[i++]]) !== null && i < n) {};                                                       // 30
        value = i < n ? void 0 : obj;                                                                              // 31
      }                                                                                                            //
                                                                                                                   //
    return value;                                                                                                  // 34
  }                                                                                                                //
                                                                                                                   //
});                                                                                                                //
                                                                                                                   //
// Usage:                                                                                                          //
//                                                                                                                 //
// var obj = {                                                                                                     //
//   a: {                                                                                                          //
//     b: {                                                                                                        //
//       c: {                                                                                                      //
//         d: ['e', 'f', 'g']                                                                                      //
//       }                                                                                                         //
//     }                                                                                                           //
//   }                                                                                                             //
// };                                                                                                              //
//                                                                                                                 //
// Get deep value                                                                                                  //
// _.deep(obj, 'a.b.c.d[2]'); // 'g'                                                                               //
//                                                                                                                 //
// Set deep value                                                                                                  //
// _.deep(obj, 'a.b.c.d[2]', 'george');                                                                            //
//                                                                                                                 //
// _.deep(obj, 'a.b.c.d[2]'); // 'george'                                                                          //
                                                                                                                   //
_.mixin({                                                                                                          // 60
  pluckDeep: function (obj, key) {                                                                                 // 61
    return _.map(obj, function (value) {                                                                           // 62
      return _.deep(value, key);                                                                                   // 62
    });                                                                                                            //
  }                                                                                                                //
});                                                                                                                //
                                                                                                                   //
_.mixin({                                                                                                          // 67
                                                                                                                   //
  // Return a copy of an object containing all but the blacklisted properties.                                     //
  unpick: function (obj) {                                                                                         // 70
    obj = obj || {};                                                                                               // 71
    return _.pick(obj, _.difference(_.keys(obj), _.flatten(Array.prototype.slice.call(arguments, 1))));            // 72
  }                                                                                                                //
                                                                                                                   //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/deep_extend.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// see: http://stackoverflow.com/questions/9399365/deep-extend-like-jquerys-for-nodejs                             //
Telescope.utils.deepExtend = function () {                                                                         // 2
  var options,                                                                                                     // 3
      name,                                                                                                        //
      src,                                                                                                         //
      copy,                                                                                                        //
      copyIsArray,                                                                                                 //
      clone,                                                                                                       //
      target = arguments[0] || {},                                                                                 //
      i = 1,                                                                                                       //
      length = arguments.length,                                                                                   //
      deep = false,                                                                                                //
      toString = Object.prototype.toString,                                                                        //
      hasOwn = Object.prototype.hasOwnProperty,                                                                    //
      class2type = {                                                                                               //
    "[object Boolean]": "boolean",                                                                                 // 10
    "[object Number]": "number",                                                                                   // 11
    "[object String]": "string",                                                                                   // 12
    "[object Function]": "function",                                                                               // 13
    "[object Array]": "array",                                                                                     // 14
    "[object Date]": "date",                                                                                       // 15
    "[object RegExp]": "regexp",                                                                                   // 16
    "[object Object]": "object"                                                                                    // 17
  },                                                                                                               //
      jQuery = {                                                                                                   //
    isFunction: function (obj) {                                                                                   // 20
      return jQuery.type(obj) === "function";                                                                      // 21
    },                                                                                                             //
    isArray: Array.isArray || function (obj) {                                                                     // 23
      return jQuery.type(obj) === "array";                                                                         // 25
    },                                                                                                             //
    isWindow: function (obj) {                                                                                     // 27
      return obj !== null && obj === obj.window;                                                                   // 28
    },                                                                                                             //
    isNumeric: function (obj) {                                                                                    // 30
      return !isNaN(parseFloat(obj)) && isFinite(obj);                                                             // 31
    },                                                                                                             //
    type: function (obj) {                                                                                         // 33
      return obj === null ? String(obj) : class2type[toString.call(obj)] || "object";                              // 34
    },                                                                                                             //
    isPlainObject: function (obj) {                                                                                // 36
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {                                                 // 37
        return false;                                                                                              // 38
      }                                                                                                            //
      try {                                                                                                        // 40
        if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;                                                                                            // 42
        }                                                                                                          //
      } catch (e) {                                                                                                //
        return false;                                                                                              // 45
      }                                                                                                            //
      var key;                                                                                                     // 47
      for (key in babelHelpers.sanitizeForInObject(obj)) {}                                                        // 48
      return key === undefined || hasOwn.call(obj, key);                                                           // 49
    }                                                                                                              //
  };                                                                                                               //
  if (typeof target === "boolean") {                                                                               // 52
    deep = target;                                                                                                 // 53
    target = arguments[1] || {};                                                                                   // 54
    i = 2;                                                                                                         // 55
  }                                                                                                                //
  if (typeof target !== "object" && !jQuery.isFunction(target)) {                                                  // 57
    target = {};                                                                                                   // 58
  }                                                                                                                //
  if (length === i) {                                                                                              // 60
    target = this;                                                                                                 // 61
    --i;                                                                                                           // 62
  }                                                                                                                //
  for (i; i < length; i++) {                                                                                       // 64
    if ((options = arguments[i]) !== null) {                                                                       // 65
      for (name in babelHelpers.sanitizeForInObject(options)) {                                                    // 66
        src = target[name];                                                                                        // 67
        copy = options[name];                                                                                      // 68
        if (target === copy) {                                                                                     // 69
          continue;                                                                                                // 70
        }                                                                                                          //
        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {                // 72
          if (copyIsArray) {                                                                                       // 73
            copyIsArray = false;                                                                                   // 74
            clone = src && jQuery.isArray(src) ? src : [];                                                         // 75
          } else {                                                                                                 //
            clone = src && jQuery.isPlainObject(src) ? src : {};                                                   // 77
          }                                                                                                        //
          // WARNING: RECURSION                                                                                    //
          target[name] = Telescope.utils.deepExtend(deep, clone, copy);                                            // 80
        } else if (copy !== undefined) {                                                                           //
          target[name] = copy;                                                                                     // 82
        }                                                                                                          //
      }                                                                                                            //
    }                                                                                                              //
  }                                                                                                                //
  return target;                                                                                                   // 87
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/autolink.js                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
//https://github.com/bryanwoods/autolink-js                                                                        //
(function () {                                                                                                     // 2
  var a,                                                                                                           // 2
      b = [].slice;a = function () {                                                                               //
    var j, i, d, f, e, c, g, h;c = 1 <= arguments.length ? b.call(arguments, 0) : [];g = /(^|\s)(\b(https?):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|]\b)/ig;if (c.length > 0) {
      e = c[0];i = e.callback;if (i != null && typeof i === "function") {                                          // 2
        j = i;delete e.callback;                                                                                   // 2
      }f = "";for (d in babelHelpers.sanitizeForInObject(e)) {                                                     //
        h = e[d];f += " " + d + "='" + h + "'";                                                                    // 2
      }return this.replace(g, function (l, o, k) {                                                                 //
        var n, m;m = j && j(k);n = m || "<a href='" + k + "'" + f + ">" + k + "</a>";return "" + o + n;            // 2
      });                                                                                                          //
    } else {                                                                                                       //
      return this.replace(g, "$1<a href='$2'>$2</a>");                                                             // 2
    }                                                                                                              //
  };String.prototype.autoLink = a;                                                                                 //
}).call(this);                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/themes.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Telescope theme settings and methods.                                                                           //
 * @namespace Telescope.theme                                                                                      //
 */                                                                                                                //
Telescope.theme = {};                                                                                              // 5
                                                                                                                   //
/**                                                                                                                //
 * Default settings for Telescope themes.                                                                          //
 * @type {Object}                                                                                                  //
 */                                                                                                                //
Telescope.theme.settings = {                                                                                       // 11
  useDropdowns: true // Enable/disable dropdown menus in a theme                                                   // 12
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Get a theme setting value.                                                                                      //
 * @param {String} setting                                                                                         //
 * @param {String} defaultValue                                                                                    //
 */                                                                                                                //
Telescope.theme.getSetting = function (setting, defaultValue) {                                                    // 20
  if (typeof this.settings[setting] !== 'undefined') {                                                             // 21
    return this.settings[setting];                                                                                 // 22
  } else {                                                                                                         //
    return typeof defaultValue === 'undefined' ? '' : defaultValue;                                                // 24
  }                                                                                                                //
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/menus.js                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * Menus namespace                                                                                                 //
 * @namespace Telescope.menuItems                                                                                  //
 */                                                                                                                //
Telescope.menuItems = {};                                                                                          // 5
                                                                                                                   //
/**                                                                                                                //
 * Add one or more items to a menu                                                                                 //
 * @param {string} menu - The name of the menu                                                                     //
 * @param {Object|Object[]} item - The menu item object (or an array of items)                                     //
 *                                                                                                                 //
 * @example <caption>Using a named route</caption>                                                                 //
 * Telescope.menuItems.add("viewsMenu", {                                                                          //
 *   route: 'postsDaily',                                                                                          //
 *   label: 'daily',                                                                                               //
 *   description: 'day_by_day_view'                                                                                //
 * });                                                                                                             //
 *                                                                                                                 //
 * @example <caption>Using a route function</caption>                                                              //
 * Telescope.menuItems.add("userMenu", {                                                                           //
 *   route: function () {                                                                                          //
 *     return FlowRouter.path('user_profile', {_idOrSlug: Meteor.user().telescope.slug});                          //
 *   },                                                                                                            //
 *   label: 'profile',                                                                                             //
 *   description: 'view_your_profile'                                                                              //
 * });                                                                                                             //
 *                                                                                                                 //
 */                                                                                                                //
Telescope.menuItems.add = function (menu, item) {                                                                  // 29
                                                                                                                   //
  // if menu items array doesn't exist yet, initialize it                                                          //
  if (typeof Telescope.menuItems[menu] === "undefined") {                                                          // 32
    Telescope.menuItems[menu] = [];                                                                                // 33
  }                                                                                                                //
                                                                                                                   //
  if (Array.isArray(item)) {                                                                                       // 36
                                                                                                                   //
    var items = item; // we're dealing with an Array, so let's add an "s"                                          // 38
    items.forEach(function (item) {                                                                                // 39
      Telescope.menuItems[menu].push(Telescope.menuItems.internationalize(item));                                  // 40
    });                                                                                                            //
  } else {                                                                                                         //
                                                                                                                   //
    Telescope.menuItems[menu].push(Telescope.menuItems.internationalize(item));                                    // 45
  }                                                                                                                //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Remove an item from a menu                                                                                      //
 * @param {string} menu - The name of the menu                                                                     //
 * @param {string} label - The label of the item to remove                                                         //
 */                                                                                                                //
Telescope.menuItems.remove = function (menu, label) {                                                              // 55
  Telescope.menuItems[menu] = _.reject(Telescope.menuItems[menu], function (menu) {                                // 56
    return menu.label === label;                                                                                   // 57
  });                                                                                                              //
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Remove all items from a menu                                                                                    //
 * @param {string} menu - The name of the menu                                                                     //
 */                                                                                                                //
Telescope.menuItems.removeAll = function (menu) {                                                                  // 65
  Telescope.menuItems[menu] = [];                                                                                  // 66
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Retrieve an array containing all items for a menu                                                               //
 * @param {string} menu - The name of the menu                                                                     //
 */                                                                                                                //
Telescope.menuItems.get = function (menu) {                                                                        // 73
  return _.sortBy(Telescope.menuItems[menu], "order");                                                             // 74
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Replace label and description strings by a function that calls                                                  //
 * i18n.t on said string                                                                                           //
 * @param {Object} item - The menu item                                                                            //
 */                                                                                                                //
Telescope.menuItems.internationalize = function (item) {                                                           // 82
  var i18nItem = _.clone(item);                                                                                    // 83
  if (item.label && typeof item.label === "string") {                                                              // 84
    i18nItem.label = function () {                                                                                 // 85
      return i18n.t(item.label);                                                                                   // 86
    };                                                                                                             //
  }                                                                                                                //
  if (item.description && typeof item.description === "string") {                                                  // 89
    i18nItem.description = function () {                                                                           // 90
      return i18n.t(item.description);                                                                             // 91
    };                                                                                                             //
  }                                                                                                                //
  return i18nItem;                                                                                                 // 94
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/seo.js                                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// SEO                                                                                                             //
                                                                                                                   //
Telescope.SEO = {};                                                                                                // 3
                                                                                                                   //
Telescope.SEO.setTitle = function (title) {                                                                        // 5
  DocHead.setTitle(title);                                                                                         // 6
  DocHead.addMeta({ name: "title", content: title });                                                              // 7
  DocHead.addMeta({ property: "og:title", content: title });                                                       // 8
  DocHead.addMeta({ property: "twitter:title", content: title });                                                  // 9
};                                                                                                                 //
                                                                                                                   //
Telescope.SEO.setDescription = function (description) {                                                            // 12
  DocHead.addMeta({ name: "description", content: description });                                                  // 13
  DocHead.addMeta({ property: "og:description", content: description });                                           // 14
};                                                                                                                 //
                                                                                                                   //
Telescope.SEO.setImage = function (image) {                                                                        // 17
  DocHead.addMeta({ name: "image", content: image });                                                              // 18
  DocHead.addMeta({ property: "og:image", content: image });                                                       // 19
  DocHead.addMeta({ property: "twitter:image", content: image });                                                  // 20
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/base.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// ------------------------------------- Schemas -------------------------------- //                               //
                                                                                                                   //
SimpleSchema.extendOptions({                                                                                       // 4
  "private": Match.Optional(Boolean),                                                                              // 5
  editable: Match.Optional(Boolean), // editable: true means the field can be edited by the document's owner       // 6
  hidden: Match.Optional(Boolean), // hidden: true means the field is never shown in a form no matter what         // 7
  editableBy: Match.Optional([String]),                                                                            // 8
  publishedTo: Match.Optional([String]),                                                                           // 9
  required: Match.Optional(Boolean), // required: true means the field is required to have a complete profile      // 10
  "public": Match.Optional(Boolean), // public: true means the field is published freely                           // 11
  profile: Match.Optional(Boolean), // profile: true means the field is shown on user profiles                     // 12
  template: Match.Optional(String) // template used to display the field                                           // 13
  // editableBy: Match.Optional(String)                                                                            //
});                                                                                                                //
                                                                                                                   //
// ------------------------------ Dynamic Templates ------------------------------ //                              //
                                                                                                                   //
templates = {};                                                                                                    // 19
                                                                                                                   //
// note: not used anymore, but keep for backwards compatibility                                                    //
getTemplate = function (name) {                                                                                    // 22
  // for now, always point back to the original template                                                           //
  var originalTemplate = _.invert(templates)[name];                                                                // 24
  return !!originalTemplate ? originalTemplate : name;                                                             // 25
                                                                                                                   //
  // if template has been overwritten, return this; else return template name                                      //
  // return !!templates[name] ? templates[name] : name;                                                            //
};                                                                                                                 //
                                                                                                                   //
// ------------------------------- Vote Power -------------------------------- //                                  //
                                                                                                                   //
// The equation to determine voting power                                                                          //
// Default to returning 1 for everybody                                                                            //
                                                                                                                   //
getVotePower = function (user) {                                                                                   // 37
  return 1;                                                                                                        // 38
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/colors.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/**                                                                                                                //
 * A dictionnary of all the elements that use custom colors                                                        //
 */                                                                                                                //
                                                                                                                   //
Telescope.colorElements = {};                                                                                      // 5
                                                                                                                   //
Telescope.colorElements.colorTable = {                                                                             // 7
  accentColor: [],                                                                                                 // 8
  accentContrastColor: [],                                                                                         // 9
  secondaryColor: [],                                                                                              // 10
  secondaryContrastColor: []                                                                                       // 11
};                                                                                                                 //
                                                                                                                   //
Telescope.colorElements.defaultColors = {                                                                          // 14
  accentColor: "#DD3416", // red                                                                                   // 15
  accentContrastColor: "#ffffff", // white                                                                         // 16
  secondaryColor: "#4e555d", // slate                                                                              // 17
  secondaryContrastColor: "#ffffff" // white                                                                       // 18
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * Register an element to use a custom color                                                                       //
 * @param {string} selector - the CSS selector of the element                                                      //
 * @param {string} color - the color. Either `accentColor`, `accentContrastColor`, `secondaryColor`, or `secondaryContrastColor`
 * @param {string} [property=color] - the property to colorize. Usually `color`, `background-color`, `border-color`, etc. 
 */                                                                                                                //
Telescope.colorElements.add = function (selector, color, property) {                                               // 27
  var element = { selector: selector };                                                                            // 28
                                                                                                                   //
  if (typeof property !== "undefined") element.property = property;                                                // 30
                                                                                                                   //
  Telescope.colorElements.colorTable[color].push(element);                                                         // 33
};                                                                                                                 //
                                                                                                                   //
// shortcuts                                                                                                       //
var setShortcut = function (name) {                                                                                // 37
  return function (selector, property) {                                                                           // 38
    Telescope.colorElements.add(selector, name, property);                                                         // 39
  };                                                                                                               //
};                                                                                                                 //
                                                                                                                   //
var accent = setShortcut('accentColor');                                                                           // 43
var accentContrast = setShortcut('accentContrastColor');                                                           // 44
var secondary = setShortcut('secondaryColor');                                                                     // 45
var secondaryContrast = setShortcut('secondaryContrastColor');                                                     // 46
                                                                                                                   //
// accentColor                                                                                                     //
                                                                                                                   //
accent("a:hover");                                                                                                 // 50
accent(".post-content .post-heading .post-title:hover");                                                           // 51
accent(".upvoted .upvote-link");                                                                                   // 52
accent(".downvoted .downvote-link");                                                                               // 53
accent(".upvoted .upvote");                                                                                        // 54
accent(".downvoted .downvote");                                                                                    // 55
accent(".toggle-actions-link");                                                                                    // 56
accent(".post-meta a:hover");                                                                                      // 57
accent(".action:hover");                                                                                           // 58
accent(".post-actions .icon");                                                                                     // 59
                                                                                                                   //
accent('input[type="submit"]', 'background-color');                                                                // 61
accent("button", 'background-color');                                                                              // 62
accent(".button", 'background-color');                                                                             // 63
accent(".auth-buttons #login-buttons #login-buttons-password", 'background-color');                                // 64
accent(".btn-primary", 'background-color');                                                                        // 65
accent(".header .btn-primary", 'background-color');                                                                // 66
accent(".header .btn-primary:link", 'background-color');                                                           // 67
accent(".header .btn-primary:visited", 'background-color');                                                        // 68
accent(".error", 'background-color');                                                                              // 69
accent(".mobile-menu-button", 'background-color');                                                                 // 70
accent(".login-link-text", 'background-color');                                                                    // 71
accent(".post-category:hover", 'background-color');                                                                // 72
                                                                                                                   //
accent(".icon-more", "border-color");                                                                              // 74
accent(".post-admin a:hover", "background-color");                                                                 // 75
                                                                                                                   //
// accentContrastColor                                                                                             //
                                                                                                                   //
accentContrast('input[type="submit"]');                                                                            // 79
accentContrast("button");                                                                                          // 80
accentContrast(".button");                                                                                         // 81
accentContrast(".menu-dropdown .menu-wrapper a.button");                                                           // 82
accentContrast(".auth-buttons #login-buttons #login-buttons-password");                                            // 83
accentContrast(".btn-primary");                                                                                    // 84
accentContrast(".btn-primary:link");                                                                               // 85
accentContrast(".btn-primary:hover");                                                                              // 86
accentContrast(".header .btn-primary:link");                                                                       // 87
accentContrast(".header .btn-primary:visited");                                                                    // 88
accentContrast(".error");                                                                                          // 89
accentContrast(".header a.mobile-menu-button");                                                                    // 90
accentContrast("login-link-text");                                                                                 // 91
accentContrast(".post-category:hover");                                                                            // 92
accentContrast(".post-admin a:hover", "color");                                                                    // 93
                                                                                                                   //
// secondaryColor                                                                                                  //
                                                                                                                   //
secondary(".header", "background-color");                                                                          // 97
                                                                                                                   //
// secondaryContrastColor                                                                                          //
                                                                                                                   //
secondaryContrast(".header");                                                                                      // 101
secondaryContrast(".header .logo a");                                                                              // 102
secondaryContrast(".header .logo a:visited");                                                                      // 103
                                                                                                                   //
secondaryContrast(".header .dropdown-top-level", "border-color");                                                  // 105
secondaryContrast(".header .dropdown-accordion .show-more", "border-color");                                       // 106
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/icons.js                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
// ------------------------------ Dynamic Icons ------------------------------ //                                  //
                                                                                                                   //
/**                                                                                                                //
 * Take an icon name (such as "open") and return the HTML code to display the icon                                 //
 * @param {string} iconName - the name of the icon                                                                 //
 * @param {string} [iconClass] - an optional class to assign to the icon                                           //
 */                                                                                                                //
Telescope.utils.getIcon = function (iconName, iconClass) {                                                         // 8
  var icons = Telescope.utils.icons;                                                                               // 9
  var iconCode = !!icons[iconName] ? icons[iconName] : iconName;                                                   // 10
  var iconClass = typeof iconClass === 'string' ? ' ' + iconClass : '';                                            // 11
  return '<i class="icon fa fa-fw fa-' + iconCode + ' icon-' + iconName + iconClass + '" aria-hidden="true"></i>';
};                                                                                                                 //
                                                                                                                   //
/**                                                                                                                //
 * A directory of icon keys and icon codes                                                                         //
 */                                                                                                                //
Telescope.utils.icons = {                                                                                          // 18
  expand: "angle-right",                                                                                           // 19
  collapse: "angle-down",                                                                                          // 20
  next: "angle-right",                                                                                             // 21
  close: "times",                                                                                                  // 22
  upvote: "chevron-up",                                                                                            // 23
  voted: "check",                                                                                                  // 24
  downvote: "chevron-down",                                                                                        // 25
  facebook: "facebook-square",                                                                                     // 26
  twitter: "twitter",                                                                                              // 27
  googleplus: "google-plus",                                                                                       // 28
  linkedin: "linkedin-square",                                                                                     // 29
  comment: "comment-o",                                                                                            // 30
  share: "share-square-o",                                                                                         // 31
  more: "ellipsis-h",                                                                                              // 32
  menu: "bars",                                                                                                    // 33
  subscribe: "envelope-o",                                                                                         // 34
  'delete': "trash-o",                                                                                             // 35
  edit: "pencil",                                                                                                  // 36
  popularity: "fire",                                                                                              // 37
  time: "clock-o",                                                                                                 // 38
  best: "star",                                                                                                    // 39
  search: "search",                                                                                                // 40
  edit: "pencil",                                                                                                  // 41
  approve: "check-circle-o",                                                                                       // 42
  reject: "times-circle-o",                                                                                        // 43
  views: "eye",                                                                                                    // 44
  clicks: "mouse-pointer",                                                                                         // 45
  score: "line-chart"                                                                                              // 46
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/router.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
FlowRouter.addToQueryArray = function (key, value) {                                                               // 1
  var keyArray = FlowRouter.getQueryParam(key) || [];                                                              // 2
  keyArray.push(value);                                                                                            // 3
  var params = {};                                                                                                 // 4
  params[key] = keyArray;                                                                                          // 5
  FlowRouter.setQueryParams(params);                                                                               // 6
};                                                                                                                 //
                                                                                                                   //
FlowRouter.removeFromQueryArray = function (key, value) {                                                          // 9
  var keyArray = FlowRouter.getQueryParam(key);                                                                    // 10
  keyArray = _.without(keyArray, value);                                                                           // 11
  var params = {};                                                                                                 // 12
  params[key] = keyArray;                                                                                          // 13
  FlowRouter.setQueryParams(params);                                                                               // 14
};                                                                                                                 //
                                                                                                                   //
Telescope.adminRoutes = FlowRouter.group({                                                                         // 17
  prefix: '/admin',                                                                                                // 18
  name: 'admin'                                                                                                    // 19
});                                                                                                                //
                                                                                                                   //
FlowRouter.notFound = {                                                                                            // 22
  action: function () {                                                                                            // 23
    if (Meteor.isClient) {                                                                                         // 24
      DocHead.addMeta({                                                                                            // 25
        name: "name",                                                                                              // 26
        property: "prerender-status-code",                                                                         // 27
        content: "404"                                                                                             // 28
      });                                                                                                          //
      DocHead.addMeta({                                                                                            // 30
        name: "name",                                                                                              // 31
        property: "robots",                                                                                        // 32
        content: "noindex, nofollow"                                                                               // 33
      });                                                                                                          //
    }                                                                                                              //
    BlazeLayout.render("layout", { main: "not_found" });                                                           // 36
  }                                                                                                                //
};                                                                                                                 //
                                                                                                                   //
FlowRouter.triggers.enter([function () {                                                                           // 40
  Events.analyticsRequest();                                                                                       // 40
}]);                                                                                                               //
                                                                                                                   //
FlowRouter.triggers.exit([function () {                                                                            // 42
  Messages.clearSeen();                                                                                            // 42
}]);                                                                                                               //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/custom_template_prefix.js                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.startup(function () {                                                                                       // 1
                                                                                                                   //
  // "custom_" is always loaded last, so it takes priority over every other prefix                                 //
  Telescope.config.addCustomPrefix("custom_");                                                                     // 4
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/client/jquery.exists.js                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
$.fn.exists = function () {                                                                                        // 1
  return this.length !== 0;                                                                                        // 2
};                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/telescope_lib/lib/client/template_replacement.js                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.startup(function () {                                                                                       // 1
                                                                                                                   //
  // loop over custom prefixes                                                                                     //
  Telescope.config.customPrefixes.forEach(function (prefix) {                                                      // 4
                                                                                                                   //
    // for each prefix, loop over all templates to find any replacements                                           //
    Template.forEach(function (template) {                                                                         // 7
                                                                                                                   //
      var templateName = template.viewName.replace("Template.", "");                                               // 9
                                                                                                                   //
      // if current template name starts with the prefix, find original template and replace it                    //
      if (templateName.slice(0, prefix.length) === prefix) {                                                       // 12
        var oldTemplate = templateName.slice(prefix.length);                                                       // 13
        template.replaces(oldTemplate);                                                                            // 14
      }                                                                                                            //
    });                                                                                                            //
  });                                                                                                              //
});                                                                                                                //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:lib'] = {
  Telescope: Telescope,
  _: _,
  getTemplate: getTemplate,
  templates: templates,
  themeSettings: themeSettings,
  getVotePower: getVotePower
};

})();
