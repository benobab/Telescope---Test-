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
var Telescope = Package['telescope:lib'].Telescope;
var _ = Package.underscore._;
var getTemplate = Package['telescope:lib'].getTemplate;
var templates = Package['telescope:lib'].templates;
var themeSettings = Package['telescope:lib'].themeSettings;
var getVotePower = Package['telescope:lib'].getVotePower;
var i18n = Package['telescope:i18n'].i18n;
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
var Settings, debug, __, registerI18nTemplate, registerTemplate, non_package_templates, translations;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/settings.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/**                                                                                                                  //
 * The global namespace for Settings.                                                                                //
 * @namespace Settings                                                                                               //
 */                                                                                                                  //
Settings = new Mongo.Collection("settings");                                                                         // 5
                                                                                                                     //
Settings.schema = new SimpleSchema({                                                                                 // 7
  title: {                                                                                                           // 8
    type: String,                                                                                                    // 9
    optional: true,                                                                                                  // 10
    autoform: {                                                                                                      // 11
      group: "01_general"                                                                                            // 12
    }                                                                                                                //
  },                                                                                                                 //
  siteUrl: {                                                                                                         // 15
    type: String,                                                                                                    // 16
    optional: true,                                                                                                  // 17
    // regEx: SimpleSchema.RegEx.Url,                                                                                //
    autoform: {                                                                                                      // 19
      group: "01_general",                                                                                           // 20
      type: "bootstrap-url",                                                                                         // 21
      instructions: 'Your site\'s URL (with trailing "/"). Will default to Meteor.absoluteUrl()'                     // 22
    }                                                                                                                //
  },                                                                                                                 //
  tagline: {                                                                                                         // 25
    type: String,                                                                                                    // 26
    optional: true,                                                                                                  // 27
    autoform: {                                                                                                      // 28
      group: "01_general"                                                                                            // 29
    }                                                                                                                //
  },                                                                                                                 //
  description: {                                                                                                     // 32
    type: String,                                                                                                    // 33
    optional: true,                                                                                                  // 34
    autoform: {                                                                                                      // 35
      group: "01_general",                                                                                           // 36
      rows: 5,                                                                                                       // 37
      instructions: 'A short description used for SEO purposes.'                                                     // 38
    }                                                                                                                //
  },                                                                                                                 //
  siteImage: {                                                                                                       // 41
    type: String,                                                                                                    // 42
    optional: true,                                                                                                  // 43
    regEx: SimpleSchema.RegEx.Url,                                                                                   // 44
    autoform: {                                                                                                      // 45
      group: "01_general",                                                                                           // 46
      instructions: "URL to an image for the open graph image tag for all pages"                                     // 47
    }                                                                                                                //
  },                                                                                                                 //
  navLayout: {                                                                                                       // 50
    type: String,                                                                                                    // 51
    optional: true,                                                                                                  // 52
    autoform: {                                                                                                      // 53
      group: "01_general",                                                                                           // 54
      instructions: 'The layout used for the main menu',                                                             // 55
      options: [{ value: 'top-nav', label: 'Top' }, { value: 'side-nav', label: 'Side' }]                            // 56
    }                                                                                                                //
  },                                                                                                                 //
  requireViewInvite: {                                                                                               // 62
    type: Boolean,                                                                                                   // 63
    optional: true,                                                                                                  // 64
    autoform: {                                                                                                      // 65
      group: 'invites',                                                                                              // 66
      leftLabel: 'Require View Invite'                                                                               // 67
    }                                                                                                                //
  },                                                                                                                 //
  requirePostInvite: {                                                                                               // 70
    type: Boolean,                                                                                                   // 71
    optional: true,                                                                                                  // 72
    autoform: {                                                                                                      // 73
      group: 'invites',                                                                                              // 74
      leftLabel: 'Require Post Invite'                                                                               // 75
    }                                                                                                                //
  },                                                                                                                 //
  requirePostsApproval: {                                                                                            // 78
    type: Boolean,                                                                                                   // 79
    optional: true,                                                                                                  // 80
    autoform: {                                                                                                      // 81
      group: "01_general",                                                                                           // 82
      instructions: "Posts must be approved by admin",                                                               // 83
      leftLabel: "Require Posts Approval"                                                                            // 84
    }                                                                                                                //
  },                                                                                                                 //
  enableDownvotes: {                                                                                                 // 87
    type: Boolean,                                                                                                   // 88
    optional: true,                                                                                                  // 89
    defaultValue: false,                                                                                             // 90
    autoform: {                                                                                                      // 91
      group: "01_general",                                                                                           // 92
      instructions: 'Enable downvotes',                                                                              // 93
      leftLabel: "Enable downvotes"                                                                                  // 94
    }                                                                                                                //
  },                                                                                                                 //
  defaultEmail: {                                                                                                    // 97
    type: String,                                                                                                    // 98
    optional: true,                                                                                                  // 99
    "private": true,                                                                                                 // 100
    autoform: {                                                                                                      // 101
      group: "06_email",                                                                                             // 102
      instructions: 'The address all outgoing emails will be sent from.',                                            // 103
      "class": "private-field"                                                                                       // 104
    }                                                                                                                //
  },                                                                                                                 //
  mailUrl: {                                                                                                         // 107
    type: String,                                                                                                    // 108
    optional: true,                                                                                                  // 109
    "private": true,                                                                                                 // 110
    autoform: {                                                                                                      // 111
      group: "06_email",                                                                                             // 112
      instructions: 'MAIL_URL environment variable (requires restart).',                                             // 113
      "class": "private-field"                                                                                       // 114
    }                                                                                                                //
  },                                                                                                                 //
  scoreUpdateInterval: {                                                                                             // 117
    type: Number,                                                                                                    // 118
    optional: true,                                                                                                  // 119
    defaultValue: 30,                                                                                                // 120
    "private": true,                                                                                                 // 121
    autoform: {                                                                                                      // 122
      group: '01_general',                                                                                           // 123
      instructions: 'How often to recalculate scores, in seconds (default to 30)',                                   // 124
      "class": "private-field"                                                                                       // 125
    }                                                                                                                //
  },                                                                                                                 //
  defaultView: {                                                                                                     // 128
    type: String,                                                                                                    // 129
    optional: true,                                                                                                  // 130
    autoform: {                                                                                                      // 131
      group: "02_posts",                                                                                             // 132
      instructions: 'The view used for the front page',                                                              // 133
      options: function () {                                                                                         // 134
        return _.map(Telescope.menuItems.get("viewsMenu"), function (view) {                                         // 135
          return {                                                                                                   // 136
            value: view.name,                                                                                        // 137
            label: view.label()                                                                                      // 138
          };                                                                                                         //
        });                                                                                                          //
      }                                                                                                              //
    }                                                                                                                //
  },                                                                                                                 //
  postsLayout: {                                                                                                     // 144
    type: String,                                                                                                    // 145
    optional: true,                                                                                                  // 146
    autoform: {                                                                                                      // 147
      group: "02_posts",                                                                                             // 148
      instructions: 'The layout used for post lists',                                                                // 149
      options: [{ value: 'posts-list', label: 'List' }, { value: 'posts-grid', label: 'Grid' }]                      // 150
    }                                                                                                                //
  },                                                                                                                 //
  postViews: {                                                                                                       // 156
    type: [String],                                                                                                  // 157
    optional: true,                                                                                                  // 158
    autoform: {                                                                                                      // 159
      group: "02_posts",                                                                                             // 160
      instructions: 'Posts views showed in the views menu',                                                          // 161
      editable: true,                                                                                                // 162
      noselect: true,                                                                                                // 163
      options: function () {                                                                                         // 164
        return _.map(Telescope.menuItems.get("viewsMenu"), function (view) {                                         // 165
          return {                                                                                                   // 166
            value: view.name,                                                                                        // 167
            label: view.label()                                                                                      // 168
          };                                                                                                         //
        });                                                                                                          //
      }                                                                                                              //
    }                                                                                                                //
  },                                                                                                                 //
  postInterval: {                                                                                                    // 174
    type: Number,                                                                                                    // 175
    optional: true,                                                                                                  // 176
    defaultValue: 30,                                                                                                // 177
    autoform: {                                                                                                      // 178
      group: "02_posts",                                                                                             // 179
      instructions: 'Minimum time between posts, in seconds (defaults to 30)'                                        // 180
    }                                                                                                                //
  },                                                                                                                 //
  RSSLinksPointTo: {                                                                                                 // 183
    type: String,                                                                                                    // 184
    optional: true,                                                                                                  // 185
    autoform: {                                                                                                      // 186
      group: "02_posts",                                                                                             // 187
      options: [{ value: 'page', label: 'Discussion page' }, { value: 'link', label: 'Outgoing link' }]              // 188
    }                                                                                                                //
  },                                                                                                                 //
  loadMoreBehavior: {                                                                                                // 194
    type: String,                                                                                                    // 195
    optional: true,                                                                                                  // 196
    autoform: {                                                                                                      // 197
      group: "02_posts",                                                                                             // 198
      options: [{ value: 'button', label: _.partial(i18n.t, "loadMoreButton") }, { value: 'scroll', label: _.partial(i18n.t, "infiniteScroll") }]
    }                                                                                                                //
  },                                                                                                                 //
  commentInterval: {                                                                                                 // 205
    type: Number,                                                                                                    // 206
    optional: true,                                                                                                  // 207
    defaultValue: 15,                                                                                                // 208
    autoform: {                                                                                                      // 209
      group: "03_comments",                                                                                          // 210
      instructions: 'Minimum time between comments, in seconds (defaults to 15)'                                     // 211
    }                                                                                                                //
  },                                                                                                                 //
  maxPostsPerDay: {                                                                                                  // 214
    type: Number,                                                                                                    // 215
    optional: true,                                                                                                  // 216
    defaultValue: 30,                                                                                                // 217
    autoform: {                                                                                                      // 218
      group: "02_posts",                                                                                             // 219
      instructions: 'Maximum number of posts a user can post in a day (default to 30).'                              // 220
    }                                                                                                                //
  },                                                                                                                 //
  startInvitesCount: {                                                                                               // 223
    type: Number,                                                                                                    // 224
    defaultValue: 3,                                                                                                 // 225
    optional: true,                                                                                                  // 226
    autoform: {                                                                                                      // 227
      group: 'invites'                                                                                               // 228
    }                                                                                                                //
  },                                                                                                                 //
  postsPerPage: {                                                                                                    // 231
    type: Number,                                                                                                    // 232
    defaultValue: 10,                                                                                                // 233
    optional: true,                                                                                                  // 234
    autoform: {                                                                                                      // 235
      group: "02_posts"                                                                                              // 236
    }                                                                                                                //
  },                                                                                                                 //
  logoUrl: {                                                                                                         // 239
    type: String,                                                                                                    // 240
    optional: true,                                                                                                  // 241
    autoform: {                                                                                                      // 242
      group: "04_logo"                                                                                               // 243
    }                                                                                                                //
  },                                                                                                                 //
  logoHeight: {                                                                                                      // 246
    type: Number,                                                                                                    // 247
    optional: true,                                                                                                  // 248
    autoform: {                                                                                                      // 249
      group: "04_logo"                                                                                               // 250
    }                                                                                                                //
  },                                                                                                                 //
  logoWidth: {                                                                                                       // 253
    type: Number,                                                                                                    // 254
    optional: true,                                                                                                  // 255
    autoform: {                                                                                                      // 256
      group: "04_logo"                                                                                               // 257
    }                                                                                                                //
  },                                                                                                                 //
  faviconUrl: {                                                                                                      // 260
    type: String,                                                                                                    // 261
    optional: true,                                                                                                  // 262
    autoform: {                                                                                                      // 263
      group: "04_logo"                                                                                               // 264
    }                                                                                                                //
  },                                                                                                                 //
  language: {                                                                                                        // 267
    type: String,                                                                                                    // 268
    defaultValue: 'en',                                                                                              // 269
    optional: true,                                                                                                  // 270
    autoform: {                                                                                                      // 271
      group: "01_general",                                                                                           // 272
      instructions: 'The app\'s language. Defaults to English.',                                                     // 273
      options: function () {                                                                                         // 274
        var languages = _.map(TAPi18n.getLanguages(), function (item, key) {                                         // 275
          return {                                                                                                   // 276
            value: key,                                                                                              // 277
            label: item.name                                                                                         // 278
          };                                                                                                         //
        });                                                                                                          //
        return languages;                                                                                            // 281
      }                                                                                                              //
    }                                                                                                                //
  },                                                                                                                 //
  backgroundCSS: {                                                                                                   // 285
    type: String,                                                                                                    // 286
    optional: true,                                                                                                  // 287
    autoform: {                                                                                                      // 288
      group: 'extras',                                                                                               // 289
      instructions: 'CSS code for the <body>\'s "background" property',                                              // 290
      rows: 5                                                                                                        // 291
    }                                                                                                                //
  },                                                                                                                 //
  accentColor: {                                                                                                     // 294
    type: String,                                                                                                    // 295
    optional: true,                                                                                                  // 296
    autoform: {                                                                                                      // 297
      group: "05_colors",                                                                                            // 298
      instructions: 'Used for button backgrounds.'                                                                   // 299
    }                                                                                                                //
  },                                                                                                                 //
  accentContrastColor: {                                                                                             // 302
    type: String,                                                                                                    // 303
    optional: true,                                                                                                  // 304
    autoform: {                                                                                                      // 305
      group: "05_colors",                                                                                            // 306
      instructions: 'Used for button text.'                                                                          // 307
    }                                                                                                                //
  },                                                                                                                 //
  secondaryColor: {                                                                                                  // 310
    type: String,                                                                                                    // 311
    optional: true,                                                                                                  // 312
    autoform: {                                                                                                      // 313
      group: "05_colors",                                                                                            // 314
      instructions: 'Used for the navigation background.'                                                            // 315
    }                                                                                                                //
  },                                                                                                                 //
  secondaryContrastColor: {                                                                                          // 318
    type: String,                                                                                                    // 319
    optional: true,                                                                                                  // 320
    autoform: {                                                                                                      // 321
      group: "05_colors",                                                                                            // 322
      instructions: 'Used for header text.'                                                                          // 323
    }                                                                                                                //
  },                                                                                                                 //
  fontUrl: {                                                                                                         // 326
    type: String,                                                                                                    // 327
    optional: true,                                                                                                  // 328
    autoform: {                                                                                                      // 329
      group: 'fonts',                                                                                                // 330
      instructions: '@import URL (e.g. https://fonts.googleapis.com/css?family=Source+Sans+Pro)'                     // 331
    }                                                                                                                //
  },                                                                                                                 //
  fontFamily: {                                                                                                      // 334
    type: String,                                                                                                    // 335
    optional: true,                                                                                                  // 336
    autoform: {                                                                                                      // 337
      group: 'fonts',                                                                                                // 338
      instructions: 'font-family (e.g. "Source Sans Pro", sans-serif)'                                               // 339
    }                                                                                                                //
  },                                                                                                                 //
  twitterAccount: {                                                                                                  // 342
    type: String,                                                                                                    // 343
    optional: true,                                                                                                  // 344
    autoform: {                                                                                                      // 345
      group: "07_integrations"                                                                                       // 346
    }                                                                                                                //
  },                                                                                                                 //
  facebookPage: {                                                                                                    // 349
    type: String,                                                                                                    // 350
    optional: true,                                                                                                  // 351
    autoform: {                                                                                                      // 352
      group: "07_integrations"                                                                                       // 353
    }                                                                                                                //
  },                                                                                                                 //
  googleAnalyticsId: {                                                                                               // 356
    type: String,                                                                                                    // 357
    optional: true,                                                                                                  // 358
    autoform: {                                                                                                      // 359
      group: "07_integrations"                                                                                       // 360
    }                                                                                                                //
  },                                                                                                                 //
  mixpanelId: {                                                                                                      // 363
    type: String,                                                                                                    // 364
    optional: true,                                                                                                  // 365
    autoform: {                                                                                                      // 366
      group: "07_integrations"                                                                                       // 367
    }                                                                                                                //
  },                                                                                                                 //
  clickyId: {                                                                                                        // 370
    type: String,                                                                                                    // 371
    optional: true,                                                                                                  // 372
    autoform: {                                                                                                      // 373
      group: "07_integrations"                                                                                       // 374
    }                                                                                                                //
  },                                                                                                                 //
  footerCode: {                                                                                                      // 377
    type: String,                                                                                                    // 378
    optional: true,                                                                                                  // 379
    autoform: {                                                                                                      // 380
      group: 'extras',                                                                                               // 381
      instructions: 'Footer content (accepts Markdown).',                                                            // 382
      rows: 5                                                                                                        // 383
    }                                                                                                                //
  },                                                                                                                 //
  extraCode: {                                                                                                       // 386
    type: String,                                                                                                    // 387
    optional: true,                                                                                                  // 388
    autoform: {                                                                                                      // 389
      group: 'extras',                                                                                               // 390
      instructions: 'Any extra HTML code you want to include on every page.',                                        // 391
      rows: 5                                                                                                        // 392
    }                                                                                                                //
  },                                                                                                                 //
  extraCSS: {                                                                                                        // 395
    type: String,                                                                                                    // 396
    optional: true,                                                                                                  // 397
    autoform: {                                                                                                      // 398
      group: 'extras',                                                                                               // 399
      instructions: 'Any extra CSS you want to include on every page.',                                              // 400
      rows: 5                                                                                                        // 401
    }                                                                                                                //
  },                                                                                                                 //
  emailFooter: {                                                                                                     // 404
    type: String,                                                                                                    // 405
    optional: true,                                                                                                  // 406
    "private": true,                                                                                                 // 407
    autoform: {                                                                                                      // 408
      group: "06_email",                                                                                             // 409
      instructions: 'Content that will appear at the bottom of outgoing emails (accepts HTML).',                     // 410
      rows: 5,                                                                                                       // 411
      "class": "private-field"                                                                                       // 412
    }                                                                                                                //
  },                                                                                                                 //
  notes: {                                                                                                           // 415
    type: String,                                                                                                    // 416
    optional: true,                                                                                                  // 417
    "private": true,                                                                                                 // 418
    autoform: {                                                                                                      // 419
      group: 'extras',                                                                                               // 420
      instructions: 'You can store any notes or extra information here.',                                            // 421
      rows: 5,                                                                                                       // 422
      "class": "private-field"                                                                                       // 423
    }                                                                                                                //
  },                                                                                                                 //
  debug: {                                                                                                           // 426
    type: Boolean,                                                                                                   // 427
    optional: true,                                                                                                  // 428
    autoform: {                                                                                                      // 429
      group: 'debug',                                                                                                // 430
      instructions: 'Enable debug mode for more details console logs'                                                // 431
    }                                                                                                                //
  },                                                                                                                 //
  authMethods: {                                                                                                     // 434
    type: [String],                                                                                                  // 435
    optional: true,                                                                                                  // 436
    autoform: {                                                                                                      // 437
      group: 'auth',                                                                                                 // 438
      editable: true,                                                                                                // 439
      noselect: true,                                                                                                // 440
      options: [{                                                                                                    // 441
        value: 'email',                                                                                              // 443
        label: 'Email/Password'                                                                                      // 444
      }, {                                                                                                           //
        value: 'twitter',                                                                                            // 447
        label: 'Twitter'                                                                                             // 448
      }, {                                                                                                           //
        value: 'facebook',                                                                                           // 451
        label: 'Facebook'                                                                                            // 452
      }],                                                                                                            //
      instructions: 'Authentication methods (default to email only)'                                                 // 455
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 461
  Settings.internationalize();                                                                                       // 462
});                                                                                                                  //
                                                                                                                     //
Settings.attachSchema(Settings.schema);                                                                              // 465
                                                                                                                     //
Settings.get = function (setting, defaultValue) {                                                                    // 467
  var settings = Settings.find().fetch()[0];                                                                         // 468
                                                                                                                     //
  if (settings && typeof settings[setting] !== 'undefined') {                                                        // 470
    // look in Settings collection first                                                                             //
    return settings[setting];                                                                                        // 471
  } else if (Meteor.isServer && Meteor.settings && !!Meteor.settings[setting]) {                                     //
    // else if on the server, look in Meteor.settings                                                                //
    return Meteor.settings[setting];                                                                                 // 474
  } else if (Meteor.settings && Meteor.settings["public"] && !!Meteor.settings["public"][setting]) {                 //
    // look in Meteor.settings.public                                                                                //
    return Meteor.settings["public"][setting];                                                                       // 477
  } else if (typeof defaultValue !== 'undefined') {                                                                  //
    // fallback to default                                                                                           //
    return defaultValue;                                                                                             // 480
  } else {                                                                                                           //
    // or return undefined                                                                                           //
    return undefined;                                                                                                // 483
  }                                                                                                                  //
};                                                                                                                   //
                                                                                                                     //
/**                                                                                                                  //
 * Add trailing slash if needed on insert                                                                            //
 */                                                                                                                  //
Settings.before.insert(function (userId, doc) {                                                                      // 492
  if (doc.siteUrl && doc.siteUrl.match(/\//g).length === 2) {                                                        // 493
    doc.siteUrl = doc.siteUrl + "/";                                                                                 // 494
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
/**                                                                                                                  //
 * Add trailing slash if needed on update                                                                            //
 */                                                                                                                  //
Settings.before.update(function (userId, doc, fieldNames, modifier) {                                                // 501
  if (modifier.$set && modifier.$set.siteUrl && modifier.$set.siteUrl.match(/\//g).length === 2) {                   // 502
    modifier.$set.siteUrl = modifier.$set.siteUrl + "/";                                                             // 503
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 507
  Settings.allow({                                                                                                   // 508
    insert: Users.is.adminById,                                                                                      // 509
    update: Users.is.adminById,                                                                                      // 510
    remove: Users.is.adminById                                                                                       // 511
  });                                                                                                                //
});                                                                                                                  //
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 515
  // override Meteor.absoluteUrl() with URL provided in settings                                                     //
  Meteor.absoluteUrl.defaultOptions.rootUrl = Settings.get('siteUrl', Meteor.absoluteUrl());                         // 517
  debug = Settings.get('debug', false);                                                                              // 518
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/routes.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Telescope.adminRoutes.route('/settings', {                                                                           // 1
  name: "adminSettings",                                                                                             // 2
  action: function (params, queryParams) {                                                                           // 3
    BlazeLayout.render("layout", { main: "admin_wrapper", admin: "settings" });                                      // 4
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/menus.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Telescope.menuItems.add("adminMenu", [{                                                                              // 1
  route: 'adminSettings',                                                                                            // 3
  label: 'settings',                                                                                                 // 4
  description: 'telescope_settings_panel'                                                                            // 5
}]);                                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/package-i18n.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
TAPi18n.packages["telescope:settings"] = {"translation_function_name":"__","helper_name":"_","namespace":"project"};
                                                                                                                     // 2
// define package's translation function (proxy to the i18next)                                                      // 3
__ = TAPi18n._getPackageI18nextProxy("project");                                                                     // 4
// define the package's templates registrar                                                                          // 5
registerI18nTemplate = TAPi18n._getRegisterHelpersProxy("telescope:settings");                                       // 6
registerTemplate = registerI18nTemplate; // XXX OBSOLETE, kept for backward compatibility will be removed in the future
                                                                                                                     // 8
// Record the list of templates prior to package load                                                                // 9
var _ = Package.underscore._;                                                                                        // 10
non_package_templates = _.keys(Template);                                                                            // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/client/language_changer.js                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var query = Settings.find();                                                                                         // 1
                                                                                                                     //
query.observeChanges({                                                                                               // 3
  added: function (id, fields) {                                                                                     // 4
    if (fields.language) i18n.setLanguage(fields.language);                                                          // 5
  },                                                                                                                 //
  changed: function (id, fields) {                                                                                   // 8
    if (fields.language) i18n.setLanguage(fields.language);                                                          // 9
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/client/helpers.js                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.registerHelper('getSetting', function (setting, defaultArgument) {                                          // 1
  // if there is no default argument, defaultArgument will be a Spacebars.kw object; so set it to undefined          //
  // see http://stackoverflow.com/questions/27755891/meteor-what-is-spacebars-kw-hash-object                         //
  var defaultArgument = !!defaultArgument.hash ? undefined : defaultArgument;                                        // 4
  setting = Settings.get(setting, defaultArgument);                                                                  // 5
  return setting;                                                                                                    // 6
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/client/templates/template.settings.js                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("settings");                                                                                    // 2
Template["settings"] = new Template("Template.settings", (function() {                                               // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("settings"));                                                                  // 6
  }, function() {                                                                                                    // 7
    return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 8
      return {                                                                                                       // 9
        collection: Spacebars.call("Settings"),                                                                      // 10
        id: Spacebars.call("updateSettingsForm"),                                                                    // 11
        type: Spacebars.call("update"),                                                                              // 12
        doc: Spacebars.call(view.lookup("settings")),                                                                // 13
        "label-class": Spacebars.call("control-label"),                                                              // 14
        "input-col-class": Spacebars.call("controls"),                                                               // 15
        template: Spacebars.call("bootstrap3-horizontal")                                                            // 16
      };                                                                                                             // 17
    }, function() {                                                                                                  // 18
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                    // 19
    }), "\n  " ];                                                                                                    // 20
  }, function() {                                                                                                    // 21
    return [ "\n    ", Blaze._TemplateWith(function() {                                                              // 22
      return {                                                                                                       // 23
        collection: Spacebars.call("Settings"),                                                                      // 24
        id: Spacebars.call("insertSettingsForm"),                                                                    // 25
        type: Spacebars.call("insert"),                                                                              // 26
        template: Spacebars.call("bootstrap3-horizontal"),                                                           // 27
        "label-class": Spacebars.call("control-label"),                                                              // 28
        "input-col-class": Spacebars.call("controls")                                                                // 29
      };                                                                                                             // 30
    }, function() {                                                                                                  // 31
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                    // 32
    }), "\n  " ];                                                                                                    // 33
  });                                                                                                                // 34
}));                                                                                                                 // 35
                                                                                                                     // 36
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/client/templates/settings.js                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.settings.helpers({                                                                                          // 1
  settings: function () {                                                                                            // 2
    return Settings.findOne();                                                                                       // 3
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
AutoForm.addHooks(['updateSettingsForm', 'insertSettingsForm'], {                                                    // 7
  onSuccess: function (operation, result) {                                                                          // 8
    this.template.$('button[type=submit]').removeClass('loading');                                                   // 9
    Messages.flash(i18n.t('settings_saved'), 'success');                                                             // 10
    Messages.clearSeen();                                                                                            // 11
    $('body').scrollTop(0);                                                                                          // 12
  },                                                                                                                 //
                                                                                                                     //
  onError: function (operation, error) {                                                                             // 15
    this.template.$('button[type=submit]').removeClass('loading');                                                   // 16
    Messages.flash(error, 'error');                                                                                  // 17
    Messages.clearSeen();                                                                                            // 18
    $('body').scrollTop(0);                                                                                          // 19
  }                                                                                                                  //
});                                                                                                                  //
                                                                                                                     //
AutoForm.hooks({                                                                                                     // 23
  updateSettingsForm: {                                                                                              // 24
    before: {                                                                                                        // 25
      update: function (modifier) {                                                                                  // 26
        this.template.$('button[type=submit]').addClass('loading');                                                  // 27
        return modifier;                                                                                             // 28
      }                                                                                                              //
    }                                                                                                                //
                                                                                                                     //
  },                                                                                                                 //
  insertSettingsForm: {                                                                                              // 33
    before: {                                                                                                        // 34
      insert: function (doc) {                                                                                       // 35
        this.template.$('button[type=submit]').addClass('loading');                                                  // 36
        return doc;                                                                                                  // 37
      }                                                                                                              //
    }                                                                                                                //
  }                                                                                                                  //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/ar.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
var package_templates = _.difference(_.keys(Template), non_package_templates);                                       // 8
                                                                                                                     // 9
for (var i = 0; i < package_templates.length; i++) {                                                                 // 10
  var package_template = package_templates[i];                                                                       // 11
                                                                                                                     // 12
  registerI18nTemplate(package_template);                                                                            // 13
}                                                                                                                    // 14
                                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/bg.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/cs.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/da.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/de.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/el.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/en.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
// integrate the fallback language translations                                                                      // 8
translations = {};                                                                                                   // 9
translations[namespace] = {"settings_saved":"Settings saved","title":"Title","description":"Description","siteUrl":"Site URL","tagline":"Tagline","requireViewInvite":"Require Invite to View","requirePostInvite":"Require Invite to Post","requirePostsApproval":"Require Posts to be Approved","defaultEmail":"Default Email","scoreUpdateInterval":"Score Update Interval","defaultView":"Default View","postInterval":"Post Interval","commentInterval":"Comment Interval","maxPostsPerDay":"Max Posts Per Day","startInvitesCount":"Invites Start Count","postsPerPage":"Posts Per Page","logoUrl":"Logo URL","logoHeight":"Logo Height","logoWidth":"Logo Width","language":"Language","backgroundCSS":"Background CSS","buttonColor":"Button Color","buttonTextColor":"Button Text Color","headerColor":"Header Color","headerTextColor":"Header Text Color","twitterAccount":"Twitter Account","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Footer Code","extraCode":"Extra Code","extraCSS":"Extra CSS","emailFooter":"Email Footer","notes":"Notes","debug":"Debug Mode","fontUrl":"Font URL","fontFamily":"Font Family","authMethods":"Authentication Methods","faviconUrl":"Favicon URL","mailURL":"MailURL","postsLayout":"Posts Layout","siteImage":"Site Image","accentColor":"Accent Color","accentContrastColor":"Accent Contrast Color","secondaryColor":"Secondary Color","secondaryContrastColor":"Secondary Contrast Color","postViews":"Post Views","navLayout":"Navigation Layout","mailUrl":"Mail URL","general":"General","invites":"Invites","scoring":"Scoring","logo":"Logo","extras":"Extras","colors":"Colors","integrations":"Integrations","enableDownvotes":"Enable Downvotes","RSSLinksPointTo":"RSS Links Point To","loadMoreBehavior":"“Load More” Behavior","loadMoreButton":"”Load More” button","infiniteScroll":"Infinite scroll"};
TAPi18n._loadLangFileObject("en", translations);                                                                     // 11
                                                                                                                     // 12
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/es.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/et.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/fr.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/hu.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/id.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/it.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/ja.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/kk.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/ko.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/nl.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/pl.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/pt-BR.i18n.js                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/ro.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/ru.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/sl.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/sv.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/th.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/tr.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/vi.i18n.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/packages/telescope_settingsi18n/zh-CN.i18n.js                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _ = Package.underscore._,                                                                                        // 1
    package_name = "telescope:settings",                                                                             // 2
    namespace = "telescope:settings";                                                                                // 3
                                                                                                                     // 4
if (package_name != "project") {                                                                                     // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                            // 6
}                                                                                                                    // 7
                                                                                                                     // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:settings'] = {
  Settings: Settings
};

})();
