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
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Accounts = Package['accounts-base'].Accounts;
var AccountsServer = Package['accounts-base'].AccountsServer;
var check = Package.check.check;
var Match = Package.check.Match;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var ECMAScript = Package.ecmascript.ECMAScript;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var Picker = Package['meteorhacks:picker'].Picker;
var DocHead = Package['kadira:dochead'].DocHead;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var marked = Package['chuangbo:marked'].marked;
var FastRender = Package['meteorhacks:fast-render'].FastRender;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var SyncedCron = Package['percolatestudio:synced-cron'].SyncedCron;
var tinycolor = Package['aramk:tinycolor'].tinycolor;
var moment = Package['momentjs:moment'].moment;
var ReactiveTable = Package['aslagle:reactive-table'].ReactiveTable;
var Avatar = Package['utilities:avatar'].Avatar;
var sanitizeHtml = Package['djedi:sanitize-html'].sanitizeHtml;
var Gravatar = Package['jparker:gravatar'].Gravatar;
var MeteorFilesHelpers = Package['sanjo:meteor-files-helpers'].MeteorFilesHelpers;
var Handlebars = Package.ui.Handlebars;
var OriginalHandlebars = Package['cmather:handlebars-server'].OriginalHandlebars;
var getSlug = Package['ongoworks:speakingurl'].getSlug;
var Counts = Package['tmeasday:publish-counts'].Counts;
var publishCount = Package['tmeasday:publish-counts'].publishCount;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Spacebars = Package.spacebars.Spacebars;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var AccountsTemplates = Package['useraccounts:core'].AccountsTemplates;
var Autoupdate = Package.autoupdate.Autoupdate;
var HTML = Package.htmljs.HTML;
var T9n = Package['softwarerero:accounts-t9n'].T9n;

/* Package-scope variables */
var Settings, debug, __, translations;

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
                                                                                                                     // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/telescope_settings/lib/server/publications.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.publish('settings', function () {                                                                             // 1
  var options = {};                                                                                                  // 2
  var privateFields = {};                                                                                            // 3
                                                                                                                     //
  // look at Settings.simpleSchema._schema to see which fields should be kept private                                //
  _.each(Settings.simpleSchema()._schema, function (property, key) {                                                 // 6
    if (property['private']) privateFields[key] = false;                                                             // 7
  });                                                                                                                //
                                                                                                                     //
  if (!Users.is.adminById(this.userId)) {                                                                            // 11
    options = _.extend(options, {                                                                                    // 12
      fields: privateFields                                                                                          // 13
    });                                                                                                              //
  }                                                                                                                  //
                                                                                                                     //
  return Settings.find({}, options);                                                                                 // 17
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
if(_.isUndefined(TAPi18n.translations["ar"])) {                                                                      // 8
  TAPi18n.translations["ar"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ar"][namespace])) {                                                           // 12
  TAPi18n.translations["ar"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ar"][namespace], {"title":"العنوان","siteUrl":"رابط الموقع","tagline":"شعار","requireViewInvite":"مشاهدة مقيدة","requirePostInvite":"مشاركة مقيدة","requirePostsApproval":"موافقة مطلوبة","defaultEmail":"البريد اﻻلكتروني","scoreUpdateInterval":"تحديث النتيجة","defaultView":"مشهد افتراضي","postInterval":"فاصل المشاركات","commentInterval":"فاصل التعليقات","maxPostsPerDay":"العدد اﻻقصى للمشاركات في اليوم","startInvitesCount":"الدعوات منذ البريداية","postsPerPage":"المشاركات في الصفحة","logoUrl":"رابط الشارة","logoHeight":"طول الشارة","logoWidth":"عرض الشارة","language":"اللغة","backgroundCSS":"CSS للخلفية","buttonColor":"لون اﻻزرار","buttonTextColor":"لون نص اﻻزرار","headerColor":"لون الجزء الرأسي","headerTextColor":"لون نص الجزء الراسي","twitterAccount":"حساب تويتر","googleAnalyticsId":"معرف قوقل تحليﻻت","mixpanelId":"ID Mixpanel","clickyId":"ID Clicky","footerCode":"شفرة الجزء السفلي","extraCode":"شفرات زائدة","emailFooter":"الجزء السفلي لﻻيميل","notes":"مﻻحظات","debug":"وضع المعالجة","fontUrl":"رابط الخط","fontFamily":"اسم الخط","authMethods":"أساليب المصادقة","faviconUrl":"رابط فافيكون","mailURL":"رابط اﻻيميل","postsLayout":"مشاركات ﻻيوت","general":"عام","invites":"دعوة","scoring":"النتيجة","logo":"شارة","extras":"إضافات","colors":"اﻻلوان","integrations":"دمج"});
TAPi18n._registerServerTranslator("ar", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["bg"])) {                                                                      // 8
  TAPi18n.translations["bg"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["bg"][namespace])) {                                                           // 12
  TAPi18n.translations["bg"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["bg"][namespace], {"title":"Заглавие","invites":"Покани"});                            // 16
TAPi18n._registerServerTranslator("bg", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["cs"])) {                                                                      // 8
  TAPi18n.translations["cs"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["cs"][namespace])) {                                                           // 12
  TAPi18n.translations["cs"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["cs"][namespace], {"settings_saved":"Nastavení uloženo","title":"Název","description":"Popis","siteUrl":"URL webu","tagline":"Claim aplikace/webu","requireViewInvite":"Vyžadovat pozvánku k zobrazení","requirePostInvite":"Vyžadovat pozvánku pro vložení příspěvku","requirePostsApproval":"Vyžadovat schválení příspěvků","defaultEmail":"Výchozí e-mail","scoreUpdateInterval":"Skóre intervalu aktualizace","defaultView":"Výchozí zobrazení","postInterval":"Interval příspěvku","commentInterval":"Interval komentáře","maxPostsPerDay":"Maximální počet příspěvku za den","startInvitesCount":"Počet pozvánek","postsPerPage":"Příspěvků na stránku","logoUrl":"URL loga","logoHeight":"Výška loga","logoWidth":"Šířka loga","language":"Jazyk","backgroundCSS":"Pozadí webu (CSS)","buttonColor":"Barva tlačítka","buttonTextColor":"Barva textu tlačítka","headerColor":"Barva hlavičky","headerTextColor":"Barva textu hlavičky","twitterAccount":"Twitter účet","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Kód patičky","extraCode":"Extra kód","extraCSS":"Extra CSS","emailFooter":"Patička e-mailu","notes":"Poznámky","debug":"Režim ladění (debug mode)","fontUrl":"URL fontu","fontFamily":"Font Family","authMethods":"Metody ověřování","faviconUrl":"URL favicony","mailURL":"MailURL","postsLayout":"Layout příspěvků","siteImage":"Obrázek webu","accentColor":"Hlavní barva","accentContrastColor":"Kontrastní hlavní barva","secondaryColor":"Sekundární barva","secondaryContrastColor":"Sekundární kontrastní barva","postViews":"Počet shlédnutí","navLayout":"Layout navigace","mailUrl":"URL mailu","general":"Obecné","invites":"Pozvánky","scoring":"Skóre","logo":"Logo","extras":"Extra","colors":"Barvy","integrations":"Integrace"});
TAPi18n._registerServerTranslator("cs", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["da"])) {                                                                      // 8
  TAPi18n.translations["da"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["da"][namespace])) {                                                           // 12
  TAPi18n.translations["da"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["da"][namespace], {"description":"Beskrivelse","logoHeight":"Logo Højde","logoWidth":"Logo Bredde","language":"Sprog","backgroundCSS":"Baggrund CSS","footerCode":"Footer kode","extraCode":"Ekstra kode","emailFooter":"Email Footer","extras":"Ekstra"});
TAPi18n._registerServerTranslator("da", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["de"])) {                                                                      // 8
  TAPi18n.translations["de"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["de"][namespace])) {                                                           // 12
  TAPi18n.translations["de"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["de"][namespace], {"title":"Titel"});                                                  // 16
TAPi18n._registerServerTranslator("de", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["el"])) {                                                                      // 8
  TAPi18n.translations["el"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["el"][namespace])) {                                                           // 12
  TAPi18n.translations["el"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["el"][namespace], {"title":"Τίτλος","siteUrl":"URL Ιστοσελίδας","tagline":"Ετικέτα","requireViewInvite":"Να απαιτείται πρόσκληση για προβολή","requirePostInvite":"Να απαιτείται πρόσκληση για δημοσίευση","requirePostsApproval":"Να απαιτείται έγκριση των δημοσιεύσεων","defaultEmail":"Προεπιλεγμένο Email","scoreUpdateInterval":"Χρόνος ανανέωσης Σκορ","defaultView":"Προεπιλεγμένη Προβολή","postInterval":"Χρόνος ανανέωσης δημοσίευσης","commentInterval":"Χρόνος ανανέωσης σχολίου","maxPostsPerDay":"Μέγιστες δημοσιεύσεις ανα ημέρα","postsPerPage":"Δημοσιεύσεις ανα ημέρα","logoUrl":"URL Λογότυπου","logoHeight":"Υψος Λογότυπου","logoWidth":"Πλάτος Λογότυπου","language":"Γλώσσα","buttonColor":"Χρώμα κουμπιού","buttonTextColor":"Χρώμα κειμένου κουμπιού","headerColor":"Χρώμα Επικεφαλίδας","headerTextColor":"Χρώμα κειμένου Επικεφαλίδας","twitterAccount":"Λογαριασμός Twitter","notes":"Σημειώσεις","postsLayout":"Στύλ Δημοσιεύσεων","general":"Γενικά","invites":"Προσκλήσεις","scoring":"Σκορ","logo":"Λογότυπο","extras":"Extras","colors":"Χρώματα","integrations":"Προσθήκες"});
TAPi18n._registerServerTranslator("el", namespace);                                                                  // 17
                                                                                                                     // 18
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
TAPi18n._registerServerTranslator("en", namespace);                                                                  // 12
                                                                                                                     // 13
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
if(_.isUndefined(TAPi18n.translations["es"])) {                                                                      // 8
  TAPi18n.translations["es"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["es"][namespace])) {                                                           // 12
  TAPi18n.translations["es"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["es"][namespace], {"title":"Título","siteUrl":"URL del sitio web","tagline":"Lema","requireViewInvite":"Requerir Invitación para Ver","requirePostInvite":"Requerir invitación para Publicar","requirePostsApproval":"Requerir que los Posts sean Aprobados","defaultEmail":"Correo electrónico predeterminado","defaultView":"Vista Predeterminada","maxPostsPerDay":"Número máximo de posts por día","postsPerPage":"Posts por página","language":"Idioma","headerColor":"Color de la cabecera","headerTextColor":"Color del texto en la cabecera\n","invites":"Invitaciones"});
TAPi18n._registerServerTranslator("es", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["et"])) {                                                                      // 8
  TAPi18n.translations["et"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["et"][namespace])) {                                                           // 12
  TAPi18n.translations["et"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["et"][namespace], {"settings_saved":"Seaded salvestatud","title":"Pealkiri","description":"Kirjeldus","siteUrl":"Saidi URL","tagline":"Märksõnad","requireViewInvite":"Vaatamiseks küsi kutse","requirePostInvite":"Postitamiseks küsi kutse","requirePostsApproval":"Küsi postituste heakskiitu","defaultEmail":"Vaikimisi Email","scoreUpdateInterval":"Skoori Värskendamise Intervall","defaultView":"Vaikimisi Vaade","postInterval":"Postitamise Intervall","commentInterval":"Kommenteerimise Intervall","maxPostsPerDay":"Max Postitusi päevas","startInvitesCount":"Kutsete Arv","postsPerPage":"Postitusi Lehe Kohta","logoUrl":"Logo URL","logoHeight":"Logo Kõrgus","logoWidth":"Logo Laius","language":"Keel","backgroundCSS":"Tausta CSS","buttonColor":"Nupu värv","buttonTextColor":"Nupu teksti värv","headerColor":"Päise värv","headerTextColor":"Päise teksti värv","twitterAccount":"Twitteri konto","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Jaluse kood","extraCode":"Ekstra kood","extraCSS":"Ekstra CSS","emailFooter":"Emaili jalus","notes":"Märkmed","debug":"Silumisrežiim","fontUrl":"Font URL","fontFamily":"Font Family","authMethods":"Autentimise meetodid","faviconUrl":"Favicon URL","mailURL":"MailURL","postsLayout":"Postituste asetus","siteImage":"Saidi Pilt","accentColor":"Rõhutamise Värv","accentContrastColor":"Rõhutamise Kontrastne Värv","secondaryColor":"Sekundaarne Värv","secondaryContrastColor":"Sekundaarne Kontrastne Värv","postViews":"Postituse Vaatamisi","navLayout":"Navigatsiooni asetus","mailUrl":"Mail URL","general":"Üldine","invites":"Kutsed","scoring":"Skoor","logo":"Logo","extras":"Lisad","colors":"Värvid","integrations":"Integratsioonid"});
TAPi18n._registerServerTranslator("et", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["fr"])) {                                                                      // 8
  TAPi18n.translations["fr"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["fr"][namespace])) {                                                           // 12
  TAPi18n.translations["fr"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["fr"][namespace], {"settings_saved":"Paramètres sauvegardés","title":"Titre","description":"Description","siteUrl":"URL du site","tagline":"Slogan","requireViewInvite":"Consultation restreinte","requirePostInvite":"Participation restreinte","requirePostsApproval":"Modération obligatoire","defaultEmail":"Email par défaut","scoreUpdateInterval":"Fréquence de mise à jour du score","defaultView":"Vue par défaut","postInterval":"Interval des posts","commentInterval":"Interval des commentaires","maxPostsPerDay":"Max posts par jour","startInvitesCount":"Nombre d'invitations de départ","postsPerPage":"Posts par page","logoUrl":"URL du logo","logoHeight":"Hauteur du logo","logoWidth":"Largeur du logo","language":"Langue","backgroundCSS":"CSS de fond","buttonColor":"Couleur des boutons","buttonTextColor":"Couleur du texte des boutons","headerColor":"Couleur de l'entête","headerTextColor":"Couleur du texte de l'entête","twitterAccount":"Compte Twitter","googleAnalyticsId":"ID Google Analytics","mixpanelId":"ID Mixpanel","clickyId":"ID Clicky","footerCode":"Code du pied de page","extraCode":"Code en plus","extraCSS":"CSS supplémentaire","emailFooter":"Pied de page des mails","notes":"Notes","debug":"Mode Debug","fontUrl":"URL de font","fontFamily":"Famille de font","authMethods":"Méthode d'authentification","faviconUrl":"URL de la favicon","mailURL":"URL du mail","postsLayout":"Disposition des posts","siteImage":"Image du site","accentColor":"Couleur des accents","accentContrastColor":"Couleur du contraste des accents","secondaryColor":"Couleur secondaire","secondaryContrastColor":"Couleur de contraste secondaire","postViews":"Nombre de vues","navLayout":"Disposition de la navigation ","mailUrl":"URL du mail","general":"Général","invites":"Invitations","scoring":"Calcul du score","logo":"Logo","extras":"Extras","colors":"Couleurs","integrations":"Intégrations"});
TAPi18n._registerServerTranslator("fr", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["hu"])) {                                                                      // 8
  TAPi18n.translations["hu"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["hu"][namespace])) {                                                           // 12
  TAPi18n.translations["hu"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["hu"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("hu", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["id"])) {                                                                      // 8
  TAPi18n.translations["id"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["id"][namespace])) {                                                           // 12
  TAPi18n.translations["id"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["id"][namespace], {"settings_saved":"Pengaturan tersimpan","title":"Judul","description":"Deskripsi","siteUrl":"URL situs","tagline":"Tagline","requireViewInvite":"Memerlukan Undangan untuk Melihat","requirePostInvite":"Memerlukan Undangan untuk Memposting","requirePostsApproval":"Memerlukan Persetujuan untuk Postingan Baru ","defaultEmail":"Email Default","scoreUpdateInterval":"Interval Pembaharuan Skor","defaultView":"Tampilan Default","postInterval":"Interval Posting","commentInterval":"Interval Komentar","maxPostsPerDay":"Maksimal Posting per Hari","startInvitesCount":"Hitungan Memulai Undangan","postsPerPage":"Postingan per Halaman","logoUrl":"URL Logo","logoHeight":"Tinggi Logo","logoWidth":"Lebar Logo","language":"Bahasa","backgroundCSS":"Background CSS","buttonColor":"Warna Tombol","buttonTextColor":"Warna Tombol Tulisan","headerColor":"Warna Header","headerTextColor":"Warna Tulisan Header","twitterAccount":"Akun Twitter","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Kode Footer","extraCode":"Kode tambahan","extraCSS":"Kode CSS Tambahan","emailFooter":"Email Footer","notes":"Catatan","debug":"Modus Debug","fontUrl":"URL Font","fontFamily":"Font Family","authMethods":"Metode otentikasi","faviconUrl":"URL Favicon","mailURL":"MailURL","postsLayout":"Tata Letak Postingan","siteImage":"Gambar Situs","accentColor":"Warna Aksen","accentContrastColor":"Warna Kontras Aksen","secondaryColor":"Warna Sekunder","secondaryContrastColor":"Warna Kontras Sekunder Aksen","postViews":"Tampilan Postingan","navLayout":"Tata Letak Navigasi","mailUrl":"URL Mail","general":"Umum","invites":"Undangan","scoring":"Aturan skor","logo":"Logo","extras":"Ekstra","colors":"Warna","integrations":"Integrasi"});
TAPi18n._registerServerTranslator("id", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["it"])) {                                                                      // 8
  TAPi18n.translations["it"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["it"][namespace])) {                                                           // 12
  TAPi18n.translations["it"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["it"][namespace], {"settings_saved":"Impostazioni salvate","title":"Titolo","description":"Descrizione","siteUrl":"URL del Sito","requireViewInvite":"Richiedi un Invito per Visualizzare","requirePostInvite":"Richiedi un Invito per Inviare","requirePostsApproval":"Richiedi l'approvazione per i post","defaultEmail":"Email predefinita","startInvitesCount":"Numero iniziale di inviti","postsPerPage":"Post per Pagina","logoUrl":"URL del Logo","logoHeight":"Altezza del Logo","logoWidth":"Larghezza del Logo","language":"Lingua","buttonColor":"Colore Pulsante","buttonTextColor":"Colore Testo Pulsante","headerColor":"Colore Intestazione","headerTextColor":"Colore Testo Intestazione","twitterAccount":"Account Twitter","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","notes":"Note","fontUrl":"URL Carattere","fontFamily":"Famiglia Carattere","authMethods":"Metodi di Autenticazione","siteImage":"Immagine del Sito","general":"Generico","invites":"Inviti","scoring":"Punteggio","logo":"Logo","extras":"Extra","colors":"Colori","integrations":"Integrazioni"});
TAPi18n._registerServerTranslator("it", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ja"])) {                                                                      // 8
  TAPi18n.translations["ja"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ja"][namespace])) {                                                           // 12
  TAPi18n.translations["ja"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ja"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("ja", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["kk"])) {                                                                      // 8
  TAPi18n.translations["kk"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["kk"][namespace])) {                                                           // 12
  TAPi18n.translations["kk"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["kk"][namespace], {});                                                                 // 16
TAPi18n._registerServerTranslator("kk", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ko"])) {                                                                      // 8
  TAPi18n.translations["ko"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ko"][namespace])) {                                                           // 12
  TAPi18n.translations["ko"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ko"][namespace], {"title":"제목","siteUrl":"사이트 URL","tagline":"태그 라인","defaultEmail":"기본 이메일","logoUrl":"로고 URL","logoHeight":"로고 세로길이","logoWidth":"로고 가로길이","language":"언어","fontUrl":"폰트 URL","fontFamily":"폰트 (Font Family)","faviconUrl":"파비콘 URL","mailURL":"메일주소(URL)","logo":"로고"});
TAPi18n._registerServerTranslator("ko", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["nl"])) {                                                                      // 8
  TAPi18n.translations["nl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["nl"][namespace])) {                                                           // 12
  TAPi18n.translations["nl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["nl"][namespace], {"title":"Titel","description":"Beschrijving","siteUrl":"Website adres","tagline":"Onderschrift","requireViewInvite":"Uitnodiging verplicht om te lezen","requirePostInvite":"Uitnodiging verplicht om te plaatsen","requirePostsApproval":"Goedkeuring nieuwe artikel","defaultEmail":"Standaard Email","scoreUpdateInterval":"Score verversen interval","defaultView":"Normale weergave","postInterval":"Artikel interval","commentInterval":"Reacties interval","maxPostsPerDay":"Max. artikelen per dag","startInvitesCount":"Begin aantal uitnodigingen","postsPerPage":"Artikelen per pagina","logoUrl":"Logo URL","logoHeight":"Logo hoogte","logoWidth":"Logo breedte","language":"Taal","backgroundCSS":"Achtergrond CSS","buttonColor":"Knop kleur","buttonTextColor":"Knop tekst kleur","headerColor":"Kop kleur","headerTextColor":"Kop tekst kleur","twitterAccount":"Twitter account","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Footer code","extraCode":"Extra code","emailFooter":"Email footer","notes":"Notities","debug":"Debug modus","fontUrl":"Lettertype URL","fontFamily":"Lettertype familie","authMethods":"Authenticatie methoden","faviconUrl":"Favicon URL","mailURL":"Mail URL","postsLayout":"Artikelen weergave","general":"Algemeen","invites":"Uitnodigingen","scoring":"Score","logo":"Logo","extras":"Extras","colors":"Kleuren","integrations":"Integraties"});
TAPi18n._registerServerTranslator("nl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["pl"])) {                                                                      // 8
  TAPi18n.translations["pl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["pl"][namespace])) {                                                           // 12
  TAPi18n.translations["pl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["pl"][namespace], {"title":"Tytuł","siteUrl":"URL strony","tagline":"Podtytuł","requireViewInvite":"Wymagaj zaproszenia żeby przeglądać","requirePostInvite":"Wymagaj zaproszenia żeby pisać","requirePostsApproval":"Zatwierdzanie nowych postów","defaultEmail":"Standardowy Email","scoreUpdateInterval":"Częstotliwość przeliczania punktów","defaultView":"Standardowy widok","postInterval":"Interwał czasowy dla nowych postów","commentInterval":"Interwał czasowy dla nowych komentarzy","maxPostsPerDay":"Maksymalna liczba postów w jednym dniu","startInvitesCount":"Licznik zaproszeń","postsPerPage":"Postów na stronę","logoUrl":"URL Logo","logoHeight":"Wysokość Logo","logoWidth":"Szerokość Logo","language":"Język","backgroundCSS":"Tło CSS","buttonColor":"Kolor przycisków","buttonTextColor":"Kolor tekstu na przyciskach","headerColor":"Kolor dla nagłówka","headerTextColor":"Kolor tekstu dla nagłówka","twitterAccount":"Konto Twitter","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Kod w stopce","extraCode":"Dodatkowy kod","emailFooter":"Stopka Email","notes":"Notatki","debug":"Debug Mode","general":"Główne","invites":"Zaproszenia","scoring":"Scoring","logo":"Logo","extras":"Extras","colors":"Kolory","integrations":"Integracje"});
TAPi18n._registerServerTranslator("pl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["pt-BR"])) {                                                                   // 8
  TAPi18n.translations["pt-BR"] = {};                                                                                // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["pt-BR"][namespace])) {                                                        // 12
  TAPi18n.translations["pt-BR"][namespace] = {};                                                                     // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["pt-BR"][namespace], {"title":"Título","description":"Descrição","siteUrl":"URL do site","tagline":"Tagline","requireViewInvite":"Exigir Convite para Ver","requirePostInvite":"Exigir Convite para Postar","requirePostsApproval":"Exigir Postagens serem Aprovadas","defaultEmail":"Email Padrão","scoreUpdateInterval":"Definir Intervalo de Atualização","defaultView":"Visão Padrão","postInterval":"Intervalo de Postagens","commentInterval":"Intervalo de Comentários","maxPostsPerDay":"Máx de Postagens Por Dia","startInvitesCount":"Número Inicial de Convites","postsPerPage":"Postagens Por Página","logoUrl":"URL do Logo","logoHeight":"Altura do Logo","logoWidth":"Comprimento do Logo","language":"Linguagem","backgroundCSS":"Background CSS","buttonColor":"Cor do Botão","buttonTextColor":"Cor do Texto do Botão","headerColor":"Cor do Cabeçalho","headerTextColor":"Cor do Texto do Cabeçalho","twitterAccount":"Conta do Twitter","googleAnalyticsId":"ID do Google Analytics","mixpanelId":"ID do Mixpanel","clickyId":"ID do Clicky","footerCode":"Código para o Rodapé","extraCode":"Código Extra","emailFooter":"Rodapé do Email","notes":"Notas","debug":"Modo de Debug","fontUrl":"URL da Fonte","fontFamily":"Família da Fonte","authMethods":"Métodos de Autenticação","faviconUrl":"URL do Favicon","mailURL":"MailURL","postsLayout":"Layout dos Posts","general":"Geral","invites":"Convites","scoring":"Classificação","logo":"Logo","extras":"Extras","colors":"Cores","integrations":"Integrações"});
TAPi18n._registerServerTranslator("pt-BR", namespace);                                                               // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ro"])) {                                                                      // 8
  TAPi18n.translations["ro"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ro"][namespace])) {                                                           // 12
  TAPi18n.translations["ro"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ro"][namespace], {"title":"Titlu","invites":"Invitații trimise"});                    // 16
TAPi18n._registerServerTranslator("ro", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["ru"])) {                                                                      // 8
  TAPi18n.translations["ru"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["ru"][namespace])) {                                                           // 12
  TAPi18n.translations["ru"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["ru"][namespace], {"title":"Название","siteUrl":"URL сайта","tagline":"Теги","requireViewInvite":"Требуется инвайт для Вида","requirePostInvite":"Требуется инвайт для поста","requirePostsApproval":"Нужно утвердить посты","defaultEmail":"Email по-умолчанию","scoreUpdateInterval":"Интервал обновления очков","defaultView":"Вид по-умолчанию","postInterval":"Интервал между постами","commentInterval":"Интервал между комментариями","maxPostsPerDay":"Максимум постов за день","startInvitesCount":"Приглашает к старту счёта","postsPerPage":"Постов на странице","logoUrl":"URL лого","logoHeight":"Высота лого","logoWidth":"Ширина лого","language":"Язык","backgroundCSS":"CSS фона","buttonColor":"Цвет кнопок","buttonTextColor":"Цвет текста кнопок","headerColor":"Цвет заголовка","headerTextColor":"Цвет текста заголовка","twitterAccount":"Twitter аккаунт","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Код футера","extraCode":"Дополнительный код","emailFooter":"Email футер","notes":"Замечания","debug":"Режим отладки","general":"Главная","invites":"Инвайты","scoring":"Очки","logo":"Лого","extras":"Дополнения","colors":"Цвета","integrations":"Интеграции"});
TAPi18n._registerServerTranslator("ru", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["sl"])) {                                                                      // 8
  TAPi18n.translations["sl"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["sl"][namespace])) {                                                           // 12
  TAPi18n.translations["sl"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["sl"][namespace], {"settings_saved":"Nastavitve so shranjene","title":"Naslov","description":"Opis","siteUrl":"URL Spletne Strani","tagline":"Naslovno geslo","requireViewInvite":"Zahtevaj Vabilo za Ogled","requirePostInvite":"Zahtevajo Vabilo na Objavo","requirePostsApproval":"Zahtevaj Potrdilo Objave","defaultEmail":"Privzeti Email","scoreUpdateInterval":"Interval Posodobitve Števila Glasov","defaultView":"Privzeti Pogled","postInterval":"Interval Objav","commentInterval":"Interval Komentarjev","maxPostsPerDay":"Max Prispevkov na Dan","startInvitesCount":"Začetno Stanje Vabil","postsPerPage":"Objav na Stran","logoUrl":"URL Logotipa","logoHeight":"Višina Logotipa","logoWidth":"Širina Logotipa","language":"Jezik","backgroundCSS":"CSS Ozadja","buttonColor":"Barva Gumbov","buttonTextColor":"Barva Besedila na Gumbih","headerColor":"Barva Glave","headerTextColor":"Barva Besedila v Glavi","twitterAccount":"Twitter Račun","googleAnalyticsId":"Google Analytics ID","mixpanelId":"Mixpanel ID","clickyId":"Clicky ID","footerCode":"Koda v Nogi","extraCode":"Dodatna Koda","extraCSS":"Dodaten CSS","emailFooter":"Noga Emaila","notes":"Opombe","debug":"Debug Način","fontUrl":"URL Pisave","fontFamily":"Družina Pisave","authMethods":"Metode Preverjanja Pristnosti","faviconUrl":"Favicon URL","mailURL":"MailURL","postsLayout":"Razporeditev Objav","siteImage":"Slika Strani","accentColor":"Barva poudarkov","accentContrastColor":"Kontrast barve poudarkov","secondaryColor":"Sekundarna barva","secondaryContrastColor":"Kontrast senkundarne barve","postViews":"Pregledi objav","navLayout":"Postavitev navigacije","mailUrl":"URL Pošte","general":"Splošno","invites":"Vabila","scoring":"Točkovanje","logo":"Logo","extras":"Dodatno","colors":"Barve","integrations":"Integracije"});
TAPi18n._registerServerTranslator("sl", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["sv"])) {                                                                      // 8
  TAPi18n.translations["sv"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["sv"][namespace])) {                                                           // 12
  TAPi18n.translations["sv"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["sv"][namespace], {"settings_saved":"Inställningar sparade","title":"Titel","description":"Beskrivning","siteUrl":"Webbadress","tagline":"Tagline","requireViewInvite":"Kräv inbjudning för att visa","requirePostInvite":"Kräv inbjudan för att göra inlägg","requirePostsApproval":"Kräv att inlägg granskas","defaultEmail":"Standard E-post","scoreUpdateInterval":"Uppdateringsintervall för poäng","defaultView":"Standardvy","postInterval":"Inläggsintervall","commentInterval":"Kommentarsintervall","maxPostsPerDay":"Max inlägg per dag","startInvitesCount":"Antal inbjudningar från början","postsPerPage":"Inlägg per sida","logoUrl":"Logga-adress","logoHeight":"Loggahöjd","logoWidth":"Loggabredd","language":"Språk","backgroundCSS":"Bakgrounds-CSS","buttonColor":"Knappfärg","buttonTextColor":"Knapptextfärg","headerColor":"Titelbakgrundsfärg","headerTextColor":"Titeltextfärg","twitterAccount":"Twitter-konto","googleAnalyticsId":"Google Analytics-ID","mixpanelId":"Mixpanel-ID","clickyId":"Clicky-ID","footerCode":"Sidfotskod","extraCode":"Extrakod","extraCSS":"Extra CSS","emailFooter":"E-post-sidfot","notes":"Anteckningar","debug":"Debugläge","fontUrl":"Teckensnittsadress","fontFamily":"Teckensnitt","authMethods":"Autentiseringsmetoder","faviconUrl":"Favicon-webbadress","mailURL":"MailURL","postsLayout":"Inläggslayout","siteImage":"Site-bild","accentColor":"Accentfärg","accentContrastColor":"Accentkontrastfärg","secondaryColor":"Sekundär färg","secondaryContrastColor":"Sekundär kontrastfärg","postViews":"Inläggsvisningar","navLayout":"Navigeringslayout","mailUrl":"E-postadress","general":"Allmänt","invites":"Inbjudningar","scoring":"Poängsättning","logo":"Logga","extras":"Extra","colors":"Färger","integrations":"Integrationer"});
TAPi18n._registerServerTranslator("sv", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["th"])) {                                                                      // 8
  TAPi18n.translations["th"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["th"][namespace])) {                                                           // 12
  TAPi18n.translations["th"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["th"][namespace], {"title":"ชื่อเรื่อง"});                                             // 16
TAPi18n._registerServerTranslator("th", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["tr"])) {                                                                      // 8
  TAPi18n.translations["tr"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["tr"][namespace])) {                                                           // 12
  TAPi18n.translations["tr"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["tr"][namespace], {"title":"Başlık","defaultView":"Varsayılan Görüntü","postInterval":"Gönderi Aralığı","commentInterval":"Yorum Aralığı\n","maxPostsPerDay":"Maksimum Günlük Ortalama","postsPerPage":"Sayfa Başına Mesaj","language":"Dil","backgroundCSS":"Arkaplan CSS","buttonColor":"Buton Renkleri\n","buttonTextColor":"Buton Metin Rengi\n","twitterAccount":"Twitter Hesabı","googleAnalyticsId":"Google Analytics Kimliği","invites":"Davetiyeler"});
TAPi18n._registerServerTranslator("tr", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["vi"])) {                                                                      // 8
  TAPi18n.translations["vi"] = {};                                                                                   // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["vi"][namespace])) {                                                           // 12
  TAPi18n.translations["vi"][namespace] = {};                                                                        // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["vi"][namespace], {"title":"Tiêu đề","siteUrl":"Địa chỉ URL","invites":"Mời"});        // 16
TAPi18n._registerServerTranslator("vi", namespace);                                                                  // 17
                                                                                                                     // 18
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
if(_.isUndefined(TAPi18n.translations["zh-CN"])) {                                                                   // 8
  TAPi18n.translations["zh-CN"] = {};                                                                                // 9
}                                                                                                                    // 10
                                                                                                                     // 11
if(_.isUndefined(TAPi18n.translations["zh-CN"][namespace])) {                                                        // 12
  TAPi18n.translations["zh-CN"][namespace] = {};                                                                     // 13
}                                                                                                                    // 14
                                                                                                                     // 15
_.extend(TAPi18n.translations["zh-CN"][namespace], {"title":"标题","invites":"邀请"});                                   // 16
TAPi18n._registerServerTranslator("zh-CN", namespace);                                                               // 17
                                                                                                                     // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['telescope:settings'] = {
  Settings: Settings
};

})();

//# sourceMappingURL=telescope_settings.js.map
