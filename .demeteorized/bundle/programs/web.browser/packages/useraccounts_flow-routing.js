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
var check = Package.check.check;
var Match = Package.check.Match;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var _ = Package.underscore._;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Accounts = Package['accounts-base'].Accounts;
var AccountsClient = Package['accounts-base'].AccountsClient;
var T9n = Package['softwarerero:accounts-t9n'].T9n;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/useraccounts_flow-routing/lib/core.js                                                              //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
/* global                                                                                                      // 1
  AccountsTemplates: false,                                                                                    // 2
  BlazeLayout: false,                                                                                          // 3
  FlowRouter: false                                                                                            // 4
*/                                                                                                             // 5
'use strict';                                                                                                  // 6
                                                                                                               // 7
// ---------------------------------------------------------------------------------                           // 8
                                                                                                               // 9
// Patterns for methods" parameters                                                                            // 10
                                                                                                               // 11
// ---------------------------------------------------------------------------------                           // 12
                                                                                                               // 13
// Add new configuration options                                                                               // 14
_.extend(AccountsTemplates.CONFIG_PAT, {                                                                       // 15
  defaultTemplate: Match.Optional(String),                                                                     // 16
  defaultLayoutRegions: Match.Optional(Object),                                                                // 17
  defaultContentRegion: Match.Optional(String),                                                                // 18
  renderLayout: Match.Optional(Object),                                                                        // 19
  contentRange: Match.Optional(String),                                                                        // 20
});                                                                                                            // 21
                                                                                                               // 22
// Route configuration pattern to be checked with check                                                        // 23
var ROUTE_PAT = {                                                                                              // 24
  name: Match.Optional(String),                                                                                // 25
  path: Match.Optional(String),                                                                                // 26
  template: Match.Optional(String),                                                                            // 27
  layoutTemplate: Match.Optional(String),                                                                      // 28
  renderLayout: Match.Optional(Object),                                                                        // 29
  contentRange: Match.Optional(String),                                                                        // 30
  redirect: Match.Optional(Match.OneOf(String, Match.Where(_.isFunction))),                                    // 31
};                                                                                                             // 32
                                                                                                               // 33
/*                                                                                                             // 34
  Routes configuration can be done by calling AccountsTemplates.configureRoute with the route name and the     // 35
  following options in a separate object. E.g. AccountsTemplates.configureRoute("gingIn", option);             // 36
    name:           String (optional). A unique route"s name to be passed to iron-router                       // 37
    path:           String (optional). A unique route"s path to be passed to iron-router                       // 38
    template:       String (optional). The name of the template to be rendered                                 // 39
    layoutTemplate: String (optional). The name of the layout to be used                                       // 40
    redirect:       String (optional). The name of the route (or its path) where to redirect after form submit
*/                                                                                                             // 42
                                                                                                               // 43
                                                                                                               // 44
// Allowed routes along with theirs default configuration values                                               // 45
AccountsTemplates.ROUTE_DEFAULT = {                                                                            // 46
  changePwd:      { name: "atChangePwd",      path: "/change-password"},                                       // 47
  enrollAccount:  { name: "atEnrollAccount",  path: "/enroll-account"},                                        // 48
  ensureSignedIn: { name: "atEnsureSignedIn", path: null},                                                     // 49
  forgotPwd:      { name: "atForgotPwd",      path: "/forgot-password"},                                       // 50
  resetPwd:       { name: "atResetPwd",       path: "/reset-password"},                                        // 51
  signIn:         { name: "atSignIn",         path: "/sign-in"},                                               // 52
  signUp:         { name: "atSignUp",         path: "/sign-up"},                                               // 53
  verifyEmail:    { name: "atVerifyEmail",    path: "/verify-email"},                                          // 54
  resendVerificationEmail: { name: "atResendVerificationEmail", path: "/send-again"}                           // 55
};                                                                                                             // 56
                                                                                                               // 57
                                                                                                               // 58
// Current configuration values                                                                                // 59
AccountsTemplates.options.defaultLayoutRegions = {};                                                           // 60
// Redirects                                                                                                   // 61
AccountsTemplates.options.homeRoutePath = "/";                                                                 // 62
AccountsTemplates.options.redirectTimeout = 2000; // 2 seconds                                                 // 63
                                                                                                               // 64
// Known routes used to filter out previous path for redirects...                                              // 65
AccountsTemplates.knownRoutes = [];                                                                            // 66
                                                                                                               // 67
// Configured routes                                                                                           // 68
AccountsTemplates.routes = {};                                                                                 // 69
                                                                                                               // 70
AccountsTemplates.configureRoute = function(route, options) {                                                  // 71
  check(route, String);                                                                                        // 72
  check(options, Match.OneOf(undefined, Match.ObjectIncluding(ROUTE_PAT)));                                    // 73
  options = _.clone(options);                                                                                  // 74
  // Route Configuration can be done only before initialization                                                // 75
  if (this._initialized) {                                                                                     // 76
    throw new Error("Route Configuration can be done only before AccountsTemplates.init!");                    // 77
  }                                                                                                            // 78
  // Only allowed routes can be configured                                                                     // 79
  if (!(route in this.ROUTE_DEFAULT)) {                                                                        // 80
    throw new Error("Unknown Route!");                                                                         // 81
  }                                                                                                            // 82
  // Allow route configuration only once                                                                       // 83
  if (route in this.routes) {                                                                                  // 84
    throw new Error("Route already configured!");                                                              // 85
  }                                                                                                            // 86
                                                                                                               // 87
  // Possibly adds a initial / to the provided path                                                            // 88
  if (options && options.path && options.path[0] !== "/") {                                                    // 89
    options.path = "/" + options.path;                                                                         // 90
  }                                                                                                            // 91
                                                                                                               // 92
  // Updates the current configuration                                                                         // 93
  options = _.defaults(options || {}, this.ROUTE_DEFAULT[route]);                                              // 94
                                                                                                               // 95
  // Store route options                                                                                       // 96
  this.routes[route] = options;                                                                                // 97
                                                                                                               // 98
  // Known routes are used to filter out previous path for redirects...                                        // 99
  AccountsTemplates.knownRoutes.push(options.name);                                                            // 100
                                                                                                               // 101
  if (Meteor.isServer) {                                                                                       // 102
    // Configures "reset password" email link                                                                  // 103
    if (route === "resetPwd") {                                                                                // 104
      var resetPwdPath = options.path.substr(1);                                                               // 105
      Accounts.urls.resetPassword = function(token) {                                                          // 106
        return Meteor.absoluteUrl(resetPwdPath + "/" + token);                                                 // 107
      };                                                                                                       // 108
    }                                                                                                          // 109
    // Configures "enroll account" email link                                                                  // 110
    if (route === "enrollAccount") {                                                                           // 111
      var enrollAccountPath = options.path.substr(1);                                                          // 112
      Accounts.urls.enrollAccount = function(token) {                                                          // 113
        return Meteor.absoluteUrl(enrollAccountPath + "/" + token);                                            // 114
      };                                                                                                       // 115
    }                                                                                                          // 116
    // Configures "verify email" email link                                                                    // 117
    if (route === "verifyEmail") {                                                                             // 118
      var verifyEmailPath = options.path.substr(1);                                                            // 119
      Accounts.urls.verifyEmail = function(token) {                                                            // 120
        return Meteor.absoluteUrl(verifyEmailPath + "/" + token);                                              // 121
      };                                                                                                       // 122
    }                                                                                                          // 123
  }                                                                                                            // 124
                                                                                                               // 125
  if (route === "ensureSignedIn") {                                                                            // 126
    return;                                                                                                    // 127
  }                                                                                                            // 128
  if (route === "changePwd" && !AccountsTemplates.options.enablePasswordChange) {                              // 129
    throw new Error("changePwd route configured but enablePasswordChange set to false!");                      // 130
  }                                                                                                            // 131
  if (route === "forgotPwd" && !AccountsTemplates.options.showForgotPasswordLink) {                            // 132
    throw new Error("forgotPwd route configured but showForgotPasswordLink set to false!");                    // 133
  }                                                                                                            // 134
  if (route === "signUp" && AccountsTemplates.options.forbidClientAccountCreation) {                           // 135
    throw new Error("signUp route configured but forbidClientAccountCreation set to true!");                   // 136
  }                                                                                                            // 137
                                                                                                               // 138
  // fullPageAtForm template unless user specified a different site-wide default                               // 139
  var defaultTemplate = AccountsTemplates.options.defaultTemplate || "fullPageAtForm";                         // 140
  // Determines the default layout to be used in case no specific one is                                       // 141
  // specified for single routes                                                                               // 142
  var defaultLayout = AccountsTemplates.options.defaultLayout;                                                 // 143
  var defaultLayoutRegions = AccountsTemplates.options.defaultLayoutRegions;                                   // 144
  var defaultContentRegion = AccountsTemplates.options.defaultContentRegion;                                   // 145
                                                                                                               // 146
  var name = options.name; // Default provided...                                                              // 147
  var path = options.path; // Default provided...                                                              // 148
  var template = options.template || defaultTemplate;                                                          // 149
  var layoutTemplate = options.layoutTemplate || defaultLayout;                                                // 150
  var contentRegion = options.contentRegion || defaultContentRegion;                                           // 151
  var layoutRegions = _.clone(options.layoutRegions || defaultLayoutRegions || {});                            // 152
  layoutRegions[contentRegion] = template;                                                                     // 153
                                                                                                               // 154
  // Possibly adds token parameter                                                                             // 155
  if (_.contains(["enrollAccount", "resetPwd", "verifyEmail"], route)) {                                       // 156
    path += "/:paramToken";                                                                                    // 157
    if (route === "verifyEmail") {                                                                             // 158
      FlowRouter.route(path, {                                                                                 // 159
        name: name,                                                                                            // 160
        triggersEnter: [                                                                                       // 161
          function() {                                                                                         // 162
            AccountsTemplates.setState(route);                                                                 // 163
            AccountsTemplates.setDisabled(true);                                                               // 164
          }                                                                                                    // 165
        ],                                                                                                     // 166
        action: function(params) {                                                                             // 167
          BlazeLayout.render(layoutTemplate, layoutRegions);                                                   // 168
                                                                                                               // 169
          var token = params.paramToken;                                                                       // 170
          Accounts.verifyEmail(token, function(error) {                                                        // 171
            AccountsTemplates.setDisabled(false);                                                              // 172
            AccountsTemplates.submitCallback(error, route, function() {                                        // 173
              AccountsTemplates.state.form.set("result", AccountsTemplates.texts.info.emailVerified);          // 174
            });                                                                                                // 175
          });                                                                                                  // 176
        }                                                                                                      // 177
      });                                                                                                      // 178
    } else {                                                                                                   // 179
      FlowRouter.route(path, {                                                                                 // 180
        name: name,                                                                                            // 181
        triggersEnter: [                                                                                       // 182
          function() {                                                                                         // 183
            AccountsTemplates.setState(route);                                                                 // 184
          }                                                                                                    // 185
        ],                                                                                                     // 186
        action: function(params) {                                                                             // 187
          BlazeLayout.render(layoutTemplate, layoutRegions);                                                   // 188
        }                                                                                                      // 189
      });                                                                                                      // 190
    }                                                                                                          // 191
  } else {                                                                                                     // 192
    FlowRouter.route(path, {                                                                                   // 193
      name: name,                                                                                              // 194
      triggersEnter: [                                                                                         // 195
        function() {                                                                                           // 196
          var redirect = false;                                                                                // 197
          if (route === 'changePwd') {                                                                         // 198
            if (!Meteor.loggingIn() && !Meteor.userId()) {                                                     // 199
              redirect = true;                                                                                 // 200
            }                                                                                                  // 201
          } else if (Meteor.userId()) {                                                                        // 202
            redirect = true;                                                                                   // 203
          }                                                                                                    // 204
          if (redirect) {                                                                                      // 205
            AccountsTemplates.postSubmitRedirect(route);                                                       // 206
          } else {                                                                                             // 207
            AccountsTemplates.setState(route);                                                                 // 208
          }                                                                                                    // 209
        }                                                                                                      // 210
      ],                                                                                                       // 211
      action: function() {                                                                                     // 212
        BlazeLayout.render(layoutTemplate, layoutRegions);                                                     // 213
      }                                                                                                        // 214
    });                                                                                                        // 215
  }                                                                                                            // 216
};                                                                                                             // 217
                                                                                                               // 218
                                                                                                               // 219
AccountsTemplates.getRouteName = function(route) {                                                             // 220
  if (route in this.routes) {                                                                                  // 221
    return this.routes[route].name;                                                                            // 222
  }                                                                                                            // 223
  return null;                                                                                                 // 224
};                                                                                                             // 225
                                                                                                               // 226
AccountsTemplates.getRoutePath = function(route) {                                                             // 227
  if (route in this.routes) {                                                                                  // 228
    return this.routes[route].path;                                                                            // 229
  }                                                                                                            // 230
  return "#";                                                                                                  // 231
};                                                                                                             // 232
                                                                                                               // 233
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/useraccounts_flow-routing/lib/client/client.js                                                     //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
/* global                                                                                                      // 1
  AccountsTemplates: false,                                                                                    // 2
  BlazeLayout: false,                                                                                          // 3
  grecaptcha: false,                                                                                           // 4
  FlowRouter: false,                                                                                           // 5
  $: false                                                                                                     // 6
*/                                                                                                             // 7
'use strict';                                                                                                  // 8
                                                                                                               // 9
                                                                                                               // 10
// Previous path used for redirect after form submit                                                           // 11
AccountsTemplates._prevPath = null;                                                                            // 12
                                                                                                               // 13
// Possibly keeps reference to the handle for the timed out redirect                                           // 14
// set on some routes                                                                                          // 15
AccountsTemplates.timedOutRedirect = null;                                                                     // 16
                                                                                                               // 17
                                                                                                               // 18
AccountsTemplates.clearState = function() {                                                                    // 19
  _.each(this._fields, function(field) {                                                                       // 20
    field.clearStatus();                                                                                       // 21
  });                                                                                                          // 22
  var form = this.state.form;                                                                                  // 23
  form.set('error', null);                                                                                     // 24
  form.set('result', null);                                                                                    // 25
  form.set('message', null);                                                                                   // 26
                                                                                                               // 27
  AccountsTemplates.setDisabled(false);                                                                        // 28
                                                                                                               // 29
  // Possibly clears timed out redirects                                                                       // 30
  if (AccountsTemplates.timedOutRedirect !== null) {                                                           // 31
    Meteor.clearTimeout(AccountsTemplates.timedOutRedirect);                                                   // 32
    AccountsTemplates.timedOutRedirect = null;                                                                 // 33
  }                                                                                                            // 34
};                                                                                                             // 35
                                                                                                               // 36
AccountsTemplates.getparamToken = function() {                                                                 // 37
  return FlowRouter.getParam('paramToken');                                                                    // 38
};                                                                                                             // 39
                                                                                                               // 40
// Getter for previous route's path                                                                            // 41
AccountsTemplates.getPrevPath = function() {                                                                   // 42
  return this._prevPath;                                                                                       // 43
};                                                                                                             // 44
                                                                                                               // 45
// Setter for previous route's path                                                                            // 46
AccountsTemplates.setPrevPath = function(newPath) {                                                            // 47
  check(newPath, String);                                                                                      // 48
  this._prevPath = newPath;                                                                                    // 49
};                                                                                                             // 50
                                                                                                               // 51
AccountsTemplates.ensureSignedIn = function(context, redirect) {                                               // 52
  if (!Meteor.userId()) {                                                                                      // 53
    // if we're not already on an AT route                                                                     // 54
    if (!_.contains(AccountsTemplates.knownRoutes, context.route.name)) {                                      // 55
                                                                                                               // 56
      AccountsTemplates.setState(AccountsTemplates.options.defaultState, function() {                          // 57
        var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                               // 58
        AccountsTemplates.state.form.set("error", [err]);                                                      // 59
      });                                                                                                      // 60
                                                                                                               // 61
      // redirect settings                                                                                     // 62
      AccountsTemplates.avoidRedirect = true;                                                                  // 63
      AccountsTemplates.avoidClearError = true;                                                                // 64
      AccountsTemplates.redirectToPrevPath = true;                                                             // 65
                                                                                                               // 66
      // redirect to defined sign-in route and then redirect back                                              // 67
      // to original route after successful sign in                                                            // 68
      var signInRouteName = AccountsTemplates.getRouteName('signIn');                                          // 69
      if (signInRouteName) {                                                                                   // 70
        redirect(signInRouteName);                                                                             // 71
      }                                                                                                        // 72
      else {                                                                                                   // 73
        throw Error('[ensureSignedIn] no signIn route configured!');                                           // 74
      }                                                                                                        // 75
    }                                                                                                          // 76
  }                                                                                                            // 77
};                                                                                                             // 78
                                                                                                               // 79
// Stores previous path on path change...                                                                      // 80
FlowRouter.triggers.exit([                                                                                     // 81
  function(context) {                                                                                          // 82
    var routeName = context.route.name;                                                                        // 83
    var knownRoute = _.contains(AccountsTemplates.knownRoutes, routeName);                                     // 84
    if (!knownRoute) {                                                                                         // 85
      AccountsTemplates.setPrevPath(context.path);                                                             // 86
    }                                                                                                          // 87
  }                                                                                                            // 88
]);                                                                                                            // 89
                                                                                                               // 90
AccountsTemplates.linkClick = function(route) {                                                                // 91
  if (AccountsTemplates.disabled()) {                                                                          // 92
    return;                                                                                                    // 93
  }                                                                                                            // 94
  var path = AccountsTemplates.getRoutePath(route);                                                            // 95
  if (path === '#' || AccountsTemplates.avoidRedirect || path === FlowRouter.current().path) {                 // 96
    AccountsTemplates.setState(route);                                                                         // 97
  } else {                                                                                                     // 98
    Meteor.defer(function() {                                                                                  // 99
      FlowRouter.go(path);                                                                                     // 100
    });                                                                                                        // 101
  }                                                                                                            // 102
                                                                                                               // 103
  if (AccountsTemplates.options.focusFirstInput) {                                                             // 104
    var firstVisibleInput = _.find(this.getFields(), function(f) {                                             // 105
      return _.contains(f.visible, route);                                                                     // 106
    });                                                                                                        // 107
    if (firstVisibleInput) {                                                                                   // 108
      $('input#at-field-' + firstVisibleInput._id).focus();                                                    // 109
    }                                                                                                          // 110
  }                                                                                                            // 111
};                                                                                                             // 112
                                                                                                               // 113
AccountsTemplates.logout = function() {                                                                        // 114
  var onLogoutHook = AccountsTemplates.options.onLogoutHook;                                                   // 115
  var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                                 // 116
  Meteor.logout(function() {                                                                                   // 117
    if (onLogoutHook) {                                                                                        // 118
      onLogoutHook();                                                                                          // 119
    } else if (homeRoutePath) {                                                                                // 120
      FlowRouter.redirect(homeRoutePath);                                                                      // 121
    }                                                                                                          // 122
  });                                                                                                          // 123
};                                                                                                             // 124
                                                                                                               // 125
AccountsTemplates.postSubmitRedirect = function(route) {                                                       // 126
  if (AccountsTemplates.avoidRedirect) {                                                                       // 127
    AccountsTemplates.avoidRedirect = false;                                                                   // 128
    if (AccountsTemplates.redirectToPrevPath) {                                                                // 129
      FlowRouter.redirect(AccountsTemplates.getPrevPath());                                                    // 130
    }                                                                                                          // 131
  } else {                                                                                                     // 132
    var nextPath = AccountsTemplates.routes[route] && AccountsTemplates.routes[route].redirect;                // 133
    if (nextPath) {                                                                                            // 134
      if (_.isFunction(nextPath)) {                                                                            // 135
        nextPath();                                                                                            // 136
      } else {                                                                                                 // 137
        FlowRouter.go(nextPath);                                                                               // 138
      }                                                                                                        // 139
    } else {                                                                                                   // 140
      var previousPath = AccountsTemplates.getPrevPath();                                                      // 141
      if (previousPath && FlowRouter.current().path !== previousPath) {                                        // 142
        FlowRouter.go(previousPath);                                                                           // 143
      } else {                                                                                                 // 144
        var homeRoutePath = AccountsTemplates.options.homeRoutePath;                                           // 145
        if (homeRoutePath) {                                                                                   // 146
          FlowRouter.go(homeRoutePath);                                                                        // 147
        }                                                                                                      // 148
      }                                                                                                        // 149
    }                                                                                                          // 150
  }                                                                                                            // 151
};                                                                                                             // 152
                                                                                                               // 153
AccountsTemplates.submitCallback = function(error, state, onSuccess) {                                         // 154
                                                                                                               // 155
  var onSubmitHook = AccountsTemplates.options.onSubmitHook;                                                   // 156
  if (onSubmitHook) {                                                                                          // 157
    onSubmitHook(error, state);                                                                                // 158
  }                                                                                                            // 159
                                                                                                               // 160
  if (error) {                                                                                                 // 161
    if (_.isObject(error.details)) {                                                                           // 162
      // If error.details is an object, we may try to set fields errors from it                                // 163
      _.each(error.details, function(error, fieldId) {                                                         // 164
        AccountsTemplates.getField(fieldId).setError(error);                                                   // 165
      });                                                                                                      // 166
    } else {                                                                                                   // 167
      var err = 'error.accounts.Unknown error';                                                                // 168
      if (error.reason) {                                                                                      // 169
        err = error.reason;                                                                                    // 170
      }                                                                                                        // 171
      if (err.substring(0, 15) !== 'error.accounts.') {                                                        // 172
        err = 'error.accounts.' + err;                                                                         // 173
      }                                                                                                        // 174
      AccountsTemplates.state.form.set('error', [err]);                                                        // 175
    }                                                                                                          // 176
    AccountsTemplates.setDisabled(false);                                                                      // 177
    // Possibly resets reCaptcha form                                                                          // 178
    if (state === 'signUp' && AccountsTemplates.options.showReCaptcha) {                                       // 179
      grecaptcha.reset();                                                                                      // 180
    }                                                                                                          // 181
  } else {                                                                                                     // 182
    if (onSuccess) {                                                                                           // 183
      onSuccess();                                                                                             // 184
    }                                                                                                          // 185
                                                                                                               // 186
    if (_.contains(['enrollAccount', 'forgotPwd', 'resetPwd', 'verifyEmail'], state)) {                        // 187
      var redirectTimeout = AccountsTemplates.options.redirectTimeout;                                         // 188
      if (redirectTimeout > 0) {                                                                               // 189
        AccountsTemplates.timedOutRedirect = Meteor.setTimeout(function() {                                    // 190
          AccountsTemplates.timedOutRedirect = null;                                                           // 191
          AccountsTemplates.setDisabled(false);                                                                // 192
          AccountsTemplates.postSubmitRedirect(state);                                                         // 193
        }, redirectTimeout);                                                                                   // 194
      }                                                                                                        // 195
    } else if (state) {                                                                                        // 196
      AccountsTemplates.setDisabled(false);                                                                    // 197
      AccountsTemplates.postSubmitRedirect(state);                                                             // 198
    }                                                                                                          // 199
  }                                                                                                            // 200
};                                                                                                             // 201
                                                                                                               // 202
// Initialization                                                                                              // 203
if (FlowRouter && FlowRouter.initialize) {                                                                     // 204
  // In order for ensureSignIn triggers to work,                                                               // 205
  // AccountsTemplates must be initialized before FlowRouter                                                   // 206
  // (this is now true since useraccounts:core is being executed first...)                                     // 207
  var oldInitialize = FlowRouter.initialize;                                                                   // 208
  FlowRouter.initialize = function() {                                                                         // 209
    AccountsTemplates._init();                                                                                 // 210
    oldInitialize.apply(this, arguments);                                                                      // 211
  };                                                                                                           // 212
}                                                                                                              // 213
                                                                                                               // 214
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/useraccounts_flow-routing/lib/client/templates_helpers/at_input.js                                 //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
/* global                                                                                                      // 1
  AccountsTemplates: false,                                                                                    // 2
  FlowRouter: false                                                                                            // 3
*/                                                                                                             // 4
'use strict';                                                                                                  // 5
                                                                                                               // 6
AccountsTemplates.atInputRendered.push(function(){                                                             // 7
  var fieldId = this.data._id;                                                                                 // 8
  var queryKey = this.data.options && this.data.options.queryKey || fieldId;                                   // 9
  var inputQueryVal = FlowRouter.getQueryParam(queryKey);                                                      // 10
  if (inputQueryVal) {                                                                                         // 11
    this.$("input#at-field-" + fieldId).val(inputQueryVal);                                                    // 12
  }                                                                                                            // 13
});                                                                                                            // 14
                                                                                                               // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['useraccounts:flow-routing'] = {};

})();
